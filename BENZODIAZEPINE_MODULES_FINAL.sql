-- BENZODIAZEPINE RECOVERY MODULES - Run this SQL after the main tracks system
-- Evidence-based modules specifically designed for benzodiazepine dependence and withdrawal

INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES

-- MODULE 1: Understanding Benzodiazepine Dependence
('benzodiazepines', 1, 'Understanding Benzodiazepine Dependence & Tolerance', 
'Learn how benzodiazepines create physical dependence even when used as prescribed. Understand tolerance, dependence vs. addiction, and why benzos are uniquely challenging to discontinue.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Benzodiazepine Dependence: Medical vs. Recreational",
      "summary": "How benzodiazepines create physical dependence in weeks, even when used exactly as prescribed. Understanding the difference between dependence and addiction.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6401585/",
      "button_text": "Dependence Science"
    },
    {
      "type": "video", 
      "title": "How Benzodiazepines Affect Your Brain",
      "summary": "The neuroscience of GABA receptors, tolerance development, and why stopping benzos abruptly can be life-threatening.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Brain Effects"
    },
    {
      "type": "reading",
      "title": "Common Benzodiazepines: Potency and Half-Lives",
      "summary": "Understanding different benzodiazepines (Xanax, Valium, Ativan, Klonopin) and how their properties affect dependence and withdrawal.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4365464/",
      "button_text": "Benzo Types"
    },
    {
      "type": "tool",
      "title": "Benzodiazepine Dependence Assessment",
      "summary": "Assess your level of benzodiazepine dependence, tolerance, and withdrawal risk using clinical screening tools.",
      "pdf_url": "/worksheets/benzodiazepine-dependence-assessment.pdf",
      "button_text": "Take Assessment"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "GABA Receptors and Benzodiazepine Tolerance",
      "summary": "How benzodiazepines change GABA receptor function, leading to tolerance, dependence, and withdrawal symptoms.",
      "wiki_url": "/wiki/gaba-receptors-benzos",
      "button_text": "GABA Science"
    },
    {
      "type": "wiki",
      "title": "Prescription vs. Illicit Benzodiazepine Use",
      "summary": "Understanding the spectrum from prescribed use to dependence to recreational abuse and street benzos like pressed pills.",
      "wiki_url": "/wiki/prescription-vs-illicit-benzos",
      "button_text": "Usage Patterns"
    }
  ]
}', 1),

-- MODULE 2: Safe Benzodiazepine Withdrawal & Medical Tapering
('benzodiazepines', 2, 'Safe Withdrawal: Medical Supervision Required',
'Understand why benzodiazepine withdrawal can be life-threatening and requires medical supervision. Learn about proper tapering protocols and withdrawal timeline.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Why Benzo Withdrawal Can Be Fatal",
      "summary": "Understanding withdrawal seizures, delirium tremens-like syndrome, and other life-threatening complications of benzodiazepine withdrawal.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6016275/",
      "button_text": "Withdrawal Dangers"
    },
    {
      "type": "video",
      "title": "Medical Tapering Protocols: The Ashton Manual",
      "summary": "Evidence-based approaches to benzodiazepine tapering, including the widely-respected Ashton Manual protocols for safe discontinuation.",
      "video_id": "3X77B4b8Lh0", 
      "button_text": "Tapering Protocols"
    },
    {
      "type": "reading",
      "title": "Protracted Withdrawal Syndrome",
      "summary": "Understanding long-term benzodiazepine withdrawal symptoms that can last months or years, and evidence-based management strategies.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4896865/",
      "button_text": "Protracted Withdrawal"
    },
    {
      "type": "audio",
      "title": "Benzo Withdrawal Relaxation Techniques",
      "summary": "Guided relaxation and breathing exercises specifically designed for managing benzodiazepine withdrawal anxiety and panic.",
      "audio_url": "/audio/benzo-withdrawal-relaxation.mp3",
      "duration": "12:00",
      "button_text": "Relaxation Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Benzodiazepine Withdrawal Timeline by Drug",
      "summary": "Detailed withdrawal timelines for short-acting (Xanax), medium-acting (Ativan), and long-acting (Valium, Klonopin) benzodiazepines.",
      "wiki_url": "/wiki/benzo-withdrawal-timeline",
      "button_text": "Withdrawal Timeline"
    },
    {
      "type": "wiki", 
      "title": "Finding Benzo-Wise Medical Providers",
      "summary": "How to find doctors experienced in benzodiazepine withdrawal and tapering. What to look for and questions to ask.",
      "wiki_url": "/wiki/finding-benzo-wise-doctors",
      "button_text": "Find Doctors"
    }
  ]
}', 2),

