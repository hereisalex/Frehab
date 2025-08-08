-- Add goal tracking columns to profiles table if they don't already exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'goal_type'
  ) THEN
    ALTER TABLE profiles ADD COLUMN goal_type TEXT DEFAULT 'none';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'goal_start_date'
  ) THEN
    ALTER TABLE profiles ADD COLUMN goal_start_date DATE;
  END IF;
END $$;

-- Add comments to document the columns
COMMENT ON COLUMN profiles.goal_type IS 'The type of recovery goal: abstinence, moderation, custom, or none';
COMMENT ON COLUMN profiles.goal_start_date IS 'The start date for tracking the user''s recovery goal';

-- Create an index for better query performance (idempotent)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_profiles_goal_type'
      AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_profiles_goal_type ON profiles(goal_type);
  END IF;
END $$;

-- Add a check constraint to ensure valid goal types (idempotent)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'check_goal_type'
  ) THEN
    ALTER TABLE profiles 
    ADD CONSTRAINT check_goal_type 
    CHECK (goal_type IN ('abstinence', 'moderation', 'custom', 'none'));
  END IF;
END $$; 