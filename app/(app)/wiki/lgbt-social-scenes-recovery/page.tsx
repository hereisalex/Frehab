'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LBTSocialScenesRecoveryPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-social-scenes-recovery" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Navigating LGBT+ Social Scenes in Recovery
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              LGBT+ social scenes often revolve around bars, clubs, and party environments where 
              substance use is common. Navigating these spaces in recovery requires careful 
              planning and boundary-setting while maintaining your connection to community.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Understanding the Challenge
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                Many LGBT+ social spaces are built around alcohol and drug use. This doesn't mean 
                you have to avoid your community entirely, but it does mean you need strategies 
                to participate safely in recovery.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Strategies for Safe Participation
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Choose Your Events Wisely</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Look for alcohol-free or sober events</li>
                  <li>Attend daytime events rather than late-night parties</li>
                  <li>Choose events focused on activities rather than drinking</li>
                  <li>Start with events you can leave easily if needed</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Bring Support</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Attend with a sober friend or sponsor</li>
                  <li>Have a recovery buddy you can call</li>
                  <li>Arrange for transportation that doesn't depend on others</li>
                  <li>Set up check-in times with someone supportive</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Set Clear Boundaries</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Decide in advance how long you'll stay</li>
                  <li>Have an exit strategy if you feel triggered</li>
                  <li>Practice saying "no" to offers of substances</li>
                  <li>Don't feel obligated to explain your recovery to everyone</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Alternative Social Activities
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Community Events</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>LGBT+ community center activities</li>
                  <li>Pride events and festivals</li>
                  <li>LGBT+ sports leagues</li>
                  <li>Book clubs and discussion groups</li>
                  <li>Art classes and workshops</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Recovery-Focused</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>LGBT+ AA/NA meetings</li>
                  <li>Sober social events</li>
                  <li>Recovery conferences and workshops</li>
                  <li>Volunteer opportunities</li>
                  <li>Wellness and fitness groups</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Handling Triggers in Social Settings
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Common Triggers</h3>
                <ul className="list-disc pl-4 space-y-1 text-red-700">
                  <li>Seeing others use substances</li>
                  <li>Feeling left out or different</li>
                  <li>Pressure to "just have one"</li>
                  <li>Memories of past use in similar settings</li>
                  <li>Social anxiety or feeling awkward</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Coping Strategies</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Practice deep breathing exercises</li>
                  <li>Have a non-alcoholic drink in your hand</li>
                  <li>Focus on conversations rather than the environment</li>
                  <li>Take breaks outside or in quieter areas</li>
                  <li>Remember your reasons for recovery</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building New Social Connections
            </h2>

            <p className="text-slate-600 mb-4">
              Recovery is an opportunity to build healthier social connections. Consider:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Joining LGBT+ recovery groups and meetings</li>
              <li>Participating in community service projects</li>
              <li>Taking classes or workshops that interest you</li>
              <li>Joining LGBT+ sports teams or fitness groups</li>
              <li>Volunteering with LGBT+ organizations</li>
              <li>Attending LGBT+ cultural events and festivals</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Remember</h3>
              <p className="text-yellow-700">
                You don't have to choose between your recovery and your community. With planning, 
                boundaries, and support, you can maintain your connection to LGBT+ community while 
                staying true to your recovery goals. Your sobriety is worth protecting, and your 
                community should support that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
