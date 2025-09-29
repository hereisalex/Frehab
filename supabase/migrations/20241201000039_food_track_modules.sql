-- Food/Eating Addiction Recovery Track - Evidence-Based Modules
-- Based on latest research in binge eating disorder and food addiction recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Food Addiction and Binge Eating
('food', 1, 'Understanding Food Addiction and Binge Eating Disorder', 
'Learn how certain foods create addictive patterns and how binge eating disorder differs from normal eating struggles.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Food Addiction: Science and Controversy",
      "summary": "Understanding the scientific evidence for food addiction and how processed foods affect brain chemistry.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/",
      "button_text": "Food Addiction Science"
    },
    {
      "type": "video", 
      "title": "Binge Eating Disorder vs. Overeating",
      "summary": "Understanding the difference between binge eating disorder and normal overeating or food struggles.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "BED vs. Overeating"
    },
    {
      "type": "tool",
      "title": "Binge Eating Disorder Assessment",
      "summary": "Assess your eating patterns and their impact on your physical and mental health.",
      "pdf_url": "/worksheets/binge-eating-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Trigger Foods and Addiction Potential",
      "summary": "Understanding which foods are most likely to trigger addictive eating patterns.",
      "wiki_url": "/wiki/trigger-foods-addiction",
      "button_text": "Trigger Foods"
    }
  ]
}', 1),

-- MODULE 2: Breaking Binge Cycles and Emotional Eating
('food', 2, 'Breaking Binge Cycles and Emotional Eating Patterns',
'Learn to interrupt binge eating cycles and address the emotional triggers that lead to compulsive eating.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Breaking the Binge-Restrict Cycle",
      "summary": "Understanding how restriction leads to binging and how to break this destructive cycle.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/",
      "button_text": "Cycle Breaking"
    },
    {
      "type": "video",
      "title": "Emotional Eating vs. Physical Hunger",
      "summary": "Learning to distinguish between emotional eating triggers and true physical hunger.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Hunger Recognition"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Mindful Eating Techniques",
      "summary": "Evidence-based mindful eating practices for developing a healthier relationship with food.",
      "wiki_url": "/wiki/mindful-eating-techniques",
      "button_text": "Mindful Eating"
    }
  ]
}', 2),

-- Condensed remaining modules
('food', 3, 'Nutritional Recovery and Health', 'Address the physical health impacts of binge eating and develop sustainable nutrition practices.', '{"lessons": [{"type": "reading", "title": "Nutritional Recovery from Binge Eating", "summary": "How to restore physical health and develop sustainable nutrition habits after binge eating disorder.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/", "button_text": "Nutritional Health"}]}', 3),
('food', 4, 'Body Image and Self-Acceptance', 'Address body image issues and develop self-acceptance independent of weight and appearance.', '{"lessons": [{"type": "reading", "title": "Body Image Recovery", "summary": "Developing a healthy body image and self-acceptance in eating disorder recovery.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/", "button_text": "Body Image Healing"}]}', 4),
('food', 5, 'Social Eating and Relationship Recovery', 'Navigate social eating situations and repair relationships affected by eating behaviors.', '{"lessons": [{"type": "reading", "title": "Social Eating in Recovery", "summary": "How to handle social eating situations and rebuild relationships affected by eating disorders.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/", "button_text": "Social Recovery"}]}', 5),
('food', 6, 'Exercise and Movement Recovery', 'Develop a healthy relationship with exercise and physical activity after eating disorder recovery.', '{"lessons": [{"type": "reading", "title": "Exercise and Eating Disorder Recovery", "summary": "Building a healthy relationship with exercise and movement in eating disorder recovery.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/", "button_text": "Exercise Recovery"}]}', 6),
('food', 7, 'Shame and Mental Health Recovery', 'Address shame, guilt, and mental health issues associated with binge eating and food addiction.', '{"lessons": [{"type": "reading", "title": "Mental Health in Eating Recovery", "summary": "Addressing shame, depression, and anxiety in eating disorder and food addiction recovery.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/", "button_text": "Mental Health Recovery"}]}', 7),
('food', 8, 'Long-Term Recovery and Intuitive Eating', 'Develop sustainable eating practices and long-term recovery strategies.', '{"lessons": [{"type": "reading", "title": "Sustainable Eating Recovery", "summary": "Long-term strategies for maintaining eating disorder recovery and developing intuitive eating.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234835/", "button_text": "Sustainable Recovery"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
