'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Link from 'next/link'

interface Module {
  id: number
  module_number: number
  title: string
  description: string
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
  }
]

export default function ProgramPage() {
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [usingMockData, setUsingMockData] = useState(false)

  useEffect(() => {
    const fetchModules = async () => {
      try {
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
  }, [])

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
                  Supabase is not configured. You're seeing demo data. To connect to a real database, 
                  create a <code className="bg-yellow-100 px-1 rounded">.env.local</code> file with your Supabase credentials.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Program Overview */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
            <h2 className="text-xl font-semibold text-text mb-3">
              Your Recovery Journey
            </h2>
            <p className="text-neutral-600 mb-4">
              The Core Program is designed to guide you through a comprehensive recovery process. 
              Each module builds upon the previous one, creating a strong foundation for lasting change. 
              Take your time with each module and practice the skills you learn.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                Evidence-based methods
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                Self-paced learning
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                Practical tools & exercises
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                Community support integration
              </div>
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
                    
                    <Link href={`/program/${module.module_number}`}>
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

        {/* Coming Soon */}
        <div className="mt-12">
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-lg font-semibold text-text mb-2">
              More Modules Coming Soon
            </h3>
            <p className="text-neutral-600 mb-4">
              We're working on additional modules to support your recovery journey. 
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