-- Add LGBT+ specific content to methamphetamine, alcohol, and opioid tracks
-- Focus on community-specific challenges, triggers, and recovery strategies

-- METHAMPHETAMINE TRACK - LGBT+ INSIGHTS
UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Methamphetamine in LGBT+ Communities: Understanding the Crisis",
      "summary": "Why methamphetamine use is disproportionately high in LGBT+ communities, including social factors, trauma, and community-specific triggers.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Community Context"
    },
    {
      "type": "video",
      "title": "Chemsex and LGBT+ Identity",
      "summary": "Understanding the intersection of methamphetamine use, sexual identity, and community culture. Navigating recovery while maintaining LGBT+ identity.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Identity & Recovery"
    },
    {
      "type": "reading",
      "title": "LGBT+ Specific Triggers for Meth Use",
      "summary": "Community-specific triggers including rejection, internalized homophobia, social pressure, and the role of meth in LGBT+ social scenes.",
      "external_url": "https://www.samhsa.gov/sites/default/files/behavioral-health-equity-lgbtq.pdf",
      "button_text": "LGBT+ Triggers"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Finding LGBT+ Affirming Recovery Support",
      "summary": "How to find recovery meetings, therapists, and support groups that are welcoming and understanding of LGBT+ experiences.",
      "wiki_url": "/wiki/lgbt-affirming-recovery-support",
      "button_text": "Affirming Support"
    },
    {
      "type": "wiki",
      "title": "Navigating LGBT+ Social Scenes in Recovery",
      "summary": "Strategies for maintaining social connections in LGBT+ communities while avoiding methamphetamine triggers and high-risk situations.",
      "wiki_url": "/wiki/lgbt-social-scenes-recovery",
      "button_text": "Social Navigation"
    }
  ]
}'::jsonb
WHERE track_id = 'methamphetamine' AND module_number = 1;

UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "LGBT+ Trauma and Methamphetamine Use",
      "summary": "How experiences of discrimination, rejection, and trauma contribute to methamphetamine use in LGBT+ individuals and impact early recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Trauma Connection"
    },
    {
      "type": "audio",
      "title": "LGBT+ Affirming Self-Care in Early Recovery",
      "summary": "Guided practices for self-compassion, identity affirmation, and building resilience during the challenging early recovery period.",
      "audio_url": "/audio/lgbt-meth-self-care.mp3",
      "duration": "8:00",
      "button_text": "Self-Care Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "LGBT+ Friendly Nutrition and Health Resources",
      "summary": "Health and nutrition resources that understand LGBT+ experiences and provide affirming care for physical recovery.",
      "wiki_url": "/wiki/lgbt-health-nutrition",
      "button_text": "Health Resources"
    }
  ]
}'::jsonb
WHERE track_id = 'methamphetamine' AND module_number = 2;

UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Cognitive Recovery in LGBT+ Context",
      "summary": "How experiences of minority stress and discrimination may impact cognitive recovery from methamphetamine use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Cognitive Context"
    },
    {
      "type": "video",
      "title": "LGBT+ Identity and Brain Healing",
      "summary": "Understanding how embracing LGBT+ identity can support neuroplasticity and cognitive recovery from methamphetamine use.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Identity & Healing"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "LGBT+ Affirming Cognitive Rehabilitation",
      "summary": "Brain training and cognitive exercises that incorporate LGBT+ identity and community connection as part of recovery.",
      "wiki_url": "/wiki/lgbt-cognitive-rehab",
      "button_text": "Cognitive Rehab"
    }
  ]
}'::jsonb
WHERE track_id = 'methamphetamine' AND module_number = 3;

-- ALCOHOL TRACK - LGBT+ INSIGHTS
UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Alcohol Use in LGBT+ Communities: Patterns and Risks",
      "summary": "Understanding higher rates of alcohol use disorder in LGBT+ populations, including social factors, minority stress, and community culture.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Community Patterns"
    },
    {
      "type": "video",
      "title": "LGBT+ Bars and Alcohol Culture",
      "summary": "Navigating the central role of alcohol in LGBT+ social life, from bars as safe spaces to the pressure to drink in community settings.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Bar Culture"
    },
    {
      "type": "reading",
      "title": "Internalized Homophobia and Alcohol Use",
      "summary": "How internalized negative messages about LGBT+ identity can drive alcohol use as a coping mechanism and barrier to recovery.",
      "external_url": "https://www.samhsa.gov/sites/default/files/behavioral-health-equity-lgbtq.pdf",
      "button_text": "Internalized Stigma"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "LGBT+ Alcohol-Free Social Alternatives",
      "summary": "Finding and creating alcohol-free social spaces and activities within LGBT+ communities for sustainable recovery.",
      "wiki_url": "/wiki/lgbt-alcohol-free-alternatives",
      "button_text": "Social Alternatives"
    },
    {
      "type": "wiki",
      "title": "Coming Out and Alcohol Recovery",
      "summary": "Navigating the intersection of coming out processes and alcohol recovery, including family dynamics and community acceptance.",
      "wiki_url": "/wiki/coming-out-alcohol-recovery",
      "button_text": "Coming Out Guide"
    }
  ]
}'::jsonb
WHERE track_id = 'alcohol' AND module_number = 1;

UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "LGBT+ Social Pressure and Alcohol",
      "summary": "Understanding unique social pressures in LGBT+ communities around alcohol use, from dating to professional networking.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Social Pressure"
    },
    {
      "type": "video",
      "title": "LGBT+ Events and Alcohol-Free Options",
      "summary": "Strategies for participating in LGBT+ community events, pride celebrations, and social gatherings without alcohol.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Event Strategies"
    },
    {
      "type": "audio",
      "title": "LGBT+ Assertiveness in Social Settings",
      "summary": "Guided practice for confidently declining alcohol in LGBT+ social settings while maintaining community connections.",
      "audio_url": "/audio/lgbt-alcohol-assertiveness.mp3",
      "duration": "6:00",
      "button_text": "Assertiveness Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "LGBT+ Sober Dating and Relationships",
      "summary": "Navigating dating and relationships in LGBT+ communities while maintaining alcohol recovery and finding compatible partners.",
      "wiki_url": "/wiki/lgbt-sober-dating",
      "button_text": "Sober Dating"
    }
  ]
}'::jsonb
WHERE track_id = 'alcohol' AND module_number = 2;

-- OPIOID TRACK - LGBT+ INSIGHTS
UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "Opioid Use in LGBT+ Communities: Hidden Crisis",
      "summary": "Understanding opioid use patterns in LGBT+ communities, including prescription misuse, pain management, and access to treatment.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Community Crisis"
    },
    {
      "type": "video",
      "title": "LGBT+ Healthcare and Opioid Prescribing",
      "summary": "How healthcare discrimination and lack of LGBT+ competent care can contribute to opioid misuse and barriers to appropriate treatment.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Healthcare Context"
    },
    {
      "type": "reading",
      "title": "Chronic Pain and LGBT+ Identity",
      "summary": "Understanding how experiences of discrimination and minority stress can contribute to chronic pain and opioid use in LGBT+ individuals.",
      "external_url": "https://www.samhsa.gov/sites/default/files/behavioral-health-equity-lgbtq.pdf",
      "button_text": "Pain & Identity"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Finding LGBT+ Affirming MAT Providers",
      "summary": "How to find medication-assisted treatment providers who are knowledgeable about LGBT+ experiences and provide affirming care.",
      "wiki_url": "/wiki/lgbt-mat-providers",
      "button_text": "Affirming MAT"
    },
    {
      "type": "wiki",
      "title": "LGBT+ Pain Management Alternatives",
      "summary": "Non-opioid pain management strategies that consider LGBT+ specific health needs and experiences of medical discrimination.",
      "wiki_url": "/wiki/lgbt-pain-management",
      "button_text": "Pain Alternatives"
    }
  ]
}'::jsonb
WHERE track_id = 'opioids' AND module_number = 1;

UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "LGBT+ Specific Withdrawal Challenges",
      "summary": "How experiences of discrimination and lack of social support can complicate opioid withdrawal and early recovery for LGBT+ individuals.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "Withdrawal Challenges"
    },
    {
      "type": "video",
      "title": "LGBT+ Support During Withdrawal",
      "summary": "Building LGBT+ affirming support networks during opioid withdrawal and early recovery phases.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Support Networks"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "LGBT+ Friendly Detox Programs",
      "summary": "How to find detox programs that are welcoming to LGBT+ individuals and understand community-specific needs.",
      "wiki_url": "/wiki/lgbt-detox-programs",
      "button_text": "Detox Programs"
    }
  ]
}'::jsonb
WHERE track_id = 'opioids' AND module_number = 2;

UPDATE track_modules 
SET lgbt_insights = '{
  "lessons": [
    {
      "type": "reading",
      "title": "MAT and LGBT+ Identity",
      "summary": "Addressing stigma around medication-assisted treatment within LGBT+ communities and the importance of MAT for community health.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724418/",
      "button_text": "MAT & Identity"
    },
    {
      "type": "video",
      "title": "LGBT+ Healthcare Advocacy for MAT",
      "summary": "How to advocate for appropriate MAT treatment as an LGBT+ individual, including addressing healthcare discrimination.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "Healthcare Advocacy"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "LGBT+ MAT Support Groups",
      "summary": "Finding support groups for people on MAT that are welcoming to LGBT+ individuals and understand community-specific challenges.",
      "wiki_url": "/wiki/lgbt-mat-support-groups",
      "button_text": "MAT Support"
    }
  ]
}'::jsonb
WHERE track_id = 'opioids' AND module_number = 3;
