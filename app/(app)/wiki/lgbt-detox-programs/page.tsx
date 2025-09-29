'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LGBTDetoxProgramsPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-detox-programs" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ Friendly Detox Programs
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Detoxification is a critical first step in recovery, but finding programs that are 
              welcoming to LGBT+ individuals and understand community-specific needs can be 
              challenging. Here's how to find and access affirming detox care.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Why LGBT+ Affirming Detox Matters
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                LGBT+ individuals often face unique challenges during detox, including minority 
                stress, trauma, healthcare discrimination, and lack of family support. Affirming 
                programs understand these challenges and provide appropriate care.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              What Makes a Detox Program LGBT+ Affirming?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Staff Training</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>LGBT+ cultural competency training</li>
                  <li>Understanding of minority stress</li>
                  <li>Trauma-informed care approaches</li>
                  <li>Knowledge of LGBT+ health issues</li>
                  <li>Respect for chosen names and pronouns</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Program Policies</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Non-discrimination policies</li>
                  <li>Inclusive intake procedures</li>
                  <li>Respect for privacy and confidentiality</li>
                  <li>LGBT+ specific support groups</li>
                  <li>Affirming aftercare planning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Types of Detox Programs
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Medical Detox</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>24/7 medical supervision</li>
                  <li>Medication-assisted detox</li>
                  <li>Hospital or medical facility setting</li>
                  <li>Appropriate for severe withdrawal</li>
                  <li>Usually 3-7 days</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Social Detox</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Non-medical support and monitoring</li>
                  <li>Counseling and peer support</li>
                  <li>Residential or outpatient setting</li>
                  <li>Appropriate for mild to moderate withdrawal</li>
                  <li>Usually 3-10 days</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Outpatient Detox</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Daily medical monitoring</li>
                  <li>Medication management</li>
                  <li>Live at home</li>
                  <li>Appropriate for mild withdrawal</li>
                  <li>Usually 5-14 days</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              How to Find LGBT+ Affirming Programs
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Online Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>SAMHSA treatment locator</li>
                  <li>LGBT+ community center websites</li>
                  <li>LGBT+ health organization directories</li>
                  <li>Psychology Today provider finder</li>
                  <li>Local LGBT+ resource guides</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Community Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>LGBT+ community centers</li>
                  <li>LGBT+ health clinics</li>
                  <li>Peer support groups</li>
                  <li>LGBT+ recovery meetings</li>
                  <li>Word-of-mouth recommendations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Questions to Ask Potential Programs
            </h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Screening Questions</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>"Do you have experience working with LGBT+ patients?"</li>
                <li>"Have your staff received LGBT+ cultural competency training?"</li>
                <li>"How do you ensure your program is welcoming to LGBT+ individuals?"</li>
                <li>"Do you have LGBT+ specific support groups or services?"</li>
                <li>"How do you handle issues related to minority stress and trauma?"</li>
                <li>"Are you familiar with LGBT+ specific health concerns and medications?"</li>
                <li>"Do you have policies protecting LGBT+ patients from discrimination?"</li>
                <li>"How do you handle chosen names and pronouns?"</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Red Flags to Watch For
            </h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Warning Signs</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>Staff suggests your sexual orientation or gender identity is the problem</li>
                <li>Lack of knowledge about LGBT+ health issues</li>
                <li>Inappropriate questions about your identity</li>
                <li>Pressure to change or "fix" your identity</li>
                <li>Dismissive attitude toward LGBT+ specific concerns</li>
                <li>Staff who are not trained in LGBT+ issues</li>
                <li>Program environment that feels unwelcoming</li>
                <li>Religious or conversion therapy approaches</li>
                <li>Lack of privacy or confidentiality protections</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Preparing for Detox
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Before You Go</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Research and choose an affirming program</li>
                  <li>Arrange for time off work or school</li>
                  <li>Pack appropriate clothing and personal items</li>
                  <li>Bring important documents and medications</li>
                  <li>Inform supportive friends or family</li>
                  <li>Plan for aftercare and ongoing support</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">What to Bring</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Comfortable, appropriate clothing</li>
                  <li>Personal hygiene items</li>
                  <li>Prescription medications</li>
                  <li>Insurance cards and ID</li>
                  <li>Contact information for support people</li>
                  <li>Books, journals, or other comfort items</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              During Detox
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Self-Advocacy</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Communicate your needs clearly</li>
                  <li>Ask questions about your care</li>
                  <li>Express concerns about discrimination</li>
                  <li>Request accommodations when needed</li>
                  <li>Document any problematic interactions</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Building Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Connect with other LGBT+ patients if possible</li>
                  <li>Participate in support groups</li>
                  <li>Build relationships with affirming staff</li>
                  <li>Stay connected with outside support</li>
                  <li>Focus on your recovery goals</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              After Detox: Planning for Success
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Aftercare Planning</h3>
              <ul className="list-disc pl-4 space-y-2 text-yellow-700">
                <li>LGBT+ affirming residential treatment</li>
                <li>Outpatient counseling and therapy</li>
                <li>LGBT+ recovery meetings and support groups</li>
                <li>Medical follow-up and medication management</li>
                <li>Housing and employment assistance</li>
                <li>Ongoing peer support and community connection</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Emergency Resources
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">If You're in Crisis</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                <li><strong>LGBT+ National Hotline:</strong> 1-888-843-4564</li>
                <li><strong>Trans Lifeline:</strong> 1-877-565-8860</li>
                <li><strong>Emergency Room:</strong> Go to your nearest hospital</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Detox is a critical step in your recovery journey, and you deserve care that is 
                respectful, competent, and affirming of your identity. Don't let fear of 
                discrimination prevent you from getting the help you need. There are programs 
                and providers who will support you through this process with dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
