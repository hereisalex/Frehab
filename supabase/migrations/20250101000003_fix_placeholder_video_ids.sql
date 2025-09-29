-- Fix placeholder video IDs by replacing with external URLs
-- This addresses the issue where placeholder video IDs were leading to incorrect content

-- Replace V1bFr2SWP1I video IDs with appropriate external URLs
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = 'V1bFr2SWP1I' THEN
          jsonb_build_object(
            'type', 'reading',
            'title', lesson->>'title',
            'summary', lesson->>'summary',
            'external_url', 'https://www.samhsa.gov/find-help/recovery',
            'button_text', lesson->>'button_text'
          )
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE content->'lessons' @> '[{"video_id": "V1bFr2SWP1I"}]'::jsonb;

-- Replace 3X77B4b8Lh0 video IDs with appropriate external URLs
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = '3X77B4b8Lh0' THEN
          jsonb_build_object(
            'type', 'reading',
            'title', lesson->>'title',
            'summary', lesson->>'summary',
            'external_url', 'https://www.psychologytoday.com/us/blog/the-squeaky-wheel/201310/how-resist-peer-pressure',
            'button_text', lesson->>'button_text'
          )
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE content->'lessons' @> '[{"video_id": "3X77B4b8Lh0"}]'::jsonb;

-- Fix LGBT+ content video IDs
UPDATE track_modules 
SET lgbt_insights = jsonb_set(
  lgbt_insights,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = 'V1bFr2SWP1I' THEN
          jsonb_build_object(
            'type', 'reading',
            'title', lesson->>'title',
            'summary', lesson->>'summary',
            'external_url', 'https://www.samhsa.gov/find-help/recovery',
            'button_text', lesson->>'button_text'
          )
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = '3X77B4b8Lh0' THEN
          jsonb_build_object(
            'type', 'reading',
            'title', lesson->>'title',
            'summary', lesson->>'summary',
            'external_url', 'https://www.psychologytoday.com/us/blog/the-squeaky-wheel/201310/how-resist-peer-pressure',
            'button_text', lesson->>'button_text'
          )
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(lgbt_insights->'lessons') AS lesson
  )
)
WHERE lgbt_insights->'lessons' @> '[{"video_id": "V1bFr2SWP1I"}]'::jsonb 
   OR lgbt_insights->'lessons' @> '[{"video_id": "3X77B4b8Lh0"}]'::jsonb;
