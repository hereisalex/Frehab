import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function AlcoholWithdrawalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Alcohol Withdrawal Timeline & Safety
          </h1>
          <p className="text-neutral-600">
            Understanding what to expect during alcohol withdrawal and when to seek medical help.
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
              <h3 className="text-lg font-semibold text-red-800 mb-2">Medical Emergency Warning</h3>
              <p className="text-red-700">
                <strong>Alcohol withdrawal can be life-threatening.</strong> If you experience confusion, hallucinations, 
                seizures, high fever, or rapid heartbeat, call 911 immediately. Heavy drinkers should consult a doctor 
                before stopping alcohol to discuss medically supervised detox.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Alcohol Withdrawal Timeline</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-amber-600 mb-3">6-12 Hours After Last Drink</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Mild anxiety and shakiness</li>
                <li>• Headache and nausea</li>
                <li>• Sweating and insomnia</li>
                <li>• Irritability and mood swings</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">12-24 Hours</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Hand tremors and increased anxiety</li>
                <li>• Possible hallucinations (visual, auditory)</li>
                <li>• Confusion and disorientation</li>
                <li>• Rapid heartbeat</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">24-72 Hours</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Peak withdrawal symptoms</li>
                <li>• Risk of seizures (6-24 hours)</li>
                <li>• Delirium tremens (DTs) possible</li>
                <li>• High blood pressure and fever</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">3-7 Days</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Symptoms gradually improve</li>
                <li>• Sleep patterns normalize</li>
                <li>• Appetite returns</li>
                <li>• Mood begins to stabilize</li>
              </ul>
            </div>
          </div>

          <h2>When to Seek Medical Help</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-3">Consider Medical Detox If You:</h3>
            <ul className="text-blue-700 space-y-1">
              <li>• Drink daily or heavily (more than 4 drinks/day for men, 3 for women)</li>
              <li>• Have experienced withdrawal symptoms before</li>
              <li>• Have underlying health conditions</li>
              <li>• Take medications that interact with alcohol</li>
              <li>• Have a history of seizures</li>
              <li>• Live alone with no support system</li>
            </ul>
          </div>

          <h2>Managing Withdrawal Symptoms Safely</h2>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold mb-2">Hydration & Nutrition</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Drink plenty of water</li>
                <li>• Electrolyte drinks (no alcohol)</li>
                <li>• Thiamine (B1) supplement</li>
                <li>• Light, frequent meals</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold mb-2">Comfort Measures</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Cool, quiet environment</li>
                <li>• Gentle exercise (walking)</li>
                <li>• Relaxation techniques</li>
                <li>• Support person present</li>
              </ul>
            </div>
          </div>

          <h2>What NOT to Do</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <ul className="text-yellow-800 space-y-2">
              <li>• <strong>Don't</strong> try to detox alone if you're a heavy drinker</li>
              <li>• <strong>Don't</strong> use other substances to manage symptoms</li>
              <li>• <strong>Don't</strong> drive during withdrawal</li>
              <li>• <strong>Don't</strong> ignore severe symptoms</li>
            </ul>
          </div>

          <h2>Resources for Safe Detox</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold mb-2">24/7 Help Lines</h4>
              <p className="text-sm text-neutral-600">SAMHSA National Helpline: 1-800-662-4357</p>
            </div>
            
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold mb-2">Find Treatment</h4>
              <p className="text-sm text-neutral-600">
                Use SAMHSA's treatment locator to find medical detox facilities near you
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Withdrawal is temporary, but the decision to seek help could save your life. 
              There's no shame in needing medical support - it's the smart, safe choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
