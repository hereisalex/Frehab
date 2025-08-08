-- Create modules table for the Core Program
CREATE TABLE IF NOT EXISTS modules (
    id SERIAL PRIMARY KEY,
    module_number INTEGER NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comments to document the table
COMMENT ON TABLE modules IS 'Core Program modules for structured recovery guidance';
COMMENT ON COLUMN modules.module_number IS 'Sequential module number for ordering';
COMMENT ON COLUMN modules.title IS 'Module title displayed to users';
COMMENT ON COLUMN modules.description IS 'Detailed description of module content and goals';

-- Create indexes for better query performance
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = 'idx_modules_module_number'
      AND n.nspname = 'public'
  ) THEN
    CREATE INDEX idx_modules_module_number ON modules(module_number);
  END IF;
END $$;
CREATE INDEX idx_modules_created_at ON modules(created_at);

-- Insert placeholder data for Module 1 and Module 2
INSERT INTO modules (module_number, title, description) VALUES
(1, 'Foundation: Understanding Recovery', 'Begin your recovery journey by building a solid foundation. This module introduces key concepts, helps you understand your relationship with substances, and establishes the mindset needed for lasting change. You''ll learn about the science of addiction, develop self-awareness, and create your personal recovery vision.'),
(2, 'Building Your Support System', 'Recovery doesn''t happen in isolation. This module focuses on building and strengthening your support network. Learn how to identify healthy relationships, communicate your needs effectively, and develop the skills to maintain boundaries. You''ll also explore how to find and connect with recovery communities that align with your values.');

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_modules_updated_at 
    BEFORE UPDATE ON modules 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 