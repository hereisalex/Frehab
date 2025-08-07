'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/authContext'
import { supabase } from '@/lib/supabaseClient'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface ValueItem {
  id: string
  value: string
}

interface HabitItem {
  id: string
  valueRef: string
  habit: string
  frequency: 'daily' | 'weekly' | 'custom'
}

export default function ValuesToHabitsPlanner() {
  const { user } = useAuth()
  const [values, setValues] = useState<ValueItem[]>([])
  const [habits, setHabits] = useState<HabitItem[]>([])
  const [newValue, setNewValue] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string>('')

  const addValue = () => {
    const trimmed = newValue.trim()
    if (!trimmed) return
    const id = crypto.randomUUID()
    setValues(prev => [...prev, { id, value: trimmed }])
    setNewValue('')
  }

  const removeValue = (id: string) => {
    setValues(prev => prev.filter(v => v.id !== id))
    setHabits(prev => prev.filter(h => h.valueRef !== id))
  }

  const addHabit = (valueRef: string) => {
    const id = crypto.randomUUID()
    setHabits(prev => [
      ...prev,
      { id, valueRef, habit: '', frequency: 'daily' }
    ])
  }

  const updateHabit = (id: string, patch: Partial<HabitItem>) => {
    setHabits(prev => prev.map(h => (h.id === id ? { ...h, ...patch } : h)))
  }

  const removeHabit = (id: string) => {
    setHabits(prev => prev.filter(h => h.id !== id))
  }

  const isValid = () => {
    if (values.length === 0) return false
    const hasHabitForEachValue = values.every(v => habits.some(h => h.valueRef === v.id && h.habit.trim()))
    const allHabitsHaveText = habits.every(h => h.habit.trim())
    return hasHabitForEachValue && allHabitsHaveText
  }

  const handleSave = async () => {
    if (!user) {
      setError('Please log in to save your plan')
      return
    }

    if (!isValid()) {
      setError('Please add at least one value and one habit per value')
      return
    }

    setSaving(true)
    setError('')

    const payload = {
      type: 'values_to_habits_plan',
      values: values.map(v => ({ id: v.id, value: v.value })),
      habits: habits.map(h => ({ id: h.id, valueRef: h.valueRef, habit: h.habit, frequency: h.frequency })),
      completed_at: new Date().toISOString(),
    }

    try {
      const { error } = await supabase
        .from('journal_entries')
        .insert({
          user_id: user.id,
          module_number: 3,
          content: payload,
        })

      if (error) {
        if (error.message?.includes('Supabase not configured')) {
          // Dev mode fallback
          console.log('[Dev] Saved locally:', payload)
        } else {
          throw error
        }
      }

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (e) {
      console.error(e)
      setError('Failed to save. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-text">Values → Habits Planner</h2>
      </div>

      <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-lg p-6 border border-secondary-200 mb-6">
        <h3 className="font-semibold text-text mb-2">Design Your Recovery System</h3>
        <p className="text-neutral-600 text-sm">
          Turn your core values into small, consistent habits. Systems beat willpower. Build routines and
          supports that make the right choice the easy choice.
        </p>
      </div>

      {/* Values input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text mb-2">Add Your Core Values</label>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., Health, Family, Growth, Service"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <Button type="button" variant="primary" onClick={addValue} disabled={!newValue.trim()}>
            Add
          </Button>
        </div>
        {values.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {values.map(v => (
              <span key={v.id} className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                {v.value}
                <button
                  type="button"
                  className="text-neutral-500 hover:text-neutral-700"
                  onClick={() => removeValue(v.id)}
                  aria-label={`Remove ${v.value}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Habits mapping */}
      {values.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-text">Map Each Value to Concrete Habits</h3>
          {values.map(v => (
            <div key={v.id} className="border border-neutral-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-neutral-700"><span className="font-medium">Value:</span> {v.value}</div>
                <Button variant="secondary" size="sm" onClick={() => addHabit(v.id)}>+ Add habit</Button>
              </div>
              <div className="space-y-3">
                {habits.filter(h => h.valueRef === v.id).map(h => (
                  <div key={h.id} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
                    <div className="md:col-span-4">
                      <Input
                        placeholder="Describe the smallest possible action (e.g., Walk 5 minutes after lunch)"
                        value={h.habit}
                        onChange={(e) => updateHabit(h.id, { habit: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-1">
                      <select
                        className="w-full h-10 px-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={h.frequency}
                        onChange={(e) => updateHabit(h.id, { frequency: e.target.value as HabitItem['frequency'] })}
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                    <div className="md:col-span-1">
                      <Button variant="ghost" size="sm" onClick={() => removeHabit(h.id)}>Remove</Button>
                    </div>
                  </div>
                ))}
                {habits.filter(h => h.valueRef === v.id).length === 0 && (
                  <p className="text-sm text-neutral-500">No habits yet. Add one above.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Save */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-neutral-600">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Time Commitment: 30–60 minutes</span>
          </div>
        </div>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={saving || !isValid() || saved}
          className="min-w-[160px]"
        >
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Plan to Journal'}
        </Button>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}


