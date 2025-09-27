'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { trackEngagement } from '@/lib/analytics'

export default function DonationSuccessPage() {
  useEffect(() => {
    trackEngagement('donation_completed')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="text-green-600 text-6xl mb-6">💜</div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You for Supporting Frehab!
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your donation directly enables continued development of this free, anonymous recovery platform. 
          You're helping keep recovery support accessible to everyone who needs it.
        </p>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
          <p className="text-purple-800 text-sm">
            <strong>What your donation supports:</strong>
          </p>
          <ul className="text-purple-700 text-sm mt-2 space-y-1">
            <li>• Server costs and platform maintenance</li>
            <li>• New recovery tools and features</li>
            <li>• Keeping Frehab completely free</li>
            <li>• Supporting the solo creator (Alex)</li>
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
        </div>
        
        <p className="text-xs text-gray-500 mt-6">
          You should receive an email receipt shortly. If you have any questions, 
          feel free to reach out to here.is.alex@gmail.com
        </p>
      </div>
    </div>
  )
}
