-- Scalability & Performance Enhancements (idempotent)

-- 1) Safety: ensure updated_at helper exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2) Indexes for query performance
-- 2a) GIN index for JSONB search on journal_entries.content
CREATE INDEX IF NOT EXISTS idx_journal_entries_content_gin
  ON journal_entries USING GIN (content jsonb_path_ops);

-- 2b) Speed up per-user recent queries
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_journal_entries_user_created' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_journal_entries_user_created ON journal_entries(user_id, created_at DESC);
  END IF;
END $$;

-- 2c) Ensure composite index exists on daily_checkins (user_id, checkin_date)
-- (duplicate-safe; created earlier in some envs)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_daily_checkins_user_date' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_daily_checkins_user_date ON daily_checkins(user_id, checkin_date);
  END IF;
END $$;

-- 2d) Speed up achievements timeline queries
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_user_achievements_user_earned' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_user_achievements_user_earned ON user_achievements(user_id, earned_at DESC);
  END IF;
END $$;

-- 3) Optional: faster current streak lookups via cached table and triggers
CREATE TABLE IF NOT EXISTS user_streaks (
  user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

COMMENT ON TABLE user_streaks IS 'Cached streak metrics per user to avoid recomputation on read';
COMMENT ON COLUMN user_streaks.current_streak IS 'Consecutive-day streak counting backward from CURRENT_DATE';
COMMENT ON COLUMN user_streaks.longest_streak IS 'Longest historical consecutive-day streak';

-- RLS for user_streaks
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_streaks' AND policyname = 'Users select own streak'
  ) THEN
    CREATE POLICY "Users select own streak" ON user_streaks
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END $$;

-- Updater function to recompute cached streaks for a user (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION recalc_user_streaks(p_user UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _today DATE := CURRENT_DATE;
  _streak INTEGER := 0;
  _check_date DATE := _today;
  _longest INTEGER := 0;
BEGIN
  -- Compute current streak (consecutive days ending at today)
  WHILE EXISTS (
    SELECT 1 FROM daily_checkins
    WHERE user_id = p_user AND checkin_date = _check_date
  ) LOOP
    _streak := _streak + 1;
    _check_date := _check_date - INTERVAL '1 day';
  END LOOP;

  -- Compute longest streak using gaps-and-islands
  SELECT COALESCE(MAX((finish - start) + 1), 0) INTO _longest
  FROM (
    SELECT MIN(checkin_date) AS start, MAX(checkin_date) AS finish
    FROM (
      SELECT checkin_date,
             checkin_date - (ROW_NUMBER() OVER (ORDER BY checkin_date))::INT * INTERVAL '1 day' AS grp
      FROM daily_checkins
      WHERE user_id = p_user
    ) s
    GROUP BY grp
  ) g;

  -- Upsert cached values
  INSERT INTO user_streaks(user_id, current_streak, longest_streak, updated_at)
  VALUES (p_user, _streak, _longest, now())
  ON CONFLICT (user_id)
  DO UPDATE SET current_streak = EXCLUDED.current_streak,
                longest_streak = EXCLUDED.longest_streak,
                updated_at = now();
END;
$$;

-- GRANT EXECUTE ON FUNCTION recalc_user_streaks(UUID) TO anon, authenticated; -- removed: only triggers should call this

-- Trigger wrapper to call recalc on changes to daily_checkins
CREATE OR REPLACE FUNCTION trg_update_user_streaks()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'INSERT') THEN
    PERFORM recalc_user_streaks(NEW.user_id);
  ELSIF (TG_OP = 'DELETE') THEN
    PERFORM recalc_user_streaks(OLD.user_id);
  ELSIF (TG_OP = 'UPDATE') THEN
    IF (NEW.user_id <> OLD.user_id OR NEW.checkin_date <> OLD.checkin_date) THEN
      PERFORM recalc_user_streaks(NEW.user_id);
      IF (NEW.user_id <> OLD.user_id) THEN
        PERFORM recalc_user_streaks(OLD.user_id);
      END IF;
    END IF;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create triggers (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'after_daily_checkins_change_update_streaks'
  ) THEN
    CREATE TRIGGER after_daily_checkins_change_update_streaks
      AFTER INSERT OR UPDATE OR DELETE ON daily_checkins
      FOR EACH ROW EXECUTE FUNCTION trg_update_user_streaks();
  END IF;
END $$;

-- 4) Read-optimized function for current streak
CREATE OR REPLACE FUNCTION get_current_streak_fast(p_user UUID)
RETURNS INTEGER
LANGUAGE sql
AS $$
  SELECT COALESCE((SELECT current_streak FROM user_streaks WHERE user_id = p_user), 0);
$$;

-- 5) Separate user_goals table for schema flexibility
CREATE TABLE IF NOT EXISTS user_goals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  goal_type TEXT NOT NULL CHECK (goal_type IN ('abstinence', 'moderation', 'custom', 'none')),
  goal_description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

COMMENT ON TABLE user_goals IS 'History of user goals to allow changes over time';

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_user_goals_user_active' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_user_goals_user_active ON user_goals(user_id, is_active);
  END IF;
END $$;

-- updated_at trigger
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_user_goals_updated_at'
  ) THEN
    CREATE TRIGGER update_user_goals_updated_at
      BEFORE UPDATE ON user_goals
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- RLS for user_goals
ALTER TABLE user_goals ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_goals' AND policyname = 'Users select own goals'
  ) THEN
    CREATE POLICY "Users select own goals" ON user_goals
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_goals' AND policyname = 'Users insert own goals'
  ) THEN
    CREATE POLICY "Users insert own goals" ON user_goals
      FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_goals' AND policyname = 'Users update own goals'
  ) THEN
    CREATE POLICY "Users update own goals" ON user_goals
      FOR UPDATE USING (auth.uid() = user_id);
  END IF;
END $$;

-- 6) User progress tracking
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  module_number INTEGER NOT NULL,
  lesson_completed BOOLEAN DEFAULT FALSE,
  project_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, module_number)
);

COMMENT ON TABLE user_progress IS 'Per-user per-module completion tracking';

-- indexes
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_user_progress_user_module' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_user_progress_user_module ON user_progress(user_id, module_number);
  END IF;
END $$;

-- updated_at trigger
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_user_progress_updated_at'
  ) THEN
    CREATE TRIGGER update_user_progress_updated_at
      BEFORE UPDATE ON user_progress
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- RLS for user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_progress' AND policyname = 'Users select own progress'
  ) THEN
    CREATE POLICY "Users select own progress" ON user_progress
      FOR SELECT USING (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_progress' AND policyname = 'Users upsert own progress'
  ) THEN
    CREATE POLICY "Users upsert own progress" ON user_progress
      FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'user_progress' AND policyname = 'Users update own progress'
  ) THEN
    CREATE POLICY "Users update own progress" ON user_progress
      FOR UPDATE USING (auth.uid() = user_id);
  END IF;
END $$;

-- 7) Override award_achievements_for_checkin to use cached streaks
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_proc WHERE proname = 'award_achievements_for_checkin'
  ) THEN
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

      -- streak thresholds using cached value
      SELECT get_current_streak_fast(p_user) INTO _streak;
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
  END IF;
END $$;
