'use client'

import { useEffect, useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

interface Round {
  id: string
  trigger: string
  context: string
  goodOptions: string[]
  allOptions: string[]
}

interface GameResult {
  score: number
  total: number
  createdAt: string
  chosenPlans: Array<{ trigger: string; plan: string }>
}

interface Props {
  onComplete?: (result: GameResult) => void
}

const ALL_ROUNDS: Round[] = [
  {
    id: 'dinner-urge',
    trigger: 'Strong urge after dinner',
    context: 'Evenings, 7–9pm at home',
    goodOptions: [
      "If it's after dinner and I feel an urge, then I will start a 3-minute walk and text my ally.",
      "If I finish eating, then I will brew tea and put my phone in the other room for 10 minutes.",
    ],
    allOptions: [
      "If it's after dinner and I feel an urge, then I will start a 3-minute walk and text my ally.",
      'I will use TikTok until the craving goes away.',
      "If I finish eating, then I will brew tea and put my phone in the other room for 10 minutes.",
      'I will think about how strong I am.',
    ],
  },
  {
    id: 'lonely',
    trigger: 'Feeling lonely on weekend afternoons',
    context: 'Saturday & Sunday 1–4pm',
    goodOptions: [
      'If it is 2pm on Saturday, then I will post one message in the community and invite a walk.',
      'If I notice loneliness, then I will complete one item from my coping menu and call a friend.',
    ],
    allOptions: [
      'If it is 2pm on Saturday, then I will post one message in the community and invite a walk.',
      'I will lie down and wait for it to pass.',
      'If I notice loneliness, then I will complete one item from my coping menu and call a friend.',
      'I will snack without a plan.',
    ],
  },
  {
    id: 'stress',
    trigger: 'Work stress peaks before deadlines',
    context: 'Weekdays 3–5pm',
    goodOptions: [
      'If it is 4pm and I feel stress, then I will do 4-7-8 breathing and write a 3-item next list.',
      'If my shoulders feel tense, then I will stretch for 2 minutes and drink water.',
    ],
    allOptions: [
      'If it is 4pm and I feel stress, then I will do 4-7-8 breathing and write a 3-item next list.',
      'I will push through without breaks.',
      'If my shoulders feel tense, then I will stretch for 2 minutes and drink water.',
      'I will multitask more.',
    ],
  },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function IdentityHabitsGame({ onComplete }: Props) {
  const rounds = useMemo(() => shuffle(ALL_ROUNDS).slice(0, 3), [])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [choices, setChoices] = useState<Array<{ trigger: string; plan: string }>>([])
  const [finished, setFinished] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const current = rounds[currentIdx]

  const handleChoice = (plan: string) => {
    const isGood = current.goodOptions.includes(plan)
    setScore((s) => s + (isGood ? 1 : 0))
    setChoices((prev) => [...prev, { trigger: current.trigger, plan }])
    if (currentIdx + 1 < rounds.length) {
      setCurrentIdx((i) => i + 1)
    } else {
      setFinished(true)
    }
  }

  const saveResult = async () => {
    setSubmitting(true)
    try {
      const result: GameResult = {
        score,
        total: rounds.length,
        createdAt: new Date().toISOString(),
        chosenPlans: choices,
      }
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 3,
          content: {
            type: 'module3_identity_habits_game',
            result,
          },
        })
        try {
          await supabase.rpc('award_achievements_for_module3_game', { p_user: user.id, p_score: result.score, p_total: result.total })
        } catch (e) {
          // best-effort
        }
      }
      onComplete?.(result)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (finished) {
      try {
        const stored = {
          score,
          total: rounds.length,
          choices,
          at: Date.now(),
        }
        if (typeof window !== 'undefined') {
          localStorage.setItem('module3_identity_habits_game', JSON.stringify(stored))
        }
      } catch {}
    }
  }, [finished, score, rounds.length, choices])

  if (finished) {
    const pct = Math.round((score / rounds.length) * 100)
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Interactive Game Results</h3>
        <p className="text-neutral-600 mb-4">You scored {score} / {rounds.length} ({pct}%).</p>
        <div className="space-y-2 mb-4">
          {choices.map((c, i) => (
            <div key={i} className="text-sm text-neutral-700">
              <span className="font-medium">Trigger:</span> {c.trigger}
              <br />
              <span className="font-medium">Your plan:</span> {c.plan}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={saveResult} disabled={submitting}>
            {submitting ? 'Saving…' : 'Save to Journal'}
          </Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>Play Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text">Identity Habits Game</h3>
      </div>

      <div className="mb-4 text-sm text-neutral-600">
        Choose the best if-then plan for the situation. Plans that are small, obvious, satisfying, and identity-linked score points.
      </div>

      <div className="mb-4 text-sm text-neutral-500">Round {currentIdx + 1} of {rounds.length}</div>

      <div className="mb-4">
        <div className="font-medium text-text">Trigger</div>
        <div className="text-neutral-700">{current.trigger}</div>
      </div>
      <div className="mb-6">
        <div className="font-medium text-text">Context</div>
        <div className="text-neutral-700">{current.context}</div>
      </div>

      <div className="space-y-3">
        {shuffle(current.allOptions).map((opt) => (
          <Button key={opt} variant="secondary" className="w-full justify-start" onClick={() => handleChoice(opt)}>
            {opt}
          </Button>
        ))}
      </div>
    </div>
  )
}
