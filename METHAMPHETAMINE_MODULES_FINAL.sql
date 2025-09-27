-- METHAMPHETAMINE RECOVERY MODULES - Run this SQL after the main tracks system
-- Evidence-based modules specifically designed for methamphetamine addiction recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Methamphetamine Addiction
('methamphetamine', 1, 'Understanding Methamphetamine & Your Brain', 
'Learn how methamphetamine affects your brain differently from other substances. Understand neurotoxicity, dopamine system damage, and why meth addiction requires specialized recovery approaches.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Methamphetamine Neurotoxicity: The Science",
      "summary": "How meth damages dopamine neurons, affects brain structure, and why recovery takes longer than other substances. Understanding the neurobiological basis of meth addiction.",
      "external_url": "https://nida.nih.gov/publications/research-reports/methamphetamine/how-does-methamphetamine-use-affect-brain",
      "button_text": "Read Brain Science"
    },
    {
      "type": "video", 
      "title": "Stimulant Addiction vs Other Drugs",
      "summary": "How methamphetamine addiction differs from alcohol, opioids, and other substances in terms of brain effects, withdrawal, and recovery timeline.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Comparison"
    },
    {
      "type": "reading",
      "title": "Physical Health Effects of Methamphetamine",
      "summary": "Comprehensive guide to meth''s effects on cardiovascular, dental, skin, and immune systems - and evidence for recovery potential.",
      "external_url": "https://www.drugabuse.gov/publications/drugfacts/methamphetamine",
      "button_text": "Health Effects"
    },
    {
      "type": "tool",
      "title": "Meth Use Pattern Assessment",
      "summary": "Assess your methamphetamine use patterns, route of administration, and associated risk factors using clinical screening tools.",
      "pdf_url": "/worksheets/meth-use-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Methamphetamine Withdrawal Timeline",
      "summary": "What to expect during meth withdrawal: crash phase, subacute withdrawal, and protracted symptoms. When to seek medical help.",
      "wiki_url": "/wiki/meth-withdrawal",
      "button_text": "Withdrawal Guide"
    },
    {
      "type": "wiki",
      "title": "Cognitive Recovery After Methamphetamine",
      "summary": "How long brain healing takes, cognitive rehabilitation strategies, and what functions may recover vs. remain impaired.",
      "wiki_url": "/wiki/meth-cognitive-recovery",
      "button_text": "Cognitive Recovery"
    }
  ]
}', 1),

-- MODULE 2: Managing the Crash & Early Recovery
('methamphetamine', 2, 'Surviving the Crash: Early Recovery Challenges',
'Navigate the intense crash phase and early recovery period. Learn to manage extreme fatigue, depression, and cognitive impairment while building sustainable recovery habits.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Methamphetamine Crash: Medical Overview",
      "summary": "Understanding the crash phase: hypersomnia, severe depression, intense cravings. Why this phase is dangerous and how long it typically lasts.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2631950/",
      "button_text": "Crash Science"
    },
    {
      "type": "video",
      "title": "Sleep Restoration in Meth Recovery",
      "summary": "How methamphetamine disrupts sleep architecture and evidence-based strategies for restoring healthy sleep patterns in early recovery.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Sleep Recovery"
    },
    {
      "type": "reading",
      "title": "Nutrition for Stimulant Recovery",
      "summary": "How meth depletes nutrients, affects appetite and metabolism. Specific nutritional interventions to support brain healing and energy restoration.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4706185/",
      "button_text": "Recovery Nutrition"
    },
    {
      "type": "audio",
      "title": "Energy Management in Early Recovery",
      "summary": "Guided practices for managing extreme fatigue, planning activities around energy cycles, and building sustainable daily routines.",
      "audio_url": "/audio/meth-energy-management.mp3",
      "duration": "7:00",
      "button_text": "Energy Strategies"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Meth Recovery Meal Planning",
      "summary": "Meal plans and recipes designed to restore nutrition, support neurotransmitter production, and manage appetite changes in recovery.",
      "wiki_url": "/wiki/meth-nutrition-guide",
      "button_text": "Nutrition Guide"
    },
    {
      "type": "wiki", 
      "title": "Managing Anhedonia in Recovery",
      "summary": "Understanding the inability to feel pleasure after meth use and evidence-based strategies to gradually restore reward sensitivity.",
      "wiki_url": "/wiki/meth-anhedonia-recovery",
      "button_text": "Pleasure Recovery"
    }
  ]
}', 2),

