-- Add Feelings Identification and Natural Alternatives to All Recovery Tracks
-- This migration adds track-specific feelings identification modules to every recovery track

-- ALCOHOL TRACK - Module 9: Feelings Identification
INSERT INTO track_modules (track_id, module_number, title, description, content, sort_order) VALUES
('alcohol', 9, 'Understanding Your Feelings: From Alcohol Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through alcohol use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your drinking and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Alcohol and Emotional Regulation",
      "summary": "Understanding how alcohol affects your emotions and why people use it to manage feelings. Learn about the temporary relief and long-term emotional consequences.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "Why Do People Drink? The Emotional Connection",
      "summary": "Exploring the emotional reasons behind alcohol use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Alcohol Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through drinking and rate their intensity.",
      "pdf_url": "/worksheets/alcohol-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve the Same Feelings",
      "summary": "Evidence-based strategies for achieving relaxation, confidence, and social connection without alcohol.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Alcohol-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through alcohol use and their natural alternatives.",
      "wiki_url": "/wiki/alcohol-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Sober Social Alternatives",
      "summary": "Healthy ways to achieve social connection and confidence without alcohol.",
      "wiki_url": "/wiki/sober-social-alternatives",
      "button_text": "Social Alternatives"
    }
  ]
}', 9),

-- METHAMPHETAMINE TRACK - Module 9: Feelings Identification
('methamphetamine', 9, 'Understanding Your Feelings: From Meth Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through methamphetamine use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Methamphetamine and Emotional States",
      "summary": "Understanding how meth affects your emotions and why people use it to manage feelings. Learn about the intense highs and devastating lows.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Rollercoaster of Meth Use",
      "summary": "Exploring the emotional reasons behind meth use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Meth Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through meth use and rate their intensity.",
      "pdf_url": "/worksheets/meth-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Energy and Confidence",
      "summary": "Evidence-based strategies for achieving energy, confidence, and motivation without stimulants.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Meth-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through meth use and their natural alternatives.",
      "wiki_url": "/wiki/meth-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Energy and Motivation",
      "summary": "Healthy ways to achieve energy, focus, and motivation without stimulants.",
      "wiki_url": "/wiki/natural-energy-motivation",
      "button_text": "Energy Alternatives"
    }
  ]
}', 9),

-- OPIOIDS TRACK - Module 9: Feelings Identification
('opioids', 9, 'Understanding Your Feelings: From Opioid Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through opioid use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Opioids and Emotional Numbing",
      "summary": "Understanding how opioids affect your emotions and why people use them to escape pain and difficult feelings.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Escape of Opioid Use",
      "summary": "Exploring the emotional reasons behind opioid use and how to identify what feelings you were trying to escape.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Opioid Feelings Assessment",
      "summary": "Identify what feelings you were trying to escape or change through opioid use and rate their intensity.",
      "pdf_url": "/worksheets/opioid-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Cope with Pain and Trauma",
      "summary": "Evidence-based strategies for managing physical and emotional pain without opioids.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Opioid-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to escape through opioid use and their natural alternatives.",
      "wiki_url": "/wiki/opioid-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Pain Management",
      "summary": "Healthy ways to manage physical and emotional pain without opioids.",
      "wiki_url": "/wiki/natural-pain-management",
      "button_text": "Pain Management"
    }
  ]
}', 9),

-- MARIJUANA TRACK - Module 9: Feelings Identification
('marijuana', 9, 'Understanding Your Feelings: From Cannabis Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through cannabis use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cannabis and Emotional Regulation",
      "summary": "Understanding how cannabis affects your emotions and why people use it to manage stress, anxiety, and mood.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Benefits of Cannabis",
      "summary": "Exploring the emotional reasons behind cannabis use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Cannabis Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through cannabis use and rate their intensity.",
      "pdf_url": "/worksheets/cannabis-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Relaxation and Focus",
      "summary": "Evidence-based strategies for achieving relaxation, focus, and mood regulation without cannabis.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cannabis-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through cannabis use and their natural alternatives.",
      "wiki_url": "/wiki/cannabis-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Relaxation Techniques",
      "summary": "Healthy ways to achieve relaxation, focus, and mood regulation without cannabis.",
      "wiki_url": "/wiki/natural-relaxation-techniques",
      "button_text": "Relaxation Alternatives"
    }
  ]
}', 9),

