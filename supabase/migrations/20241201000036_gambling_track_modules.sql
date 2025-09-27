-- Gambling Addiction Recovery Track - Evidence-Based Modules
-- Based on latest research in gambling disorder and financial recovery strategies

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Gambling Disorder
('gambling', 1, 'Understanding Gambling Disorder and the Psychology of Risk', 
'Learn how gambling becomes addictive through psychological manipulation, variable ratio reinforcement, and the illusion of control.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gambling Disorder: DSM-5 Criteria and Recognition",
      "summary": "Understanding gambling disorder as a recognized mental health condition with specific diagnostic criteria.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/",
      "button_text": "Medical Recognition"
    },
    {
      "type": "video", 
      "title": "The Psychology of Gambling: How Casinos Hook Players",
      "summary": "How gambling establishments use psychological manipulation to create and maintain addiction.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Gambling Psychology"
    },
    {
      "type": "tool",
      "title": "Gambling Disorder Assessment",
      "summary": "Assess your gambling behavior and its impact on your life using validated screening tools.",
      "pdf_url": "/worksheets/gambling-disorder-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Types of Gambling and Addiction Risk",
      "summary": "How different types of gambling (slots, sports betting, poker, lottery) create different addiction patterns.",
      "wiki_url": "/wiki/gambling-types-addiction-risk",
      "button_text": "Gambling Types"
    }
  ]
}', 1),

-- MODULE 2: Financial Damage Assessment and Recovery
('gambling', 2, 'Financial Recovery and Damage Assessment',
'Assess the financial damage from gambling and create realistic plans for financial recovery and debt management.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Assessing Gambling Financial Damage",
      "summary": "How to thoroughly assess the financial impact of gambling addiction and create recovery plans.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/",
      "button_text": "Financial Assessment"
    },
    {
      "type": "video",
      "title": "Debt Management and Financial Recovery",
      "summary": "Strategies for managing gambling debt and rebuilding financial stability.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Debt Recovery"
    },
    {
      "type": "tool",
      "title": "Financial Recovery Planner",
      "summary": "Create a comprehensive plan for financial recovery and debt management after gambling addiction.",
      "pdf_url": "/worksheets/gambling-financial-recovery.pdf",
      "button_text": "Financial Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Gambling Exclusion Programs",
      "summary": "How to use self-exclusion programs and gambling blocks to prevent access to gambling venues and websites.",
      "wiki_url": "/wiki/gambling-exclusion-programs",
      "button_text": "Exclusion Programs"
    }
  ]
}', 2),

-- Condensed remaining modules
('gambling', 3, 'Cognitive Distortions and Thinking Errors', 'Address the thinking errors and cognitive distortions that fuel gambling addiction.', '{"lessons": [{"type": "reading", "title": "Gambling Cognitive Distortions", "summary": "Identifying and correcting the thinking errors that maintain gambling addiction.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/", "button_text": "Thinking Errors"}]}', 3),
('gambling', 4, 'Emotional Regulation and Triggers', 'Learn to manage the emotions and triggers that lead to gambling episodes.', '{"lessons": [{"type": "reading", "title": "Emotional Triggers in Gambling", "summary": "Understanding and managing the emotional states that trigger gambling urges.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/", "button_text": "Emotional Management"}]}', 4),
('gambling', 5, 'Relationship Repair and Trust Rebuilding', 'Address the relationship damage caused by gambling addiction and rebuild trust with family and friends.', '{"lessons": [{"type": "reading", "title": "Rebuilding Trust After Gambling", "summary": "How to repair relationships damaged by gambling addiction and financial betrayal.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/", "button_text": "Trust Rebuilding"}]}', 5),
('gambling', 6, 'Career and Work Recovery', 'Address career damage from gambling and rebuild professional reputation and financial stability.', '{"lessons": [{"type": "reading", "title": "Career Recovery After Gambling Addiction", "summary": "Rebuilding professional life and financial stability after gambling-related career damage.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/", "button_text": "Career Recovery"}]}', 6),
('gambling', 7, 'Legal Issues and Financial Crimes', 'Address legal complications that may arise from gambling-related financial problems.', '{"lessons": [{"type": "reading", "title": "Legal Issues in Gambling Recovery", "summary": "Dealing with legal consequences and financial crimes related to gambling addiction.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/", "button_text": "Legal Recovery"}]}', 7),
('gambling', 8, 'Long-Term Financial Health and Recovery Maintenance', 'Build sustainable financial practices and long-term recovery strategies.', '{"lessons": [{"type": "reading", "title": "Long-Term Gambling Recovery", "summary": "Sustainable strategies for maintaining gambling recovery and building financial health.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4330000/", "button_text": "Long-Term Success"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
