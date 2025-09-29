-- Achievements for Module 8 game + RPC

-- Seed achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module8_game_complete', 'Future Builder', 'Completed the Module 8 Future Builder activity', 'gamepad', '{"type":"game","module":8}'),
  ('module8_actions_7', 'System Architect', 'Planned 7+ concrete daily actions', 'clipboard', '{"type":"game","module":8,"actions":7}'),
  ('module8_domains_5', 'Well-Rounded', 'Covered 5+ life domains in your plan', 'sparkles', '{"type":"game","module":8,"domains":5}'),
  ('module8_no_skips', 'Relentless Finisher', 'Completed the activity without skipping any step', 'shield', '{"type":"game","module":8,"no_skips":true}')
ON CONFLICT (key) DO NOTHING;

-- RPC: award achievements for Module 8 Future Builder
-- Expects latest journal_entries row for module 8 with content.type = 'module8_future_builder'
-- and content.result json containing: actionsPlanned (int), domainsCovered (int), skippedSteps (int)
CREATE OR REPLACE FUNCTION award_achievements_for_module8_game(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _data JSONB;
  _actions INT;
  _domains INT;
  _skips INT;
BEGIN
  SELECT content->'result' INTO _data
  FROM journal_entries
  WHERE user_id = p_user
    AND module_number = 8
    AND content->>'type' = 'module8_future_builder'
  ORDER BY created_at DESC
  LIMIT 1;

  IF _data IS NULL THEN
    RETURN;
  END IF;

  _actions := COALESCE((_data->>'actionsPlanned')::INT, 0);
  _domains := COALESCE((_data->>'domainsCovered')::INT, 0);
  _skips := COALESCE((_data->>'skippedSteps')::INT, 0);

  -- completion
  _ach_id := get_achievement_id('module8_game_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  -- actions threshold
  IF _actions >= 7 THEN
    _ach_id := get_achievement_id('module8_actions_7');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- domains threshold
  IF _domains >= 5 THEN
    _ach_id := get_achievement_id('module8_domains_5');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- no skips
  IF _skips = 0 THEN
    _ach_id := get_achievement_id('module8_no_skips');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION award_achievements_for_module8_game(UUID, INT) TO anon, authenticated;


