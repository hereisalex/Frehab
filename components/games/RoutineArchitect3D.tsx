'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabaseClient'

interface Block {
  id: string
  x: number
  z: number
  width: number
  color: string
}

interface Moving {
  x: number
  dir: 1 | -1
  width: number
  z: number
  color: string
}

interface GameResult {
  score: number
  blocks: number
  perfects: number
  maxWidth: number
  durationMs: number
  createdAt: string
}

interface Props {
  onComplete?: (result: GameResult) => void
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 8, 5]} intensity={0.9} />
    </>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 100]} />
      <meshStandardMaterial color="#ecfeff" />
    </mesh>
  )
}

function BlockMesh({ x, z, width, color }: { x: number; z: number; width: number; color: string }) {
  return (
    <mesh position={[x, 0.5, -z]} castShadow>
      <boxGeometry args={[width, 1, 3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function RoutineArchitect3D({ onComplete }: Props) {
  const [running, setRunning] = useState(true)
  const [placed, setPlaced] = useState<Block[]>([{ id: crypto.randomUUID(), x: 0, z: 0, width: 6, color: '#60a5fa' }])
  const [moving, setMoving] = useState<Moving>({ x: -6, dir: 1, width: 6, z: 1, color: '#34d399' })
  const [speed, setSpeed] = useState(3)
  const [score, setScore] = useState(0)
  const [perfects, setPerfects] = useState(0)
  const [finished, setFinished] = useState(false)
  const [saving, setSaving] = useState(false)
  const startRef = useRef<number>(performance.now())

  const pillarColor = useCallback((level: number) => {
    const colors = ['#0ea5e9', '#22c55e', '#a78bfa', '#f97316', '#ef4444']
    return colors[level % colors.length]
  }, [])

  useFrame((_, delta) => {
    if (!running || finished) return
    setMoving((m) => {
      let nx = m.x + m.dir * speed * delta
      if (nx > 6) return { ...m, x: 6, dir: -1 }
      if (nx < -6) return { ...m, x: -6, dir: 1 }
      return { ...m, x: nx }
    })
  })

  const place = useCallback(() => {
    if (finished) return
    const last = placed[placed.length - 1]
    const overlapLeft = Math.max(last.x - last.width / 2, moving.x - moving.width / 2)
    const overlapRight = Math.min(last.x + last.width / 2, moving.x + moving.width / 2)
    const overlap = overlapRight - overlapLeft
    if (overlap <= 0.01) {
      setFinished(true)
      setRunning(false)
      return
    }
    const newWidth = Math.max(0.4, overlap)
    const newX = (overlapLeft + overlapRight) / 2
    const nextColor = pillarColor(placed.length)
    setPlaced((arr) => [...arr, { id: crypto.randomUUID(), x: newX, z: moving.z, width: newWidth, color: nextColor }])
    setMoving((m) => ({ x: -6, dir: 1, width: newWidth, z: m.z + 1, color: nextColor }))
    if (Math.abs(newX - last.x) <= 0.15) {
      setPerfects((c) => c + 1)
      setScore((s) => s + 4)
    } else {
      setScore((s) => s + 2)
    }
    setSpeed((sp) => Math.min(6, sp + 0.05))
  }, [finished, moving.width, moving.x, moving.z, pillarColor, placed])

  useEffect(() => {
    const onClick = () => running && place()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        running && place()
      }
      if (e.key === 'p' || e.key === 'P') setRunning((r) => !r)
    }
    window.addEventListener('click', onClick)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('click', onClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [place, running])

  const saveResult = useCallback(async () => {
    setSaving(true)
    try {
      const result: GameResult = {
        score,
        blocks: placed.length - 1,
        perfects,
        maxWidth: Math.max(...placed.map((b) => b.width)),
        durationMs: performance.now() - startRef.current,
        createdAt: new Date().toISOString(),
      }
      const { data: userData } = await supabase.auth.getUser()
      const user = userData?.user
      if (user) {
        await supabase.from('journal_entries').insert({
          user_id: user.id,
          module_number: 8,
          content: { type: 'module8_routine_architect_3d', result },
        })
        try {
          await supabase.rpc('award_achievements_for_module8_3d', { p_user: user.id, p_score: result.score })
        } catch {}
      }
      onComplete?.(result)
    } finally {
      setSaving(false)
    }
  }, [onComplete, perfects, placed, score])

  if (finished) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-text mb-2">Routine Architect (3D) — Results</h3>
        <p className="text-neutral-600 mb-4">Blocks: {placed.length - 1} • Perfects: {perfects} • Score: {score}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={saveResult} disabled={saving}>{saving ? 'Saving…' : 'Save to Journal'}</Button>
          <Button variant="secondary" onClick={() => window.location.reload()}>Build Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
        <div>
          <div className="text-sm font-semibold text-text">Routine Architect (3D)</div>
          <div className="text-xs text-neutral-500">Click or Space to place • P to pause</div>
        </div>
        <div className="text-sm text-neutral-600">Score: {score}</div>
      </div>
      <div style={{ height: 420 }}>
        <Canvas camera={{ position: [0, 9, 14], fov: 55 }} shadows>
          <Lights />
          <fog attach="fog" args={["#ecfeff", 10, 35]} />
          <Ground />
          {placed.map((b) => (
            <BlockMesh key={b.id} x={b.x} z={b.z} width={b.width} color={b.color} />
          ))}
          <BlockMesh x={moving.x} z={moving.z} width={moving.width} color={moving.color} />
        </Canvas>
      </div>
      <div className="px-4 py-3 bg-gradient-to-r from-teal-50 to-teal-100 border-t border-teal-200 text-xs text-neutral-700">
        Align blocks to build a stable routine. Better alignment = higher score. Small, steady stacking wins.
      </div>
    </div>
  )
}


