-- Add content column to modules table for structured lesson and tool content
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='modules' AND column_name='content'
  ) THEN
    ALTER TABLE modules ADD COLUMN content JSONB;
  END IF;
END $$;

-- Add comment to document the new column
COMMENT ON COLUMN modules.content IS 'JSON object containing structured content for lessons and tools';

-- Create index for better query performance on content column
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_modules_content' AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_modules_content ON modules USING GIN (content);
  END IF;
END $$;

-- Update existing modules with initial content structure
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "The Stages of Change",
      "summary": "Understanding the psychological stages people go through when making behavioral changes, from precontemplation to maintenance.",
      "external_url": "https://www.verywellmind.com/stages-of-change-2795713",
      "button_text": "Read Article"
    },
    {
      "type": "video",
      "title": "Cost-Benefit Analysis",
      "summary": "Learn how to systematically evaluate the pros and cons of your current behaviors and potential changes.",
      "video_id": "dQw4w9WgXcQ",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Download Your Worksheet",
      "summary": "Get your personal worksheet to complete the exercises in this module.",
      "pdf_url": "/worksheets/module1-worksheet.pdf",
      "button_text": "Download PDF"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "The Psychology of Motivation",
      "summary": "Deep dive into the psychological principles that drive behavior change and sustained motivation.",
      "wiki_url": "/wiki/psychology-of-motivation",
      "button_text": "Read Article"
    }
  ]
}'::jsonb
WHERE module_number = 1; 

-- Seed Module 3 metadata and content
INSERT INTO modules (module_number, title, description)
VALUES (
  3,
  'From Values to Habits: Build Your Recovery System',
  'Translate your core values into small, repeatable habits. Design systems that make the right choice the easy choice, aligning daily actions with the life you want.'
) ON CONFLICT (module_number) DO NOTHING;

UPDATE modules
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Atomic Habits: Systems Over Goals",
      "summary": "Why focusing on systems and identity-based habits leads to durable behavior change.",
      "external_url": "https://jamesclear.com/atomic-habits",
      "button_text": "Read Article"
    },
    {
      "type": "video",
      "title": "Tiny Habits That Stick",
      "summary": "A short overview of designing habits so small they are impossible to skip.",
      "video_id": "AdKUJxjn-R8",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "Implementation Intentions",
      "summary": "Use if-then plans to make actions automatic in the moments that matter.",
      "external_url": "https://en.wikipedia.org/wiki/Implementation_intention",
      "button_text": "Read Overview"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Habit Stacking",
      "summary": "Attach new behaviors to existing routines to reduce friction.",
      "wiki_url": "/wiki/habit-stacking",
      "button_text": "Open Guide"
    }
  ]
}'::jsonb
WHERE module_number = 3;-- Trigger DB update - testing workflow
-- Trigger DB update - testing workflow

-- workflow trigger: non-interactive db push test
