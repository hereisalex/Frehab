-- Achievements for Module 8 3D game + RPC

-- Seed achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module8_3d_complete', 'Routine Riser', 'Completed the Module 8 Routine Architect 3D game', 'gamepad', '{"type":"game","module":8,"mode":"3d"}'),
  ('module8_3d_height_15', 'Structure Seeker', 'Built a stack of 15+ blocks', 'building', '{"type":"game","module":8,"height":15}'),
  ('module8_3d_perfect_7', 'Precision Builder', 'Achieved 7+ perfect placements', 'target', '{"type":"game","module":8,"perfects":7}'),
  ('module8_3d_wide_base', 'Solid Foundation', 'Kept base width >= 5.5', 'shield', '{"type":"game","module":8,"baseWidth":5.5}')
ON CONFLICT (key) DO NOTHING;

-- RPC: award achievements for Module 8 Routine Architect 3D
CREATE OR REPLACE FUNCTION award_achievements_for_module8_3d(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _data JSONB;
  _blocks INT;
  _perfects INT;
  _maxWidth NUMERIC;
BEGIN
  SELECT content->'result' INTO _data
  FROM journal_entries
  WHERE user_id = p_user
    AND module_number = 8
    AND content->>'type' = 'module8_routine_architect_3d'
  ORDER BY created_at DESC
  LIMIT 1;

  IF _data IS NULL THEN
    RETURN;
  END IF;

  _blocks := COALESCE((_data->>'blocks')::INT, 0);
  _perfects := COALESCE((_data->>'perfects')::INT, 0);
  _maxWidth := COALESCE((_data->>'maxWidth')::NUMERIC, 0);

  _ach_id := get_achievement_id('module8_3d_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  IF _blocks >= 15 THEN
    _ach_id := get_achievement_id('module8_3d_height_15');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _perfects >= 7 THEN
    _ach_id := get_achievement_id('module8_3d_perfect_7');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _maxWidth >= 5.5 THEN
    _ach_id := get_achievement_id('module8_3d_wide_base');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION award_achievements_for_module8_3d(UUID, INT) TO anon, authenticated;


