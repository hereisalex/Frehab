'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { trackEngagement } from '@/lib/analytics'

interface RecoveryTrack {
  id: string
  name: string
  category: 'substance' | 'behavioral'
  icon: string
  description: string
  prevalence: string
  primaryColor: string
  secondaryColor: string
}

const recoveryTracks: RecoveryTrack[] = [
  {
    id: 'alcohol',
    name: 'Alcohol',
    category: 'substance',
    icon: '🍺',
    description: 'Support for alcohol use disorder and drinking cessation',
    prevalence: 'Most common',
    primaryColor: 'bg-amber-500',
    secondaryColor: 'bg-amber-50'
  },
  {
    id: 'methamphetamine',
    name: 'Methamphetamine',
    category: 'substance',
    icon: '⚡',
    description: 'Recovery support for methamphetamine addiction',
    prevalence: 'Growing concern',
    primaryColor: 'bg-red-500',
    secondaryColor: 'bg-red-50'
  },
  {
    id: 'opioids',
    name: 'Opioids/Heroin',
    category: 'substance',
    icon: '💊',
    description: 'Support for opioid addiction including heroin, fentanyl, and pills',
    prevalence: 'Crisis level',
    primaryColor: 'bg-purple-500',
    secondaryColor: 'bg-purple-50'
  },
  {
    id: 'marijuana',
    name: 'Marijuana/Cannabis',
    category: 'substance',
    icon: '🌿',
    description: 'Support for cannabis use disorder and dependency',
    prevalence: 'Increasingly common',
    primaryColor: 'bg-green-500',
    secondaryColor: 'bg-green-50'
  },
  {
    id: 'cocaine',
    name: 'Cocaine/Crack',
    category: 'substance',
    icon: '❄️',
    description: 'Recovery support for cocaine and crack cocaine addiction',
    prevalence: 'Persistent issue',
    primaryColor: 'bg-blue-500',
    secondaryColor: 'bg-blue-50'
  },
  {
    id: 'benzodiazepines',
    name: 'Benzodiazepines',
    category: 'substance',
    icon: '💤',
    description: 'Support for benzodiazepine dependency (Xanax, Valium, etc.)',
    prevalence: 'Prescription concern',
    primaryColor: 'bg-indigo-500',
    secondaryColor: 'bg-indigo-50'
  },
  {
    id: 'stimulants',
    name: 'Other Stimulants',
    category: 'substance',
    icon: '⚙️',
    description: 'Support for Adderall, Ritalin, and prescription stimulants',
    prevalence: 'Rising trend',
    primaryColor: 'bg-orange-500',
    secondaryColor: 'bg-orange-50'
  },
  {
    id: 'depressants',
    name: 'Other Depressants',
    category: 'substance',
    icon: '😴',
    description: 'Support for barbiturates, sedatives, and prescription downers',
    prevalence: 'Prescription concern',
    primaryColor: 'bg-slate-500',
    secondaryColor: 'bg-slate-50'
  },
  {
    id: 'social-media',
    name: 'Social Media',
    category: 'behavioral',
    icon: '📱',
    description: 'Break the cycle of compulsive social media use',
    prevalence: 'Epidemic levels',
    primaryColor: 'bg-pink-500',
    secondaryColor: 'bg-pink-50'
  },
  {
    id: 'video-games',
    name: 'Video Games',
    category: 'behavioral',
    icon: '🎮',
    description: 'Support for gaming addiction and excessive play',
    prevalence: 'Growing concern',
    primaryColor: 'bg-cyan-500',
    secondaryColor: 'bg-cyan-50'
  },
  {
    id: 'pornography',
    name: 'Pornography',
    category: 'behavioral',
    icon: '🚫',
    description: 'Recovery from pornography addiction and compulsive sexual behavior',
    prevalence: 'Widespread issue',
    primaryColor: 'bg-gray-500',
    secondaryColor: 'bg-gray-50'
  },
  {
    id: 'gambling',
    name: 'Gambling',
    category: 'behavioral',
    icon: '🎰',
    description: 'Support for gambling addiction and financial recovery',
    prevalence: 'Serious problem',
    primaryColor: 'bg-yellow-500',
    secondaryColor: 'bg-yellow-50'
  },
  {
    id: 'shopping',
    name: 'Shopping/Spending',
    category: 'behavioral',
    icon: '🛍️',
    description: 'Recovery from compulsive shopping and spending addiction',
    prevalence: 'Common struggle',
    primaryColor: 'bg-rose-500',
    secondaryColor: 'bg-rose-50'
  },
  {
    id: 'food',
    name: 'Food/Eating',
    category: 'behavioral',
    icon: '🍔',
    description: 'Support for binge eating and food addiction recovery',
    prevalence: 'Very common',
    primaryColor: 'bg-emerald-500',
    secondaryColor: 'bg-emerald-50'
  },
  {
    id: 'nicotine',
    name: 'Nicotine/Tobacco',
    category: 'substance',
    icon: '🚭',
    description: 'Support for quitting smoking, vaping, and tobacco products',
    prevalence: 'Extremely common',
    primaryColor: 'bg-gray-600',
    secondaryColor: 'bg-gray-50'
  },
  {
    id: 'work',
    name: 'Work/Career',
    category: 'behavioral',
    icon: '💼',
    description: 'Support for workaholism and unhealthy work patterns',
    prevalence: 'Widespread issue',
    primaryColor: 'bg-neutral-600',
    secondaryColor: 'bg-neutral-50'
  },
  {
    id: 'general',
    name: 'General Recovery',
    category: 'substance',
    icon: '🌟',
    description: 'Multi-substance or general addiction recovery support',
    prevalence: 'Comprehensive',
    primaryColor: 'bg-violet-500',
    secondaryColor: 'bg-violet-50'
  }
]

