'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface SobrietyDateModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (date: Date) => Promise<void>
  currentDate?: Date
}

export default function SobrietyDateModal({ isOpen, onClose, onSave, currentDate }: SobrietyDateModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>(
    currentDate ? currentDate.toISOString().split('T')[0] : ''
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleSave = async () => {
    if (!selectedDate) {
      setError('Please select a date')
      return
    }

    const date = new Date(selectedDate)
    const today = new Date()
    
    // Check if date is in the future
    if (date > today) {
      setError('Sobriety start date cannot be in the future')
      return
    }

    setLoading(true)
    setError('')

    try {
      await onSave(date)
      onClose()
    } catch (err) {
      setError('Failed to save date. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setError('')
    setSelectedDate(currentDate ? currentDate.toISOString().split('T')[0] : '')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Set Sobriety Start Date">
      <div className="space-y-6">
        <div>
          <p className="text-slate-600 mb-4">
            Select the date when you began your recovery journey. This will be used to calculate your sobriety time.
          </p>
          
          <Input
            label="Sobriety Start Date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            error={error}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="flex gap-3 justify-end">
          <Button
            variant="ghost"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Date'}
          </Button>
        </div>
      </div>
    </Modal>
  )
} 