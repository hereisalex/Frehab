import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function OpioidWithdrawalTimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Opioid Withdrawal Timeline & Management
          </h1>
          <p className="text-neutral-600">
            Understanding opioid withdrawal symptoms, timeline, and safe management strategies for different types of opioids.
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
              <h3 className="text-lg font-semibold text-red-800 mb-2">Medical Supervision Recommended</h3>
              <p className="text-red-700">
                <strong>Opioid withdrawal can be medically complicated.</strong> While not typically life-threatening like alcohol withdrawal, 
                medical supervision is strongly recommended for comfort, safety, and to prevent relapse. Seek medical help, 
                especially if you have underlying health conditions or are using high doses.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Opioid Withdrawal Varies by Drug Type</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Short-Acting Opioids</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Examples:</strong> Heroin, oxycodone (immediate-release), morphine, fentanyl (when not long-acting)
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• <strong>Onset:</strong> 6-12 hours after last use</li>
                <li>• <strong>Peak:</strong> 1-3 days</li>
                <li>• <strong>Duration:</strong> 4-10 days for acute symptoms</li>
                <li>• <strong>Intensity:</strong> More intense but shorter</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🐌 Long-Acting Opioids</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Examples:</strong> Methadone, extended-release oxycodone, fentanyl patches
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• <strong>Onset:</strong> 12-48 hours after last use</li>
                <li>• <strong>Peak:</strong> 3-6 days</li>
                <li>• <strong>Duration:</strong> 10-20 days for acute symptoms</li>
                <li>• <strong>Intensity:</strong> Less intense but much longer</li>
              </ul>
            </div>
          </div>

          <h2>Withdrawal Timeline: Day by Day</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  6-24h
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Early Withdrawal Begins</h3>
                  <p className="text-sm text-yellow-600">First signs appear</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Physical Symptoms</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Runny nose and teary eyes</li>
                    <li>• Muscle aches and pains</li>
                    <li>• Restless legs</li>
                    <li>• Yawning and fatigue</li>
                    <li>• Dilated pupils</li>
                    <li>• Goosebumps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Psychological Symptoms</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Anxiety and irritability</li>
                    <li>• Drug cravings begin</li>
                    <li>• Difficulty concentrating</li>
                    <li>• Mood changes</li>
                    <li>• Sleep problems start</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-4d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">Peak Withdrawal (Most Difficult)</h3>
                  <p className="text-sm text-red-600">Symptoms are at their worst</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Severe Physical Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Nausea, vomiting, diarrhea</li>
                    <li>• Severe muscle and bone pain</li>
                    <li>• Hot and cold flashes</li>
                    <li>• Excessive sweating</li>
                    <li>• Rapid heartbeat</li>
                    <li>• High blood pressure</li>
                    <li>• Severe insomnia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Intense Psychological Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Intense drug cravings</li>
                    <li>• Severe anxiety and panic</li>
                    <li>• Depression and hopelessness</li>
                    <li>• Extreme irritability</li>
                    <li>• Inability to experience pleasure</li>
                    <li>• Confusion and agitation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  5-10d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Acute Symptoms Improve</h3>
                  <p className="text-sm text-orange-600">Physical symptoms start resolving</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Improving Physical</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Nausea and vomiting subside</li>
                    <li>• Muscle pain decreases</li>
                    <li>• Sleep begins to normalize</li>
                    <li>• Appetite slowly returns</li>
                    <li>• Temperature regulation improves</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Ongoing Psychological</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Cravings still present but manageable</li>
                    <li>• Mood remains unstable</li>
                    <li>• Anxiety levels decrease</li>
                    <li>• Energy levels very low</li>
                    <li>• Motivation remains poor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  2-8w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">Post-Acute Withdrawal</h3>
                  <p className="text-sm text-green-600">Protracted symptoms continue</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Ongoing Challenges</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Periodic cravings</li>
                    <li>• Sleep disturbances</li>
                    <li>• Low energy and motivation</li>
                    <li>• Difficulty experiencing pleasure</li>
                    <li>• Anxiety in stressful situations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Gradual Recovery</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Physical strength returns</li>
                    <li>• Mood slowly stabilizes</li>
                    <li>• Concentration improves</li>
                    <li>• Interest in activities returns</li>
                    <li>• Social functioning improves</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Special Considerations by Opioid Type</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🔥 Fentanyl Withdrawal</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Faster onset:</strong> 2-4 hours after last use</li>
                <li>• <strong>More intense:</strong> Due to high potency</li>
                <li>• <strong>Shorter duration:</strong> 4-7 days for acute phase</li>
                <li>• <strong>Higher overdose risk:</strong> If relapse occurs during withdrawal</li>
                <li>• <strong>Medical supervision critical:</strong> Especially due to potency</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">💊 Prescription Opioids</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Varies by formulation:</strong> Immediate vs. extended release</li>
                <li>• <strong>Dose matters:</strong> Higher doses = more severe withdrawal</li>
                <li>• <strong>Duration of use:</strong> Longer use = more protracted symptoms</li>
                <li>• <strong>Often combined:</strong> With acetaminophen or aspirin</li>
                <li>• <strong>Medical tapering:</strong> May be possible with doctor supervision</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🏥 Methadone Withdrawal</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Very long duration:</strong> Up to 6 weeks for acute symptoms</li>
                <li>• <strong>Gradual onset:</strong> May take 2-4 days to begin</li>
                <li>• <strong>Less intense peak:</strong> But much more prolonged</li>
                <li>• <strong>Requires slow taper:</strong> 10-20% reduction every 1-2 weeks</li>
                <li>• <strong>Medical supervision essential:</strong> Due to long half-life</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🩹 Buprenorphine Withdrawal</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Delayed onset:</strong> 12-72 hours after last dose</li>
                <li>• <strong>Moderate intensity:</strong> Less severe than full opioids</li>
                <li>• <strong>Extended duration:</strong> 2-4 weeks</li>
                <li>• <strong>Ceiling effect:</strong> Withdrawal symptoms plateau</li>
                <li>• <strong>Often manageable:</strong> Compared to other opioids</li>
              </ul>
            </div>
          </div>

          <h2>Managing Withdrawal Symptoms</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-4">Medical Comfort Medications</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Common Medications</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• <strong>Clonidine:</strong> Blood pressure, sweating, anxiety</li>
                  <li>• <strong>Loperamide:</strong> Diarrhea (small doses only)</li>
                  <li>• <strong>Ondansetron:</strong> Nausea and vomiting</li>
                  <li>• <strong>Tizanidine:</strong> Muscle spasms and pain</li>
                  <li>• <strong>Gabapentin:</strong> Anxiety and restless legs</li>
                  <li>• <strong>Sleep aids:</strong> Temporary for severe insomnia</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Safety Notes</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• All medications should be prescribed by a doctor</li>
                  <li>• Don't use high-dose loperamide (dangerous)</li>
                  <li>• Avoid benzodiazepines if possible (addiction risk)</li>
                  <li>• Monitor blood pressure with clonidine</li>
                  <li>• Some medications can be used short-term only</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Non-Medical Comfort Measures</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🛁 Physical Comfort</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Hot baths:</strong> Muscle aches and restlessness</li>
                <li>• <strong>Heating pads:</strong> For specific pain areas</li>
                <li>• <strong>Massage:</strong> Professional or self-massage</li>
                <li>• <strong>Gentle stretching:</strong> Yoga or simple movements</li>
                <li>• <strong>Hydration:</strong> Water, electrolyte drinks</li>
                <li>• <strong>Easy foods:</strong> Bananas, rice, toast, broth</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🧘 Mental & Emotional</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Breathing exercises:</strong> Deep, slow breathing</li>
                <li>• <strong>Distraction:</strong> Movies, music, audiobooks</li>
                <li>• <strong>Support calls:</strong> Trusted friends or family</li>
                <li>• <strong>Recovery meetings:</strong> Online or in-person</li>
                <li>• <strong>Journaling:</strong> Track progress and feelings</li>
                <li>• <strong>Meditation apps:</strong> Guided relaxation</li>
              </ul>
            </div>
          </div>

          <h2>When to Seek Medical Help</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">Get Medical Help If You Experience:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Emergency Symptoms</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Severe dehydration (unable to keep fluids down)</li>
                  <li>• High fever (over 101°F)</li>
                  <li>• Severe depression or suicidal thoughts</li>
                  <li>• Signs of severe dehydration</li>
                  <li>• Chest pain or rapid heart rate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Consider Medical Support</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• High-dose or long-term opioid use</li>
                  <li>• Multiple previous withdrawal attempts</li>
                  <li>• Underlying health conditions</li>
                  <li>• No support system at home</li>
                  <li>• History of complications</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Types of Medical Detox</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🏥 Inpatient Medical Detox (3-7 days)</h4>
              <p className="text-sm text-green-700 mb-2">
                <strong>Best for:</strong> High-dose users, multiple substances, medical complications
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• 24/7 medical supervision and comfort medications</li>
                <li>• Safe, controlled environment</li>
                <li>• Immediate transition to treatment programs</li>
                <li>• Insurance often covers medical necessity</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🏠 Outpatient Medical Management</h4>
              <p className="text-sm text-blue-700 mb-2">
                <strong>Best for:</strong> Lower doses, good support system, motivated individuals
              </p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Daily check-ins with medical provider</li>
                <li>• Prescribed comfort medications</li>
                <li>• Remain at home with support</li>
                <li>• Less expensive than inpatient</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">💊 Medication-Assisted Detox</h4>
              <p className="text-sm text-yellow-700 mb-2">
                <strong>Best for:</strong> Transition to MAT, reduce withdrawal severity
              </p>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• Buprenorphine induction during withdrawal</li>
                <li>• Significant reduction in withdrawal symptoms</li>
                <li>• Transition to ongoing MAT treatment</li>
                <li>• Higher success rates for long-term recovery</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Hope in Withdrawal</h3>
            <p className="text-green-700 mb-3">
              Opioid withdrawal is temporary and manageable with proper support:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• Acute symptoms typically last 7-10 days maximum</li>
              <li>• Medical support makes withdrawal much more comfortable</li>
              <li>• Many people successfully get through withdrawal and stay in recovery</li>
              <li>• Each hour you get through is progress toward freedom</li>
              <li>• Recovery programs have high success rates when started after detox</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> You don't have to go through withdrawal alone. Medical support, 
              comfort medications, and proper planning can make this process much safer and more manageable. 
              The temporary discomfort of withdrawal leads to freedom from opioid dependence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
