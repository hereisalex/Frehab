import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function FindingMATProvidersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Finding Medication-Assisted Treatment (MAT) Providers
          </h1>
          <p className="text-neutral-600">
            Complete guide to finding qualified MAT providers, understanding treatment options, and accessing life-saving opioid addiction treatment.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">MAT Saves Lives</h3>
              <p className="text-green-700">
                <strong>Medication-Assisted Treatment is the gold standard for opioid addiction.</strong> 
                Research shows MAT reduces overdose deaths by 50% or more and significantly improves long-term recovery outcomes. 
                MAT is not "trading one addiction for another" - it's medical treatment for a medical condition.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Types of MAT Providers</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🏥 Methadone Clinics (OTPs)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Opioid Treatment Programs - federally regulated clinics
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Daily dosing (initially)</li>
                <li>• Comprehensive services required</li>
                <li>• Counseling and case management</li>
                <li>• Earn take-home privileges over time</li>
                <li>• Open 6-7 days per week</li>
                <li>• Cash payment often required</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-50 rounded">
                <p className="text-xs text-blue-700">
                  <strong>Best for:</strong> Severe addiction, need structure, multiple failed treatment attempts
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">👨‍⚕️ Buprenorphine Providers</h3>
              <p className="text-sm text-gray-600 mb-3">
                Office-based treatment with qualified physicians
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Take medication at home</li>
                <li>• Regular office visits</li>
                <li>• More flexible scheduling</li>
                <li>• Often covered by insurance</li>
                <li>• Integration with primary care</li>
                <li>• Less daily time commitment</li>
              </ul>
              <div className="mt-3 p-3 bg-green-50 rounded">
                <p className="text-xs text-green-700">
                  <strong>Best for:</strong> Working individuals, family responsibilities, less severe addiction
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">💉 Naltrexone Providers</h3>
              <p className="text-sm text-gray-600 mb-3">
                Monthly injection (Vivitrol) or daily pills
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Blocks opioid effects completely</li>
                <li>• Monthly injection option</li>
                <li>• No potential for misuse</li>
                <li>• Requires complete detox first</li>
                <li>• Often provided by psychiatrists</li>
                <li>• Good insurance coverage</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-50 rounded">
                <p className="text-xs text-purple-700">
                  <strong>Best for:</strong> Motivated individuals, completed detox, want complete blocking
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🏢 Addiction Treatment Centers</h3>
              <p className="text-sm text-gray-600 mb-3">
                Comprehensive programs with MAT component
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Multiple treatment modalities</li>
                <li>• Group and individual therapy</li>
                <li>• Peer support programs</li>
                <li>• Family involvement</li>
                <li>• Outpatient or intensive programs</li>
                <li>• Often insurance-covered</li>
              </ul>
              <div className="mt-3 p-3 bg-orange-50 rounded">
                <p className="text-xs text-orange-700">
                  <strong>Best for:</strong> Need comprehensive support, multiple substance use, mental health issues
                </p>
              </div>
            </div>
          </div>

          <h2>How to Find MAT Providers</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-4">🔍 Online Search Tools</h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">SAMHSA Treatment Locator</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    <strong>Website:</strong> findtreatment.samhsa.gov
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Search by location and treatment type</li>
                    <li>• Filter for MAT services specifically</li>
                    <li>• Shows insurance accepted</li>
                    <li>• Phone numbers and addresses</li>
                    <li>• Most comprehensive database</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Buprenorphine Provider Locator</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    <strong>Website:</strong> samhsa.gov/bupe/treatment-provider-locator
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Specific to buprenorphine providers</li>
                    <li>• Shows DATA 2000 waivered physicians</li>
                    <li>• Patient capacity information</li>
                    <li>• Contact information provided</li>
                    <li>• Updated regularly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Methadone Clinic Directory</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    <strong>Search:</strong> "methadone clinic near me" or OTP directory
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Licensed Opioid Treatment Programs</li>
                    <li>• Operating hours and services</li>
                    <li>• Admission requirements</li>
                    <li>• Payment options</li>
                    <li>• Wait list information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Insurance Provider Directories</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    <strong>Check:</strong> Your insurance company's website
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• In-network providers only</li>
                    <li>• Reduced out-of-pocket costs</li>
                    <li>• Specialty addiction treatment</li>
                    <li>• May require prior authorization</li>
                    <li>• Call member services for help</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Questions to Ask Potential Providers</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">💊 About Medications</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• What MAT medications do you prescribe?</li>
                <li>• How do you determine the right medication for me?</li>
                <li>• What's your experience with my preferred medication?</li>
                <li>• How often will I need to come for appointments?</li>
                <li>• What happens if I need to adjust my dose?</li>
                <li>• Do you help with side effect management?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🏥 About Services</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• What counseling services do you provide?</li>
                <li>• Do you offer group therapy sessions?</li>
                <li>• How do you handle crisis situations?</li>
                <li>• What are your operating hours?</li>
                <li>• Do you provide case management services?</li>
                <li>• What additional support services are available?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">💰 About Costs & Insurance</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• Do you accept my insurance?</li>
                <li>• What are the out-of-pocket costs?</li>
                <li>• Do you offer payment plans or sliding scale?</li>
                <li>• Are there additional fees for services?</li>
                <li>• How much do the medications cost?</li>
                <li>• Do you help with prior authorization?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">📅 About Getting Started</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• How soon can I get an appointment?</li>
                <li>• What do I need to bring to my first visit?</li>
                <li>• Do you have a waiting list?</li>
                <li>• What's your admission process?</li>
                <li>• Do you require referrals?</li>
                <li>• Can you start medication at the first visit?</li>
              </ul>
            </div>
          </div>

          <h2>Preparing for Your First MAT Appointment</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-4">📋 What to Bring</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Required Documents</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Photo identification (driver's license, state ID)</li>
                  <li>• Insurance cards (all insurance you have)</li>
                  <li>• Social Security card or number</li>
                  <li>• Proof of income (if applicable for sliding scale)</li>
                  <li>• Any previous medical records related to addiction</li>
                  <li>• List of current medications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Helpful Information</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Detailed history of opioid use</li>
                  <li>• Previous treatment attempts</li>
                  <li>• Mental health history</li>
                  <li>• Current living situation</li>
                  <li>• Work or school schedule</li>
                  <li>• Support system information</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Understanding Different MAT Medications</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🟢 Buprenorphine (Suboxone, Subutex)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">How It Works</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Partial opioid agonist</li>
                    <li>• Reduces cravings and withdrawal</li>
                    <li>• Ceiling effect prevents overdose</li>
                    <li>• Blocks effects of other opioids</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Practical Considerations</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Take at home daily</li>
                    <li>• Office visits weekly to monthly</li>
                    <li>• Good for working individuals</li>
                    <li>• Often covered by insurance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🔵 Methadone</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">How It Works</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Full opioid agonist</li>
                    <li>• Long-acting (24+ hours)</li>
                    <li>• Eliminates withdrawal and cravings</li>
                    <li>• Stable blood levels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Practical Considerations</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Daily clinic visits initially</li>
                    <li>• Earn take-home privileges</li>
                    <li>• Comprehensive program required</li>
                    <li>• Often cash payment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🟣 Naltrexone (Vivitrol)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">How It Works</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Opioid antagonist (blocker)</li>
                    <li>• Prevents opioid effects completely</li>
                    <li>• Monthly injection or daily pill</li>
                    <li>• No potential for misuse</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Practical Considerations</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Must be fully detoxed first</li>
                    <li>• Monthly medical appointments</li>
                    <li>• Good insurance coverage</li>
                    <li>• Requires high motivation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Overcoming Barriers to MAT Access</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">💰 Financial Barriers</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold text-red-700 mb-1">Problems</h5>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• No insurance coverage</li>
                    <li>• High out-of-pocket costs</li>
                    <li>• Prior authorization delays</li>
                    <li>• Limited in-network providers</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-1">Solutions</h5>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Apply for Medicaid or marketplace insurance</li>
                    <li>• Look for sliding scale fee programs</li>
                    <li>• Patient assistance programs from manufacturers</li>
                    <li>• Community health centers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">📍 Geographic Barriers</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold text-orange-700 mb-1">Problems</h5>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• No providers in rural areas</li>
                    <li>• Long travel distances</li>
                    <li>• Limited transportation</li>
                    <li>• Long wait lists</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-700 mb-1">Solutions</h5>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Telemedicine MAT services</li>
                    <li>• Mobile MAT programs</li>
                    <li>• Primary care MAT integration</li>
                    <li>• Transportation assistance programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">🚫 Stigma Barriers</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold text-yellow-700 mb-1">Problems</h5>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Family/friend opposition to MAT</li>
                    <li>• Provider bias against MAT</li>
                    <li>• Self-stigma about needing medication</li>
                    <li>• Recovery community judgment</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-700 mb-1">Solutions</h5>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Education about MAT science</li>
                    <li>• Find MAT-friendly providers</li>
                    <li>• Connect with MAT-positive support groups</li>
                    <li>• Focus on evidence-based treatment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Emergency Resources</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">🚨 Need Help Now?</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Crisis Resources</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• <strong>SAMHSA Helpline:</strong> 1-800-662-4357</li>
                  <li>• <strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                  <li>• <strong>Suicide Prevention:</strong> 988</li>
                  <li>• <strong>Overdose Emergency:</strong> Call 911</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Quick Access Options</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Emergency department for medical detox</li>
                  <li>• Urgent care for buprenorphine induction</li>
                  <li>• Mobile crisis teams</li>
                  <li>• Same-day access clinics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">You Deserve Treatment</h3>
            <p className="text-green-700 mb-3">
              Medication-Assisted Treatment is evidence-based, life-saving healthcare:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• MAT reduces overdose deaths by 50% or more</li>
              <li>• People on MAT have higher employment and housing stability</li>
              <li>• MAT allows people to rebuild their lives while managing addiction</li>
              <li>• Long-term MAT is safe and effective</li>
              <li>• You don't have to suffer through withdrawal alone</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Finding the right MAT provider may take some time, but it's worth the effort. 
              MAT saves lives and helps people recover. You deserve compassionate, evidence-based treatment for your addiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
