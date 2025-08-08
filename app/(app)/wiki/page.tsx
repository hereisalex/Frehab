'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/program">
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Program
              </Button>
            </Link>
            <div className="text-sm text-neutral-500">
              Wiki
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-text mb-2">Frehab Wiki</h1>
          <p className="text-neutral-600 text-lg">Evidence-based articles to support your recovery.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
          <h2 className="text-xl font-semibold text-text mb-3">Articles</h2>
          <div className="space-y-2">
            <Link href="/wiki/psychology-of-motivation"><Button variant="ghost" className="w-full justify-start">The Psychology of Motivation</Button></Link>
            <Link href="/wiki/habit-stacking"><Button variant="ghost" className="w-full justify-start">Habit Stacking</Button></Link>
            <Link href="/wiki/identity-based-habits"><Button variant="ghost" className="w-full justify-start">Identity-Based Habits</Button></Link>
            <Link href="/wiki/coping-menu"><Button variant="ghost" className="w-full justify-start">Create Your Coping Menu</Button></Link>
            <Link href="/wiki/trigger-map"><Button variant="ghost" className="w-full justify-start">Trigger & Craving Map</Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
} 