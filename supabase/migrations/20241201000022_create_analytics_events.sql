-- Create analytics_events table for privacy-respecting usage tracking
CREATE TABLE IF NOT EXISTS analytics_events (
    id BIGSERIAL PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    page VARCHAR(500),
    properties JSONB DEFAULT '{}',
    timestamp TIMESTAMPTZ NOT NULL,
    session_id VARCHAR(100) NOT NULL,
    user_agent TEXT,
    country VARCHAR(100),
    region VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_analytics_events_timestamp ON analytics_events(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_country ON analytics_events(country);
CREATE INDEX IF NOT EXISTS idx_analytics_events_page ON analytics_events(page);

-- Create a view for daily analytics summary
CREATE OR REPLACE VIEW analytics_daily_summary AS
SELECT 
    DATE(timestamp) as date,
    COUNT(*) as total_events,
    COUNT(DISTINCT session_id) as unique_sessions,
    COUNT(DISTINCT CASE WHEN event_name = 'page_view' THEN session_id END) as page_view_sessions,
    COUNT(CASE WHEN event_name = 'tool_used' THEN 1 END) as tool_usage_events,
    COUNT(CASE WHEN event_name = 'crisis_support' THEN 1 END) as crisis_support_events,
    COUNT(CASE WHEN event_name = 'module_started' THEN 1 END) as module_starts,
    COUNT(CASE WHEN event_name = 'module_completed' THEN 1 END) as module_completions
FROM analytics_events
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- Create a view for country analytics
CREATE OR REPLACE VIEW analytics_country_summary AS
SELECT 
    COALESCE(country, 'Unknown') as country,
    COUNT(*) as total_events,
    COUNT(DISTINCT session_id) as unique_sessions,
    COUNT(DISTINCT DATE(timestamp)) as active_days
FROM analytics_events
WHERE timestamp >= NOW() - INTERVAL '30 days'
GROUP BY country
ORDER BY unique_sessions DESC;

-- Create a view for page analytics
CREATE OR REPLACE VIEW analytics_page_summary AS
SELECT 
    COALESCE(page, 'Unknown') as page,
    COUNT(*) as total_events,
    COUNT(DISTINCT session_id) as unique_sessions,
    AVG(EXTRACT(EPOCH FROM (LAG(timestamp) OVER (PARTITION BY session_id ORDER BY timestamp) - timestamp))) as avg_time_on_page
FROM analytics_events
WHERE event_name = 'page_view'
    AND timestamp >= NOW() - INTERVAL '30 days'
GROUP BY page
ORDER BY unique_sessions DESC;

-- Function to clean old analytics data (optional, for data retention)
CREATE OR REPLACE FUNCTION cleanup_old_analytics(retention_days INTEGER DEFAULT 365)
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM analytics_events 
    WHERE timestamp < NOW() - (retention_days || ' days')::INTERVAL;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Add a comment about data privacy
COMMENT ON TABLE analytics_events IS 'Privacy-respecting analytics events. Contains no personal identifiable information.';
COMMENT ON COLUMN analytics_events.session_id IS 'Random session identifier, not tied to user identity';
COMMENT ON COLUMN analytics_events.properties IS 'Additional event properties (anonymous)';
COMMENT ON COLUMN analytics_events.user_agent IS 'Browser user agent for compatibility analysis';
COMMENT ON COLUMN analytics_events.country IS 'Country-level location only, no precise location data';
