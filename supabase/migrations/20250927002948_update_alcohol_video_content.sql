-- Update alcohol track module 1 with new video content
-- Replace placeholder video with medically accurate content

UPDATE track_modules 
SET content = jsonb_set(
  jsonb_set(
    content,
    '{lessons,1,external_url}',
    '"https://www.merckmanuals.com/home/multimedia/video/overview-of-alcohol-use-disorder"'
  ),
  '{lessons,1,summary}',
  '"Comprehensive medical overview of AUD criteria, symptoms, and the medical perspective on the disorder."'
)
WHERE track_id = 'alcohol' AND module_number = 1;

-- Add the second video to the lessons array
UPDATE track_modules 
SET content = jsonb_set(
  content,
  '{lessons}',
  (
    SELECT jsonb_agg(
      CASE 
        WHEN lesson->>'type' = 'video' AND lesson->>'title' = 'Alcohol Use Disorder: Clinical Overview' THEN
          jsonb_build_object(
            'type', 'video',
            'title', 'Alcohol Use Disorder: Clinical Overview',
            'summary', 'Comprehensive medical overview of AUD criteria, symptoms, and the medical perspective on the disorder.',
            'external_url', 'https://www.merckmanuals.com/home/multimedia/video/overview-of-alcohol-use-disorder',
            'button_text', 'Watch Overview'
          )
        ELSE lesson
      END
    ) || jsonb_build_array(
      jsonb_build_object(
        'type', 'video',
        'title', 'Alcohol Withdrawal: Clinical Aspects',
        'summary', 'Educational explanation of alcohol withdrawal symptoms, management, and the medical basis of withdrawal.',
        'external_url', 'https://www.osmosis.org/learn/Alcohol_withdrawal%3A_Clinical_sciences',
        'button_text', 'Watch Withdrawal Science'
      )
    )
    FROM jsonb_array_elements(content->'lessons') AS lesson
  )
)
WHERE track_id = 'alcohol' AND module_number = 1;
