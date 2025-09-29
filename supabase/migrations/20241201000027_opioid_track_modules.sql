-- Opioid Recovery Track - Evidence-Based Modules
-- Based on latest research in opioid use disorder treatment, MAT, and harm reduction

-- Insert opioid-specific modules with comprehensive, evidence-based content
INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Opioid Use Disorder
('opioids', 1, 'Understanding Opioid Addiction & Dependence', 
'Learn the science of opioid addiction including physical dependence, tolerance, and withdrawal. Understand the difference between prescription opioid dependence and illicit opioid use.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Opioid Crisis: Science and Statistics",
      "summary": "Current state of the opioid epidemic, from prescription painkillers to fentanyl. Understanding how we got here and evidence-based solutions.",
      "external_url": "https://nida.nih.gov/research-topics/opioids/opioid-overdose-crisis",
      "button_text": "Crisis Overview"
    },
    {
      "type": "video", 
      "title": "How Opioids Hijack Your Brain",
      "summary": "The neuroscience of opioid addiction: how opioids affect brain receptors, create tolerance, and lead to physical dependence.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Brain Science"
    },
    {
      "type": "reading",
      "title": "Prescription vs. Illicit Opioids",
      "summary": "Understanding the progression from prescription painkillers to street drugs. Fentanyl contamination and why street drugs are so dangerous.",
      "external_url": "https://www.cdc.gov/opioids/basics/epidemic.html",
      "button_text": "Prescription Crisis"
    },
    {
      "type": "tool",
      "title": "Opioid Use Assessment & Risk Factors",
      "summary": "Assess your opioid use patterns, route of administration, overdose history, and risk factors using clinical screening tools.",
      "pdf_url": "/worksheets/opioid-use-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Types of Opioids: From Pills to Fentanyl",
      "summary": "Complete guide to prescription opioids, heroin, fentanyl, and synthetic opioids. Understanding potency, risks, and street names.",
      "wiki_url": "/wiki/opioid-types-guide",
      "button_text": "Opioid Guide"
    },
    {
      "type": "wiki",
      "title": "Opioid Tolerance and Physical Dependence",
      "summary": "Why opioids create rapid tolerance, the difference between dependence and addiction, and how physical dependence develops.",
      "wiki_url": "/wiki/opioid-tolerance-dependence",
      "button_text": "Dependence Science"
    }
  ]
}', 1),

-- MODULE 2: Safe Withdrawal & Detox Options
('opioids', 2, 'Opioid Withdrawal: Safety First Approach',
'Navigate opioid withdrawal safely with medical supervision. Understand detox options, withdrawal timeline, and medications that can help manage symptoms.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Opioid Withdrawal: What to Expect",
      "summary": "Complete timeline of opioid withdrawal symptoms, why medical detox is recommended, and what makes opioid withdrawal unique.",
      "external_url": "https://www.samhsa.gov/medication-assisted-treatment/treatment/opioid-withdrawal",
      "button_text": "Withdrawal Guide"
    },
    {
      "type": "video",
      "title": "Medical Detox vs. Cold Turkey",
      "summary": "Why medical supervision is recommended for opioid withdrawal. Comfort medications and safety considerations.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Detox Options"
    },
    {
      "type": "reading",
      "title": "Medications for Withdrawal Management",
      "summary": "How clonidine, loperamide, and other comfort medications can help manage withdrawal symptoms safely.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4892051/",
      "button_text": "Withdrawal Meds"
    },
    {
      "type": "audio",
      "title": "Withdrawal Comfort Techniques",
      "summary": "Guided relaxation and breathing techniques specifically for managing opioid withdrawal discomfort and anxiety.",
      "audio_url": "/audio/opioid-withdrawal-comfort.mp3",
      "duration": "8:00",
      "button_text": "Comfort Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Opioid Withdrawal Timeline & Symptoms",
      "summary": "Day-by-day breakdown of withdrawal symptoms for different opioids: short-acting vs. long-acting, prescription vs. illicit.",
      "wiki_url": "/wiki/opioid-withdrawal-timeline",
      "button_text": "Withdrawal Timeline"
    },
    {
      "type": "wiki", 
      "title": "Finding Medical Detox Programs",
      "summary": "How to find and access medical detox programs, what to expect, insurance coverage, and preparing for detox.",
      "wiki_url": "/wiki/medical-detox-programs",
      "button_text": "Detox Programs"
    }
  ]
}', 2),

