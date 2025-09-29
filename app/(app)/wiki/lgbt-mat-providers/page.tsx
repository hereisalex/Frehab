'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LGBTMATProvidersPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-mat-providers" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Finding LGBT+ Affirming MAT Providers
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Medication-Assisted Treatment (MAT) can be life-saving for opioid addiction, but 
              finding providers who are knowledgeable about LGBT+ experiences and provide 
              affirming care is crucial for successful treatment.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What Makes a Provider LGBT+ Affirming?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Clinical Competence</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Understanding of LGBT+ health disparities</li>
                  <li>Knowledge of minority stress and trauma</li>
                  <li>Experience with LGBT+ patients</li>
                  <li>Training in LGBT+ cultural competency</li>
                  <li>Understanding of intersectional identities</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Affirming Practices</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Respect for chosen names and pronouns</li>
                  <li>Inclusive intake forms and paperwork</li>
                  <li>LGBT+ friendly office environment</li>
                  <li>Staff training in LGBT+ issues</li>
                  <li>Non-judgmental approach to care</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              How to Find Affirming Providers
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Online Directories</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Psychology Today therapist finder</li>
                  <li>SAMHSA treatment locator</li>
                  <li>GLMA provider directory</li>
                  <li>Local LGBT+ community center websites</li>
                  <li>LGBT+ health organization directories</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Community Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>LGBT+ community centers</li>
                  <li>LGBT+ health clinics</li>
                  <li>Peer support groups</li>
                  <li>LGBT+ recovery meetings</li>
                  <li>Word-of-mouth recommendations</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Professional Organizations</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>GLMA (Gay and Lesbian Medical Association)</li>
                  <li>APA Division 44 (Society for the Psychology of Sexual Orientation and Gender Diversity)</li>
                  <li>Local LGBT+ professional networks</li>
                  <li>Addiction medicine professional groups</li>
                  <li>Mental health professional associations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Questions to Ask Potential Providers
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Initial Screening Questions</h3>
              <ul className="list-disc pl-4 space-y-2 text-yellow-700">
                <li>"Do you have experience working with LGBT+ patients?"</li>
                <li>"Have you received training in LGBT+ cultural competency?"</li>
                <li>"How do you ensure your practice is welcoming to LGBT+ patients?"</li>
                <li>"Do you understand the unique challenges LGBT+ people face in addiction recovery?"</li>
                <li>"How do you handle issues related to minority stress and trauma?"</li>
                <li>"Are you familiar with LGBT+ specific health concerns and medications?"</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Red Flags to Watch For
            </h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Warning Signs</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>Provider suggests your sexual orientation or gender identity is the problem</li>
                <li>Lack of knowledge about LGBT+ health issues</li>
                <li>Inappropriate questions about your identity</li>
                <li>Pressure to change or "fix" your identity</li>
                <li>Dismissive attitude toward LGBT+ specific concerns</li>
                <li>Staff who are not trained in LGBT+ issues</li>
                <li>Office environment that feels unwelcoming</li>
                <li>Religious or conversion therapy approaches</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Special Considerations for MAT
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Medication Interactions</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Hormone therapy interactions</li>
                  <li>HIV medication interactions</li>
                  <li>Mental health medication considerations</li>
                  <li>Preventive care and screening needs</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">LGBT+ Specific Needs</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Understanding of chemsex and party drug use</li>
                  <li>Knowledge of LGBT+ social dynamics</li>
                  <li>Awareness of discrimination in healthcare</li>
                  <li>Support for chosen family involvement</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Your Support Team
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Medical Team</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>LGBT+ affirming MAT provider</li>
                  <li>Primary care physician</li>
                  <li>Mental health counselor</li>
                  <li>Specialist providers as needed</li>
                  <li>Pharmacy with LGBT+ friendly staff</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Recovery Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>LGBT+ recovery meetings</li>
                  <li>Sponsor or recovery coach</li>
                  <li>Peer support groups</li>
                  <li>Recovery community connections</li>
                  <li>Online recovery communities</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Advocating for Yourself
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Know Your Rights</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Right to respectful, non-discriminatory care</li>
                  <li>Right to privacy and confidentiality</li>
                  <li>Right to informed consent</li>
                  <li>Right to second opinions</li>
                  <li>Right to file complaints</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Communication Strategies</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Be clear about your needs and concerns</li>
                  <li>Ask questions about your treatment</li>
                  <li>Express concerns about discrimination</li>
                  <li>Request accommodations when needed</li>
                  <li>Document any problematic interactions</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                You deserve healthcare that is respectful, competent, and affirming of your identity. 
                Don't settle for providers who don't understand or respect your needs. Your recovery 
                and well-being are worth advocating for, and there are providers out there who will 
                support you in your journey to health and sobriety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
