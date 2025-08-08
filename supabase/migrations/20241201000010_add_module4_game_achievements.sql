-- Add Module 4 game achievements and RPC function

-- Add new achievements for Module 4 game
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module4_game_complete', 'Urge Surf Runner', 'Completed the Module 4 Relapse Prevention game', 'gamepad', '{"type":"game","module":4}'),
  ('module4_game_master', 'Trigger Master', 'Achieved a high score in the Module 4 game (15+ points)', 'trophy', '{"type":"game","module":4,"score_threshold":15}'),
  ('module4_game_perfect', 'Relapse Prevention Expert', 'Achieved a perfect score in the Module 4 game (25+ points)', 'crown', '{"type":"game","module":4,"score_threshold":25}'),
  ('module4_no_triggers', 'Trigger Dodger', 'Completed Module 4 game without hitting any triggers', 'shield', '{"type":"game","module":4,"no_triggers":true}'),
  ('module4_coping_collector', 'Coping Tool Collector', 'Collected 10+ coping tools in the Module 4 game', 'gem', '{"type":"game","module":4,"coping_threshold":10}')
ON CONFLICT (key) DO NOTHING;

-- Award achievements for Module 4 game (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION award_achievements_for_module4_game(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _game_data JSONB;
  _hits INTEGER;
  _collected INTEGER;
BEGIN
  -- Get the most recent Module 4 game result for this user
  SELECT content->'result' INTO _game_data
  FROM journal_entries 
  WHERE user_id = p_user 
    AND module_number = 4 
    AND content->>'type' = 'module4_relapse_runner'
  ORDER BY created_at DESC 
  LIMIT 1;

  IF _game_data IS NULL THEN
    RETURN; -- No game data found
  END IF;

  -- Extract game stats
  _hits := COALESCE((_game_data->>'hits')::INTEGER, 0);
  _collected := COALESCE((_game_data->>'collected')::INTEGER, 0);

  -- module4_game_complete (always awarded for completing the game)
  _ach_id := get_achievement_id('module4_game_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  -- module4_game_master (15+ points)
  IF p_score >= 15 THEN
    _ach_id := get_achievement_id('module4_game_master');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- module4_game_perfect (25+ points)
  IF p_score >= 25 THEN
    _ach_id := get_achievement_id('module4_game_perfect');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- module4_no_triggers (no triggers hit)
  IF _hits = 0 THEN
    _ach_id := get_achievement_id('module4_no_triggers');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- module4_coping_collector (10+ coping tools collected)
  IF _collected >= 10 THEN
    _ach_id := get_achievement_id('module4_coping_collector');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION award_achievements_for_module4_game(UUID, INT) TO anon, authenticated;
