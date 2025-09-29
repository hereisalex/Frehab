-- Add LGBT+ content preferences to user profiles
-- This allows users to opt into LGBT+ specific insights and content

-- Add LGBT+ preference column to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS lgbt_insights_enabled BOOLEAN DEFAULT false;

-- Add comment for documentation
COMMENT ON COLUMN profiles.lgbt_insights_enabled IS 'Whether user wants to see LGBT+ specific insights and content in recovery modules';

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_profiles_lgbt_insights ON profiles(lgbt_insights_enabled);

-- Add LGBT+ insights content to existing track modules
-- This will be populated with LGBT+ specific content for methamphetamine, alcohol, and opioids

-- Create a function to get enhanced content based on user preferences
CREATE OR REPLACE FUNCTION get_enhanced_track_content(
    p_track_id VARCHAR(50),
    p_module_number INTEGER,
    p_user_id UUID DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
    base_content JSONB;
    lgbt_insights JSONB;
    user_prefers_lgbt BOOLEAN := false;
    enhanced_content JSONB;
BEGIN
    -- Get base module content
    SELECT content INTO base_content
    FROM track_modules
    WHERE track_id = p_track_id AND module_number = p_module_number;
    
    -- If no base content found, return empty
    IF base_content IS NULL THEN
        RETURN '{}'::jsonb;
    END IF;
    
    -- Check if user has LGBT+ insights enabled
    IF p_user_id IS NOT NULL THEN
        SELECT lgbt_insights_enabled INTO user_prefers_lgbt
        FROM profiles
        WHERE id = p_user_id;
    END IF;
    
    -- If user doesn't want LGBT+ insights, return base content
    IF NOT user_prefers_lgbt THEN
        RETURN base_content;
    END IF;
    
    -- Get LGBT+ insights for this module
    SELECT track_modules.lgbt_insights INTO lgbt_insights
    FROM track_modules
    WHERE track_modules.track_id = p_track_id AND track_modules.module_number = p_module_number;
    
    -- If no LGBT+ insights, return base content
    IF lgbt_insights IS NULL THEN
        RETURN base_content;
    END IF;
    
    -- Merge base content with LGBT+ insights
    enhanced_content := base_content;
    
    -- Add LGBT+ lessons if they exist
    IF lgbt_insights ? 'lessons' THEN
        enhanced_content := jsonb_set(
            enhanced_content,
            '{lessons}',
            (enhanced_content->'lessons') || (lgbt_insights->'lessons')
        );
    END IF;
    
    -- Add LGBT+ tools if they exist
    IF lgbt_insights ? 'tools' THEN
        enhanced_content := jsonb_set(
            enhanced_content,
            '{tools}',
            (enhanced_content->'tools') || (lgbt_insights->'tools')
        );
    END IF;
    
    RETURN enhanced_content;
END;
$$;

-- Add LGBT+ insights column to track_modules table
ALTER TABLE track_modules 
ADD COLUMN IF NOT EXISTS lgbt_insights JSONB;

-- Add comment for documentation
COMMENT ON COLUMN track_modules.lgbt_insights IS 'LGBT+ specific content and insights for this module';

-- Create index for LGBT+ insights queries
CREATE INDEX IF NOT EXISTS idx_track_modules_lgbt_insights ON track_modules USING GIN (lgbt_insights);

-- Update the get_track_modules function to use enhanced content
CREATE OR REPLACE FUNCTION get_track_modules(p_track_id VARCHAR(50), p_user_id UUID DEFAULT NULL)
RETURNS TABLE (
    track_id VARCHAR(50),
    track_name VARCHAR(100),
    track_category VARCHAR(20),
    module_number INTEGER,
    title TEXT,
    description TEXT,
    content JSONB,
    sort_order INTEGER,
    track_icon VARCHAR(10),
    primary_color VARCHAR(50),
    secondary_color VARCHAR(50)
) 
LANGUAGE plpgsql
AS $$
BEGIN
    -- First try to get track-specific modules
    RETURN QUERY
    SELECT 
        tmv.track_id,
        tmv.track_name,
        tmv.track_category,
        tmv.module_number,
        tmv.title,
        tmv.description,
        get_enhanced_track_content(tmv.track_id, tmv.module_number, p_user_id) as content,
        tmv.sort_order,
        tmv.track_icon,
        tmv.primary_color,
        tmv.secondary_color
    FROM track_modules_view tmv
    WHERE tmv.track_id = p_track_id
    ORDER BY tmv.sort_order, tmv.module_number;
    
    -- If no track-specific modules found, fall back to general modules
    IF NOT FOUND THEN
        RETURN QUERY
        SELECT 
            p_track_id::VARCHAR(50) as track_id,
            'General Recovery'::VARCHAR(100) as track_name,
            'substance'::VARCHAR(20) as track_category,
            m.module_number,
            m.title,
            m.description,
            m.content,
            m.module_number as sort_order,
            '🌟'::VARCHAR(10) as track_icon,
            'bg-violet-500'::VARCHAR(50) as primary_color,
            'bg-violet-50'::VARCHAR(50) as secondary_color
        FROM modules m
        ORDER BY m.module_number;
    END IF;
END;
$$;
