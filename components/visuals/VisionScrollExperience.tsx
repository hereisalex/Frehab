'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, OrbitControls, Float, Sparkles } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

function useReducedMotionPreference(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])
  return reduced
}

function Starfield() {
  const positions = useMemo(() => {
    const num = 600
    const radius = 9
    const arr = new Float32Array(num * 3)
    for (let i = 0; i < num; i++) {
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  return (
    <points renderOrder={-1}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#bfeaf0" sizeAttenuation transparent opacity={0.45} depthWrite={false} />
    </points>
  )
}

function SceneContent({ reducedMotion }: { reducedMotion: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const ringsRef = useRef<THREE.Group>(null)
  const gridRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((_state, delta) => {
    const p = scroll.offset // 0..1
    if (reducedMotion) {
      // Set gentle, static states for reduced motion
      if (coreRef.current) {
        coreRef.current.scale.setScalar(1.1)
        ;(coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.0
      }
      if (orbitRef.current) {
        orbitRef.current.rotation.y += delta * 0.05
      }
      if (ringsRef.current) {
        ringsRef.current.children.forEach((child, idx) => {
          ;(child as THREE.Mesh).scale.setScalar(1.0 + idx * 0.25)
        })
      }
      if (gridRef.current) {
        gridRef.current.position.y = -1.0
        ;(gridRef.current.material as THREE.MeshStandardMaterial).opacity = 0.25
      }
      return
    }

    // Core sphere pulse (Section 1-2)
    if (coreRef.current) {
      const s1Start = 0.0, s1End = 0.33
      const pulseT = THREE.MathUtils.clamp((p - s1Start) / (s1End - s1Start), 0, 1)
      const scale = 1.1 + Math.sin(pulseT * Math.PI * 2) * 0.22
      coreRef.current.scale.setScalar(scale)
      ;(coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.9 + pulseT * 1.2
    }

    // Specializations orbit
    if (orbitRef.current) {
      const s2Start = 0.15, s2End = 0.45
      const t = THREE.MathUtils.clamp((p - s2Start) / (s2End - s2Start), 0, 1)
      orbitRef.current.rotation.y += delta * (0.15 + t * 0.6)
      const radius = 1.3 + t * 2.6
      orbitRef.current.children.forEach((child, i) => {
        const angle = (i / Math.max(1, orbitRef.current!.children.length)) * Math.PI * 2
        child.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.5) * 0.5, Math.sin(angle) * radius)
      })
    }

    // Rings scale in/out
    if (ringsRef.current) {
      const s3Start = 0.35, s3End = 0.65
      const t = THREE.MathUtils.clamp((p - s3Start) / (s3End - s3Start), 0, 1)
      ringsRef.current.children.forEach((child, idx) => {
        const s = 0.9 + t * (1.0 + idx * 0.6)
        ;(child as THREE.Mesh).scale.setScalar(s)
      })
      ringsRef.current.rotation.x = t * Math.PI * 0.35
      ringsRef.current.rotation.y = t * Math.PI * 0.45
    }

    // Grid plane slides up (Framework track)
    if (gridRef.current) {
      const s4Start = 0.6, s4End = 0.95
      const t = THREE.MathUtils.clamp((p - s4Start) / (s4End - s4Start), 0, 1)
      gridRef.current.position.y = THREE.MathUtils.lerp(-1.6, 1.2, t)
      gridRef.current.rotation.x = -Math.PI / 2 + t * 0.2
      ;(gridRef.current.material as THREE.MeshStandardMaterial).opacity = THREE.MathUtils.lerp(0, 0.9, t)
    }
  })

  return (
    <group>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} />

      <Starfield />
      <Sparkles count={1200} scale={[12, 12, 12]} size={1.2} speed={0.2} opacity={0.22} color="#86efac" />

      {/* Core sphere */}
      <mesh ref={coreRef} position={[0, 0, 0]}> 
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" roughness={0.2} metalness={0.25} />
      </mesh>

      {/* Orbiting specializations */}
      <group ref={orbitRef}>
        {new Array(8).fill(0).map((_, i) => (
          <Float key={i} speed={1.2} rotationIntensity={0.2} floatIntensity={1.4}>
            <mesh>
              <sphereGeometry args={[0.26, 32, 32]} />
              <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" roughness={0.3} metalness={0.1} />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Expanding rings */}
      <group ref={ringsRef}>
        {[0, 1, 2].map((idx) => (
          <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}> 
            <torusGeometry args={[1.3 + idx * 0.35, 0.05, 16, 128]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" roughness={0.35} metalness={0.2} transparent opacity={0.7} />
          </mesh>
        ))}
      </group>

      {/* Sliding grid plane (Framework) */}
      <mesh ref={gridRef} position={[0, -1.5, -0.5]}> 
        <planeGeometry args={[6, 6, 32, 32]} />
        <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0} />
      </mesh>
    </group>
  )
}

function ParallaxOverlay({ reducedMotion }: { reducedMotion: boolean }) {
  const scroll = useScroll()
  const getStyle = (start: number, end: number, speed = 1) => {
    const p = scroll.offset
    const t = THREE.MathUtils.clamp((p - start) / Math.max(0.0001, end - start), 0, 1)
    const translateY = (1 - t) * 80 * speed // px
    const opacity = reducedMotion ? 1 : THREE.MathUtils.clamp((t - 0.15) / 0.5, 0, 1)
    return { transform: `translateY(${translateY}px)`, opacity }
  }
  const iconClass = 'rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-white px-4 py-3 text-lg shadow-sm'
  return (
    <div className="pointer-events-none">
      {/* Icons that parallax at different speeds */}
      <div className="fixed left-6 top-24 hidden md:block">
        <div className={iconClass} style={getStyle(0.0, 0.25, 0.9)}>🔒 Privacy</div>
      </div>
      <div className="fixed right-8 top-40 hidden md:block">
        <div className={iconClass} style={getStyle(0.15, 0.45, 0.7)}>🧠 Skills</div>
      </div>
      <div className="fixed left-10 bottom-28 hidden md:block">
        <div className={iconClass} style={getStyle(0.35, 0.65, 0.8)}>🎯 Goals</div>
      </div>
      <div className="fixed right-12 bottom-24 hidden md:block">
        <div className={iconClass} style={getStyle(0.55, 0.85, 0.6)}>🤝 Community</div>
      </div>
    </div>
  )
}

export default function VisionScrollExperience() {
  const reducedMotion = useReducedMotionPreference()
  return (
    <section className="relative h-[600vh] bg-slate-950 text-white">
      <Canvas className="sticky top-0 h-screen w-full" camera={{ position: [0, 0, 4], fov: 60 }} gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}>
        <color attach="background" args={["#0b1020"]} />
        <ScrollControls pages={6} damping={reducedMotion ? 0.4 : 0.18}>
          <SceneContent reducedMotion={reducedMotion} />
          <Scroll html>
            {/* Section 1: Hero */}
            <div className="h-screen w-full flex items-center justify-center">
              <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                  Our Vision: A New Path to Recovery
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  A modern, responsive, and deeply compassionate online ecosystem for recovery.
                </p>
              </div>
            </div>

            {/* Section 2: The Gap */}
            <div className="h-screen w-full flex items-center justify-center">
              <div className="max-w-3xl px-6 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold">Removing Barriers</h2>
                <p className="mt-4 text-white/90 text-lg">
                  The path to getting help can feel outdated and demanding. Frehab was built to fill that gap.
                </p>
              </div>
            </div>

            {/* Section 3: Mission */}
            <div className="h-screen w-full flex items-center justify-center">
              <div className="max-w-3xl px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>
                <p className="mt-4 text-white/90 text-lg">
                  Provide a comprehensive, evidence-based, community-powered path to recovery that is accessible to everyone, forever.
                </p>
              </div>
            </div>

            {/* Section 4: Core + Specialization */}
            <div className="h-screen w-full flex items-center justify-center">
              <div className="max-w-3xl px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Core + Specializations</h2>
                <p className="mt-4 text-white/90 text-lg">
                  A universal core program enhanced with specialized content tailored to your selected addictions.
                </p>
              </div>
            </div>

            {/* Section 5: Dual-Track */}
            <div className="h-screen w-full flex items-center justify-center">
              <div className="max-w-3xl px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Surviving and Thriving</h2>
                <p className="mt-4 text-white/90 text-lg">
                  The Foundation: skills to stop. The Framework: design a meaningful life.
                </p>
              </div>
            </div>

            {/* Section 6: Promise */}
            <div className="h-screen w-full flex items-center justify-center">
              <div className="max-w-3xl px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Our Promise</h2>
                <p className="mt-4 text-white/90 text-lg">
                  Free. Anonymous. Supportive. Welcome to your next chapter.
                </p>
              </div>
            </div>

            <ParallaxOverlay reducedMotion={reducedMotion} />
          </Scroll>
        </ScrollControls>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </section>
  )
}
