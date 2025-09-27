'use client'

import { useState, useEffect } from 'react'

interface Milestone {
  id: string
  title: string
  description: string
  target: number
  achieved: boolean
  achievedDate?: Date
  icon: string
  category: 'engagement' | 'tools' | 'modules' | 'streaks'
}

interface UserProgress {
  dailyCheckIns: number
  toolsUsed: number
  modulesCompleted: number
  currentStreak: number
  longestStreak: number
  totalEntries: number
}

export default function ProgressTracker() {
  const [progress, setProgress] = useState<UserProgress>({
    dailyCheckIns: 0,
    toolsUsed: 0,
    modulesCompleted: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalEntries: 0
  })

  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: 'first-tool',
      title: 'First Step',
      description: 'Used your first recovery tool',
      target: 1,
      achieved: false,
      icon: '🌱',
      category: 'tools'
    },
    {
      id: 'week-streak',
      title: 'Week Warrior',
      description: 'Maintained a 7-day engagement streak',
      target: 7,
      achieved: false,
      icon: '🔥',
      category: 'streaks'
    },
    {
      id: 'tool-explorer',
      title: 'Tool Explorer',
      description: 'Used all three recovery tools',
      target: 3,
      achieved: false,
      icon: '🛠️',
      category: 'tools'
    },
    {
      id: 'module-starter',
      title: 'Learning Journey',
      description: 'Completed your first module',
      target: 1,
      achieved: false,
      icon: '📚',
      category: 'modules'
    },
    {
      id: 'consistent-user',
      title: 'Consistency Champion',
      description: 'Engaged with the platform 30 times',
      target: 30,
      achieved: false,
      icon: '🏆',
      category: 'engagement'
    },
    {
      id: 'month-streak',
      title: 'Monthly Master',
      description: 'Maintained a 30-day engagement streak',
      target: 30,
      achieved: false,
      icon: '🌟',
      category: 'streaks'
    }
  ])

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('frehab-progress')
    const savedMilestones = localStorage.getItem('frehab-milestones')
    
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
    
    if (savedMilestones) {
      setMilestones(JSON.parse(savedMilestones))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('frehab-progress', JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    localStorage.setItem('frehab-milestones', JSON.stringify(milestones))
  }, [milestones])

  // Check for newly achieved milestones
  useEffect(() => {
    setMilestones(prev => prev.map(milestone => {
      if (milestone.achieved) return milestone

      let currentValue = 0
      switch (milestone.category) {
        case 'tools':
          if (milestone.id === 'first-tool') {
            currentValue = progress.toolsUsed > 0 ? 1 : 0
          } else if (milestone.id === 'tool-explorer') {
            currentValue = progress.toolsUsed
          }
          break
        case 'streaks':
          currentValue = milestone.target <= 7 ? progress.currentStreak : progress.longestStreak
          break
        case 'modules':
          currentValue = progress.modulesCompleted
          break
        case 'engagement':
          currentValue = progress.dailyCheckIns
          break
      }

      if (currentValue >= milestone.target) {
        return {
          ...milestone,
          achieved: true,
          achievedDate: new Date()
        }
      }

      return milestone
    }))
  }, [progress])

  const trackEngagement = () => {
    setProgress(prev => ({
      ...prev,
      dailyCheckIns: prev.dailyCheckIns + 1,
      currentStreak: prev.currentStreak + 1,
      longestStreak: Math.max(prev.longestStreak, prev.currentStreak + 1)
    }))
  }

  const trackToolUsage = () => {
    setProgress(prev => ({
      ...prev,
      toolsUsed: Math.min(prev.toolsUsed + 1, 3), // Max 3 different tools
      totalEntries: prev.totalEntries + 1
    }))
  }

  const trackModuleCompletion = () => {
    setProgress(prev => ({
      ...prev,
      modulesCompleted: prev.modulesCompleted + 1
    }))
  }

  const resetStreak = () => {
    setProgress(prev => ({
      ...prev,
      currentStreak: 0
    }))
  }

  const achievedMilestones = milestones.filter(m => m.achieved)
  const unachievedMilestones = milestones.filter(m => !m.achieved)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Recovery Progress</h2>
          <p className="text-gray-600">
            Track your engagement and celebrate your recovery milestones. Every step forward matters.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{progress.currentStreak}</div>
              <div className="text-sm text-gray-600">Current Streak</div>
              <div className="text-xs text-gray-500">days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{achievedMilestones.length}</div>
              <div className="text-sm text-gray-600">Milestones</div>
              <div className="text-xs text-gray-500">achieved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{progress.modulesCompleted}</div>
              <div className="text-sm text-gray-600">Modules</div>
              <div className="text-xs text-gray-500">completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{progress.totalEntries}</div>
              <div className="text-sm text-gray-600">Tool Entries</div>
              <div className="text-xs text-gray-500">total</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Track Your Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={trackEngagement}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Daily Check-in
            </button>
            <button
              onClick={trackToolUsage}
              className="bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Used Tool
            </button>
            <button
              onClick={trackModuleCompletion}
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Finished Module
            </button>
            <button
              onClick={resetStreak}
              className="bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Reset Streak
            </button>
          </div>
        </div>

        {/* Recent Achievements */}
        {achievedMilestones.length > 0 && (
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievedMilestones.slice(-4).map((milestone) => (
                <div key={milestone.id} className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{milestone.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                      {milestone.achievedDate && (
                        <p className="text-xs text-gray-500 mt-1">
                          Achieved {milestone.achievedDate.toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Milestones */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unachievedMilestones.slice(0, 4).map((milestone) => {
              let currentValue = 0
              switch (milestone.category) {
                case 'tools':
                  if (milestone.id === 'first-tool') {
                    currentValue = progress.toolsUsed > 0 ? 1 : 0
                  } else if (milestone.id === 'tool-explorer') {
                    currentValue = progress.toolsUsed
                  }
                  break
                case 'streaks':
                  currentValue = milestone.target <= 7 ? progress.currentStreak : progress.longestStreak
                  break
                case 'modules':
                  currentValue = progress.modulesCompleted
                  break
                case 'engagement':
                  currentValue = progress.dailyCheckIns
                  break
              }

              const progressPercentage = Math.min((currentValue / milestone.target) * 100, 100)

              return (
                <div key={milestone.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3 opacity-60">{milestone.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    {currentValue} / {milestone.target} ({Math.round(progressPercentage)}%)
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-t border-gray-200">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Keep Going! 💪</h4>
            <p className="text-sm text-gray-600">
              Recovery is a journey of small, consistent steps. Every day you engage with your recovery 
              is a victory worth celebrating. You&apos;re building new habits and a stronger future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
