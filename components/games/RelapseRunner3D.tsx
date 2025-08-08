'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

type Lane = -1 | 0 | 1

interface Entity {
  id: string
  lane: Lane
  z: number
  type: 'trigger' | 'coping' | 'halt'
}

interface GameResult {
  score: number
  hits: number
  collected: number
  durationMs: number
  createdAt: string
  notes: string[]
}

interface Props {
  onComplete?: (result: GameResult) => void
}

function randomLane(): Lane {
  const lanes: Lane[] = [-1, 0, 1]
  return lanes[Math.floor(Math.random() * lanes.length)]
}

function useKeyboard(onLeft: () => void, onRight: () => void, onPause?: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') onLeft()
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') onRight()
      if (e.key === ' ') onPause?.()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onLeft, onRight, onPause])
}

function Player({ x }: { x: number }) {
  return (
    <mesh position={[x, 0.5, 0]}>
      <boxGeometry args={[0.8, 1, 1]} />
      <meshStandardMaterial color="#2dd4bf" />
    </mesh>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 200]} />
      <meshStandardMaterial color="#0ea5e9" opacity={0.15} transparent />
    </mesh>
  )
}

function EntityMesh({ entity }: { entity: Entity }) {
  const color = entity.type === 'trigger' ? '#ef4444' : entity.type === 'coping' ? '#22c55e' : '#eab308'
  const geometry = entity.type === 'trigger' ? <boxGeometry args={[0.9, 0.9, 0.9]} /> : <sphereGeometry args={[0.55, 16, 16]} />
  const x = entity.lane * 2.2
  return (
    <mesh position={[x, 0.5, entity.z]}>
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow />
    </>
  )
}

function RunnerLoop({
  runningRef,
  playerLaneRef,
  entitiesRef,
  onCollide,
  speedRef,
  elapsedMsRef,
}: {
  runningRef: React.MutableRefObject<boolean>
  playerLaneRef: React.MutableRefObject<Lane>
  entitiesRef: React.MutableRefObject<Entity[]>
  onCollide: (e: Entity) => void
  speedRef: React.MutableRefObject<number>
  elapsedMsRef: React.MutableRefObject<number>
}) {
  const lastTimeRef = useRef<number>(0)
  useFrame((_, delta) => {
    if (!runningRef.current) return

    // Update elapsed time
    elapsedMsRef.current += delta * 1000

    // Move entities forward along +z
    entitiesRef.current = entitiesRef.current
      .map((e) => ({ ...e, z: e.z + speedRef.current * delta * 10 }))
      .filter((e) => e.z < 12)

    // Collision detection (near z ~ 2, same lane)
    const thresholdZ = 2.0
    const remaining: Entity[] = []
    for (const e of entitiesRef.current) {
      if (e.z >= thresholdZ - 0.6 && e.z <= thresholdZ + 0.6 && e.lane === playerLaneRef.current) {
        onCollide(e)
        continue
      }
      remaining.push(e)
    }
    entitiesRef.current = remaining

    // Spawn new entities periodically
    const now = performance.now()
    if (now - lastTimeRef.current > 700) {
      lastTimeRef.current = now
      const roll = Math.random()
      const type: Entity['type'] = roll < 0.6 ? 'trigger' : roll < 0.9 ? 'coping' : 'halt'
      entitiesRef.current.push({ id: crypto.randomUUID(), lane: randomLane(), z: -30, type })
    }
  })
  return null
}

