-- Verification migration to ensure all database objects exist
-- This migration is safe to run multiple times and will report any missing objects

DO $$
DECLARE
    missing_objects TEXT[] := ARRAY[]::TEXT[];
    obj_count INTEGER;
BEGIN
    -- Check if all required tables exist
    SELECT COUNT(*) INTO obj_count
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name IN ('profiles', 'modules', 'journal_entries', 'daily_checkins');
    
    IF obj_count < 4 THEN
        missing_objects := array_append(missing_objects, 'Some required tables are missing');
    END IF;
    
    -- Check if all required columns exist in profiles
    SELECT COUNT(*) INTO obj_count
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles'
    AND column_name IN ('id', 'email', 'full_name', 'avatar_url', 'created_at', 'updated_at', 
                       'goal_type', 'goal_start_date', 'goal_custom_description', 'sobriety_start_date');
    
    IF obj_count < 10 THEN
        missing_objects := array_append(missing_objects, 'Some required columns missing from profiles table');
    END IF;
    
    -- Check if all required indexes exist
    SELECT COUNT(*) INTO obj_count
    FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname = 'public'
    AND c.relname IN (
        'idx_profiles_email', 'idx_profiles_created_at', 'idx_profiles_goal_type',
        'idx_modules_module_number', 'idx_modules_created_at', 'idx_modules_content',
        'idx_journal_entries_user_id', 'idx_journal_entries_module_number', 
        'idx_journal_entries_created_at', 'idx_journal_entries_user_module',
        'idx_daily_checkins_user_id', 'idx_daily_checkins_date', 'idx_daily_checkins_user_date'
    );
    
    IF obj_count < 13 THEN
        missing_objects := array_append(missing_objects, 'Some required indexes are missing');
    END IF;
    
    -- Check if all required triggers exist
    SELECT COUNT(*) INTO obj_count
    FROM pg_trigger
    WHERE tgname IN ('update_profiles_updated_at', 'update_modules_updated_at', 'update_journal_entries_updated_at');
    
    IF obj_count < 3 THEN
        missing_objects := array_append(missing_objects, 'Some required triggers are missing');
    END IF;
    
    -- Check if all required policies exist
    SELECT COUNT(*) INTO obj_count
    FROM pg_policies
    WHERE tablename = 'journal_entries'
    AND policyname IN (
        'Users can view own journal entries',
        'Users can insert own journal entries', 
        'Users can update own journal entries',
        'Users can delete own journal entries'
    );
    
    IF obj_count < 4 THEN
        missing_objects := array_append(missing_objects, 'Some required RLS policies are missing');
    END IF;
    
    -- Check if required functions exist
    SELECT COUNT(*) INTO obj_count
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'public'
    AND p.proname IN ('update_updated_at_column', 'calculate_current_streak');
    
    IF obj_count < 2 THEN
        missing_objects := array_append(missing_objects, 'Some required functions are missing');
    END IF;
    
    -- Report results
    IF array_length(missing_objects, 1) > 0 THEN
        RAISE NOTICE 'Database verification found issues: %', array_to_string(missing_objects, ', ');
    ELSE
        RAISE NOTICE 'Database verification passed - all required objects exist';
    END IF;
    
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Database verification encountered an error: %', SQLERRM;
END $$;
