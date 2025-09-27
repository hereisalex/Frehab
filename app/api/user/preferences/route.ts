import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// GET /api/user/preferences - Get user preferences
export async function GET(request: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get user preferences from profiles table
    const { data, error } = await supabase
      .from('profiles')
      .select('lgbt_insights_enabled')
      .eq('id', user.id)
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch user preferences' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      preferences: {
        lgbt_insights_enabled: data?.lgbt_insights_enabled || false
      }
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/user/preferences - Update user preferences
export async function PUT(request: NextRequest) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { lgbt_insights_enabled } = body

    // Validate input
    if (typeof lgbt_insights_enabled !== 'boolean') {
      return NextResponse.json(
        { error: 'lgbt_insights_enabled must be a boolean' },
        { status: 400 }
      )
    }

    // Update user preferences
    const { data, error } = await supabase
      .from('profiles')
      .update({ lgbt_insights_enabled })
      .eq('id', user.id)
      .select('lgbt_insights_enabled')
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to update user preferences' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      preferences: {
        lgbt_insights_enabled: data.lgbt_insights_enabled
      }
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
