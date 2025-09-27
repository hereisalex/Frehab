-- Work/Career Addiction Recovery Track - Evidence-Based Modules
-- Based on latest research in workaholism and work-life balance recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Workaholism and Work Addiction
('work', 1, 'Understanding Workaholism and Compulsive Work Patterns', 
'Learn how work becomes addictive through achievement validation, avoidance behaviors, and cultural reinforcement of overwork.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Workaholism: Addiction or Cultural Norm?",
      "summary": "Understanding the difference between high achievement and compulsive work addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/",
      "button_text": "Work Addiction Science"
    },
    {
      "type": "video", 
      "title": "The Psychology of Work Addiction",
      "summary": "How work addiction develops through perfectionism, control needs, and avoidance of other life areas.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Work Psychology"
    },
    {
      "type": "tool",
      "title": "Workaholism Assessment Scale",
      "summary": "Assess your work patterns and their impact on your health, relationships, and well-being.",
      "pdf_url": "/worksheets/workaholism-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Work Addiction vs. High Performance",
      "summary": "Understanding the difference between healthy high performance and compulsive work addiction.",
      "wiki_url": "/wiki/work-addiction-vs-performance",
      "button_text": "Performance vs. Addiction"
    }
  ]
}', 1),

-- MODULE 2: Work-Life Balance and Boundary Setting
('work', 2, 'Establishing Work-Life Balance and Healthy Boundaries',
'Learn to set appropriate boundaries between work and personal life and develop sustainable work practices.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Setting Work Boundaries and Limits",
      "summary": "Practical strategies for setting healthy boundaries between work and personal life.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/",
      "button_text": "Boundary Setting"
    },
    {
      "type": "video",
      "title": "Time Management vs. Time Boundaries",
      "summary": "Learning to manage time effectively while maintaining healthy limits on work hours.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Time Boundaries"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Technology Boundaries for Work Recovery",
      "summary": "Managing work technology (email, Slack, phone) to support work-life balance recovery.",
      "wiki_url": "/wiki/work-technology-boundaries",
      "button_text": "Tech Boundaries"
    }
  ]
}', 2),

-- Condensed remaining modules
('work', 3, 'Perfectionism and Control Recovery', 'Address perfectionist tendencies and control issues that fuel work addiction.', '{"lessons": [{"type": "reading", "title": "Perfectionism in Work Addiction", "summary": "Understanding and addressing perfectionist patterns that drive compulsive work behaviors.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/", "button_text": "Perfectionism Recovery"}]}', 3),
('work', 4, 'Stress Management and Burnout Recovery', 'Learn to manage work stress and recover from burnout while maintaining career success.', '{"lessons": [{"type": "reading", "title": "Burnout Recovery and Prevention", "summary": "Strategies for recovering from work burnout and preventing future stress-related health problems.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/", "button_text": "Burnout Recovery"}]}', 4),
('work', 5, 'Relationship Recovery and Social Life', 'Rebuild relationships and social connections damaged by work addiction and overcommitment.', '{"lessons": [{"type": "reading", "title": "Relationship Recovery from Workaholism", "summary": "How to repair relationships damaged by work addiction and rebuild social connections.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/", "button_text": "Relationship Repair"}]}', 5),
('work', 6, 'Identity Beyond Work Achievement', 'Develop a sense of identity and self-worth independent of work accomplishments.', '{"lessons": [{"type": "reading", "title": "Identity Beyond Work Success", "summary": "Building self-worth and identity that doesn''t depend solely on work achievements and career success.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/", "button_text": "Identity Recovery"}]}', 6),
('work', 7, 'Health and Self-Care Recovery', 'Address the physical and mental health impacts of work addiction and develop self-care practices.', '{"lessons": [{"type": "reading", "title": "Health Recovery from Work Addiction", "summary": "Addressing the physical and mental health consequences of chronic overwork and stress.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/", "button_text": "Health Recovery"}]}', 7),
('work', 8, 'Sustainable Career Success and Life Integration', 'Create sustainable approaches to career success that integrate work with other life values.', '{"lessons": [{"type": "reading", "title": "Sustainable Work-Life Integration", "summary": "Long-term strategies for maintaining career success while living a balanced, fulfilling life.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573583/", "button_text": "Sustainable Success"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
