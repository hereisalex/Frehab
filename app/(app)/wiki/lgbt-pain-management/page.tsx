'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LBTPainManagementPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-pain-management" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ Pain Management Alternatives
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Chronic pain is common in LGBT+ communities due to minority stress, discrimination, 
              and healthcare disparities. Finding non-opioid pain management strategies that 
              consider LGBT+ specific health needs is crucial for recovery and well-being.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Understanding LGBT+ Pain Experiences
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                LGBT+ individuals often experience higher rates of chronic pain due to minority 
                stress, discrimination, trauma, and healthcare disparities. Understanding these 
                factors is crucial for effective pain management.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Non-Opioid Pain Management Strategies
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Physical Therapies</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Physical therapy and rehabilitation</li>
                  <li>Massage therapy and bodywork</li>
                  <li>Chiropractic care</li>
                  <li>Acupuncture and acupressure</li>
                  <li>Yoga and gentle stretching</li>
                  <li>Swimming and water therapy</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Mind-Body Approaches</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Meditation and mindfulness</li>
                  <li>Breathing exercises</li>
                  <li>Progressive muscle relaxation</li>
                  <li>Guided imagery</li>
                  <li>Biofeedback</li>
                  <li>Cognitive-behavioral therapy</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Alternative Therapies</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Herbal remedies and supplements</li>
                  <li>Essential oils and aromatherapy</li>
                  <li>Heat and cold therapy</li>
                  <li>Transcutaneous electrical nerve stimulation (TENS)</li>
                  <li>Magnetic therapy</li>
                  <li>Art and music therapy</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              LGBT+ Specific Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Healthcare Discrimination</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Finding LGBT+ affirming providers</li>
                  <li>Advocating for appropriate care</li>
                  <li>Understanding your rights</li>
                  <li>Documenting discrimination</li>
                  <li>Seeking second opinions</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Minority Stress</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>Stress management techniques</li>
                  <li>Trauma-informed care</li>
                  <li>Support group participation</li>
                  <li>Therapy and counseling</li>
                  <li>Community connection</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building a Comprehensive Pain Management Plan
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Assessment and Planning</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Comprehensive pain assessment</li>
                  <li>Identification of contributing factors</li>
                  <li>Development of treatment goals</li>
                  <li>Creation of a multidisciplinary team</li>
                  <li>Regular evaluation and adjustment</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Team Approach</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Primary care physician</li>
                  <li>Pain management specialist</li>
                  <li>Physical therapist</li>
                  <li>Mental health counselor</li>
                  <li>Alternative medicine practitioner</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Lifestyle Modifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Physical Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Regular exercise and movement</li>
                  <li>Healthy eating habits</li>
                  <li>Adequate sleep and rest</li>
                  <li>Stress reduction techniques</li>
                  <li>Smoking cessation</li>
                  <li>Weight management</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Mental Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Stress management</li>
                  <li>Emotional regulation</li>
                  <li>Social support</li>
                  <li>Meaningful activities</li>
                  <li>Spiritual or religious practices</li>
                  <li>Creative expression</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Medication Alternatives
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Non-Opioid Medications</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Nonsteroidal anti-inflammatory drugs (NSAIDs)</li>
                  <li>Acetaminophen</li>
                  <li>Antidepressants for neuropathic pain</li>
                  <li>Anticonvulsants for nerve pain</li>
                  <li>Muscle relaxants</li>
                  <li>Topical pain relievers</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Considerations for LGBT+ Individuals</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Hormone therapy interactions</li>
                  <li>HIV medication interactions</li>
                  <li>Mental health medication considerations</li>
                  <li>Substance use history</li>
                  <li>Access to healthcare</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Finding Affirming Providers
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">What to Look For</h3>
              <ul className="list-disc pl-4 space-y-2 text-yellow-700">
                <li>Understanding of LGBT+ health disparities</li>
                <li>Knowledge of minority stress and trauma</li>
                <li>Experience with LGBT+ patients</li>
                <li>Training in cultural competency</li>
                <li>Respect for chosen names and pronouns</li>
                <li>Inclusive office environment</li>
                <li>Non-judgmental approach to care</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Self-Advocacy and Empowerment
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Know Your Rights</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Right to respectful, non-discriminatory care</li>
                  <li>Right to informed consent</li>
                  <li>Right to second opinions</li>
                  <li>Right to pain management</li>
                  <li>Right to file complaints</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Communication Strategies</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Be clear about your pain and needs</li>
                  <li>Ask questions about your treatment</li>
                  <li>Express concerns about discrimination</li>
                  <li>Request accommodations when needed</li>
                  <li>Document your experiences</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Chronic pain is real and valid, and you deserve effective, compassionate care. 
                Don't let discrimination or lack of understanding prevent you from getting the 
                help you need. There are providers and treatments available that can help you 
                manage your pain while respecting your identity and supporting your recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
