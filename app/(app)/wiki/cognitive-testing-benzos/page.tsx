'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function CognitiveTestingBenzosPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="cognitive-testing-benzos" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Cognitive Testing for Benzodiazepine Recovery
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Benzodiazepine use can significantly impact cognitive function, and recovery 
              often involves monitoring and improving mental abilities. Understanding 
              cognitive testing can help track your progress and identify areas for improvement.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              How Benzodiazepines Affect Cognition
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                Benzodiazepines can cause cognitive impairment including memory problems, 
                attention difficulties, and slowed processing speed. These effects may 
                persist during withdrawal and early recovery.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Types of Cognitive Testing
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Memory Tests</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Short-term memory assessment</li>
                  <li>Working memory evaluation</li>
                  <li>Long-term memory testing</li>
                  <li>Verbal and visual memory tasks</li>
                  <li>Memory recall and recognition tests</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Attention and Focus Tests</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Sustained attention tasks</li>
                  <li>Selective attention testing</li>
                  <li>Divided attention assessment</li>
                  <li>Processing speed evaluation</li>
                  <li>Reaction time measurement</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Executive Function Tests</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Planning and organization tasks</li>
                  <li>Problem-solving assessments</li>
                  <li>Decision-making evaluation</li>
                  <li>Inhibition and impulse control tests</li>
                  <li>Mental flexibility assessment</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              When to Consider Cognitive Testing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">During Withdrawal</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Baseline cognitive assessment</li>
                  <li>Monitoring withdrawal symptoms</li>
                  <li>Identifying specific impairments</li>
                  <li>Planning recovery interventions</li>
                  <li>Tracking improvement over time</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">During Recovery</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Progress monitoring</li>
                  <li>Identifying persistent issues</li>
                  <li>Guiding rehabilitation efforts</li>
                  <li>Adjusting treatment plans</li>
                  <li>Celebrating improvements</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Finding Cognitive Testing Services
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Healthcare Providers</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Neuropsychologists</li>
                  <li>Psychologists with cognitive specialization</li>
                  <li>Neurologists</li>
                  <li>Psychiatrists</li>
                  <li>Occupational therapists</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Testing Settings</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Hospital neuropsychology departments</li>
                  <li>Private practice clinics</li>
                  <li>University medical centers</li>
                  <li>Rehabilitation facilities</li>
                  <li>Community health centers</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What to Expect During Testing
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Preparation</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Get adequate sleep the night before</li>
                  <li>Eat a healthy meal</li>
                  <li>Bring any relevant medical records</li>
                  <li>List current medications</li>
                  <li>Prepare questions about the process</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">During Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Various paper-and-pencil tasks</li>
                  <li>Computer-based assessments</li>
                  <li>Verbal and visual tasks</li>
                  <li>Memory and attention exercises</li>
                  <li>Problem-solving activities</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Understanding Your Results
            </h2>

            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Test Results Include</h3>
              <ul className="list-disc pl-4 space-y-2 text-indigo-700">
                <li>Performance compared to age-matched peers</li>
                <li>Identification of specific cognitive strengths and weaknesses</li>
                <li>Recommendations for cognitive rehabilitation</li>
                <li>Guidance for daily functioning</li>
                <li>Follow-up testing recommendations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Cognitive Rehabilitation Strategies
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Memory Training</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Mnemonic devices and memory aids</li>
                  <li>Repetition and rehearsal techniques</li>
                  <li>Visualization and imagery</li>
                  <li>Chunking and organization strategies</li>
                  <li>Memory games and exercises</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Attention Training</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>Mindfulness and meditation</li>
                  <li>Focus exercises and activities</li>
                  <li>Environmental modifications</li>
                  <li>Time management techniques</li>
                  <li>Distraction reduction strategies</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Lifestyle Factors for Cognitive Health
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Physical Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Regular exercise and physical activity</li>
                  <li>Healthy eating and nutrition</li>
                  <li>Adequate sleep and rest</li>
                  <li>Stress management and relaxation</li>
                  <li>Medical care and monitoring</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Mental Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Therapy and counseling</li>
                  <li>Meditation and mindfulness</li>
                  <li>Social connection and support</li>
                  <li>Meaningful activities and hobbies</li>
                  <li>Stress reduction techniques</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Cognitive testing is a valuable tool for understanding your mental abilities 
                and tracking your recovery progress. Don't be discouraged by any deficits 
                you may have - they are often temporary and can improve with time, proper 
                care, and cognitive rehabilitation. Your healthcare provider can help you 
                understand your results and develop a plan for cognitive improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
