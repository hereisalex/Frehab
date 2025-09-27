-- FINAL SQL: Run this after the main tracks system SQL
-- This creates all 8 alcohol-specific modules with evidence-based content

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Alcohol Use Disorder
('alcohol', 1, 'Understanding Alcohol Use Disorder', 
'Learn the science behind alcohol addiction, including how alcohol affects your brain and body. Understand the DSM-5 criteria for Alcohol Use Disorder and recognize your relationship with alcohol using evidence-based assessments.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Neuroscience of Alcohol Addiction",
      "summary": "How alcohol hijacks your brain''s reward system and changes neural pathways. Learn about dopamine, GABA, and why willpower alone isn''t enough.",
      "external_url": "https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/drugs-brain",
      "button_text": "Read Science"
    },
    {
      "type": "video", 
      "title": "Alcohol Use Disorder: Clinical Overview",
      "summary": "Comprehensive medical overview of AUD criteria, symptoms, and the medical perspective on the disorder.",
      "external_url": "https://www.merckmanuals.com/home/multimedia/video/overview-of-alcohol-use-disorder",
      "button_text": "Watch Overview"
    },
    {
      "type": "video", 
      "title": "Alcohol Withdrawal: Clinical Aspects",
      "summary": "Educational explanation of alcohol withdrawal symptoms, management, and the medical basis of withdrawal.",
      "external_url": "https://www.osmosis.org/learn/Alcohol_withdrawal%3A_Clinical_sciences",
      "button_text": "Watch Withdrawal Science"
    },
    {
      "type": "reading",
      "title": "Physical Health Effects of Alcohol",
      "summary": "Comprehensive guide to how alcohol affects your liver, heart, brain, and immune system - and how your body heals in recovery.",
      "external_url": "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/alcohol-facts-and-statistics",
      "button_text": "Read Health Facts"
    },
    {
      "type": "tool",
      "title": "Alcohol Use Assessment (AUDIT-C)",
      "summary": "Take the clinically-validated 3-question screening tool to assess your alcohol use patterns.",
      "pdf_url": "/worksheets/alcohol-audit-worksheet.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Alcohol Withdrawal Timeline",
      "summary": "What to expect during alcohol withdrawal, when to seek medical help, and managing symptoms safely.",
      "wiki_url": "/wiki/alcohol-withdrawal",
      "button_text": "Withdrawal Guide"
    },
    {
      "type": "wiki",
      "title": "Post-Acute Withdrawal (PAWS) in Alcohol Recovery",
      "summary": "Understanding long-term withdrawal symptoms that can last months: anxiety, depression, sleep issues, and brain fog.",
      "wiki_url": "/wiki/alcohol-paws",
      "button_text": "PAWS Guide"
    }
  ]
}', 1),

-- MODULE 2: Breaking the Alcohol-Social Connection
('alcohol', 2, 'Navigating Social Triggers & Drinking Culture',
'Master the social aspects of alcohol recovery. Learn to handle social pressure, navigate drinking events, and build alcohol-free social connections while maintaining relationships.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Social Pressure and Alcohol: The Psychology",
      "summary": "Why social drinking is so ingrained in culture and evidence-based strategies for resisting peer pressure without isolation.",
      "external_url": "https://www.psychologytoday.com/us/blog/the-squeaky-wheel/201310/how-resist-peer-pressure",
      "button_text": "Read Strategies"
    },
    {
      "type": "video",
      "title": "Alcohol-Free Social Skills",
      "summary": "Practical techniques for handling bar invitations, work events, and social gatherings without feeling left out.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Watch Techniques"
    },
    {
      "type": "reading",
      "title": "Building Sober Social Networks",
      "summary": "Research on the importance of social support in recovery and how to find alcohol-free social connections.",
      "external_url": "https://www.samhsa.gov/find-help/recovery",
      "button_text": "Find Support"
    },
    {
      "type": "audio",
      "title": "Assertiveness Training for Recovery",
      "summary": "5-minute guided practice for saying no to drinks confidently and maintaining boundaries with grace.",
      "audio_url": "/audio/assertiveness-alcohol.mp3",
      "duration": "5:30",
      "button_text": "Practice Assertiveness"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Alcohol-Free Event Survival Guide",
      "summary": "Step-by-step strategies for weddings, parties, work events, and holidays. What to say, what to drink, how to enjoy yourself.",
      "wiki_url": "/wiki/alcohol-free-events",
      "button_text": "Event Guide"
    },
    {
      "type": "wiki", 
      "title": "Relationship Boundaries in Recovery",
      "summary": "How to communicate your recovery to family and friends, set healthy boundaries, and handle unsupportive relationships.",
      "wiki_url": "/wiki/recovery-relationships",
      "button_text": "Boundary Guide"
    }
  ]
}', 2),

