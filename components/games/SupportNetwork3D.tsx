'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

type Lane = -1 | 0 | 1

type EntityType = 'ally' | 'drain' | 'boost'

interface Entity {
  id: string
  lane: Lane
  z: number
  type: EntityType
}

interface GameResult {
  score: number
  connections: number
  drainsHit: number
  bestStreak: number
  durationMs: number
  createdAt: string
}

interface Props {
  onComplete?: (result: GameResult) => void
}

function randomLane(): Lane {
  const lanes: Lane[] = [-1, 0, 1]
  return lanes[Math.floor(Math.random() * lanes.length)]
}

function Player({ x }: { x: number }) {
  return (
    <mesh position={[x, 0.5, 0]}>
      <icosahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial color="#06b6d4" />
    </mesh>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 200]} />
      <meshStandardMaterial color="#e0f2fe" opacity={0.6} transparent />
    </mesh>
  )
}

function EntityMesh({ entity }: { entity: Entity }) {
  const color = entity.type === 'ally' ? '#22c55e' : entity.type === 'drain' ? '#ef4444' : '#a78bfa'
  const geometry = entity.type === 'drain' ? (
    <boxGeometry args={[0.9, 0.9, 0.9]} />
  ) : entity.type === 'ally' ? (
    <sphereGeometry args={[0.55, 16, 16]} />
  ) : (
    <octahedronGeometry args={[0.6, 0]} />
  )
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
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow />
    </>
  )
}

function NetworkLoop({
  runningRef,
  entitiesRef,
  playerLaneRef,
  speedRef,
  setConnections,
  setStreak,
  setBestStreak,
  setScore,
  setDrainsHit,
  elapsedMsRef,
}: {
  runningRef: React.MutableRefObject<boolean>
  entitiesRef: React.MutableRefObject<Entity[]>
  playerLaneRef: React.MutableRefObject<Lane>
  speedRef: React.MutableRefObject<number>
  setConnections: React.Dispatch<React.SetStateAction<number>>
  setStreak: React.Dispatch<React.SetStateAction<number>>
  setBestStreak: React.Dispatch<React.SetStateAction<number>>
  setScore: React.Dispatch<React.SetStateAction<number>>
  setDrainsHit: React.Dispatch<React.SetStateAction<number>>
  elapsedMsRef: React.MutableRefObject<number>
}) {
  useFrame((_, delta) => {
    if (!runningRef.current) return
    elapsedMsRef.current += delta * 1000
    // Move entities
    entitiesRef.current = entitiesRef.current
      .map((e) => ({ ...e, z: e.z + speedRef.current * delta * 10 }))
      .filter((e) => e.z < 12)

    const thresholdZ = 2.0
    const remaining: Entity[] = []
    for (const e of entitiesRef.current) {
      if (e.z >= thresholdZ - 0.6 && e.z <= thresholdZ + 0.6 && e.lane === playerLaneRef.current) {
        if (e.type === 'ally') {
          setConnections((c) => c + 1)
          setStreak((s) => {
            const ns = s + 1
            setBestStreak((b) => (ns > b ? ns : b))
            return ns
          })
          setScore((s) => s + 3)
        } else if (e.type === 'drain') {
          setDrainsHit((d) => d + 1)
          setStreak(0)
          setScore((s) => Math.max(0, s - 3))
        } else {
          speedRef.current = Math.min(1.6, speedRef.current + 0.1)
          setScore((s) => s + 2)
        }
        continue
      }
      remaining.push(e)
    }
    entitiesRef.current = remaining

    // Spawns
    if (Math.random() < 0.035) {
      const roll = Math.random()
      const type: EntityType = roll < 0.6 ? 'ally' : roll < 0.85 ? 'drain' : 'boost'
      entitiesRef.current.push({ id: crypto.randomUUID(), lane: ([-1,0,1] as Lane[])[Math.floor(Math.random()*3)], z: -30, type })
    }
  })
  return null
}

export default function SupportNetwork3D({ onComplete }: Props) {
  const [running, setRunning] = useState(true)
  const [lane, setLane] = useState<Lane>(0)
  const [score, setScore] = useState(0)
  const [connections, setConnections] = useState(0)
  const [drainsHit, setDrainsHit] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [streak, setStreak] = useState(0)
  const [finished, setFinished] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [countdown, setCountdown] = useState(75)

  const playerLaneRef = useRef<Lane>(0)
  const entitiesRef = useRef<Entity[]>([])
  const speedRef = useRef(1.1)
  const elapsedMsRef = useRef(0)
  const runningRef = useRef<boolean>(running)
  useEffect(() => { runningRef.current = running }, [running])

  // controls
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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') onLeft()
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') onRight()
      if (e.key === ' ') setRunning((r) => !r)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onLeft, onRight])

  // countdown
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

  // loop handled inside Canvas by NetworkLoop

  const saveResult = useCallback(async () => {
    setSubmitting(true)
    try {
      const result: GameResult = {
        score,
        connections,
        drainsHit,
        bestStreak,
        durationMs: elapsedMsRef.current,
        createdAt: new Date().toISOString(),
      }
      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 7,
          content: { type: 'module7_support_network_3d', result },
        })
        try {
          await supabase.rpc('award_achievements_for_module7_3d', { p_user: user.id, p_score: result.score })
        } catch {}
      }
      onComplete?.(result)
    } finally {
      setSubmitting(false)
    }
  }, [bestStreak, connections, drainsHit, onComplete, score])

  const laneX = useMemo(() => lane * 2.2, [lane])

  if (finished) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Support Network (3D) — Results</h3>
        <p className="text-neutral-600 mb-4">Connections: {connections} • Drains hit: {drainsHit} • Best streak: {bestStreak} • Score: {score}</p>
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
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
        <div>
          <div className="text-sm font-semibold text-text">Support Network (3D)</div>
          <div className="text-xs text-neutral-500">A/D or Arrows to move • Space to pause</div>
        </div>
        <div className="text-sm text-neutral-600">Time: {countdown}s • Score: {score}</div>
      </div>
      <div style={{ height: 420 }}>
        <Canvas camera={{ position: [0, 6, 10], fov: 60 }}>
          <Lights />
          <fog attach="fog" args={["#e0f2fe", 8, 40]} />
          <Ground />
          <NetworkLoop
            runningRef={runningRef}
            entitiesRef={entitiesRef}
            playerLaneRef={playerLaneRef}
            speedRef={speedRef}
            setConnections={setConnections}
            setStreak={setStreak}
            setBestStreak={setBestStreak}
            setScore={setScore}
            setDrainsHit={setDrainsHit}
            elapsedMsRef={elapsedMsRef}
          />
          {/* lane stripes */}
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

          <Player x={laneX} />
          {entitiesRef.current.map((e) => (
            <EntityMesh key={e.id} entity={e} />
          ))}
        </Canvas>
      </div>
      <div className="px-4 py-3 bg-gradient-to-r from-cyan-50 to-cyan-100 border-t border-cyan-200 text-xs text-neutral-700">
        Connect allies (green), dodge drains (red), grab boosts (purple). Momentum helps but costs focus.
      </div>
    </div>
  )
}


