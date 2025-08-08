-- Add content for Module 4: Relapse Prevention and Coping Strategies
-- Ensure module 4 exists
INSERT INTO modules (module_number, title, description)
VALUES (
  4,
  'Relapse Prevention: Master Triggers and Cravings',
  'Build a robust plan to anticipate high-risk situations, manage cravings, and recover quickly from slips. Learn evidence-based skills like urge surfing, HALT checks, and coping menus.'
) ON CONFLICT (module_number) DO NOTHING;

-- Update content for module 4 (safe to re-run)
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Understanding Triggers",
      "summary": "Learn the categories of triggers (external, internal, situational) and how to map yours.",
      "external_url": "https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery",
      "button_text": "Read Article"
    },
    {
      "type": "video",
      "title": "Urge Surfing: Ride It Out",
      "summary": "A short practice on noticing urges without acting on them.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "HALT: Hungry, Angry, Lonely, Tired",
      "summary": "A quick self-check to prevent avoidable risk states.",
      "external_url": "https://www.psychologytoday.com/us/blog/urban-survival/201803/the-halt-approach",
      "button_text": "Read Overview"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Create Your Coping Menu",
      "summary": "Build a 3-2-1 coping menu you can use in 2 minutes anywhere.",
      "wiki_url": "/wiki/coping-menu",
      "button_text": "Open Guide"
    },
    {
      "type": "wiki",
      "title": "Trigger and Craving Map",
      "summary": "Map your top triggers and link each to a response plan.",
      "wiki_url": "/wiki/trigger-map",
      "button_text": "Open Guide"
    }
  ]
}'::jsonb
WHERE module_number = 4;
