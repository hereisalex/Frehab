export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-neutral-200 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-600">Frehab</h2>
        </div>
        
        <nav className="space-y-2">
          <a href="/dashboard" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Dashboard
          </a>
          <a href="/program" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Core Program
          </a>
          <a href="/journal" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Private Journal
          </a>
          <a href="/wiki" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Wiki
          </a>
          <a href="/community" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Community
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
} 