-- MODULE 3: Medication-Assisted Treatment (MAT)
('opioids', 3, 'Medication-Assisted Treatment: Science-Based Recovery',
'Understand FDA-approved medications for opioid use disorder including methadone, buprenorphine, and naltrexone. Learn how MAT saves lives and supports long-term recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Science Behind MAT",
      "summary": "How medication-assisted treatment works, research on effectiveness, and why MAT is considered the gold standard for opioid addiction treatment.",
      "external_url": "https://www.samhsa.gov/medication-assisted-treatment",
      "button_text": "MAT Science"
    },
    {
      "type": "video",
      "title": "Methadone, Buprenorphine, and Naltrexone",
      "summary": "Comprehensive overview of the three FDA-approved medications: how they work, benefits, side effects, and which might be right for you.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "MAT Options"
    },
    {
      "type": "reading",
      "title": "Addressing MAT Stigma and Myths",
      "summary": "Confronting misconceptions about MAT. Why medication-assisted treatment is recovery, not replacement therapy.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6983997/",
      "button_text": "MAT Myths"
    },
    {
      "type": "tool",
      "title": "MAT Decision Support Tool",
      "summary": "Interactive guide to help you understand MAT options and prepare questions for healthcare providers.",
      "pdf_url": "/worksheets/mat-decision-guide.pdf",
      "button_text": "MAT Guide"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Finding MAT Providers",
      "summary": "How to find qualified MAT providers, SAMHSA treatment locator, insurance coverage, and what to expect at your first appointment.",
      "wiki_url": "/wiki/finding-mat-providers",
      "button_text": "Find MAT"
    },
    {
      "type": "wiki",
      "title": "Suboxone vs. Methadone: Making the Choice",
      "summary": "Detailed comparison of buprenorphine and methadone: daily clinic vs. take-home, effectiveness, side effects, and lifestyle considerations.",
      "wiki_url": "/wiki/suboxone-vs-methadone",
      "button_text": "Compare Options"
    }
  ]
}', 3),

-- MODULE 4: Overdose Prevention & Harm Reduction
('opioids', 4, 'Staying Alive: Overdose Prevention & Response',
'Learn life-saving overdose prevention and response techniques. Understand fentanyl risks, how to use naloxone, and harm reduction strategies that save lives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Fentanyl Crisis: What You Need to Know",
      "summary": "Why fentanyl is so deadly, how it''s contaminating the drug supply, and why overdose risk is higher than ever before.",
      "external_url": "https://www.cdc.gov/stopoverdose/fentanyl/index.html",
      "button_text": "Fentanyl Facts"
    },
    {
      "type": "video",
      "title": "How to Use Naloxone (Narcan)",
      "summary": "Step-by-step training on recognizing overdose signs and administering naloxone. This could save your life or someone else''s.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Naloxone Training"
    },
    {
      "type": "reading",
      "title": "Harm Reduction: Staying Safer While Using",
      "summary": "Evidence-based harm reduction strategies: never use alone, test strips, safer use practices, and reducing overdose risk.",
      "external_url": "https://harmreduction.org/about-us/principles-of-harm-reduction/",
      "button_text": "Harm Reduction"
    },
    {
      "type": "audio",
      "title": "Overdose Response: Stay Calm, Act Fast", 
      "summary": "Audio guide for emergency overdose response: calling 911, rescue breathing, naloxone administration, and follow-up care.",
      "audio_url": "/audio/overdose-response-guide.mp3",
      "duration": "6:00",
      "button_text": "Emergency Response"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Get Free Naloxone (Narcan)",
      "summary": "Where to get free naloxone kits, pharmacy programs, community distribution sites, and how to always have naloxone available.",
      "wiki_url": "/wiki/free-naloxone-programs",
      "button_text": "Get Naloxone"
    },
    {
      "type": "wiki",
      "title": "Good Samaritan Laws & Legal Protection",
      "summary": "Understanding legal protections when calling 911 for overdoses. State-by-state guide to Good Samaritan laws.",
      "wiki_url": "/wiki/good-samaritan-laws",
      "button_text": "Legal Protection"
    }
  ]
}', 4),