-- COCAINE TRACK - Module 9: Feelings Identification
('cocaine', 9, 'Understanding Your Feelings: From Cocaine Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through cocaine use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Cocaine and Emotional States",
      "summary": "Understanding how cocaine affects your emotions and why people use it to achieve confidence, energy, and social connection.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional High of Cocaine Use",
      "summary": "Exploring the emotional reasons behind cocaine use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Cocaine Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through cocaine use and rate their intensity.",
      "pdf_url": "/worksheets/cocaine-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Confidence and Energy",
      "summary": "Evidence-based strategies for achieving confidence, energy, and social connection without cocaine.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Cocaine-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through cocaine use and their natural alternatives.",
      "wiki_url": "/wiki/cocaine-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Confidence and Energy",
      "summary": "Healthy ways to achieve confidence, energy, and social connection without cocaine.",
      "wiki_url": "/wiki/natural-confidence-energy",
      "button_text": "Confidence Alternatives"
    }
  ]
}', 9),

-- BENZODIAZEPINES TRACK - Module 9: Feelings Identification
('benzodiazepines', 9, 'Understanding Your Feelings: From Benzo Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through benzodiazepine use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Benzodiazepines and Anxiety Management",
      "summary": "Understanding how benzos affect your emotions and why people use them to manage anxiety, panic, and stress.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Relief of Benzo Use",
      "summary": "Exploring the emotional reasons behind benzo use and how to identify what feelings you were trying to manage.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Benzo Feelings Assessment",
      "summary": "Identify what feelings you were trying to manage through benzo use and rate their intensity.",
      "pdf_url": "/worksheets/benzo-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Manage Anxiety and Stress",
      "summary": "Evidence-based strategies for managing anxiety, panic, and stress without benzodiazepines.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Benzo-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to manage through benzo use and their natural alternatives.",
      "wiki_url": "/wiki/benzo-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Anxiety Management",
      "summary": "Healthy ways to manage anxiety, panic, and stress without benzodiazepines.",
      "wiki_url": "/wiki/natural-anxiety-management",
      "button_text": "Anxiety Management"
    }
  ]
}', 9),

-- STIMULANTS TRACK - Module 9: Feelings Identification
('stimulants', 9, 'Understanding Your Feelings: From Stimulant Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through stimulant use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Stimulants and Performance Enhancement",
      "summary": "Understanding how stimulants affect your emotions and why people use them to achieve focus, energy, and performance.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Drive of Stimulant Use",
      "summary": "Exploring the emotional reasons behind stimulant use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Stimulant Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through stimulant use and rate their intensity.",
      "pdf_url": "/worksheets/stimulant-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Focus and Energy",
      "summary": "Evidence-based strategies for achieving focus, energy, and performance without stimulants.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Stimulant-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through stimulant use and their natural alternatives.",
      "wiki_url": "/wiki/stimulant-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Focus and Energy",
      "summary": "Healthy ways to achieve focus, energy, and performance without stimulants.",
      "wiki_url": "/wiki/natural-focus-energy",
      "button_text": "Focus Alternatives"
    }
  ]
}', 9),

-- NICOTINE TRACK - Module 9: Feelings Identification
('nicotine', 9, 'Understanding Your Feelings: From Nicotine Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through nicotine use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Nicotine and Stress Management",
      "summary": "Understanding how nicotine affects your emotions and why people use it to manage stress, anxiety, and mood.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Comfort of Nicotine Use",
      "summary": "Exploring the emotional reasons behind nicotine use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Nicotine Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through nicotine use and rate their intensity.",
      "pdf_url": "/worksheets/nicotine-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Manage Stress and Mood",
      "summary": "Evidence-based strategies for managing stress, anxiety, and mood without nicotine.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Nicotine-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through nicotine use and their natural alternatives.",
      "wiki_url": "/wiki/nicotine-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Stress Management",
      "summary": "Healthy ways to manage stress, anxiety, and mood without nicotine.",
      "wiki_url": "/wiki/natural-stress-management",
      "button_text": "Stress Management"
    }
  ]
}', 9),

