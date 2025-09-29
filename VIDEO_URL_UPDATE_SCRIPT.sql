-- Video URL Update Script for Frehab
-- Run this script directly in Supabase Studio or via psql

-- Update alcohol track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Alcohol-Free Social Skills' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=Zd3ezJ4Lp4M"')
        WHEN lesson->>'title' = 'Healthy Stress Relief Without Alcohol' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=A63B-XcDGbc"')
        WHEN lesson->>'title' = 'Urge Surfing for Alcohol Cravings' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=imnUaOeqUho"')
        WHEN lesson->>'title' = 'Exercise as Medicine in Alcohol Recovery' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=g4QqJoox8tc"')
        WHEN lesson->>'title' = 'Making Amends: The Right Way' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=JY3QEqRburc"')
        WHEN lesson->>'title' = 'Workplace Recovery: Professional Boundaries' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=HtteVDf1yb4"')
        WHEN lesson->>'title' = 'Building Your Recovery Identity' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=5XEjoyWp5K8"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'alcohol';

-- Update opioid track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'LGBT+ Bars and Alcohol Culture' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=jQ4t5YjZ0ZA"')
        WHEN lesson->>'title' = 'LGBT+ Events and Alcohol-Free Options' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=TNf80pQhEwU"')
        WHEN lesson->>'title' = 'LGBT+ Support During Withdrawal' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=VYtThMim44A"')
        WHEN lesson->>'title' = 'LGBT+ Healthcare Advocacy for MAT' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=NUhvJgxgAac"')
        WHEN lesson->>'title' = 'Opioid Withdrawal Timeline' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=-19dtY_GPO8"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'opioids';

-- Update social media track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Dopamine and Social Media: The Addiction by Design' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=0lOmVBHLM38"')
        WHEN lesson->>'title' = 'FOMO to JOMO: Managing Fear of Missing Out' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/shorts/Qtks3XIf4IU"')
        WHEN lesson->>'title' = 'Deep Work: Rebuilding Sustained Concentration' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=382OExOIipQ"')
        WHEN lesson->>'title' = 'Digital Minimalism as a Lifestyle' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=BBIfPDr_2BI"')
        WHEN lesson->>'title' = 'App Settings and Digital Environment Design' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.android.com/digital-wellbeing/"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'social-media';

-- Update methamphetamine track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Chemsex and LGBT+ Identity' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=oFnDTPjXEWM"')
        WHEN lesson->>'title' = 'LGBT+ Identity and Brain Healing' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=7rEFSOmkfFk"')
        WHEN lesson->>'title' = 'Methamphetamine and Brain Chemistry' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=QNF4HjuVQSU"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'methamphetamine';

-- Update cannabis track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Cannabis and Brain Chemistry' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=oeF6rFN9org"')
        WHEN lesson->>'title' = 'Cannabis Withdrawal Symptoms' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=kFY6VGKMVcs"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'marijuana';

-- Update cocaine track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Cocaine and Dopamine Effects' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=yeAN26kJuTQ"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'cocaine';

-- Update benzodiazepine track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Benzo Withdrawal and GABA System' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=89EsoxE4_ac"')
        WHEN lesson->>'title' = 'Benzo Withdrawal Management' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=89EsoxE4_ac"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'benzodiazepines';

-- Update stimulant track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Dopamine and Stimulant Medications' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=vCSqPPHPb8M"')
        WHEN lesson->>'title' = 'Tapering Prescription Stimulants Safely' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=IcLtRTEP7eo"')
        WHEN lesson->>'title' = 'Stimulant Withdrawal Coping' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=IcLtRTEP7eo"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'stimulants';

-- Update nicotine track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Smoking vs. Vaping: Different Delivery, Same Addiction' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=5p1lXPfX-zs"')
        WHEN lesson->>'title' = 'Cold Turkey vs. Gradual Reduction vs. NRT' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=ltUXfmMiC9k"')
        WHEN lesson->>'title' = 'Nicotine Withdrawal Strategies' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=ltUXfmMiC9k"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'nicotine';

