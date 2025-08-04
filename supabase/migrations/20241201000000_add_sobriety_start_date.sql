-- Add sobriety_start_date column to profiles table
ALTER TABLE profiles 
ADD COLUMN sobriety_start_date DATE;

-- Add comment to document the column
COMMENT ON COLUMN profiles.sobriety_start_date IS 'The date when the user started their sobriety journey'; 