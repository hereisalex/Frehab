-- Cocaine/Crack Recovery Track - Evidence-Based Modules
-- Based on latest research in stimulant use disorders, cocaine neurotoxicity, and crack epidemic lessons

-- Insert cocaine-specific modules with comprehensive, evidence-based content
INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Cocaine Addiction & Brain Effects
('cocaine', 1, 'Understanding Cocaine & Crack Addiction', 
'Learn the science of cocaine addiction including how cocaine hijacks your brain''s reward system more powerfully than almost any other substance. Understand the differences between powder cocaine and crack cocaine.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine''s Assault on the Brain",
      "summary": "How cocaine blocks dopamine reuptake more powerfully than other drugs, creating intense euphoria followed by devastating crashes and rapid addiction.",
      "external_url": "https://nida.nih.gov/publications/research-reports/cocaine/how-does-cocaine-affect-brain",
      "button_text": "Brain Science"
    },
    {
      "type": "video", 
      "title": "Powder Cocaine vs Crack: Critical Differences",
      "summary": "Understanding the pharmacological and social differences between powder cocaine and crack cocaine, including onset, duration, and addiction potential.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Cocaine Types"
    },
    {
      "type": "reading",
      "title": "The Cocaine Epidemic: Past, Present, and Future",
      "summary": "History of cocaine use from medical applications to the crack epidemic to current trends. Understanding cocaine''s place in the addiction landscape.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2719839/",
      "button_text": "Cocaine History"
    },
    {
      "type": "tool",
      "title": "Cocaine Use Disorder Assessment",
      "summary": "Comprehensive assessment of cocaine use patterns, health consequences, and addiction severity using clinical screening tools.",
      "pdf_url": "/worksheets/cocaine-use-disorder-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cocaine vs Crack: Routes of Administration",
      "summary": "How snorting, smoking, and injecting cocaine affect addiction development, health risks, and recovery challenges differently.",
      "wiki_url": "/wiki/cocaine-administration-routes",
      "button_text": "Administration Routes"
    },
    {
      "type": "wiki",
      "title": "Cocaine''s Effects on Dopamine and Reward",
      "summary": "Deep dive into how cocaine creates the most powerful dopamine spike of common drugs and why this makes recovery so challenging.",
      "wiki_url": "/wiki/cocaine-dopamine-effects",
      "button_text": "Dopamine Science"
    }
  ]
}', 1),

-- MODULE 2: Cocaine Withdrawal & Acute Recovery
('cocaine', 2, 'Navigating Cocaine Withdrawal and Early Recovery',
'Understand cocaine withdrawal syndrome, including the intense depression and cravings that characterize early recovery. Learn evidence-based strategies for managing the acute phase.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine Withdrawal: The Crash and Beyond",
      "summary": "Understanding cocaine withdrawal phases: the crash, withdrawal, and extinction phases. Why cocaine withdrawal is primarily psychological but intensely difficult.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3202040/",
      "button_text": "Withdrawal Science"
    },
    {
      "type": "video",
      "title": "Managing Cocaine Cravings and Depression",
      "summary": "Evidence-based strategies for managing the intense cravings and severe depression that characterize cocaine withdrawal.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Craving Management"
    },
    {
      "type": "reading",
      "title": "Sleep and Appetite Recovery After Cocaine",
      "summary": "How cocaine disrupts sleep and appetite, and evidence-based approaches to restoring normal sleep and eating patterns in recovery.",
      "external_url": "https://www.sleepfoundation.org/how-sleep-works/how-cocaine-affects-sleep",
      "button_text": "Sleep Recovery"
    },
    {
      "type": "audio",
      "title": "Cocaine Withdrawal Coping Techniques",
      "summary": "Guided breathing and mindfulness exercises specifically designed for managing cocaine cravings and withdrawal depression.",
      "audio_url": "/audio/cocaine-withdrawal-coping.mp3",
      "duration": "9:00",
      "button_text": "Coping Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cocaine Withdrawal Timeline & Phases",
      "summary": "Detailed timeline of cocaine withdrawal: crash phase (1-3 days), withdrawal phase (1-10 weeks), and extinction phase (indefinite).",
      "wiki_url": "/wiki/cocaine-withdrawal-timeline",
      "button_text": "Withdrawal Timeline"
    },
    {
      "type": "wiki", 
      "title": "Managing Cocaine-Related Depression",
      "summary": "Understanding and managing the severe depression that often accompanies cocaine withdrawal, including when to seek professional help.",
      "wiki_url": "/wiki/cocaine-depression-management",
      "button_text": "Depression Help"
    }
  ]
}', 2),

