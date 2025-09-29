-- Achievements for Module 6 game + RPC

-- Seed achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module6_game_complete', 'Calm Conductor', 'Completed a BreathFlow session', 'gamepad', '{"type":"game","module":6}'),
  ('module6_accuracy_80', 'Breath Aligner', 'Achieved 80%+ breathing match accuracy', 'target', '{"type":"game","module":6,"accuracy":80}'),
  ('module6_accuracy_95', 'Zen Master', 'Achieved 95%+ breathing match accuracy', 'crown', '{"type":"game","module":6,"accuracy":95}'),
  ('module6_streak_20s', 'Steady Stream', 'Maintained a 20s+ continuous match streak', 'wave', '{"type":"game","module":6,"streakSeconds":20}'),
  ('module6_cycles_10', 'Rhythm Rider', 'Completed 10+ breathing cycles', 'repeat', '{"type":"game","module":6,"cycles":10}')
ON CONFLICT (key) DO NOTHING;

-- RPC: award achievements for Module 6 BreathFlow
CREATE OR REPLACE FUNCTION award_achievements_for_module6_game(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _data JSONB;
  _accuracy INT;
  _best_streak INT;
  _cycles INT;
BEGIN
  SELECT content->'result' INTO _data
  FROM journal_entries
  WHERE user_id = p_user
    AND module_number = 6
    AND content->>'type' = 'module6_breath_flow'
  ORDER BY created_at DESC
  LIMIT 1;

  IF _data IS NULL THEN
    RETURN;
  END IF;

  _accuracy := COALESCE((_data->>'accuracyPercent')::INT, 0);
  _best_streak := COALESCE((_data->>'bestStreakSeconds')::INT, 0);
  _cycles := COALESCE((_data->>'cyclesCompleted')::INT, 0);

  -- completion
  _ach_id := get_achievement_id('module6_game_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  -- accuracy thresholds
  IF _accuracy >= 80 THEN
    _ach_id := get_achievement_id('module6_accuracy_80');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _accuracy >= 95 THEN
    _ach_id := get_achievement_id('module6_accuracy_95');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- streak
  IF _best_streak >= 20 THEN
    _ach_id := get_achievement_id('module6_streak_20s');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- cycles
  IF _cycles >= 10 THEN
    _ach_id := get_achievement_id('module6_cycles_10');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION award_achievements_for_module6_game(UUID, INT) TO anon, authenticated;
