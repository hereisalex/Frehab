'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useAuth } from '@/lib/authContext'

interface FeelingsEntry {
  id: string
  timestamp: Date
  feelingName: string
  feelingCategory: 'positive' | 'negative' | 'neutral'
  intensityBeforeUse: number
  intensityAfterUse: number
  substanceUsed: string
  situationContext: string
  naturalAlternatives: string[]
}

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

export default function FeelingsIdentification() {
  const { user } = useAuth()
  const [entries, setEntries] = useState<FeelingsEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [naturalAlternatives, setNaturalAlternatives] = useState<NaturalAlternative[]>([])
  const [selectedFeeling, setSelectedFeeling] = useState('')
  const [formData, setFormData] = useState({
    feelingName: '',
    feelingCategory: 'positive' as 'positive' | 'negative' | 'neutral',
    intensityBeforeUse: 5,
    intensityAfterUse: 8,
    substanceUsed: '',
    situationContext: '',
    naturalAlternatives: [] as string[]
  })

  const feelings = [
    // Positive feelings
    { name: 'Happy', category: 'positive' },
    { name: 'Excited', category: 'positive' },
    { name: 'Confident', category: 'positive' },
    { name: 'Relaxed', category: 'positive' },
    { name: 'Peaceful', category: 'positive' },
    { name: 'Connected', category: 'positive' },
    { name: 'Proud', category: 'positive' },
    { name: 'Grateful', category: 'positive' },
    { name: 'Hopeful', category: 'positive' },
    { name: 'Loved', category: 'positive' },
    
    // Negative feelings
    { name: 'Sad', category: 'negative' },
    { name: 'Anxious', category: 'negative' },
    { name: 'Angry', category: 'negative' },
    { name: 'Lonely', category: 'negative' },
    { name: 'Stressed', category: 'negative' },
    { name: 'Overwhelmed', category: 'negative' },
    { name: 'Frustrated', category: 'negative' },
    { name: 'Guilty', category: 'negative' },
    { name: 'Shame', category: 'negative' },
    { name: 'Fear', category: 'negative' },
    
    // Neutral feelings
    { name: 'Bored', category: 'neutral' },
    { name: 'Numb', category: 'neutral' },
    { name: 'Empty', category: 'neutral' },
    { name: 'Restless', category: 'neutral' }
  ]

  const substances = [
    'Alcohol', 'Marijuana', 'Cocaine', 'Methamphetamine', 'Heroin', 'Prescription opioids',
    'Benzodiazepines', 'Stimulants', 'Hallucinogens', 'Other'
  ]

  useEffect(() => {
    loadEntries()
    loadNaturalAlternatives()
  }, [])

  const loadEntries = async () => {
    if (!user) return
    
    try {
      const { data, error } = await supabase
        .from('user_feelings_identification')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error

      const formattedEntries = data?.map((entry: any) => ({
        id: entry.id.toString(),
        timestamp: new Date(entry.created_at),
        feelingName: entry.feeling_name,
        feelingCategory: entry.feeling_category,
        intensityBeforeUse: entry.intensity_before_use,
        intensityAfterUse: entry.intensity_after_use,
        substanceUsed: entry.substance_used,
        situationContext: entry.situation_context,
        naturalAlternatives: entry.natural_alternatives || []
      })) || []

      setEntries(formattedEntries)
    } catch (error) {
      console.error('Error loading entries:', error)
    }
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) return

    try {
      const { error } = await supabase
        .from('user_feelings_identification')
        .insert({
          user_id: user.id,
          feeling_name: formData.feelingName,
          feeling_category: formData.feelingCategory,
          intensity_before_use: formData.intensityBeforeUse,
          intensity_after_use: formData.intensityAfterUse,
          substance_used: formData.substanceUsed,
          situation_context: formData.situationContext,
          natural_alternatives: formData.naturalAlternatives
        })

      if (error) throw error

      // Reload entries to show the new one
      await loadEntries()
      
      // Reset form
      setFormData({
        feelingName: '',
        feelingCategory: 'positive',
        intensityBeforeUse: 5,
        intensityAfterUse: 8,
        substanceUsed: '',
        situationContext: '',
        naturalAlternatives: []
      })
      setShowForm(false)
      setCurrentStep(1)
      setSelectedFeeling('')
    } catch (error) {
      console.error('Error saving entry:', error)
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleFeelingSelect = (feelingName: string, category: 'positive' | 'negative' | 'neutral') => {
    setFormData(prev => ({ ...prev, feelingName, feelingCategory: category }))
    setSelectedFeeling(feelingName)
    
    // Load natural alternatives for this feeling
    const alternatives = naturalAlternatives
      .filter(alt => alt.feeling_name.toLowerCase() === feelingName.toLowerCase())
      .map(alt => alt.activity_name)
    
    setFormData(prev => ({ ...prev, naturalAlternatives: alternatives }))
  }

  const getFilteredFeelings = (category: 'positive' | 'negative' | 'neutral') => {
    return feelings.filter(feeling => feeling.category === category)
  }

  const getNaturalAlternativesForFeeling = (feelingName: string) => {
    return naturalAlternatives.filter(alt => 
      alt.feeling_name.toLowerCase() === feelingName.toLowerCase()
    )
  }

  const steps = [
    { number: 1, title: 'Identify the Feeling', description: 'What feeling were you trying to achieve?' },
    { number: 2, title: 'Rate the Intensity', description: 'How intense was this feeling before and after use?' },
    { number: 3, title: 'Context & Substance', description: 'What was the situation and what did you use?' },
    { number: 4, title: 'Natural Alternatives', description: 'Discover healthy ways to achieve this feeling' }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Feelings Identification Tool
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Understanding what feelings you were trying to achieve through substance use is a crucial step in recovery. 
          This tool helps you identify those feelings and discover natural, healthy alternatives.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                currentStep >= step.number 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">{steps[currentStep - 1].title}</h3>
          <p className="text-gray-600">{steps[currentStep - 1].description}</p>
        </div>
      </div>

      {/* Form */}
      {showForm ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Step 1: Identify the Feeling */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                What feeling were you trying to achieve or change?
              </h4>
              
              <div className="space-y-6">
                {/* Positive Feelings */}
                <div>
                  <h5 className="text-lg font-medium text-green-800 mb-3">Positive Feelings</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getFilteredFeelings('positive').map(feeling => (
                      <button
                        key={feeling.name}
                        type="button"
                        onClick={() => handleFeelingSelect(feeling.name, 'positive')}
                        className={`p-3 rounded-lg border-2 text-left transition-colors ${
                          selectedFeeling === feeling.name
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : 'border-gray-200 hover:border-green-300 hover:bg-green-25'
                        }`}
                      >
                        <span className="font-medium">{feeling.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Negative Feelings */}
                <div>
                  <h5 className="text-lg font-medium text-red-800 mb-3">Negative Feelings (to escape or change)</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getFilteredFeelings('negative').map(feeling => (
                      <button
                        key={feeling.name}
                        type="button"
                        onClick={() => handleFeelingSelect(feeling.name, 'negative')}
                        className={`p-3 rounded-lg border-2 text-left transition-colors ${
                          selectedFeeling === feeling.name
                            ? 'border-red-500 bg-red-50 text-red-800'
                            : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
                        }`}
                      >
                        <span className="font-medium">{feeling.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Neutral Feelings */}
                <div>
                  <h5 className="text-lg font-medium text-gray-800 mb-3">Neutral Feelings</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getFilteredFeelings('neutral').map(feeling => (
                      <button
                        key={feeling.name}
                        type="button"
                        onClick={() => handleFeelingSelect(feeling.name, 'neutral')}
                        className={`p-3 rounded-lg border-2 text-left transition-colors ${
                          selectedFeeling === feeling.name
                            ? 'border-gray-500 bg-gray-50 text-gray-800'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-25'
                        }`}
                      >
                        <span className="font-medium">{feeling.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Rate Intensity */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Rate the intensity of this feeling
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How intense was this feeling BEFORE using? (1-10)
                  </label>
                  <select
                    required
                    value={formData.intensityBeforeUse}
                    onChange={(e) => setFormData(prev => ({ ...prev, intensityBeforeUse: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} - {i < 2 ? 'Very Low' : i < 5 ? 'Low' : i < 8 ? 'Moderate' : 'High'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How intense was this feeling AFTER using? (1-10)
                  </label>
                  <select
                    required
                    value={formData.intensityAfterUse}
                    onChange={(e) => setFormData(prev => ({ ...prev, intensityAfterUse: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} - {i < 2 ? 'Very Low' : i < 5 ? 'Low' : i < 8 ? 'Moderate' : 'High'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Context & Substance */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Tell us about the situation and substance
              </h4>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What substance did you use?
                  </label>
                  <select
                    required
                    value={formData.substanceUsed}
                    onChange={(e) => setFormData(prev => ({ ...prev, substanceUsed: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a substance</option>
                    {substances.map(substance => (
                      <option key={substance} value={substance}>{substance}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What was the situation or context? (optional)
                  </label>
                  <textarea
                    value={formData.situationContext}
                    onChange={(e) => setFormData(prev => ({ ...prev, situationContext: e.target.value }))}
                    placeholder="e.g., After a stressful day at work, during a celebration, when feeling lonely..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Natural Alternatives */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Natural alternatives for feeling {formData.feelingName}
              </h4>
              
              <div className="space-y-4">
                {getNaturalAlternativesForFeeling(formData.feelingName).map((alternative, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{alternative.activity_name}</h5>
                        <p className="text-gray-600 text-sm mt-1">{alternative.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>⏱️ {alternative.time_required}</span>
                          <span>📊 {alternative.difficulty_level}</span>
                          <span>💰 {alternative.cost_level}</span>
                          {alternative.evidence_based && <span>✅ Evidence-based</span>}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const newAlternatives = formData.naturalAlternatives.includes(alternative.activity_name)
                            ? formData.naturalAlternatives.filter(alt => alt !== alternative.activity_name)
                            : [...formData.naturalAlternatives, alternative.activity_name]
                          setFormData(prev => ({ ...prev, naturalAlternatives: newAlternatives }))
                        }}
                        className={`ml-4 px-3 py-1 rounded-full text-sm ${
                          formData.naturalAlternatives.includes(alternative.activity_name)
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-gray-100 text-gray-600 border border-gray-300'
                        }`}
                      >
                        {formData.naturalAlternatives.includes(alternative.activity_name) ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.feelingName}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save Entry
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Feelings Identification
          </button>
        </div>
      )}

      {/* Entries List */}
      {entries.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Feelings Entries</h3>
          <div className="space-y-4">
            {entries.map(entry => (
              <div key={entry.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      Feeling: {entry.feelingName}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    entry.feelingCategory === 'positive' ? 'bg-green-100 text-green-800' :
                    entry.feelingCategory === 'negative' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {entry.feelingCategory}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Intensity before use: <span className="font-medium">{entry.intensityBeforeUse}/10</span></p>
                    <p className="text-sm text-gray-600">Intensity after use: <span className="font-medium">{entry.intensityAfterUse}/10</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Substance: <span className="font-medium">{entry.substanceUsed}</span></p>
                    {entry.situationContext && (
                      <p className="text-sm text-gray-600">Context: <span className="font-medium">{entry.situationContext}</span></p>
                    )}
                  </div>
                </div>
                
                {entry.naturalAlternatives.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Natural alternatives:</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.naturalAlternatives.map((alternative, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {alternative}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
