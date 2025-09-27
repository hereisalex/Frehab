import ProgressTracker from '@/components/ProgressTracker'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Recovery Progress
          </h1>
          <p className="text-neutral-600">
            Track your recovery milestones, celebrate achievements, and maintain momentum on your journey.
          </p>
        </div>
      </div>

      <div className="py-8">
        {/* Clinical Disclaimer */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <ClinicalDisclaimer />
        </div>
        
        {/* Progress Tracker */}
        <ProgressTracker />
      </div>
    </div>
  )
}
