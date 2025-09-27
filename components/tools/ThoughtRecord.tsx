'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackToolUsage } from '@/lib/analytics'

interface ThoughtEntry {
  id: string
  timestamp: Date
  situation: string
  emotion: string
  emotionIntensity: number
  automaticThought: string
  evidence: string
  alternativeThought: string
  newEmotion: string
  newEmotionIntensity: number
}

export default function ThoughtRecord() {
  const [entries, setEntries] = useState<ThoughtEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    situation: '',
    emotion: '',
    emotionIntensity: 5,
    automaticThought: '',
    evidence: '',
    alternativeThought: '',
    newEmotion: '',
    newEmotionIntensity: 5
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newEntry: ThoughtEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      ...formData
    }
    
    setEntries(prev => [newEntry, ...prev])
    
    // Track tool usage
    trackToolUsage('thought_record')
    
    setFormData({
      situation: '',
      emotion: '',
      emotionIntensity: 5,
      automaticThought: '',
      evidence: '',
      alternativeThought: '',
      newEmotion: '',
      newEmotionIntensity: 5
    })
    setShowForm(false)
    setCurrentStep(1)
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const emotions = [
    'Angry', 'Anxious', 'Depressed', 'Frustrated', 'Guilty', 'Happy', 'Hopeful',
    'Irritated', 'Lonely', 'Overwhelmed', 'Peaceful', 'Sad', 'Stressed', 'Worried'
  ]

  const steps = [
    { number: 1, title: 'Situation & Emotion', description: 'What happened and how did you feel?' },
    { number: 2, title: 'Automatic Thoughts', description: 'What thoughts went through your mind?' },
    { number: 3, title: 'Challenge Thoughts', description: 'What evidence supports or contradicts these thoughts?' },
    { number: 4, title: 'Alternative & Outcome', description: 'What\'s a more balanced thought? How do you feel now?' }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">CBT Thought Record</h2>
          <p className="text-gray-600">
            Use this tool to identify and challenge negative automatic thoughts using Cognitive Behavioral Therapy techniques.
            This helps you develop more balanced thinking patterns.
          </p>
        </div>

        <div className="p-6">
          {!showForm ? (
            <div className="text-center">
              <Button
                onClick={() => setShowForm(true)}
                variant="primary"
                size="lg"
                className="mb-4"
              >
                Start New Thought Record
              </Button>
              <p className="text-sm text-gray-500">
                Having difficult thoughts or emotions? Work through them step by step.
              </p>
            </div>
          ) : (
            <div>
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    {steps[currentStep - 1].title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {steps[currentStep - 1].description}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Situation & Emotion */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Describe the situation *
                      </label>
                      <textarea
                        required
                        value={formData.situation}
                        onChange={(e) => setFormData(prev => ({ ...prev, situation: e.target.value }))}
                        placeholder="What happened? Where were you? Who was involved? Be specific but brief."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What emotion did you feel? *
                        </label>
                        <select
                          required
                          value={formData.emotion}
                          onChange={(e) => setFormData(prev => ({ ...prev, emotion: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an emotion</option>
                          {emotions.map(emotion => (
                            <option key={emotion} value={emotion}>{emotion}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Intensity (1-10) *
                        </label>
                        <select
                          required
                          value={formData.emotionIntensity}
                          onChange={(e) => setFormData(prev => ({ ...prev, emotionIntensity: parseInt(e.target.value) }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} - {i < 2 ? 'Mild' : i < 5 ? 'Moderate' : i < 8 ? 'Strong' : 'Intense'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Automatic Thoughts */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What automatic thoughts went through your mind? *
                      </label>
                      <textarea
                        required
                        value={formData.automaticThought}
                        onChange={(e) => setFormData(prev => ({ ...prev, automaticThought: e.target.value }))}
                        placeholder="What were you thinking when you felt this emotion? What thoughts popped into your head automatically?"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Common patterns: all-or-nothing thinking, catastrophizing, mind reading, fortune telling
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Challenge Thoughts */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What evidence supports or contradicts this thought? *
                      </label>
                      <textarea
                        required
                        value={formData.evidence}
                        onChange={(e) => setFormData(prev => ({ ...prev, evidence: e.target.value }))}
                        placeholder="What facts support this thought? What facts contradict it? What would you tell a friend having this thought?"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="text-xs text-gray-500 mt-1">
                        <p><strong>Helpful questions:</strong></p>
                        <ul className="list-disc list-inside mt-1">
                          <li>Is this thought based on facts or feelings?</li>
                          <li>What would I tell a friend in this situation?</li>
                          <li>Have I been in similar situations before? What happened?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Alternative & Outcome */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What&apos;s a more balanced, realistic thought? *
                      </label>
                      <textarea
                        required
                        value={formData.alternativeThought}
                        onChange={(e) => setFormData(prev => ({ ...prev, alternativeThought: e.target.value }))}
                        placeholder="Based on the evidence, what's a more balanced way to think about this situation?"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How do you feel now?
                        </label>
                        <select
                          value={formData.newEmotion}
                          onChange={(e) => setFormData(prev => ({ ...prev, newEmotion: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an emotion</option>
                          {emotions.map(emotion => (
                            <option key={emotion} value={emotion}>{emotion}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New intensity (1-10)
                        </label>
                        <select
                          value={formData.newEmotionIntensity}
                          onChange={(e) => setFormData(prev => ({ ...prev, newEmotionIntensity: parseInt(e.target.value) }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} - {i < 2 ? 'Mild' : i < 5 ? 'Moderate' : i < 8 ? 'Strong' : 'Intense'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <div>
                    {currentStep > 1 && (
                      <Button type="button" variant="secondary" onClick={prevStep}>
                        Previous
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      type="button" 
                      variant="secondary" 
                      onClick={() => {
                        setShowForm(false)
                        setCurrentStep(1)
                      }}
                    >
                      Cancel
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button type="button" variant="primary" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" variant="primary">
                        Save Thought Record
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Entries List */}
        {entries.length > 0 && (
          <div className="border-t border-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Thought Records</h3>
              <div className="space-y-4">
                {entries.slice(0, 3).map((entry) => (
                  <div key={entry.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">
                        {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {entry.emotion}: {entry.emotionIntensity}/10
                        </span>
                        {entry.newEmotion && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            → {entry.newEmotion}: {entry.newEmotionIntensity}/10
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Situation:</span>
                        <div className="text-gray-600">{entry.situation}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Automatic thought:</span>
                        <div className="text-gray-600">{entry.automaticThought}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Balanced thought:</span>
                        <div className="text-gray-600">{entry.alternativeThought}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {entries.length > 3 && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  Showing 3 most recent entries. You have {entries.length} total thought records.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