-- MODULE 3: Rebuilding Cognitive Function
('methamphetamine', 3, 'Healing Your Mind: Cognitive Rehabilitation',
'Address methamphetamine-induced cognitive impairments including memory, attention, and executive function. Learn brain training techniques and cognitive rehabilitation strategies.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Methamphetamine and Cognitive Impairment",
      "summary": "Research on how meth affects memory, attention, decision-making, and motor skills. Which functions recover and which may have lasting effects.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2943012/",
      "button_text": "Cognitive Science"
    },
    {
      "type": "video",
      "title": "Brain Training for Stimulant Recovery",
      "summary": "Evidence-based cognitive rehabilitation exercises and activities that can help restore brain function after methamphetamine use.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Brain Training"
    },
    {
      "type": "reading",
      "title": "Neuroplasticity and Recovery Hope",
      "summary": "How the brain can heal and create new neural pathways. Timeline for cognitive recovery and factors that enhance neuroplasticity.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3870295/",
      "button_text": "Brain Healing"
    },
    {
      "type": "tool",
      "title": "Cognitive Function Tracker",
      "summary": "Monitor your memory, attention, and thinking skills over time to track cognitive recovery progress.",
      "pdf_url": "/worksheets/meth-cognitive-tracker.pdf",
      "button_text": "Track Cognition"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Memory Strategies for Recovery",
      "summary": "Practical techniques to compensate for memory problems: organization systems, mnemonics, and external memory aids.",
      "wiki_url": "/wiki/meth-memory-strategies",
      "button_text": "Memory Help"
    },
    {
      "type": "wiki",
      "title": "Executive Function Recovery",
      "summary": "Rebuilding planning, problem-solving, and decision-making skills through structured exercises and real-world practice.",
      "wiki_url": "/wiki/meth-executive-function",
      "button_text": "Executive Skills"
    }
  ]
}', 3),

-- MODULE 4: Managing Intense Cravings & Triggers
('methamphetamine', 4, 'Conquering Meth Cravings & Triggers',
'Develop advanced skills for managing the intense, persistent cravings characteristic of methamphetamine addiction. Learn to identify and navigate high-risk situations specific to stimulant use.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Why Meth Cravings Are So Intense",
      "summary": "The neurobiology of methamphetamine cravings, why they''re stronger than other substances, and how long they typically persist in recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2927924/",
      "button_text": "Craving Science"
    },
    {
      "type": "video",
      "title": "Stimulus Control for Stimulant Recovery",
      "summary": "Identifying and modifying environmental cues that trigger meth use: people, places, objects, times, and situations.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Control Triggers"
    },
    {
      "type": "reading",
      "title": "Contingency Management for Meth Recovery",
      "summary": "Evidence-based reward system for maintaining abstinence. How to create meaningful incentives that compete with drug rewards.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2720037/",
      "button_text": "Reward Systems"
    },
    {
      "type": "audio",
      "title": "Craving Surfing for Stimulants", 
      "summary": "Specialized mindfulness technique for riding out intense meth cravings without acting. Includes body scanning and acceptance practices.",
      "audio_url": "/audio/meth-craving-surfing.mp3",
      "duration": "10:00",
      "button_text": "Surf Cravings"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Meth Trigger Emergency Plan",
      "summary": "Detailed action plan for high-risk situations: specific steps to take, people to call, and places to go when cravings hit.",
      "wiki_url": "/wiki/meth-emergency-plan",
      "button_text": "Emergency Plan"
    },
    {
      "type": "wiki",
      "title": "Replacing the High: Healthy Stimulation",
      "summary": "Safe, legal ways to get stimulation and energy: exercise, music, social activities, and adrenaline-producing hobbies.",
      "wiki_url": "/wiki/healthy-stimulation",
      "button_text": "Natural Highs"
    }
  ]
}', 4),

