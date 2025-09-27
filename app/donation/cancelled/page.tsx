'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { trackEngagement } from '@/lib/analytics'

export default function DonationCancelledPage() {
  useEffect(() => {
    trackEngagement('donation_cancelled')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="text-orange-500 text-6xl mb-6">💛</div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          No Worries!
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your donation was cancelled. Frehab will always be free to use, 
          and there are many other ways you can support our mission.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm font-medium mb-2">
            Other ways to help:
          </p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Share Frehab with someone who might benefit</li>
            <li>• Provide feedback to improve the platform</li>
            <li>• Join our community when it launches</li>
            <li>• Consider donating when you're able</li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <Link href="/program">
            <Button variant="primary" size="lg" className="w-full">
              Continue Your Recovery Journey
            </Button>
          </Link>
          
          <Link href="/">
            <Button variant="secondary" size="lg" className="w-full">
              Return to Homepage
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="text-purple-600 hover:text-purple-800 text-sm underline"
          >
            Try Donating Again
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-6">
          Questions or want to donate via other methods? 
          Contact here.is.alex@gmail.com
        </p>
      </div>
    </div>
  )
}
