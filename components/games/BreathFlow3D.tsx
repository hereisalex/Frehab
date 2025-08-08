'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

interface GameResult {
  score: number
  accuracyPercent: number
  bestStreakSeconds: number
  cyclesCompleted: number
  durationMs: number
  createdAt: string
}

interface Props {
  onComplete?: (result: GameResult) => void
}

type Phase = 'inhale' | 'hold1' | 'exhale' | 'hold2'

function Lights() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[6, 10, 6]} intensity={0.8} />
    </>
  )
}

function Ring({ radius, color, opacity = 0.3 }: { radius: number; color: string; opacity?: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius * 0.98, radius, 64]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function Dot({ angle, radius, color }: { angle: number; radius: number; color: string }) {
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  return (
    <mesh position={[x, 0.05, y]}>
      <sphereGeometry args={[0.18, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function PhaseText({ text }: { text: string }) {
  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-center">
      <div className="inline-block bg-white/80 backdrop-blur rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
        {text}
      </div>
    </div>
  )
}

type LoopProps = {
  runningRef: React.MutableRefObject<boolean>
  finishedRef: React.MutableRefObject<boolean>
  startTimeRef: React.MutableRefObject<number>
  lastFrameRef: React.MutableRefObject<number>
  durationMs: number
  cycleMs: number
  setExpectedPhase: React.Dispatch<React.SetStateAction<Phase>>
  setElapsedMs: React.Dispatch<React.SetStateAction<number>>
  setMatchMs: React.Dispatch<React.SetStateAction<number>>
  setCurrentStreakMs: React.Dispatch<React.SetStateAction<number>>
  setBestStreakMs: React.Dispatch<React.SetStateAction<number>>
  setScore: React.Dispatch<React.SetStateAction<number>>
  setCyclesCompleted: React.Dispatch<React.SetStateAction<number>>
  phaseFromT: (tMs: number) => Phase
  userPhaseRef: React.MutableRefObject<Phase>
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
}

function BreathFlowLoop({
  runningRef,
  finishedRef,
  startTimeRef,
  lastFrameRef,
  durationMs,
  cycleMs,
  setExpectedPhase,
  setElapsedMs,
  setMatchMs,
  setCurrentStreakMs,
  setBestStreakMs,
  setScore,
  setCyclesCompleted,
  phaseFromT,
  userPhaseRef,
  setFinished,
  setRunning,
}: LoopProps) {
  useFrame(() => {
    if (!runningRef.current || finishedRef.current) return
    const now = performance.now()
    const delta = now - lastFrameRef.current
    lastFrameRef.current = now

    const tSinceStart = now - startTimeRef.current
    const exp = phaseFromT(tSinceStart)
    setExpectedPhase(exp)

    const userPhase = userPhaseRef.current
    const isMatch =
      (exp === 'inhale' && userPhase === 'inhale') ||
      (exp === 'exhale' && userPhase === 'exhale') ||
      exp === 'hold1' ||
      exp === 'hold2'

    setElapsedMs((v) => v + delta)
    if (isMatch) {
      setMatchMs((v) => v + delta)
      setCurrentStreakMs((s) => {
        const next = s + delta
        setBestStreakMs((prev) => (next > prev ? next : prev))
        return next
      })
      setScore((s) => s + (exp === 'inhale' || exp === 'exhale' ? 2 : 1))
    } else {
      setCurrentStreakMs(0)
      setScore((s) => Math.max(0, s - 2))
    }

    const prevExp = phaseFromT(tSinceStart - delta)
    if (prevExp === 'hold2' && exp === 'inhale') setCyclesCompleted((c) => c + 1)

    if (tSinceStart >= durationMs) {
      setFinished(true)
      setRunning(false)
      runningRef.current = false
      finishedRef.current = true
    }
  })
  return null
}

export default function BreathFlow3D({ onComplete }: Props) {
  const [running, setRunning] = useState(true)
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [matchMs, setMatchMs] = useState(0)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [bestStreakMs, setBestStreakMs] = useState(0)
  const [currentStreakMs, setCurrentStreakMs] = useState(0)
  const [cyclesCompleted, setCyclesCompleted] = useState(0)
  const [saving, setSaving] = useState(false)
  const [expectedPhase, setExpectedPhase] = useState<Phase>('inhale')
  const [userPhase, setUserPhase] = useState<Phase>('hold2')

  const durationMs = 90_000

  const cycleMs = 16_000 // 4-4-4-4
  const phaseColors: Record<Phase, string> = {
    inhale: '#22c55e',
    hold1: '#a78bfa',
    exhale: '#0ea5e9',
    hold2: '#f59e0b',
  }

  const startTimeRef = useRef<number>(performance.now())
  const lastFrameRef = useRef<number>(performance.now())

  const runningRef = useRef<boolean>(running)
  useEffect(() => {
    runningRef.current = running
  }, [running])
  const finishedRef = useRef<boolean>(finished)
  useEffect(() => {
    finishedRef.current = finished
  }, [finished])
  const userPhaseRef = useRef<Phase>(userPhase)
  useEffect(() => {
    userPhaseRef.current = userPhase
  }, [userPhase])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') setUserPhase('inhale')
      if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') setUserPhase('exhale')
      if (e.key === ' ') setRunning((r) => !r)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const phaseFromT = (tMs: number): Phase => {
    const mod = tMs % cycleMs
    if (mod < 4000) return 'inhale'
    if (mod < 8000) return 'hold1'
    if (mod < 12000) return 'exhale'
    return 'hold2'
  }

  const angleFromPhase = (tMs: number) => ((tMs % cycleMs) / cycleMs) * Math.PI * 2

  const saveResult = useCallback(async () => {
    setSaving(true)
    try {
      const accuracy = elapsedMs > 0 ? Math.round((matchMs / elapsedMs) * 100) : 0
      const result: GameResult = {
        score,
        accuracyPercent: accuracy,
        bestStreakSeconds: Math.round(bestStreakMs / 1000),
        cyclesCompleted,
        durationMs: elapsedMs,
        createdAt: new Date().toISOString(),
      }
      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 6,
          content: { type: 'module6_breath_flow', result },
        })
        try {
          await supabase.rpc('award_achievements_for_module6_game', { p_user: user.id, p_score: result.score })
        } catch {}
      }
      onComplete?.(result)
    } finally {
      setSaving(false)
    }
  }, [bestStreakMs, cyclesCompleted, elapsedMs, matchMs, onComplete, score])

  const tNow = performance.now() - startTimeRef.current
  const currentAngle = angleFromPhase(tNow)

  if (finished) {
    const accuracy = elapsedMs > 0 ? Math.round((matchMs / elapsedMs) * 100) : 0
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">BreathFlow — Results</h3>
        <p className="text-neutral-600 mb-4">Accuracy: {accuracy}% • Best streak: {Math.round(bestStreakMs / 1000)}s • Cycles: {cyclesCompleted} • Score: {score}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={saveResult} disabled={saving}>{saving ? 'Saving…' : 'Save to Journal'}</Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>Practice Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
        <div>
          <div className="text-sm font-semibold text-text">BreathFlow (3D)</div>
          <div className="text-xs text-neutral-500">W/Up = inhale • S/Down = exhale • Space = pause</div>
        </div>
        <div className="text-sm text-neutral-600">Score: {score}</div>
      </div>
      <div style={{ height: 420 }}>
        <Canvas camera={{ position: [0, 8, 10], fov: 55 }}>
          <Lights />
          <fog attach="fog" args={["#dbeafe", 10, 30]} />
          <Ring radius={5.6} color="#93c5fd" opacity={0.15} />
          <Ring radius={5.2} color="#60a5fa" opacity={0.15} />
          <Ring radius={4.8} color="#3b82f6" opacity={0.12} />

          <BreathFlowLoop
            runningRef={runningRef}
            finishedRef={finishedRef}
            startTimeRef={startTimeRef}
            lastFrameRef={lastFrameRef}
            durationMs={durationMs}
            cycleMs={cycleMs}
            setExpectedPhase={setExpectedPhase}
            setElapsedMs={setElapsedMs}
            setMatchMs={setMatchMs}
            setCurrentStreakMs={setCurrentStreakMs}
            setBestStreakMs={setBestStreakMs}
            setScore={setScore}
            setCyclesCompleted={setCyclesCompleted}
            phaseFromT={phaseFromT}
            userPhaseRef={userPhaseRef}
            setFinished={setFinished}
            setRunning={setRunning}
          />

          {/* Expected phase indicator dot */}
          <Dot angle={currentAngle} radius={4.8} color={phaseColors[expectedPhase]} />

          {/* User marker follows a slightly inner circle; color by user phase */}
          <Dot angle={currentAngle} radius={3.6} color={phaseColors[userPhase]} />
        </Canvas>
      </div>
      <PhaseText text={`Expected: ${expectedPhase.toUpperCase()} • You: ${userPhase.toUpperCase()}`} />
      <div className="px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 border-t border-primary-200 text-xs text-neutral-700">
        Sync your breathing with the flow. Match inhale and exhale phases; holds are for staying steady. Longer streaks deepen calm.
      </div>
    </div>
  )
}
