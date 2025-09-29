'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LGBTRecoverySupportPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-affirming-recovery-support" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Finding LGBT+ Affirming Recovery Support
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Recovery is challenging for everyone, but LGBT+ individuals often face additional barriers 
              including discrimination, lack of understanding, and fear of judgment. Finding affirming 
              support can make all the difference in your recovery journey.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What Makes Support LGBT+ Affirming?
            </h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Understanding of LGBT+ specific challenges and triggers</li>
              <li>Respect for chosen names and pronouns</li>
              <li>Knowledge of community-specific recovery challenges</li>
              <li>Safe space free from judgment or conversion attempts</li>
              <li>Understanding of intersectional identities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Types of Affirming Support
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">LGBT+ Specific Groups</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>LGBT+ AA/NA meetings</li>
                  <li>SMART Recovery LGBT+ groups</li>
                  <li>Online LGBT+ recovery communities</li>
                  <li>Local LGBT+ community center programs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Affirming Therapists</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>LGBT+ competent addiction counselors</li>
                  <li>Therapists with LGBT+ specialization</li>
                  <li>Providers familiar with minority stress</li>
                  <li>Trauma-informed LGBT+ therapists</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              How to Find Affirming Support
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-slate-700">Online Directories</h3>
                <p className="text-slate-600">Use directories like Psychology Today, SAMHSA's treatment locator, or local LGBT+ community center websites to find affirming providers.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-slate-700">Ask Direct Questions</h3>
                <p className="text-slate-600">When contacting providers, ask about their experience with LGBT+ clients, training in LGBT+ issues, and approach to affirming care.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-slate-700">Community Recommendations</h3>
                <p className="text-slate-600">Ask other LGBT+ individuals in recovery, community leaders, or LGBT+ organizations for recommendations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Red Flags to Watch For
            </h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>Provider suggests your sexual orientation or gender identity is the problem</li>
                <li>Lack of knowledge about LGBT+ specific challenges</li>
                <li>Inappropriate questions about your identity</li>
                <li>Pressure to change or "fix" your identity</li>
                <li>Dismissive attitude toward LGBT+ specific concerns</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Your Support Network
            </h2>

            <p className="text-slate-600 mb-4">
              Recovery works best with a strong support network. Consider including:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>LGBT+ affirming sponsor or recovery coach</li>
              <li>LGBT+ friends who support your recovery</li>
              <li>Family members who are accepting and supportive</li>
              <li>LGBT+ community leaders or mentors</li>
              <li>Online LGBT+ recovery communities</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Remember</h3>
              <p className="text-yellow-700">
                You deserve support that affirms your identity and understands your unique challenges. 
                Don't settle for providers or groups that don't respect who you are. Your recovery 
                journey should be one of self-acceptance and growth, not shame or judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