-- MODULE 5: Managing Chronic Pain in Recovery
('opioids', 5, 'Pain Management Without Opioids',
'Address the complex relationship between chronic pain and opioid addiction. Learn evidence-based pain management alternatives and how to work with healthcare providers.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Chronic Pain and Opioid Addiction",
      "summary": "Understanding the complex relationship between pain and addiction. How opioid tolerance affects pain perception and alternatives for pain management.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5547374/",
      "button_text": "Pain & Addiction"
    },
    {
      "type": "video", 
      "title": "Non-Opioid Pain Management Strategies",
      "summary": "Evidence-based alternatives to opioids for chronic pain: physical therapy, mindfulness, non-opioid medications, and integrative approaches.",
      "video_id": "oTugjssqOT0",
      "button_text": "Pain Alternatives"
    },
    {
      "type": "reading",
      "title": "Working with Doctors in Recovery",
      "summary": "How to communicate with healthcare providers about your addiction history and pain management needs. Advocating for appropriate care.",
      "external_url": "https://www.cdc.gov/opioids/providers/prescribing/guideline.html",
      "button_text": "Doctor Communication"
    },
    {
      "type": "tool",
      "title": "Pain Management Plan Worksheet",
      "summary": "Create a comprehensive pain management plan that doesn''t rely on opioids. Track what works and communicate effectively with providers.",
      "pdf_url": "/worksheets/opioid-pain-management-plan.pdf",
      "button_text": "Pain Plan"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Alternative Pain Treatments",
      "summary": "Comprehensive guide to non-opioid pain management: medications, therapies, devices, and lifestyle modifications that actually work.",
      "wiki_url": "/wiki/alternative-pain-treatments",
      "button_text": "Pain Treatments"
    },
    {
      "type": "wiki",
      "title": "Medical Alert Cards for Recovery",
      "summary": "How to create medical alert information for emergency situations. Communicating your addiction history to medical professionals.",
      "wiki_url": "/wiki/medical-alert-recovery",
      "button_text": "Medical Alerts"
    }
  ]
}', 5),

-- MODULE 6: Relationships & Family Recovery
('opioids', 6, 'Healing Relationships After Opioid Addiction',
'Address the profound relationship damage caused by opioid addiction including broken trust, financial harm, and family trauma. Learn to rebuild connections and communicate about recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Family Impact of Opioid Addiction",
      "summary": "How opioid addiction affects entire families: trauma, codependency, enabling behaviors, and the need for family healing alongside individual recovery.",
      "external_url": "https://www.samhsa.gov/sites/default/files/fasd_center_family_guide_english.pdf",
      "button_text": "Family Impact"
    },
    {
      "type": "video",
      "title": "Rebuilding Trust: A Long-Term Process",
      "summary": "Why trust takes time to rebuild after opioid addiction. Setting realistic expectations and taking concrete actions to demonstrate change.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Trust Building"
    },
    {
      "type": "reading",
      "title": "Financial Amends and Recovery",
      "summary": "Addressing financial damage from addiction: stolen money, debts, damaged credit. Creating a plan for financial amends and accountability.",
      "external_url": "https://www.consumer.gov/managing-debt",
      "button_text": "Financial Amends"
    },
    {
      "type": "audio",
      "title": "Difficult Conversations in Recovery",
      "summary": "Guided practice for having honest conversations about addiction, recovery, and rebuilding relationships with family members.",
      "audio_url": "/audio/opioid-family-conversations.mp3",
      "duration": "9:00",
      "button_text": "Communication Skills"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Nar-Anon and Family Support Groups",
      "summary": "How Nar-Anon helps families of people with drug addiction. Finding meetings and supporting family members in their healing.",
      "wiki_url": "/wiki/nar-anon-family-support",
      "button_text": "Family Support"
    },
    {
      "type": "wiki",
      "title": "Children and Parental Addiction Recovery",
      "summary": "Supporting children affected by parental opioid addiction. Age-appropriate communication and rebuilding the parent-child relationship.",
      "wiki_url": "/wiki/parenting-opioid-recovery",
      "button_text": "Parenting Recovery"
    }
  ]
}', 6),

