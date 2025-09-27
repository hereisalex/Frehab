'use client'

import { useState } from 'react'
import Link from 'next/link'
import DonationSupport from '../DonationSupport'
import ContactForm from '../ContactForm'

export default function Footer() {
  const [showContactForm, setShowContactForm] = useState(false)

  const resetDisclaimers = () => {
    // Clear all disclaimer dismissals from localStorage
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith('disclaimer_dismissed_')) {
        localStorage.removeItem(key)
      }
    })
    
    // Refresh page to show disclaimers again
    window.location.reload()
  }

  return (
    <>
      {/* Funding Banner */}
      <DonationSupport variant="banner" />
      
      <footer className="bg-white border-t border-neutral-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link href="/privacy" className="text-sm text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline text-neutral-400">•</span>
              <a href="tel:988" className="text-sm text-red-600 hover:text-red-800 font-medium">
                Crisis Support: 988
              </a>
              <span className="hidden sm:inline text-neutral-400">•</span>
              <button 
                onClick={() => setShowContactForm(true)}
                className="text-sm text-purple-600 hover:text-purple-800 underline"
              >
                Contact Us
              </button>
              <span className="hidden sm:inline text-neutral-400">•</span>
              <button 
                onClick={resetDisclaimers}
                className="text-xs text-gray-500 hover:text-gray-700 underline"
                title="Show medical disclaimers again"
              >
                Reset Disclaimers
              </button>
            </div>
            <p className="text-neutral-600 text-sm mb-2">
              © 2025 Frehab. A Minnesota-based non-profit project seeking funding to expand our mission.
            </p>
            <p className="text-neutral-500 text-xs mb-3">
              Frehab is a support tool and not a substitute for professional medical advice.
            </p>
            <p className="text-purple-600 text-xs font-medium">
              💜 Help us keep recovery support free and anonymous for everyone
            </p>
          </div>
        </div>
      </footer>

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  )
} 