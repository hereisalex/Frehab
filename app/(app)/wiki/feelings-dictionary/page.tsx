export default function FeelingsDictionaryPage() {
  const feelings = {
    positive: [
      { name: 'Happy', description: 'A feeling of joy, contentment, and satisfaction', intensity: 'High' },
      { name: 'Excited', description: 'A feeling of enthusiasm, anticipation, and high energy', intensity: 'High' },
      { name: 'Confident', description: 'A feeling of self-assurance, belief in your abilities', intensity: 'Medium' },
      { name: 'Relaxed', description: 'A feeling of calm, peace, and freedom from tension', intensity: 'Medium' },
      { name: 'Peaceful', description: 'A feeling of tranquility, serenity, and inner calm', intensity: 'Medium' },
      { name: 'Connected', description: 'A feeling of belonging, closeness, and emotional intimacy', intensity: 'High' },
      { name: 'Proud', description: 'A feeling of satisfaction in your achievements or qualities', intensity: 'Medium' },
      { name: 'Grateful', description: 'A feeling of appreciation and thankfulness', intensity: 'Medium' },
      { name: 'Hopeful', description: 'A feeling of optimism and expectation for the future', intensity: 'Medium' },
      { name: 'Loved', description: 'A feeling of being cared for, valued, and accepted', intensity: 'High' },
      { name: 'Content', description: 'A feeling of satisfaction and ease with your current situation', intensity: 'Medium' },
      { name: 'Energized', description: 'A feeling of vitality, vigor, and readiness for action', intensity: 'High' },
      { name: 'Inspired', description: 'A feeling of being motivated and creatively stimulated', intensity: 'Medium' },
      { name: 'Proud', description: 'A feeling of satisfaction in your achievements or qualities', intensity: 'Medium' }
    ],
    negative: [
      { name: 'Sad', description: 'A feeling of sorrow, grief, or melancholy', intensity: 'High' },
      { name: 'Anxious', description: 'A feeling of worry, nervousness, and unease', intensity: 'High' },
      { name: 'Angry', description: 'A feeling of strong displeasure, hostility, or rage', intensity: 'High' },
      { name: 'Lonely', description: 'A feeling of isolation, emptiness, and lack of connection', intensity: 'High' },
      { name: 'Stressed', description: 'A feeling of mental or emotional strain and tension', intensity: 'High' },
      { name: 'Overwhelmed', description: 'A feeling of being unable to cope with demands', intensity: 'High' },
      { name: 'Frustrated', description: 'A feeling of annoyance and impatience', intensity: 'Medium' },
      { name: 'Guilty', description: 'A feeling of responsibility for wrongdoing', intensity: 'High' },
      { name: 'Shame', description: 'A feeling of humiliation and worthlessness', intensity: 'High' },
      { name: 'Fear', description: 'A feeling of being afraid or threatened', intensity: 'High' },
      { name: 'Depressed', description: 'A feeling of severe despondency and dejection', intensity: 'High' },
      { name: 'Jealous', description: 'A feeling of resentment toward someone else\'s advantages', intensity: 'Medium' },
      { name: 'Envious', description: 'A feeling of discontent and resentful longing', intensity: 'Medium' },
      { name: 'Ashamed', description: 'A feeling of embarrassment and moral inadequacy', intensity: 'High' }
    ],
    neutral: [
      { name: 'Bored', description: 'A feeling of weariness and lack of interest', intensity: 'Low' },
      { name: 'Numb', description: 'A feeling of emotional emptiness and detachment', intensity: 'Medium' },
      { name: 'Empty', description: 'A feeling of void, meaninglessness, and lack of purpose', intensity: 'Medium' },
      { name: 'Restless', description: 'A feeling of inability to rest or relax', intensity: 'Medium' },
      { name: 'Neutral', description: 'A feeling of neither positive nor negative emotion', intensity: 'Low' },
      { name: 'Indifferent', description: 'A feeling of lack of interest, concern, or sympathy', intensity: 'Low' },
      { name: 'Apathetic', description: 'A feeling of lack of interest, enthusiasm, or concern', intensity: 'Low' },
      { name: 'Disconnected', description: 'A feeling of being separate or isolated from others', intensity: 'Medium' }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Feelings Dictionary
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Understanding and naming your emotions is a crucial skill in recovery. This comprehensive dictionary 
            helps you identify and articulate the full spectrum of human feelings, making it easier to understand 
            what you were trying to achieve through substance use and find healthy alternatives.
          </p>
        </div>

        <div className="space-y-8">
          {/* Positive Feelings */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">+</span>
              </div>
              <h2 className="text-2xl font-semibold text-green-800">Positive Feelings</h2>
            </div>
            <p className="text-gray-600 mb-6">
              These are the feelings we often seek to enhance or maintain through substance use. 
              Understanding what positive emotions you were trying to achieve can help you find 
              natural, healthy ways to experience them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feelings.positive.map((feeling, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-green-800">{feeling.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feeling.intensity === 'High' ? 'bg-red-100 text-red-800' :
                      feeling.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {feeling.intensity} Intensity
                    </span>
                  </div>
                  <p className="text-green-700 text-sm">{feeling.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Negative Feelings */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">-</span>
              </div>
              <h2 className="text-2xl font-semibold text-red-800">Negative Feelings</h2>
            </div>
            <p className="text-gray-600 mb-6">
              These are the feelings we often try to escape, numb, or change through substance use. 
              Learning to identify and process these emotions in healthy ways is essential for recovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feelings.negative.map((feeling, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-red-800">{feeling.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feeling.intensity === 'High' ? 'bg-red-100 text-red-800' :
                      feeling.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {feeling.intensity} Intensity
                    </span>
                  </div>
                  <p className="text-red-700 text-sm">{feeling.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Neutral Feelings */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">~</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Neutral Feelings</h2>
            </div>
            <p className="text-gray-600 mb-6">
              These are the feelings that might lead us to seek stimulation or change through substance use. 
              Learning to sit with neutral emotions and find healthy ways to engage with life is important.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feelings.neutral.map((feeling, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{feeling.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feeling.intensity === 'High' ? 'bg-red-100 text-red-800' :
                      feeling.intensity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {feeling.intensity} Intensity
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{feeling.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* How to Use This Dictionary */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">How to Use This Dictionary</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Identify Your Feelings</h4>
                <p className="text-blue-700 text-sm">When you feel an emotion, try to name it specifically. Instead of "I feel bad," try "I feel anxious" or "I feel lonely."</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Notice Patterns</h4>
                <p className="text-blue-700 text-sm">Pay attention to which feelings you experience most often and which ones you try to avoid or change.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Understand the Function</h4>
                <p className="text-blue-700 text-sm">Ask yourself: "What was I trying to achieve or change when I used substances?" This helps identify the emotional needs behind your use.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Find Natural Alternatives</h4>
                <p className="text-blue-700 text-sm">Once you know what feelings you were seeking, you can find healthy, natural ways to achieve those same emotional states.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Feelings Identification Tool</h4>
              <p className="text-gray-600 text-sm mb-3">Use our interactive tool to identify what feelings you were trying to achieve through substance use.</p>
              <a href="/program/9" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Try the Tool →
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Natural Alternatives Database</h4>
              <p className="text-gray-600 text-sm mb-3">Discover healthy activities that can help you achieve the feelings you want naturally.</p>
              <a href="/wiki/natural-alternatives-database" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Explore Alternatives →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
