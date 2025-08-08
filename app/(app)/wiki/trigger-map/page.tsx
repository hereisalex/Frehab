'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function TriggerMapPage() {
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
          <h1 className="text-3xl font-bold text-text mb-2">Trigger & Craving Map</h1>
          <p className="text-neutral-600 text-lg">Identify your top triggers and link each to a concrete response plan.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <div className="prose prose-lg max-w-none">
            <h2>Categories of Triggers</h2>
            <ul>
              <li>External: places, people, objects</li>
              <li>Internal: emotions, thoughts, bodily states</li>
              <li>Situational: time of day, events, routines</li>
            </ul>
            <h2>Create Your Map</h2>
            <ol>
              <li>List 5 high-risk triggers</li>
              <li>For each, write a 3-step response plan (pause, coping menu item, connection)</li>
              <li>Add an if-then implementation intention</li>
              <li>Review weekly and adjust</li>
            </ol>
            <h2>Evidence</h2>
            <ul>
              <li><a className="text-primary-600" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4553654/" target="_blank">Marlatt & Gordon: Relapse prevention model</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
