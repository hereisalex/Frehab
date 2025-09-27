-- SOCIAL MEDIA ADDICTION RECOVERY MODULES - Run this SQL after the main tracks system
-- Evidence-based modules specifically designed for social media and digital addiction recovery

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Social Media Addiction
('social-media', 1, 'Understanding Social Media Addiction & Design Manipulation', 
'Learn how social media platforms are engineered to be addictive using sophisticated psychological techniques. Understand dopamine loops, infinite scroll, and why willpower alone isn''t enough.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Attention Economy: How Your Focus Became a Product",
      "summary": "Understanding how social media companies monetize your attention and design platforms to be maximally engaging and hard to put down.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Attention Economy"
    },
    {
      "type": "video", 
      "title": "Dopamine and Social Media: The Addiction by Design",
      "summary": "How likes, comments, and social validation trigger dopamine release and create addictive patterns similar to gambling and substance use.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Dopamine Science"
    },
    {
      "type": "reading",
      "title": "Variable Ratio Reinforcement: Why Social Media is Like Slot Machines",
      "summary": "The psychological principles that make social media so addictive, including intermittent reinforcement and fear of missing out (FOMO).",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7012622/",
      "button_text": "Psychological Manipulation"
    },
    {
      "type": "tool",
      "title": "Social Media Addiction Assessment",
      "summary": "Assess your social media use patterns, time spent, emotional triggers, and addiction severity using validated screening tools.",
      "pdf_url": "/worksheets/social-media-addiction-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Platform-Specific Addiction Features",
      "summary": "How different platforms (Instagram, TikTok, Facebook, Twitter, YouTube) use specific design features to capture and hold attention.",
      "wiki_url": "/wiki/platform-addiction-features",
      "button_text": "Platform Analysis"
    },
    {
      "type": "wiki",
      "title": "The Neuroscience of Social Media Addiction",
      "summary": "How social media affects brain chemistry, reward pathways, and attention spans. Understanding the biological basis of digital addiction.",
      "wiki_url": "/wiki/social-media-neuroscience",
      "button_text": "Brain Science"
    }
  ]
}', 1),

-- MODULE 2: Digital Detox & Withdrawal Management
('social-media', 2, 'Digital Detox: Managing Social Media Withdrawal',
'Learn to manage the anxiety, FOMO, and discomfort that comes with reducing social media use. Understand withdrawal symptoms and evidence-based strategies for digital detox.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Social Media Withdrawal: Real Symptoms, Real Solutions",
      "summary": "Understanding the psychological and physical symptoms of social media withdrawal including anxiety, depression, and phantom vibration syndrome.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Withdrawal Science"
    },
    {
      "type": "video",
      "title": "FOMO to JOMO: Managing Fear of Missing Out",
      "summary": "Transforming fear of missing out into joy of missing out. Cognitive strategies for managing anxiety about being offline.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "FOMO Management"
    },
    {
      "type": "reading",
      "title": "Gradual vs. Cold Turkey: Digital Detox Strategies",
      "summary": "Comparing different approaches to reducing social media use: complete breaks vs. gradual reduction. What works best and when.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Detox Strategies"
    },
    {
      "type": "audio",
      "title": "Mindfulness for Digital Anxiety",
      "summary": "Guided mindfulness exercises specifically designed for managing anxiety and restlessness during social media breaks.",
      "audio_url": "/audio/digital-anxiety-mindfulness.mp3",
      "duration": "8:00",
      "button_text": "Mindfulness Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Digital Detox Timeline & Phases",
      "summary": "What to expect during different phases of social media detox: initial discomfort, adjustment period, and long-term benefits.",
      "wiki_url": "/wiki/digital-detox-timeline",
      "button_text": "Detox Timeline"
    },
    {
      "type": "wiki", 
      "title": "Managing Phantom Notifications and Tech Anxiety",
      "summary": "Strategies for dealing with phantom vibrations, compulsive phone checking, and anxiety about being disconnected.",
      "wiki_url": "/wiki/phantom-notifications-anxiety",
      "button_text": "Tech Anxiety"
    }
  ]
}', 2),

-- MODULE 3: Rebuilding Attention Span & Focus
('social-media', 3, 'Restoring Deep Focus and Attention Span',
'Learn to rebuild your ability to focus deeply and sustain attention after social media has fragmented your concentration. Understand attention restoration and cognitive training.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "How Social Media Fragments Attention",
      "summary": "Research on how constant context switching and infinite scroll reduce your ability to focus deeply and think clearly.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Attention Research"
    },
    {
      "type": "video",
      "title": "Deep Work: Rebuilding Sustained Concentration",
      "summary": "Evidence-based techniques for rebuilding your ability to focus deeply on important tasks without distraction.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Deep Work Training"
    },
    {
      "type": "reading",
      "title": "The Pomodoro Technique and Digital Focus",
      "summary": "Using time-blocking and focused work sessions to rebuild concentration skills damaged by social media multitasking.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Focus Techniques"
    },
    {
      "type": "tool",
      "title": "Attention Span Rebuilding Tracker",
      "summary": "Track your progress rebuilding sustained attention and focus skills through structured exercises and measurement.",
      "pdf_url": "/worksheets/attention-rebuilding-tracker.pdf",
      "button_text": "Track Focus"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Progressive Focus Training Exercises",
      "summary": "Step-by-step exercises for gradually rebuilding your ability to focus for extended periods without digital distraction.",
      "wiki_url": "/wiki/focus-training-exercises",
      "button_text": "Focus Training"
    },
    {
      "type": "wiki",
      "title": "Reading and Learning Without Digital Interference",
      "summary": "Strategies for rebuilding your ability to read deeply, learn effectively, and retain information in the digital age.",
      "wiki_url": "/wiki/deep-reading-strategies",
      "button_text": "Deep Reading"
    }
  ]
}', 3),

