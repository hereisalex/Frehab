'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function CannabisDrugTestingPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="cannabis-drug-testing" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Cannabis Drug Testing
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Drug testing for cannabis (marijuana) is commonly used in recovery programs, 
              workplace settings, and medical monitoring. Understanding how these tests 
              work can help you navigate recovery and make informed decisions.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Types of Cannabis Drug Tests
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Urine Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Most common type of drug test</li>
                  <li>Detects THC metabolites for days to weeks after use</li>
                  <li>Can detect 11-nor-9-carboxy-THC (primary metabolite)</li>
                  <li>Relatively inexpensive and easy to administer</li>
                  <li>Results available quickly</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Blood Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>More accurate than urine testing</li>
                  <li>Detects recent use (hours to days)</li>
                  <li>Can measure exact levels in blood</li>
                  <li>More invasive and expensive</li>
                  <li>Used in medical emergencies</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Hair Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Detects use over longer periods (months)</li>
                  <li>Can show patterns of use over time</li>
                  <li>More expensive and time-consuming</li>
                  <li>Less common for cannabis</li>
                  <li>Used in forensic or legal contexts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              How Long Does Cannabis Stay in Your System?
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <p className="text-yellow-800">
                Detection times vary significantly depending on frequency of use, dosage, 
                individual metabolism, and other factors. Cannabis can be detected much 
                longer than other substances due to its fat-soluble nature.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Single Use</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Urine: 3-7 days</li>
                  <li>Blood: 1-2 days</li>
                  <li>Saliva: 1-3 days</li>
                  <li>Hair: Up to 90 days</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Chronic Use</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Urine: 30-90 days</li>
                  <li>Blood: 2-7 days</li>
                  <li>Saliva: 1-7 days</li>
                  <li>Hair: Up to 90 days</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Factors Affecting Detection Times
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Individual Factors</h3>
                <ul className="list-disc pl-4 space-y-1 text-red-700">
                  <li>Age and overall health</li>
                  <li>Body weight and metabolism</li>
                  <li>Liver and kidney function</li>
                  <li>Hydration levels</li>
                  <li>Physical activity levels</li>
                  <li>Body fat percentage</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Usage Factors</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Frequency of use</li>
                  <li>Dosage amount</li>
                  <li>Duration of use</li>
                  <li>Route of administration</li>
                  <li>THC content of product</li>
                  <li>Concurrent use of other substances</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              False Positive Results
            </h2>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Substances That May Cause False Positives</h3>
              <ul className="list-disc pl-4 space-y-2 text-orange-700">
                <li>Certain medications</li>
                <li>Some herbal supplements</li>
                <li>Over-the-counter medications</li>
                <li>Foods containing hemp seeds</li>
                <li>Secondhand smoke exposure</li>
                <li>CBD products with trace THC</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What to Do If You Test Positive
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Stay Calm and Honest</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Don't panic or become defensive</li>
                  <li>Be honest about your situation</li>
                  <li>Provide context if appropriate</li>
                  <li>Ask for clarification about the results</li>
                  <li>Request additional testing if needed</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Seek Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Contact your healthcare provider</li>
                  <li>Reach out to your support network</li>
                  <li>Consider counseling or therapy</li>
                  <li>Join support groups</li>
                  <li>Don't isolate yourself</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Drug Testing in Recovery Programs
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Purpose of Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-indigo-700">
                  <li>Monitor compliance with treatment</li>
                  <li>Ensure safety during recovery</li>
                  <li>Identify potential relapses early</li>
                  <li>Adjust treatment plans as needed</li>
                  <li>Provide accountability and support</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Your Rights</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Right to privacy and confidentiality</li>
                  <li>Right to understand the testing process</li>
                  <li>Right to ask questions</li>
                  <li>Right to request additional testing</li>
                  <li>Right to appeal results if appropriate</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Workplace Drug Testing
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Legal Considerations</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Understand your workplace policies</li>
                  <li>Know your rights under the law</li>
                  <li>Consider disclosing prescribed medications</li>
                  <li>Seek legal advice if needed</li>
                  <li>Document any relevant medical information</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Medical Documentation</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Keep records of prescribed medications</li>
                  <li>Obtain letters from healthcare providers</li>
                  <li>Document legitimate medical use</li>
                  <li>Understand workplace accommodation policies</li>
                  <li>Know when to disclose medical information</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Tips for Successful Recovery
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Staying Clean</h3>
              <ul className="list-disc pl-4 space-y-2 text-green-700">
                <li>Follow your treatment plan consistently</li>
                <li>Attend all scheduled appointments</li>
                <li>Participate actively in therapy and support groups</li>
                <li>Develop healthy coping strategies</li>
                <li>Build a strong support network</li>
                <li>Take care of your physical and mental health</li>
                <li>Celebrate your progress and milestones</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Drug testing is a tool to support your recovery, not a punishment. 
                If you test positive, it's an opportunity to reassess your treatment 
                plan and get additional support. Recovery is a journey with ups and 
                downs, and setbacks don't mean failure. Stay committed to your recovery 
                goals and don't hesitate to reach out for help when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
