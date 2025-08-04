# Private Journal Feature

## Overview

The Private Journal feature allows users to save their responses to module action projects in a secure, private space. This feature is integrated with Module 1's "Personal Balance Sheet" project and can be extended to other modules.

## Database Schema

### `journal_entries` Table

```sql
CREATE TABLE journal_entries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    module_number INTEGER NOT NULL,
    content JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Key Features:**
- Row Level Security (RLS) enabled - users can only access their own entries
- JSONB content field for flexible structured data storage
- Automatic timestamps for creation and updates
- Foreign key relationship to user profiles

## Module 1 Integration

### Personal Balance Sheet Component

The `PersonalBalanceSheet` component (`components/PersonalBalanceSheet.tsx`) provides:

1. **Four Structured Questions:**
   - Core values and what matters most
   - Aspirational self description
   - Personal recovery definition
   - Vision statement creation

2. **Form Validation:**
   - All fields must be completed before saving
   - Real-time validation feedback

3. **Save Functionality:**
   - Saves to `journal_entries` table with structured JSON
   - Handles both real and mock Supabase clients
   - Success/error state management

## Journal Page

### Features

1. **Entry Display:**
   - Chronological listing of all user entries
   - Module-specific formatting (currently supports Module 1)
   - Clean, card-based layout

2. **Empty State:**
   - Helpful guidance when no entries exist
   - Direct link to start Module 1

3. **Navigation:**
   - Quick access to program modules
   - Return to dashboard
   - Start new entries

## Usage Flow

1. **User navigates to Module 1** (`/program/1`)
2. **Completes Personal Balance Sheet** with four reflective questions
3. **Clicks "Save to Journal"** - data is stored in database
4. **Views entries in Journal** (`/journal`) - all entries displayed chronologically
5. **Can return to modules** to continue program

## Security

- **Row Level Security (RLS):** Users can only access their own journal entries
- **Private by Design:** No sharing or public access to journal entries
- **Secure Storage:** All data encrypted in transit and at rest via Supabase

## Future Extensions

The journal system is designed to be extensible:

1. **Additional Modules:** Easy to add new module types with different question structures
2. **Entry Types:** Support for different content types beyond structured forms
3. **Rich Text:** Potential for rich text editing in future versions
4. **Export:** Future capability to export journal entries

## Development Notes

- **Mock Client Support:** Works in development without Supabase configuration
- **Type Safety:** Full TypeScript support for all data structures
- **Error Handling:** Graceful handling of network and configuration errors
- **Responsive Design:** Mobile-friendly layout and interactions

## Database Migration

To set up the journal feature, run the migration:

```bash
# Apply the journal_entries table migration
supabase db push
```

This creates the table with proper RLS policies and indexes for optimal performance. 