-- MODULE 3: Replacing Alcohol Rituals
('alcohol', 3, 'Building New Habits: Beyond the Bottle',
'Replace alcohol-centered routines with healthy alternatives. Design new rituals for relaxation, celebration, and coping that don''t involve drinking.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Habit Loop: Alcohol Edition",
      "summary": "Understanding your alcohol habits using James Clear''s framework: cue, routine, reward. Identify your specific triggers and rewards.",
      "external_url": "https://jamesclear.com/how-to-break-a-bad-habit",
      "button_text": "Break the Loop"
    },
    {
      "type": "video",
      "title": "Healthy Stress Relief Without Alcohol",
      "summary": "Evidence-based alternatives to alcohol for managing stress: breathwork, exercise, meditation, and progressive muscle relaxation.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Learn Alternatives"
    },
    {
      "type": "reading",
      "title": "Sleep and Recovery: Beyond the Nightcap",
      "summary": "How alcohol disrupts sleep architecture and evidence-based sleep hygiene practices for better rest in recovery.",
      "external_url": "https://www.sleepfoundation.org/how-sleep-works/how-alcohol-affects-sleep",
      "button_text": "Improve Sleep"
    },
    {
      "type": "tool",
      "title": "Alcohol-Free Celebration Planner",
      "summary": "Design meaningful ways to celebrate achievements, holidays, and special occasions without alcohol.",
      "pdf_url": "/worksheets/alcohol-free-celebrations.pdf",
      "button_text": "Plan Celebrations"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Mocktail Recipes for Recovery",
      "summary": "Sophisticated alcohol-free drinks that satisfy the ritual of cocktail culture without the alcohol.",
      "wiki_url": "/wiki/mocktail-recipes",
      "button_text": "Browse Recipes"
    },
    {
      "type": "wiki",
      "title": "Evening Routine Redesign",
      "summary": "Replace the after-work drink with healthier wind-down rituals that actually help you relax and sleep better.",
      "wiki_url": "/wiki/alcohol-free-evenings",
      "button_text": "Redesign Evenings"
    }
  ]
}', 3),

-- MODULE 4: Alcohol-Specific Trigger Management
('alcohol', 4, 'Mastering Alcohol Triggers & Cravings',
'Develop advanced skills for managing alcohol-specific triggers including emotional states, locations, times of day, and high-risk situations unique to alcohol recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Alcohol Triggers: The Complete Map",
      "summary": "Comprehensive guide to internal triggers (emotions, thoughts) and external triggers (people, places, times) specific to alcohol use.",
      "external_url": "https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/preventing-drug-misuse-addiction-best-strategy",
      "button_text": "Map Your Triggers"
    },
    {
      "type": "video",
      "title": "Urge Surfing for Alcohol Cravings",
      "summary": "Mindfulness technique specifically adapted for alcohol cravings. Learn to observe and ride out urges without acting.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Learn Urge Surfing"
    },
    {
      "type": "reading",
      "title": "The HALT Method in Alcohol Recovery",
      "summary": "Hungry, Angry, Lonely, Tired - how these states specifically increase alcohol relapse risk and evidence-based prevention strategies.",
      "external_url": "https://www.psychologytoday.com/us/blog/urban-survival/201803/the-halt-approach",
      "button_text": "Master HALT"
    },
    {
      "type": "audio",
      "title": "Craving Meditation for Alcohol Recovery", 
      "summary": "8-minute guided meditation specifically designed for alcohol cravings, using acceptance and mindfulness techniques.",
      "audio_url": "/audio/alcohol-craving-meditation.mp3",
      "duration": "8:00",
      "button_text": "Practice Meditation"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Alcohol Emergency Response Plan",
      "summary": "Step-by-step action plan for high-risk situations: what to do, who to call, how to get through the first hour safely.",
      "wiki_url": "/wiki/alcohol-emergency-plan",
      "button_text": "Create Emergency Plan"
    },
    {
      "type": "wiki",
      "title": "Weekend and Holiday Survival",
      "summary": "Special strategies for high-risk times when alcohol availability and social pressure peak.",
      "wiki_url": "/wiki/alcohol-weekend-survival",
      "button_text": "Weekend Strategies"
    }
  ]
}', 4),