export default function RecoveryTrackCarousel() {
  const [selectedTrack, setSelectedTrack] = useState<RecoveryTrack | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lgbtInsightsEnabled, setLgbtInsightsEnabled] = useState(false)

  const handleTrackSelect = (track: RecoveryTrack) => {
    setSelectedTrack(track)
    trackEngagement('recovery_track_selected', { track: track.id, category: track.category })
  }

  const handleStartRecovery = () => {
    if (selectedTrack) {
      trackEngagement('start_recovery_clicked', { track: selectedTrack.id })
      // Navigate to program with track context and LGBT+ preference
      const url = `/program?track=${selectedTrack.id}${lgbtInsightsEnabled ? '&lgbt=true' : ''}`
      window.location.href = url
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(recoveryTracks.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(recoveryTracks.length / 3)) % Math.ceil(recoveryTracks.length / 3))
  }

  const getCurrentTracks = () => {
    const startIndex = currentIndex * 3
    return recoveryTracks.slice(startIndex, startIndex + 3)
  }

  if (selectedTrack) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
        <div className={`${selectedTrack.secondaryColor} rounded-lg p-6 mb-6`}>
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{selectedTrack.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{selectedTrack.name} Recovery</h3>
              <p className="text-sm text-gray-600 capitalize">{selectedTrack.category} • {selectedTrack.prevalence}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{selectedTrack.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Tailored recovery plan</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Specific coping strategies</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Trigger management</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Recovery community</span>
            </div>
          </div>
        </div>

        {/* LGBT+ Insights Toggle */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-medium text-slate-700">
                  LGBT+ Community Insights
                </h3>
                <div className="relative group">
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    <div className="max-w-xs">
                      <p className="font-medium mb-1">Why LGBT+ insights matter:</p>
                      <p>LGBT+ individuals face 2-3x higher rates of substance use disorders due to minority stress, discrimination, and social factors. Community-specific insights help make treatment more effective by addressing unique triggers and challenges.</p>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-3">
                Enable additional content and insights specifically relevant to LGBT+ individuals in recovery.
              </p>
            </div>
            <div className="ml-4">
              <button
                onClick={() => setLgbtInsightsEnabled(!lgbtInsightsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  lgbtInsightsEnabled ? 'bg-primary-600' : 'bg-neutral-200'
                } cursor-pointer`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    lgbtInsightsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleStartRecovery}
            variant="primary" 
            size="lg" 
            className={`w-full py-4 text-lg font-semibold ${selectedTrack.primaryColor} hover:opacity-90`}
          >
            Start {selectedTrack.name} Recovery Program
          </Button>
          
          <Button 
            onClick={() => setSelectedTrack(null)}
            variant="secondary" 
            size="sm" 
            className="w-full"
          >
            ← Choose Different Track
          </Button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>🔒 Privacy:</strong> Your track selection remains completely anonymous. 
            No personal data is stored or shared.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Recovery Track</h2>
        <p className="text-gray-600">
          Select the substance or behavior you want to address. Each track provides tailored support.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mb-6">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getCurrentTracks().map((track) => (
              <div
                key={track.id}
                onClick={() => handleTrackSelect(track)}
                className="cursor-pointer group hover:scale-105 transition-transform duration-200"
              >
                <div className={`${track.secondaryColor} rounded-lg p-4 border border-gray-200 group-hover:shadow-md transition-shadow h-48 flex flex-col`}>
                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-3xl mb-2">{track.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">{track.name}</h3>
                      <p className="text-xs text-gray-500 mb-2 capitalize">{track.category}</p>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-xs text-gray-600 leading-tight mb-2 px-1">{track.description}</p>
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full text-white ${track.primaryColor}`}>
                        {track.prevalence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {recoveryTracks.length > 3 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {recoveryTracks.length > 3 && (
        <div className="flex justify-center space-x-2 mb-6">
          {Array.from({ length: Math.ceil(recoveryTracks.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}

      {/* Alternative Options */}
      <div className="border-t border-gray-200 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            onClick={() => {
              trackEngagement('general_program_clicked')
              window.location.href = '/program'
            }}
            variant="secondary" 
            size="lg" 
            className="w-full"
          >
            🌟 General Recovery Program
          </Button>
          <Button 
            onClick={() => {
              trackEngagement('tools_only_clicked')
              window.location.href = '/tools'
            }}
            variant="secondary" 
            size="lg" 
            className="w-full"
          >
            🛠️ Use Recovery Tools Only
          </Button>
        </div>
      </div>
    </div>
  )
}
