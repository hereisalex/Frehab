-- Add content for Module 8: Sustain & Grow
-- Ensure module 8 exists
INSERT INTO modules (module_number, title, description)
VALUES (
  8,
  'Sustain & Grow: Future-Proof Your Recovery',
  'Consolidate your skills into a sustainable system. Build long-term routines, anticipate challenges, and create plans for continued growth and meaning.'
) ON CONFLICT (module_number) DO NOTHING;

-- Update content for module 8 (safe to re-run)
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Growth Mindset in Recovery",
      "summary": "Adopt a mindset that turns setbacks into learning opportunities and keeps progress momentum.",
      "external_url": "https://en.wikipedia.org/wiki/Growth_mindset",
      "button_text": "Read Overview"
    },
    {
      "type": "video",
      "title": "Designing a Daily System",
      "summary": "Walkthrough for creating a minimal, repeatable routine aligned to your values.",
      "video_id": "oTugjssqOT0",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "Plan for Hard Days",
      "summary": "Pre-commit supportive actions for when energy is low and stress is high.",
      "external_url": "https://www.nimh.nih.gov/health/publications/stress",
      "button_text": "Read Guide"
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
      "title": "Trigger and Craving Map",
      "summary": "Keep your risk map current and link each to a response plan.",
      "wiki_url": "/wiki/trigger-map",
      "button_text": "Open Guide"
    }
  ]
}'::jsonb
WHERE module_number = 8;


