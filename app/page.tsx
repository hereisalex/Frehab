'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'
import RecoveryTrackCarousel from '@/components/RecoveryTrackCarousel'
import DonationSupport from '@/components/DonationSupport'
import { trackEngagement } from '@/lib/analytics'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Recovery Journey
              <span className="block text-blue-600">Starts Here</span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              <strong>Free</strong>, <strong>anonymous</strong>, and <strong>evidence-based</strong> recovery support. 
              Get immediate access to tools, guidance, and community - no signup required.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-green-600 text-3xl mb-3">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Anonymous</h3>
                <p className="text-sm text-gray-600">No email, no personal info required. Your privacy is absolute.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-blue-600 text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based Tools</h3>
                <p className="text-sm text-gray-600">CBT techniques, urge tracking, and proven recovery methods.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-purple-600 text-3xl mb-3">🚨</div>
                <h3 className="font-semibold text-gray-900 mb-2">Crisis Support</h3>
                <p className="text-sm text-gray-600">24/7 crisis resources always available on every page.</p>
              </div>
            </div>

            {/* Recovery Track Selection */}
            <div className="space-y-6">
              <RecoveryTrackCarousel />

              {/* Existing User Section */}
              <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-sm text-gray-600 mb-3">
                  Already have progress saved?
                </p>
                <Link href="/login">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => trackEngagement('login_clicked')}
                  >
                    Login to Restore Progress →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Frehab Works</h2>
            <p className="text-lg text-gray-600">Simple, immediate, effective</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Path</h3>
              <p className="text-gray-600">Start with structured modules or jump into specific tools based on your immediate needs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn & Practice</h3>
              <p className="text-gray-600">Use evidence-based tools like urge tracking, CBT exercises, and progress monitoring.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Recovery</h3>
              <p className="text-gray-600">Track progress, build habits, and access support whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>

              {/* Support Section */}
              <div className="bg-purple-50 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Keep Frehab Free & Anonymous</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                      Frehab was conceived and created by a single person with no income, driven by the belief that 
                      recovery support should be accessible to everyone, regardless of insurance, income, or location.
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                      Every donation directly supports continued development and keeps this platform free, 
                      anonymous, and ad-free for people who need it most.
                    </p>
                  </div>
                  <div className="max-w-md mx-auto">
                    <DonationSupport variant="card" />
                  </div>
                </div>
              </div>

              {/* Clinical Disclaimer */}
              <div className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ClinicalDisclaimer id="homepage" />
                </div>
              </div>
    </div>
  )
} 