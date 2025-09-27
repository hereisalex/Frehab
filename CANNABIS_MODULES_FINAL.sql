-- CANNABIS/MARIJUANA RECOVERY MODULES - Run this SQL after the main tracks system
-- Evidence-based modules specifically designed for cannabis use disorder treatment and recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Cannabis Use Disorder
('marijuana', 1, 'Understanding Cannabis Addiction & Dependence', 
'Learn the science behind cannabis addiction, including how modern high-THC cannabis affects your brain differently than historical marijuana. Understand tolerance, withdrawal, and why cannabis addiction is real.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis Use Disorder: The Hidden Epidemic",
      "summary": "Current research on cannabis addiction rates, risk factors, and why 1 in 6 adolescents and 1 in 10 adults who use cannabis develop addiction.",
      "external_url": "https://nida.nih.gov/publications/research-reports/marijuana/marijuana-addictive",
      "button_text": "Addiction Science"
    },
    {
      "type": "video", 
      "title": "How Modern Cannabis Affects Your Brain",
      "summary": "The neuroscience of THC addiction: how high-potency cannabis (20-30% THC) creates dependence differently than low-potency cannabis of the past.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Brain Effects"
    },
    {
      "type": "reading",
      "title": "High-Potency Cannabis: A New Drug?",
      "summary": "How today''s cannabis (20-30% THC) compares to historical cannabis (3-5% THC). Why higher potency creates greater addiction risk and mental health problems.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987131/",
      "button_text": "Potency Changes"
    },
    {
      "type": "tool",
      "title": "Cannabis Use Disorder Assessment",
      "summary": "Take the DSM-5 based assessment for cannabis use disorder. Understand your use patterns, tolerance, and addiction risk factors.",
      "pdf_url": "/worksheets/cannabis-use-disorder-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cannabis Tolerance and Physical Dependence",
      "summary": "How THC tolerance develops, why you need more to get the same effect, and the physical dependence that develops with regular use.",
      "wiki_url": "/wiki/cannabis-tolerance-dependence",
      "button_text": "Tolerance Science"
    },
    {
      "type": "wiki",
      "title": "THC vs CBD: Understanding Cannabis Components",
      "summary": "How THC creates addiction while CBD doesn''t, the importance of THC:CBD ratios, and why high-THC products are more addictive.",
      "wiki_url": "/wiki/thc-cbd-differences",
      "button_text": "Cannabis Components"
    }
  ]
}', 1),

-- MODULE 2: Cannabis Withdrawal & Detox
('marijuana', 2, 'Cannabis Withdrawal: Real Symptoms, Real Solutions',
'Understand and manage cannabis withdrawal syndrome. Learn why withdrawal happens, what symptoms to expect, and evidence-based strategies for getting through it safely.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis Withdrawal Syndrome: Medical Recognition",
      "summary": "How cannabis withdrawal was officially recognized in DSM-5. Why withdrawal symptoms are real and can be severe for heavy users.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3311695/",
      "button_text": "Withdrawal Science"
    },
    {
      "type": "video",
      "title": "Managing Cannabis Withdrawal Symptoms",
      "summary": "Evidence-based strategies for managing irritability, insomnia, anxiety, and physical symptoms during cannabis withdrawal.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Withdrawal Management"
    },
    {
      "type": "reading",
      "title": "Sleep and Cannabis: Breaking the Dependence",
      "summary": "How cannabis affects sleep architecture, why sleep problems persist in withdrawal, and natural sleep restoration techniques.",
      "external_url": "https://www.sleepfoundation.org/how-sleep-works/how-cannabis-affects-sleep",
      "button_text": "Sleep Recovery"
    },
    {
      "type": "audio",
      "title": "Cannabis Withdrawal Relaxation Techniques",
      "summary": "Guided relaxation and breathing exercises specifically designed for managing cannabis withdrawal anxiety and restlessness.",
      "audio_url": "/audio/cannabis-withdrawal-relaxation.mp3",
      "duration": "10:00",
      "button_text": "Relaxation Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cannabis Withdrawal Timeline & Symptoms",
      "summary": "Day-by-day guide to cannabis withdrawal: when symptoms start, peak, and resolve. What to expect based on your usage patterns.",
      "wiki_url": "/wiki/cannabis-withdrawal-timeline",
      "button_text": "Withdrawal Timeline"
    },
    {
      "type": "wiki", 
      "title": "Natural Sleep Restoration After Cannabis",
      "summary": "Evidence-based sleep hygiene techniques for restoring natural sleep patterns after cannabis dependence.",
      "wiki_url": "/wiki/cannabis-sleep-recovery",
      "button_text": "Sleep Recovery"
    }
  ]
}', 2),

