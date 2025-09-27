'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { trackEngagement } from '@/lib/analytics'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [feedbackType, setFeedbackType] = useState<'bug' | 'feature' | 'general' | 'positive'>('general')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsSubmitting(true)
    
    try {
      // Track feedback submission
      trackEngagement('feedback_submitted', { 
        type: feedbackType, 
        hasEmail: email.length > 0,
        messageLength: message.length 
      })

      // In a real implementation, you'd send this to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false)
        setMessage('')
        setEmail('')
        setFeedbackType('general')
        onClose()
      }, 2000)
      
    } catch (error) {
      console.error('Failed to submit feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Share Your Feedback</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your feedback helps us improve Frehab for everyone in recovery.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What type of feedback is this?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'bug', label: '🐛 Bug Report', color: 'border-red-200 hover:bg-red-50' },
                  { value: 'feature', label: '💡 Feature Idea', color: 'border-blue-200 hover:bg-blue-50' },
                  { value: 'positive', label: '❤️ Positive', color: 'border-green-200 hover:bg-green-50' },
                  { value: 'general', label: '💬 General', color: 'border-gray-200 hover:bg-gray-50' }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFeedbackType(type.value as any)}
                    className={`p-3 border-2 rounded-lg text-sm font-medium transition-colors ${
                      feedbackType === type.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : `${type.color} text-gray-700`
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder={
                  feedbackType === 'bug' 
                    ? "Describe what happened and what you expected..." 
                    : feedbackType === 'feature'
                    ? "Tell us about the feature you'd like to see..."
                    : feedbackType === 'positive'
                    ? "What did you like? What's working well for you?"
                    : "Share your thoughts, suggestions, or questions..."
                }
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                Only provide if you want a response. We respect your anonymity.
              </p>
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className="flex-1"
                variant="primary"
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant="secondary"
                className="px-6"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
