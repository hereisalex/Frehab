'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CopingMenuPage() {
  return (
    <div className="min-h-screen bg-background">
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
            <div className="text-sm text-neutral-500">Wiki</div>
          </div>
          <h1 className="text-3xl font-bold text-text mb-2">Create Your Coping Menu</h1>
          <p className="text-neutral-600 text-lg">Build a 3-2-1 menu: 3 quick calming actions, 2 connection options, 1 safe distraction.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <div className="prose prose-lg max-w-none">
            <h2>How It Works</h2>
            <p>When urges or stress rise, a ready-made list removes decision fatigue and reduces risk.</p>
            <h3>Examples</h3>
            <ul>
              <li>Calm: 4-7-8 breathing, 2-minute walk, grounding 5-4-3-2-1</li>
              <li>Connect: text an ally, post in community</li>
              <li>Distract: shower, brew tea, guided stretch</li>
            </ul>
            <h3>Tips</h3>
            <ul>
              <li>Make it visible (lock screen, wallet card)</li>
              <li>Practice your menu when you&apos;re calm</li>
              <li>Iterate weekly based on what works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