-- MODULE 3: Managing Anxiety Without Benzodiazepines
('benzodiazepines', 3, 'Anxiety Management: Learning New Coping Skills',
'Learn evidence-based alternatives to benzodiazepines for managing anxiety, panic, and insomnia. Understand why benzos often worsen anxiety long-term.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "The Benzodiazepine Paradox: How Benzos Worsen Anxiety",
      "summary": "How long-term benzodiazepine use actually increases anxiety, panic, and insomnia through tolerance and rebound effects.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3684331/",
      "button_text": "Benzo Paradox"
    },
    {
      "type": "video",
      "title": "CBT for Anxiety: Alternatives to Medication",
      "summary": "Evidence-based cognitive behavioral therapy techniques for managing anxiety and panic without benzodiazepines.",
      "video_id": "Uxbdx-SeOOo",
      "button_text": "CBT Techniques"
    },
    {
      "type": "reading",
      "title": "Non-Benzo Medications for Anxiety",
      "summary": "Alternative medications for anxiety that don''t cause dependence: SSRIs, buspirone, gabapentin, and others.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4610617/",
      "button_text": "Alternative Meds"
    },
    {
      "type": "tool",
      "title": "Anxiety Coping Skills Tracker",
      "summary": "Track your progress learning non-medication anxiety management techniques and measure their effectiveness.",
      "pdf_url": "/worksheets/anxiety-coping-skills-tracker.pdf",
      "button_text": "Track Progress"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Breathing Techniques for Panic and Anxiety",
      "summary": "Evidence-based breathing exercises that can be as effective as benzodiazepines for acute anxiety, without dependence risk.",
      "wiki_url": "/wiki/breathing-techniques-anxiety",
      "button_text": "Breathing Techniques"
    },
    {
      "type": "wiki",
      "title": "Natural Sleep Aids vs. Benzodiazepines",
      "summary": "Safe, non-addictive alternatives for insomnia including sleep hygiene, melatonin, and other evidence-based approaches.",
      "wiki_url": "/wiki/natural-sleep-aids",
      "button_text": "Sleep Alternatives"
    }
  ]
}', 3),

-- MODULE 4: Protracted Withdrawal and Long-Term Recovery
('benzodiazepines', 4, 'Protracted Withdrawal: The Long Road to Healing',
'Understand and manage protracted benzodiazepine withdrawal syndrome. Learn patience, hope, and evidence-based strategies for long-term recovery.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Understanding Protracted Withdrawal Syndrome",
      "summary": "Why some people experience benzodiazepine withdrawal symptoms for months or years, and what research shows about recovery timelines.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6889276/",
      "button_text": "PAWS Science"
    },
    {
      "type": "video",
      "title": "Windows and Waves: The Recovery Pattern",
      "summary": "Understanding the characteristic ''windows'' (good days) and ''waves'' (symptom flares) pattern of protracted benzodiazepine withdrawal.",
      "video_id": "3X77B4b8Lh0",
      "button_text": "Recovery Pattern"
    },
    {
      "type": "reading",
      "title": "Neuroplasticity and GABA Receptor Healing",
      "summary": "How the brain heals from benzodiazepine damage through neuroplasticity, and evidence for full recovery with time.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6351169/",
      "button_text": "Brain Healing"
    },
    {
      "type": "audio",
      "title": "Hope and Healing in Benzo Recovery", 
      "summary": "Guided meditation and affirmations specifically for people struggling with protracted benzodiazepine withdrawal symptoms.",
      "audio_url": "/audio/benzo-recovery-hope.mp3",
      "duration": "15:00",
      "button_text": "Hope Practice"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Common Protracted Withdrawal Symptoms",
      "summary": "Comprehensive guide to long-term benzodiazepine withdrawal symptoms including cognitive, physical, and emotional effects.",
      "wiki_url": "/wiki/protracted-withdrawal-symptoms",
      "button_text": "Symptom Guide"
    },
    {
      "type": "wiki",
      "title": "Supporting Nervous System Healing",
      "summary": "Evidence-based approaches to support GABA receptor healing including nutrition, supplements, and lifestyle modifications.",
      "wiki_url": "/wiki/nervous-system-healing",
      "button_text": "Healing Support"
    }
  ]
}', 4),

