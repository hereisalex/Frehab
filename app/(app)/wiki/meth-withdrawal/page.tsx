import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function MethWithdrawalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Methamphetamine Withdrawal Timeline & Recovery
          </h1>
          <p className="text-neutral-600">
            Understanding the unique withdrawal process and extended recovery timeline for methamphetamine addiction.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Important Medical Information</h3>
              <p className="text-red-700">
                <strong>Methamphetamine withdrawal can include severe depression and suicidal thoughts.</strong> 
                If you experience thoughts of self-harm, call 988 (Suicide & Crisis Lifeline) or 911 immediately. 
                Heavy users should consider medical supervision during withdrawal.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Methamphetamine Withdrawal Phases</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-red-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-600">The Crash (Days 1-10)</h3>
                  <p className="text-sm text-gray-500">Most intense withdrawal phase</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Physical Symptoms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Extreme fatigue and hypersomnia (12-15+ hours sleep)</li>
                    <li>• Increased appetite and rapid weight gain</li>
                    <li>• Severe headaches and body aches</li>
                    <li>• Tremors and muscle twitches</li>
                    <li>• Dehydration and electrolyte imbalance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Psychological Symptoms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Severe depression and hopelessness</li>
                    <li>• Intense drug cravings</li>
                    <li>• Anxiety and agitation</li>
                    <li>• Paranoid thoughts may persist</li>
                    <li>• Suicidal ideation (seek help immediately)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-orange-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600">Subacute Withdrawal (Weeks 2-4)</h3>
                  <p className="text-sm text-gray-500">Gradual symptom improvement</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Improving Symptoms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sleep patterns begin normalizing</li>
                    <li>• Energy levels slowly increase</li>
                    <li>• Appetite regulation improves</li>
                    <li>• Physical discomfort decreases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Ongoing Challenges</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Persistent cravings (though less intense)</li>
                    <li>• Mood swings and irritability</li>
                    <li>• Cognitive fog and memory issues</li>
                    <li>• Anhedonia (inability to feel pleasure)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-yellow-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-600">Protracted Withdrawal (Months 1-24)</h3>
                  <p className="text-sm text-gray-500">Long-term recovery phase</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Residual Symptoms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Periodic cravings (triggered by stress)</li>
                    <li>• Mild to moderate depression</li>
                    <li>• Attention and concentration difficulties</li>
                    <li>• Reduced motivation and energy</li>
                    <li>• Sleep disturbances</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Recovery Progress</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gradual return of natural pleasure</li>
                    <li>• Improved cognitive function</li>
                    <li>• Better emotional regulation</li>
                    <li>• Increased social functioning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Why Meth Withdrawal is Different</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Unique Aspects of Methamphetamine Withdrawal</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Neurochemical Damage</h4>
                <p className="text-sm text-blue-600">
                  Meth causes actual damage to dopamine neurons, not just depletion. 
                  Recovery requires time for brain repair, not just chemical rebalancing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Extended Timeline</h4>
                <p className="text-sm text-blue-600">
                  Recovery takes much longer than other substances - often 1-2 years 
                  for full cognitive and emotional function restoration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Cognitive Impairment</h4>
                <p className="text-sm text-blue-600">
                  Memory, attention, and decision-making problems persist longer 
                  and may require specific cognitive rehabilitation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Intense Cravings</h4>
                <p className="text-sm text-blue-600">
                  Cravings can be extremely intense and persistent due to the 
                  profound changes in the brain's reward system.
                </p>
              </div>
            </div>
          </div>

          <h2>Managing Withdrawal Symptoms</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">Sleep & Energy</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Allow extended sleep</strong> during crash phase (12-15 hours normal)</li>
                <li>• <strong>Gradual sleep schedule</strong> - don't force normal hours too quickly</li>
                <li>• <strong>Light therapy</strong> to help reset circadian rhythms</li>
                <li>• <strong>Gentle activity</strong> when awake, but don't over-exert</li>
                <li>• <strong>Avoid caffeine</strong> which can worsen anxiety and sleep issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Nutrition & Physical Care</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>High-protein foods</strong> to support neurotransmitter production</li>
                <li>• <strong>Complex carbohydrates</strong> for stable blood sugar</li>
                <li>• <strong>Hydration focus</strong> - meth causes severe dehydration</li>
                <li>• <strong>Multivitamins</strong> especially B-complex and magnesium</li>
                <li>• <strong>Small frequent meals</strong> as appetite slowly returns</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">Mental Health Support</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>24/7 crisis support</strong> - depression can be severe</li>
                <li>• <strong>Psychiatric evaluation</strong> for potential medication</li>
                <li>• <strong>Cognitive behavioral therapy</strong> specifically for stimulant addiction</li>
                <li>• <strong>Support groups</strong> like Crystal Meth Anonymous</li>
                <li>• <strong>Avoid isolation</strong> - have someone check on you daily</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Cognitive Support</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>External memory aids</strong> - lists, calendars, reminders</li>
                <li>• <strong>Simplify decisions</strong> - reduce cognitive load</li>
                <li>• <strong>Brain training games</strong> for attention and memory</li>
                <li>• <strong>Reading practice</strong> to improve concentration</li>
                <li>• <strong>Patience with yourself</strong> - cognitive recovery takes time</li>
              </ul>
            </div>
          </div>

          <h2>When to Seek Medical Help</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">Immediate Medical Attention Needed For:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Emergency Symptoms</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Suicidal thoughts or plans</li>
                  <li>• Severe psychosis or hallucinations</li>
                  <li>• Chest pain or heart irregularities</li>
                  <li>• Seizures or loss of consciousness</li>
                  <li>• Extreme dehydration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Concerning Symptoms</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Depression lasting more than 2 weeks</li>
                  <li>• Inability to sleep for days</li>
                  <li>• Persistent paranoid thoughts</li>
                  <li>• Inability to eat or drink</li>
                  <li>• Thoughts of using again</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Medications That May Help</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <p className="text-green-800 text-sm mb-4">
              <strong>Note:</strong> Always work with a healthcare provider. There are no FDA-approved medications 
              specifically for methamphetamine withdrawal, but some medications may help manage symptoms.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">For Depression/Mood</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Antidepressants (wellbutrin, mirtazapine)</li>
                  <li>• Mood stabilizers if indicated</li>
                  <li>• Anti-anxiety medications (short-term only)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">For Sleep/Physical Symptoms</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Sleep aids (trazodone, melatonin)</li>
                  <li>• Blood pressure medications if needed</li>
                  <li>• Vitamins and supplements</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Recovery Timeline: What to Expect</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-red-800">0-3M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 0-3: Crisis and Stabilization</h4>
                  <p className="text-sm text-gray-600">
                    Focus on basic needs: sleep, nutrition, safety. Severe withdrawal symptoms gradually improve. 
                    High relapse risk due to intense cravings and depression.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-orange-800">3-6M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 3-6: Early Recovery</h4>
                  <p className="text-sm text-gray-600">
                    Sleep and appetite normalize. Some cognitive function returns. Mood stabilizes but depression 
                    may persist. Can begin more intensive therapy and skill-building.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-yellow-800">6-12M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 6-12: Significant Improvement</h4>
                  <p className="text-sm text-gray-600">
                    Major cognitive improvements. Natural pleasure begins returning. Motivation and energy increase. 
                    Cravings become less frequent and intense.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-green-800">1-2Y</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Years 1-2: Sustained Recovery</h4>
                  <p className="text-sm text-gray-600">
                    Most cognitive function restored. Emotional regulation normalized. Quality of life significantly 
                    improved. Focus shifts to long-term goals and life building.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Hope in Recovery</h3>
            <p className="text-blue-700 mb-3">
              While methamphetamine withdrawal and recovery is longer and more challenging than many other substances, 
              <strong> full recovery is absolutely possible</strong>. Research shows:
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• Most cognitive function returns within 1-2 years</li>
              <li>• Many people achieve complete abstinence and life satisfaction</li>
              <li>• The brain has remarkable ability to heal and create new pathways</li>
              <li>• Each day of recovery allows more healing to occur</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Methamphetamine recovery is a marathon, not a sprint. Be patient with 
              your brain and body as they heal. Every day of recovery is an investment in your future health and happiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
