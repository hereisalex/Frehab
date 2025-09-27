-- Nicotine/Tobacco Recovery Track - Evidence-Based Modules
-- Based on latest research in nicotine addiction, smoking cessation, and vaping recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Nicotine Addiction
('nicotine', 1, 'Understanding Nicotine Addiction: Smoking, Vaping, and Tobacco', 
'Learn how nicotine creates powerful addiction through cigarettes, vapes, and other tobacco products. Understand why quitting is so challenging.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Nicotine Addiction: The Most Common Addiction",
      "summary": "How nicotine creates powerful addiction and why it''s one of the hardest substances to quit.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/",
      "button_text": "Nicotine Science"
    },
    {
      "type": "video", 
      "title": "Smoking vs. Vaping: Different Delivery, Same Addiction",
      "summary": "How different nicotine delivery methods (cigarettes, vapes, patches, pouches) affect addiction potential.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Delivery Methods"
    },
    {
      "type": "tool",
      "title": "Nicotine Dependence Assessment",
      "summary": "Assess your level of nicotine dependence using validated screening tools.",
      "pdf_url": "/worksheets/nicotine-dependence-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Vaping vs. Smoking: Health and Addiction Differences",
      "summary": "Comparing the health risks and addiction potential of different nicotine products.",
      "wiki_url": "/wiki/vaping-vs-smoking",
      "button_text": "Product Comparison"
    }
  ]
}', 1),

-- MODULE 2: Quitting Methods and Withdrawal
('nicotine', 2, 'Nicotine Withdrawal and Quitting Strategies',
'Learn about different quitting methods and how to manage nicotine withdrawal symptoms effectively.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Nicotine Withdrawal: Timeline and Symptoms",
      "summary": "Understanding the physical and psychological symptoms of nicotine withdrawal and how long they last.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/",
      "button_text": "Withdrawal Timeline"
    },
    {
      "type": "video",
      "title": "Cold Turkey vs. Gradual Reduction vs. NRT",
      "summary": "Comparing different quitting approaches: cold turkey, gradual reduction, and nicotine replacement therapy.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Quitting Methods"
    },
    {
      "type": "reading",
      "title": "Nicotine Replacement Therapy Options",
      "summary": "Understanding patches, gum, lozenges, and other NRT options for managing withdrawal.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/",
      "button_text": "NRT Options"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Managing Nicotine Cravings",
      "summary": "Evidence-based strategies for managing intense nicotine cravings and urges.",
      "wiki_url": "/wiki/nicotine-craving-management",
      "button_text": "Craving Management"
    }
  ]
}', 2),

-- Condensed remaining modules
('nicotine', 3, 'Triggers and Habit Breaking', 'Identify and break the behavioral patterns and triggers associated with nicotine use.', '{"lessons": [{"type": "reading", "title": "Breaking Nicotine Habits and Triggers", "summary": "Identifying and changing the behavioral patterns that trigger nicotine use.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/", "button_text": "Habit Breaking"}]}', 3),
('nicotine', 4, 'Health Recovery and Benefits', 'Understand the timeline of health improvements after quitting nicotine and tobacco products.', '{"lessons": [{"type": "reading", "title": "Health Benefits Timeline After Quitting", "summary": "How your body heals and improves after stopping nicotine and tobacco use.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/", "button_text": "Health Recovery"}]}', 4),
('nicotine', 5, 'Weight Management and Metabolism', 'Address weight gain concerns and metabolic changes that can occur when quitting nicotine.', '{"lessons": [{"type": "reading", "title": "Weight Management After Quitting Nicotine", "summary": "Understanding and managing weight changes during nicotine cessation.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/", "button_text": "Weight Management"}]}', 5),
('nicotine', 6, 'Social Situations and Peer Pressure', 'Navigate social situations and peer pressure related to smoking and vaping.', '{"lessons": [{"type": "reading", "title": "Social Aspects of Quitting Nicotine", "summary": "Handling social situations and peer pressure when quitting nicotine products.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/", "button_text": "Social Navigation"}]}', 6),
('nicotine', 7, 'Stress Management Without Nicotine', 'Learn healthy stress management techniques to replace nicotine as a coping mechanism.', '{"lessons": [{"type": "reading", "title": "Stress Management in Nicotine Recovery", "summary": "Healthy alternatives to nicotine for managing stress and difficult emotions.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/", "button_text": "Stress Alternatives"}]}', 7),
('nicotine', 8, 'Long-Term Recovery and Relapse Prevention', 'Create sustainable strategies for maintaining nicotine-free life and preventing relapse.', '{"lessons": [{"type": "reading", "title": "Maintaining Long-Term Nicotine Freedom", "summary": "Strategies for staying quit long-term and preventing nicotine relapse.", "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4669730/", "button_text": "Long-Term Success"}]}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
