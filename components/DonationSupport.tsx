'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { trackEngagement } from '@/lib/analytics'
import { createCheckoutSession } from '@/lib/stripe'
import CustomDonationModal from './CustomDonationModal'
import ContactForm from './ContactForm'

interface DonationSupportProps {
  variant?: 'banner' | 'card' | 'inline'
  className?: string
}

export default function DonationSupport({ variant = 'card', className = '' }: DonationSupportProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactFormType, setContactFormType] = useState<'partnership' | 'volunteer' | 'donation'>('partnership')

  const handleDonationClick = async (amount?: string) => {
    trackEngagement('donation_clicked', { amount, variant })
    
    if (!amount || amount === 'custom') {
      // Show custom donation modal
      setShowCustomModal(true)
      return
    }
    
    await processDonation(Number(amount))
  }
  
  const processDonation = async (amountInDollars: number) => {
    setIsProcessing(true)
    
    try {
      const { sessionId, url } = await createCheckoutSession(undefined, amountInDollars)
      
      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Error processing donation:', error)
      
      // Fallback to contact form if Stripe fails
      setContactFormType('donation')
      setShowContactForm(true)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleContactClick = () => {
    trackEngagement('contact_clicked', { variant })
    setContactFormType('partnership')
    setShowContactForm(true)
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 ${className}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex-1 text-center sm:text-left mb-3 sm:mb-0">
            <h3 className="font-semibold text-lg mb-1">Help Keep Frehab Free & Anonymous</h3>
            <p className="text-purple-100 text-sm">
              Built by one person with no income, driven by passion for accessible recovery support. 
              Your donation directly enables continued development and keeps this platform free for everyone.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button
              onClick={() => handleDonationClick()}
              className="bg-white text-purple-600 hover:bg-purple-50 border-0 font-semibold"
              size="sm"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : '💜 Donate'}
            </Button>
            <Button
              onClick={handleContactClick}
              className="bg-purple-700 hover:bg-purple-800 border border-purple-500 text-white"
              size="sm"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`bg-purple-50 border border-purple-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-purple-800 text-sm font-medium">
              💜 <strong>Support the Creator:</strong> Built by one person with no income who believes recovery support should be free for everyone.
            </p>
          </div>
          <div className="flex space-x-2 ml-4">
            <Button
              onClick={() => handleDonationClick()}
              variant="primary"
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-xs px-3 py-1"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Donate'}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Default card variant
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 ${className}`}>
      <div className="text-center">
        <div className="text-4xl mb-3">💜</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Support Frehab's Mission</h3>
        <p className="text-gray-600 mb-4">
          Frehab was conceived and created by a single person with no income, driven by a passion to make 
          recovery support accessible to everyone. This platform is free, anonymous, and ad-free, 
          funded entirely by people who believe in our mission.
        </p>

        {!showDetails ? (
          <div className="space-y-3">
            <Button
              onClick={() => setShowDetails(true)}
              variant="primary"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : '💜 Support Our Mission'}
            </Button>
            <p className="text-xs text-gray-500">
              100% of donations go toward platform development and maintenance
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {['5', '15', '25', '50'].map((amount) => (
                <Button
                  key={amount}
                  onClick={() => handleDonationClick(amount)}
                  variant="secondary"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  disabled={isProcessing}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            
            <Button
              onClick={() => handleDonationClick('custom')}
              variant="primary"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Custom Amount'}
            </Button>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Other Ways to Help</h4>
              <div className="space-y-2">
                <Button
                  onClick={handleContactClick}
                  variant="ghost"
                  size="sm"
                  className="w-full text-purple-600 hover:text-purple-800"
                >
                  📧 Partner with Us
                </Button>
                <Button
                  onClick={() => {
                    trackEngagement('volunteer_clicked')
                    setContactFormType('volunteer')
                    setShowContactForm(true)
                  }}
                  variant="ghost"
                  size="sm"
                  className="w-full text-purple-600 hover:text-purple-800"
                >
                  🤝 Volunteer
                </Button>
                <Button
                  onClick={() => {
                    trackEngagement('spread_word_clicked')
                    navigator.share?.({ title: 'Frehab - Free Anonymous Recovery', url: window.location.origin }) || 
                    navigator.clipboard?.writeText(window.location.origin)
                  }}
                  variant="ghost"
                  size="sm"
                  className="w-full text-purple-600 hover:text-purple-800"
                >
                  📢 Spread the Word
                </Button>
              </div>
            </div>

            <Button
              onClick={() => setShowDetails(false)}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back
            </Button>
          </div>
        )}

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            <strong>Our Promise:</strong> Frehab will always be free, anonymous, and ad-free. 
            Created by someone who understands the importance of accessible recovery support, 
            we're building a sustainable model focused on helping people, not making profit.
          </p>
        </div>
      </div>

      <CustomDonationModal 
        isOpen={showCustomModal} 
        onClose={() => setShowCustomModal(false)} 
      />

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
        defaultType={contactFormType}
        defaultSubject={contactFormType === 'donation' ? 'Donation Support Request' : undefined}
        defaultMessage={contactFormType === 'donation' ? 'Hi! I encountered an issue with the online donation system and would like to contribute in another way.' : 
                       contactFormType === 'volunteer' ? 'Hi! I\'d like to volunteer to help with Frehab. Please let me know how I can contribute!' : undefined}
      />
    </div>
  )
}
