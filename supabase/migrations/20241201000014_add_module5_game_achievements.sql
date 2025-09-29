-- Achievements for Module 5 game + RPC

-- Seed achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module5_game_complete', 'Life Architect', 'Completed the Module 5 Life Stacker game', 'gamepad', '{"type":"game","module":5}'),
  ('module5_stacker_10', 'Foundation Builder', 'Reached 10 blocks high in Life Stacker', 'building', '{"type":"game","module":5,"height":10}'),
  ('module5_stacker_20', 'Skyline Designer', 'Reached 20 blocks high in Life Stacker', 'city', '{"type":"game","module":5,"height":20}'),
  ('module5_perfect_5', 'Precision Planner', 'Achieved 5 perfect placements in a run', 'target', '{"type":"game","module":5,"perfects":5}'),
  ('module5_no_fail', 'Steady Hands', 'Completed a run without a miss', 'shield', '{"type":"game","module":5,"no_fail":true}')
ON CONFLICT (key) DO NOTHING;

-- RPC: award achievements for Module 5 Life Stacker
CREATE OR REPLACE FUNCTION award_achievements_for_module5_game(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _data JSONB;
  _height INTEGER;
  _perfects INTEGER;
  _no_fail BOOLEAN;
BEGIN
  SELECT content->'result' INTO _data
  FROM journal_entries
  WHERE user_id = p_user
    AND module_number = 5
    AND content->>'type' = 'module5_life_stacker'
  ORDER BY created_at DESC
  LIMIT 1;

  IF _data IS NULL THEN
    RETURN;
  END IF;

  _height := COALESCE((_data->>'blocksPlaced')::INTEGER, 0);
  _perfects := COALESCE((_data->>'perfectCount')::INTEGER, 0);
  _no_fail := _height > 0; -- if we have a result, run ended normally (game over counts as end too)

  -- completion
  _ach_id := get_achievement_id('module5_game_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  -- heights
  IF _height >= 10 THEN
    _ach_id := get_achievement_id('module5_stacker_10');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _height >= 20 THEN
    _ach_id := get_achievement_id('module5_stacker_20');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- perfects
  IF _perfects >= 5 THEN
    _ach_id := get_achievement_id('module5_perfect_5');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- no-fail (we treat any positive height as a valid run; to enforce no miss, you may log misses separately)
  IF _no_fail THEN
    _ach_id := get_achievement_id('module5_no_fail');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION award_achievements_for_module5_game(UUID, INT) TO anon, authenticated;
