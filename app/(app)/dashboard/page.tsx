'use client'

import { useAuth } from '@/lib/authContext'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { calculateSobrietyTime } from '@/lib/utils'
import GoalSetupModal from '@/components/GoalSetupModal'

export default function DashboardPage() {
  const { user } = useAuth()
  const [currentAffirmation, setCurrentAffirmation] = useState<string>('')
  const [goalType, setGoalType] = useState<string>('none')
  const [goalStartDate, setGoalStartDate] = useState<Date | null>(null)
  const [goalCustomDescription, setGoalCustomDescription] = useState<string>('')
  const [goalData, setGoalData] = useState({ days: 0, months: 0, years: 0 })
  const [currentStreak, setCurrentStreak] = useState<number>(0)
  const [lastWeekCheckins, setLastWeekCheckins] = useState<boolean[]>([])
  const [todayCheckedIn, setTodayCheckedIn] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const dailyAffirmations = [
    "One day at a time.",
    "Recovery is a journey, not a destination.",
    "You are stronger than you think.",
    "Every step forward is progress.",
    "Today is a new beginning."
  ]

  // Fetch goal data and set initial affirmation
  useEffect(() => {
    const fetchGoalData = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('goal_type, goal_start_date, goal_custom_description')
          .eq('id', user.id)
          .single()

        if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
          console.error('Error fetching goal data:', error)
        }

        if (data) {
          setGoalType(data.goal_type || 'none')
          setGoalCustomDescription(data.goal_custom_description || '')
          
          if (data.goal_start_date) {
            const startDate = new Date(data.goal_start_date)
            setGoalStartDate(startDate)
            
            // Calculate time for abstinence goals
            if (data.goal_type === 'abstinence') {
              const calculated = calculateSobrietyTime(startDate)
              setGoalData(calculated)
            }
          }

          // Fetch custom goal data if needed
          if (data.goal_type === 'custom') {
            await fetchCustomGoalData()
          }
        }
      } catch (error) {
        console.error('Error fetching goal data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGoalData()
    setCurrentAffirmation(dailyAffirmations[Math.floor(Math.random() * dailyAffirmations.length)])
  }, [user])

  const handleNewQuote = () => {
    setCurrentAffirmation(dailyAffirmations[Math.floor(Math.random() * dailyAffirmations.length)])
  }

  const fetchCustomGoalData = async () => {
    if (!user) return

    try {
      // Get current streak using the database function
      const { data: streakData, error: streakError } = await supabase
        .rpc('calculate_current_streak', { user_uuid: user.id })

      if (streakError) {
        console.error('Error fetching streak:', streakError)
      } else {
        setCurrentStreak(streakData || 0)
      }

      // Get last 7 days of check-ins
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
      
      const { data: checkinsData, error: checkinsError } = await supabase
        .from('daily_checkins')
        .select('checkin_date')
        .eq('user_id', user.id)
        .gte('checkin_date', sevenDaysAgo.toISOString().split('T')[0])
        .order('checkin_date', { ascending: true })

      if (checkinsError) {
        console.error('Error fetching check-ins:', checkinsError)
      } else {
        // Create array of last 7 days
        const lastWeek = []
        const today = new Date()
        
        for (let i = 6; i >= 0; i--) {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          const dateStr = date.toISOString().split('T')[0]
          
          const checkedIn = checkinsData?.some(checkin => 
            checkin.checkin_date === dateStr
          ) || false
          
          lastWeek.push(checkedIn)
        }
        
        setLastWeekCheckins(lastWeek)
        setTodayCheckedIn(lastWeek[6]) // Today is the last element
      }
    } catch (error) {
      console.error('Error fetching custom goal data:', error)
    }
  }

  const handleSaveGoal = async (newGoalType: string, startDate?: Date, customDescription?: string) => {
    if (!user) throw new Error('User not authenticated')

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        goal_type: newGoalType,
        goal_start_date: startDate ? startDate.toISOString().split('T')[0] : null,
        goal_custom_description: customDescription || null
      })

    if (error) {
      console.error('Error saving goal:', error)
      throw error
    }

    setGoalType(newGoalType)
    setGoalStartDate(startDate || null)
    setGoalCustomDescription(customDescription || '')
    
    // Calculate time for abstinence goals
    if (newGoalType === 'abstinence' && startDate) {
      const calculated = calculateSobrietyTime(startDate)
      setGoalData(calculated)
    } else {
      setGoalData({ days: 0, months: 0, years: 0 })
    }

    // Fetch custom goal data if switching to custom
    if (newGoalType === 'custom') {
      await fetchCustomGoalData()
    }
  }

  const handleCheckIn = async () => {
    if (!user) return

    try {
      const today = new Date().toISOString().split('T')[0]
      
      const { error } = await supabase
        .from('daily_checkins')
        .insert({
          user_id: user.id,
          checkin_date: today
        })

      if (error) {
        console.error('Error checking in:', error)
        throw error
      }

      // Refresh custom goal data
      await fetchCustomGoalData()
    } catch (error) {
      console.error('Error during check-in:', error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Welcome Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-700 mb-2">
            Welcome to your Dashboard
          </h1>
          <p className="text-slate-600">
            {user?.email ? `Welcome back, ${user.email.split('@')[0]}!` : 'Welcome back!'} 
            Your recovery journey continues here.
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Personal Goal Tracker Widget */}
          {goalType !== 'none' && (
            <div className="lg:col-span-2 xl:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-slate-700">
                    Personal Goal Tracker
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Update Goal
                  </Button>
                </div>
                
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                  </div>
                ) : goalType === 'abstinence' && goalStartDate ? (
                  <>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-1">
                          {goalData.days}
                        </div>
                        <div className="text-sm text-slate-600">Days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-1">
                          {goalData.months}
                        </div>
                        <div className="text-sm text-slate-600">Months</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-1">
                          {goalData.years}
                        </div>
                        <div className="text-sm text-slate-600">Years</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 text-center">
                        Keep going! Every day is a victory.
                      </p>
                      <p className="text-xs text-slate-500 text-center mt-1">
                        Started: {goalStartDate.toLocaleDateString()}
                      </p>
                    </div>
                  </>
                ) : goalType === 'moderation' ? (
                  <div className="text-center py-8">
                    <div className="text-slate-400 mb-4">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Your reduction tracking goal is set!
                    </p>
                    <p className="text-xs text-slate-500">
                      Detailed moderation tracking will be available soon.
                    </p>
                  </div>
                ) : goalType === 'custom' ? (
                  <div className="space-y-6">
                    {/* Custom Goal Description */}
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-700 mb-2">Your Goal</h3>
                      <p className="text-slate-600 text-sm">
                        {goalCustomDescription}
                      </p>
                    </div>

                    {/* Current Streak */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">
                        {currentStreak}
                      </div>
                      <div className="text-sm text-slate-600">
                        {currentStreak === 1 ? 'Day' : 'Days'} Streak
                      </div>
                    </div>

                    {/* Last 7 Days Visual */}
                    <div>
                      <p className="text-sm text-slate-600 mb-3 text-center">Last 7 Days</p>
                      <div className="flex justify-center space-x-2">
                        {lastWeekCheckins.map((checkedIn, index) => (
                          <div
                            key={index}
                            className={`w-8 h-8 rounded-full border-2 ${
                              checkedIn 
                                ? 'bg-primary-500 border-primary-500' 
                                : 'bg-white border-slate-300'
                            }`}
                            title={`${index === 6 ? 'Today' : `${6 - index} days ago`}: ${checkedIn ? 'Completed' : 'Not completed'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Check-in Button */}
                    <div className="text-center">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={handleCheckIn}
                        disabled={todayCheckedIn}
                        className="w-full"
                      >
                        {todayCheckedIn ? 'Completed Today ✓' : 'Mark as Complete for Today'}
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* Goal Setup Widget (shown when no goal is set) */}
          {goalType === 'none' && !loading && (
            <div className="lg:col-span-2 xl:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
                <div className="text-center py-8">
                  <div className="text-slate-400 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    Track Your Progress
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Set up a personal goal to track your recovery journey. Choose what works best for you.
                  </p>
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Set Up Goal
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Core Program Widget */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold text-slate-700 mb-4">
                Your Path to Recovery
              </h2>
              
              <p className="text-slate-600 mb-6">
                The Core Program provides structured guidance, tools, and support 
                to help you build a strong foundation for lasting recovery. 
                Each module builds upon the previous one, creating a comprehensive 
                approach to healing and growth.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Evidence-based recovery methods
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Step-by-step guidance
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Community support integration
                </div>
              </div>
              
              <div className="mt-6">
                <Link href="/program">
                  <Button variant="primary" size="lg" className="w-full">
                    Start Module 1
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Daily Affirmation Widget */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl shadow-lg border border-primary-200 p-6">
              <h2 className="text-xl font-semibold text-slate-700 mb-4">
                Daily Affirmation
              </h2>
              
              <div className="bg-white rounded-lg p-6 mb-4">
                <p className="text-lg text-slate-700 text-center italic">
                  {currentAffirmation ? `"${currentAffirmation}"` : 'Loading...'}
                </p>
              </div>
              
              <div className="text-center">
                <Button variant="secondary" size="sm" onClick={handleNewQuote}>
                  New Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions Widget */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold text-slate-700 mb-4">
                Quick Actions
              </h2>
              
              <div className="space-y-3">
                <Link href="/journal">
                  <Button variant="ghost" size="lg" className="w-full justify-start">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    View Journal Entries
                  </Button>
                </Link>
                
                <Link href="/community">
                  <Button variant="ghost" size="lg" className="w-full justify-start">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Join Community
                  </Button>
                </Link>
                
                <Link href="/wiki">
                  <Button variant="ghost" size="lg" className="w-full justify-start">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Progress Summary Widget */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold text-slate-700 mb-4">
                This Week's Progress
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Journal Entries</span>
                  <span className="text-sm font-medium text-slate-700">3</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Program Modules</span>
                  <span className="text-sm font-medium text-slate-700">1/12</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Community Posts</span>
                  <span className="text-sm font-medium text-slate-700">2</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Days Sober</span>
                  <span className="text-sm font-medium text-primary-600">+7</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-200">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Weekly Goal</p>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">65% Complete</p>
                </div>
              </div>
            </div>
          </div>

                 </div>
       </div>
       
               {/* Goal Setup Modal */}
        <GoalSetupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveGoal}
          currentGoalType={goalType}
          currentStartDate={goalStartDate}
          currentCustomDescription={goalCustomDescription}
        />
     </div>
   )
 }  