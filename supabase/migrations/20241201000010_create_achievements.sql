-- Achievements schema (idempotent)

-- achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  criteria JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- user_achievements table
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  achievement_id UUID NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);

-- Indexes
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_user_achievements_user' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_user_achievements_user ON user_achievements(user_id);
  END IF;
END $$;

-- RLS policies for user_achievements
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_achievements' AND policyname = 'Users select own achievements'
  ) THEN
    CREATE POLICY "Users select own achievements" ON user_achievements
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_achievements' AND policyname = 'Users insert own achievements'
  ) THEN
    CREATE POLICY "Users insert own achievements" ON user_achievements
      FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

-- Seed base achievements (idempotent)
INSERT INTO achievements (key, title, description, icon, criteria) VALUES
  ('first_checkin', 'First Check-in', 'Logged your first daily check-in', 'sparkles', '{"type":"checkin","count":1}'),
  ('streak_3', '3-Day Streak', 'Checked in 3 days in a row', 'fire', '{"type":"streak","days":3}'),
  ('streak_7', '7-Day Streak', 'Checked in 7 days in a row', 'fire', '{"type":"streak","days":7}'),
  ('streak_30', '30-Day Streak', 'Checked in 30 days in a row', 'flame', '{"type":"streak","days":30}'),
  ('module3_game_complete', 'Values→Habits Game', 'Completed the Module 3 Identity Habits game', 'gamepad', '{"type":"game","module":3}'),
  ('module3_game_perfect', 'Habit Architect', 'Achieved a perfect score in the Module 3 game', 'trophy', '{"type":"game","module":3,"perfect":true}'),
  ('module4_plan_created', 'Coping Plan Ready', 'Created your Module 4 Trigger & Coping Plan', 'shield', '{"type":"project","module":4}')
ON CONFLICT (key) DO NOTHING;

-- Helper: get achievement id by key
CREATE OR REPLACE FUNCTION get_achievement_id(a_key TEXT) RETURNS UUID LANGUAGE sql AS $$
  SELECT id FROM achievements WHERE key = a_key
$$;

-- Award achievements for check-in (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION award_achievements_for_checkin(p_user UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _streak INTEGER;
  _ach_id UUID;
BEGIN
  -- first_checkin
  _ach_id := get_achievement_id('first_checkin');
  IF _ach_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM user_achievements WHERE user_id = p_user AND achievement_id = _ach_id
  ) THEN
    IF EXISTS (SELECT 1 FROM daily_checkins WHERE user_id = p_user) THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  -- streak thresholds
  SELECT calculate_current_streak(p_user) INTO _streak;
  IF _streak IS NULL THEN _streak := 0; END IF;

  IF _streak >= 3 THEN
    _ach_id := get_achievement_id('streak_3');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _streak >= 7 THEN
    _ach_id := get_achievement_id('streak_7');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;

  IF _streak >= 30 THEN
    _ach_id := get_achievement_id('streak_30');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

-- Award achievements for Module 3 game (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION award_achievements_for_module3_game(p_user UUID, p_score INT, p_total INT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
BEGIN
  _ach_id := get_achievement_id('module3_game_complete');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;

  IF p_total IS NOT NULL AND p_total > 0 AND p_score = p_total THEN
    _ach_id := get_achievement_id('module3_game_perfect');
    IF _ach_id IS NOT NULL THEN
      INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
END;
$$;

-- Award achievements for Module 4 project (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION award_achievements_for_module4_plan(p_user UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ach_id UUID;
BEGIN
  _ach_id := get_achievement_id('module4_plan_created');
  IF _ach_id IS NOT NULL THEN
    INSERT INTO user_achievements(user_id, achievement_id) VALUES (p_user, _ach_id)
    ON CONFLICT DO NOTHING;
  END IF;
END;
$$;

-- Grants
GRANT EXECUTE ON FUNCTION award_achievements_for_checkin(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION award_achievements_for_module3_game(UUID, INT, INT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION award_achievements_for_module4_plan(UUID) TO anon, authenticated;