-- Update gambling track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'The Psychology of Gambling: How Casinos Hook Players' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=8-IrXyNZbww"')
        WHEN lesson->>'title' = 'Gambling Types and Addiction Risk' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=vSBqBT4UxLA"')
        WHEN lesson->>'title' = 'Gambling Self-Exclusion Programs' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=wapXZJXmmYw"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'gambling';

-- Update shopping track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Compulsive Buying and Brain Chemistry' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=7LhCdR05UVU"')
        WHEN lesson->>'title' = 'Shopping Withdrawal Management' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=idiAaBoOW5g"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'shopping';

-- Update food track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Food Addiction and Brain Chemistry' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=igMUKNNIDfo"')
        WHEN lesson->>'title' = 'Food Withdrawal Strategies' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=Uja_xj629Yw"')
        WHEN lesson->>'title' = 'Mindful Eating Techniques' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=-moW9jvvMr4"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'food';

-- Update work track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Work Addiction vs. High Performance' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=iAMzp-jFymY"')
        WHEN lesson->>'title' = 'Professional Identity in Recovery' THEN
          jsonb_set(lesson, '{external_url}', '"https://m.youtube.com/watch?v=UVM7HxeFs6s"')
        WHEN lesson->>'title' = 'Disclosure in the Workplace' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=WG2RHdyaK3M"')
        WHEN lesson->>'title' = 'Work-Life Balance in Recovery' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=Fe3Lk9jUf0Q"')
        WHEN lesson->>'title' = 'Work Withdrawal Symptoms' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=svzF9PWkuws"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'work';

-- Update pornography track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Pornography and Brain Chemistry' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=O4bklt6eSpM"')
        WHEN lesson->>'title' = 'Breaking Compulsive Behavioral Patterns' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=GjXY-l1EnhQ"')
        WHEN lesson->>'title' = 'Breaking Pornography Patterns' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=E0O0b3QYlm0"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'pornography';

-- Update gaming track videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'title' = 'Gaming and Brain Chemistry' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=soe31_LEn48"')
        WHEN lesson->>'title' = 'Exercise as Medicine in Gaming Recovery' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=bOtHJpSpAIs"')
        WHEN lesson->>'title' = 'Building Identity Beyond Gaming' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/shorts/EUYZ887uLtc"')
        WHEN lesson->>'title' = 'Gaming Withdrawal Symptoms' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=agxJpSpA9yg"')
        WHEN lesson->>'title' = 'Breaking Gaming Patterns' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=ZMgTBIRHmWg"')
        WHEN lesson->>'title' = 'Social Confidence Without Gaming' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=-7bYAFYltyM"')
        WHEN lesson->>'title' = 'Building Real-World Social Skills' THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=0awRU7tad5Y"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'video-games';

-- Remove video_id fields and ensure external_url is used for all videos
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson ? 'video_id' THEN
          lesson - 'video_id'
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
);

-- Add default external_url for any remaining videos without URLs
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND NOT (lesson ? 'external_url') THEN
          jsonb_set(lesson, '{external_url}', '"https://www.youtube.com/watch?v=dQw4w9WgXcQ"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
);

-- Update button text for all video lessons
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' THEN
          jsonb_set(lesson, '{button_text}', '"Watch Video"')
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
);

-- Verify the updates
SELECT 
  track_id,
  module_number,
  title,
  jsonb_array_length(content->'lessons') as lesson_count,
  (
    SELECT count(*)
    FROM jsonb_array_elements(content->'lessons') AS lesson
    WHERE lesson->>'type' = 'video' AND lesson ? 'external_url'
  ) as videos_with_urls
FROM track_modules 
WHERE track_id IN ('alcohol', 'opioids', 'social-media', 'methamphetamine', 'marijuana', 'cocaine', 'benzodiazepines', 'stimulants', 'nicotine', 'gambling', 'shopping', 'food', 'work', 'pornography', 'video-games')
ORDER BY track_id, module_number;
