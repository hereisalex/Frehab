'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { createCheckoutSession } from '@/lib/stripe'
import { trackEngagement } from '@/lib/analytics'

interface CustomDonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CustomDonationModal({ isOpen, onClose }: CustomDonationModalProps) {
  const [amount, setAmount] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const donationAmount = Number(amount)
    if (!donationAmount || donationAmount <= 0) {
      return
    }

    setIsProcessing(true)
    trackEngagement('custom_donation_submitted', { amount: donationAmount })

    try {
      const { sessionId, url } = await createCheckoutSession(undefined, donationAmount)
      
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Error processing donation:', error)
      
      // Fallback to email if Stripe fails
      const subject = `Frehab Donation - $${donationAmount}`
      const body = `Hi Alex,\n\nI'd like to support Frehab with a $${donationAmount} donation. The online payment system seems to be having issues, so please let me know the best way to send this.\n\nThank you for creating this amazing recovery platform!\n\nBest regards`
      
      window.location.href = `mailto:here.is.alex@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    } finally {
      setIsProcessing(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Custom Donation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Support Frehab with a custom amount. Every donation helps keep this platform 
            free and anonymous for everyone in recovery.
          </p>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-purple-800 text-sm">
              💜 Your donation directly supports Alex, the solo creator with no income who built this platform.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Donation Amount (USD) *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="amount"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="10.00"
                required
              />
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="submit"
              disabled={isProcessing || !amount || Number(amount) <= 0}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              variant="primary"
            >
              {isProcessing ? 'Processing...' : `Donate $${amount || '0'}`}
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

        <div className="mt-4 text-xs text-gray-500 text-center">
          Secure payment processed by Stripe
        </div>
      </div>
    </div>
  )
}
