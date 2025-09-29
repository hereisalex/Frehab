-- Pornography Addiction Recovery Track - Evidence-Based Modules
-- Based on latest research in compulsive sexual behavior and pornography addiction recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Pornography Addiction
('pornography', 1, 'Understanding Pornography Addiction and Compulsive Sexual Behavior', 
'Learn how pornography consumption can become compulsive and addictive, affecting brain chemistry, relationships, and sexual health.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Compulsive Sexual Behavior Disorder: WHO Recognition",
      "summary": "Understanding how the WHO recognizes compulsive sexual behavior disorder and its relationship to pornography use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/",
      "button_text": "Medical Recognition"
    },
    {
      "type": "video", 
      "title": "Pornography and Brain Chemistry",
      "summary": "How pornography affects dopamine pathways and creates patterns similar to substance addictions.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Brain Effects"
    },
    {
      "type": "tool",
      "title": "Compulsive Sexual Behavior Assessment",
      "summary": "Assess your pornography use patterns and their impact on your life and relationships.",
      "pdf_url": "/worksheets/pornography-addiction-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Pornography Addiction vs. Healthy Sexuality",
      "summary": "Understanding the difference between healthy sexual expression and compulsive pornography use.",
      "wiki_url": "/wiki/healthy-sexuality-vs-addiction",
      "button_text": "Healthy Sexuality"
    }
  ]
}', 1),

-- MODULE 2: Breaking the Cycle and Withdrawal
('pornography', 2, 'Breaking the Pornography Cycle and Managing Withdrawal',
'Learn to break compulsive pornography use patterns and manage the psychological withdrawal symptoms.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Pornography Withdrawal and Recovery Timeline",
      "summary": "Understanding the psychological symptoms and timeline of recovery from pornography addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/",
      "button_text": "Recovery Timeline"
    },
    {
      "type": "video",
      "title": "Breaking Compulsive Behavioral Patterns",
      "summary": "Strategies for interrupting automatic pornography use patterns and building new neural pathways.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Pattern Breaking"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Pornography Blockers and Environmental Controls",
      "summary": "Technical solutions and environmental changes to reduce access and triggers.",
      "wiki_url": "/wiki/pornography-blocking-tools",
      "button_text": "Blocking Tools"
    }
  ]
}', 2),

-- Condensed remaining modules focusing on key recovery areas
('pornography', 3, 'Sexual Health and Function Recovery', 'Address the impacts of pornography use on sexual health and intimate relationships.', '{"lessons": [{"type": "reading", "title": "Sexual Function Recovery", "summary": "How sexual health and function improve after stopping pornography use.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/", "button_text": "Sexual Recovery"}]}', 3),
('pornography', 4, 'Relationship Healing and Intimacy', 'Rebuild trust and intimacy in relationships affected by pornography addiction.', '{"lessons": [{"type": "reading", "title": "Rebuilding Relationship Trust", "summary": "How to heal relationships damaged by compulsive pornography use.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/", "button_text": "Relationship Healing"}]}', 4),
('pornography', 5, 'Shame and Self-Worth Recovery', 'Address shame, guilt, and self-worth issues commonly associated with pornography addiction.', '{"lessons": [{"type": "reading", "title": "Overcoming Shame in Recovery", "summary": "Addressing shame and rebuilding healthy self-worth during recovery.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/", "button_text": "Shame Recovery"}]}', 5),
('pornography', 6, 'Healthy Sexuality Development', 'Learn to develop healthy sexual attitudes and behaviors independent of pornography.', '{"lessons": [{"type": "reading", "title": "Developing Healthy Sexual Expression", "summary": "Building healthy sexual attitudes and behaviors after pornography addiction.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/", "button_text": "Healthy Expression"}]}', 6),
('pornography', 7, 'Trigger Management and Relapse Prevention', 'Identify and manage triggers that lead to compulsive pornography use.', '{"lessons": [{"type": "reading", "title": "Managing Pornography Triggers", "summary": "Identifying and managing environmental, emotional, and psychological triggers.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/", "button_text": "Trigger Management"}]}', 7),
('pornography', 8, 'Long-Term Recovery and Healthy Relationships', 'Build sustainable recovery and healthy intimate relationships free from compulsive sexual behavior.', '{"lessons": [{"type": "reading", "title": "Sustainable Recovery from Pornography Addiction", "summary": "Long-term strategies for maintaining recovery and building healthy relationships.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6352245/", "button_text": "Long-Term Success"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
