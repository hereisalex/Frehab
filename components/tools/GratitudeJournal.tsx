'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackToolUsage } from '@/lib/analytics'

interface GratitudeEntry {
  id: string
  timestamp: Date
  gratitudes: string[]
  reflection: string
  mood: string
}

export default function GratitudeJournal() {
  const [entries, setEntries] = useState<GratitudeEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    gratitudes: ['', '', ''],
    reflection: '',
    mood: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Filter out empty gratitudes
    const filteredGratitudes = formData.gratitudes.filter(g => g.trim() !== '')
    
    if (filteredGratitudes.length === 0) {
      // Show a gentle validation message instead of alert
      const emptyFields = document.querySelectorAll('.gratitude-input')
      emptyFields.forEach(field => {
        if ((field as HTMLInputElement).value.trim() === '') {
          field.classList.add('border-red-300', 'bg-red-50')
          setTimeout(() => {
            field.classList.remove('border-red-300', 'bg-red-50')
          }, 3000)
        }
      })
      return
    }
    
    const newEntry: GratitudeEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      gratitudes: filteredGratitudes,
      reflection: formData.reflection,
      mood: formData.mood
    }
    
    setEntries(prev => [newEntry, ...prev])
    
    // Track tool usage
    trackToolUsage('gratitude_journal')
    
    setFormData({
      gratitudes: ['', '', ''],
      reflection: '',
      mood: ''
    })
    setShowForm(false)
  }

  const updateGratitude = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      gratitudes: prev.gratitudes.map((g, i) => i === index ? value : g)
    }))
  }

  const addGratitude = () => {
    if (formData.gratitudes.length < 10) {
      setFormData(prev => ({
        ...prev,
        gratitudes: [...prev.gratitudes, '']
      }))
    }
  }

  const removeGratitude = (index: number) => {
    if (formData.gratitudes.length > 1) {
      setFormData(prev => ({
        ...prev,
        gratitudes: prev.gratitudes.filter((_, i) => i !== index)
      }))
    }
  }

  const moods = [
    'Grateful', 'Peaceful', 'Happy', 'Content', 'Hopeful', 'Calm', 'Energized', 
    'Thoughtful', 'Blessed', 'Optimistic', 'Neutral', 'Reflective'
  ]

  const gratitudePrompts = [
    'Someone who helped me today',
    'A simple pleasure I enjoyed',
    'Something beautiful I noticed',
    'A skill or ability I have',
    'A memory that makes me smile',
    'Something about my health',
    'A place that brings me peace',
    'An opportunity I have',
    'Something I learned recently',
    'A challenge that helped me grow'
  ]

  const getStreakCount = () => {
    if (entries.length === 0) return 0
    
    let streak = 1
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    for (let i = 1; i < entries.length; i++) {
      const currentDate = new Date(entries[i-1].timestamp)
      const prevDate = new Date(entries[i].timestamp)
      currentDate.setHours(0, 0, 0, 0)
      prevDate.setHours(0, 0, 0, 0)
      
      const daysDiff = (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24)
      
      if (daysDiff === 1) {
        streak++
      } else {
        break
      }
    }
    
    return streak
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Gratitude Journal</h2>
          <p className="text-gray-600">
            Daily gratitude practice can improve mood, increase resilience, and support recovery. 
            Take a moment to reflect on the positive aspects of your life.
          </p>
        </div>

        {/* Stats */}
        {entries.length > 0 && (
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{entries.length}</div>
                <div className="text-sm text-gray-600">Total Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{getStreakCount()}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {entries.reduce((sum, entry) => sum + entry.gratitudes.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Things Noted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {Math.round(entries.reduce((sum, entry) => sum + entry.gratitudes.length, 0) / entries.length * 10) / 10}
                </div>
                <div className="text-sm text-gray-600">Avg per Entry</div>
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
                Add Gratitude Entry
              </Button>
              <p className="text-sm text-gray-500">
                What are you grateful for today? Even small things count.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What are you grateful for today? *
                </label>
                
                <div className="space-y-3">
                  {formData.gratitudes.map((gratitude, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mt-2">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          value={gratitude}
                          onChange={(e) => updateGratitude(index, e.target.value)}
                          placeholder={`Grateful for... (e.g., ${gratitudePrompts[index % gratitudePrompts.length]})`}
                          className="gratitude-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      {formData.gratitudes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeGratitude(index)}
                          className="flex-shrink-0 w-8 h-8 text-red-500 hover:text-red-700 mt-2"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {formData.gratitudes.length < 10 && (
                  <button
                    type="button"
                    onClick={addGratitude}
                    className="mt-3 text-sm text-green-600 hover:text-green-800 font-medium"
                  >
                    + Add another gratitude
                  </button>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How do you feel right now?
                </label>
                <select
                  value={formData.mood}
                  onChange={(e) => setFormData(prev => ({ ...prev, mood: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select your mood</option>
                  {moods.map(mood => (
                    <option key={mood} value={mood}>{mood}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional reflection (optional)
                </label>
                <textarea
                  value={formData.reflection}
                  onChange={(e) => setFormData(prev => ({ ...prev, reflection: e.target.value }))}
                  placeholder="Any thoughts about what you're grateful for? How does focusing on gratitude make you feel?"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">💡 Gratitude Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Be specific - instead of "family," try "my sister's encouraging text"</li>
                  <li>• Include small things - a warm cup of coffee, a stranger's smile</li>
                  <li>• Focus on people who've helped you or made you feel good</li>
                  <li>• Notice your senses - beautiful sights, sounds, smells, tastes</li>
                </ul>
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

        {/* Recent Entries */}
        {entries.length > 0 && (
          <div className="border-t border-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Gratitude Entries</h3>
              <div className="space-y-4">
                {entries.slice(0, 5).map((entry) => (
                  <div key={entry.id} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600 font-medium">
                        {entry.timestamp.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      {entry.mood && (
                        <span className="px-2 py-1 bg-white/70 text-green-800 text-xs rounded-full">
                          Feeling {entry.mood}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-gray-700">Grateful for:</span>
                        <ul className="mt-1 space-y-1">
                          {entry.gratitudes.map((gratitude, index) => (
                            <li key={index} className="text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {gratitude}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {entry.reflection && (
                        <div>
                          <span className="font-medium text-gray-700">Reflection:</span>
                          <div className="text-gray-600 italic mt-1">{entry.reflection}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {entries.length > 5 && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  Showing 5 most recent entries. You have {entries.length} total gratitude entries.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
