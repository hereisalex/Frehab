import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function AlcoholPAWSPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Post-Acute Withdrawal Syndrome (PAWS) in Alcohol Recovery
          </h1>
          <p className="text-neutral-600">
            Understanding long-term withdrawal symptoms and how to manage them effectively.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">What is PAWS?</h3>
              <p className="text-blue-700">
                Post-Acute Withdrawal Syndrome occurs after initial detox and can last weeks to months. 
                It's your brain's way of slowly healing from alcohol-induced changes. These symptoms are 
                <strong> normal, temporary, and will improve with time.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Common PAWS Symptoms in Alcohol Recovery</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🧠 Cognitive Symptoms</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Brain fog:</strong> Difficulty concentrating or thinking clearly</li>
                <li>• <strong>Memory issues:</strong> Trouble remembering recent events</li>
                <li>• <strong>Decision fatigue:</strong> Simple choices feel overwhelming</li>
                <li>• <strong>Mental slowness:</strong> Processing information takes longer</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">😰 Emotional Symptoms</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Anxiety:</strong> Generalized worry and nervousness</li>
                <li>• <strong>Depression:</strong> Low mood, hopelessness, emptiness</li>
                <li>• <strong>Mood swings:</strong> Rapid emotional changes</li>
                <li>• <strong>Irritability:</strong> Low tolerance for stress or frustration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">😴 Sleep & Energy</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Sleep disruption:</strong> Trouble falling or staying asleep</li>
                <li>• <strong>Vivid dreams:</strong> Intense or disturbing dreams</li>
                <li>• <strong>Fatigue:</strong> Low energy despite adequate sleep</li>
                <li>• <strong>Sleep pattern changes:</strong> Sleeping too much or too little</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🎯 Motivation & Focus</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Low motivation:</strong> Difficulty starting tasks</li>
                <li>• <strong>Anhedonia:</strong> Things that used to be fun aren't enjoyable</li>
                <li>• <strong>Attention problems:</strong> Easily distracted or unfocused</li>
                <li>• <strong>Procrastination:</strong> Putting off important tasks</li>
              </ul>
            </div>
          </div>

          <h2>PAWS Timeline in Alcohol Recovery</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-yellow-800">1-3M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 1-3: Peak PAWS</h4>
                  <p className="text-sm text-gray-600">
                    Symptoms are typically strongest. Brain fog, mood swings, and sleep issues are common. 
                    This is when many people struggle most with motivation and emotional regulation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-orange-800">3-6M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 3-6: Gradual Improvement</h4>
                  <p className="text-sm text-gray-600">
                    Symptoms begin to lessen in intensity and frequency. Sleep patterns start normalizing. 
                    Good days become more frequent than bad days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-green-800">6-12M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 6-12: Significant Recovery</h4>
                  <p className="text-sm text-gray-600">
                    Most PAWS symptoms are mild or gone. Energy levels normalize. Mental clarity returns. 
                    Emotional stability improves significantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-blue-800">12M+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Year 1+: Full Recovery</h4>
                  <p className="text-sm text-gray-600">
                    Brain healing is largely complete. Many people report feeling better than they have in years. 
                    Occasional mild symptoms may occur during stress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Managing PAWS Symptoms</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">For Brain Fog & Concentration</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Break tasks into smaller steps</li>
                <li>• Use lists and reminders</li>
                <li>• Practice mindfulness meditation</li>
                <li>• Reduce multitasking</li>
                <li>• Get omega-3 fatty acids</li>
                <li>• Stay hydrated</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">For Sleep Issues</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Consistent sleep schedule</li>
                <li>• Cool, dark bedroom</li>
                <li>• No screens 1 hour before bed</li>
                <li>• Chamomile tea or melatonin</li>
                <li>• Progressive muscle relaxation</li>
                <li>• Exercise earlier in the day</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">For Mood & Anxiety</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Regular exercise (especially cardio)</li>
                <li>• Deep breathing techniques</li>
                <li>• Support group meetings</li>
                <li>• Therapy or counseling</li>
                <li>• Gratitude practice</li>
                <li>• Limit caffeine intake</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">For Low Energy & Motivation</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Set very small, achievable goals</li>
                <li>• Celebrate small wins</li>
                <li>• Maintain routine and structure</li>
                <li>• Eat regular, nutritious meals</li>
                <li>• Spend time in sunlight</li>
                <li>• Connect with supportive people</li>
              </ul>
            </div>
          </div>

          <h2>When to Seek Professional Help</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">Contact a Healthcare Provider If:</h3>
            <ul className="text-red-700 space-y-1">
              <li>• Symptoms are severe or worsening after 3 months</li>
              <li>• You're having thoughts of self-harm or suicide</li>
              <li>• Depression is severe or persistent</li>
              <li>• Anxiety is interfering with daily life</li>
              <li>• Sleep problems persist beyond 6 months</li>
              <li>• You're considering drinking to cope with symptoms</li>
            </ul>
          </div>

          <h2>PAWS and Relapse Risk</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-3">Why PAWS Increases Relapse Risk</h3>
            <p className="text-yellow-700 mb-3">
              PAWS symptoms can make people feel like recovery "isn't working" or that they'll never feel normal again. 
              This leads some to consider drinking as a solution.
            </p>
            <h4 className="font-semibold text-yellow-800 mb-2">Protection Strategies:</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>• Remember that PAWS is temporary and normal</li>
              <li>• Track your progress - symptoms DO improve over time</li>
              <li>• Stay connected to support networks</li>
              <li>• Develop healthy coping skills for difficult days</li>
              <li>• Consider medication for severe depression/anxiety</li>
            </ul>
          </div>

          <h2>Supplements That May Help</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-blue-800 text-sm mb-3">
              <strong>Note:</strong> Always consult with a healthcare provider before starting supplements.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">For Brain Function</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• B-Complex vitamins</li>
                  <li>• Omega-3 fatty acids</li>
                  <li>• Magnesium</li>
                  <li>• Vitamin D</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">For Sleep & Mood</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Melatonin (for sleep)</li>
                  <li>• L-theanine (for anxiety)</li>
                  <li>• Ashwagandha (for stress)</li>
                  <li>• 5-HTP (for mood, with doctor approval)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">The Good News About PAWS</h3>
            <ul className="text-green-700 space-y-2">
              <li>• It's a sign your brain is healing and returning to normal function</li>
              <li>• Most people experience significant improvement by 6 months</li>
              <li>• Many people report feeling better than ever once PAWS resolves</li>
              <li>• Every day sober is a day of healing and progress</li>
              <li>• You're not broken - you're recovering</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> PAWS is temporary, but recovery is permanent. Your brain is working hard 
              to heal itself. Be patient and kind to yourself during this process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