-- SOCIAL MEDIA TRACK - Module 9: Feelings Identification
('social-media', 9, 'Understanding Your Feelings: From Social Media Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through social media use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Social Media and Emotional Validation",
      "summary": "Understanding how social media affects your emotions and why people use it to seek validation, connection, and escape.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Pull of Social Media",
      "summary": "Exploring the emotional reasons behind social media use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Social Media Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through social media use and rate their intensity.",
      "pdf_url": "/worksheets/social-media-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Connection and Validation",
      "summary": "Evidence-based strategies for achieving connection, validation, and entertainment without social media.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Social Media-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through social media use and their natural alternatives.",
      "wiki_url": "/wiki/social-media-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Connection and Validation",
      "summary": "Healthy ways to achieve connection, validation, and entertainment without social media.",
      "wiki_url": "/wiki/natural-connection-validation",
      "button_text": "Connection Alternatives"
    }
  ]
}', 9),

-- GAMBLING TRACK - Module 9: Feelings Identification
('gambling', 9, 'Understanding Your Feelings: From Gambling to Natural Alternatives', 
'Discover what feelings you were trying to achieve through gambling and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gambling and Emotional Regulation",
      "summary": "Understanding how gambling affects your emotions and why people use it to achieve excitement, escape, and control.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Rush of Gambling",
      "summary": "Exploring the emotional reasons behind gambling and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Gambling Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through gambling and rate their intensity.",
      "pdf_url": "/worksheets/gambling-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Excitement and Control",
      "summary": "Evidence-based strategies for achieving excitement, control, and escape without gambling.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Gambling-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through gambling and their natural alternatives.",
      "wiki_url": "/wiki/gambling-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Excitement and Control",
      "summary": "Healthy ways to achieve excitement, control, and escape without gambling.",
      "wiki_url": "/wiki/natural-excitement-control",
      "button_text": "Excitement Alternatives"
    }
  ]
}', 9),

-- SHOPPING TRACK - Module 9: Feelings Identification
('shopping', 9, 'Understanding Your Feelings: From Shopping to Natural Alternatives', 
'Discover what feelings you were trying to achieve through shopping and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Shopping and Emotional Fulfillment",
      "summary": "Understanding how shopping affects your emotions and why people use it to achieve happiness, control, and self-worth.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional High of Shopping",
      "summary": "Exploring the emotional reasons behind shopping and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Shopping Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through shopping and rate their intensity.",
      "pdf_url": "/worksheets/shopping-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Happiness and Self-Worth",
      "summary": "Evidence-based strategies for achieving happiness, self-worth, and control without shopping.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Shopping-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through shopping and their natural alternatives.",
      "wiki_url": "/wiki/shopping-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Happiness and Self-Worth",
      "summary": "Healthy ways to achieve happiness, self-worth, and control without shopping.",
      "wiki_url": "/wiki/natural-happiness-self-worth",
      "button_text": "Happiness Alternatives"
    }
  ]
}', 9),

-- FOOD TRACK - Module 9: Feelings Identification
('food', 9, 'Understanding Your Feelings: From Food Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through food use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Food and Emotional Comfort",
      "summary": "Understanding how food affects your emotions and why people use it to achieve comfort, control, and emotional regulation.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Comfort of Food",
      "summary": "Exploring the emotional reasons behind food use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Food Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through food use and rate their intensity.",
      "pdf_url": "/worksheets/food-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Comfort and Control",
      "summary": "Evidence-based strategies for achieving comfort, control, and emotional regulation without food.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Food-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through food use and their natural alternatives.",
      "wiki_url": "/wiki/food-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Comfort and Control",
      "summary": "Healthy ways to achieve comfort, control, and emotional regulation without food.",
      "wiki_url": "/wiki/natural-comfort-control",
      "button_text": "Comfort Alternatives"
    }
  ]
}', 9),

-- WORK TRACK - Module 9: Feelings Identification
('work', 9, 'Understanding Your Feelings: From Workaholism to Natural Alternatives', 
'Discover what feelings you were trying to achieve through workaholism and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Workaholism and Emotional Fulfillment",
      "summary": "Understanding how workaholism affects your emotions and why people use it to achieve self-worth, control, and escape.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Drive of Workaholism",
      "summary": "Exploring the emotional reasons behind workaholism and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Workaholism Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through workaholism and rate their intensity.",
      "pdf_url": "/worksheets/workaholism-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Self-Worth and Control",
      "summary": "Evidence-based strategies for achieving self-worth, control, and fulfillment without workaholism.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Workaholism-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through workaholism and their natural alternatives.",
      "wiki_url": "/wiki/workaholism-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Self-Worth and Control",
      "summary": "Healthy ways to achieve self-worth, control, and fulfillment without workaholism.",
      "wiki_url": "/wiki/natural-self-worth-control",
      "button_text": "Self-Worth Alternatives"
    }
  ]
}', 9),

