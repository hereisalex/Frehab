'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'
import FeedbackModal from '../FeedbackModal'
import ContactForm from '../ContactForm'
import { trackEngagement } from '@/lib/analytics'
import { createCheckoutSession } from '@/lib/stripe'

export default function AlphaBanner() {
  const [showFeedback, setShowFeedback] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDonationClick = async () => {
    trackEngagement('alpha_banner_donate_clicked')
    
    // Default to $10 for quick banner donations, or redirect to full donation page
    const defaultAmount = 10
    
    setIsProcessing(true)
    
    try {
      const { sessionId, url } = await createCheckoutSession(undefined, defaultAmount)
      
      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Error processing donation:', error)
      
      // Fallback: show contact form for donation support
      alert('Payment system temporarily unavailable. Please try again or contact us for alternative donation methods.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-2 sm:mb-0">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>
                  Alpha Version - We&apos;re building the future of recovery support. 
                  <span className="hidden sm:inline"> Your input shapes this platform.</span>
                </span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => {
                  trackEngagement('alpha_banner_feedback_clicked')
                  setShowFeedback(true)
                }}
                size="sm"
                variant="ghost"
                className="text-white hover:text-orange-100 hover:bg-white/20 text-xs px-2 py-1 border border-white/30"
              >
                💬 Feedback
              </Button>
              <Button
                onClick={handleDonationClick}
                size="sm"
                variant="ghost"
                className="text-white hover:text-purple-100 hover:bg-white/20 text-xs px-2 py-1 border border-white/30"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : '💜 Support'}
              </Button>
              <Button
                onClick={() => {
                  trackEngagement('alpha_banner_contact_clicked')
                  setShowContactForm(true)
                }}
                size="sm"
                variant="ghost"
                className="text-white hover:text-blue-100 hover:bg-white/20 text-xs px-2 py-1 border border-white/30"
              >
                📧 Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal 
        isOpen={showFeedback} 
        onClose={() => setShowFeedback(false)} 
      />
      
      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  )
}
