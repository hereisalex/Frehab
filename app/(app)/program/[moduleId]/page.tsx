'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import PersonalBalanceSheet from '@/components/PersonalBalanceSheet'

interface Module {
  id: number
  module_number: number
  title: string
  description: string
  content?: {
    lessons: Array<{
      type: 'reading' | 'video' | 'tool'
      title: string
      summary: string
      external_url?: string
      video_id?: string
      pdf_url?: string
      button_text: string
    }>
    tools: Array<{
      type: 'wiki'
      title: string
      summary: string
      wiki_url: string
      button_text: string
    }>
  }
}



export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.moduleId as string
  
  const [module, setModule] = useState<Module | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const { data, error } = await supabase
          .from('modules')
          .select('*')
          .eq('module_number', parseInt(moduleId))
          .single()

        if (error) {
          console.error('Error fetching module:', error)
          
          // Check if it's a configuration error
          if (error.message?.includes('Supabase not configured')) {
            // Provide mock data for Module 1
            if (parseInt(moduleId) === 1) {
              setModule({
                id: 1,
                module_number: 1,
                title: 'Foundation: Understanding Recovery',
                description: 'Begin your recovery journey by building a solid foundation. This module introduces key concepts, helps you understand your relationship with substances, and establishes the mindset needed for lasting change. You\'ll learn about the science of addiction, develop self-awareness, and create your personal recovery vision.',
                content: {
                  lessons: [
                    {
                      type: 'reading',
                      title: 'The Stages of Change',
                      summary: 'Understanding the psychological stages people go through when making behavioral changes, from precontemplation to maintenance.',
                      external_url: 'https://www.verywellmind.com/stages-of-change-2795713',
                      button_text: 'Read Article'
                    },
                    {
                      type: 'video',
                      title: 'Cost-Benefit Analysis',
                      summary: 'Learn how to systematically evaluate the pros and cons of your current behaviors and potential changes.',
                      video_id: 'dQw4w9WgXcQ',
                      button_text: 'Watch Video'
                    },
                    {
                      type: 'tool',
                      title: 'Download Your Worksheet',
                      summary: 'Get your personal worksheet to complete the exercises in this module.',
                      pdf_url: '/worksheets/module1-worksheet.pdf',
                      button_text: 'Download PDF'
                    }
                  ],
                  tools: [
                    {
                      type: 'wiki',
                      title: 'The Psychology of Motivation',
                      summary: 'Deep dive into the psychological principles that drive behavior change and sustained motivation.',
                      wiki_url: '/wiki/psychology-of-motivation',
                      button_text: 'Read Article'
                    }
                  ]
                }
              })
            } else {
              setError('Module not found')
            }
          } else if ('code' in error && error.code === 'PGRST116') { // No rows returned
            setError('Module not found')
          } else {
            setError('Failed to load module. Please try again.')
          }
        } else {
          setModule(data)
        }
      } catch (err) {
        console.error('Error fetching module:', err)
        setError('Failed to load module. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    if (moduleId) {
      fetchModule()
    }
  }, [moduleId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-200 rounded mb-4"></div>
            <div className="h-4 bg-neutral-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-neutral-200 rounded"></div>
                <div className="h-64 bg-neutral-200 rounded"></div>
                <div className="h-64 bg-neutral-200 rounded"></div>
              </div>
              <div className="space-y-6">
                <div className="h-48 bg-neutral-200 rounded"></div>
                <div className="h-48 bg-neutral-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !module) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-xl font-semibold text-red-700 mb-2">
              {error === 'Module not found' ? 'Module Not Found' : 'Error Loading Module'}
            </h1>
            <p className="text-red-600 mb-4">
              {error === 'Module not found' 
                ? 'The module you\'re looking for doesn\'t exist.' 
                : error
              }
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="primary" 
                onClick={() => router.push('/program')}
              >
                Back to Program
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Check if this is Module 1 for the Personal Balance Sheet component
  const isModule1 = module.module_number === 1

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/program">
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Program
              </Button>
            </Link>
            <div className="text-sm text-neutral-500">
              Module {module.module_number}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-text mb-2">
            {module.title}
          </h1>
          <p className="text-neutral-600 text-lg">
            {module.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Core Concept Section */}
            {isModule1 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-text">Core Concept</h2>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-text">The Crossroads - An Honest Assessment</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    This module helps you take an honest look at where you are in your recovery journey. It&apos;s about understanding your current relationship with substances, recognizing patterns, and making a conscious decision about the path forward. This isn&apos;t about judgment—it&apos;s about clarity and choice.
                  </p>
                  
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-medium text-text mb-3">Key Points:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600 text-sm">Understanding your current relationship with substances</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600 text-sm">Recognizing patterns and triggers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600 text-sm">Making conscious choices about your path forward</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600 text-sm">Building self-awareness without judgment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Lessons Section */}
            {module.content?.lessons && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-text">Lessons</h2>
                </div>
                
                <div className="space-y-4">
                  {module.content.lessons.map((lesson, index) => (
                    <div key={index} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          lesson.type === 'reading' ? 'bg-blue-100' :
                          lesson.type === 'video' ? 'bg-red-100' :
                          'bg-green-100'
                        }`}>
                          {lesson.type === 'reading' && (
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          )}
                          {lesson.type === 'video' && (
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                          {lesson.type === 'tool' && (
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-text">{lesson.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              lesson.type === 'reading' ? 'bg-blue-100 text-blue-700' :
                              lesson.type === 'video' ? 'bg-red-100 text-red-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {lesson.type === 'reading' ? 'Reading' :
                               lesson.type === 'video' ? 'Video' : 'Tool'}
                            </span>
                          </div>
                          <p className="text-neutral-600 text-sm mb-2">{lesson.summary}</p>
                          <div className="flex items-center space-x-4 text-xs text-neutral-500">
                            {lesson.type === 'reading' && lesson.external_url && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-blue-600 hover:text-blue-700"
                                onClick={() => window.open(lesson.external_url, '_blank')}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                            {lesson.type === 'video' && lesson.video_id && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-600 hover:text-red-700"
                                onClick={() => window.open(`https://www.youtube.com/watch?v=${lesson.video_id}`, '_blank')}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                            {lesson.type === 'tool' && lesson.pdf_url && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-green-600 hover:text-green-700"
                                onClick={() => window.open(lesson.pdf_url, '_blank')}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action-Based Project */}
            {isModule1 ? (
              <PersonalBalanceSheet />
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-text">Action-Based Project</h2>
                </div>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
                  <h3 className="font-semibold text-text mb-3">Your Recovery Vision Statement</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    Create a personal vision statement that captures who you want to become and what recovery means to you. This will serve as your compass throughout your journey.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-text">Steps:</h4>
                        <ol className="mt-2 space-y-1">
                          <li className="text-sm text-neutral-600">1. Reflect on your values and what matters most to you</li>
                          <li className="text-sm text-neutral-600">2. Write about the person you want to become</li>
                          <li className="text-sm text-neutral-600">3. Define what recovery means to you personally</li>
                          <li className="text-sm text-neutral-600">4. Create a vision statement that inspires you</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-text">Time Commitment</h4>
                        <p className="text-sm text-neutral-600">1-2 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-text">Deliverables</h4>
                        <p className="text-sm text-neutral-600">A written vision statement and reflection notes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="primary" className="w-full">
                      Start Project
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for other modules */}
            {!isModule1 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">Content Coming Soon</h3>
                  <p className="text-neutral-600">Detailed content for this module is being prepared.</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Skills Learned */}
            {isModule1 && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text">Key Skills Learned</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-600">Self-assessment and honest reflection</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-600">Understanding motivation and behavior change</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-600">Creating personal vision and goals</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-neutral-600">Building self-awareness without judgment</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tools & Resources */}
            {module.content?.tools && (
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text">Tools & Resources</h3>
                </div>
                
                <div className="space-y-3">
                  {module.content.tools.map((tool, index) => (
                    <div key={index} className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                      <h4 className="font-medium text-text text-sm mb-1">{tool.title}</h4>
                      <p className="text-xs text-neutral-600 mb-2">{tool.summary}</p>
                      <Link href={tool.wiki_url}>
                        <Button variant="secondary" size="sm" className="w-full">
                          {tool.button_text}
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h3 className="font-semibold text-text mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Lessons Completed</span>
                  <span className="text-sm font-medium text-text">0/3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Tools Used</span>
                  <span className="text-sm font-medium text-text">0/3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Project Status</span>
                  <span className="text-sm font-medium text-text">Not Started</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="text-center">
                  <p className="text-sm text-neutral-600 mb-2">Module Progress</p>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">0% Complete</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h3 className="font-semibold text-text mb-4">Module Navigation</h3>
              <div className="space-y-2">
                <Link href="/program">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    ← Back to Program
                  </Button>
                </Link>
                {module.module_number > 1 && (
                  <Link href={`/program/${module.module_number - 1}`}>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      ← Previous Module
                    </Button>
                  </Link>
                )}
                <Link href={`/program/${module.module_number + 1}`}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Next Module →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Help */}
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-text mb-2">Need Help?</h3>
              <p className="text-sm text-neutral-600 mb-4">
                If you have questions about this module or need support, reach out to the community.
              </p>
              <Link href="/community">
                <Button variant="secondary" size="sm" className="w-full">
                  Ask the Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 