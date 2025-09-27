-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_type TEXT NOT NULL,
  name TEXT,
  email TEXT NOT NULL,
  organization TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  responded_at TIMESTAMPTZ,
  response_notes TEXT
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_inquiry_type ON contact_submissions(inquiry_type);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_responded_at ON contact_submissions(responded_at);

-- Add row level security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow inserts from anyone (for form submissions)
-- Reading requires authentication (for admin dashboard in future)
CREATE POLICY "Allow insert contact submissions" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the Frehab website';
COMMENT ON COLUMN contact_submissions.inquiry_type IS 'Type of inquiry: general, partnership, volunteer, donation, media, clinical, technical';
COMMENT ON COLUMN contact_submissions.responded_at IS 'Timestamp when the submission was responded to';
COMMENT ON COLUMN contact_submissions.response_notes IS 'Internal notes about the response';

