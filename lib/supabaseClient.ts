import { createClient } from '@supabase/supabase-js'

/**
 * Supabase client configuration for Frehab
 * 
 * This client is used for authentication, database operations, and real-time features.
 * Environment variables must be set in .env.local:
 * - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anonymous key
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if we're in the browser and environment variables are missing
if (typeof window !== 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.')
  console.error('Required variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Create a mock client if environment variables are missing (for development)
const createMockClient = () => {
  // Using mock Supabase client - environment variables not found
  const mockQuery = {
    single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
    order: () => mockQuery,
    eq: () => mockQuery,
    gte: () => mockQuery,
    then: (resolve: any) => resolve({ data: [], error: { message: 'Supabase not configured' } })
  }

  return {
    from: () => ({
      select: () => mockQuery,
      insert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      upsert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
    }),
    rpc: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      signInWithOAuth: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signOut: () => Promise.resolve({ error: null })
    }
  }
}

// Export the real client if environment variables are available, otherwise export mock client.
// We annotate as `any` to keep type-checking permissive during development without Supabase.
export const supabase: any = supabaseUrl && supabaseAnonKey 
  ? (() => {
      return createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true
        }
      })
    })()
  : createMockClient()