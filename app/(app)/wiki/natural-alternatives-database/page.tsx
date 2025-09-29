export default function NaturalAlternativesDatabasePage() {
  const alternatives = {
    'Happy': [
      {
        activity: 'Dancing to favorite music',
        description: 'Put on your favorite upbeat songs and dance freely around your room or house',
        time: '10-30 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Physical'
      },
      {
        activity: 'Call a close friend or family member',
        description: 'Reach out to someone you care about and have a meaningful conversation',
        time: '15-60 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Social'
      },
      {
        activity: 'Create art or crafts',
        description: 'Draw, paint, write poetry, or work on any creative project that brings you joy',
        time: '30-120 minutes',
        difficulty: 'Beginner',
        cost: 'Low',
        evidence_based: true,
        category: 'Creative'
      },
      {
        activity: 'Practice gratitude journaling',
        description: 'Write down 3-5 things you are grateful for today',
        time: '5-15 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Mindfulness'
      }
    ],
    'Relaxed': [
      {
        activity: 'Deep breathing exercises',
        description: 'Practice 4-7-8 breathing or box breathing for 5-10 minutes',
        time: '5-15 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Mindfulness'
      },
      {
        activity: 'Gentle yoga or stretching',
        description: 'Follow a gentle yoga routine or do basic stretching exercises',
        time: '15-45 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Physical'
      },
      {
        activity: 'Meditation or mindfulness',
        description: 'Use a meditation app or practice mindfulness meditation',
        time: '10-30 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Mindfulness'
      },
      {
        activity: 'Listen to calming music',
        description: 'Create a playlist of soothing music and listen mindfully',
        time: '15-60 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Creative'
      }
    ],
    'Confident': [
      {
        activity: 'Exercise or strength training',
        description: 'Engage in physical activity that makes you feel strong and capable',
        time: '30-60 minutes',
        difficulty: 'Intermediate',
        cost: 'Free',
        evidence_based: true,
        category: 'Physical'
      },
      {
        activity: 'Help someone in need',
        description: 'Volunteer or offer assistance to someone who could use your help',
        time: '30-120 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Social'
      },
      {
        activity: 'Learn a new skill',
        description: 'Take on a new hobby or skill that challenges you and builds competence',
        time: '60+ minutes',
        difficulty: 'Intermediate',
        cost: 'Low',
        evidence_based: true,
        category: 'Creative'
      },
      {
        activity: 'Positive affirmations',
        description: 'Write and repeat positive statements about your strengths and capabilities',
        time: '5-15 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Mindfulness'
      }
    ],
    'Connected': [
      {
        activity: 'Join a community group or club',
        description: 'Find a group that shares your interests and attend regular meetings',
        time: '60+ minutes',
        difficulty: 'Beginner',
        cost: 'Low',
        evidence_based: true,
        category: 'Social'
      },
      {
        activity: 'Volunteer for a cause you care about',
        description: 'Give your time to help others and build meaningful connections',
        time: '60+ minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Social'
      },
      {
        activity: 'Write letters to loved ones',
        description: 'Handwrite letters to friends or family members expressing your care',
        time: '30-60 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Creative'
      },
      {
        activity: 'Practice loving-kindness meditation',
        description: 'Send positive thoughts and well-wishes to yourself and others',
        time: '10-20 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Mindfulness'
      }
    ],
    'Excited': [
      {
        activity: 'Try a new physical activity',
        description: 'Take up a new sport, dance class, or outdoor adventure',
        time: '60+ minutes',
        difficulty: 'Intermediate',
        cost: 'Low',
        evidence_based: true,
        category: 'Physical'
      },
      {
        activity: 'Plan a future adventure',
        description: 'Research and plan a trip, event, or experience you want to have',
        time: '30+ minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Creative'
      },
      {
        activity: 'Attend a live event',
        description: 'Go to concerts, sports games, theater, or other live entertainment',
        time: '60+ minutes',
        difficulty: 'Beginner',
        cost: 'Medium',
        evidence_based: true,
        category: 'Social'
      },
      {
        activity: 'Start a creative project',
        description: 'Begin a new art, music, writing, or craft project that excites you',
        time: '30+ minutes',
        difficulty: 'Beginner',
        cost: 'Low',
        evidence_based: true,
        category: 'Creative'
      }
    ],
    'Peaceful': [
      {
        activity: 'Nature walk or outdoor time',
        description: 'Spend time in nature, whether a park, beach, or hiking trail',
        time: '30+ minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Physical'
      },
      {
        activity: 'Gardening or plant care',
        description: 'Tend to plants, start a garden, or care for indoor plants',
        time: '30+ minutes',
        difficulty: 'Beginner',
        cost: 'Low',
        evidence_based: true,
        category: 'Creative'
      },
      {
        activity: 'Journaling or reflective writing',
        description: 'Write about your thoughts, feelings, and experiences in a journal',
        time: '15-30 minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Creative'
      },
      {
        activity: 'Reading a good book',
        description: 'Read fiction, non-fiction, or poetry that brings you joy and peace',
        time: '30+ minutes',
        difficulty: 'Beginner',
        cost: 'Free',
        evidence_based: true,
        category: 'Creative'
      }
    ]
  }

  const getCostColor = (cost: string) => {
    switch (cost) {
      case 'Free': return 'text-green-600 bg-green-100'
      case 'Low': return 'text-blue-600 bg-blue-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'High': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'Advanced': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Physical': return 'text-blue-600 bg-blue-100'
      case 'Social': return 'text-green-600 bg-green-100'
      case 'Creative': return 'text-purple-600 bg-purple-100'
      case 'Mindfulness': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Natural Alternatives Database
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover healthy, evidence-based activities that can help you achieve the feelings you want 
            without substances. This database contains natural alternatives for common emotional states 
            that people often try to achieve through substance use.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(alternatives).map(([feeling, activities]) => (
            <section key={feeling} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {feeling.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{feeling}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-sm">{activity.activity}</h3>
                      {activity.evidence_based && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Evidence-based
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getCostColor(activity.cost)}`}>
                        💰 {activity.cost}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(activity.difficulty)}`}>
                        📊 {activity.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(activity.category)}`}>
                        🏷️ {activity.category}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      ⏱️ {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* How to Use This Database */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">How to Use This Database</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Identify Your Target Feeling</h4>
                <p className="text-blue-700 text-sm">Think about what feeling you were trying to achieve or change when you used substances.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Browse Alternatives</h4>
                <p className="text-blue-700 text-sm">Look through the activities for that feeling and find ones that appeal to you.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Consider Your Resources</h4>
                <p className="text-blue-700 text-sm">Choose activities that fit your time, budget, and skill level.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Experiment and Track</h4>
                <p className="text-blue-700 text-sm">Try different activities and track which ones work best for you. Build your personal toolkit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Legend */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Activity Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-100 rounded"></span>
              <span className="text-sm text-gray-700">Physical - Body movement and exercise</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-green-100 rounded"></span>
              <span className="text-sm text-gray-700">Social - Connecting with others</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-purple-100 rounded"></span>
              <span className="text-sm text-gray-700">Creative - Artistic and expressive activities</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-orange-100 rounded"></span>
              <span className="text-sm text-gray-700">Mindfulness - Meditation and awareness</span>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Feelings Identification Tool</h4>
              <p className="text-gray-600 text-sm mb-3">Use our interactive tool to identify what feelings you were trying to achieve through substance use.</p>
              <a href="/program/9" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Try the Tool →
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Personalized Alternatives</h4>
              <p className="text-gray-600 text-sm mb-3">Build your personal toolkit of natural alternatives that work for you.</p>
              <a href="/program/9" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Create Your Toolkit →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
