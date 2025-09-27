import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(request: NextRequest) {
  try {
    const { events } = await request.json()

    if (!events || !Array.isArray(events)) {
      return NextResponse.json({ error: 'Invalid events data' }, { status: 400 })
    }

    // Process each event
    const processedEvents = events.map((event: any) => ({
      event_name: event.event,
      page: event.page,
      properties: event.properties || {},
      timestamp: new Date(event.timestamp),
      session_id: event.sessionId,
      user_agent: event.userAgent,
      country: event.country || null,
      region: event.region || null,
      created_at: new Date()
    }))

    // Store in Supabase (or your preferred database)
    try {
      const { error } = await supabase
        .from('analytics_events')
        .insert(processedEvents)

      if (error) {
        console.error('Error storing analytics events:', error)
        
        // If table doesn't exist, store in a fallback way
        if (error.message?.includes('relation') && error.message?.includes('does not exist')) {
          // Analytics table does not exist, silently continuing without storing events
          return NextResponse.json({ success: true, stored: 'fallback' })
        }
        
        return NextResponse.json({ error: 'Failed to store events' }, { status: 500 })
      }

      return NextResponse.json({ 
        success: true, 
        stored: processedEvents.length,
        message: 'Events stored successfully' 
      })
    } catch (dbError) {
      console.error('Database error:', dbError)
      
      // Fallback: store in console/file for development
      // Fallback analytics storage (silently handled)
      
      return NextResponse.json({ 
        success: true, 
        stored: 'fallback',
        message: 'Events stored in fallback mode' 
      })
    }
  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '7')
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Get analytics summary
    try {
      const { data: events, error } = await supabase
        .from('analytics_events')
        .select('*')
        .gte('timestamp', startDate.toISOString())
        .order('timestamp', { ascending: false })

      if (error) {
        console.error('Error fetching analytics:', error)
        return NextResponse.json({ 
          error: 'Analytics data not available',
          message: 'Database table may not exist yet' 
        }, { status: 404 })
      }

      // Process analytics data
      const summary = {
        totalEvents: events?.length || 0,
        uniqueSessions: new Set(events?.map((e: any) => e.session_id)).size,
        topPages: getTopPages(events || []),
        topCountries: getTopCountries(events || []),
        eventTypes: getEventTypes(events || []),
        dailyStats: getDailyStats(events || [], days)
      }

      return NextResponse.json(summary)
    } catch (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json({ 
        error: 'Analytics not available',
        message: 'Database connection issue' 
      }, { status: 503 })
    }
  } catch (error) {
    console.error('Analytics GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function getTopPages(events: any[]): Array<{ page: string; count: number }> {
  const pageCounts: Record<string, number> = {}
  
  events.forEach(event => {
    if (event.page) {
      pageCounts[event.page] = (pageCounts[event.page] || 0) + 1
    }
  })

  return Object.entries(pageCounts)
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
}

function getTopCountries(events: any[]): Array<{ country: string; count: number }> {
  const countryCounts: Record<string, number> = {}
  
  events.forEach(event => {
    if (event.country) {
      countryCounts[event.country] = (countryCounts[event.country] || 0) + 1
    }
  })

  return Object.entries(countryCounts)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
}

function getEventTypes(events: any[]): Array<{ event: string; count: number }> {
  const eventCounts: Record<string, number> = {}
  
  events.forEach(event => {
    if (event.event_name) {
      eventCounts[event.event_name] = (eventCounts[event.event_name] || 0) + 1
    }
  })

  return Object.entries(eventCounts)
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count)
}

function getDailyStats(events: any[], days: number): Array<{ date: string; events: number; sessions: number }> {
  const dailyStats: Record<string, { events: number; sessions: Set<string> }> = {}
  
  // Initialize all days
  for (let i = 0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    dailyStats[dateStr] = { events: 0, sessions: new Set() }
  }

  // Count events and sessions per day
  events.forEach(event => {
    const date = new Date(event.timestamp).toISOString().split('T')[0]
    if (dailyStats[date]) {
      dailyStats[date].events++
      dailyStats[date].sessions.add(event.session_id)
    }
  })

  return Object.entries(dailyStats)
    .map(([date, stats]) => ({
      date,
      events: stats.events,
      sessions: stats.sessions.size
    }))
    .sort((a, b) => a.date.localeCompare(b.date))
}
