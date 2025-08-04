-- Add custom goal description column to profiles table
ALTER TABLE profiles 
ADD COLUMN goal_custom_description TEXT;

-- Add comment to document the column
COMMENT ON COLUMN profiles.goal_custom_description IS 'The custom goal description for users who choose custom goal type';

-- Create daily_checkins table
CREATE TABLE daily_checkins (
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
CREATE INDEX idx_daily_checkins_user_id ON daily_checkins(user_id);
CREATE INDEX idx_daily_checkins_date ON daily_checkins(checkin_date);
CREATE INDEX idx_daily_checkins_user_date ON daily_checkins(user_id, checkin_date);

-- Create a function to calculate current streak
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