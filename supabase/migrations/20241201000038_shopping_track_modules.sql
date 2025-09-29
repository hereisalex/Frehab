-- Shopping/Spending Addiction Recovery Track - Evidence-Based Modules
-- Based on latest research in compulsive buying disorder and financial behavior recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Compulsive Buying Disorder
('shopping', 1, 'Understanding Compulsive Buying and Shopping Addiction', 
'Learn how shopping becomes addictive through emotional regulation, social status seeking, and instant gratification patterns.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Compulsive Buying Disorder: Psychology and Patterns",
      "summary": "Understanding the psychological mechanisms behind compulsive shopping and spending addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/",
      "button_text": "Shopping Psychology"
    },
    {
      "type": "video", 
      "title": "Retail Therapy vs. Shopping Addiction",
      "summary": "Understanding the difference between occasional retail therapy and compulsive buying disorder.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Addiction vs. Therapy"
    },
    {
      "type": "tool",
      "title": "Compulsive Buying Assessment",
      "summary": "Assess your shopping behaviors and their impact on your finances and well-being.",
      "pdf_url": "/worksheets/shopping-addiction-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Online Shopping vs. In-Store Addiction",
      "summary": "How different shopping environments (online, in-store, social media) trigger compulsive buying.",
      "wiki_url": "/wiki/shopping-environments-addiction",
      "button_text": "Shopping Environments"
    }
  ]
}', 1),

-- MODULE 2: Financial Recovery and Debt Management
('shopping', 2, 'Financial Recovery and Spending Control',
'Assess financial damage from compulsive shopping and implement practical spending controls and recovery strategies.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Financial Impact Assessment and Recovery",
      "summary": "How to assess the financial damage from shopping addiction and create realistic recovery plans.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/",
      "button_text": "Financial Recovery"
    },
    {
      "type": "video",
      "title": "Budgeting and Spending Controls",
      "summary": "Practical strategies for controlling spending and creating sustainable budgets.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Spending Control"
    },
    {
      "type": "tool",
      "title": "Shopping Recovery Budget Planner",
      "summary": "Create budgets and spending plans designed for shopping addiction recovery.",
      "pdf_url": "/worksheets/shopping-budget-planner.pdf",
      "button_text": "Budget Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Shopping Addiction Barriers and Controls",
      "summary": "Practical barriers to prevent impulsive shopping including apps, account controls, and environmental changes.",
      "wiki_url": "/wiki/shopping-addiction-barriers",
      "button_text": "Shopping Barriers"
    }
  ]
}', 2),

-- Condensed remaining modules
('shopping', 3, 'Emotional Triggers and Regulation', 'Identify and manage the emotions that drive compulsive shopping behavior.', '{"lessons": [{"type": "reading", "title": "Emotional Shopping Triggers", "summary": "Understanding and managing the emotional states that trigger compulsive buying.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/", "button_text": "Emotional Management"}]}', 3),
('shopping', 4, 'Consumer Culture and Social Pressure', 'Address the social and cultural pressures that fuel shopping addiction in consumer society.', '{"lessons": [{"type": "reading", "title": "Consumer Culture and Identity", "summary": "How consumer culture and social media fuel shopping addiction and material identity.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/", "button_text": "Consumer Psychology"}]}', 4),
('shopping', 5, 'Decluttering and Possession Management', 'Learn to manage accumulated possessions and develop healthier relationships with material goods.', '{"lessons": [{"type": "reading", "title": "Decluttering and Minimalism", "summary": "Strategies for managing accumulated items and developing minimalist approaches to possessions.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/", "button_text": "Possession Management"}]}', 5),
('shopping', 6, 'Alternative Activities and Fulfillment', 'Find non-material sources of satisfaction and fulfillment to replace shopping highs.', '{"lessons": [{"type": "reading", "title": "Non-Material Sources of Fulfillment", "summary": "Discovering satisfaction and fulfillment through experiences, relationships, and personal growth rather than purchases.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/", "button_text": "Alternative Fulfillment"}]}', 6),
('shopping', 7, 'Relationship Impact and Social Recovery', 'Address how shopping addiction affects relationships and social interactions.', '{"lessons": [{"type": "reading", "title": "Shopping Addiction and Relationships", "summary": "How compulsive buying affects relationships and strategies for social recovery.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/", "button_text": "Relationship Recovery"}]}', 7),
('shopping', 8, 'Sustainable Consumption and Long-Term Recovery', 'Develop sustainable consumption habits and long-term recovery strategies.', '{"lessons": [{"type": "reading", "title": "Sustainable Shopping Recovery", "summary": "Long-term strategies for maintaining healthy consumption habits and financial wellness.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6174874/", "button_text": "Sustainable Recovery"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