-- MODULE 5: Medical Complications and Healthcare Navigation
('benzodiazepines', 5, 'Medical Complications and Healthcare Advocacy',
'Navigate the medical system as a benzodiazepine-dependent patient. Understand complications, find appropriate care, and advocate for proper treatment.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Medical Complications of Long-Term Benzo Use",
      "summary": "Health consequences of chronic benzodiazepine use including cognitive impairment, increased fall risk, and other medical complications.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5846112/",
      "button_text": "Medical Complications"
    },
    {
      "type": "video", 
      "title": "Advocating for Proper Benzo Care",
      "summary": "How to communicate with healthcare providers about benzodiazepine dependence and advocate for appropriate tapering support.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Healthcare Advocacy"
    },
    {
      "type": "reading",
      "title": "Benzodiazepines and Surgery/Medical Procedures",
      "summary": "Important considerations for people on benzodiazepines who need surgery or medical procedures, including anesthesia interactions.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4333901/",
      "button_text": "Medical Procedures"
    },
    {
      "type": "tool",
      "title": "Medical History Tracker for Benzo Patients",
      "summary": "Organize your benzodiazepine history, symptoms, and medical interactions to communicate effectively with healthcare providers.",
      "pdf_url": "/worksheets/benzo-medical-history-tracker.pdf",
      "button_text": "Medical Tracker"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Emergency Medical Situations and Benzos",
      "summary": "Critical information for emergency situations including drug interactions, withdrawal risks, and medical alert considerations.",
      "wiki_url": "/wiki/emergency-medical-benzos",
      "button_text": "Emergency Info"
    },
    {
      "type": "wiki",
      "title": "Cognitive Testing and Benzo-Related Impairment",
      "summary": "Understanding cognitive effects of benzodiazepines and appropriate testing for dementia-like symptoms in benzo users.",
      "wiki_url": "/wiki/cognitive-testing-benzos",
      "button_text": "Cognitive Assessment"
    }
  ]
}', 5),

-- MODULE 6: Relationships and Social Support in Benzo Recovery
('benzodiazepines', 6, 'Family, Friends, and Social Support Systems',
'Address how benzodiazepine dependence affects relationships. Help family understand the unique challenges and find appropriate support.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Family Impact of Benzo Dependence",
      "summary": "How benzodiazepine dependence affects family dynamics, especially when dependence started from legitimate medical use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5501583/",
      "button_text": "Family Impact"
    },
    {
      "type": "video",
      "title": "Explaining Benzo Dependence to Family",
      "summary": "How to help family and friends understand that benzodiazepine dependence is medical, not a character flaw or addiction choice.",
      "video_id": "2Qj8PhxSnhg",
      "button_text": "Family Education"
    },
    {
      "type": "reading",
      "title": "Support Groups for Benzo Recovery",
      "summary": "Finding appropriate support groups that understand the unique challenges of benzodiazepine withdrawal and recovery.",
      "external_url": "https://www.benzoinfo.com/support-groups/",
      "button_text": "Support Groups"
    },
    {
      "type": "audio",
      "title": "Communication During Benzo Withdrawal",
      "summary": "Guided practice for communicating needs and boundaries during the challenging withdrawal and recovery process.",
      "audio_url": "/audio/benzo-communication-skills.mp3",
      "duration": "10:00",
      "button_text": "Communication Skills"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Benzo Buddy and Online Support Communities",
      "summary": "Guide to online support communities specifically for benzodiazepine withdrawal, including safety considerations and red flags.",
      "wiki_url": "/wiki/benzo-online-support",
      "button_text": "Online Support"
    },
    {
      "type": "wiki",
      "title": "Family Resources for Benzo Dependence",
      "summary": "Educational resources to help family members understand benzodiazepine dependence and how to provide appropriate support.",
      "wiki_url": "/wiki/family-benzo-resources",
      "button_text": "Family Resources"
    }
  ]
}', 6),

