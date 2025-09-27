'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackToolUsage } from '@/lib/analytics'

interface UrgeEntry {
  id: string
  timestamp: Date
  trigger: string
  intensity: number
  copingStrategy: string
  duration: string
  location: string
  mood: string
  notes: string
}

export default function UrgeTracker() {
  const [entries, setEntries] = useState<UrgeEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    trigger: '',
    intensity: 5,
    copingStrategy: '',
    duration: '',
    location: '',
    mood: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newEntry: UrgeEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      ...formData
    }
    
    setEntries(prev => [newEntry, ...prev])
    
    // Track tool usage
    trackToolUsage('urge_tracker')
    
    setFormData({
      trigger: '',
      intensity: 5,
      copingStrategy: '',
      duration: '',
      location: '',
      mood: '',
      notes: ''
    })
    setShowForm(false)
  }

  const intensityColors = {
    1: 'bg-green-100 text-green-800',
    2: 'bg-green-100 text-green-800',
    3: 'bg-yellow-100 text-yellow-800',
    4: 'bg-yellow-100 text-yellow-800',
    5: 'bg-orange-100 text-orange-800',
    6: 'bg-orange-100 text-orange-800',
    7: 'bg-red-100 text-red-800',
    8: 'bg-red-100 text-red-800',
    9: 'bg-red-200 text-red-900',
    10: 'bg-red-200 text-red-900'
  }

  const getIntensityColor = (intensity: number) => {
    return intensityColors[intensity as keyof typeof intensityColors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Urge & Craving Tracker</h2>
          <p className="text-gray-600">
            Track your urges and cravings to identify patterns and build effective coping strategies.
            This data stays private and helps you understand your recovery journey.
          </p>
        </div>

        {/* Quick Stats */}
        {entries.length > 0 && (
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{entries.length}</div>
                <div className="text-sm text-gray-600">Total Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(entries.reduce((sum, entry) => sum + entry.intensity, 0) / entries.length * 10) / 10}
                </div>
                <div className="text-sm text-gray-600">Avg Intensity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {entries.filter(entry => entry.intensity <= 3).length}
                </div>
                <div className="text-sm text-gray-600">Low Intensity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {entries.filter(entry => entry.copingStrategy.trim() !== '').length}
                </div>
                <div className="text-sm text-gray-600">Used Coping</div>
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          {!showForm ? (
            <div className="text-center">
              <Button
                onClick={() => setShowForm(true)}
                variant="primary"
                size="lg"
                className="mb-4"
              >
                Track New Urge/Craving
              </Button>
              <p className="text-sm text-gray-500">
                Having an urge? Log it here to track patterns and practice coping strategies.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What triggered this urge? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.trigger}
                    onChange={(e) => setFormData(prev => ({ ...prev, trigger: e.target.value }))}
                    placeholder="e.g., stress at work, saw alcohol ad, argument"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Intensity (1-10) *
                  </label>
                  <select
                    required
                    value={formData.intensity}
                    onChange={(e) => setFormData(prev => ({ ...prev, intensity: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} - {i < 2 ? 'Very Low' : i < 4 ? 'Low' : i < 6 ? 'Moderate' : i < 8 ? 'High' : 'Very High'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coping strategy used
                  </label>
                  <input
                    type="text"
                    value={formData.copingStrategy}
                    onChange={(e) => setFormData(prev => ({ ...prev, copingStrategy: e.target.value }))}
                    placeholder="e.g., deep breathing, called friend, went for walk"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How long did it last?
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select duration</option>
                    <option value="< 1 minute">Less than 1 minute</option>
                    <option value="1-5 minutes">1-5 minutes</option>
                    <option value="5-15 minutes">5-15 minutes</option>
                    <option value="15-30 minutes">15-30 minutes</option>
                    <option value="30+ minutes">30+ minutes</option>
                    <option value="Still ongoing">Still ongoing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location/Setting
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g., home, work, social event"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current mood
                  </label>
                  <select
                    value={formData.mood}
                    onChange={(e) => setFormData(prev => ({ ...prev, mood: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select mood</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Angry">Angry</option>
                    <option value="Anxious">Anxious</option>
                    <option value="Stressed">Stressed</option>
                    <option value="Bored">Bored</option>
                    <option value="Lonely">Lonely</option>
                    <option value="Tired">Tired</option>
                    <option value="Excited">Excited</option>
                    <option value="Neutral">Neutral</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any other details about this urge..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit" variant="primary">
                  Save Entry
                </Button>
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Entries List */}
        {entries.length > 0 && (
          <div className="border-t border-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Entries</h3>
              <div className="space-y-4">
                {entries.slice(0, 5).map((entry) => (
                  <div key={entry.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIntensityColor(entry.intensity)}`}>
                          Intensity: {entry.intensity}/10
                        </span>
                        <span className="text-sm text-gray-600">
                          {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Trigger:</span>
                        <div className="text-gray-600">{entry.trigger}</div>
                      </div>
                      {entry.copingStrategy && (
                        <div>
                          <span className="font-medium text-gray-700">Coping:</span>
                          <div className="text-gray-600">{entry.copingStrategy}</div>
                        </div>
                      )}
                      {entry.duration && (
                        <div>
                          <span className="font-medium text-gray-700">Duration:</span>
                          <div className="text-gray-600">{entry.duration}</div>
                        </div>
                      )}
                    </div>
                    {entry.notes && (
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-gray-700">Notes:</span>
                        <div className="text-gray-600">{entry.notes}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {entries.length > 5 && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  Showing 5 most recent entries. You have {entries.length} total entries.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
