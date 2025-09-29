-- Gaming Addiction Recovery Track - Evidence-Based Modules
-- Based on WHO Gaming Disorder criteria, latest research in behavioral addiction, and gaming psychology

-- Insert gaming-specific modules with comprehensive, evidence-based content
INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Gaming Addiction & Game Design Psychology
('video-games', 1, 'Understanding Gaming Addiction & Psychological Game Design', 
'Learn how modern games are designed to be addictive using psychological manipulation, reward systems, and social pressures. Understand WHO Gaming Disorder criteria and why willpower alone isn''t enough.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "WHO Gaming Disorder: Official Recognition and Criteria",
      "summary": "Understanding the official medical criteria for Gaming Disorder as recognized by the World Health Organization and how it differs from casual gaming.",
      "external_url": "https://www.who.int/news-room/q-a-detail/addictive-behaviours-gaming-disorder",
      "button_text": "WHO Criteria"
    },
    {
      "type": "video", 
      "title": "The Psychology of Game Design: How Games Hook Players",
      "summary": "How game developers use psychological principles like variable ratio reinforcement, achievement systems, and social pressure to create addictive experiences.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Game Psychology"
    },
    {
      "type": "reading",
      "title": "Dopamine and Gaming: The Neurochemical Reward System",
      "summary": "How gaming triggers dopamine release through achievements, leveling up, loot boxes, and social recognition, creating patterns similar to gambling addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Gaming Neuroscience"
    },
    {
      "type": "tool",
      "title": "Gaming Addiction Assessment (IGDS-SF9)",
      "summary": "Assess your gaming habits using the Internet Gaming Disorder Scale, including time spent, loss of control, and life impact factors.",
      "pdf_url": "/worksheets/gaming-addiction-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Game Types and Addiction Potential",
      "summary": "How different game genres (MMORPGs, MOBAs, Battle Royales, Mobile Games) use specific mechanics to create and maintain addiction.",
      "wiki_url": "/wiki/game-types-addiction-potential",
      "button_text": "Game Analysis"
    },
    {
      "type": "wiki",
      "title": "Gaming vs. Gambling: Shared Addiction Mechanisms",
      "summary": "Understanding how modern gaming incorporates gambling-like features including loot boxes, gacha systems, and variable rewards.",
      "wiki_url": "/wiki/gaming-gambling-mechanisms",
      "button_text": "Gambling Features"
    }
  ]
}', 1),

-- MODULE 2: Gaming Withdrawal & Detox Management
('video-games', 2, 'Gaming Withdrawal: Managing Life Without Virtual Worlds',
'Learn to manage the boredom, depression, and identity crisis that often accompanies gaming withdrawal. Understand withdrawal symptoms and create strategies for the transition period.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gaming Withdrawal Syndrome: Real Symptoms and Timeline",
      "summary": "Understanding the psychological and emotional symptoms of gaming withdrawal including depression, anxiety, boredom intolerance, and identity confusion.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Withdrawal Science"
    },
    {
      "type": "video",
      "title": "Transitioning from Virtual to Real Achievement",
      "summary": "How to redirect the drive for achievement and progression from games into real-world goals and accomplishments.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Real Achievement"
    },
    {
      "type": "reading",
      "title": "Gaming Identity Crisis: Who Am I Without Games?",
      "summary": "Addressing the identity and social connection issues that arise when gaming has been a primary source of self-worth and social interaction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Identity Recovery"
    },
    {
      "type": "audio",
      "title": "Mindfulness for Gaming Urges and Boredom",
      "summary": "Guided mindfulness exercises specifically designed for managing gaming urges, boredom intolerance, and the discomfort of unstimulating activities.",
      "audio_url": "/audio/gaming-urges-mindfulness.mp3",
      "duration": "10:00",
      "button_text": "Mindfulness Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Gaming Withdrawal Timeline and Phases",
      "summary": "What to expect during different phases of gaming withdrawal: initial emptiness, adjustment period, and long-term life rebuilding.",
      "wiki_url": "/wiki/gaming-withdrawal-timeline",
      "button_text": "Withdrawal Timeline"
    },
    {
      "type": "wiki", 
      "title": "Managing Gaming Triggers and Environmental Cues",
      "summary": "Strategies for dealing with gaming triggers including friends who game, gaming content, and environmental cues that prompt gaming urges.",
      "wiki_url": "/wiki/gaming-triggers-management",
      "button_text": "Trigger Management"
    }
  ]
}', 2),

