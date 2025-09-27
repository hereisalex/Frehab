'use client'

import { useState } from 'react'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 lg:z-0 w-64 bg-white border-r border-neutral-200 p-6 h-full`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-primary-600">Frehab</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-2">
          <a href="/dashboard" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Dashboard
          </a>
          <a href="/program" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Core Program
          </a>
          <a href="/tools" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Recovery Tools
          </a>
          <a href="/progress" className="block px-3 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
            Progress
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
      <div className="flex-1 overflow-auto lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-primary-600">Frehab</h1>
          <div className="w-6" /> {/* Spacer */}
        </div>

        <div className="p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  )
} 