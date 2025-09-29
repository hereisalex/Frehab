-- Fix remaining placeholder video IDs by replacing with external URLs
-- This addresses additional placeholder video IDs found in the audit

-- Replace dQw4w9WgXcQ (Rick Roll) video IDs with appropriate external URLs
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = 'dQw4w9WgXcQ' THEN
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
WHERE content->'lessons' @> '[{"video_id": "dQw4w9WgXcQ"}]'::jsonb;

-- Replace oTugjssqOT0 video IDs with appropriate external URLs
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = 'oTugjssqOT0' THEN
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
WHERE content->'lessons' @> '[{"video_id": "oTugjssqOT0"}]'::jsonb;

-- Replace 2Qj8PhxSnhg video IDs with appropriate external URLs
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'video_id' = '2Qj8PhxSnhg' THEN
          jsonb_build_object(
            'type', 'reading',
            'title', lesson->>'title',
            'summary', lesson->>'summary',
            'external_url', 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/alcohol-facts-and-statistics',
            'button_text', lesson->>'button_text'
          )
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE content->'lessons' @> '[{"video_id": "2Qj8PhxSnhg"}]'::jsonb;
