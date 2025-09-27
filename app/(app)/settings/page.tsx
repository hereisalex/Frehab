'use client'

import { useAuth } from '@/lib/authContext'
import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

interface UserPreferences {
  lgbt_insights_enabled: boolean
}

export default function SettingsPage() {
  const { user } = useAuth()
  const [preferences, setPreferences] = useState<UserPreferences>({
    lgbt_insights_enabled: false
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // Load user preferences
  useEffect(() => {
    const loadPreferences = async () => {
      if (!user) return

      try {
        const response = await fetch('/api/user/preferences')
        if (response.ok) {
          const data = await response.json()
          setPreferences(data.preferences)
        }
      } catch (error) {
        console.error('Failed to load preferences:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPreferences()
  }, [user])

  const handlePreferenceChange = async (key: keyof UserPreferences, value: boolean) => {
    if (!user) return

    setSaving(true)
    setMessage('')

    try {
      const response = await fetch('/api/user/preferences', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [key]: value
        })
      })

      if (response.ok) {
        const data = await response.json()
        setPreferences(data.preferences)
        setMessage('Preferences saved successfully!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('Failed to save preferences. Please try again.')
        setTimeout(() => setMessage(''), 5000)
      }
    } catch (error) {
      console.error('Failed to save preferences:', error)
      setMessage('Failed to save preferences. Please try again.')
      setTimeout(() => setMessage(''), 5000)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading settings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-700 mb-2">Settings</h1>
          <p className="text-slate-600">
            Customize your recovery experience and content preferences.
          </p>
        </div>
      </div>

      {/* Settings Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('successfully') 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
          <h2 className="text-xl font-semibold text-slate-700 mb-6">Content Preferences</h2>
          
          {/* LGBT+ Insights Toggle */}
          <div className="border border-neutral-200 rounded-lg p-6">
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
                <p className="text-slate-600 mb-4">
                  Enable additional content and insights specifically relevant to LGBT+ individuals in recovery. 
                  This includes community-specific challenges, triggers, and recovery strategies for methamphetamine, 
                  alcohol, and opioid addiction.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>What you'll get:</strong> Additional lessons, tools, and resources that address 
                    LGBT+ specific experiences with addiction, including social pressures, healthcare discrimination, 
                    and community-specific recovery challenges.
                  </p>
                </div>
              </div>
              <div className="ml-6">
                <button
                  onClick={() => handlePreferenceChange('lgbt_insights_enabled', !preferences.lgbt_insights_enabled)}
                  disabled={saving}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    preferences.lgbt_insights_enabled ? 'bg-primary-600' : 'bg-neutral-200'
                  } ${saving ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.lgbt_insights_enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Settings Section */}
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6 mt-6">
          <h2 className="text-xl font-semibold text-slate-700 mb-6">Account Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <p className="text-slate-600">{user?.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Account Created
              </label>
              <p className="text-slate-600">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown'}
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <h3 className="text-amber-800 font-medium mb-2">Privacy & Data</h3>
          <p className="text-amber-700 text-sm">
            Your preferences are stored securely and only used to customize your recovery content. 
            We never share your personal information or preferences with third parties.
          </p>
        </div>
      </div>
    </div>
  )
}