-- MODULE 3: Addressing Cannabis and Mental Health
('marijuana', 3, 'Cannabis, Anxiety, and Mental Health Recovery',
'Understand the complex relationship between cannabis use and mental health. Learn to manage anxiety, depression, and motivation without cannabis while addressing underlying mental health needs.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis and Anxiety: The Paradox",
      "summary": "How cannabis initially relieves anxiety but ultimately worsens it. Understanding rebound anxiety and the cycle of self-medication.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7441788/",
      "button_text": "Anxiety Research"
    },
    {
      "type": "video",
      "title": "Depression and Motivation in Cannabis Recovery",
      "summary": "Why cannabis affects motivation and mood. How to restore natural dopamine function and rediscover motivation without cannabis.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Motivation Recovery"
    },
    {
      "type": "reading",
      "title": "Cannabis-Induced Psychosis and Mental Health",
      "summary": "Risk factors for cannabis-induced psychosis, especially with high-THC products. When to seek mental health treatment in recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6461323/",
      "button_text": "Psychosis Risk"
    },
    {
      "type": "tool",
      "title": "Mental Health Recovery Tracker",
      "summary": "Monitor anxiety, depression, motivation, and overall mental health as you recover from cannabis dependence.",
      "pdf_url": "/worksheets/cannabis-mental-health-tracker.pdf",
      "button_text": "Track Mental Health"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Anxiety Management Without Cannabis",
      "summary": "Evidence-based anxiety management techniques that don''t involve cannabis: CBT, breathing, mindfulness, and lifestyle changes.",
      "wiki_url": "/wiki/anxiety-management-cannabis-free",
      "button_text": "Anxiety Tools"
    },
    {
      "type": "wiki",
      "title": "Restoring Natural Motivation and Drive",
      "summary": "How to rebuild motivation, set goals, and find purpose after cannabis has dampened your natural drive and ambition.",
      "wiki_url": "/wiki/motivation-recovery-cannabis",
      "button_text": "Motivation Recovery"
    }
  ]
}', 3),

-- MODULE 4: Breaking Cannabis Habits & Triggers
('marijuana', 4, 'Breaking the Cannabis Habit Loop',
'Identify and change cannabis use patterns that have become automatic. Learn to manage specific triggers like boredom, stress, and social situations without reaching for cannabis.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis Habit Loops: Automatic Use Patterns",
      "summary": "How cannabis use becomes automatic and unconscious. Identifying your specific cues, routines, and rewards in the cannabis habit loop.",
      "external_url": "https://jamesclear.com/how-to-break-a-bad-habit",
      "button_text": "Habit Science"
    },
    {
      "type": "video",
      "title": "Cannabis Triggers: Boredom, Stress, and Social Use",
      "summary": "Common triggers for cannabis use and evidence-based strategies for managing them without using cannabis.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Trigger Management"
    },
    {
      "type": "reading",
      "title": "Social Cannabis Use: Navigating Peer Pressure",
      "summary": "How to handle social situations where cannabis is present. Dealing with friends who use and finding new social activities.",
      "external_url": "https://www.psychologytoday.com/us/blog/the-squeaky-wheel/201310/how-resist-peer-pressure",
      "button_text": "Social Strategies"
    },
    {
      "type": "audio",
      "title": "Cannabis Craving Management", 
      "summary": "Mindfulness techniques specifically for managing cannabis cravings and urges. Learning to observe cravings without acting.",
      "audio_url": "/audio/cannabis-craving-management.mp3",
      "duration": "8:00",
      "button_text": "Craving Management"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cannabis-Free Stress Management",
      "summary": "Healthy alternatives to cannabis for stress relief: exercise, meditation, hobbies, and lifestyle changes that actually work.",
      "wiki_url": "/wiki/stress-relief-without-cannabis",
      "button_text": "Stress Alternatives"
    },
    {
      "type": "wiki",
      "title": "Boredom Busters: Life Beyond Cannabis",
      "summary": "Activities, hobbies, and interests to fill the time previously spent using cannabis or recovering from cannabis use.",
      "wiki_url": "/wiki/cannabis-free-activities",
      "button_text": "Activity Ideas"
    }
  ]
}', 4),