-- MODULE 3: Cocaine Health Consequences & Medical Recovery
('cocaine', 3, 'Addressing Cocaine''s Health Impact and Medical Recovery',
'Understand the serious health consequences of cocaine use including cardiovascular, neurological, and respiratory effects. Learn about medical monitoring and health restoration in recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine''s Cardiovascular Dangers",
      "summary": "How cocaine affects the heart and blood vessels, including heart attack, stroke, and sudden death risks. Understanding long-term cardiovascular damage.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4462037/",
      "button_text": "Heart Health"
    },
    {
      "type": "video",
      "title": "Cocaine''s Brain Damage: Cognitive Recovery",
      "summary": "How cocaine damages brain structure and function, affecting memory, decision-making, and impulse control. Recovery potential and timeline.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Brain Recovery"
    },
    {
      "type": "reading",
      "title": "Respiratory Health and Crack Cocaine",
      "summary": "How smoking crack cocaine damages lungs and airways. ''Crack lung'' syndrome and other respiratory complications of cocaine use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4830267/",
      "button_text": "Lung Health"
    },
    {
      "type": "tool",
      "title": "Cocaine Health Recovery Tracker",
      "summary": "Monitor your physical and mental health recovery from cocaine use. Track cardiovascular, respiratory, and cognitive improvements.",
      "pdf_url": "/worksheets/cocaine-health-recovery-tracker.pdf",
      "button_text": "Health Tracker"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Medical Monitoring in Cocaine Recovery",
      "summary": "What medical tests and monitoring you may need in cocaine recovery, including cardiac evaluation and neurological assessment.",
      "wiki_url": "/wiki/cocaine-medical-monitoring",
      "button_text": "Medical Care"
    },
    {
      "type": "wiki",
      "title": "Nutrition and Exercise in Cocaine Recovery",
      "summary": "How to support brain and body healing through proper nutrition and exercise after cocaine use. Rebuilding physical health.",
      "wiki_url": "/wiki/cocaine-nutrition-exercise",
      "button_text": "Health Building"
    }
  ]
}', 3),

-- MODULE 4: Cocaine Triggers and High-Risk Situations
('cocaine', 4, 'Managing Cocaine Triggers and Preventing Relapse',
'Identify and manage the specific triggers and high-risk situations that lead to cocaine use. Learn evidence-based relapse prevention strategies for cocaine addiction.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine''s Powerful Conditioned Responses",
      "summary": "How cocaine creates stronger environmental cues and triggers than other drugs. Understanding classical conditioning and cocaine addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2703705/",
      "button_text": "Trigger Science"
    },
    {
      "type": "video",
      "title": "Common Cocaine Triggers and Cue Management",
      "summary": "Identifying personal cocaine triggers including people, places, emotions, and situations. Evidence-based cue exposure and response prevention.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Trigger Management"
    },
    {
      "type": "reading",
      "title": "Money, Alcohol, and Cocaine: High-Risk Combinations",
      "summary": "How having money and using alcohol dramatically increase cocaine relapse risk. Managing these high-risk situations in recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3056147/",
      "button_text": "High-Risk Situations"
    },
    {
      "type": "audio",
      "title": "Cocaine Urge Surfing Techniques", 
      "summary": "Mindfulness-based urge surfing specifically adapted for the intense, rapid-onset cravings characteristic of cocaine addiction.",
      "audio_url": "/audio/cocaine-urge-surfing.mp3",
      "duration": "7:00",
      "button_text": "Urge Surfing"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cocaine Environmental Triggers Management",
      "summary": "How to identify and manage environmental triggers for cocaine use, including people, places, and paraphernalia.",
      "wiki_url": "/wiki/cocaine-environmental-triggers",
      "button_text": "Environment Safety"
    },
    {
      "type": "wiki",
      "title": "Financial Management in Cocaine Recovery",
      "summary": "Managing money and finances in cocaine recovery to reduce access-related relapse risks. Financial accountability strategies.",
      "wiki_url": "/wiki/cocaine-financial-management",
      "button_text": "Money Management"
    }
  ]
}', 4),