-- MODULE 4: Social Connection vs. Digital Connection
('social-media', 4, 'Real Relationships vs. Digital Validation',
'Understand the difference between authentic social connection and digital validation. Learn to build meaningful relationships offline and reduce dependence on online approval.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Loneliness Epidemic: Social Media vs. Real Connection",
      "summary": "How social media creates an illusion of connection while actually increasing loneliness and social isolation.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Loneliness Research"
    },
    {
      "type": "video",
      "title": "Digital Validation vs. Self-Worth",
      "summary": "Breaking the cycle of seeking validation through likes, comments, and social media metrics. Building authentic self-esteem.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Self-Worth Building"
    },
    {
      "type": "reading",
      "title": "Social Comparison Theory and Mental Health",
      "summary": "How constant comparison to curated online lives damages mental health and self-esteem. Strategies for breaking comparison habits.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Comparison Theory"
    },
    {
      "type": "audio",
      "title": "Building Authentic Relationships", 
      "summary": "Guided exercises for developing deeper, more meaningful relationships and reducing dependence on digital validation.",
      "audio_url": "/audio/authentic-relationships.mp3",
      "duration": "10:00",
      "button_text": "Relationship Skills"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Offline Social Activities and Communities",
      "summary": "Ideas and strategies for finding real-world social connections, hobbies, and communities that don''t involve social media.",
      "wiki_url": "/wiki/offline-social-activities",
      "button_text": "Real-World Connection"
    },
    {
      "type": "wiki",
      "title": "Managing Social Media FOMO and Comparison",
      "summary": "Cognitive techniques for managing fear of missing out and breaking harmful social comparison patterns.",
      "wiki_url": "/wiki/fomo-comparison-management",
      "button_text": "FOMO & Comparison"
    }
  ]
}', 4),

-- MODULE 5: Productivity and Life Goals Without Social Media
('social-media', 5, 'Reclaiming Time and Pursuing Meaningful Goals',
'Learn to redirect the time and mental energy previously spent on social media toward meaningful life goals and productive activities.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Time Audit: How Much Life Social Media Consumes",
      "summary": "Understanding the true cost of social media use in terms of time, attention, and opportunity cost. Calculating your digital time investment.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Time Analysis"
    },
    {
      "type": "video", 
      "title": "Goal Setting and Achievement Without Digital Distraction",
      "summary": "How to set meaningful life goals and create systems for achievement without the constant interruption of social media.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Goal Achievement"
    },
    {
      "type": "reading",
      "title": "The Creative Brain: How Social Media Kills Creativity",
      "summary": "Research on how constant digital stimulation reduces creativity, problem-solving ability, and innovative thinking.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Creativity Research"
    },
    {
      "type": "tool",
      "title": "Life Goals and Time Reclamation Planner",
      "summary": "Plan how to redirect your social media time toward meaningful goals, hobbies, relationships, and personal growth.",
      "pdf_url": "/worksheets/life-goals-time-planner.pdf",
      "button_text": "Goal Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Productive Alternatives to Social Media",
      "summary": "Comprehensive list of productive, fulfilling activities to replace social media scrolling and digital consumption.",
      "wiki_url": "/wiki/productive-alternatives-social-media",
      "button_text": "Alternative Activities"
    },
    {
      "type": "wiki",
      "title": "Creative Projects and Skill Building",
      "summary": "Ideas for creative projects, skill development, and learning opportunities that provide genuine satisfaction and growth.",
      "wiki_url": "/wiki/creative-projects-skills",
      "button_text": "Creative Growth"
    }
  ]
}', 5),

