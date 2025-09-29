'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LBTSoberDatingPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-sober-dating" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ Sober Dating
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Dating in recovery can be challenging, especially in LGBT+ communities where 
              social scenes often revolve around bars and party environments. Building 
              healthy, sober relationships requires intention, boundaries, and support.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              When to Start Dating in Recovery
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                Most recovery experts recommend waiting at least one year of sobriety before 
                dating. This allows time to focus on your recovery, build healthy coping 
                strategies, and establish a strong foundation for relationships.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Challenges of Sober Dating in LGBT+ Communities
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Social Scene Challenges</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Many LGBT+ social spaces are alcohol-focused</li>
                  <li>Pressure to drink or use substances</li>
                  <li>Feeling left out or different</li>
                  <li>Limited sober dating options</li>
                  <li>Social anxiety without substances</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Recovery Challenges</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Risk of relapse in early recovery</li>
                  <li>Emotional vulnerability and triggers</li>
                  <li>Codependency and unhealthy patterns</li>
                  <li>Difficulty setting boundaries</li>
                  <li>Fear of rejection or judgment</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building a Foundation for Healthy Dating
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Personal Growth</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Strong recovery foundation</li>
                  <li>Healthy coping strategies</li>
                  <li>Self-awareness and emotional regulation</li>
                  <li>Clear values and boundaries</li>
                  <li>Self-confidence and self-worth</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Support Systems</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Recovery support groups</li>
                  <li>Sponsor or recovery coach</li>
                  <li>Therapy or counseling</li>
                  <li>LGBT+ affirming community</li>
                  <li>Trusted friends and family</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Sober Dating Strategies
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Where to Meet People</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>LGBT+ recovery meetings and events</li>
                  <li>Community centers and activities</li>
                  <li>Sports leagues and fitness groups</li>
                  <li>Volunteer opportunities</li>
                  <li>Classes and workshops</li>
                  <li>Online dating apps (with caution)</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Date Ideas</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Coffee shops and cafes</li>
                  <li>Museums and art galleries</li>
                  <li>Outdoor activities and nature</li>
                  <li>Movies and theater</li>
                  <li>Cooking classes and food tours</li>
                  <li>Volunteer activities together</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Setting Healthy Boundaries
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Early Recovery Boundaries</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Avoid dating people who use substances</li>
                  <li>Stay away from bars and party environments</li>
                  <li>Don't date people from your past using life</li>
                  <li>Be clear about your recovery needs</li>
                  <li>Don't compromise your sobriety for anyone</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Communication Boundaries</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Be honest about your recovery status</li>
                  <li>Communicate your needs and limits</li>
                  <li>Set clear expectations about substance use</li>
                  <li>Don't feel obligated to explain everything</li>
                  <li>Respect your own boundaries</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Red Flags to Watch For
            </h2>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Warning Signs</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>Pressure to drink or use substances</li>
                <li>Dismissive attitude toward your recovery</li>
                <li>Invitation to high-risk environments</li>
                <li>Codependent or controlling behavior</li>
                <li>Lack of respect for your boundaries</li>
                <li>Substance use problems of their own</li>
                <li>Emotional manipulation or abuse</li>
                <li>Isolation from your support systems</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Healthy Relationships
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Healthy Relationship Signs</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Mutual respect and support</li>
                  <li>Open and honest communication</li>
                  <li>Shared values and interests</li>
                  <li>Healthy boundaries and independence</li>
                  <li>Support for your recovery</li>
                  <li>Emotional safety and trust</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Relationship Skills</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Active listening and empathy</li>
                  <li>Conflict resolution skills</li>
                  <li>Emotional regulation</li>
                  <li>Healthy communication</li>
                  <li>Boundary setting and respect</li>
                  <li>Self-care and independence</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Online Dating Considerations
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Safety Tips</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Meet in public places</li>
                  <li>Tell someone about your plans</li>
                  <li>Trust your instincts</li>
                  <li>Don't share personal information too quickly</li>
                  <li>Be cautious about substance use</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Recovery Considerations</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Be honest about your recovery status</li>
                  <li>Look for sober or recovery-friendly profiles</li>
                  <li>Avoid profiles that emphasize partying</li>
                  <li>Set clear boundaries about substance use</li>
                  <li>Don't compromise your recovery</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Dealing with Rejection and Setbacks
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Coping Strategies</h3>
              <ul className="list-disc pl-4 space-y-2 text-yellow-700">
                <li>Remember that rejection is not personal</li>
                <li>Focus on your recovery and self-care</li>
                <li>Talk to your support system</li>
                <li>Learn from the experience</li>
                <li>Don't let setbacks discourage you</li>
                <li>Remember your worth and value</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              When to Seek Help
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Consider Professional Support If:</h3>
              <ul className="list-disc pl-4 space-y-2 text-red-700">
                <li>You're experiencing relationship-related stress</li>
                <li>You're having thoughts of relapse</li>
                <li>You're in an unhealthy or abusive relationship</li>
                <li>You're struggling with codependency</li>
                <li>You're having difficulty setting boundaries</li>
                <li>You're feeling isolated or hopeless</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Dating in recovery is possible and can be rewarding, but it requires patience, 
                boundaries, and support. Your recovery comes first, and you deserve relationships 
                that support and enhance your sobriety. Don't rush the process, and don't settle 
                for relationships that compromise your well-being or recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
