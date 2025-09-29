-- Achievements for Module 7 game + RPC

-- Seed achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('module7_game_complete', 'Support Builder', 'Completed the Module 7 Community Builder activity', 'gamepad', '{"type":"game","module":7}'),
  ('module7_invites_3', 'Connector', 'Invited 3+ supporters', 'handshake', '{"type":"game","module":7,"invites":3}'),
  ('module7_plan_ready', 'Plan, Not Panic', 'Saved a concrete support plan with at least 5 specific actions', 'clipboard', '{"type":"game","module":7,"actions":5}'),
  ('module7_no_skips', 'Consistent Communicator', 'Completed the activity without skipping any step', 'shield', '{"type":"game","module":7,"no_skips":true}')
ON CONFLICT (key) DO NOTHING;

-- RPC: award achievements for Module 7 Community Builder
-- Expects the latest journal_entries row for module 7 with content.type = 'module7_community_builder'
-- and content.result json containing: invitesSent (int), actionsPlanned (int), skippedSteps (int)
CREATE OR REPLACE FUNCTION award_achievements_for_module7_game(p_user UUID, p_score INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
  _data JSONB;
  _invites INT;
  _actions INT;
  _skips INT;
BEGIN
  SELECT content->'result' INTO _data
  FROM journal_entries
  WHERE user_id = p_user
    AND module_number = 7
    AND content->>'type' = 'module7_community_builder'
  ORDER BY created_at DESC
  LIMIT 1;

  IF _data IS NULL THEN
    RETURN;
  END IF;

  _invites := COALESCE((_data->>'invitesSent')::INT, 0);
  _actions := COALESCE((_data->>'actionsPlanned')::INT, 0);
  _skips := COALESCE((_data->>'skippedSteps')::INT, 0);

  -- completion
  _ach_id := get_achievement_id('module7_game_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  -- invites threshold
  IF _invites >= 3 THEN
    _ach_id := get_achievement_id('module7_invites_3');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- actions threshold
  IF _actions >= 5 THEN
    _ach_id := get_achievement_id('module7_plan_ready');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- no skips
  IF _skips = 0 THEN
    _ach_id := get_achievement_id('module7_no_skips');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION award_achievements_for_module7_game(UUID, INT) TO anon, authenticated;