-- MODULE 6: Digital Boundaries and Healthy Technology Use
('social-media', 6, 'Creating Sustainable Digital Boundaries',
'Learn to create healthy boundaries with technology and social media that allow for beneficial use while preventing addictive patterns from returning.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Intentional Technology Use vs. Mindless Consumption",
      "summary": "Creating frameworks for intentional, purposeful technology use rather than passive consumption and addictive scrolling.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Intentional Use"
    },
    {
      "type": "video",
      "title": "App Settings and Digital Environment Design",
      "summary": "Practical strategies for configuring your devices and apps to support healthy use patterns and reduce addictive triggers.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Environment Design"
    },
    {
      "type": "reading",
      "title": "Digital Minimalism: Less But Better Technology",
      "summary": "Principles of digital minimalism: using fewer digital tools but using them more intentionally and effectively.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Digital Minimalism"
    },
    {
      "type": "audio",
      "title": "Mindful Technology Use Practice",
      "summary": "Guided exercises for developing mindful awareness of technology use and making conscious choices about digital engagement.",
      "audio_url": "/audio/mindful-technology-use.mp3",
      "duration": "9:00",
      "button_text": "Mindful Tech"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "App and Device Configuration for Recovery",
      "summary": "Step-by-step guides for configuring phones, computers, and apps to support recovery from social media addiction.",
      "wiki_url": "/wiki/device-configuration-recovery",
      "button_text": "Device Setup"
    },
    {
      "type": "wiki",
      "title": "Digital Wellness Tools and Apps",
      "summary": "Recommended apps and tools for monitoring usage, blocking distracting content, and supporting healthy digital habits.",
      "wiki_url": "/wiki/digital-wellness-tools",
      "button_text": "Wellness Tools"
    }
  ]
}', 6),

-- MODULE 7: Mental Health and Identity Beyond Social Media
('social-media', 7, 'Identity, Self-Esteem, and Mental Health Recovery',
'Address the mental health impacts of social media addiction and rebuild a healthy sense of identity and self-worth independent of online validation.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Social Media and Mental Health: Depression, Anxiety, and Self-Esteem",
      "summary": "Research on how social media use correlates with increased rates of depression, anxiety, and low self-esteem, especially in young people.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Mental Health Impact"
    },
    {
      "type": "video", 
      "title": "Rebuilding Self-Worth Without Digital Validation",
      "summary": "Strategies for developing authentic self-esteem and identity that doesn''t depend on likes, followers, or online approval.",
      "video_id": "oTugjssqOT0",
      "button_text": "Self-Worth Recovery"
    },
    {
      "type": "reading",
      "title": "Body Image and Social Media: Breaking the Comparison Trap",
      "summary": "How social media contributes to body dissatisfaction and eating disorders. Strategies for developing healthy body image.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Body Image Recovery"
    },
    {
      "type": "tool",
      "title": "Mental Health and Identity Recovery Tracker",
      "summary": "Monitor improvements in mood, self-esteem, body image, and overall mental health as you reduce social media use.",
      "pdf_url": "/worksheets/mental-health-identity-tracker.pdf",
      "button_text": "Track Mental Health"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cognitive Behavioral Techniques for Social Media Recovery",
      "summary": "CBT strategies for challenging negative thoughts, social comparison, and unhealthy beliefs related to social media use.",
      "wiki_url": "/wiki/cbt-social-media-recovery",
      "button_text": "CBT Techniques"
    },
    {
      "type": "wiki",
      "title": "Building Identity and Purpose Beyond Social Media",
      "summary": "Exercises and strategies for developing a strong sense of identity, purpose, and self-worth independent of online presence.",
      "wiki_url": "/wiki/identity-purpose-development",
      "button_text": "Identity Building"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Digital Wellness and Helping Others
('social-media', 8, 'Sustaining Digital Wellness and Advocacy',
'Create a long-term plan for maintaining healthy technology use and consider how to help others break free from social media addiction.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Long-Term Digital Wellness: Maintaining Balance",
      "summary": "Strategies for maintaining healthy digital habits long-term and preventing relapse into addictive social media patterns.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6214874/",
      "button_text": "Long-Term Wellness"
    },
    {
      "type": "video",
      "title": "Digital Minimalism as a Lifestyle",
      "summary": "Integrating digital wellness principles into a comprehensive lifestyle approach that prioritizes human connection and meaningful activities.",
      "video_id": "oTugjssqOT0",
      "button_text": "Lifestyle Integration"
    },
    {
      "type": "reading",
      "title": "Teaching Others About Digital Wellness",
      "summary": "How to share your experience and help family, friends, and community members develop healthier relationships with technology.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7425978/",
      "button_text": "Teaching Others"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Authentic Digital-Free Life",
      "summary": "Guided meditation for envisioning a life with intentional technology use, deep relationships, and meaningful pursuits.",
      "audio_url": "/audio/digital-free-life-visualization.mp3",
      "duration": "12:00",
      "button_text": "Life Visualization"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Digital Wellness Advocacy and Community Building",
      "summary": "How to become an advocate for digital wellness and help build communities focused on healthy technology use.",
      "wiki_url": "/wiki/digital-wellness-advocacy",
      "button_text": "Advocacy Guide"
    },
    {
      "type": "wiki",
      "title": "Helping Children and Teens with Social Media",
      "summary": "Resources for parents, teachers, and mentors to help young people develop healthy relationships with social media and technology.",
      "wiki_url": "/wiki/helping-youth-digital-wellness",
      "button_text": "Youth Support"
    }
  ]
}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
