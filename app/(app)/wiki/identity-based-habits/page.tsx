'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function IdentityBasedHabitsPage() {
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
          <h1 className="text-3xl font-bold text-text mb-2">Identity-Based Habits</h1>
          <p className="text-neutral-600 text-lg">How aligning habits with your chosen identity leads to lasting change.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <div className="prose prose-lg max-w-none">
            <h2>Why Identity Matters</h2>
            <p>
              Research in behavior change shows that habits stick better when they reinforce a chosen identity.
              Instead of focusing on outcomes (e.g., days sober), we ask: "What would a sober, healthy, caring
              person do right now?" This reframes actions as votes for the person you&apos;re becoming.
            </p>

            <h2>Core Principles</h2>
            <ul>
              <li><strong>Make it small:</strong> Start with a behavior so easy you can&apos;t fail.</li>
              <li><strong>Make it obvious:</strong> Use visual cues and environment design.</li>
              <li><strong>Make it satisfying:</strong> Add immediate positive feedback.</li>
              <li><strong>Make it identity-linked:</strong> Say it out loud: "I am someone who …"</li>
            </ul>

            <h2>Implementation Intentions</h2>
            <p>
              Form an if-then plan to make the behavior automatic: <em>"If I feel an urge after dinner, then I will
              take a 3-minute walk and text my accountability buddy."</em>
            </p>

            <h2>Evidence & Further Reading (Open)</h2>
            <ul>
              <li><a className="text-primary-600" href="https://psycnet.apa.org/record/1999-01451-003" target="_blank">Gollwitzer (1999): Implementation intentions</a></li>
              <li><a className="text-primary-600" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6124912/" target="_blank">Wood & Runger (2016): Psychology of habit</a></li>
              <li><a className="text-primary-600" href="https://archive.org/" target="_blank">Archive.org: Free habit resources</a></li>
            </ul>

            <h2>Try It Now</h2>
            <ol>
              <li>Write a one-sentence identity: "I am a person who …"</li>
              <li>Pick one 2-minute habit that expresses that identity.</li>
              <li>Attach it to a daily anchor (habit stacking).</li>
              <li>Track it for one week. Celebrate consistency, not perfection.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
