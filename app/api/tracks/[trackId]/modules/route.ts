import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

// GET /api/tracks/[trackId]/modules - Get modules for a specific track
export async function GET(
  request: NextRequest,
  { params }: { params: { trackId: string } }
) {
  try {
    const { trackId } = params
    const { searchParams } = new URL(request.url)
    const moduleNumberParam = searchParams.get('moduleNumber')
    const moduleNumber = moduleNumberParam ? parseInt(moduleNumberParam, 10) : undefined

    if (!trackId) {
      return NextResponse.json(
        { error: 'Track ID is required' },
        { status: 400 }
      )
    }

    // Use the database function to get track modules with fallback
    const { data, error } = await supabase
      .rpc('get_track_modules', { p_track_id: trackId })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch track modules' },
        { status: 500 }
      )
    }

    // Transform the data to match the expected frontend format
    let modules = data?.map((module: any) => ({
      id: `${module.track_id}_${module.module_number}`, // Unique ID for each track-module combo
      module_number: module.module_number,
      title: module.title,
      description: module.description,
      content: module.content,
      track_info: {
        track_id: module.track_id,
        track_name: module.track_name,
        track_category: module.track_category,
        track_icon: module.track_icon,
        primary_color: module.primary_color,
        secondary_color: module.secondary_color
      }
    })) || []

    if (moduleNumber !== undefined && !Number.isNaN(moduleNumber)) {
      modules = modules.filter((m: any) => m.module_number === moduleNumber)
    }

    return NextResponse.json({
      success: true,
      track_id: trackId,
      modules
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
