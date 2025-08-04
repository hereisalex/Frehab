# Supabase Setup Guide

## Current Status
The application is currently running in **development mode** with mock data because Supabase is not configured. You'll see a yellow warning banner indicating this.

## To Connect to Supabase

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be set up

### 2. Get Your Credentials
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon/public key**

### 3. Create Environment File
Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Database Migrations
The database schema is already defined in `supabase/migrations/`. You can run these migrations through the Supabase dashboard or CLI.

### 5. Restart the Development Server
```bash
npm run dev
```

## Current Features
- ✅ Mock data for Module 1 and Module 2
- ✅ Graceful error handling
- ✅ Development mode indicator
- ✅ Full UI implementation

## Next Steps
Once Supabase is configured:
1. The yellow warning banner will disappear
2. Real data will be loaded from your database
3. All features will work with persistent data

## Database Schema
The application expects a `modules` table with:
- `id` (SERIAL PRIMARY KEY)
- `module_number` (INTEGER UNIQUE)
- `title` (TEXT)
- `description` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

The migration file `supabase/migrations/20241201000003_create_modules_table.sql` contains the complete schema and sample data. 