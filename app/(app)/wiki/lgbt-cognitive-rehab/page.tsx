'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LBTCognitiveRehabPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-cognitive-rehab" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ Cognitive Rehabilitation
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Substance use can affect cognitive function, and LGBT+ individuals may face 
              additional challenges due to minority stress, trauma, and healthcare disparities. 
              Cognitive rehabilitation can help restore mental function and support recovery.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Understanding Cognitive Impact of Substance Use
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                Different substances affect the brain in various ways, potentially impacting 
                memory, attention, decision-making, and emotional regulation. Understanding 
                these effects is the first step in cognitive rehabilitation.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Common Cognitive Challenges
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Memory and Learning</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Short-term memory difficulties</li>
                  <li>Problems with new learning</li>
                  <li>Difficulty retaining information</li>
                  <li>Challenges with recall and recognition</li>
                  <li>Working memory impairments</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Attention and Focus</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Difficulty concentrating</li>
                  <li>Problems with sustained attention</li>
                  <li>Easily distracted</li>
                  <li>Challenges with multitasking</li>
                  <li>Slow processing speed</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Executive Function</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Problems with planning and organization</li>
                  <li>Difficulty with decision-making</li>
                  <li>Challenges with problem-solving</li>
                  <li>Impulse control issues</li>
                  <li>Difficulty with goal-setting</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              LGBT+ Specific Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Minority Stress</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Chronic stress affects brain function</li>
                  <li>Trauma impacts memory and learning</li>
                  <li>Discrimination affects cognitive performance</li>
                  <li>Social isolation impacts brain health</li>
                  <li>Internalized stigma affects self-perception</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Healthcare Disparities</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>Delayed access to treatment</li>
                  <li>Lack of LGBT+ competent care</li>
                  <li>Mental health stigma</li>
                  <li>Substance use stigma</li>
                  <li>Limited resources and support</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Cognitive Rehabilitation Strategies
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Memory Training</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Mnemonic devices and memory aids</li>
                  <li>Repetition and rehearsal techniques</li>
                  <li>Visualization and imagery</li>
                  <li>Chunking and organization strategies</li>
                  <li>Memory games and exercises</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Attention Training</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Mindfulness and meditation</li>
                  <li>Focus exercises and activities</li>
                  <li>Environmental modifications</li>
                  <li>Time management techniques</li>
                  <li>Distraction reduction strategies</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Executive Function Training</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Goal-setting and planning exercises</li>
                  <li>Problem-solving strategies</li>
                  <li>Decision-making frameworks</li>
                  <li>Organization and time management</li>
                  <li>Impulse control techniques</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Lifestyle Factors for Brain Health
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Physical Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Regular exercise and physical activity</li>
                  <li>Healthy eating and nutrition</li>
                  <li>Adequate sleep and rest</li>
                  <li>Stress management and relaxation</li>
                  <li>Medical care and monitoring</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Mental Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Therapy and counseling</li>
                  <li>Meditation and mindfulness</li>
                  <li>Social connection and support</li>
                  <li>Meaningful activities and hobbies</li>
                  <li>Stress reduction techniques</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Finding Affirming Cognitive Rehabilitation
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">What to Look For</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Understanding of LGBT+ specific challenges</li>
                  <li>Knowledge of minority stress and trauma</li>
                  <li>Experience with LGBT+ patients</li>
                  <li>Respect for chosen names and pronouns</li>
                  <li>Inclusive assessment and treatment</li>
                  <li>Non-judgmental approach to care</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Types of Providers</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Neuropsychologists and cognitive specialists</li>
                  <li>Occupational therapists</li>
                  <li>Speech-language pathologists</li>
                  <li>Mental health counselors</li>
                  <li>Recovery coaches and peer specialists</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Self-Help Strategies
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Daily Practices</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Keep a daily planner and schedule</li>
                  <li>Use reminders and alarms</li>
                  <li>Create routines and habits</li>
                  <li>Break tasks into smaller steps</li>
                  <li>Take regular breaks and rest</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Cognitive Exercises</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Puzzles and brain games</li>
                  <li>Reading and learning new skills</li>
                  <li>Music and art activities</li>
                  <li>Social interaction and conversation</li>
                  <li>Physical exercise and movement</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Technology and Tools
            </h2>

            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Helpful Apps and Tools</h3>
              <ul className="list-disc pl-4 space-y-2 text-indigo-700">
                <li>Memory and note-taking apps</li>
                <li>Calendar and scheduling tools</li>
                <li>Meditation and mindfulness apps</li>
                <li>Brain training and cognitive games</li>
                <li>Reminder and alarm systems</li>
                <li>Organization and productivity tools</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Support Systems
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Professional Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Neuropsychologists and cognitive specialists</li>
                  <li>Occupational therapists</li>
                  <li>Mental health counselors</li>
                  <li>Recovery coaches and peer specialists</li>
                  <li>Medical providers and specialists</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Peer Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>LGBT+ recovery support groups</li>
                  <li>Peer support specialists</li>
                  <li>Recovery communities</li>
                  <li>Online support groups</li>
                  <li>Mentoring relationships</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Cognitive rehabilitation is a process that takes time and patience. Don't 
                be discouraged by setbacks or slow progress. With the right support, strategies, 
                and commitment, you can improve your cognitive function and support your recovery 
                journey. You deserve care that understands and addresses your unique needs as 
                an LGBT+ individual in recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
