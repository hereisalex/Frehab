'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LGBTAlcoholFreeAlternativesPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-alcohol-free-alternatives" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ Alcohol-Free Social Alternatives
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Building a vibrant social life without alcohol is not only possible but can be more 
              fulfilling and authentic. Here are alcohol-free alternatives that celebrate LGBT+ 
              community and culture while supporting your recovery.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Creating Your Own Events
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Home Gatherings</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Game nights with friends</li>
                  <li>Movie marathons with themed snacks</li>
                  <li>Potluck dinners and cooking parties</li>
                  <li>Book club meetings</li>
                  <li>Art and craft sessions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Outdoor Activities</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>Hiking and nature walks</li>
                  <li>Beach days and picnics</li>
                  <li>Community gardening</li>
                  <li>Outdoor sports and games</li>
                  <li>Camping and outdoor adventures</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Community-Based Activities
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">LGBT+ Community Centers</h3>
                <p className="text-slate-600 mb-2">Most LGBT+ community centers offer alcohol-free programming:</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Support groups and discussion circles</li>
                  <li>Educational workshops and seminars</li>
                  <li>Art classes and creative workshops</li>
                  <li>Fitness and wellness programs</li>
                  <li>Social events and mixers</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Cultural Events</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>LGBT+ film festivals and screenings</li>
                  <li>Art gallery openings and exhibitions</li>
                  <li>Theater performances and shows</li>
                  <li>Literary events and author readings</li>
                  <li>Music concerts and performances</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Sports and Recreation</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>LGBT+ sports leagues (softball, volleyball, etc.)</li>
                  <li>Running and walking groups</li>
                  <li>Cycling clubs and bike rides</li>
                  <li>Rock climbing and adventure sports</li>
                  <li>Dance classes and social dancing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Recovery-Focused Social Activities
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Sober Social Events</h3>
              <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                <li>LGBT+ AA/NA meetings and social events</li>
                <li>Sober dance parties and events</li>
                <li>Recovery conferences and workshops</li>
                <li>Sober camping trips and retreats</li>
                <li>Recovery-focused volunteer opportunities</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Creative and Intellectual Pursuits
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Creative Activities</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Art classes and workshops</li>
                  <li>Writing groups and poetry readings</li>
                  <li>Music lessons and jam sessions</li>
                  <li>Photography walks and clubs</li>
                  <li>Crafting and DIY projects</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Learning Opportunities</h3>
                <ul className="list-disc pl-4 space-y-1 text-indigo-700">
                  <li>Language classes and conversation groups</li>
                  <li>Book clubs and reading groups</li>
                  <li>Educational workshops and seminars</li>
                  <li>Online courses and study groups</li>
                  <li>Museum visits and cultural tours</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Meaningful Connections
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Volunteer Opportunities</h3>
                <ul className="list-disc pl-4 space-y-1 text-green-700">
                  <li>LGBT+ community organizations</li>
                  <li>HIV/AIDS service organizations</li>
                  <li>Youth programs and mentoring</li>
                  <li>Environmental and social justice causes</li>
                  <li>Animal shelters and rescue organizations</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Support and Advocacy</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>LGBT+ rights advocacy groups</li>
                  <li>Mental health awareness organizations</li>
                  <li>Recovery advocacy and education</li>
                  <li>Community organizing and activism</li>
                  <li>Peer support and mentoring programs</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Tips for Success
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-slate-700">Start Small</h3>
                <p className="text-slate-600">Begin with low-pressure activities and gradually expand your social circle.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-slate-700">Be Consistent</h3>
                <p className="text-slate-600">Regular participation helps build lasting friendships and community connections.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-slate-700">Stay Open</h3>
                <p className="text-slate-600">Be open to new experiences and people who might become important in your life.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Remember</h3>
              <p className="text-yellow-700">
                Your social life in recovery can be richer and more authentic than it was before. 
                By focusing on activities that align with your values and support your well-being, 
                you'll build connections that are meaningful, supportive, and lasting. You deserve 
                to have fun and feel connected without relying on substances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