-- MODULE 3: Rebuilding Real-World Skills & Interests
('video-games', 3, 'Rediscovering Life Beyond the Screen',
'Learn to develop real-world skills, hobbies, and interests that provide genuine satisfaction and achievement outside of virtual environments.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Skill Transfer: Gaming Skills to Real-World Applications",
      "summary": "How to identify transferable skills from gaming (strategy, problem-solving, teamwork) and apply them to real-world pursuits and career development.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Skill Transfer"
    },
    {
      "type": "video",
      "title": "Finding Flow in Real Activities",
      "summary": "Understanding flow states and how to find engaging, challenging real-world activities that provide the same satisfaction as gaming.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Real-World Flow"
    },
    {
      "type": "reading",
      "title": "Building Real Achievement Systems",
      "summary": "Creating personal achievement and progression systems for real-life goals that satisfy the same psychological needs as gaming leveling systems.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Achievement Systems"
    },
    {
      "type": "tool",
      "title": "Real-World Skill Development Tracker",
      "summary": "Track your progress developing real-world skills, hobbies, and interests using gamification principles applied to real achievement.",
      "pdf_url": "/worksheets/real-world-skills-tracker.pdf",
      "button_text": "Track Skills"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Hobby Exploration for Ex-Gamers",
      "summary": "Comprehensive guide to finding engaging real-world hobbies that satisfy the same psychological needs as gaming: challenge, progression, and mastery.",
      "wiki_url": "/wiki/hobbies-for-ex-gamers",
      "button_text": "Hobby Guide"
    },
    {
      "type": "wiki",
      "title": "Exercise and Physical Activity for Gamers",
      "summary": "Specific exercise programs and physical activities designed for people transitioning away from sedentary gaming lifestyles.",
      "wiki_url": "/wiki/exercise-for-gamers",
      "button_text": "Physical Activity"
    }
  ]
}', 3),

-- MODULE 4: Social Life and Relationships After Gaming
('video-games', 4, 'Building Real Relationships Beyond Gaming Communities',
'Learn to develop authentic social connections and relationships outside of gaming communities, addressing social anxiety and rebuilding interpersonal skills.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gaming Communities vs. Real-World Friendships",
      "summary": "Understanding the difference between gaming-based relationships and authentic friendships, and how to transition to meaningful real-world connections.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Friendship Research"
    },
    {
      "type": "video",
      "title": "Social Skills for Ex-Gamers",
      "summary": "Rebuilding social skills and confidence for face-to-face interactions after spending extensive time in virtual social environments.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Social Skills"
    },
    {
      "type": "reading",
      "title": "Dating and Romantic Relationships After Gaming Addiction",
      "summary": "Addressing the unique challenges of forming romantic relationships when gaming has been the primary social outlet and source of validation.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Dating After Gaming"
    },
    {
      "type": "audio",
      "title": "Social Confidence Building Exercises", 
      "summary": "Guided exercises for building social confidence, reducing social anxiety, and developing authentic interpersonal connections.",
      "audio_url": "/audio/social-confidence-gaming.mp3",
      "duration": "12:00",
      "button_text": "Confidence Building"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Finding Social Communities and Groups",
      "summary": "How to find real-world social groups, communities, and activities that provide the social connection and belonging previously found in gaming.",
      "wiki_url": "/wiki/real-world-social-communities",
      "button_text": "Social Communities"
    },
    {
      "type": "wiki",
      "title": "Managing Gaming Friend Relationships",
      "summary": "Strategies for maintaining friendships with people who still game heavily while protecting your own recovery and boundaries.",
      "wiki_url": "/wiki/gaming-friend-relationships",
      "button_text": "Gaming Friends"
    }
  ]
}', 4),

