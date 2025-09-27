export default function PlatformPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">The Platform</h1>
      <p className="text-lg text-slate-700 mb-8">
        Frehab is built as a modern, scalable web app to make recovery accessible and engaging.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-neutral-200 p-6">
          <h2 className="text-xl font-semibold mb-3">Technical Stack</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Framework: Next.js 14+ (App Router)</li>
            <li>Language: TypeScript</li>
            <li>Styling: Tailwind CSS (Calm Harmony theme)</li>
            <li>Backend & Database: Supabase (PostgreSQL, Auth)</li>
            <li>Deployment: Vercel</li>
            <li>Open Source License: AGPL 3.0</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-neutral-200 p-6">
          <h2 className="text-xl font-semibold mb-3">Key Components</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>User Authentication (email/password + social OAuth)</li>
            <li>User Dashboard</li>
            <li>Personal Goal Tracker</li>
            <li>Core Program (8 modules, dynamic content)</li>
            <li>Private Journal</li>
            <li>Community Hub (planned)</li>
            <li>Frehab Wiki (planned)</li>
            <li>Achievement System (planned)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