-- MODULE 5: Legal Issues & Workplace Challenges
('marijuana', 5, 'Navigating Legal Status and Employment Issues',
'Understand the complex legal landscape of cannabis, workplace policies, and how to handle employment, legal, and professional challenges related to cannabis use.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis Legal Status: State vs Federal Law",
      "summary": "Understanding the complex legal status of cannabis: state legalization vs federal prohibition, and what this means for users.",
      "external_url": "https://www.ncsl.org/research/civil-and-criminal-justice/marijuana-overview.aspx",
      "button_text": "Legal Overview"
    },
    {
      "type": "video", 
      "title": "Workplace Cannabis Policies and Drug Testing",
      "summary": "How legal cannabis affects workplace policies, drug testing, and employment. Understanding your rights and employer policies.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Workplace Issues"
    },
    {
      "type": "reading",
      "title": "Professional Licenses and Cannabis Use",
      "summary": "How cannabis use affects professional licenses (medical, legal, education, etc.) even in legal states. Risk assessment and disclosure decisions.",
      "external_url": "https://www.samhsa.gov/workplace/legal/federal-laws",
      "button_text": "Professional Risks"
    },
    {
      "type": "tool",
      "title": "Cannabis Legal Risk Assessment",
      "summary": "Assess your legal and professional risks related to cannabis use based on your location, profession, and circumstances.",
      "pdf_url": "/worksheets/cannabis-legal-risk-assessment.pdf",
      "button_text": "Risk Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Drug Testing and Cannabis: What You Need to Know",
      "summary": "How long cannabis stays in your system, different types of drug tests, and strategies for employment and legal situations.",
      "wiki_url": "/wiki/cannabis-drug-testing",
      "button_text": "Drug Testing Guide"
    },
    {
      "type": "wiki",
      "title": "Cannabis and Driving: Legal and Safety Issues",
      "summary": "Impaired driving laws, DUI risks, and safety considerations for cannabis users. How cannabis affects driving ability.",
      "wiki_url": "/wiki/cannabis-driving-safety",
      "button_text": "Driving Safety"
    }
  ]
}', 5),

-- MODULE 6: Relationships and Cannabis Recovery
('marijuana', 6, 'Relationships, Family, and Cannabis Recovery',
'Address how cannabis use affects relationships and family dynamics. Learn to rebuild trust, communicate about recovery, and handle relationship challenges in cannabis recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis Use and Relationship Impact",
      "summary": "How cannabis affects relationships: emotional unavailability, reduced motivation, communication problems, and relationship satisfaction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4442549/",
      "button_text": "Relationship Impact"
    },
    {
      "type": "video",
      "title": "Communicating About Cannabis Recovery",
      "summary": "How to talk to family and friends about cannabis addiction and recovery. Addressing the \"it''s just weed\" stigma and getting support.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Communication Skills"
    },
    {
      "type": "reading",
      "title": "Parenting and Cannabis Use",
      "summary": "How cannabis use affects parenting and child development. Creating a cannabis-free home environment and being a present parent.",
      "external_url": "https://www.aap.org/en/advocacy/child-health-priorities/tobacco-and-e-cigarettes/marijuana/",
      "button_text": "Parenting Issues"
    },
    {
      "type": "audio",
      "title": "Rebuilding Emotional Intimacy",
      "summary": "Guided exercises for reconnecting emotionally with partners and family members after cannabis use has created distance.",
      "audio_url": "/audio/cannabis-emotional-intimacy.mp3",
      "duration": "9:00",
      "button_text": "Intimacy Recovery"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cannabis-Free Dating and Relationships",
      "summary": "Navigating dating and new relationships in recovery from cannabis. Disclosure decisions and finding compatible partners.",
      "wiki_url": "/wiki/cannabis-free-dating",
      "button_text": "Dating in Recovery"
    },
    {
      "type": "wiki",
      "title": "Family Support for Cannabis Recovery",
      "summary": "Resources for family members to understand cannabis addiction and how to support recovery without enabling.",
      "wiki_url": "/wiki/family-support-cannabis-recovery",
      "button_text": "Family Resources"
    }
  ]
}', 6),

