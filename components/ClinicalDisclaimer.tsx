'use client'

import { useState, useEffect } from 'react'

interface ClinicalDisclaimerProps {
  className?: string
  id?: string // Allow different disclaimers to be dismissed independently
}

export default function ClinicalDisclaimer({ className = "", id = "general" }: ClinicalDisclaimerProps) {
  const [isDismissed, setIsDismissed] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const storageKey = `disclaimer_dismissed_${id}`

  useEffect(() => {
    // Check if this disclaimer has been dismissed
    const dismissed = localStorage.getItem(storageKey)
    setIsDismissed(dismissed === 'true')
  }, [storageKey])

  const handleDismiss = () => {
    setIsAnimatingOut(true)
    
    // Small delay for animation
    setTimeout(() => {
      localStorage.setItem(storageKey, 'true')
      setIsDismissed(true)
    }, 150)
  }

  if (isDismissed) {
    return null
  }

  return (
    <div className={`bg-yellow-50 border border-yellow-200 rounded-lg p-4 transition-all duration-150 ${
      isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    } ${className}`}>
      <div className="flex items-start">
        <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <div className="flex-1 text-sm text-yellow-800">
          <p className="font-semibold mb-1">Important Medical Disclaimer</p>
          <p>
            This platform is a self-help tool and educational resource. It is not a substitute for professional medical advice, 
            diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions 
            you may have regarding a medical condition or substance use disorder. Never disregard professional medical advice or 
            delay seeking it because of something you have read on this platform.
          </p>
          <p className="text-xs text-yellow-600 mt-2 italic">
            Click the × to dismiss this disclaimer. You can restore all disclaimers using the "Reset Disclaimers" link in the footer.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="ml-3 flex-shrink-0 text-yellow-600 hover:text-yellow-800 transition-colors"
          aria-label="Dismiss disclaimer"
          title="Dismiss this disclaimer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