-- MODULE 7: Legal Issues & Criminal Justice
('opioids', 7, 'Navigating Legal Consequences & Criminal Justice',
'Address the intersection of opioid addiction and the criminal justice system. Understand drug courts, probation, and how to navigate legal challenges while in recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Opioids and the Criminal Justice System",
      "summary": "How the opioid crisis intersects with criminal justice. Understanding charges, penalties, and treatment alternatives to incarceration.",
      "external_url": "https://www.ncjrs.gov/pdffiles1/nij/250151.pdf",
      "button_text": "Criminal Justice"
    },
    {
      "type": "video", 
      "title": "Drug Courts and Treatment Programs",
      "summary": "How drug courts work as an alternative to prison. Eligibility, requirements, and success rates for treatment-focused sentencing.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Drug Courts"
    },
    {
      "type": "reading",
      "title": "Probation and Recovery: Making It Work",
      "summary": "Strategies for successful completion of probation while in recovery. Drug testing, reporting requirements, and avoiding violations.",
      "external_url": "https://www.samhsa.gov/criminal-juvenile-justice",
      "button_text": "Probation Success"
    },
    {
      "type": "tool",
      "title": "Legal Recovery Planning Worksheet",
      "summary": "Organize court dates, legal requirements, restitution payments, and recovery goals to manage legal obligations alongside recovery.",
      "pdf_url": "/worksheets/opioid-legal-recovery-plan.pdf",
      "button_text": "Legal Planning"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "MAT and Drug Testing Issues",
      "summary": "Understanding how medication-assisted treatment affects drug testing for probation, employment, and other legal requirements.",
      "wiki_url": "/wiki/mat-drug-testing",
      "button_text": "MAT & Testing"
    },
    {
      "type": "wiki",
      "title": "Legal Aid for People in Recovery",
      "summary": "Finding free legal assistance for addiction-related legal issues, expungement, housing problems, and benefits applications.",
      "wiki_url": "/wiki/legal-aid-recovery",
      "button_text": "Legal Aid"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Opioid Recovery & Relapse Prevention
('opioids', 8, 'Sustaining Opioid Recovery for Life',
'Build a comprehensive long-term recovery plan that addresses the chronic nature of opioid addiction, ongoing treatment needs, and creating a meaningful life in recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Opioid Addiction as a Chronic Condition",
      "summary": "Understanding why opioid addiction is considered a chronic medical condition requiring ongoing management, like diabetes or hypertension.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2851054/",
      "button_text": "Chronic Condition"
    },
    {
      "type": "video",
      "title": "Long-Term MAT: Maintenance vs. Tapering",
      "summary": "Decisions about staying on medication-assisted treatment long-term versus gradual tapering. Individual considerations and medical guidance.",
      "video_id": "oTugjssqOT0",
      "button_text": "Long-Term MAT"
    },
    {
      "type": "reading",
      "title": "Building a Life Worth Living",
      "summary": "Moving beyond just staying sober to creating purpose, meaning, and joy in long-term opioid recovery. Post-acute recovery goals.",
      "external_url": "https://www.samhsa.gov/find-help/recovery",
      "button_text": "Life Building"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Opioid-Free Future",
      "summary": "Guided meditation for envisioning long-term recovery success, focusing on health, relationships, purpose, and personal growth.",
      "audio_url": "/audio/opioid-future-visualization.mp3",
      "duration": "11:00",
      "button_text": "Visualize Future"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Opioid Recovery Milestone Celebrations",
      "summary": "Meaningful ways to celebrate recovery milestones in opioid recovery, from first week clean to years of sustained recovery.",
      "wiki_url": "/wiki/opioid-recovery-milestones",
      "button_text": "Recovery Milestones"
    },
    {
      "type": "wiki",
      "title": "Giving Back: Peer Recovery Support",
      "summary": "How to become a peer recovery specialist or volunteer to help others with opioid addiction. Training programs and opportunities.",
      "wiki_url": "/wiki/opioid-peer-support",
      "button_text": "Peer Support"
    }
  ]
}', 8)

ON CONFLICT (track_id, module_number) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();
