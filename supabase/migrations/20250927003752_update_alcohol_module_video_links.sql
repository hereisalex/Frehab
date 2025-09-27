-- Update alcohol track module 1 video links to use correct external URLs
UPDATE track_modules 
SET content = jsonb_set(
  jsonb_set(
    content,
    '{lessons,1,external_url}',
    '"https://www.merckmanuals.com/home/multimedia/video/overview-of-alcohol-use-disorder"'
  ),
  '{lessons,2,external_url}',
  '"https://www.osmosis.org/learn/Alcohol_withdrawal%3A_Clinical_sciences"'
)
WHERE track_id = 'alcohol' AND module_number = 1;

-- Remove video_id fields if they exist
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' THEN lesson - 'video_id'
        ELSE lesson
      END
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'alcohol' AND module_number = 1;
