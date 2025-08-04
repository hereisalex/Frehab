'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface GoalSetupModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (goalType: string, startDate?: Date, customDescription?: string) => Promise<void>
  currentGoalType?: string
  currentStartDate?: Date
  currentCustomDescription?: string
}

const goalOptions = [
  {
    id: 'abstinence',
    title: 'Track Sober Days',
    description: 'Monitor your abstinence journey with day-by-day tracking',
    icon: '🌱',
    color: 'primary'
  },
  {
    id: 'moderation',
    title: 'Track Reduction',
    description: 'Monitor your progress toward healthier consumption patterns',
    icon: '📉',
    color: 'secondary'
  },
  {
    id: 'custom',
    title: 'Custom Goal',
    description: 'Set a personalized recovery goal that works for you',
    icon: '🎯',
    color: 'accent'
  },
  {
    id: 'none',
    title: 'Hide Tracker',
    description: 'Focus on other aspects of your recovery journey',
    icon: '👁️',
    color: 'neutral'
  }
]

export default function GoalSetupModal({ isOpen, onClose, onSave, currentGoalType, currentStartDate, currentCustomDescription }: GoalSetupModalProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>(currentGoalType || '')
  const [startDate, setStartDate] = useState<string>(
    currentStartDate ? currentStartDate.toISOString().split('T')[0] : ''
  )
  const [customDescription, setCustomDescription] = useState<string>(currentCustomDescription || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleSave = async () => {
    if (!selectedGoal) {
      setError('Please select a goal type')
      return
    }

    // Validate start date for goals that need it
    if (selectedGoal !== 'none' && selectedGoal !== 'custom' && !startDate) {
      setError('Please select a start date')
      return
    }

    // Validate custom description for custom goals
    if (selectedGoal === 'custom' && !customDescription.trim()) {
      setError('Please enter a description for your custom goal')
      return
    }

    if (startDate) {
      const date = new Date(startDate)
      const today = new Date()
      
      if (date > today) {
        setError('Start date cannot be in the future')
        return
      }
    }

    setLoading(true)
    setError('')

    try {
      const goalStartDate = startDate ? new Date(startDate) : undefined
      await onSave(selectedGoal, goalStartDate, customDescription.trim())
      onClose()
    } catch (err) {
      setError('Failed to save goal. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setError('')
    setSelectedGoal(currentGoalType || '')
    setStartDate(currentStartDate ? currentStartDate.toISOString().split('T')[0] : '')
    setCustomDescription(currentCustomDescription || '')
    onClose()
  }

  const getGoalOption = (id: string) => goalOptions.find(option => option.id === id)

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Set Your Recovery Goal">
      <div className="space-y-6">
        <div>
          <p className="text-slate-600 mb-6">
            Choose how you'd like to track your recovery journey. You can change this anytime.
          </p>
          
          {/* Goal Options */}
          <div className="space-y-3 mb-6">
            {goalOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedGoal(option.id)}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  selectedGoal === option.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{option.icon}</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-slate-700 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Start Date Input (only show for goals that need it) */}
          {selectedGoal && selectedGoal !== 'none' && selectedGoal !== 'custom' && (
            <div className="border-t pt-4">
              <Input
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                error={error}
                max={new Date().toISOString().split('T')[0]}
                required
              />
              <p className="text-xs text-slate-500 mt-2">
                This will be your reference point for tracking progress.
              </p>
            </div>
          )}

          {/* Custom Goal Input */}
          {selectedGoal === 'custom' && (
            <div className="border-t pt-4">
              <Input
                label="Describe Your Goal"
                placeholder="e.g., Exercise for 30 minutes, Read for 20 minutes, Practice meditation..."
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                error={error}
                required
              />
              <p className="text-xs text-slate-500 mt-2">
                This will be your daily check-in goal. You'll mark it as complete each day.
              </p>
            </div>
          )}

          {/* Hide Tracker Confirmation */}
          {selectedGoal === 'none' && (
            <div className="border-t pt-4">
              <p className="text-sm text-slate-600">
                The goal tracker will be hidden from your dashboard. You can always enable it later.
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button
            variant="ghost"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Goal'}
          </Button>
        </div>
      </div>
    </Modal>
  )
} 