-- MODULE 5: Education, Career, and Life Goals Recovery
('video-games', 5, 'Rebuilding Academic and Professional Life',
'Address the academic and career damage often caused by gaming addiction and create plans for educational and professional recovery and growth.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Academic Recovery: Getting Back on Track",
      "summary": "Strategies for recovering from academic setbacks caused by gaming addiction, including motivation, study skills, and time management.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Academic Recovery"
    },
    {
      "type": "video", 
      "title": "Career Development for Ex-Gamers",
      "summary": "How to leverage gaming skills for career development while building professional skills and overcoming employment gaps caused by gaming addiction.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Career Development"
    },
    {
      "type": "reading",
      "title": "Time Management and Productivity Without Gaming",
      "summary": "Developing effective time management and productivity systems when gaming is no longer consuming 6-12 hours per day.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Productivity Systems"
    },
    {
      "type": "tool",
      "title": "Life Goals and Career Planning Worksheet",
      "summary": "Comprehensive planning tool for setting and achieving academic, career, and life goals after gaming addiction recovery.",
      "pdf_url": "/worksheets/life-goals-career-planning.pdf",
      "button_text": "Goal Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Study Techniques for Ex-Gamers",
      "summary": "Specific study and learning techniques adapted for people recovering from gaming addiction, including attention span rebuilding.",
      "wiki_url": "/wiki/study-techniques-ex-gamers",
      "button_text": "Study Techniques"
    },
    {
      "type": "wiki",
      "title": "Gaming Industry Careers: Healthy vs. Unhealthy Involvement",
      "summary": "For those interested in gaming industry careers: how to work in gaming while maintaining healthy boundaries and avoiding relapse.",
      "wiki_url": "/wiki/gaming-industry-careers",
      "button_text": "Industry Careers"
    }
  ]
}', 5),

-- MODULE 6: Family Relationships and Living Situations
('video-games', 6, 'Repairing Family Relationships and Living Independence',
'Address family conflicts caused by gaming addiction and work toward healthy living situations and family relationships.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gaming Addiction Impact on Family Dynamics",
      "summary": "Understanding how gaming addiction affects family relationships, creates conflict, and damages trust, especially with parents and siblings.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Family Impact"
    },
    {
      "type": "video",
      "title": "Rebuilding Trust with Family Members",
      "summary": "Practical strategies for apologizing, making amends, and rebuilding trust with family members who have been hurt by gaming addiction behaviors.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Trust Rebuilding"
    },
    {
      "type": "reading",
      "title": "Moving Toward Independent Living",
      "summary": "For those whose gaming addiction has prevented independent living: steps toward financial independence, life skills, and healthy living situations.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Independent Living"
    },
    {
      "type": "audio",
      "title": "Communication Skills for Family Relationships",
      "summary": "Guided practice for difficult conversations with family members about gaming addiction recovery, boundaries, and future plans.",
      "audio_url": "/audio/family-communication-gaming.mp3",
      "duration": "11:00",
      "button_text": "Communication Skills"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Family Education About Gaming Addiction",
      "summary": "Resources to help family members understand gaming addiction as a real condition and how they can support recovery without enabling.",
      "wiki_url": "/wiki/family-education-gaming-addiction",
      "button_text": "Family Education"
    },
    {
      "type": "wiki",
      "title": "Life Skills Development for Ex-Gamers",
      "summary": "Essential life skills that may have been neglected during gaming addiction: cooking, cleaning, finances, self-care, and daily routines.",
      "wiki_url": "/wiki/life-skills-ex-gamers",
      "button_text": "Life Skills"
    }
  ]
}', 6),

