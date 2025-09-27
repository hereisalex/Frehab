'use client'

import { useState } from 'react'
import UrgeTracker from '@/components/tools/UrgeTracker'
import ThoughtRecord from '@/components/tools/ThoughtRecord'
import GratitudeJournal from '@/components/tools/GratitudeJournal'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

type Tool = 'urge-tracker' | 'thought-record' | 'gratitude-journal'

const tools = [
  {
    id: 'urge-tracker' as Tool,
    title: 'Urge/Craving Tracker',
    description: 'Track urges and cravings to identify patterns and build effective coping strategies.',
    icon: '📊',
    benefits: [
      'Identify triggers and patterns',
      'Track coping strategy effectiveness',
      'Monitor intensity changes over time',
      'Build self-awareness'
    ]
  },
  {
    id: 'thought-record' as Tool,
    title: 'CBT Thought Record',
    description: 'Challenge negative automatic thoughts using Cognitive Behavioral Therapy techniques.',
    icon: '🧠',
    benefits: [
      'Identify thought patterns',
      'Challenge negative thinking',
      'Develop balanced perspectives',
      'Improve emotional regulation'
    ]
  },
  {
    id: 'gratitude-journal' as Tool,
    title: 'Gratitude Journal',
    description: 'Daily gratitude practice to improve mood and increase resilience.',
    icon: '🙏',
    benefits: [
      'Boost positive emotions',
      'Increase life satisfaction',
      'Improve sleep quality',
      'Strengthen relationships'
    ]
  }
]

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<Tool | null>(null)

  if (activeTool) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-white border-b border-neutral-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-text">
              {tools.find(t => t.id === activeTool)?.title}
            </h1>
            <button
              onClick={() => setActiveTool(null)}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Tools
            </button>
          </div>
        </div>

        <div className="py-8">
          {activeTool === 'urge-tracker' && <UrgeTracker />}
          {activeTool === 'thought-record' && <ThoughtRecord />}
          {activeTool === 'gratitude-journal' && <GratitudeJournal />}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Recovery Tools
          </h1>
          <p className="text-neutral-600">
            Interactive tools to support your recovery journey. These evidence-based tools help you 
            build self-awareness, manage difficult emotions, and develop healthy coping strategies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Clinical Disclaimer */}
        <div className="mb-8">
          <ClinicalDisclaimer />
        </div>

        {/* Privacy Notice */}
        <div className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Your Privacy is Protected</p>
                <p>
                  All tool data is stored locally in your browser and never sent to our servers. 
                  Your entries remain completely private and anonymous.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{tool.icon}</div>
                  <h3 className="text-xl font-semibold text-text">
                    {tool.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tool.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => setActiveTool(tool.id)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Use This Tool
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-lg font-semibold text-text mb-4">
              How to Use These Tools Effectively
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-600">
              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">Getting Started</h4>
                <ul className="space-y-1">
                  <li>• Start with one tool that resonates with you</li>
                  <li>• Use consistently for best results</li>
                  <li>• Be honest and specific in your entries</li>
                  <li>• Don't judge your thoughts or feelings</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">Best Practices</h4>
                <ul className="space-y-1">
                  <li>• Set aside dedicated time for reflection</li>
                  <li>• Review patterns in your entries regularly</li>
                  <li>• Celebrate small improvements and insights</li>
                  <li>• Share insights with your support network</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-sm text-neutral-600">
                <strong>Remember:</strong> These tools work best when used regularly as part of your overall recovery plan. 
                They complement but don't replace professional treatment, therapy, or support groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