-- MODULE 5: Cocaine, Crime, and Legal Consequences
('cocaine', 5, 'Navigating Legal Issues and Criminal Justice',
'Address the intersection of cocaine use and criminal activity. Understand legal consequences, criminal justice involvement, and paths to legal recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine Laws: Powder vs Crack Disparities",
      "summary": "Understanding the legal differences between powder cocaine and crack cocaine, including sentencing disparities and recent legal reforms.",
      "external_url": "https://www.sentencingproject.org/reports/crack-cocaine-sentencing-policy/",
      "button_text": "Legal Disparities"
    },
    {
      "type": "video", 
      "title": "Drug Courts and Cocaine Treatment Programs",
      "summary": "How drug courts work as alternatives to incarceration for cocaine-related charges. Treatment court eligibility and success strategies.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Treatment Courts"
    },
    {
      "type": "reading",
      "title": "Probation, Parole, and Cocaine Recovery",
      "summary": "Managing criminal justice supervision while in cocaine recovery. Drug testing, reporting requirements, and avoiding violations.",
      "external_url": "https://www.samhsa.gov/criminal-juvenile-justice/sim-guide",
      "button_text": "CJ Supervision"
    },
    {
      "type": "tool",
      "title": "Legal Recovery Planning for Cocaine Cases",
      "summary": "Organize court dates, legal obligations, and recovery goals to successfully navigate the criminal justice system.",
      "pdf_url": "/worksheets/cocaine-legal-recovery-plan.pdf",
      "button_text": "Legal Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cocaine Drug Testing and Detection",
      "summary": "How long cocaine stays in different body systems, drug testing methods, and strategies for legal compliance.",
      "wiki_url": "/wiki/cocaine-drug-testing",
      "button_text": "Drug Testing"
    },
    {
      "type": "wiki",
      "title": "Expungement and Record Sealing for Drug Charges",
      "summary": "Legal options for clearing or sealing cocaine-related criminal records after successful recovery and compliance.",
      "wiki_url": "/wiki/drug-record-expungement",
      "button_text": "Record Clearing"
    }
  ]
}', 5),

-- MODULE 6: Relationships and Social Recovery from Cocaine
('cocaine', 6, 'Rebuilding Relationships and Social Connections',
'Address how cocaine addiction damages relationships and social connections. Learn to rebuild trust, manage relationship triggers, and create healthy social networks.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine''s Impact on Relationships and Trust",
      "summary": "How cocaine addiction affects intimate relationships, friendships, and family dynamics. The specific relationship damage caused by cocaine use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4453919/",
      "button_text": "Relationship Impact"
    },
    {
      "type": "video",
      "title": "Rebuilding Trust After Cocaine Addiction",
      "summary": "Specific strategies for rebuilding trust with family and friends after cocaine addiction. Making amends and demonstrating change.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Trust Building"
    },
    {
      "type": "reading",
      "title": "Social Networks and Cocaine Recovery",
      "summary": "How to navigate social situations, find new sober friends, and avoid drug-using social networks that trigger cocaine use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3740946/",
      "button_text": "Social Recovery"
    },
    {
      "type": "audio",
      "title": "Communication Skills for Cocaine Recovery",
      "summary": "Guided practice for difficult conversations about cocaine addiction, recovery, and rebuilding relationships with loved ones.",
      "audio_url": "/audio/cocaine-communication-skills.mp3",
      "duration": "10:00",
      "button_text": "Communication Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Dating and Intimate Relationships in Recovery",
      "summary": "Navigating romantic relationships in cocaine recovery, including disclosure decisions and finding compatible partners.",
      "wiki_url": "/wiki/cocaine-dating-recovery",
      "button_text": "Dating Recovery"
    },
    {
      "type": "wiki",
      "title": "Family Support and Education for Cocaine Addiction",
      "summary": "Resources for family members to understand cocaine addiction and how to support recovery without enabling use.",
      "wiki_url": "/wiki/family-cocaine-addiction-support",
      "button_text": "Family Resources"
    }
  ]
}', 6),

