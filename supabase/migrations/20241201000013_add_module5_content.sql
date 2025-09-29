-- Add content for Module 5: Building a Fulfilling Life
-- Ensure module 5 exists
INSERT INTO modules (module_number, title, description)
VALUES (
  5,
  'Building a Fulfilling Life',
  'Design a balanced life that makes recovery rewarding. Align your time with your values and stack identity-based habits across core pillars.'
) ON CONFLICT (module_number) DO NOTHING;

-- Update content for module 5 (safe to re-run)
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Finding Your Core Pillars",
      "summary": "Identify the 5 pillars that matter most: Health, Relationships, Work/Service, Play, Growth.",
      "external_url": "https://jamesclear.com/values",
      "button_text": "Read Article"
    },
    {
      "type": "video",
      "title": "Design Your Week",
      "summary": "A practical walkthrough for aligning your weekly schedule with your values.",
      "video_id": "oTugjssqOT0",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "The Power of Rituals",
      "summary": "Create small rituals that signal who you are becoming and make consistency enjoyable.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5647964/",
      "button_text": "Read Overview"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Identity-Based Habits",
      "summary": "Align daily actions with your chosen identity for durable change.",
      "wiki_url": "/wiki/identity-based-habits",
      "button_text": "Open Guide"
    },
    {
      "type": "wiki",
      "title": "Create Your Coping Menu",
      "summary": "Keep a ready list of quick actions that reduce risk and restore calm.",
      "wiki_url": "/wiki/coping-menu",
      "button_text": "Open Guide"
    }
  ]
}'::jsonb
WHERE module_number = 5;
