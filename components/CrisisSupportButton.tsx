'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { trackCrisisSupport } from '@/lib/analytics'

export default function CrisisSupportButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const crisisResources = [
    {
      name: "988 Suicide & Crisis Lifeline",
      phone: "988",
      description: "24/7 emotional support and suicide prevention",
      action: () => {
        trackCrisisSupport('988_call')
        window.open('tel:988', '_self')
      }
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "24/7 treatment referral and information service",
      action: () => {
        trackCrisisSupport('samhsa_call')
        window.open('tel:1-800-662-4357', '_self')
      }
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 crisis support via text message",
      action: () => {
        trackCrisisSupport('crisis_text')
        window.open('sms:741741?&body=HOME', '_self')
      }
    },
    {
      name: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      description: "24/7 support for domestic violence situations",
      action: () => {
        trackCrisisSupport('domestic_violence_call')
        window.open('tel:1-800-799-7233', '_self')
      }
    }
  ]

  return (
    <>
      {/* Crisis Support Button - Always Visible */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => {
            trackCrisisSupport('modal_opened')
            setIsModalOpen(true)
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          size="sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">I Need Help Now</span>
            <span className="sm:hidden">Help</span>
          </div>
        </Button>
      </div>

      {/* Crisis Support Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Crisis Support Resources</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>If you're in immediate danger, call 911 or go to your nearest emergency room.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  These resources provide free, confidential support 24/7:
                </p>
              </div>

              <div className="space-y-3">
                {crisisResources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                    <Button
                      onClick={resource.action}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                      size="sm"
                    >
                      Call {resource.phone}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Remember:</strong> You are not alone. Recovery is possible, and help is always available.
                  These feelings will pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
