export default function RoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Roadmap</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Immediate Next Steps</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Implement Expandable Callout Component</li>
            <li>Complete Module 2: Trigger & Craving Map project UI and journal save</li>
            <li>Implement Achievement System backend (achievements, user_achievements, server logic)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Future Roadmap</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Build out Modules 3–8</li>
            <li>Build full Journal UI</li>
            <li>Create Achievements page</li>
            <li>Integrate Community Hub (Discourse)</li>
            <li>Build out Wiki framework and seed initial articles</li>
            <li>Incorporate humor and microcopy updates</li>
            <li>Finalize legal (LICENSE and notices)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
