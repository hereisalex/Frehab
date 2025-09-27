'use client'

interface AnalyticsEvent {
  event: string
  page?: string
  properties?: Record<string, any>
  timestamp: number
  sessionId: string
  userAgent: string
  country?: string
  region?: string
}

class AnalyticsManager {
  private sessionId: string
  private isEnabled: boolean
  private events: AnalyticsEvent[] = []
  private flushInterval: NodeJS.Timeout | null = null

  constructor() {
    // Generate a session ID (not tied to user identity)
    this.sessionId = this.generateSessionId()
    
    // Analytics are always enabled since no PII is collected
    this.isEnabled = true
    
    // Set up periodic flushing of events
    this.setupEventFlushing()
  }

  private generateSessionId(): string {
    // Generate a random session ID for this browser session
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
  }

  // Analytics methods removed - no longer needed since analytics are always enabled

  private setupEventFlushing(): void {
    // Flush events every 30 seconds
    this.flushInterval = setInterval(() => {
      this.flushEvents()
    }, 30000)

    // Flush events when page is about to unload
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.flushEvents()
      })
    }
  }

  private async getLocationData(): Promise<{ country?: string; region?: string }> {
    try {
      // Use a privacy-respecting IP geolocation service
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      
      // Only return country and region, no precise location
      return {
        country: data.country_name,
        region: data.region
      }
    } catch (error) {
      console.warn('Could not fetch location data:', error)
      return {}
    }
  }

  public async track(event: string, properties?: Record<string, any>, page?: string): Promise<void> {
    // Always track since no PII is collected

    try {
      const locationData = await this.getLocationData()
      
      const analyticsEvent: AnalyticsEvent = {
        event,
        page: page || window.location.pathname,
        properties: {
          ...properties,
          // Add some useful context
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          platform: navigator.platform,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userAgent: navigator.userAgent,
        ...locationData
      }

      this.events.push(analyticsEvent)

      // If we have too many events, flush them
      if (this.events.length >= 10) {
        this.flushEvents()
      }
    } catch (error) {
      console.warn('Analytics tracking error:', error)
    }
  }

  private async flushEvents(): Promise<void> {
    if (this.events.length === 0) return

    const eventsToFlush = [...this.events]
    this.events = []

    try {
      // Send to your analytics endpoint
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events: eventsToFlush })
      })

      if (!response.ok) {
        console.warn('Failed to send analytics events')
        // Put events back if send failed
        this.events.unshift(...eventsToFlush)
      }
    } catch (error) {
      console.warn('Analytics flush error:', error)
      // Put events back if send failed
      this.events.unshift(...eventsToFlush)
    }
  }

  // Convenience methods for common events
  public trackPageView(page?: string): void {
    this.track('page_view', {}, page)
  }

  public trackToolUsage(tool: string): void {
    this.track('tool_used', { tool })
  }

  public trackModuleStart(moduleNumber: number): void {
    this.track('module_started', { module: moduleNumber })
  }

  public trackModuleComplete(moduleNumber: number): void {
    this.track('module_completed', { module: moduleNumber })
  }

  public trackCrisisSupport(action: string): void {
    this.track('crisis_support', { action })
  }

  public trackEngagement(action: string, properties?: Record<string, any>): void {
    this.track('engagement', { action, ...properties })
  }

  public trackError(error: string, context?: string): void {
    this.track('error', { error, context })
  }
}

// Create a singleton instance
const analytics = new AnalyticsManager()

export default analytics

// Convenience functions for easy usage
export const trackPageView = (page?: string) => analytics.trackPageView(page)
export const trackToolUsage = (tool: string) => analytics.trackToolUsage(tool)
export const trackModuleStart = (moduleNumber: number) => analytics.trackModuleStart(moduleNumber)
export const trackModuleComplete = (moduleNumber: number) => analytics.trackModuleComplete(moduleNumber)
export const trackCrisisSupport = (action: string) => analytics.trackCrisisSupport(action)
export const trackEngagement = (action: string, properties?: Record<string, any>) => analytics.trackEngagement(action, properties)
export const trackError = (error: string, context?: string) => analytics.trackError(error, context)
// setAnalyticsConsent removed - analytics are always enabled