-- MODULE 7: Mental Health and Emotional Regulation
('video-games', 7, 'Addressing Mental Health and Emotional Needs',
'Address underlying mental health issues often associated with gaming addiction and develop healthy emotional regulation skills.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gaming Addiction and Co-occurring Mental Health Conditions",
      "summary": "Understanding how depression, anxiety, ADHD, and social anxiety often co-occur with gaming addiction and require simultaneous treatment.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Mental Health Comorbidity"
    },
    {
      "type": "video", 
      "title": "Emotional Regulation Without Gaming Escape",
      "summary": "Learning healthy ways to cope with difficult emotions without using gaming as an escape or emotional numbing mechanism.",
      "video_id": "oTugjssqOT0",
      "button_text": "Emotional Regulation"
    },
    {
      "type": "reading",
      "title": "Depression and Gaming: Breaking the Cycle",
      "summary": "How gaming addiction and depression feed into each other, and strategies for addressing both conditions simultaneously.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Depression Recovery"
    },
    {
      "type": "tool",
      "title": "Mental Health and Mood Tracking",
      "summary": "Monitor your mental health, mood patterns, and emotional triggers as you recover from gaming addiction and address underlying issues.",
      "pdf_url": "/worksheets/mental-health-mood-tracking.pdf",
      "button_text": "Track Mental Health"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "CBT Techniques for Gaming Addiction",
      "summary": "Cognitive Behavioral Therapy strategies specifically adapted for gaming addiction recovery and underlying mental health issues.",
      "wiki_url": "/wiki/cbt-gaming-addiction",
      "button_text": "CBT Techniques"
    },
    {
      "type": "wiki",
      "title": "ADHD and Gaming: Special Considerations",
      "summary": "How ADHD and gaming addiction interact, and special recovery considerations for people with attention deficit disorders.",
      "wiki_url": "/wiki/adhd-gaming-addiction",
      "button_text": "ADHD Considerations"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Recovery and Relapse Prevention
('video-games', 8, 'Sustaining Recovery and Building a Fulfilling Life',
'Create a comprehensive plan for long-term gaming addiction recovery and build a fulfilling life that doesn''t require virtual escapism.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Long-Term Gaming Addiction Recovery: Maintaining Progress",
      "summary": "Strategies for maintaining recovery from gaming addiction long-term and preventing relapse into old gaming patterns.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6676913/",
      "button_text": "Long-Term Recovery"
    },
    {
      "type": "video",
      "title": "Building a Life Worth Living Without Games",
      "summary": "Creating a meaningful, engaging life in the real world that satisfies the same psychological needs previously met through gaming.",
      "video_id": "oTugjssqOT0",
      "button_text": "Meaningful Life"
    },
    {
      "type": "reading",
      "title": "Healthy Gaming vs. Gaming Addiction: Can You Ever Game Again?",
      "summary": "Addressing the controversial question of whether recovering gaming addicts can ever return to moderate gaming, and alternatives for those who cannot.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7365108/",
      "button_text": "Moderation vs Abstinence"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Life Beyond Gaming",
      "summary": "Guided meditation for envisioning a fulfilling life with real achievements, relationships, and experiences beyond virtual worlds.",
      "audio_url": "/audio/life-beyond-gaming-visualization.mp3",
      "duration": "13:00",
      "button_text": "Life Visualization"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Gaming Addiction Recovery Community and Support",
      "summary": "How to find and build supportive communities for gaming addiction recovery and help others who are struggling with gaming addiction.",
      "wiki_url": "/wiki/gaming-recovery-community",
      "button_text": "Recovery Community"
    },
    {
      "type": "wiki",
      "title": "Helping Others with Gaming Addiction",
      "summary": "How to use your recovery experience to help friends, family members, or community members who are struggling with gaming addiction.",
      "wiki_url": "/wiki/helping-others-gaming-addiction",
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
