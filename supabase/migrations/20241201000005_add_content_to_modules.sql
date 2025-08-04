-- Add content column to modules table for structured lesson and tool content
ALTER TABLE modules ADD COLUMN content JSONB;

-- Add comment to document the new column
COMMENT ON COLUMN modules.content IS 'JSON object containing structured content for lessons and tools';

-- Create index for better query performance on content column
CREATE INDEX idx_modules_content ON modules USING GIN (content);

-- Update existing modules with initial content structure
UPDATE modules 
SET content = '{
  "lessons": [
    {
      "type": "reading",
      "title": "The Stages of Change",
      "summary": "Understanding the psychological stages people go through when making behavioral changes, from precontemplation to maintenance.",
      "external_url": "https://www.verywellmind.com/stages-of-change-2795713",
      "button_text": "Read Article"
    },
    {
      "type": "video",
      "title": "Cost-Benefit Analysis",
      "summary": "Learn how to systematically evaluate the pros and cons of your current behaviors and potential changes.",
      "video_id": "dQw4w9WgXcQ",
      "button_text": "Watch Video"
    },
    {
      "type": "tool",
      "title": "Download Your Worksheet",
      "summary": "Get your personal worksheet to complete the exercises in this module.",
      "pdf_url": "/worksheets/module1-worksheet.pdf",
      "button_text": "Download PDF"
    }
  ],
  "tools": [
    {
      "type": "wiki",
      "title": "The Psychology of Motivation",
      "summary": "Deep dive into the psychological principles that drive behavior change and sustained motivation.",
      "wiki_url": "/wiki/psychology-of-motivation",
      "button_text": "Read Article"
    }
  ]
}'::jsonb
WHERE module_number = 1; 