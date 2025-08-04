'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/authContext'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface PersonalBalanceSheetData {
  question1: string
  question2: string
  question3: string
  question4: string
}

interface PersonalBalanceSheetProps {
  onSave?: () => void
}

export default function PersonalBalanceSheet({ onSave }: PersonalBalanceSheetProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState<PersonalBalanceSheetData>({
    question1: '',
    question2: '',
    question3: '',
    question4: ''
  })

  const handleInputChange = (field: keyof PersonalBalanceSheetData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async () => {
    if (!user) {
      console.error('User not authenticated')
      return
    }

    setLoading(true)

    try {
      const result = await supabase
        .from('journal_entries')
        .insert({
          user_id: user.id,
          module_number: 1,
          content: {
            type: 'personal_balance_sheet',
            answers: formData,
            completed_at: new Date().toISOString()
          }
        })

      if (result.error) {
        console.error('Error saving journal entry:', result.error)
        if (result.error.message?.includes('Supabase not configured')) {
          // In development mode, just show success
          console.log('Mock save successful')
        } else {
          throw result.error
        }
      }

      setSaved(true)
      onSave?.()
      
      // Reset saved state after 3 seconds
      setTimeout(() => setSaved(false), 3000)
    } catch (error) {
      console.error('Error saving to journal:', error)
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = formData.question1.trim() && 
                     formData.question2.trim() && 
                     formData.question3.trim() && 
                     formData.question4.trim()

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-text">Personal Balance Sheet</h2>
      </div>
      
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
        <h3 className="font-semibold text-text mb-4">Your Recovery Vision Statement</h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          Create a personal vision statement that captures who you want to become and what recovery means to you. 
          This will serve as your compass throughout your journey.
        </p>
        
        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              1. What are your core values and what matters most to you in life?
            </label>
            <textarea
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Reflect on what truly matters to you, what you stand for, and what gives your life meaning..."
              value={formData.question1}
              onChange={(e) => handleInputChange('question1', e.target.value)}
            />
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              2. Who do you want to become? Describe the person you aspire to be.
            </label>
            <textarea
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Imagine your ideal self - what qualities, strengths, and characteristics would you have..."
              value={formData.question2}
              onChange={(e) => handleInputChange('question2', e.target.value)}
            />
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              3. What does recovery mean to you personally?
            </label>
            <textarea
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Define recovery in your own terms - what would it look like, feel like, and mean for your life..."
              value={formData.question3}
              onChange={(e) => handleInputChange('question3', e.target.value)}
            />
          </div>

          {/* Question 4 */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              4. Create your personal vision statement that inspires you.
            </label>
            <textarea
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Write a powerful, inspiring statement that captures your vision for recovery and the person you want to become..."
              value={formData.question4}
              onChange={(e) => handleInputChange('question4', e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-neutral-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Time Commitment: 1-2 hours</span>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            onClick={handleSave}
            disabled={loading || !isFormValid || saved}
            className="min-w-[140px]"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Saving...</span>
              </div>
            ) : saved ? (
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Saved!</span>
              </div>
            ) : (
              'Save to Journal'
            )}
          </Button>
        </div>
      </div>
    </div>
  )
} 