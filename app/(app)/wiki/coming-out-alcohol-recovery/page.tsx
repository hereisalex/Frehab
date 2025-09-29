'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function ComingOutAlcoholRecoveryPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="coming-out-alcohol-recovery" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Coming Out and Alcohol Recovery
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Coming out is a deeply personal process that can be both liberating and challenging. 
              When combined with alcohol recovery, it requires careful consideration of timing, 
              support systems, and self-care strategies.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Understanding the Intersection
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                Coming out and recovery both involve significant life changes, self-discovery, 
                and building authentic relationships. They can support each other, but they 
                also require careful navigation to ensure both processes are successful.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Timing Considerations
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Early Recovery (0-6 months)</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Focus primarily on establishing sobriety</li>
                  <li>Build a strong support network first</li>
                  <li>Consider coming out to close, supportive friends</li>
                  <li>Avoid major life changes that could trigger relapse</li>
                  <li>Work with a therapist or counselor</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Stable Recovery (6+ months)</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>You have established coping strategies</li>
                  <li>Support network is in place</li>
                  <li>You're more confident in your recovery</li>
                  <li>Can handle potential rejection or stress</li>
                  <li>Ready for broader coming out process</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Preparing for Coming Out
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Build Your Support System</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>LGBT+ affirming therapist or counselor</li>
                  <li>LGBT+ recovery support groups</li>
                  <li>Trusted friends who already know</li>
                  <li>LGBT+ community connections</li>
                  <li>Family members who are supportive</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Develop Coping Strategies</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>Stress management techniques</li>
                  <li>Emotional regulation skills</li>
                  <li>Communication strategies</li>
                  <li>Boundary-setting skills</li>
                  <li>Crisis support contacts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Family Dynamics and Recovery
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Potential Challenges</h3>
                <ul className="list-disc pl-4 space-y-1 text-red-700">
                  <li>Family rejection or disapproval</li>
                  <li>Increased stress and emotional turmoil</li>
                  <li>Loss of family support systems</li>
                  <li>Pressure to "change" or "get help"</li>
                  <li>Religious or cultural conflicts</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Protective Strategies</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Have a support plan in place</li>
                  <li>Set clear boundaries with family</li>
                  <li>Don't come out during family crises</li>
                  <li>Consider family therapy if appropriate</li>
                  <li>Build chosen family relationships</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Coming Out in Recovery Communities
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Finding Affirming Recovery Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Look for LGBT+ specific meetings</li>
                  <li>Ask about LGBT+ friendly groups</li>
                  <li>Connect with LGBT+ sponsors or mentors</li>
                  <li>Join online LGBT+ recovery communities</li>
                  <li>Attend LGBT+ recovery conferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Handling Discrimination</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Know your rights in recovery spaces</li>
                  <li>Have backup support options</li>
                  <li>Don't internalize others' prejudice</li>
                  <li>Focus on your recovery goals</li>
                  <li>Seek out affirming alternatives</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Self-Care During Coming Out
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Emotional Self-Care</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Regular therapy or counseling</li>
                  <li>Journaling and self-reflection</li>
                  <li>Meditation and mindfulness</li>
                  <li>Creative expression</li>
                  <li>Spending time in nature</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Physical Self-Care</h3>
                <ul className="list-disc pl-4 space-y-1 text-indigo-700">
                  <li>Regular exercise and movement</li>
                  <li>Healthy eating habits</li>
                  <li>Adequate sleep and rest</li>
                  <li>Stress-reduction techniques</li>
                  <li>Regular medical check-ups</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Your Chosen Family
            </h2>

            <p className="text-slate-600 mb-4">
              Not everyone will accept or support you, and that's okay. Building a chosen family 
              of supportive, affirming people can be crucial for both your recovery and your 
              coming out process.
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>LGBT+ friends who understand your journey</li>
              <li>Recovery peers who are affirming</li>
              <li>Mentors and role models in both communities</li>
              <li>LGBT+ affirming professionals and providers</li>
              <li>Community leaders and advocates</li>
              <li>Online communities and support groups</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              When to Seek Professional Help
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Consider Professional Support If:</h3>
              <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                <li>You're experiencing severe depression or anxiety</li>
                <li>You're having thoughts of self-harm or suicide</li>
                <li>You're considering relapse due to stress</li>
                <li>Family relationships are severely strained</li>
                <li>You're feeling isolated or hopeless</li>
                <li>You need help navigating complex family dynamics</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Coming out is your journey, and you get to decide the timing, pace, and approach 
                that works best for you. Your recovery comes first, and there's no shame in 
                taking your time or being selective about who you tell. You deserve support, 
                acceptance, and love as you navigate both your recovery and your authentic self.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