-- MODULE 7: Workplace and Financial Recovery
('cocaine', 7, 'Rebuilding Career and Financial Stability',
'Address the workplace and financial consequences of cocaine addiction. Learn to rebuild career prospects, manage financial damage, and create stability in recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine''s Impact on Work Performance and Career",
      "summary": "How cocaine use affects job performance, career advancement, and professional relationships. The workplace consequences of cocaine addiction.",
      "external_url": "https://www.samhsa.gov/workplace/toolkit/cost-benefit-substance-use-treatment",
      "button_text": "Workplace Impact"
    },
    {
      "type": "video", 
      "title": "Financial Recovery After Cocaine Addiction",
      "summary": "Addressing the financial devastation often caused by cocaine addiction. Debt management, budgeting, and rebuilding financial stability.",
      "video_id": "oTugjssqOT0",
      "button_text": "Financial Recovery"
    },
    {
      "type": "reading",
      "title": "Employment and Disclosure in Cocaine Recovery",
      "summary": "Making decisions about employment disclosure, background checks, and finding employers supportive of recovery.",
      "external_url": "https://www.dol.gov/agencies/odep/program-areas/mental-health/substance-use-disorders",
      "button_text": "Employment Support"
    },
    {
      "type": "tool",
      "title": "Career and Financial Recovery Plan",
      "summary": "Create a comprehensive plan for rebuilding career prospects and achieving financial stability in cocaine recovery.",
      "pdf_url": "/worksheets/cocaine-career-financial-plan.pdf",
      "button_text": "Recovery Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Vocational Rehabilitation and Job Training",
      "summary": "Resources for job training, education, and vocational rehabilitation for people in recovery from cocaine addiction.",
      "wiki_url": "/wiki/cocaine-vocational-recovery",
      "button_text": "Job Training"
    },
    {
      "type": "wiki",
      "title": "Cocaine Recovery and Entrepreneurship",
      "summary": "How recovery from cocaine addiction can lead to entrepreneurial opportunities and self-employment options.",
      "wiki_url": "/wiki/cocaine-recovery-entrepreneurship",
      "button_text": "Self-Employment"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Cocaine Recovery and Life Reconstruction
('cocaine', 8, 'Sustaining Recovery and Building a New Life',
'Build a comprehensive long-term recovery plan focused on maintaining sobriety from cocaine and creating a fulfilling, meaningful life in recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Long-Term Cocaine Recovery Outcomes",
      "summary": "Research on long-term recovery from cocaine addiction: factors that predict success, common challenges, and life outcomes in sustained recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6457050/",
      "button_text": "Recovery Outcomes"
    },
    {
      "type": "video",
      "title": "Building Purpose and Meaning After Cocaine",
      "summary": "Finding purpose, meaning, and fulfillment in life after cocaine addiction. Pursuing goals and dreams in recovery.",
      "video_id": "oTugjssqOT0",
      "button_text": "Life Purpose"
    },
    {
      "type": "reading",
      "title": "Cocaine Recovery and Post-Traumatic Growth",
      "summary": "How recovering from cocaine addiction can lead to personal growth, improved relationships, and a more meaningful life than before addiction.",
      "external_url": "https://www.psychologytoday.com/us/blog/hope-resilience/201803/post-traumatic-growth-in-addiction-recovery",
      "button_text": "Personal Growth"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Cocaine-Free Future",
      "summary": "Guided meditation for envisioning long-term success in cocaine recovery, focusing on health, relationships, and personal achievements.",
      "audio_url": "/audio/cocaine-future-visualization.mp3",
      "duration": "11:00",
      "button_text": "Future Visualization"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cocaine Recovery Milestone Celebrations",
      "summary": "Meaningful ways to celebrate recovery milestones in cocaine recovery, from first week clean to years of sustained sobriety.",
      "wiki_url": "/wiki/cocaine-recovery-milestones",
      "button_text": "Milestone Celebrations"
    },
    {
      "type": "wiki",
      "title": "Giving Back: Helping Others with Cocaine Addiction",
      "summary": "How to use your recovery experience to help others struggling with cocaine addiction. Peer support and advocacy opportunities.",
      "wiki_url": "/wiki/cocaine-recovery-peer-support",
      "button_text": "Helping Others"
    }
  ]
}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
