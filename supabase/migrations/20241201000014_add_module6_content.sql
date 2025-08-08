-- Add content for Module 6: Resilience & Stress Management
-- Ensure module 6 exists
INSERT INTO modules (module_number, title, description)
VALUES (
  6,
  'Resilience & Stress Management: Skills for Tough Days',
  'Build resilience and emotional regulation skills—reframe thoughts, reduce physiological arousal, and recover quickly from setbacks.'
) ON CONFLICT (module_number) DO NOTHING;

-- Update content for module 6 (safe to re-run)
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Cognitive Reappraisal Basics",
      "summary": "Learn to reframe automatic thoughts to change emotional impact without denying reality.",
      "external_url": "https://en.wikipedia.org/wiki/Cognitive_reappraisal",
      "button_text": "Read Overview"
    },
    {
      "type": "video",
      "title": "Box Breathing for Calm",
      "summary": "Slow your nervous system with a simple 4×4×4×4 breath pattern you can do anywhere.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "Stress Response and Recovery",
      "summary": "Understand stress physiology and practical strategies for faster recovery.",
      "external_url": "https://www.nimh.nih.gov/health/publications/stress",
      "button_text": "Read Guide"
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
      "title": "Post-Acute Withdrawal Syndrome (PAWS)",
      "summary": "Recognize long-tail symptoms and adapt your stress strategies accordingly.",
      "wiki_url": "/wiki/paws",
      "button_text": "Read Article"
    }
  ]
}'::jsonb
WHERE module_number = 6;
