'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

interface Result {
  score: number
  invitesSent: number
  actionsPlanned: number
  skippedSteps: number
  createdAt: string
  supporters: string[]
  actionItems: string[]
}

interface Props {
  onComplete?: (result: Result) => void
}

const DEFAULT_ACTION_SUGGESTIONS = [
  'Send a check-in text to an ally',
  'Schedule a 10-minute walk',
  'Post 1 supportive message in the community',
  'Prepare a HALT self-check reminder',
  'Set up a tea/decaf ritual for evenings',
]

export default function CommunityBuilder({ onComplete }: Props) {
  const [supporters, setSupporters] = useState<string[]>(['', '', ''])
  const [customAction, setCustomAction] = useState('')
  const [actionItems, setActionItems] = useState<string[]>([])
  const [skippedSteps, setSkippedSteps] = useState<number>(0)
  const [saving, setSaving] = useState(false)
  const [finished, setFinished] = useState(false)

  const canAddAction = customAction.trim().length > 0
  const invitesSent = useMemo(() => supporters.filter((s) => s.trim().length > 0).length, [supporters])

  const addSuggested = (s: string) => {
    if (!actionItems.includes(s)) setActionItems((arr) => [...arr, s])
  }

  const addCustom = () => {
    if (canAddAction) {
      setActionItems((arr) => [...arr, customAction.trim()])
      setCustomAction('')
    }
  }

  const removeAction = (idx: number) => {
    setActionItems((arr) => arr.filter((_, i) => i !== idx))
  }

  const markSkipped = () => setSkippedSteps((n) => n + 1)

  const completePlan = () => {
    setFinished(true)
  }

  const saveResult = useCallback(async () => {
    setSaving(true)
    try {
      const actionsPlanned = actionItems.length
      const score = invitesSent * 2 + actionsPlanned * 3 + (skippedSteps === 0 ? 5 : 0)
      const result: Result = {
        score,
        invitesSent,
        actionsPlanned,
        skippedSteps,
        createdAt: new Date().toISOString(),
        supporters: supporters.filter((s) => s.trim().length > 0),
        actionItems,
      }

      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 7,
          content: { type: 'module7_community_builder', result },
        })
        try {
          await supabase.rpc('award_achievements_for_module7_game', { p_user: user.id, p_score: result.score })
        } catch {}
      }
      onComplete?.(result)
    } finally {
      setSaving(false)
    }
  }, [actionItems, invitesSent, onComplete, skippedSteps, supporters])

  useEffect(() => {
    if (finished) {
      try {
        const stored = { supporters, actionItems, at: Date.now() }
        if (typeof window !== 'undefined') {
          localStorage.setItem('module7_community_builder', JSON.stringify(stored))
        }
      } catch {}
    }
  }, [finished, supporters, actionItems])

  if (finished) {
    const actionsPlanned = actionItems.length
    const score = invitesSent * 2 + actionsPlanned * 3 + (skippedSteps === 0 ? 5 : 0)
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Community Builder — Plan Summary</h3>
        <p className="text-neutral-600 mb-4">
          Invites: {invitesSent} • Actions: {actionsPlanned} • Skips: {skippedSteps} • Score: {score}
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="font-medium text-text mb-2">Supporters</div>
            <ul className="text-sm text-neutral-700 list-disc ml-5 space-y-1">
              {supporters.filter((s) => s.trim().length > 0).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
              {supporters.filter((s) => s.trim().length > 0).length === 0 && (
                <li className="text-neutral-500">No supporters listed</li>
              )}
            </ul>
          </div>
          <div>
            <div className="font-medium text-text mb-2">Action Items</div>
            <ul className="text-sm text-neutral-700 list-disc ml-5 space-y-1">
              {actionItems.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
              {actionItems.length === 0 && <li className="text-neutral-500">No actions added</li>}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={saveResult} disabled={saving}>
            {saving ? 'Saving…' : 'Save to Journal'}
          </Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>Start Over</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-2m-4 5H4a2 2 0 01-2-2V7a2 2 0 012-2h7l2 2h7a2 2 0 012 2v5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-text">Community Builder</h2>
      </div>

      <p className="text-neutral-600 mb-6">List a few supporters and plan concrete actions. Skipping steps is okay—just note it.</p>

      {/* Step 1: Supporters */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-text">Supporters to Invite</h3>
          <Button variant="ghost" size="sm" onClick={markSkipped}>Skip</Button>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {supporters.map((s, i) => (
            <input
              key={i}
              className="border border-neutral-300 rounded px-3 py-2 text-sm"
              placeholder={`Name or contact ${i + 1}`}
              value={s}
              onChange={(e) => {
                const val = e.target.value
                setSupporters((arr) => arr.map((x, idx) => (idx === i ? val : x)))
              }}
            />
          ))}
        </div>
      </div>

      {/* Step 2: Actions */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-text">Plan Concrete Actions</h3>
          <Button variant="ghost" size="sm" onClick={markSkipped}>Skip</Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          {DEFAULT_ACTION_SUGGESTIONS.map((s) => (
            <Button key={s} variant="secondary" size="sm" onClick={() => addSuggested(s)}>
              + {s}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border border-neutral-300 rounded px-3 py-2 text-sm"
            placeholder="Add a custom action"
            value={customAction}
            onChange={(e) => setCustomAction(e.target.value)}
          />
          <Button variant="primary" size="sm" disabled={!canAddAction} onClick={addCustom}>Add</Button>
        </div>
        {actionItems.length > 0 && (
          <div className="mt-3">
            <div className="text-sm font-medium text-neutral-700 mb-2">Your Actions</div>
            <div className="space-y-2">
              {actionItems.map((a, i) => (
                <div key={i} className="flex items-center justify-between bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm">
                  <span>{a}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeAction(i)}>Remove</Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Step 3: Finish */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="primary" onClick={completePlan}>Finish Plan</Button>
        <Button variant="secondary" onClick={() => { setSupporters(['', '', '']); setActionItems([]); setSkippedSteps(0) }}>Reset</Button>
      </div>
    </div>
  )
}


