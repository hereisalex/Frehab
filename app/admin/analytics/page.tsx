'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

interface AnalyticsSummary {
  totalEvents: number
  uniqueSessions: number
  topPages: Array<{ page: string; count: number }>
  topCountries: Array<{ country: string; count: number }>
  eventTypes: Array<{ event: string; count: number }>
  dailyStats: Array<{ date: string; events: number; sessions: number }>
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [timeRange, setTimeRange] = useState(7)

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/analytics?days=${timeRange}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to fetch analytics')
      }

      const data = await response.json()
      setAnalytics(data)
      setError('')
    } catch (err) {
      console.error('Analytics fetch error:', err)
      setError(err instanceof Error ? err.message : 'Failed to load analytics')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Analytics Not Available</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500 mb-4">
            The analytics database table may not exist yet. Make sure to run the database migrations first.
          </p>
          <Button onClick={fetchAnalytics} variant="primary">
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text mb-2">
                Frehab Analytics Dashboard
              </h1>
              <p className="text-neutral-600">
                Private usage analytics for the last {timeRange} days - completely anonymous data
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(parseInt(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={7}>Last 7 days</option>
                <option value={14}>Last 14 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
              </select>
              <Button onClick={fetchAnalytics} variant="secondary" size="sm">
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {analytics?.totalEvents.toLocaleString() || 0}
            </div>
            <div className="text-sm text-gray-600">Total Events</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {analytics?.uniqueSessions.toLocaleString() || 0}
            </div>
            <div className="text-sm text-gray-600">Unique Sessions</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {analytics?.eventTypes.find(e => e.event === 'tool_used')?.count || 0}
            </div>
            <div className="text-sm text-gray-600">Tool Uses</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {analytics?.eventTypes.find(e => e.event === 'crisis_support')?.count || 0}
            </div>
            <div className="text-sm text-gray-600">Crisis Support</div>
          </div>
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
            <div className="space-y-3">
              {analytics?.topPages.slice(0, 8).map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-6">
                      {index + 1}.
                    </span>
                    <span className="text-sm text-gray-600 ml-2 truncate">
                      {page.page || 'Unknown'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {page.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
            <div className="space-y-3">
              {analytics?.topCountries.slice(0, 8).map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-6">
                      {index + 1}.
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      {country.country || 'Unknown'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {country.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Types */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Types</h3>
            <div className="space-y-3">
              {analytics?.eventTypes.map((event, index) => (
                <div key={event.event} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-6">
                      {index + 1}.
                    </span>
                    <span className="text-sm text-gray-600 ml-2 capitalize">
                      {event.event.replace('_', ' ')}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {event.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Activity */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Activity</h3>
            <div className="space-y-3">
              {analytics?.dailyStats.slice(-7).map((day) => (
                <div key={day.date} className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {new Date(day.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      {day.sessions} sessions
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {day.events} events
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Anonymous Analytics Only</p>
              <p>
                All data shown is completely anonymous and aggregated. No personal information, 
                recovery data, user identities, or precise location data is collected. 
                This tracks usage patterns to improve the platform while maintaining complete user anonymity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
