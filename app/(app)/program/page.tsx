'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'
import DonationSupport from '@/components/DonationSupport'

interface Module {
  id: number | string
  module_number: number
  title: string
  description: string
  track_info?: {
    track_id: string
    track_name: string
    track_category: string
    track_icon: string
    primary_color: string
    secondary_color: string
  }
}

// Mock data for development when Supabase is not configured
const mockModules: Module[] = [
  {
    id: 1,
    module_number: 1,
    title: 'Foundation: Understanding Recovery',
    description: 'Begin your recovery journey by building a solid foundation. This module introduces key concepts, helps you understand your relationship with substances, and establishes the mindset needed for lasting change. You\'ll learn about the science of addiction, develop self-awareness, and create your personal recovery vision.'
  },
  {
    id: 2,
    module_number: 2,
    title: 'Building Your Support System',
    description: 'Recovery doesn\'t happen in isolation. This module focuses on building and strengthening your support network. Learn how to identify healthy relationships, communicate your needs effectively, and develop the skills to maintain boundaries. You\'ll also explore how to find and connect with recovery communities that align with your values.'
  },
  {
    id: 3,
    module_number: 3,
    title: 'From Values to Habits: Build Your Recovery System',
    description: 'Translate your core values into small, repeatable habits. Design systems that make the right choice the easy choice, aligning daily actions with the life you want.'
  },
  {
    id: 4,
    module_number: 4,
    title: 'Relapse Prevention: Master Triggers and Cravings',
    description: 'Build a robust plan to anticipate high-risk situations, manage cravings, and recover quickly from slips. Learn evidence-based skills like urge surfing, HALT checks, and coping menus.'
  },
  {
    id: 5,
    module_number: 5,
    title: 'Building a Fulfilling Life',
    description: 'Design a balanced life that makes recovery rewarding. Align your time with your values and stack identity-based habits across core pillars.'
  },
  {
    id: 6,
    module_number: 6,
    title: 'Resilience & Stress Management: Skills for Tough Days',
    description: 'Build resilience and emotional regulation skills—reframe thoughts, reduce physiological arousal, and recover quickly from setbacks.'
  }
  ,
  {
    id: 7,
    module_number: 7,
    title: 'Community & Service: Connected Recovery',
    description: 'Strengthen recovery by building supportive relationships and contributing to something bigger than yourself.'
  }
  ,
  {
    id: 8,
    module_number: 8,
    title: 'Sustain & Grow: Future-Proof Your Recovery',
    description: 'Consolidate skills into a sustainable system and create plans for continued growth.'
  }
]

