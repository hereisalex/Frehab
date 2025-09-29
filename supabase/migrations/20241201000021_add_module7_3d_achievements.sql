-- Achievements for Module 7 3D game + RPC

-- Seed achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module7_3d_complete', 'Network Navigator', 'Completed the Module 7 Support Network 3D game', 'gamepad', '{"type":"game","module":7,"mode":"3d"}'),
  ('module7_3d_streak_10', 'Connector Streak', 'Reached a 10+ ally connection streak', 'link', '{"type":"game","module":7,"streak":10}'),
  ('module7_3d_no_drains', 'Energy Guardian', 'Completed a run without hitting any drains', 'shield', '{"type":"game","module":7,"no_drains":true}'),
  ('module7_3d_connections_20', 'Community Builder Pro', 'Connected with 20+ allies', 'users', '{"type":"game","module":7,"connections":20}')
ON CONFLICT (key) DO NOTHING;

-- RPC: award achievements for Module 7 Support Network 3D
CREATE OR REPLACE FUNCTION award_achievements_for_module7_3d(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _data JSONB;
  _connections INT;
  _drains INT;
  _streak INT;
BEGIN
  SELECT content->'result' INTO _data
  FROM journal_entries
  WHERE user_id = p_user
    AND module_number = 7
    AND content->>'type' = 'module7_support_network_3d'
  ORDER BY created_at DESC
  LIMIT 1;

  IF _data IS NULL THEN
    RETURN;
  END IF;

  _connections := COALESCE((_data->>'connections')::INT, 0);
  _drains := COALESCE((_data->>'drainsHit')::INT, 0);
  _streak := COALESCE((_data->>'bestStreak')::INT, 0);

  _ach_id := get_achievement_id('module7_3d_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  IF _streak >= 10 THEN
    _ach_id := get_achievement_id('module7_3d_streak_10');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _drains = 0 THEN
    _ach_id := get_achievement_id('module7_3d_no_drains');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _connections >= 20 THEN
    _ach_id := get_achievement_id('module7_3d_connections_20');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION award_achievements_for_module7_3d(UUID, INT) TO anon, authenticated;