-- MODULE 5: Physical Health & Harm Reduction
('methamphetamine', 5, 'Healing Your Body: Physical Recovery',
'Address the severe physical health consequences of methamphetamine use including cardiovascular damage, dental problems, skin issues, and immune system suppression.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cardiovascular Recovery After Meth",
      "summary": "How methamphetamine damages the heart and blood vessels, monitoring for complications, and supporting cardiovascular healing.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3484917/",
      "button_text": "Heart Health"
    },
    {
      "type": "video", 
      "title": "Dental Recovery: Beyond Meth Mouth",
      "summary": "Understanding dental damage from methamphetamine use, treatment options, prevention of further damage, and oral health restoration.",
      "video_id": "oTugjssqOT0",
      "button_text": "Dental Recovery"
    },
    {
      "type": "reading",
      "title": "Immune System Recovery",
      "summary": "How meth suppresses immune function, increases infection risk, and strategies to rebuild immune health in recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3746983/",
      "button_text": "Immune Recovery"
    },
    {
      "type": "tool",
      "title": "Physical Health Recovery Tracker",
      "summary": "Monitor blood pressure, weight, sleep, dental health, and skin healing to track your body''s recovery progress.",
      "pdf_url": "/worksheets/meth-health-tracker.pdf",
      "button_text": "Track Health"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Skin Healing After Methamphetamine",
      "summary": "Treating meth-related skin problems: sores, scarring, and infections. Skincare routines and when to seek medical help.",
      "wiki_url": "/wiki/meth-skin-recovery",
      "button_text": "Skin Health"
    },
    {
      "type": "wiki",
      "title": "Exercise in Stimulant Recovery",
      "summary": "Safe exercise protocols for cardiovascular recovery, rebuilding stamina, and using exercise as natural mood enhancement.",
      "wiki_url": "/wiki/meth-exercise-recovery",
      "button_text": "Exercise Guide"
    }
  ]
}', 5),

-- MODULE 6: Relationships & Trust Rebuilding
('methamphetamine', 6, 'Rebuilding Relationships After Meth',
'Address the relationship damage caused by methamphetamine-induced paranoia, aggression, and erratic behavior. Learn to rebuild trust and communicate about the unique challenges of meth recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Meth-Induced Paranoia and Relationships",
      "summary": "How methamphetamine-induced paranoia and psychosis affects relationships. Understanding residual symptoms and rebuilding trust.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3466038/",
      "button_text": "Paranoia Effects"
    },
    {
      "type": "video",
      "title": "Communicating About Meth Recovery",
      "summary": "How to explain methamphetamine addiction to family and friends, addressing stigma and educating others about the medical nature of addiction.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Communication"
    },
    {
      "type": "reading",
      "title": "Domestic Violence and Stimulant Use",
      "summary": "Addressing the link between methamphetamine use and aggressive behavior. Safety planning and rebuilding healthy relationship patterns.",
      "external_url": "https://www.samhsa.gov/sites/default/files/topics/trauma_and_violence/traumatic-stress-intervention.pdf",
      "button_text": "Violence Prevention"
    },
    {
      "type": "audio",
      "title": "Rebuilding Intimacy in Recovery",
      "summary": "Guided exercises for restoring emotional and physical intimacy after methamphetamine use has damaged trust and connection.",
      "audio_url": "/audio/meth-intimacy-recovery.mp3",
      "duration": "8:30",
      "button_text": "Intimacy Recovery"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Paranoia Recovery Strategies",
      "summary": "Techniques for managing residual paranoid thoughts, reality testing, and rebuilding social trust after meth-induced paranoia.",
      "wiki_url": "/wiki/paranoia-recovery",
      "button_text": "Paranoia Help"
    },
    {
      "type": "wiki",
      "title": "Family Education About Meth Addiction",
      "summary": "Resources to help family members understand methamphetamine addiction, recovery timeline, and how to provide appropriate support.",
      "wiki_url": "/wiki/meth-family-education",
      "button_text": "Family Resources"
    }
  ]
}', 6),

