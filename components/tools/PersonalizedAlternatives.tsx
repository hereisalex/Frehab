'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useAuth } from '@/lib/authContext'

interface NaturalAlternative {
  id: number
  feeling_name: string
  alternative_type: string
  activity_name: string
  description: string
  time_required: string
  difficulty_level: string
  evidence_based: boolean
  cost_level: string
}

interface PersonalizedAlternative {
  id: number
  feeling_name: string
  alternative_activity: string
  personal_notes: string
  effectiveness_rating: number
  times_used: number
  is_favorite: boolean
  created_at: string
}

export default function PersonalizedAlternatives() {
  const { user } = useAuth()
  const [selectedFeeling, setSelectedFeeling] = useState('')
  const [naturalAlternatives, setNaturalAlternatives] = useState<NaturalAlternative[]>([])
  const [personalizedAlternatives, setPersonalizedAlternatives] = useState<PersonalizedAlternative[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAlternative, setNewAlternative] = useState({
    feeling_name: '',
    alternative_activity: '',
    personal_notes: '',
    effectiveness_rating: 5,
    is_favorite: false
  })

  const feelings = [
    'Happy', 'Excited', 'Confident', 'Relaxed', 'Peaceful', 'Connected', 'Proud', 'Grateful',
    'Hopeful', 'Loved', 'Sad', 'Anxious', 'Angry', 'Lonely', 'Stressed', 'Overwhelmed',
    'Frustrated', 'Guilty', 'Shame', 'Fear', 'Bored', 'Numb', 'Empty', 'Restless'
  ]

  useEffect(() => {
    loadNaturalAlternatives()
    loadPersonalizedAlternatives()
  }, [])

  const loadNaturalAlternatives = async () => {
    try {
      const { data, error } = await supabase
        .from('natural_alternatives')
        .select('*')
        .order('feeling_name, activity_name')

      if (error) throw error
      setNaturalAlternatives(data || [])
    } catch (error) {
      console.error('Error loading natural alternatives:', error)
    }
  }

  const loadPersonalizedAlternatives = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('user_personalized_alternatives')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPersonalizedAlternatives(data || [])
    } catch (error) {
      console.error('Error loading personalized alternatives:', error)
    }
  }

  const handleAddPersonalized = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    try {
      const { error } = await supabase
        .from('user_personalized_alternatives')
        .insert({
          user_id: user.id,
          feeling_name: newAlternative.feeling_name,
          alternative_activity: newAlternative.alternative_activity,
          personal_notes: newAlternative.personal_notes,
          effectiveness_rating: newAlternative.effectiveness_rating,
          is_favorite: newAlternative.is_favorite
        })

      if (error) throw error

      // Reload personalized alternatives
      await loadPersonalizedAlternatives()
      
      // Reset form
      setNewAlternative({
        feeling_name: '',
        alternative_activity: '',
        personal_notes: '',
        effectiveness_rating: 5,
        is_favorite: false
      })
      setShowAddForm(false)
    } catch (error) {
      console.error('Error adding personalized alternative:', error)
    }
  }

  const handleUpdateRating = async (id: number, rating: number) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('user_personalized_alternatives')
        .update({ effectiveness_rating: rating })
        .eq('id', id)
        .eq('user_id', user.id)

      if (error) throw error

      // Reload personalized alternatives
      await loadPersonalizedAlternatives()
    } catch (error) {
      console.error('Error updating rating:', error)
    }
  }

  const handleToggleFavorite = async (id: number, isFavorite: boolean) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('user_personalized_alternatives')
        .update({ is_favorite: isFavorite })
        .eq('id', id)
        .eq('user_id', user.id)

      if (error) throw error

      // Reload personalized alternatives
      await loadPersonalizedAlternatives()
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }

  const handleIncrementUsage = async (id: number) => {
    if (!user) return

    try {
      const currentAlternative = personalizedAlternatives.find(alt => alt.id === id)
      if (!currentAlternative) return

      const { error } = await supabase
        .from('user_personalized_alternatives')
        .update({ times_used: currentAlternative.times_used + 1 })
        .eq('id', id)
        .eq('user_id', user.id)

      if (error) throw error

      // Reload personalized alternatives
      await loadPersonalizedAlternatives()
    } catch (error) {
      console.error('Error incrementing usage:', error)
    }
  }

  const getFilteredAlternatives = (feeling: string) => {
    return naturalAlternatives.filter(alt => 
      alt.feeling_name.toLowerCase() === feeling.toLowerCase()
    )
  }

  const getPersonalizedForFeeling = (feeling: string) => {
    return personalizedAlternatives.filter(alt => 
      alt.feeling_name.toLowerCase() === feeling.toLowerCase()
    )
  }

  const getCostLevelColor = (level: string) => {
    switch (level) {
      case 'free': return 'text-green-600 bg-green-100'
      case 'low': return 'text-blue-600 bg-blue-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'high': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-600 bg-green-100'
      case 'intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'advanced': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Personalized Natural Alternatives
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover and customize natural alternatives for achieving the feelings you want. 
          Build your personal toolkit of healthy activities that work for you.
        </p>
      </div>

      {/* Feeling Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose a feeling to explore alternatives for:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {feelings.map(feeling => (
            <button
              key={feeling}
              onClick={() => setSelectedFeeling(feeling)}
              className={`p-3 rounded-lg border-2 text-center transition-colors ${
                selectedFeeling === feeling
                  ? 'border-blue-500 bg-blue-50 text-blue-800'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
              }`}
            >
              <span className="font-medium">{feeling}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedFeeling && (
        <div className="space-y-8">
          {/* Natural Alternatives Database */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Natural Alternatives for {selectedFeeling}
              </h3>
              <button
                onClick={() => {
                  setNewAlternative(prev => ({ ...prev, feeling_name: selectedFeeling }))
                  setShowAddForm(true)
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Add Your Own Alternative
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getFilteredAlternatives(selectedFeeling).map((alternative) => (
                <div key={alternative.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-gray-900">{alternative.activity_name}</h4>
                    {alternative.evidence_based && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Evidence-based
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{alternative.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getCostLevelColor(alternative.cost_level)}`}>
                      💰 {alternative.cost_level}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(alternative.difficulty_level)}`}>
                      📊 {alternative.difficulty_level}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                      ⏱️ {alternative.time_required}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setNewAlternative({
                        feeling_name: selectedFeeling,
                        alternative_activity: alternative.activity_name,
                        personal_notes: `Based on: ${alternative.description}`,
                        effectiveness_rating: 5,
                        is_favorite: false
                      })
                      setShowAddForm(true)
                    }}
                    className="w-full px-3 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                  >
                    Add to My Alternatives
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Your Personalized Alternatives */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Your Personalized Alternatives for {selectedFeeling}
            </h3>

            {getPersonalizedForFeeling(selectedFeeling).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getPersonalizedForFeeling(selectedFeeling).map((alternative) => (
                  <div key={alternative.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-900">{alternative.alternative_activity}</h4>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleFavorite(alternative.id, !alternative.is_favorite)}
                          className={`p-1 rounded-full ${
                            alternative.is_favorite 
                              ? 'text-yellow-500 hover:text-yellow-600' 
                              : 'text-gray-400 hover:text-yellow-500'
                          }`}
                        >
                          ⭐
                        </button>
                        <button
                          onClick={() => handleIncrementUsage(alternative.id)}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs hover:bg-blue-200"
                        >
                          Used {alternative.times_used} times
                        </button>
                      </div>
                    </div>

                    {alternative.personal_notes && (
                      <p className="text-gray-600 text-sm mb-4">{alternative.personal_notes}</p>
                    )}

                    <div className="flex items-center gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Effectiveness:</label>
                        <select
                          value={alternative.effectiveness_rating}
                          onChange={(e) => handleUpdateRating(alternative.id, parseInt(e.target.value))}
                          className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      </div>
                      <div className="text-sm text-gray-600">
                        Times used: <span className="font-medium">{alternative.times_used}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No personalized alternatives yet for {selectedFeeling}.</p>
                <p className="text-sm">Add some alternatives above to get started!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add New Alternative Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Your Own Alternative</h3>
            
            <form onSubmit={handleAddPersonalized} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Feeling
                </label>
                <input
                  type="text"
                  value={newAlternative.feeling_name}
                  onChange={(e) => setNewAlternative(prev => ({ ...prev, feeling_name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternative Activity
                </label>
                <input
                  type="text"
                  value={newAlternative.alternative_activity}
                  onChange={(e) => setNewAlternative(prev => ({ ...prev, alternative_activity: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Personal Notes
                </label>
                <textarea
                  value={newAlternative.personal_notes}
                  onChange={(e) => setNewAlternative(prev => ({ ...prev, personal_notes: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Why does this work for you? When do you use it?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Effectiveness Rating (1-10)
                </label>
                <select
                  value={newAlternative.effectiveness_rating}
                  onChange={(e) => setNewAlternative(prev => ({ ...prev, effectiveness_rating: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_favorite"
                  checked={newAlternative.is_favorite}
                  onChange={(e) => setNewAlternative(prev => ({ ...prev, is_favorite: e.target.checked }))}
                  className="mr-2"
                />
                <label htmlFor="is_favorite" className="text-sm text-gray-700">
                  Mark as favorite
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Add Alternative
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
