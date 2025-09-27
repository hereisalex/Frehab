import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function FindingBenzoWiseDoctorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Finding Benzodiazepine-Wise Medical Providers
          </h1>
          <p className="text-neutral-600">
            How to find healthcare providers who understand benzodiazepine dependence, proper tapering protocols, and the unique challenges of benzo withdrawal.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer id="benzo-doctors" />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Many Doctors Lack Benzodiazepine Expertise</h3>
              <p className="text-yellow-700">
                <strong>Most healthcare providers have limited training in benzodiazepine withdrawal.</strong> 
                Finding a &quot;benzo-wise&quot; doctor who understands proper tapering protocols and withdrawal 
                management is crucial for safe discontinuation. Don&apos;t assume your doctor knows how to help with benzo withdrawal.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>What Makes a Doctor &quot;Benzo-Wise&quot;?</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-green-800 mb-4">✅ Characteristics of Benzo-Wise Providers</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Medical Knowledge</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Understands GABA receptor physiology</li>
                  <li>• Knows the difference between dependence and addiction</li>
                  <li>• Familiar with the Ashton Manual protocols</li>
                  <li>• Recognizes protracted withdrawal syndrome</li>
                  <li>• Understands seizure and safety risks</li>
                  <li>• Knows benzodiazepine equivalency doses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Approach & Attitude</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Takes your concerns seriously</li>
                  <li>• Doesn&apos;t judge or blame you</li>
                  <li>• Supports slow, patient-led tapering</li>
                  <li>• Monitors your symptoms closely</li>
                  <li>• Willing to hold or slow taper when needed</li>
                  <li>• Provides emotional support and validation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Red Flags: Doctors to Avoid</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-red-800 mb-4">❌ Warning Signs of Benzo-Ignorant Providers</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Dangerous Statements</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• &quot;Just stop taking them - benzos aren&apos;t addictive&quot;</li>
                  <li>• &quot;You can&apos;t be dependent if you took them as prescribed&quot;</li>
                  <li>• &quot;Benzo withdrawal isn&apos;t dangerous&quot;</li>
                  <li>• &quot;You&apos;re just anxious about stopping&quot;</li>
                  <li>• &quot;Withdrawal symptoms only last a few days&quot;</li>
                  <li>• &quot;We need to get you off these quickly&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Harmful Practices</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Abrupt discontinuation or rapid tapers</li>
                  <li>• Refusing to provide tapering support</li>
                  <li>• Dismissing withdrawal symptoms as &quot;anxiety&quot;</li>
                  <li>• Prescribing antidepressants instead of proper taper</li>
                  <li>• Threatening to cut off prescriptions</li>
                  <li>• Labeling you as &quot;drug-seeking&quot;</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Types of Benzo-Wise Healthcare Providers</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🏥 Addiction Medicine Specialists</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-1">Why They&apos;re Often Good</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Specialized training in substance dependence</li>
                    <li>• Understand withdrawal syndromes</li>
                    <li>• Experience with tapering protocols</li>
                    <li>• Non-judgmental approach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-1">Potential Limitations</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• May focus on illegal drug addiction</li>
                    <li>• Might not understand prescription dependence</li>
                    <li>• Could push for rapid detox</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🧠 Psychiatrists</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-1">Why They Can Be Good</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Understand psychotropic medications</li>
                    <li>• Experience with gradual discontinuation</li>
                    <li>• Can manage anxiety and depression</li>
                    <li>• May have seen benzo withdrawal before</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-1">Potential Issues</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• May want to add more medications</li>
                    <li>• Could minimize withdrawal symptoms</li>
                    <li>• Might not know proper tapering speeds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">👨‍⚕️ Primary Care Physicians</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Advantages</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Know your overall health history</li>
                    <li>• Easier to access and schedule</li>
                    <li>• Can provide ongoing monitoring</li>
                    <li>• May be willing to learn</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Common Problems</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Limited addiction medicine training</li>
                    <li>• May not understand withdrawal severity</li>
                    <li>• Could refer you elsewhere</li>
                    <li>• Might lack time for complex cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🏥 Neurologists</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-1">Why They Might Help</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Understand seizure risks</li>
                    <li>• Experience with GABA medications</li>
                    <li>• May understand nervous system effects</li>
                    <li>• Often methodical in approach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-1">Potential Drawbacks</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• May focus only on seizure prevention</li>
                    <li>• Might not understand addiction aspects</li>
                    <li>• Could lack withdrawal experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>How to Find Benzo-Wise Doctors</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">🔍 Search Strategies</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Online Resources</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Benzo.org.uk:</strong> Provider directory and resources</li>
                    <li>• <strong>BenzoBuddies:</strong> Community recommendations</li>
                    <li>• <strong>Surviving Antidepressants:</strong> Withdrawal-wise doctors</li>
                    <li>• <strong>Psychology Today:</strong> Filter for addiction specialists</li>
                    <li>• <strong>SAMHSA Treatment Locator:</strong> Addiction medicine doctors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Professional Networks</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• American Society of Addiction Medicine (ASAM)</li>
                    <li>• American Academy of Addiction Psychiatry</li>
                    <li>• International Association of Healthcare Practitioners</li>
                    <li>• Local addiction medicine societies</li>
                    <li>• Hospital addiction medicine departments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-purple-800 mb-3">💬 Getting Referrals</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Who to Ask</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Other benzo withdrawal survivors</li>
                    <li>• Support group members</li>
                    <li>• Addiction counselors or therapists</li>
                    <li>• Pharmacists (especially compounding pharmacists)</li>
                    <li>• Addiction treatment centers</li>
                    <li>• Medical social workers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">What to Ask About</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Doctor&apos;s approach to tapering speed</li>
                    <li>• Experience with protracted withdrawal</li>
                    <li>• Willingness to use Ashton Manual</li>
                    <li>• Attitude toward patient-led tapering</li>
                    <li>• How they handle setbacks or holds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Questions to Ask Potential Doctors</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-4">📋 Interview Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Basic Knowledge Assessment</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• &quot;Are you familiar with the Ashton Manual for benzodiazepine withdrawal?&quot;</li>
                  <li>• &quot;Do you understand the difference between dependence and addiction?&quot;</li>
                  <li>• &quot;What do you know about protracted withdrawal syndrome?&quot;</li>
                  <li>• &quot;How do you typically approach benzodiazepine tapering?&quot;</li>
                  <li>• &quot;What timeline do you usually recommend for tapering?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Approach and Philosophy</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• &quot;Are you willing to support a slow, patient-directed taper?&quot;</li>
                  <li>• &quot;What would you do if I needed to slow down or hold the taper?&quot;</li>
                  <li>• &quot;How do you view people who became dependent on prescribed medications?&quot;</li>
                  <li>• &quot;Do you have experience with liquid compounding for micro-tapers?&quot;</li>
                  <li>• &quot;How often would you want to see me during tapering?&quot;</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded">
              <p className="text-yellow-800 text-sm">
                <strong>Red Flag Responses:</strong> If they seem impatient, dismissive, or suggest rapid withdrawal, 
                look elsewhere. A good doctor will be supportive and knowledgeable about withdrawal challenges.
              </p>
            </div>
          </div>

          <h2>Preparing for Your First Appointment</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">📝 Documents to Bring</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Complete medication history:</strong> All benzos taken, doses, duration</li>
                <li>• <strong>Previous tapering attempts:</strong> What worked, what didn&apos;t</li>
                <li>• <strong>Current symptoms:</strong> Detailed list of withdrawal effects</li>
                <li>• <strong>Medical records:</strong> From previous doctors</li>
                <li>• <strong>The Ashton Manual:</strong> Key pages highlighted</li>
                <li>• <strong>Support person:</strong> Bring someone to advocate for you</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🎯 Your Goals</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Be clear about your needs:</strong> Safe, slow tapering support</li>
                <li>• <strong>Explain your situation:</strong> How dependence developed</li>
                <li>• <strong>Discuss timeline:</strong> No rush, willing to take time needed</li>
                <li>• <strong>Ask about monitoring:</strong> Regular check-ins and support</li>
                <li>• <strong>Discuss emergencies:</strong> What to do if problems arise</li>
                <li>• <strong>Get commitment:</strong> Will they support you through the process?</li>
              </ul>
            </div>
          </div>

          <h2>What to Do If You Can&apos;t Find a Benzo-Wise Doctor</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 mb-3">🎓 Educating Your Current Doctor</h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>• <strong>Provide educational materials:</strong> Print relevant Ashton Manual sections</li>
                <li>• <strong>Share medical literature:</strong> Research on benzo withdrawal</li>
                <li>• <strong>Be patient and persistent:</strong> Some doctors are willing to learn</li>
                <li>• <strong>Suggest consultation:</strong> With addiction medicine specialist</li>
                <li>• <strong>Offer to do research:</strong> Present options and protocols</li>
                <li>• <strong>Emphasize safety:</strong> Need for medical supervision</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">🌐 Telemedicine Options</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• <strong>Specialized telehealth providers:</strong> Some doctors offer remote benzo withdrawal support</li>
                <li>• <strong>Out-of-state doctors:</strong> Some states allow telehealth across borders</li>
                <li>• <strong>Consultation services:</strong> Doctors who advise your local provider</li>
                <li>• <strong>Online platforms:</strong> Some addiction medicine doctors work remotely</li>
                <li>• <strong>International options:</strong> Some overseas doctors provide guidance</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-100 rounded">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Verify that telemedicine providers are licensed in your state 
                  and can legally prescribe medications for you.
                </p>
              </div>
            </div>
          </div>

          <h2>Building a Support Team</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-800 mb-4">👥 Your Withdrawal Support Team</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Medical Team</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Primary prescriber:</strong> Manages tapering schedule</li>
                  <li>• <strong>Compounding pharmacist:</strong> For liquid tapers</li>
                  <li>• <strong>Therapist/counselor:</strong> Emotional support</li>
                  <li>• <strong>Emergency contact:</strong> Doctor for crisis situations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Support Network</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Family advocate:</strong> Someone to speak for you</li>
                  <li>• <strong>Support group:</strong> Others going through withdrawal</li>
                  <li>• <strong>Online community:</strong> 24/7 peer support</li>
                  <li>• <strong>Practical help:</strong> For daily tasks during difficult periods</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Important Resources</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📚 Educational Resources</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>The Ashton Manual:</strong> benzo.org.uk - Gold standard withdrawal guide</li>
                <li>• <strong>Benzo.org.uk:</strong> Comprehensive withdrawal support and doctor lists</li>
                <li>• <strong>BenzoBuddies:</strong> Peer support community with doctor recommendations</li>
                <li>• <strong>Benzodiazepine Information Coalition:</strong> Medical information and advocacy</li>
                <li>• <strong>Alliance for Benzodiazepine Best Practices:</strong> Professional medical resources</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🆘 Crisis Resources</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Crisis Hotline:</strong> 988 (Suicide & Crisis Lifeline)</li>
                <li>• <strong>Emergency:</strong> 911 for seizures or medical emergencies</li>
                <li>• <strong>Poison Control:</strong> 1-800-222-1222 for medication questions</li>
                <li>• <strong>SAMHSA Helpline:</strong> 1-800-662-4357 for treatment referrals</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Finding Hope</h3>
            <p className="text-blue-700 mb-3">
              Finding a benzo-wise doctor can be challenging, but they do exist:
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• More doctors are becoming educated about benzo withdrawal</li>
              <li>• Patient advocacy is raising awareness in the medical community</li>
              <li>• Telemedicine is expanding access to specialized care</li>
              <li>• Support communities can connect you with knowledgeable providers</li>
              <li>• Even partial support is better than going it alone</li>
              <li>• Many people have successfully found appropriate medical care</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> You deserve compassionate, knowledgeable medical care for benzodiazepine 
              withdrawal. Don&apos;t settle for doctors who dismiss your concerns or push unsafe withdrawal methods. 
              Keep looking until you find appropriate support - your safety and recovery depend on it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
