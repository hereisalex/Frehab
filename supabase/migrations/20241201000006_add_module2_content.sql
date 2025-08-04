-- Add content for Module 2: Building Your Support System
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "video",
      "title": "The Science of Addiction",
      "summary": "Understanding the neurobiology of addiction, including dopamine pathways and neuroplasticity. Learn how substances affect the brain and why recovery is possible.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "reading",
      "title": "Understanding Triggers",
      "summary": "Learn to identify and understand your personal triggers for substance use. This evidence-based guide helps you recognize patterns and develop coping strategies.",
      "external_url": "https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/treatment-recovery",
      "button_text": "Read Article"
    },
    {
      "type": "audio",
      "title": "Mindful Observation",
      "summary": "A 5-minute guided mindfulness exercise to help you develop awareness of your thoughts, feelings, and urges without judgment.",
      "audio_url": "/audio/mindful-observation.mp3",
      "duration": "5:00",
      "button_text": "Listen Now"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Post-Acute Withdrawal Syndrome (PAWS)",
      "summary": "Understanding the long-term effects of substance withdrawal and how to manage symptoms that may persist for weeks or months after stopping use.",
      "wiki_url": "/wiki/paws",
      "button_text": "Read Article"
    }
  ]
}'::jsonb
WHERE module_number = 2; 