-- MODULE 5: Physical & Mental Health in Alcohol Recovery
('alcohol', 5, 'Healing Your Body and Mind',
'Focus on the unique health challenges and opportunities in alcohol recovery. Address nutrition, exercise, mental health, and medical considerations specific to alcohol use disorder.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Alcohol Recovery Nutrition Science",
      "summary": "How alcohol depletes nutrients, affects blood sugar, and disrupts metabolism. Evidence-based nutrition for healing and craving reduction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4590612/",
      "button_text": "Read Nutrition Science"
    },
    {
      "type": "video", 
      "title": "Exercise as Medicine in Alcohol Recovery",
      "summary": "Research on how exercise reduces alcohol cravings, improves mood, and aids neuroplasticity in recovery.",
      "video_id": "oTugjssqOT0",
      "button_text": "Exercise Benefits"
    },
    {
      "type": "reading",
      "title": "Mental Health and Alcohol: The Connection",
      "summary": "Understanding co-occurring depression, anxiety, and trauma. When to seek professional help and treatment options.",
      "external_url": "https://www.nimh.nih.gov/health/topics/substance-use-and-mental-health",
      "button_text": "Mental Health Guide"
    },
    {
      "type": "tool",
      "title": "Alcohol Recovery Wellness Tracker",
      "summary": "Track sleep, mood, energy, cravings, and physical symptoms to see your progress and identify patterns.",
      "pdf_url": "/worksheets/alcohol-wellness-tracker.pdf",
      "button_text": "Download Tracker"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Liver Health in Recovery",
      "summary": "How the liver heals after alcohol cessation, supporting detoxification, and when liver damage may be permanent.",
      "wiki_url": "/wiki/liver-recovery",
      "button_text": "Liver Health"
    },
    {
      "type": "wiki",
      "title": "Medication-Assisted Treatment for AUD",
      "summary": "Overview of FDA-approved medications: naltrexone, acamprosate, disulfiram, and newer options like gabapentin.",
      "wiki_url": "/wiki/alcohol-medications",
      "button_text": "Treatment Options"
    }
  ]
}', 5),

-- MODULE 6: Relationships & Family in Alcohol Recovery
('alcohol', 6, 'Rebuilding Trust and Relationships',
'Address the relationship damage caused by alcohol use and learn evidence-based approaches to rebuilding trust, communication, and intimacy with family and friends.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Family Systems and Alcohol Addiction",
      "summary": "How alcohol addiction affects entire family systems, codependency patterns, and the importance of family involvement in recovery.",
      "external_url": "https://www.samhsa.gov/sites/default/files/fasd_center_family_guide_english.pdf",
      "button_text": "Family Impact"
    },
    {
      "type": "video",
      "title": "Making Amends: The Right Way",
      "summary": "Step-by-step guide to genuine apologies and making amends for alcohol-related harm, based on 12-step principles and therapeutic research.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Making Amends"
    },
    {
      "type": "reading",
      "title": "Dating and Romance in Alcohol Recovery",
      "summary": "Navigating romantic relationships in early recovery, disclosure decisions, and building intimacy without alcohol.",
      "external_url": "https://www.psychologytoday.com/us/blog/the-addiction-connection/201803/dating-in-recovery",
      "button_text": "Romance in Recovery"
    },
    {
      "type": "audio",
      "title": "Communication Skills for Recovery",
      "summary": "Guided practice in active listening, expressing needs, and having difficult conversations without alcohol as a social lubricant.",
      "audio_url": "/audio/communication-skills.mp3",
      "duration": "6:45",
      "button_text": "Practice Communication"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Al-Anon and Family Support Resources",
      "summary": "How Al-Anon helps families heal, finding meetings, and supporting loved ones in their own recovery journey.",
      "wiki_url": "/wiki/family-support-groups",
      "button_text": "Family Resources"
    },
    {
      "type": "wiki",
      "title": "Couples Therapy in Alcohol Recovery",
      "summary": "When and how to seek couples counseling, what to expect, and specialized therapies for addiction and relationships.",
      "wiki_url": "/wiki/couples-therapy-addiction",
      "button_text": "Couples Resources"
    }
  ]
}', 6),

