'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

interface Result {
  score: number
  actionsPlanned: number
  domainsCovered: number
  skippedSteps: number
  createdAt: string
  selected: Record<string, string[]>
}

interface Props {
  onComplete?: (result: Result) => void
}

const DOMAINS: Array<{ key: string; label: string; items: string[] }> = [
  { key: 'health', label: 'Health', items: ['10-min walk', 'Lights out 11pm', '2L water', 'Prep snacks'] },
  { key: 'relationships', label: 'Relationships', items: ['Daily check-in text', 'One call/wk', 'Invite weekend walk'] },
  { key: 'work_service', label: 'Work/Service', items: ['Top 3 daily', '15m tidy workspace', 'One helpful post'] },
  { key: 'play', label: 'Play', items: ['20m music', 'Game night', 'Sketch/doodle'] },
  { key: 'growth', label: 'Growth', items: ['10 pages reading', '15m course', 'Gratitude note'] },
]

export default function FutureBuilder({ onComplete }: Props) {
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [customItem, setCustomItem] = useState('')
  const [customDomain, setCustomDomain] = useState(DOMAINS[0].key)
  const [skippedSteps, setSkippedSteps] = useState(0)
  const [finished, setFinished] = useState(false)
  const [saving, setSaving] = useState(false)

  const toggle = (domain: string, item: string) => {
    setSelected((prev) => {
      const arr = prev[domain] || []
      const exists = arr.includes(item)
      return { ...prev, [domain]: exists ? arr.filter((i) => i !== item) : [...arr, item] }
    })
  }

  const addCustom = () => {
    const v = customItem.trim()
    if (!v) return
    setSelected((prev) => ({ ...prev, [customDomain]: [...(prev[customDomain] || []), v] }))
    setCustomItem('')
  }

  const domainsCovered = useMemo(() => Object.values(selected).filter((arr) => arr.length > 0).length, [selected])
  const actionsPlanned = useMemo(() => Object.values(selected).reduce((a, b) => a + b.length, 0), [selected])
  const score = useMemo(() => actionsPlanned * 2 + (domainsCovered >= 5 ? 5 : 0) + (skippedSteps === 0 ? 5 : 0), [actionsPlanned, domainsCovered, skippedSteps])

  const finish = () => setFinished(true)
  const skip = () => setSkippedSteps((n) => n + 1)

  const saveResult = useCallback(async () => {
    setSaving(true)
    try {
      const result: Result = {
        score,
        actionsPlanned,
        domainsCovered,
        skippedSteps,
        createdAt: new Date().toISOString(),
        selected,
      }
      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 8,
          content: { type: 'module8_future_builder', result },
        })
        try {
          await supabase.rpc('award_achievements_for_module8_game', { p_user: user.id, p_score: result.score })
        } catch {}
      }
      onComplete?.(result)
    } finally {
      setSaving(false)
    }
  }, [actionsPlanned, domainsCovered, onComplete, score, selected, skippedSteps])

  useEffect(() => {
    if (finished) {
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem('module8_future_builder', JSON.stringify({ selected, at: Date.now() }))
        }
      } catch {}
    }
  }, [finished, selected])

  if (finished) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Future Builder — Plan Summary</h3>
        <p className="text-neutral-600 mb-4">Actions: {actionsPlanned} • Domains: {domainsCovered} • Skips: {skippedSteps} • Score: {score}</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {DOMAINS.map((d) => (
            <div key={d.key}>
              <div className="font-medium text-text mb-2">{d.label}</div>
              <ul className="text-sm text-neutral-700 list-disc ml-5 space-y-1">
                {(selected[d.key] || []).map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
                {(selected[d.key] || []).length === 0 && <li className="text-neutral-500">No items</li>}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={saveResult} disabled={saving}>{saving ? 'Saving…' : 'Save to Journal'}</Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>Start Over</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-text">Future Builder</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={skip}>Skip Step</Button>
      </div>

      <p className="text-neutral-600 mb-4">Select small, repeatable actions across life domains. Add your own if needed.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {DOMAINS.map((d) => (
          <div key={d.key} className="border border-neutral-200 rounded-lg p-4">
            <div className="font-medium text-text mb-2">{d.label}</div>
            <div className="flex flex-wrap gap-2">
              {d.items.map((item) => {
                const active = (selected[d.key] || []).includes(item)
                return (
                  <button
                    key={item}
                    onClick={() => toggle(d.key, item)}
                    className={`text-xs px-3 py-1 rounded-full border ${active ? 'bg-primary-100 border-primary-300 text-primary-800' : 'bg-neutral-50 border-neutral-200 text-neutral-700'}`}
                  >
                    {active ? '✓ ' : ''}{item}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border border-neutral-200 rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <select
            value={customDomain}
            onChange={(e) => setCustomDomain(e.target.value)}
            className="text-sm border border-neutral-300 rounded px-2 py-1"
          >
            {DOMAINS.map((d) => (
              <option key={d.key} value={d.key}>{d.label}</option>
            ))}
          </select>
          <input
            className="flex-1 border border-neutral-300 rounded px-3 py-2 text-sm"
            placeholder="Add a custom action (e.g., 3-min stretch)"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
          />
          <Button variant="primary" size="sm" onClick={addCustom} disabled={!customItem.trim()}>Add</Button>
        </div>

        <div className="text-sm text-neutral-600">Actions planned: {actionsPlanned} • Domains covered: {domainsCovered} • Skips: {skippedSteps}</div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button variant="primary" onClick={finish}>Finish Plan</Button>
        <Button variant="secondary" onClick={() => { setSelected({}); setSkippedSteps(0) }}>Reset</Button>
      </div>
    </div>
  )
}


