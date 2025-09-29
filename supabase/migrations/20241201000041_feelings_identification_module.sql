-- Feelings Identification and Natural Alternatives Module
-- This module helps users identify what feelings they were trying to achieve through substance use
-- and provides natural alternatives to achieve those same feelings

-- Add the new module to the core program
INSERT INTO modules (module_number, title, description, content) VALUES
(9, 'Understanding Your Feelings: From Substance Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through substance use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives that can provide the same emotional benefits without the negative consequences.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Emotional Function of Substance Use",
      "summary": "Understanding how substances serve emotional needs and why identifying these needs is crucial for recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "Feelings vs. Substances: What Are You Really Seeking?",
      "summary": "A guided exploration of the underlying emotions and needs that drive substance use.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Feelings Identification Assessment",
      "summary": "A comprehensive tool to help you identify what feelings you were trying to achieve through substance use.",
      "pdf_url": "/worksheets/feelings-identification-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Positive Emotions",
      "summary": "Evidence-based strategies for achieving the same emotional states through healthy, natural means.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Feelings Dictionary: Understanding Your Emotional Vocabulary",
      "summary": "A comprehensive guide to identifying and naming the full spectrum of human emotions.",
      "wiki_url": "/wiki/feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Alternatives Database",
      "summary": "A searchable database of healthy activities and practices that can help achieve specific emotional states.",
      "wiki_url": "/wiki/natural-alternatives-database",
      "button_text": "Alternatives Database"
    }
  ]
}')
ON CONFLICT (module_number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  updated_at = NOW();

-- Create a table for storing user feelings identification data
CREATE TABLE IF NOT EXISTS user_feelings_identification (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    feeling_name VARCHAR(100) NOT NULL,
    feeling_category VARCHAR(50) NOT NULL, -- e.g., 'positive', 'negative', 'neutral'
    intensity_before_use INTEGER CHECK (intensity_before_use >= 1 AND intensity_before_use <= 10),
    intensity_after_use INTEGER CHECK (intensity_after_use >= 1 AND intensity_after_use <= 10),
    substance_used VARCHAR(100),
    situation_context TEXT,
    natural_alternatives TEXT[], -- Array of natural alternatives for this feeling
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for natural alternatives database
CREATE TABLE IF NOT EXISTS natural_alternatives (
    id SERIAL PRIMARY KEY,
    feeling_name VARCHAR(100) NOT NULL,
    alternative_type VARCHAR(50) NOT NULL, -- e.g., 'physical', 'social', 'creative', 'mindfulness'
    activity_name VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    time_required VARCHAR(50), -- e.g., '5 minutes', '30 minutes', '1 hour'
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
    evidence_based BOOLEAN DEFAULT false,
    cost_level VARCHAR(20) CHECK (cost_level IN ('free', 'low', 'medium', 'high')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a table for user's personalized alternatives
CREATE TABLE IF NOT EXISTS user_personalized_alternatives (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    feeling_name VARCHAR(100) NOT NULL,
    alternative_activity VARCHAR(200) NOT NULL,
    personal_notes TEXT,
    effectiveness_rating INTEGER CHECK (effectiveness_rating >= 1 AND effectiveness_rating <= 10),
    times_used INTEGER DEFAULT 0,
    is_favorite BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_feelings_user_id ON user_feelings_identification(user_id);
CREATE INDEX IF NOT EXISTS idx_user_feelings_feeling_name ON user_feelings_identification(feeling_name);
CREATE INDEX IF NOT EXISTS idx_natural_alternatives_feeling_name ON natural_alternatives(feeling_name);
CREATE INDEX IF NOT EXISTS idx_natural_alternatives_type ON natural_alternatives(alternative_type);
CREATE INDEX IF NOT EXISTS idx_user_personalized_user_id ON user_personalized_alternatives(user_id);
CREATE INDEX IF NOT EXISTS idx_user_personalized_feeling_name ON user_personalized_alternatives(feeling_name);

-- Add comments for documentation
COMMENT ON TABLE user_feelings_identification IS 'User responses to feelings identification exercises';
COMMENT ON TABLE natural_alternatives IS 'Database of natural alternatives for achieving specific feelings';
COMMENT ON TABLE user_personalized_alternatives IS 'User-customized natural alternatives with personal ratings';

-- Insert sample natural alternatives data
INSERT INTO natural_alternatives (feeling_name, alternative_type, activity_name, description, time_required, difficulty_level, evidence_based, cost_level) VALUES
-- For feeling: Happy/Joyful
('Happy', 'physical', 'Dancing to favorite music', 'Put on your favorite upbeat songs and dance freely around your room or house', '10-30 minutes', 'beginner', true, 'free'),
('Happy', 'social', 'Call a close friend or family member', 'Reach out to someone you care about and have a meaningful conversation', '15-60 minutes', 'beginner', true, 'free'),
('Happy', 'creative', 'Create art or crafts', 'Draw, paint, write poetry, or work on any creative project that brings you joy', '30-120 minutes', 'beginner', true, 'low'),
('Happy', 'mindfulness', 'Practice gratitude journaling', 'Write down 3-5 things you are grateful for today', '5-15 minutes', 'beginner', true, 'free'),

-- For feeling: Relaxed/Calm
('Relaxed', 'mindfulness', 'Deep breathing exercises', 'Practice 4-7-8 breathing or box breathing for 5-10 minutes', '5-15 minutes', 'beginner', true, 'free'),
('Relaxed', 'physical', 'Gentle yoga or stretching', 'Follow a gentle yoga routine or do basic stretching exercises', '15-45 minutes', 'beginner', true, 'free'),
('Relaxed', 'mindfulness', 'Meditation or mindfulness', 'Use a meditation app or practice mindfulness meditation', '10-30 minutes', 'beginner', true, 'free'),
('Relaxed', 'creative', 'Listen to calming music', 'Create a playlist of soothing music and listen mindfully', '15-60 minutes', 'beginner', true, 'free'),

-- For feeling: Confident/Powerful
('Confident', 'physical', 'Exercise or strength training', 'Engage in physical activity that makes you feel strong and capable', '30-60 minutes', 'intermediate', true, 'free'),
('Confident', 'social', 'Help someone in need', 'Volunteer or offer assistance to someone who could use your help', '30-120 minutes', 'beginner', true, 'free'),
('Confident', 'creative', 'Learn a new skill', 'Take on a new hobby or skill that challenges you and builds competence', '60+ minutes', 'intermediate', true, 'low'),
('Confident', 'mindfulness', 'Positive affirmations', 'Write and repeat positive statements about your strengths and capabilities', '5-15 minutes', 'beginner', true, 'free'),

-- For feeling: Connected/Loved
('Connected', 'social', 'Join a community group or club', 'Find a group that shares your interests and attend regular meetings', '60+ minutes', 'beginner', true, 'low'),
('Connected', 'social', 'Volunteer for a cause you care about', 'Give your time to help others and build meaningful connections', '60+ minutes', 'beginner', true, 'free'),
('Connected', 'creative', 'Write letters to loved ones', 'Handwrite letters to friends or family members expressing your care', '30-60 minutes', 'beginner', true, 'free'),
('Connected', 'mindfulness', 'Practice loving-kindness meditation', 'Send positive thoughts and well-wishes to yourself and others', '10-20 minutes', 'beginner', true, 'free'),

-- For feeling: Excited/Energized
('Excited', 'physical', 'Try a new physical activity', 'Take up a new sport, dance class, or outdoor adventure', '60+ minutes', 'intermediate', true, 'low'),
('Excited', 'creative', 'Plan a future adventure', 'Research and plan a trip, event, or experience you want to have', '30+ minutes', 'beginner', true, 'free'),
('Excited', 'social', 'Attend a live event', 'Go to concerts, sports games, theater, or other live entertainment', '60+ minutes', 'beginner', true, 'medium'),
('Excited', 'creative', 'Start a creative project', 'Begin a new art, music, writing, or craft project that excites you', '30+ minutes', 'beginner', true, 'low'),

-- For feeling: Peaceful/Content
('Peaceful', 'mindfulness', 'Nature walk or outdoor time', 'Spend time in nature, whether a park, beach, or hiking trail', '30+ minutes', 'beginner', true, 'free'),
('Peaceful', 'creative', 'Gardening or plant care', 'Tend to plants, start a garden, or care for indoor plants', '30+ minutes', 'beginner', true, 'low'),
('Peaceful', 'mindfulness', 'Journaling or reflective writing', 'Write about your thoughts, feelings, and experiences in a journal', '15-30 minutes', 'beginner', true, 'free'),
('Peaceful', 'creative', 'Reading a good book', 'Read fiction, non-fiction, or poetry that brings you joy and peace', '30+ minutes', 'beginner', true, 'free');

-- Create triggers to update timestamps
CREATE OR REPLACE FUNCTION update_feelings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_feelings_updated_at 
    BEFORE UPDATE ON user_feelings_identification 
    FOR EACH ROW 
    EXECUTE FUNCTION update_feelings_updated_at();

CREATE TRIGGER update_natural_alternatives_updated_at 
    BEFORE UPDATE ON natural_alternatives 
    FOR EACH ROW 
    EXECUTE FUNCTION update_feelings_updated_at();

CREATE TRIGGER update_user_personalized_updated_at 
    BEFORE UPDATE ON user_personalized_alternatives 
    FOR EACH ROW 
    EXECUTE FUNCTION update_feelings_updated_at();