-- MODULE 7: Legal & Financial Consequences
('methamphetamine', 7, 'Dealing with Legal & Financial Fallout',
'Navigate the often severe legal consequences of methamphetamine possession, manufacturing, and associated crimes. Address financial recovery and employment challenges.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Methamphetamine Legal Consequences",
      "summary": "Understanding federal and state penalties for meth-related charges, mandatory minimums, and options for treatment instead of incarceration.",
      "external_url": "https://www.dea.gov/drug-information/drug-scheduling",
      "button_text": "Legal Overview"
    },
    {
      "type": "video", 
      "title": "Employment After Meth Conviction",
      "summary": "Strategies for finding employment with drug-related criminal history. Industries that hire people in recovery and background check navigation.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Employment Help"
    },
    {
      "type": "reading",
      "title": "Financial Recovery from Stimulant Addiction",
      "summary": "Common financial consequences of meth use, debt management strategies, and rebuilding financial stability in recovery.",
      "external_url": "https://www.consumer.gov/managing-debt",
      "button_text": "Financial Recovery"
    },
    {
      "type": "tool",
      "title": "Legal & Financial Recovery Planner",
      "summary": "Organize court dates, legal requirements, debt payments, and financial goals to manage the practical aspects of recovery.",
      "pdf_url": "/worksheets/meth-legal-financial-planner.pdf",
      "button_text": "Legal Planner"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Drug Court and Treatment Options",
      "summary": "How drug courts work, eligibility requirements, and treatment alternatives to incarceration for meth-related charges.",
      "wiki_url": "/wiki/drug-court-options",
      "button_text": "Court Alternatives"
    },
    {
      "type": "wiki",
      "title": "Expungement and Record Sealing",
      "summary": "Legal options for clearing or sealing drug-related criminal records to improve employment and housing opportunities.",
      "wiki_url": "/wiki/record-expungement",
      "button_text": "Clear Records"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Recovery from Methamphetamine
('methamphetamine', 8, 'Sustaining Meth Recovery Long-Term',
'Build a comprehensive long-term recovery plan that addresses the unique challenges of methamphetamine addiction including potential cognitive changes and ongoing health monitoring.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Long-Term Outcomes in Meth Recovery",
      "summary": "Research on long-term recovery rates, quality of life improvements, and ongoing health considerations for people recovering from methamphetamine addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4075486/",
      "button_text": "Recovery Outcomes"
    },
    {
      "type": "video",
      "title": "Building a Stimulant-Free Identity",
      "summary": "Transitioning from stimulant-dependent identity to discovering who you are without methamphetamine. Finding natural sources of energy and motivation.",
      "video_id": "oTugjssqOT0",
      "button_text": "New Identity"
    },
    {
      "type": "reading",
      "title": "Ongoing Health Monitoring",
      "summary": "Long-term health screening recommendations for meth recovery: cardiovascular, dental, cognitive, and mental health check-ups.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3827935/",
      "button_text": "Health Monitoring"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Stimulant-Free Future",
      "summary": "Guided meditation for envisioning a fulfilling life without methamphetamine, focusing on natural energy, clear thinking, and authentic relationships.",
      "audio_url": "/audio/meth-future-visualization.mp3",
      "duration": "12:00",
      "button_text": "Visualize Future"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Meth Recovery Milestone Guide",
      "summary": "Specific milestones to celebrate in methamphetamine recovery, from initial detox through years of sustained abstinence.",
      "wiki_url": "/wiki/meth-recovery-milestones",
      "button_text": "Recovery Milestones"
    },
    {
      "type": "wiki",
      "title": "Helping Others in Meth Recovery",
      "summary": "How to safely help others recovering from methamphetamine addiction while protecting your own recovery and avoiding triggers.",
      "wiki_url": "/wiki/meth-recovery-service",
      "button_text": "Help Others"
    }
  ]
}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
