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
          <h2 className="text-xl font-semibold text-slate-700 mb-6">Account Settings</h2>
          
          <div className="text-center py-8">
            <p className="text-slate-600 mb-4">
              LGBT+ Community Insights can be enabled when you select a recovery track.
            </p>
            <a 
              href="/program" 
              className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Choose Recovery Track
            </a>
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
