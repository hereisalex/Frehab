'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/authContext'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Link from 'next/link'

interface JournalEntry {
  id: string
  module_number: number
  content: {
    type: string
    answers: {
      question1: string
      question2: string
      question3: string
      question4: string
    }
    completed_at: string
  }
  created_at: string
}

export default function JournalPage() {
  const { user } = useAuth()
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchJournalEntries = async () => {
      if (!user) return

      try {
        const result = await supabase
          .from('journal_entries')
          .select('*')
          .eq('user_id', user.id)

        if (result.error) {
          console.error('Error fetching journal entries:', result.error)
          if (result.error.message?.includes('Supabase not configured')) {
            setEntries([])
          } else {
            setError('Failed to load journal entries')
          }
        } else {
          // Sort entries by created_at in descending order
          const sortedEntries = (result.data || []).sort((a: JournalEntry, b: JournalEntry) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          setEntries(sortedEntries)
        }
      } catch (err) {
        console.error('Error fetching journal entries:', err)
        setError('Failed to load journal entries')
      } finally {
        setLoading(false)
      }
    }

    fetchJournalEntries()
  }, [user])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getModuleTitle = (moduleNumber: number) => {
    const moduleTitles: { [key: number]: string } = {
      1: 'Foundation: Understanding Recovery',
      2: 'Building Your Support System',
      3: 'From Values to Habits',
      4: 'Relapse Prevention: Triggers & Cravings',
      5: 'Building a Fulfilling Life',
      6: 'Resilience & Stress Management',
      7: 'Community & Service: Connected Recovery',
      8: 'Sustain & Grow: Future-Proof Your Recovery'
    }
    return moduleTitles[moduleNumber] || `Module ${moduleNumber}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 bg-neutral-200 rounded mb-8"></div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="h-6 bg-neutral-200 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-neutral-200 rounded"></div>
                    <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                    <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-text mb-2">
                Private Journal
              </h1>
              <p className="text-neutral-600">
                Your personal recovery journal space. All entries are private and secure.
              </p>
            </div>
            <Link href="/program">
              <Button variant="secondary">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Start New Entry
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600">{error}</p>
            <Button 
              variant="primary" 
              size="sm" 
              className="mt-3"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">
              No Journal Entries Yet
            </h3>
            <p className="text-neutral-600 mb-6">
              Start your journaling journey by completing a module&apos;s action project.
            </p>
            <Link href="/program">
              <Button variant="primary">
                Start Module 1
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-1">
                      {getModuleTitle(entry.module_number)}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Completed on {formatDate(entry.created_at)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                      Module {entry.module_number}
                    </span>
                  </div>
                </div>

                {entry.content.type === 'personal_balance_sheet' && (
                  <div className="space-y-4">
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <h4 className="font-medium text-text mb-2">1. Core Values</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {entry.content.answers.question1}
                      </p>
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-4">
                      <h4 className="font-medium text-text mb-2">2. Aspirational Self</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {entry.content.answers.question2}
                      </p>
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-4">
                      <h4 className="font-medium text-text mb-2">3. Personal Recovery Definition</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {entry.content.answers.question3}
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4 border border-primary-200">
                      <h4 className="font-medium text-text mb-2">4. Vision Statement</h4>
                      <p className="text-neutral-700 text-sm leading-relaxed font-medium">
                        &ldquo;{entry.content.answers.question4}&rdquo;
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span>Entry ID: {entry.id.slice(0, 8)}...</span>
                      <span>Type: {entry.content.type.replace('_', ' ')}</span>
                    </div>
                    <Link href={`/program/${entry.module_number}`}>
                      <Button variant="ghost" size="sm">
                        Return to Module
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {entries.length > 0 && (
          <div className="mt-8 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/program">
                <Button variant="secondary">
                  Continue Program
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost">
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 