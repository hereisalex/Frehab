-- Create journal_entries table for user journal entries
CREATE TABLE IF NOT EXISTS journal_entries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    module_number INTEGER NOT NULL,
    content JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comments to document the table
COMMENT ON TABLE journal_entries IS 'User journal entries for recovery modules';
COMMENT ON COLUMN journal_entries.id IS 'Unique identifier for the journal entry';
COMMENT ON COLUMN journal_entries.user_id IS 'Reference to the user who created this entry';
COMMENT ON COLUMN journal_entries.module_number IS 'The module number this entry is associated with';
COMMENT ON COLUMN journal_entries.content IS 'JSON object containing the structured answers for the module';

-- Create indexes for better query performance (idempotent)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_journal_entries_user_id'
      AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_journal_entries_user_id ON journal_entries(user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_journal_entries_module_number'
      AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_journal_entries_module_number ON journal_entries(module_number);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_journal_entries_created_at'
      AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_journal_entries_created_at ON journal_entries(created_at);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_journal_entries_user_module'
      AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_journal_entries_user_module ON journal_entries(user_id, module_number);
  END IF;
END $$;

-- Create trigger to automatically update updated_at (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'update_journal_entries_updated_at'
  ) THEN
    CREATE TRIGGER update_journal_entries_updated_at 
      BEFORE UPDATE ON journal_entries 
      FOR EACH ROW 
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Enable Row Level Security (RLS)
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only view their own journal entries
CREATE POLICY "Users can view own journal entries" ON journal_entries
    FOR SELECT USING (auth.uid() = user_id);

-- Users can only insert their own journal entries
CREATE POLICY "Users can insert own journal entries" ON journal_entries
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only update their own journal entries
CREATE POLICY "Users can update own journal entries" ON journal_entries
    FOR UPDATE USING (auth.uid() = user_id);

-- Users can only delete their own journal entries
CREATE POLICY "Users can delete own journal entries" ON journal_entries
    FOR DELETE USING (auth.uid() = user_id); 