-- MODULE 7: Legal and Prescription Management Issues
('benzodiazepines', 7, 'Prescription Management and Legal Considerations',
'Navigate prescription management, doctor shopping concerns, and legal issues related to benzodiazepine use and dependence.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Prescription Monitoring and Doctor Shopping",
      "summary": "Understanding prescription drug monitoring programs, legitimate medical need vs. doctor shopping, and legal protections.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6637133/",
      "button_text": "Prescription Monitoring"
    },
    {
      "type": "video", 
      "title": "Tapering Disagreements with Doctors",
      "summary": "What to do when doctors want to taper too quickly or refuse to help with benzodiazepine withdrawal support.",
      "video_id": "oTugjssqOT0",
      "button_text": "Doctor Disagreements"
    },
    {
      "type": "reading",
      "title": "Benzodiazepines and Employment Issues",
      "summary": "Workplace considerations for people on benzodiazepines including cognitive impairment, drug testing, and disability accommodations.",
      "external_url": "https://www.ada.gov/topics/ada-requirements/",
      "button_text": "Employment Issues"
    },
    {
      "type": "tool",
      "title": "Prescription Management Plan",
      "summary": "Create a plan for managing benzodiazepine prescriptions safely while working toward reduction or discontinuation.",
      "pdf_url": "/worksheets/benzo-prescription-management.pdf",
      "button_text": "Prescription Plan"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Benzodiazepine Drug Testing and Detection",
      "summary": "How long benzodiazepines stay in your system, different types of drug tests, and implications for employment and legal situations.",
      "wiki_url": "/wiki/benzo-drug-testing",
      "button_text": "Drug Testing"
    },
    {
      "type": "wiki",
      "title": "Disability and Accommodation for Benzo Withdrawal",
      "summary": "Understanding disability rights and workplace accommodations for people going through benzodiazepine withdrawal.",
      "wiki_url": "/wiki/benzo-disability-accommodations",
      "button_text": "Disability Rights"
    }
  ]
}', 7),

-- MODULE 8: Long-Term Recovery and Life After Benzos
('benzodiazepines', 8, 'Rebuilding Life After Benzodiazepine Dependence',
'Create a comprehensive plan for long-term recovery and life rebuilding after benzodiazepine dependence. Focus on hope, healing, and helping others.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Full Recovery: It Is Possible",
      "summary": "Research and case studies showing that full recovery from benzodiazepine dependence is possible, even after years of use.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7413184/",
      "button_text": "Recovery Success"
    },
    {
      "type": "video",
      "title": "Life Skills After Benzo Dependence",
      "summary": "Rebuilding life skills, confidence, and identity after benzodiazepine dependence and withdrawal recovery.",
      "video_id": "oTugjssqOT0",
      "button_text": "Life Rebuilding"
    },
    {
      "type": "reading",
      "title": "Preventing Future Benzodiazepine Dependence",
      "summary": "How to safely handle future medical situations that might involve benzodiazepine prescriptions and protect your recovery.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6889276/",
      "button_text": "Prevention Strategies"
    },
    {
      "type": "audio",
      "title": "Visualization: Your Benzo-Free Future",
      "summary": "Guided meditation for envisioning your life free from benzodiazepine dependence, focusing on health, clarity, and authentic well-being.",
      "audio_url": "/audio/benzo-free-future-visualization.mp3",
      "duration": "14:00",
      "button_text": "Future Visualization"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Celebrating Benzo Recovery Milestones",
      "summary": "Meaningful ways to celebrate recovery milestones in benzodiazepine recovery, acknowledging the unique challenges overcome.",
      "wiki_url": "/wiki/benzo-recovery-milestones",
      "button_text": "Recovery Milestones"
    },
    {
      "type": "wiki",
      "title": "Advocacy and Helping Other Benzo Survivors",
      "summary": "How to use your recovery experience to help others and advocate for better understanding of benzodiazepine dependence.",
      "wiki_url": "/wiki/benzo-advocacy-helping-others",
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
