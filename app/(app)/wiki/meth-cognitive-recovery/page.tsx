import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function MethCognitiveRecoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Cognitive Recovery After Methamphetamine Use
          </h1>
          <p className="text-neutral-600">
            Understanding brain healing and strategies to restore cognitive function after methamphetamine addiction.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">The Good News About Brain Recovery</h3>
              <p className="text-blue-700">
                While methamphetamine causes significant brain changes, <strong>recovery is possible</strong>. 
                Research shows that most cognitive functions can improve significantly with time and proper support. 
                Your brain has remarkable healing capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>How Methamphetamine Affects the Brain</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🧠 Areas Most Affected</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Dopamine System:</strong> Reward pathways and motivation</li>
                <li>• <strong>Frontal Cortex:</strong> Executive function and decision-making</li>
                <li>• <strong>Hippocampus:</strong> Memory formation and recall</li>
                <li>• <strong>Striatum:</strong> Movement control and habit formation</li>
                <li>• <strong>Anterior Cingulate:</strong> Attention and emotional regulation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">⚡ Types of Damage</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Neurotoxicity:</strong> Direct damage to brain cells</li>
                <li>• <strong>Reduced Blood Flow:</strong> Decreased oxygen to brain regions</li>
                <li>• <strong>Inflammation:</strong> Immune system attacks brain tissue</li>
                <li>• <strong>Oxidative Stress:</strong> Free radical damage to neurons</li>
                <li>• <strong>Structural Changes:</strong> Altered brain architecture</li>
              </ul>
            </div>
          </div>

          <h2>Cognitive Problems in Meth Recovery</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Memory Problems</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">What You Might Experience</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Forgetting recent conversations</li>
                    <li>• Difficulty learning new information</li>
                    <li>• Trouble remembering appointments</li>
                    <li>• Lost items and missed commitments</li>
                    <li>• Difficulty following complex instructions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Helpful Strategies</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Use calendars and reminder apps</li>
                    <li>• Write important information down</li>
                    <li>• Create routines and stick to them</li>
                    <li>• Use visual cues and associations</li>
                    <li>• Practice active listening techniques</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Attention & Concentration</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Common Challenges</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Getting distracted easily</li>
                    <li>• Difficulty focusing on tasks</li>
                    <li>• Mind wandering during conversations</li>
                    <li>• Trouble reading for extended periods</li>
                    <li>• Inability to filter out background noise</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Improvement Techniques</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Start with short focus periods (5-10 mins)</li>
                    <li>• Eliminate distractions from environment</li>
                    <li>• Practice mindfulness meditation</li>
                    <li>• Use the Pomodoro Technique</li>
                    <li>• Take regular breaks to prevent fatigue</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Executive Function</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Problems You May Notice</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Poor planning and organization</li>
                    <li>• Difficulty making decisions</li>
                    <li>• Problems solving complex tasks</li>
                    <li>• Impulsive behavior</li>
                    <li>• Trouble prioritizing tasks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Building These Skills</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Break large tasks into smaller steps</li>
                    <li>• Use daily and weekly planning tools</li>
                    <li>• Practice decision-making with low stakes</li>
                    <li>• Create structured daily routines</li>
                    <li>• Ask others to help with complex decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Brain Recovery Timeline</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-red-800">0-3M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 0-3: Initial Recovery</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>What's happening:</strong> Brain begins initial healing process. Inflammation starts to reduce.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cognitive state:</strong> Severe impairment in most areas. Focus on basic daily functioning 
                    and avoiding overwhelming tasks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-orange-800">3-6M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 3-6: Early Improvement</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>What's happening:</strong> New neural connections begin forming. Blood flow starts improving.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cognitive state:</strong> Noticeable improvements in attention and basic memory. 
                    Can begin more structured cognitive exercises.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-yellow-800">6-12M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Months 6-12: Significant Recovery</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>What's happening:</strong> Major neuroplasticity and rewiring. Dopamine system begins normalizing.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cognitive state:</strong> Substantial improvements in most areas. Can handle complex tasks 
                    with support and strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-green-800">1-2Y</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Years 1-2: Near-Complete Recovery</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>What's happening:</strong> Most structural brain changes have healed. New habits are solidified.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cognitive state:</strong> Most functions return to normal or near-normal levels. 
                    Some areas may still benefit from ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Cognitive Rehabilitation Strategies</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🎯 Brain Training Exercises</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Lumosity or Peak:</strong> Scientifically designed brain games</li>
                <li>• <strong>Dual N-Back:</strong> Working memory improvement</li>
                <li>• <strong>Cogmed:</strong> Professional attention training</li>
                <li>• <strong>Reading practice:</strong> Start with simple material, progress up</li>
                <li>• <strong>Puzzles:</strong> Crosswords, sudoku, jigsaw puzzles</li>
                <li>• <strong>Memory games:</strong> Card matching, sequence recall</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🧘 Mindfulness & Meditation</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Focused attention:</strong> Single-point concentration practice</li>
                <li>• <strong>Body scanning:</strong> Systematic attention to physical sensations</li>
                <li>• <strong>Walking meditation:</strong> Mindful movement practice</li>
                <li>• <strong>Breathing exercises:</strong> Attention anchoring techniques</li>
                <li>• <strong>Apps:</strong> Headspace, Calm, or Insight Timer</li>
                <li>• <strong>Progressive training:</strong> Start with 5 minutes, build up</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">📚 Learning & Education</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Online courses:</strong> Khan Academy, Coursera (start simple)</li>
                <li>• <strong>Language learning:</strong> Duolingo, Babbel for neural plasticity</li>
                <li>• <strong>Skill building:</strong> Learn new hobbies or crafts</li>
                <li>• <strong>Reading progression:</strong> Articles → short books → complex texts</li>
                <li>• <strong>Educational videos:</strong> TED talks, documentaries</li>
                <li>• <strong>Note-taking practice:</strong> Summarizing and organizing information</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🏃 Physical Exercise</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Aerobic exercise:</strong> Increases BDNF (brain growth factor)</li>
                <li>• <strong>Yoga:</strong> Combines physical and cognitive training</li>
                <li>• <strong>Dancing:</strong> Coordination, memory, and social interaction</li>
                <li>• <strong>Martial arts:</strong> Focus, discipline, and motor control</li>
                <li>• <strong>Team sports:</strong> Decision-making and social cognition</li>
                <li>• <strong>Swimming:</strong> Full-body coordination and endurance</li>
              </ul>
            </div>
          </div>

          <h2>Lifestyle Factors for Brain Healing</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-800 mb-4">Optimize Your Brain Environment</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Nutrition for Brain Health</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Omega-3 fatty acids (fish, walnuts, flaxseed)</li>
                  <li>• Antioxidants (blueberries, dark chocolate)</li>
                  <li>• B-vitamins (especially B12, folate)</li>
                  <li>• Protein for neurotransmitter production</li>
                  <li>• Avoid sugar spikes that impair cognition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Sleep & Recovery</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• 7-9 hours of quality sleep nightly</li>
                  <li>• Consistent sleep schedule</li>
                  <li>• Dark, cool sleeping environment</li>
                  <li>• Avoid screens before bedtime</li>
                  <li>• Naps limited to 20-30 minutes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Stress Management</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Chronic stress impairs brain healing</li>
                  <li>• Practice relaxation techniques daily</li>
                  <li>• Maintain social connections</li>
                  <li>• Set realistic expectations</li>
                  <li>• Professional therapy if needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Environmental Support</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Organized, clutter-free living space</li>
                  <li>• Minimize distractions during focus time</li>
                  <li>• Use external memory aids (calendars, apps)</li>
                  <li>• Create structured daily routines</li>
                  <li>• Surround yourself with supportive people</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Working with Healthcare Providers</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-3">Professional Cognitive Assessment</h3>
            <p className="text-blue-700 mb-3">
              Consider getting a formal neuropsychological evaluation to:
            </p>
            <ul className="text-blue-700 space-y-1 mb-4">
              <li>• Identify specific areas of impairment</li>
              <li>• Track improvement over time</li>
              <li>• Qualify for cognitive rehabilitation services</li>
              <li>• Develop personalized treatment plans</li>
              <li>• Document disability if needed for work/benefits</li>
            </ul>
            
            <h4 className="font-semibold text-blue-800 mb-2">Types of Professionals Who Can Help</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Neuropsychologists</li>
                  <li>• Occupational therapists</li>
                  <li>• Speech-language pathologists</li>
                </ul>
              </div>
              <div>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Cognitive rehabilitation specialists</li>
                  <li>• Addiction counselors with brain injury training</li>
                  <li>• Psychiatrists familiar with stimulant recovery</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Staying Motivated During Recovery</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-3">Remember: Progress Isn't Always Linear</h3>
            <div className="space-y-3">
              <p className="text-yellow-700">
                <strong>Good days and bad days are normal.</strong> Your brain is doing massive reconstruction work, 
                and some days will feel better than others.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Track Your Progress</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Keep a daily cognitive journal</li>
                    <li>• Note improvements, even small ones</li>
                    <li>• Take cognitive assessments monthly</li>
                    <li>• Celebrate milestones and victories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Be Patient with Yourself</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Recovery takes time - often 1-2 years</li>
                    <li>• Comparing yourself to others isn't helpful</li>
                    <li>• Focus on effort, not just results</li>
                    <li>• Ask for help when you need it</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">The Science of Hope</h3>
            <p className="text-green-700 mb-3">
              Recent research shows incredible recovery potential after methamphetamine use:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• Most cognitive functions can recover to normal or near-normal levels</li>
              <li>• The brain continues to heal for years after stopping use</li>
              <li>• People who engage in cognitive rehabilitation show better outcomes</li>
              <li>• Many former users report sharper thinking than before their addiction began</li>
              <li>• Every month of recovery allows more healing to occur</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Your brain is remarkably adaptable. With time, patience, and the right 
              strategies, most cognitive function can be restored. Focus on progress, not perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
