'use client'

import { useState, useEffect, Suspense } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import PersonalBalanceSheet from '@/components/PersonalBalanceSheet'
import ValuesToHabitsPlanner from '@/components/ValuesToHabitsPlanner'
import IdentityHabitsGame from '@/components/games/IdentityHabitsGame'
import RelapseRunner3D from '@/components/games/RelapseRunner3D'
import LifeStacker3D from '@/components/games/LifeStacker3D'
import BreathFlow3D from '@/components/games/BreathFlow3D'
import CommunityBuilder from '@/components/games/CommunityBuilder'
import FutureBuilder from '@/components/games/FutureBuilder'
import SupportNetwork3D from '@/components/games/SupportNetwork3D'
import RoutineArchitect3D from '@/components/games/RoutineArchitect3D'
import FeelingsIdentification from '@/components/tools/FeelingsIdentification'
import PersonalizedAlternatives from '@/components/tools/PersonalizedAlternatives'
import VideoModal from '@/components/VideoModal'

interface Module {
  id: number | string
  module_number: number
  title: string
  description: string
  content?: {
    lessons: Array<{
      type: 'reading' | 'video' | 'tool' | 'audio'
      title: string
      summary: string
      external_url?: string
      video_id?: string
      pdf_url?: string
      audio_url?: string
      duration?: string
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



function ModulePageContent() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const moduleId = params.moduleId as string
  const trackId = searchParams.get('track')
  
  const [module, setModule] = useState<Module | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [lessonsCompleted, setLessonsCompleted] = useState<string[]>([])
  const [toolsUsed, setToolsUsed] = useState<string[]>([])
  const [projectCompleted, setProjectCompleted] = useState<boolean>(false)
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; title: string; url: string }>({
    isOpen: false,
    title: '',
    url: ''
  })

  const storageKey = `module_progress_${moduleId}`

  const loadProgressFromStorage = () => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null
      if (!raw) return
      const parsed = JSON.parse(raw) as { lessonsCompleted?: string[]; toolsUsed?: string[]; projectCompleted?: boolean }
      setLessonsCompleted(parsed.lessonsCompleted || [])
      setToolsUsed(parsed.toolsUsed || [])
      setProjectCompleted(!!parsed.projectCompleted)
    } catch {}
  }

  const saveProgressToStorage = (next: { lessonsCompleted?: string[]; toolsUsed?: string[]; projectCompleted?: boolean }) => {
    try {
      const current = {
        lessonsCompleted,
        toolsUsed,
        projectCompleted,
        ...next,
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, JSON.stringify(current))
      }
    } catch {}
  }

  const handleLessonClick = async (lessonId: string, url: string, title: string) => {
    if (!lessonsCompleted.includes(lessonId)) {
      const next = [...lessonsCompleted, lessonId]
      setLessonsCompleted(next)
      saveProgressToStorage({ lessonsCompleted: next })
    }
    try {
      const isLocal = url.startsWith('/')
      if (isLocal) {
        const head = await fetch(url, { method: 'HEAD' })
        if (!head.ok) {
          alert('Resource not available yet. Redirecting to tools page as a fallback.')
          router.push('/tools')
          return
        }
      }
    } catch {}
    
    // Open video in modal for external URLs, new tab for YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      window.open(url, '_blank')
    } else {
      setVideoModal({ isOpen: true, title, url })
    }
  }

  const handleToolClick = async (toolId: string, url: string) => {
    if (!toolsUsed.includes(toolId)) {
      const next = [...toolsUsed, toolId]
      setToolsUsed(next)
      saveProgressToStorage({ toolsUsed: next })
    }
    try {
      const isLocal = url.startsWith('/')
      if (isLocal) {
        const head = await fetch(url, { method: 'HEAD' })
        if (!head.ok) {
          alert('Resource not available yet. Opening a helpful fallback page.')
          if (url.endsWith('.pdf')) {
            router.push('/tools')
          } else {
            router.push('/wiki/paws')
          }
          return
        }
      }
    } catch {}
    window.open(url, '_blank')
  }

  const handleProjectSaved = () => {
    if (!projectCompleted) {
      setProjectCompleted(true)
      saveProgressToStorage({ projectCompleted: true })
    }
  }

  useEffect(() => {
    const fetchModule = async () => {
      try {
        // If a track is selected, try track-specific API first
        if (trackId) {
          try {
            const res = await fetch(`/api/tracks/${trackId}/modules?moduleNumber=${moduleId}`)
            if (res.ok) {
              const json = await res.json()
              const trackModules = Array.isArray(json?.modules) ? json.modules : []
              if (json.success && trackModules.length > 0) {
                const tm = trackModules[0]
                setModule({
                  id: tm.id,
                  module_number: tm.module_number,
                  title: tm.title,
                  description: tm.description,
                  content: tm.content
                })
                return
              }
            }
          } catch (e) {
            console.error('Track module fetch failed, falling back to generic', e)
          }
        }

        // Fallback to generic modules table
        const { data, error } = await supabase
          .from('modules')
          .select('*')
          .eq('module_number', parseInt(moduleId))
          .single()

        if (error) {
          console.error('Error fetching module:', error)

          if (error.message?.includes('Supabase not configured')) {
            // Provide minimal mock for module 1-3 as before
            if (parseInt(moduleId) === 1) {
              setModule({
                id: 1,
                module_number: 1,
                title: 'Foundation: Understanding Recovery',
                description: 'Begin your recovery journey by building a solid foundation. This module introduces key concepts and establishes the mindset needed for lasting change.',
                content: {
                  lessons: [
                    {
                      type: 'reading',
                      title: 'The Stages of Change',
                      summary: 'Understanding stages from precontemplation to maintenance.',
                      external_url: 'https://www.verywellmind.com/stages-of-change-2795713',
                      button_text: 'Read Article'
                    }
                  ],
                  tools: []
                }
              })
            } else if (parseInt(moduleId) === 2) {
              setModule({
                id: 2,
                module_number: 2,
                title: 'Building Your Support System',
                description: 'Strengthen your support network and boundaries.',
                content: { lessons: [], tools: [] }
              })
            } else if (parseInt(moduleId) === 3) {
              setModule({
                id: 3,
                module_number: 3,
                title: 'From Values to Habits',
                description: 'Translate your core values into small, repeatable habits.',
                content: { lessons: [], tools: [] }
              })
            } else {
              setError('Module not found')
            }
          } else if ('code' in error && (error as any).code === 'PGRST116') {
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
      loadProgressFromStorage()
    }
  }, [moduleId, trackId])

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
  const isModule3 = module.module_number === 3
  const isModule4 = module.module_number === 4
  const isModule5 = module.module_number === 5
  const isModule6 = module.module_number === 6
  const isModule7 = module.module_number === 7
  const isModule8 = module.module_number === 8
  const isModule9 = module.module_number === 9
  const isTrackModule9 = trackId && module.module_number === 9

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Link href={`/program${trackId ? `?track=${trackId}` : ''}`}>
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
                  {module.content.lessons.map((lesson, index) => {
                    const lessonId = `${module.module_number}:${lesson.title}`
                    const isDone = lessonsCompleted.includes(lessonId)
                    return (
                    <div key={index} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          lesson.type === 'reading' ? 'bg-blue-100' :
                          lesson.type === 'video' ? 'bg-red-100' :
                          lesson.type === 'audio' ? 'bg-purple-100' :
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
                          {lesson.type === 'audio' && (
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
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
                            {isDone && (
                              <span className="inline-flex items-center text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Done</span>
                            )}
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              lesson.type === 'reading' ? 'bg-blue-100 text-blue-700' :
                              lesson.type === 'video' ? 'bg-red-100 text-red-700' :
                              lesson.type === 'audio' ? 'bg-purple-100 text-purple-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {lesson.type === 'reading' ? 'Reading' :
                               lesson.type === 'video' ? 'Video' :
                               lesson.type === 'audio' ? 'Audio' : 'Tool'}
                            </span>
                          </div>
                          <p className="text-neutral-600 text-sm mb-2">{lesson.summary}</p>
                          <div className="flex items-center space-x-4 text-xs text-neutral-500">
                            {lesson.type === 'reading' && lesson.external_url && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-blue-600 hover:text-blue-700"
                                onClick={() => handleLessonClick(lessonId, lesson.external_url!, lesson.title)}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                            {lesson.type === 'video' && (lesson.video_id || lesson.external_url) && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-600 hover:text-red-700"
                                onClick={() => {
                                  const videoUrl = lesson.external_url || (lesson.video_id ? `https://www.youtube.com/watch?v=${lesson.video_id}` : '')
                                  if (videoUrl) {
                                    setVideoModal({ isOpen: true, title: lesson.title, url: videoUrl })
                                    handleLessonClick(lessonId, videoUrl, lesson.title)
                                  }
                                }}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                            {lesson.type === 'audio' && lesson.audio_url && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-purple-600 hover:text-purple-700"
                                onClick={() => handleLessonClick(lessonId, lesson.audio_url!, lesson.title)}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                            {lesson.type === 'tool' && lesson.pdf_url && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-green-600 hover:text-green-700"
                                onClick={() => handleLessonClick(lessonId, lesson.pdf_url!, lesson.title)}
                              >
                                {lesson.button_text} →
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              </div>
            )}

            {/* Action-Based Project */}
            {isModule1 ? (
              <PersonalBalanceSheet onSave={handleProjectSaved} />
            ) : isModule3 ? (
              <>
                <ValuesToHabitsPlanner onSave={handleProjectSaved} />
                <div className="mt-6">
                  <IdentityHabitsGame onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
                </div>
              </>
            ) : isModule4 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Action-Based Project: Urge Surf Runner (3D)</h2>
                  </div>
                  <p className="text-neutral-600">Practice avoiding triggers and collecting coping tools while you move between lanes. Use the experience to reinforce HALT checks and if-then planning.</p>
                </div>
                <RelapseRunner3D onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
              </div>
            ) : isModule5 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Action-Based Project: Life Stacker (3D)</h2>
                  </div>
                  <p className="text-neutral-600">Design a stable life by stacking small consistent habits across your core pillars. Perfect alignment represents identity-consistent actions.</p>
                </div>
                <LifeStacker3D onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
              </div>
            ) : isModule6 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Action-Based Project: BreathFlow (3D)</h2>
                  </div>
                  <p className="text-neutral-600">Practice paced breathing and phase awareness to reduce physiological arousal and build resilience. Match inhale/exhale with the guided cycle.</p>
                </div>
                <BreathFlow3D onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
              </div>
            ) : isModule7 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Action-Based Project: Community Builder</h2>
                  </div>
                  <p className="text-neutral-600">Design your connection plan: list supporters, draft invitations, and choose concrete actions that reinforce recovery through community and service.</p>
                </div>
                <CommunityBuilder onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Interactive Game: Support Network (3D)</h2>
                  </div>
                  <p className="text-neutral-600">Connect allies, avoid drains, and ride momentum boosts to practice building a supportive network under pressure.</p>
                </div>
                <div className="mt-2">
                  <SupportNetwork3D onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
                </div>
              </div>
            ) : isModule8 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Action-Based Project: Future Builder</h2>
                  </div>
                  <p className="text-neutral-600">Design your sustainable daily system across life domains. Select small, repeatable actions and finalize your plan.</p>
                </div>
                <FutureBuilder onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Interactive Game: Routine Architect (3D)</h2>
                  </div>
                  <p className="text-neutral-600">Stack well-aligned routine blocks to build a stable foundation. Better alignment earns more points.</p>
                </div>
                <div className="mt-2">
                  <RoutineArchitect3D onComplete={() => saveProgressToStorage({ projectCompleted: true })} />
                </div>
              </div>
            ) : isModule9 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Feelings Identification Tool</h2>
                  </div>
                  <p className="text-neutral-600">Identify what feelings you were trying to achieve through substance use and discover natural alternatives that can provide the same emotional benefits.</p>
                </div>
                <FeelingsIdentification />
                
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Personalized Natural Alternatives</h2>
                  </div>
                  <p className="text-neutral-600">Build your personal toolkit of healthy activities that help you achieve the feelings you want without substances.</p>
                </div>
                <PersonalizedAlternatives />
              </div>
            ) : isTrackModule9 ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Feelings Identification Tool</h2>
                  </div>
                  <p className="text-neutral-600">Identify what feelings you were trying to achieve through {trackId} use and discover natural alternatives that can provide the same emotional benefits.</p>
                </div>
                <FeelingsIdentification />
                
                <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-text">Personalized Natural Alternatives</h2>
                  </div>
                  <p className="text-neutral-600">Build your personal toolkit of healthy activities that help you achieve the feelings you want without {trackId}.</p>
                </div>
                <PersonalizedAlternatives />
              </div>
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
            {!isModule1 && !isModule3 && !isModule4 && !isModule5 && !isModule6 && !isModule7 && !isModule8 && !isModule9 && !isTrackModule9 && (
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
                  {module.content.tools.map((tool, index) => {
                    const toolId = `${module.module_number}:${tool.title}`
                    const used = toolsUsed.includes(toolId)
                    return (
                      <div key={index} className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                        <h4 className="font-medium text-text text-sm mb-1">{tool.title}</h4>
                        <p className="text-xs text-neutral-600 mb-2">{tool.summary}</p>
                        <Button variant="secondary" size="sm" className="w-full" onClick={() => handleToolClick(toolId, tool.wiki_url)}>
                          {used ? 'Opened' : tool.button_text}
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h3 className="font-semibold text-text mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Lessons Completed</span>
                  <span className="text-sm font-medium text-text">{lessonsCompleted.length}/{module.content?.lessons?.length || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Tools Used</span>
                  <span className="text-sm font-medium text-text">{toolsUsed.length}/{module.content?.tools?.length || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Project Status</span>
                  <span className="text-sm font-medium text-text">{projectCompleted ? 'Completed' : 'Not Started'}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="text-center">
                  <p className="text-sm text-neutral-600 mb-2">Module Progress</p>
                  {(() => {
                    const total = (module.content?.lessons?.length || 0) + (module.content?.tools?.length || 0) + 1
                    const done = lessonsCompleted.length + toolsUsed.length + (projectCompleted ? 1 : 0)
                    const pct = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0
                    return (
                      <>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${pct}%` }}></div>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">{pct}% Complete</p>
                      </>
                    )
                  })()}
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
                  <Link href={`/program/${module.module_number - 1}${trackId ? `?track=${trackId}` : ''}`}>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      ← Previous Module
                    </Button>
                  </Link>
                )}
                <Link href={`/program/${module.module_number + 1}${trackId ? `?track=${trackId}` : ''}`}>
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
      
      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, title: '', url: '' })}
        title={videoModal.title}
        url={videoModal.url}
      />
    </div>
  )
}

export default function ModulePage() {
  return (
    <Suspense fallback={
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
    }>
      <ModulePageContent />
    </Suspense>
  )
} 