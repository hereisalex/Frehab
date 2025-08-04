-- Add goal tracking columns to profiles table
ALTER TABLE profiles 
ADD COLUMN goal_type TEXT DEFAULT 'none',
ADD COLUMN goal_start_date DATE;

-- Add comments to document the columns
COMMENT ON COLUMN profiles.goal_type IS 'The type of recovery goal: abstinence, moderation, custom, or none';
COMMENT ON COLUMN profiles.goal_start_date IS 'The start date for tracking the user''s recovery goal';

-- Create an index for better query performance
CREATE INDEX idx_profiles_goal_type ON profiles(goal_type);

-- Add a check constraint to ensure valid goal types
ALTER TABLE profiles 
ADD CONSTRAINT check_goal_type 
CHECK (goal_type IN ('abstinence', 'moderation', 'custom', 'none')); 