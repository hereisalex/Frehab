'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

interface GameResult {
  score: number
  blocksPlaced: number
  perfectCount: number
  maxWidth: number
  createdAt: string
}

interface Props {
  onComplete?: (result: GameResult) => void
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={0.9} />
    </>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 100]} />
      <meshStandardMaterial color="#f0f9ff" />
    </mesh>
  )
}

function Block({ x, z, width, color }: { x: number; z: number; width: number; color: string }) {
  return (
    <mesh position={[x, 0.5, -z]} castShadow>
      <boxGeometry args={[width, 1, 3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function LifeStacker3D({ onComplete }: Props) {
  const [running, setRunning] = useState(true)
  const [placedBlocks, setPlacedBlocks] = useState<Array<{ x: number; z: number; width: number; color: string }>>([
    { x: 0, z: 0, width: 6, color: '#94a3b8' },
  ])
  const [moving, setMoving] = useState<{ x: number; dir: 1 | -1; width: number; z: number; color: string }>({
    x: -6,
    dir: 1,
    width: 6,
    z: 1,
    color: '#22c55e',
  })
  const [speed, setSpeed] = useState(3)
  const [score, setScore] = useState(0)
  const [perfectCount, setPerfectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [saving, setSaving] = useState(false)

  const epsilon = 0.15

  // Refs to avoid stale closures inside the Canvas loop
  const runningRef = useRef(running)
  useEffect(() => { runningRef.current = running }, [running])
  const finishedRef = useRef(finished)
  useEffect(() => { finishedRef.current = finished }, [finished])
  const speedRef = useRef(speed)
  useEffect(() => { speedRef.current = speed }, [speed])

  function StackerLoop({ onMove }: { onMove: (delta: number) => void }) {
    useFrame((_, delta) => {
      if (!runningRef.current || finishedRef.current) return
      onMove(delta)
    })
    return null
  }

  const pillarColor = useCallback((level: number) => {
    const colors = ['#0ea5e9', '#22c55e', '#a78bfa', '#f97316', '#ef4444']
    return colors[level % colors.length]
  }, [])

  const placeBlock = useCallback(() => {
    if (finished) return
    const last = placedBlocks[placedBlocks.length - 1]
    const overlapLeft = Math.max(last.x - last.width / 2, moving.x - moving.width / 2)
    const overlapRight = Math.min(last.x + last.width / 2, moving.x + moving.width / 2)
    const overlap = overlapRight - overlapLeft

    if (overlap <= 0.01) {
      // Game over
      setFinished(true)
      setRunning(false)
      return
    }

    const newWidth = Math.max(0.4, overlap)
    const newX = (overlapLeft + overlapRight) / 2
    const nextColor = pillarColor(placedBlocks.length)

    setPlacedBlocks((arr) => [...arr, { x: newX, z: moving.z, width: newWidth, color: nextColor }])
    setMoving((m) => ({ x: -6, dir: 1, width: newWidth, z: m.z + 1, color: nextColor }))

    // Scoring
    if (Math.abs(newX - last.x) <= epsilon) {
      setPerfectCount((c) => c + 1)
      setScore((s) => s + 3)
    } else {
      setScore((s) => s + 1)
    }

    // Speed up slightly
    setSpeed((sp) => Math.min(6, sp + 0.04))
  }, [epsilon, moving.width, moving.x, moving.z, pillarColor, placedBlocks, finished])

  useEffect(() => {
    const onClick = () => running && placeBlock()
    window.addEventListener('click', onClick)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        running && placeBlock()
      }
      if (e.key === 'p' || e.key === 'P') setRunning((r) => !r)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('click', onClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [placeBlock, running])

  const saveResult = useCallback(async () => {
    setSaving(true)
    try {
      const result: GameResult = {
        score,
        blocksPlaced: placedBlocks.length - 1,
        perfectCount,
        maxWidth: Math.max(...placedBlocks.map((b) => b.width)),
        createdAt: new Date().toISOString(),
      }

      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 5,
          content: { type: 'module5_life_stacker', result },
        })
        try {
          await supabase.rpc('award_achievements_for_module5_game', { p_user: user.id, p_score: result.score })
        } catch {}
      }
      onComplete?.(result)
    } finally {
      setSaving(false)
    }
  }, [onComplete, perfectCount, placedBlocks, score])

  if (finished) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Life Stacker — Results</h3>
        <p className="text-neutral-600 mb-4">Blocks placed: {placedBlocks.length - 1} • Perfects: {perfectCount} • Score: {score}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={saveResult} disabled={saving}>
            {saving ? 'Saving…' : 'Save to Journal'}
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
          <div className="text-sm font-semibold text-text">Life Stacker (3D)</div>
          <div className="text-xs text-neutral-500">Click or Space to place • P to pause</div>
        </div>
        <div className="text-sm text-neutral-600">Score: {score} • Perfects: {perfectCount}</div>
      </div>
      <div style={{ height: 420 }}>
        <Canvas camera={{ position: [0, 9, 14], fov: 55 }} shadows>
          <Lights />
          <fog attach="fog" args={["#bae6fd", 10, 35]} />
          <Ground />
          <StackerLoop
            onMove={(delta) => {
              setMoving((m) => {
                const sp = speedRef.current
                let nx = m.x + m.dir * sp * delta
                if (nx > 6) {
                  nx = 6
                  return { ...m, x: nx, dir: -1 }
                }
                if (nx < -6) {
                  nx = -6
                  return { ...m, x: nx, dir: 1 }
                }
                return { ...m, x: nx }
              })
            }}
          />
          {placedBlocks.map((b, i) => (
            <Block key={i} x={b.x} z={b.z} width={b.width} color={b.color} />
          ))}
          <Block x={moving.x} z={moving.z} width={moving.width} color={moving.color} />
        </Canvas>
      </div>
      <div className="px-4 py-3 bg-gradient-to-r from-secondary-50 to-secondary-100 border-t border-secondary-200 text-xs text-neutral-700">
        Build upward by aligning each life block (Health, Relationships, Growth, Play, Work). Perfect alignment strengthens your base. Misalignment shrinks your options.
      </div>
    </div>
  )
}
