-- Simple Video URL Update Migration
-- This migration directly updates the content JSONB field with new video URLs

-- Update alcohol track videos
UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Alcohol-Free Social Skills", "external_url": "https://www.youtube.com/watch?v=Zd3ezJ4Lp4M", "button_text": "Watch Video", "summary": "Learn social skills without alcohol"}]}'
WHERE track_id = 'alcohol' AND module_number = 1;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Healthy Stress Relief Without Alcohol", "external_url": "https://www.youtube.com/watch?v=A63B-XcDGbc", "button_text": "Watch Video", "summary": "Healthy stress management techniques"}]}'
WHERE track_id = 'alcohol' AND module_number = 2;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Urge Surfing for Alcohol Cravings", "external_url": "https://www.youtube.com/watch?v=imnUaOeqUho", "button_text": "Watch Video", "summary": "Technique for managing cravings"}]}'
WHERE track_id = 'alcohol' AND module_number = 3;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Exercise as Medicine in Alcohol Recovery", "external_url": "https://www.youtube.com/watch?v=g4QqJoox8tc", "button_text": "Watch Video", "summary": "Physical activity in recovery"}]}'
WHERE track_id = 'alcohol' AND module_number = 4;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Making Amends: The Right Way", "external_url": "https://www.youtube.com/watch?v=JY3QEqRburc", "button_text": "Watch Video", "summary": "Making amends in recovery"}]}'
WHERE track_id = 'alcohol' AND module_number = 5;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Workplace Recovery: Professional Boundaries", "external_url": "https://www.youtube.com/watch?v=HtteVDf1yb4", "button_text": "Watch Video", "summary": "Professional boundaries in recovery"}]}'
WHERE track_id = 'alcohol' AND module_number = 6;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Building Your Recovery Identity", "external_url": "https://www.youtube.com/watch?v=5XEjoyWp5K8", "button_text": "Watch Video", "summary": "Building identity in recovery"}]}'
WHERE track_id = 'alcohol' AND module_number = 7;

-- Update opioid track videos
UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "LGBT+ Bars and Alcohol Culture", "external_url": "https://www.youtube.com/watch?v=jQ4t5YjZ0ZA", "button_text": "Watch Video", "summary": "LGBT+ alcohol culture"}]}'
WHERE track_id = 'opioids' AND module_number = 1;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "LGBT+ Events and Alcohol-Free Options", "external_url": "https://www.youtube.com/watch?v=TNf80pQhEwU", "button_text": "Watch Video", "summary": "Alcohol-free LGBT+ events"}]}'
WHERE track_id = 'opioids' AND module_number = 2;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "LGBT+ Support During Withdrawal", "external_url": "https://www.youtube.com/watch?v=VYtThMim44A", "button_text": "Watch Video", "summary": "LGBT+ withdrawal support"}]}'
WHERE track_id = 'opioids' AND module_number = 3;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "LGBT+ Healthcare Advocacy for MAT", "external_url": "https://www.youtube.com/watch?v=NUhvJgxgAac", "button_text": "Watch Video", "summary": "LGBT+ healthcare advocacy"}]}'
WHERE track_id = 'opioids' AND module_number = 4;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Opioid Withdrawal Timeline", "external_url": "https://www.youtube.com/watch?v=-19dtY_GPO8", "button_text": "Watch Video", "summary": "Opioid withdrawal timeline"}]}'
WHERE track_id = 'opioids' AND module_number = 5;

-- Update social media track videos
UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Dopamine and Social Media: The Addiction by Design", "external_url": "https://www.youtube.com/watch?v=0lOmVBHLM38", "button_text": "Watch Video", "summary": "Social media addiction design"}]}'
WHERE track_id = 'social-media' AND module_number = 1;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "FOMO to JOMO: Managing Fear of Missing Out", "external_url": "https://www.youtube.com/shorts/Qtks3XIf4IU", "button_text": "Watch Video", "summary": "Managing FOMO"}]}'
WHERE track_id = 'social-media' AND module_number = 2;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Deep Work: Rebuilding Sustained Concentration", "external_url": "https://www.youtube.com/watch?v=382OExOIipQ", "button_text": "Watch Video", "summary": "Deep work techniques"}]}'
WHERE track_id = 'social-media' AND module_number = 3;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Digital Minimalism as a Lifestyle", "external_url": "https://www.youtube.com/watch?v=BBIfPDr_2BI", "button_text": "Watch Video", "summary": "Digital minimalism"}]}'
WHERE track_id = 'social-media' AND module_number = 4;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "App Settings and Digital Environment Design", "external_url": "https://www.android.com/digital-wellbeing/", "button_text": "Watch Video", "summary": "Digital environment design"}]}'
WHERE track_id = 'social-media' AND module_number = 5;

-- Update gaming track videos
UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Gaming and Brain Chemistry", "external_url": "https://www.youtube.com/watch?v=soe31_LEn48", "button_text": "Watch Video", "summary": "Gaming brain chemistry"}]}'
WHERE track_id = 'video-games' AND module_number = 1;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Exercise as Medicine in Gaming Recovery", "external_url": "https://www.youtube.com/watch?v=bOtHJpSpAIs", "button_text": "Watch Video", "summary": "Exercise in gaming recovery"}]}'
WHERE track_id = 'video-games' AND module_number = 2;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Building Identity Beyond Gaming", "external_url": "https://www.youtube.com/shorts/EUYZ887uLtc", "button_text": "Watch Video", "summary": "Identity beyond gaming"}]}'
WHERE track_id = 'video-games' AND module_number = 3;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Gaming Withdrawal Symptoms", "external_url": "https://www.youtube.com/watch?v=agxJpSpA9yg", "button_text": "Watch Video", "summary": "Gaming withdrawal symptoms"}]}'
WHERE track_id = 'video-games' AND module_number = 4;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Breaking Gaming Patterns", "external_url": "https://www.youtube.com/watch?v=ZMgTBIRHmWg", "button_text": "Watch Video", "summary": "Breaking gaming patterns"}]}'
WHERE track_id = 'video-games' AND module_number = 5;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Social Confidence Without Gaming", "external_url": "https://www.youtube.com/watch?v=-7bYAFYltyM", "button_text": "Watch Video", "summary": "Social confidence without gaming"}]}'
WHERE track_id = 'video-games' AND module_number = 6;

UPDATE track_modules 
SET content = content || '{"lessons": [{"type": "video", "title": "Building Real-World Social Skills", "external_url": "https://www.youtube.com/watch?v=0awRU7tad5Y", "button_text": "Watch Video", "summary": "Real-world social skills"}]}'
WHERE track_id = 'video-games' AND module_number = 7;
