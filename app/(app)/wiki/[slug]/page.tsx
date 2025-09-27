import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'
import { notFound } from 'next/navigation'

const KNOWN_SLUGS: Record<string, { title: string; summary: string }> = {
  'adhd-vs-stimulant-addiction': { title: 'ADHD vs. Stimulant Addiction', summary: 'Distinguish therapeutic use from dependence and misuse.' },
  'stimulant-withdrawal-timeline': { title: 'Stimulant Withdrawal Timeline', summary: 'What to expect during stimulant withdrawal and early recovery.' },
  'depressants-vs-benzos': { title: 'Depressants vs. Benzodiazepines', summary: 'Similarities and differences across CNS depressants.' },
  'vaping-vs-smoking': { title: 'Vaping vs. Smoking: Addiction Profiles', summary: 'Compare delivery methods and risks.' },
  'nicotine-craving-management': { title: 'Nicotine Craving Management', summary: 'Evidence-based strategies to manage cravings.' },
  'healthy-sexuality-vs-addiction': { title: 'Healthy Sexuality vs. Addiction', summary: 'Differentiate healthy sexual behavior from compulsive patterns.' },
  'pornography-blocking-tools': { title: 'Pornography Blocking Tools', summary: 'Technical and environmental controls to reduce access.' },
  'gambling-types-addiction-risk': { title: 'Gambling Types & Addiction Risk', summary: 'Risk profiles across slots, sports betting, poker, and more.' },
  'gambling-exclusion-programs': { title: 'Gambling Self-Exclusion Programs', summary: 'State and casino programs to help block access.' },
  'shopping-environments-addiction': { title: 'Shopping Environments & Addiction', summary: 'Design environments that reduce impulsive buying.' },
  'shopping-addiction-barriers': { title: 'Barriers to Compulsive Spending', summary: 'Build friction and safeguards around spending.' },
  'trigger-foods-addiction': { title: 'Trigger Foods & Eating Compulsions', summary: 'Identify and plan around trigger foods.' },
  'mindful-eating-techniques': { title: 'Mindful Eating Techniques', summary: 'Practices that reduce overeating and improve awareness.' },
  'work-addiction-vs-performance': { title: 'Work Addiction vs. High Performance', summary: 'Differentiate unhealthy overwork from excellence.' },
  'work-technology-boundaries': { title: 'Tech Boundaries for Work Recovery', summary: 'Reduce availability and notifications to reclaim balance.' }
}

export default function WikiFallbackPage({ params }: { params: { slug: string } }) {
  const meta = KNOWN_SLUGS[params.slug]

  if (!meta) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">{meta.title}</h1>
          <p className="text-neutral-600">{meta.summary}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="prose max-w-none">
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Overview</h3>
            <p className="text-neutral-700">
              This article provides general, educational guidance. It does not replace medical or professional care. If you are in crisis, call 988 (US) or your local emergency number.
            </p>
          </div>

          <h2 className="mt-8">Key Points</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Evidence-based practices and safety-first recommendations</li>
            <li>Clear, actionable steps you can implement today</li>
            <li>Links to reputable resources for deeper learning</li>
          </ul>

          <h2 className="mt-8">Practical Steps</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold mb-2">Step 1</h4>
              <p className="text-sm text-neutral-600">Identify your current stage and immediate needs.</p>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold mb-2">Step 2</h4>
              <p className="text-sm text-neutral-600">Apply one small change consistently for 1-2 weeks.</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">We are expanding this article with deeper, track-specific content. Check back soon for updates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


