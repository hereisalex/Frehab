'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Starfield() {
  const ref = useRef<THREE.Group>(null)
  const positions = useMemo(() => {
    const numPoints = 1800
    const radius = 1.8
    const arr = new Float32Array(numPoints * 3)
    for (let i = 0; i < numPoints; i++) {
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      arr[i * 3] = x
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = z
    }
    return arr
  }, [])

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function VisionScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 2.6], fov: 60 }}>
        <color attach="background" args={["#0b1020"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 2]} intensity={0.6} />
        <Starfield />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-500/20 via-transparent to-slate-900/60" />
    </div>
  )
}
