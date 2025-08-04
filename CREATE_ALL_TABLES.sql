-- =====================================================
-- COMPREHENSIVE DATABASE SETUP FOR FREHAB
-- Run this in your Supabase SQL Editor
-- =====================================================

-- 1. Create profiles table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comments to document the table
COMMENT ON TABLE profiles IS 'User profiles for the Frehab application';
COMMENT ON COLUMN profiles.id IS 'Unique identifier for the user profile';
COMMENT ON COLUMN profiles.email IS 'User email address (unique)';
COMMENT ON COLUMN profiles.full_name IS 'User full name';
COMMENT ON COLUMN profiles.avatar_url IS 'URL to user avatar image';

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at);

-- 2. Add goal tracking columns to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS goal_type TEXT DEFAULT 'none',
ADD COLUMN IF NOT EXISTS goal_start_date DATE,
ADD COLUMN IF NOT EXISTS goal_custom_description TEXT,
ADD COLUMN IF NOT EXISTS sobriety_start_date DATE;

-- Add comments to document the columns
COMMENT ON COLUMN profiles.goal_type IS 'The type of recovery goal: abstinence, moderation, custom, or none';
COMMENT ON COLUMN profiles.goal_start_date IS 'The start date for tracking the user''s recovery goal';
COMMENT ON COLUMN profiles.goal_custom_description IS 'The custom goal description for users who choose custom goal type';
COMMENT ON COLUMN profiles.sobriety_start_date IS 'The date when the user started their sobriety journey';

-- Create an index for better query performance
CREATE INDEX IF NOT EXISTS idx_profiles_goal_type ON profiles(goal_type);

-- Add a check constraint to ensure valid goal types
ALTER TABLE profiles 
DROP CONSTRAINT IF EXISTS check_goal_type;

ALTER TABLE profiles 
ADD CONSTRAINT check_goal_type 
CHECK (goal_type IN ('abstinence', 'moderation', 'custom', 'none'));

-- 3. Create daily_checkins table
CREATE TABLE IF NOT EXISTS daily_checkins (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    checkin_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, checkin_date)
);

-- Add comments to document the table
COMMENT ON TABLE daily_checkins IS 'Daily check-in records for custom goal tracking';
COMMENT ON COLUMN daily_checkins.user_id IS 'Reference to the user profile';
COMMENT ON COLUMN daily_checkins.checkin_date IS 'The date of the check-in';

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_daily_checkins_user_id ON daily_checkins(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_checkins_date ON daily_checkins(checkin_date);
CREATE INDEX IF NOT EXISTS idx_daily_checkins_user_date ON daily_checkins(user_id, checkin_date);

-- 4. Create a function to calculate current streak
CREATE OR REPLACE FUNCTION calculate_current_streak(user_uuid UUID)
RETURNS INTEGER AS $$
DECLARE
    streak_count INTEGER := 0;
    current_date DATE := CURRENT_DATE;
    check_date DATE;
BEGIN
    -- Start from today and work backwards
    check_date := current_date;
    
    -- Count consecutive days backwards from today
    WHILE EXISTS (
        SELECT 1 FROM daily_checkins 
        WHERE user_id = user_uuid 
        AND checkin_date = check_date
    ) LOOP
        streak_count := streak_count + 1;
        check_date := check_date - INTERVAL '1 day';
    END LOOP;
    
    RETURN streak_count;
END;
$$ LANGUAGE plpgsql;

-- Add comment to document the function
COMMENT ON FUNCTION calculate_current_streak(UUID) IS 'Calculates the current consecutive day streak for a user';

-- 5. Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 6. Create triggers to automatically update updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at 
    BEFORE UPDATE ON profiles 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 7. Insert sample data for testing (optional)
-- Uncomment the lines below if you want to add sample data

/*
INSERT INTO profiles (email, full_name, goal_type, sobriety_start_date) VALUES
('test@example.com', 'Test User', 'abstinence', CURRENT_DATE - INTERVAL '30 days')
ON CONFLICT (email) DO NOTHING;

-- Add some sample check-ins for the test user
INSERT INTO daily_checkins (user_id, checkin_date)
SELECT 
    p.id,
    CURRENT_DATE - (i || ' days')::INTERVAL
FROM profiles p
CROSS JOIN generate_series(0, 14) i
WHERE p.email = 'test@example.com'
ON CONFLICT (user_id, checkin_date) DO NOTHING;
*/

-- =====================================================
-- VERIFICATION QUERIES (run these to check everything worked)
-- =====================================================

-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'daily_checkins', 'modules')
ORDER BY table_name;

-- Check profiles table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'profiles' 
ORDER BY ordinal_position;

-- Check daily_checkins table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'daily_checkins' 
ORDER BY ordinal_position; 