-- Depressants/Downers Recovery Track - Evidence-Based Modules
-- Based on latest research in CNS depressant dependence and withdrawal management

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Depressant Dependence
('depressants', 1, 'Understanding CNS Depressant Dependence', 
'Learn how barbiturates, sedatives, and prescription downers create physical dependence and require medical supervision for safe withdrawal.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "CNS Depressants: Types and Risks",
      "summary": "Understanding barbiturates, sedatives, and other central nervous system depressants and their dependence potential.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/",
      "button_text": "Depressant Types"
    },
    {
      "type": "video", 
      "title": "GABA System and Depressant Withdrawal",
      "summary": "How CNS depressants affect the GABA system and why withdrawal can be life-threatening.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Withdrawal Science"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Depressants vs. Benzodiazepines",
      "summary": "Understanding the similarities and differences between various CNS depressants.",
      "wiki_url": "/wiki/depressants-vs-benzos",
      "button_text": "Comparison Guide"
    }
  ]
}', 1),

-- Condensed modules for efficiency
('depressants', 2, 'Medical Withdrawal and Safety', 'Understand why depressant withdrawal requires medical supervision and proper tapering protocols.', '{"lessons": [{"type": "reading", "title": "Safe Depressant Withdrawal", "summary": "Medical protocols for safe withdrawal from CNS depressants.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Medical Withdrawal"}]}', 2),
('depressants', 3, 'Sleep and Anxiety Without Depressants', 'Learn alternative approaches to managing sleep disorders and anxiety without CNS depressants.', '{"lessons": [{"type": "reading", "title": "Natural Sleep and Anxiety Management", "summary": "Evidence-based alternatives to prescription depressants for sleep and anxiety.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Natural Alternatives"}]}', 3),
('depressants', 4, 'Cognitive Recovery and Function', 'Address the cognitive fog and memory issues associated with depressant use and withdrawal.', '{"lessons": [{"type": "reading", "title": "Cognitive Recovery from Depressants", "summary": "How cognitive function improves after stopping CNS depressants.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Brain Recovery"}]}', 4),
('depressants', 5, 'Medical Provider Relationships', 'Learn to work with healthcare providers for appropriate treatment and tapering support.', '{"lessons": [{"type": "reading", "title": "Healthcare Provider Communication", "summary": "How to discuss depressant dependence and treatment options with medical professionals.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Provider Communication"}]}', 5),
('depressants', 6, 'Underlying Condition Management', 'Address the underlying conditions that led to depressant prescription without creating dependence.', '{"lessons": [{"type": "reading", "title": "Treating Root Causes", "summary": "Managing sleep disorders, anxiety, and other conditions without dependence-forming medications.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Root Cause Treatment"}]}', 6),
('depressants', 7, 'Emergency Preparedness', 'Understand emergency protocols and safety planning for depressant withdrawal complications.', '{"lessons": [{"type": "reading", "title": "Withdrawal Emergency Planning", "summary": "Safety planning and emergency protocols for serious withdrawal complications.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Emergency Planning"}]}', 7),
('depressants', 8, 'Long-Term Recovery and Prevention', 'Create sustainable recovery plans and prevent future dependence on CNS depressants.', '{"lessons": [{"type": "reading", "title": "Sustainable Recovery from Depressants", "summary": "Long-term strategies for maintaining recovery and preventing relapse.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/", "button_text": "Long-Term Recovery"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
