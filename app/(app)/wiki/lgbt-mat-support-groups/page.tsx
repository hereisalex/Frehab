'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LGBTMATSupportGroupsPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-mat-support-groups" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ MAT Support Groups
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Medication-Assisted Treatment (MAT) support groups provide crucial peer support 
              for individuals in recovery from opioid addiction. Finding LGBT+ affirming groups 
              can make all the difference in your recovery journey.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Why LGBT+ Affirming MAT Support Matters
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                LGBT+ individuals in MAT often face unique challenges including healthcare 
                discrimination, minority stress, and lack of understanding about LGBT+ 
                experiences. Affirming support groups provide a safe space to address these 
                challenges while focusing on recovery.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Types of MAT Support Groups
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">LGBT+ Specific Groups</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>LGBT+ MAT support groups</li>
                  <li>LGBT+ recovery meetings</li>
                  <li>LGBT+ peer support groups</li>
                  <li>LGBT+ community center programs</li>
                  <li>Online LGBT+ MAT communities</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">General MAT Groups</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Methadone support groups</li>
                  <li>Buprenorphine support groups</li>
                  <li>Naltrexone support groups</li>
                  <li>General recovery meetings</li>
                  <li>Peer support programs</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Online Communities</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>LGBT+ recovery forums</li>
                  <li>MAT support chat groups</li>
                  <li>Social media recovery communities</li>
                  <li>Video conference support groups</li>
                  <li>Recovery apps and platforms</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Benefits of LGBT+ Affirming Support
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Understanding and Acceptance</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Shared experiences and challenges</li>
                  <li>Understanding of minority stress</li>
                  <li>Acceptance of LGBT+ identity</li>
                  <li>Knowledge of community-specific issues</li>
                  <li>Support for chosen family</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Practical Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>Information about affirming providers</li>
                  <li>Advocacy for healthcare rights</li>
                  <li>Support during discrimination</li>
                  <li>Resources for community services</li>
                  <li>Peer mentoring and guidance</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              How to Find LGBT+ Affirming Groups
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Online Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>LGBT+ community center websites</li>
                  <li>LGBT+ health organization directories</li>
                  <li>Recovery organization websites</li>
                  <li>Social media recovery communities</li>
                  <li>Online recovery forums and groups</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Community Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>LGBT+ community centers</li>
                  <li>LGBT+ health clinics</li>
                  <li>Recovery centers and programs</li>
                  <li>Peer support organizations</li>
                  <li>Word-of-mouth recommendations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What to Look For in a Support Group
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Positive Indicators</h3>
              <ul className="list-disc pl-4 space-y-2 text-green-700">
                <li>Respect for chosen names and pronouns</li>
                <li>Understanding of LGBT+ specific challenges</li>
                <li>Knowledge of minority stress and trauma</li>
                <li>Support for chosen family relationships</li>
                <li>Inclusive language and policies</li>
                <li>LGBT+ affirming facilitators or leaders</li>
                <li>Safe space for sharing LGBT+ experiences</li>
                <li>Resources for LGBT+ specific needs</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Red Flags to Watch For
            </h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Warning Signs</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>Discriminatory comments or attitudes</li>
                <li>Pressure to change sexual orientation or gender identity</li>
                <li>Lack of understanding about LGBT+ issues</li>
                <li>Inappropriate questions about identity</li>
                <li>Dismissive attitude toward LGBT+ concerns</li>
                <li>Religious or conversion therapy approaches</li>
                <li>Lack of privacy or confidentiality</li>
                <li>Hostile or unwelcoming environment</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Starting Your Own Group
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Getting Started</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Find a safe, accessible meeting space</li>
                  <li>Develop group guidelines and ground rules</li>
                  <li>Create a schedule and format</li>
                  <li>Recruit participants and facilitators</li>
                  <li>Establish confidentiality and safety protocols</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Group Structure</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Welcome and introductions</li>
                  <li>Check-in and sharing time</li>
                  <li>Discussion topics or activities</li>
                  <li>Resource sharing and information</li>
                  <li>Closing and support planning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Online Support Options
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Virtual Meetings</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Video conference support groups</li>
                  <li>Online recovery meetings</li>
                  <li>Virtual peer support sessions</li>
                  <li>Online counseling and therapy</li>
                  <li>Digital recovery communities</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Digital Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-indigo-700">
                  <li>Recovery apps and platforms</li>
                  <li>Online forums and discussion boards</li>
                  <li>Social media recovery groups</li>
                  <li>Educational websites and resources</li>
                  <li>Digital recovery tools and trackers</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Your Support Network
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Peer Connections</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Regular group attendance</li>
                  <li>One-on-one peer support</li>
                  <li>Recovery partnerships and sponsors</li>
                  <li>Social connections outside meetings</li>
                  <li>Mentoring relationships</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Professional Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>LGBT+ affirming therapists</li>
                  <li>MAT providers and medical team</li>
                  <li>Recovery coaches and counselors</li>
                  <li>Case managers and social workers</li>
                  <li>Peer support specialists</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Support groups are a crucial part of recovery, and you deserve to find groups 
                that understand and affirm your identity. Don't settle for groups that don't 
                respect who you are. Your recovery journey should be one of self-acceptance 
                and growth, supported by people who celebrate your authentic self.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