function ProgramPageContent() {
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [usingMockData, setUsingMockData] = useState(false)
  const searchParams = useSearchParams()
  const selectedTrack = searchParams.get('track')

  useEffect(() => {
    const fetchModules = async () => {
      try {
        if (selectedTrack) {
          // Fetch track-specific modules from new API
          try {
            const response = await fetch(`/api/tracks/${selectedTrack}/modules`)
            if (response.ok) {
              const result = await response.json()
              if (result.success) {
                setModules(result.modules || [])
                setUsingMockData(false)
                setLoading(false)
                return
              }
            }
          } catch (trackError) {
            console.error('Error fetching track modules, falling back to general:', trackError)
          }
        }

        // Fetch generic modules (fallback or no track selected)
        const { data, error } = await supabase
          .from('modules')
          .select('*')
          .order('module_number', { ascending: true })

        if (error) {
          console.error('Error fetching modules:', error)
          
          // Check if it's a configuration error
          if (error.message?.includes('Supabase not configured')) {
            setError('Supabase is not configured. Using demo data for development.')
            setModules(mockModules)
            setUsingMockData(true)
          } else {
            setError('Failed to load modules. Please try again.')
          }
        } else {
          setModules(data || [])
          setUsingMockData(false)
        }
      } catch (err) {
        console.error('Error fetching modules:', err)
        setError('Failed to load modules. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchModules()
  }, [selectedTrack])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Core Program
          </h1>
          <p className="text-neutral-600">
            A structured path to lasting recovery through evidence-based guidance and practical tools.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Configuration Notice */}
        {usingMockData && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Development Mode</h3>
                <p className="text-sm text-yellow-700 mt-1">
                   Supabase is not configured. You&apos;re seeing demo data. To connect to a real database, 
                  create a <code className="bg-yellow-100 px-1 rounded">.env.local</code> file with your Supabase credentials.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Clinical Disclaimer */}
        <div className="mb-8">
                <ClinicalDisclaimer id="program-main" />
        </div>

                {/* Track Selection Display */}
                {selectedTrack && (
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
                      <h2 className="text-xl font-semibold mb-2">
                        {selectedTrack.charAt(0).toUpperCase() + selectedTrack.slice(1).replace('-', ' ')} Recovery Track
                      </h2>
                      <p className="opacity-90">
                        You&apos;ve selected the {selectedTrack.replace('-', ' ')} recovery track. 
                        This program is tailored with specific strategies and insights for your situation.
                      </p>
                    </div>
                  </div>
                )}

                {/* Welcome Message for New Users */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Welcome to Your Recovery Program 🎯
                    </h2>
                    <p className="text-gray-700 mb-4">
                      You&apos;ve taken the first step! This structured 8-module program will guide you through 
                      evidence-based recovery techniques. Each module takes about 15-30 minutes and builds on the previous one.
                      {selectedTrack && ` The content is specifically adapted for ${selectedTrack.replace('-', ' ')} recovery.`}
                    </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="font-medium text-gray-900">Start Immediately</span>
                </div>
                <p className="text-sm text-gray-600">No signup required - dive right in</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="font-medium text-gray-900">Your Own Pace</span>
                </div>
                <p className="text-sm text-gray-600">Take breaks, revisit modules anytime</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="font-medium text-gray-900">Evidence-Based</span>
                </div>
                <p className="text-sm text-gray-600">Proven CBT and recovery methods</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="font-medium text-gray-900">Completely Private</span>
                </div>
                <p className="text-sm text-gray-600">Anonymous access, no personal data</p>
              </div>
            </div>

            <div className="bg-blue-100 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>💡 Tip:</strong> Create an account later to save your progress across devices, 
                or continue anonymously - both options work great!
              </p>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            Available Modules
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6 animate-pulse">
                  <div className="h-4 bg-neutral-200 rounded mb-3"></div>
                  <div className="h-6 bg-neutral-200 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-200 rounded"></div>
                    <div className="h-3 bg-neutral-200 rounded"></div>
                    <div className="h-3 bg-neutral-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error && !usingMockData ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-600">{error}</p>
              <Button 
                variant="primary" 
                size="sm" 
                className="mt-3"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module) => (
                <div key={module.id} className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {module.module_number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                      Module {module.module_number}
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-neutral-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Self-paced</span>
                    </div>
                    
                    <Link href={`/program/${module.module_number}${selectedTrack ? `?track=${selectedTrack}` : ''}`}>
                      <Button variant="primary" size="sm">
                        Start Module
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

                {/* Support Frehab */}
                <div className="mt-12">
                  <DonationSupport variant="inline" className="mb-6" />
                </div>

                {/* Coming Soon */}
                <div className="mt-6">
                  <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                    <h3 className="text-lg font-semibold text-text mb-2">
                      More Modules Coming Soon
                    </h3>
                    <p className="text-neutral-600 mb-4">
                       We&apos;re working on additional modules to support your recovery journey. 
                      Future modules will cover topics like coping strategies, relapse prevention, 
                      and building a fulfilling life in recovery.
                    </p>
                    <div className="flex items-center text-sm text-neutral-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Stay tuned for updates</span>
                    </div>
                  </div>
                </div>
      </div>
    </div>
  )
}

export default function ProgramPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProgramPageContent />
    </Suspense>
  )
} 