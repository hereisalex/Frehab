import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AlphaBanner from '@/components/layout/AlphaBanner'
import VersionBadge from '@/components/layout/VersionBadge'
import CrisisSupportButton from '@/components/CrisisSupportButton'
import PageTracker from '@/components/PageTracker'
import { AuthProvider } from '@/lib/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frehab - A Free, Anonymous, and Community-Powered Path to Recovery',
  description: 'An online addiction recovery platform providing support, community, and resources for those on their recovery journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-700 min-h-screen flex flex-col`}>
        <AuthProvider>
          <PageTracker />
          <AlphaBanner />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <VersionBadge />
          <CrisisSupportButton />
        </AuthProvider>
      </body>
    </html>
  )
} 