-- MODULE 7: Legal, Professional & Financial Recovery
('alcohol', 7, 'Rebuilding Your Life: Legal, Work & Money',
'Address the practical consequences of alcohol use disorder including legal issues, professional challenges, and financial recovery strategies specific to alcohol-related problems.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "DUI and Legal Consequences: Moving Forward",
      "summary": "Practical guide to handling DUI charges, license suspension, legal requirements, and preventing future legal problems.",
      "external_url": "https://www.nhtsa.gov/risky-driving/drunk-driving",
      "button_text": "Legal Recovery"
    },
    {
      "type": "video", 
      "title": "Workplace Recovery: Professional Boundaries",
      "summary": "Navigating work relationships, workplace drinking culture, business events, and disclosure decisions in professional settings.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Workplace Strategies"
    },
    {
      "type": "reading",
      "title": "Financial Recovery from Alcohol Addiction",
      "summary": "Calculating the true cost of alcohol use, budgeting in recovery, and rebuilding financial stability after alcohol-related expenses.",
      "external_url": "https://www.investopedia.com/articles/personal-finance/100815/how-much-do-you-really-spend-alcohol.asp",
      "button_text": "Financial Recovery"
    },
    {
      "type": "tool",
      "title": "Alcohol Cost Calculator & Recovery Budget",
      "summary": "Calculate how much you spent on alcohol and plan your recovery budget with the money you''re saving.",
      "pdf_url": "/worksheets/alcohol-financial-recovery.pdf",
      "button_text": "Calculate Savings"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Employee Assistance Programs (EAP)",
      "summary": "How to access workplace recovery support, confidentiality protections, and using EAP benefits for addiction treatment.",
      "wiki_url": "/wiki/employee-assistance-programs",
      "button_text": "EAP Guide"
    },
    {
      "type": "wiki",
      "title": "Insurance and Addiction Treatment",
      "summary": "Understanding insurance coverage for alcohol treatment, finding in-network providers, and appealing denied claims.",
      "wiki_url": "/wiki/insurance-addiction-treatment",
      "button_text": "Insurance Guide"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Alcohol Recovery Success
('alcohol', 8, 'Sustaining Long-Term Sobriety',
'Build a comprehensive long-term recovery plan focused on maintaining alcohol sobriety, continued growth, and creating a meaningful life in recovery from alcohol use disorder.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Science of Long-Term Alcohol Recovery",
      "summary": "Research on recovery maintenance, neuroplasticity timeline, and what successful long-term recovery looks like statistically.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4553654/",
      "button_text": "Recovery Science"
    },
    {
      "type": "video",
      "title": "Building Your Recovery Identity",
      "summary": "Transitioning from ''I''m an alcoholic'' to ''I''m someone who doesn''t drink'' - identity shifts in long-term recovery.",
      "video_id": "oTugjssqOT0",
      "button_text": "Recovery Identity"
    },
    {
      "type": "reading",
      "title": "Post-Traumatic Growth in Recovery",
      "summary": "How many people experience significant personal growth and improved life satisfaction in long-term alcohol recovery.",
      "external_url": "https://www.psychologytoday.com/us/blog/hope-resilience/201803/post-traumatic-growth-in-addiction-recovery",
      "button_text": "Growth Mindset"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Alcohol-Free Future",
      "summary": "Guided visualization exercise for creating a compelling vision of your long-term life in recovery from alcohol.",
      "audio_url": "/audio/alcohol-future-visualization.mp3",
      "duration": "10:00",
      "button_text": "Visualize Future"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Alcohol Recovery Milestone Celebrations",
      "summary": "Meaningful ways to celebrate sobriety milestones: 30 days, 90 days, 1 year, and beyond without alcohol.",
      "wiki_url": "/wiki/sobriety-milestones",
      "button_text": "Celebrate Milestones"
    },
    {
      "type": "wiki",
      "title": "Giving Back: Service in Alcohol Recovery",
      "summary": "How helping others in early alcohol recovery strengthens your own sobriety and provides meaning and purpose.",
      "wiki_url": "/wiki/recovery-service-opportunities",
      "button_text": "Service Opportunities"
    }
  ]
}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
