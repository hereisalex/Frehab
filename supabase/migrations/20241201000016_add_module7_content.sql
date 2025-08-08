-- Add content for Module 7: Community & Service
-- Ensure module 7 exists
INSERT INTO modules (module_number, title, description)
VALUES (
  7,
  'Community & Service: Connected Recovery',
  'Strengthen recovery by building supportive relationships and contributing to something bigger than yourself. Practice asking for help, setting healthy boundaries, and giving back in ways that reinforce your values.'
) ON CONFLICT (module_number) DO NOTHING;

-- Update content for module 7 (safe to re-run)
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Why Community Matters",
      "summary": "The role of social connection in long-term recovery and mental health.",
      "external_url": "https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery",
      "button_text": "Read Article"
    },
    {
      "type": "video",
      "title": "How to Ask for Help",
      "summary": "A short skill-builder on making clear, specific support requests.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "Boundaries 101",
      "summary": "Learn the essentials of setting and maintaining healthy boundaries.",
      "external_url": "https://www.psychologytoday.com/us/basics/boundaries",
      "button_text": "Read Overview"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Create Your Coping Menu",
      "summary": "Keep a ready list of quick actions that reduce risk and restore calm.",
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
WHERE module_number = 7;


