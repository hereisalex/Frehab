-- Add sobriety_start_date column to profiles table if it doesn't already exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'profiles'
      AND column_name = 'sobriety_start_date'
  ) THEN
    ALTER TABLE profiles 
    ADD COLUMN sobriety_start_date DATE;
  END IF;
END $$;

-- Add comment to document the column (safe if column exists)
COMMENT ON COLUMN profiles.sobriety_start_date IS 'The date when the user started their sobriety journey';