-- Create the tracks and track-modules system
-- This migration adds support for track-specific modules

-- 1. Create tracks table
CREATE TABLE IF NOT EXISTS tracks (
    id SERIAL PRIMARY KEY,
    track_id VARCHAR(50) NOT NULL UNIQUE, -- matches RecoveryTrackCarousel IDs
    name VARCHAR(100) NOT NULL,
    category VARCHAR(20) CHECK (category IN ('substance', 'behavioral')) NOT NULL,
    description TEXT,
    icon VARCHAR(10),
    prevalence VARCHAR(50),
    primary_color VARCHAR(50),
    secondary_color VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create track_modules table (many-to-many relationship)
CREATE TABLE IF NOT EXISTS track_modules (
    id SERIAL PRIMARY KEY,
    track_id VARCHAR(50) NOT NULL REFERENCES tracks(track_id) ON DELETE CASCADE,
    module_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    content JSONB, -- Same structure as existing modules.content
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0, -- For custom ordering within a track
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure one module per number per track
    UNIQUE(track_id, module_number)
);

-- 3. Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_tracks_track_id ON tracks(track_id);
CREATE INDEX IF NOT EXISTS idx_tracks_category ON tracks(category);
CREATE INDEX IF NOT EXISTS idx_track_modules_track_id ON track_modules(track_id);
CREATE INDEX IF NOT EXISTS idx_track_modules_module_number ON track_modules(module_number);
CREATE INDEX IF NOT EXISTS idx_track_modules_sort_order ON track_modules(track_id, sort_order);

-- 4. Add comments for documentation
COMMENT ON TABLE tracks IS 'Recovery tracks (alcohol, methamphetamine, social media, etc.)';
COMMENT ON TABLE track_modules IS 'Track-specific modules with customized content';
COMMENT ON COLUMN track_modules.track_id IS 'References tracks.track_id';
COMMENT ON COLUMN track_modules.module_number IS 'Module number within the track (1-8)';
COMMENT ON COLUMN track_modules.content IS 'JSON content same format as modules.content';
COMMENT ON COLUMN track_modules.sort_order IS 'Custom ordering within track, defaults to module_number';

-- 5. Insert all available tracks from RecoveryTrackCarousel
INSERT INTO tracks (track_id, name, category, description, icon, prevalence, primary_color, secondary_color) VALUES
-- Substance tracks
('alcohol', 'Alcohol', 'substance', 'Support for alcohol use disorder and drinking cessation', '🍺', 'Most common', 'bg-amber-500', 'bg-amber-50'),
('methamphetamine', 'Methamphetamine', 'substance', 'Recovery support for methamphetamine addiction', '⚡', 'Growing concern', 'bg-red-500', 'bg-red-50'),
('opioids', 'Opioids/Heroin', 'substance', 'Support for opioid addiction including heroin, fentanyl, and pills', '💊', 'Crisis level', 'bg-purple-500', 'bg-purple-50'),
('marijuana', 'Marijuana/Cannabis', 'substance', 'Support for cannabis use disorder and dependency', '🌿', 'Increasingly common', 'bg-green-500', 'bg-green-50'),
('cocaine', 'Cocaine/Crack', 'substance', 'Recovery support for cocaine and crack cocaine addiction', '❄️', 'Persistent issue', 'bg-blue-500', 'bg-blue-50'),
('benzodiazepines', 'Benzodiazepines', 'substance', 'Support for benzodiazepine dependency (Xanax, Valium, etc.)', '💤', 'Prescription concern', 'bg-indigo-500', 'bg-indigo-50'),
('stimulants', 'Other Stimulants', 'substance', 'Support for Adderall, Ritalin, and prescription stimulants', '⚙️', 'Rising trend', 'bg-orange-500', 'bg-orange-50'),
('depressants', 'Other Depressants', 'substance', 'Support for barbiturates, sedatives, and prescription downers', '😴', 'Prescription concern', 'bg-slate-500', 'bg-slate-50'),
('nicotine', 'Nicotine/Tobacco', 'substance', 'Support for quitting smoking, vaping, and tobacco products', '🚭', 'Extremely common', 'bg-gray-600', 'bg-gray-50'),
('general', 'General Recovery', 'substance', 'Multi-substance or general addiction recovery support', '🌟', 'Comprehensive', 'bg-violet-500', 'bg-violet-50'),

-- Behavioral tracks  
('social-media', 'Social Media', 'behavioral', 'Break the cycle of compulsive social media use', '📱', 'Epidemic levels', 'bg-pink-500', 'bg-pink-50'),
('video-games', 'Video Games', 'behavioral', 'Support for gaming addiction and excessive play', '🎮', 'Growing concern', 'bg-cyan-500', 'bg-cyan-50'),
('pornography', 'Pornography', 'behavioral', 'Recovery from pornography addiction and compulsive sexual behavior', '🚫', 'Widespread issue', 'bg-gray-500', 'bg-gray-50'),
('gambling', 'Gambling', 'behavioral', 'Support for gambling addiction and financial recovery', '🎰', 'Serious problem', 'bg-yellow-500', 'bg-yellow-50'),
('shopping', 'Shopping/Spending', 'behavioral', 'Recovery from compulsive shopping and spending addiction', '🛍️', 'Common struggle', 'bg-rose-500', 'bg-rose-50'),
('food', 'Food/Eating', 'behavioral', 'Support for binge eating and food addiction recovery', '🍔', 'Very common', 'bg-emerald-500', 'bg-emerald-50'),
('work', 'Work/Career', 'behavioral', 'Support for workaholism and unhealthy work patterns', '💼', 'Widespread issue', 'bg-neutral-600', 'bg-neutral-50')
ON CONFLICT (track_id) DO NOTHING;

-- 6. Create a view for easy querying of track modules
CREATE OR REPLACE VIEW track_modules_view AS
SELECT 
    tm.track_id,
    t.name as track_name,
    t.category as track_category,
    tm.module_number,
    tm.title,
    tm.description,
    tm.content,
    tm.is_active,
    tm.sort_order,
    tm.created_at as module_created_at,
    t.icon as track_icon,
    t.primary_color,
    t.secondary_color
FROM track_modules tm
JOIN tracks t ON tm.track_id = t.track_id
WHERE tm.is_active = true AND t.is_active = true
ORDER BY tm.track_id, tm.sort_order, tm.module_number;

-- 7. Create function to get modules for a specific track with fallback to general
CREATE OR REPLACE FUNCTION get_track_modules(p_track_id VARCHAR(50))
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
        tmv.content,
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

-- 8. Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
DROP TRIGGER IF EXISTS update_tracks_updated_at ON tracks;
CREATE TRIGGER update_tracks_updated_at BEFORE UPDATE ON tracks 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_track_modules_updated_at ON track_modules;
CREATE TRIGGER update_track_modules_updated_at BEFORE UPDATE ON track_modules 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
