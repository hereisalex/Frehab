'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function MATDrugTestingPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="mat-drug-testing" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            MAT Drug Testing
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Drug testing in Medication-Assisted Treatment (MAT) programs is used to 
              monitor compliance, ensure safety, and support recovery. Understanding 
              how these tests work can help you navigate your treatment successfully.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What is Medication-Assisted Treatment (MAT)?
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                MAT combines FDA-approved medications with counseling and behavioral 
                therapies to treat substance use disorders. Common medications include 
                methadone, buprenorphine, and naltrexone for opioid addiction.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Types of Drug Testing in MAT Programs
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Urine Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Most common type of drug test</li>
                  <li>Detects various substances and metabolites</li>
                  <li>Can detect specific medications</li>
                  <li>Relatively inexpensive and easy to administer</li>
                  <li>Results available quickly</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Blood Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>More accurate than urine testing</li>
                  <li>Detects recent use (hours to days)</li>
                  <li>Can measure exact medication levels</li>
                  <li>More invasive and expensive</li>
                  <li>Used for medication level monitoring</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Saliva Testing</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Non-invasive and easy to collect</li>
                  <li>Detects recent use (hours to days)</li>
                  <li>Less expensive than blood testing</li>
                  <li>Results available quickly</li>
                  <li>Used for on-site testing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What MAT Programs Test For
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Prescribed Medications</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Methadone levels</li>
                  <li>Buprenorphine levels</li>
                  <li>Naltrexone levels</li>
                  <li>Medication compliance</li>
                  <li>Appropriate dosing</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Illicit Substances</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>Opioids (heroin, fentanyl, etc.)</li>
                  <li>Stimulants (cocaine, methamphetamine)</li>
                  <li>Cannabis</li>
                  <li>Benzodiazepines</li>
                  <li>Alcohol</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Frequency of Testing
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Early Treatment</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>More frequent testing (weekly or bi-weekly)</li>
                  <li>Random testing to ensure compliance</li>
                  <li>Medication level monitoring</li>
                  <li>Safety and effectiveness assessment</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Stable Recovery</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Less frequent testing (monthly or quarterly)</li>
                  <li>Continued medication monitoring</li>
                  <li>Compliance verification</li>
                  <li>Relapse prevention</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Understanding Your Results
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Positive Results</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>May indicate medication compliance</li>
                  <li>Could show illicit substance use</li>
                  <li>May require treatment adjustment</li>
                  <li>Could trigger additional support</li>
                  <li>May affect program participation</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Negative Results</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>May indicate good compliance</li>
                  <li>Could show successful recovery</li>
                  <li>May lead to program advancement</li>
                  <li>Could result in reduced testing frequency</li>
                  <li>May indicate need for dose adjustment</li>
                </ul>
              </div>
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
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Work with Your Team</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Discuss results with your counselor</li>
                  <li>Review your treatment plan</li>
                  <li>Consider additional support</li>
                  <li>Adjust medications if needed</li>
                  <li>Set new recovery goals</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Your Rights in MAT Programs
            </h2>

            <div className="bg-pink-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Patient Rights</h3>
              <ul className="list-disc pl-4 space-y-2 text-pink-700">
                <li>Right to privacy and confidentiality</li>
                <li>Right to understand the testing process</li>
                <li>Right to ask questions about results</li>
                <li>Right to request additional testing</li>
                <li>Right to appeal results if appropriate</li>
                <li>Right to participate in treatment decisions</li>
                <li>Right to receive culturally competent care</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Tips for Success in MAT Programs
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Medication Compliance</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Take medications as prescribed</li>
                  <li>Don't skip doses</li>
                  <li>Keep regular appointments</li>
                  <li>Report any side effects</li>
                  <li>Don't adjust doses without approval</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Recovery Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Attend counseling sessions</li>
                  <li>Participate in support groups</li>
                  <li>Build a strong support network</li>
                  <li>Develop healthy coping strategies</li>
                  <li>Take care of your physical and mental health</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Common Concerns and Questions
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Will I Always Test Positive?</h3>
                <p className="text-slate-600">
                  If you're taking prescribed MAT medications, you may test positive for 
                  those medications, which is expected and appropriate. The goal is to 
                  test negative for illicit substances while maintaining therapeutic 
                  levels of your prescribed medication.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">What If I Relapse?</h3>
                <p className="text-slate-600">
                  Relapse is a common part of recovery, and MAT programs are designed to 
                  support you through setbacks. If you test positive for illicit substances, 
                  your team will work with you to adjust your treatment plan and provide 
                  additional support.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Drug testing in MAT programs is designed to support your recovery and 
                ensure your safety. It's not about punishment or judgment, but about 
                helping you stay on track with your treatment goals. Work closely with 
                your treatment team, be honest about your challenges, and don't hesitate 
                to ask questions or seek additional support when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