export default function RelapseRunner3D({ onComplete }: Props) {
  const [running, setRunning] = useState(true)
  const [lane, setLane] = useState<Lane>(0)
  const [score, setScore] = useState(0)
  const [hits, setHits] = useState(0)
  const [collected, setCollected] = useState(0)
  const [notes, setNotes] = useState<string[]>([])
  const [finished, setFinished] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [countdown, setCountdown] = useState(90) // seconds

  const playerLaneRef = useRef<Lane>(0)
  const entitiesRef = useRef<Entity[]>([])
  const speedRef = useRef(1.2)
  const elapsedMsRef = useRef(0)
  const slowUntilRef = useRef<number>(0)

  const addNote = useCallback((n: string) => setNotes((arr) => [...arr.slice(-4), n]), [])

  const onLeft = useCallback(() => {
    setLane((l) => {
      const next = (Math.max(-1, Math.min(1, (l - 1) as Lane)) as Lane)
      playerLaneRef.current = next
      return next
    })
  }, [])
  const onRight = useCallback(() => {
    setLane((l) => {
      const next = (Math.max(-1, Math.min(1, (l + 1) as Lane)) as Lane)
      playerLaneRef.current = next
      return next
    })
  }, [])
  const onPause = useCallback(() => setRunning((r) => !r), [])

  useKeyboard(onLeft, onRight, onPause)

  // Countdown timer
  useEffect(() => {
    if (finished || !running) return
    const id = setInterval(() => setCountdown((c) => c - 1), 1000)
    return () => clearInterval(id)
  }, [finished, running])

  useEffect(() => {
    if (countdown <= 0 && !finished) {
      setFinished(true)
      setRunning(false)
    }
  }, [countdown, finished])

  const onCollide = useCallback((e: Entity) => {
    if (e.type === 'trigger') {
      setHits((h) => h + 1)
      setScore((s) => Math.max(0, s - 2))
      addNote('Hit a trigger. Tip: Pause → 4-7-8 breathing → Connect.')
    } else if (e.type === 'coping') {
      setCollected((c) => c + 1)
      setScore((s) => s + 3)
      addNote('Collected coping tool. Try: If-then plan + coping menu.')
    } else if (e.type === 'halt') {
      // Slow time power-up for 5s and award points
      setScore((s) => s + 2)
      slowUntilRef.current = performance.now() + 5000
      addNote('HALT check! Slow down and self-check Hunger/Anger/Lonely/Tired.')
    }
  }, [addNote])

  // Adjust speed based on HALT power-up
  useEffect(() => {
    const id = setInterval(() => {
      if (performance.now() < slowUntilRef.current) {
        speedRef.current = 0.6
      } else {
        speedRef.current = 1.2
      }
    }, 100)
    return () => clearInterval(id)
  }, [])

  const runningRef = useRef<boolean>(running)
  useEffect(() => { runningRef.current = running }, [running])

  const saveResult = useCallback(async () => {
    setSubmitting(true)
    try {
      const result: GameResult = {
        score,
        hits,
        collected,
        durationMs: elapsedMsRef.current,
        createdAt: new Date().toISOString(),
        notes,
      }
      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 4,
          content: {
            type: 'module4_relapse_runner',
            result,
          },
        })
        try {
          await supabase.rpc('award_achievements_for_module4_game', { p_user: user.id, p_score: result.score })
        } catch {
          // best-effort
        }
      }
      onComplete?.(result)
    } finally {
      setSubmitting(false)
    }
  }, [collected, hits, notes, onComplete, score])

  const laneX = useMemo(() => lane * 2.2, [lane])

  if (finished) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Urge Surf Runner — Results</h3>
        <p className="text-neutral-600 mb-4">Score: {score} | Triggers hit: {hits} | Tools collected: {collected}</p>
        <div className="bg-neutral-50 rounded p-3 text-sm text-neutral-700 mb-4">
          <div className="font-medium mb-1">Key Reminders:</div>
          <ul className="list-disc ml-5 space-y-1">
            {notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
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
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-0 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-text">Urge Surf Runner (3D)</div>
            <div className="text-xs text-neutral-500">Arrows/A-D to move lanes • Space to pause</div>
          </div>
        </div>
        <div className="text-sm text-neutral-600">Time: {countdown}s • Score: {score}</div>
      </div>

      <div style={{ height: 420 }}>
        <Canvas camera={{ position: [0, 6, 10], fov: 60 }}>
          <Lights />
          <fog attach="fog" args={["#93c5fd", 8, 40]} />
          <Ground />

          <RunnerLoop
            runningRef={runningRef}
            playerLaneRef={playerLaneRef}
            entitiesRef={entitiesRef}
            onCollide={onCollide}
            speedRef={speedRef}
            elapsedMsRef={elapsedMsRef}
          />

          {/* Lanes guide */}
          <mesh position={[-2.2, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.2, 200]} />
            <meshStandardMaterial color="#ffffff" opacity={0.06} transparent />
          </mesh>
          <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.2, 200]} />
            <meshStandardMaterial color="#ffffff" opacity={0.06} transparent />
          </mesh>
          <mesh position={[2.2, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.2, 200]} />
            <meshStandardMaterial color="#ffffff" opacity={0.06} transparent />
          </mesh>

          {/* Player */}
          <Player x={laneX} />

          {/* Entities */}
          {entitiesRef.current.map((e) => (
            <EntityMesh key={e.id} entity={e} />
          ))}

          {/* Optional orbit controls for debugging; keep disabled for gameplay */}
          {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
      </div>

      {/* Tips bar */}
      <div className="px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 border-t border-primary-200">
        <div className="text-xs text-neutral-700">
          Tips: Avoid red triggers, collect green coping tools, grab yellow HALT checks to slow down. Every item is a reminder to Pause → Breathe → Connect.
        </div>
      </div>
    </div>
  )
}