-- PORNGRAPHY TRACK - Module 9: Feelings Identification
('pornography', 9, 'Understanding Your Feelings: From Pornography Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through pornography use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Pornography and Emotional Regulation",
      "summary": "Understanding how pornography affects your emotions and why people use it to achieve pleasure, escape, and control.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Escape of Pornography Use",
      "summary": "Exploring the emotional reasons behind pornography use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Pornography Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through pornography use and rate their intensity.",
      "pdf_url": "/worksheets/pornography-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Pleasure and Connection",
      "summary": "Evidence-based strategies for achieving pleasure, connection, and intimacy without pornography.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Pornography-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through pornography use and their natural alternatives.",
      "wiki_url": "/wiki/pornography-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Pleasure and Connection",
      "summary": "Healthy ways to achieve pleasure, connection, and intimacy without pornography.",
      "wiki_url": "/wiki/natural-pleasure-connection",
      "button_text": "Pleasure Alternatives"
    }
  ]
}', 9),

-- VIDEO GAMES TRACK - Module 9: Feelings Identification
('video-games', 9, 'Understanding Your Feelings: From Gaming to Natural Alternatives', 
'Discover what feelings you were trying to achieve through gaming and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Gaming and Emotional Escape",
      "summary": "Understanding how gaming affects your emotions and why people use it to achieve achievement, escape, and social connection.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Rewards of Gaming",
      "summary": "Exploring the emotional reasons behind gaming and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Gaming Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through gaming and rate their intensity.",
      "pdf_url": "/worksheets/gaming-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Achievement and Connection",
      "summary": "Evidence-based strategies for achieving achievement, escape, and social connection without gaming.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "Gaming-Specific Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through gaming and their natural alternatives.",
      "wiki_url": "/wiki/gaming-feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Achievement and Connection",
      "summary": "Healthy ways to achieve achievement, escape, and social connection without gaming.",
      "wiki_url": "/wiki/natural-achievement-connection",
      "button_text": "Achievement Alternatives"
    }
  ]
}', 9),

-- GENERAL TRACK - Module 9: Feelings Identification
('general', 9, 'Understanding Your Feelings: From Substance Use to Natural Alternatives', 
'Discover what feelings you were trying to achieve through substance use and learn healthy, natural ways to experience those same emotions. This module helps you understand the emotional drivers behind your use and builds a toolkit of natural alternatives.',
'{
  "lessons": [
    {
      "type": "reading",
      "title": "Substances and Emotional Regulation",
      "summary": "Understanding how substances affect your emotions and why people use them to achieve or escape certain feelings.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2732004/",
      "button_text": "Emotional Function"
    },
    {
      "type": "video",
      "title": "The Emotional Function of Substance Use",
      "summary": "Exploring the emotional reasons behind substance use and how to identify what feelings you were trying to achieve.",
      "video_id": "V1bFr2SWP1I",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "General Feelings Assessment",
      "summary": "Identify what feelings you were trying to achieve through substance use and rate their intensity.",
      "pdf_url": "/worksheets/general-feelings-assessment.pdf",
      "button_text": "Take Assessment"
    },
    {
      "type": "reading",
      "title": "Natural Ways to Achieve Positive Emotions",
      "summary": "Evidence-based strategies for achieving the feelings you want without substances.",
      "external_url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5508921/",
      "button_text": "Natural Alternatives"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "General Feelings Dictionary",
      "summary": "Common emotional states people try to achieve through substance use and their natural alternatives.",
      "wiki_url": "/wiki/feelings-dictionary",
      "button_text": "Feelings Dictionary"
    },
    {
      "type": "wiki",
      "title": "Natural Alternatives Database",
      "summary": "Comprehensive database of natural alternatives for achieving specific feelings.",
      "wiki_url": "/wiki/natural-alternatives-database",
      "button_text": "Alternatives Database"
    }
  ]
}', 9)

ON CONFLICT (track_id, module_number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  sort_order = EXCLUDED.sort_order,
  updated_at = NOW();
