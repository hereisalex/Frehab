'use client'

import VisionScene from '@/components/visuals/VisionScene'

export default function VisionHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <VisionScene />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
          Our Vision: A New Path to Recovery
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          A modern, responsive, and deeply compassionate online ecosystem where anyone can begin their journey toward freedom from addiction.
        </p>
        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md text-white/90">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm">In active development — alpha preview</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  )
}
