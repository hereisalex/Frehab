-- Add content for Module 8: Sustaining Recovery through Purpose & Growth
-- Ensure module 8 exists
INSERT INTO modules (module_number, title, description)
VALUES (
  8,
  'Sustaining Recovery: Purpose, Service, and Growth',
  'Consolidate your gains by cultivating purpose, contributing to others, and designing long-term growth systems that keep recovery enjoyable and meaningful.'
) ON CONFLICT (module_number) DO NOTHING;

-- Update content for module 8 (safe to re-run)
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Meaning and Well-Being",
      "summary": "Why a sense of purpose supports long-term recovery and resilience.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8476176/",
      "button_text": "Read Open Study"
    },
    {
      "type": "reading",
      "title": "Self-Determination Theory (SDT)",
      "summary": "Autonomy, competence, and relatedness as drivers of sustained behavior change.",
      "external_url": "https://selfdeterminationtheory.org/the-theory/",
      "button_text": "Read Overview"
    },
    {
      "type": "video",
      "title": "The Science of Purpose",
      "summary": "How purpose improves health and grit (short talk).",
      "video_id": "y3l3H2Q2G6Q",
      "button_text": "Watch Video"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Purpose Statement Workshop",
      "summary": "Draft a one-paragraph purpose statement connected to your values.",
      "wiki_url": "/wiki/purpose-statement",
      "button_text": "Open Guide"
    },
    {
      "type": "wiki",
      "title": "Service & Contribution Plan",
      "summary": "Design small recurring acts of service that reinforce identity and community.",
      "wiki_url": "/wiki/service-plan",
      "button_text": "Open Guide"
    }
  ]
}'::jsonb
WHERE module_number = 8;