-- MODULE 7: Health and Lifestyle Recovery
('marijuana', 7, 'Restoring Health and Building New Habits',
'Address the physical and mental health impacts of cannabis use and build healthy lifestyle habits that support long-term recovery and well-being.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis and Physical Health Effects",
      "summary": "Understanding how cannabis affects lung health, cardiovascular system, immune function, and reproductive health. Recovery timeline for physical health.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4827335/",
      "button_text": "Health Effects"
    },
    {
      "type": "video", 
      "title": "Exercise and Cannabis Recovery",
      "summary": "How exercise helps with cannabis withdrawal, improves mood naturally, and provides healthy alternatives to cannabis use.",
      "video_id": "oTugjssqOT0",
      "button_text": "Exercise Benefits"
    },
    {
      "type": "reading",
      "title": "Nutrition and Cannabis: Restoring Balance",
      "summary": "How cannabis affects appetite and nutrition. Building healthy eating habits and managing appetite changes in recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6340377/",
      "button_text": "Nutrition Recovery"
    },
    {
      "type": "tool",
      "title": "Cannabis Recovery Wellness Plan",
      "summary": "Create a comprehensive wellness plan including exercise, nutrition, sleep, and stress management for cannabis recovery.",
      "pdf_url": "/worksheets/cannabis-wellness-plan.pdf",
      "button_text": "Wellness Plan"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Lung Health Recovery After Cannabis",
      "summary": "How to support lung health recovery after smoking cannabis. Breathing exercises and respiratory health improvement.",
      "wiki_url": "/wiki/lung-health-cannabis-recovery",
      "button_text": "Lung Recovery"
    },
    {
      "type": "wiki",
      "title": "Building Healthy Daily Routines",
      "summary": "Creating structure and healthy routines to replace cannabis use patterns. Morning, evening, and stress management routines.",
      "wiki_url": "/wiki/healthy-routines-cannabis-recovery",
      "button_text": "Healthy Routines"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Cannabis Recovery and Life Building
('marijuana', 8, 'Building a Fulfilling Cannabis-Free Life',
'Create a comprehensive long-term recovery plan focused on building a meaningful, satisfying life without cannabis. Address ongoing challenges and maintain motivation for continued growth.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Long-Term Cannabis Recovery Success",
      "summary": "Research on long-term outcomes in cannabis recovery: improved mental health, relationships, career success, and life satisfaction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6717984/",
      "button_text": "Recovery Outcomes"
    },
    {
      "type": "video",
      "title": "Finding Purpose and Passion Without Cannabis",
      "summary": "Rediscovering interests, hobbies, and life goals that cannabis use may have suppressed. Building a meaningful life in recovery.",
      "video_id": "oTugjssqOT0",
      "button_text": "Purpose Discovery"
    },
    {
      "type": "reading",
      "title": "Cannabis Recovery and Personal Growth",
      "summary": "How cannabis recovery can lead to significant personal development, improved self-awareness, and achievement of life goals.",
      "external_url": "https://www.psychologytoday.com/us/blog/hope-resilience/201803/post-traumatic-growth-in-addiction-recovery",
      "button_text": "Personal Growth"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Cannabis-Free Future",
      "summary": "Guided meditation for envisioning your ideal life without cannabis, focusing on clarity, achievement, and authentic happiness.",
      "audio_url": "/audio/cannabis-future-visualization.mp3",
      "duration": "12:00",
      "button_text": "Visualize Future"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cannabis Recovery Milestone Celebrations",
      "summary": "Meaningful ways to celebrate recovery milestones in cannabis recovery, from first week to years of cannabis-free living.",
      "wiki_url": "/wiki/cannabis-recovery-milestones",
      "button_text": "Recovery Milestones"
    },
    {
      "type": "wiki",
      "title": "Helping Others with Cannabis Addiction",
      "summary": "How to support friends and family with cannabis addiction. Sharing your recovery story and becoming a positive influence.",
      "wiki_url": "/wiki/helping-others-cannabis-recovery",
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
