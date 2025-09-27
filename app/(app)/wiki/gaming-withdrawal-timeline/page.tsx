import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function GamingWithdrawalTimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Gaming Withdrawal Timeline: Recovery from Gaming Addiction
          </h1>
          <p className="text-neutral-600">
            Understanding the phases of gaming addiction recovery, from initial emptiness and identity crisis to rebuilding a meaningful life in the real world.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer id="gaming-withdrawal" />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Gaming Withdrawal is a Real Process</h3>
              <p className="text-blue-700">
                <strong>Recovery from gaming addiction involves predictable phases of psychological adjustment.</strong> 
                Understanding what to expect can help you prepare for challenges and recognize that difficult 
                periods are temporary parts of the healing process.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Why Gaming Withdrawal is Different</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🧠 Unique Aspects of Gaming Addiction Recovery</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Identity and Achievement System Disruption</h4>
                <p className="text-sm text-purple-600 mb-2">
                  Gaming addiction often becomes central to identity and self-worth. Recovery involves rebuilding 
                  identity and finding new sources of achievement and progression.
                </p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• In-game character/avatar often feels like extension of self</li>
                  <li>• Achievement systems (levels, ranks, unlocks) provided clear progression</li>
                  <li>• Real-world goals may feel unclear or overwhelming by comparison</li>
                  <li>• Loss of virtual accomplishments can feel like losing years of work</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Social Connection and Community Loss</h4>
                <p className="text-sm text-purple-600 mb-2">
                  Gaming communities often become primary social groups. Recovery involves grieving the loss 
                  of these relationships and building new real-world connections.
                </p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• Guild/clan members may have been closest friends</li>
                  <li>• Shared experiences and inside jokes from gaming</li>
                  <li>• Fear of losing social connections by quitting</li>
                  <li>• Social anxiety about face-to-face interactions</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Gaming Withdrawal Timeline Phases</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-7d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">Days 1-7: The Void Phase</h3>
                  <p className="text-sm text-red-600">Intense emptiness and loss of purpose</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Emotional Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Profound emptiness:</strong> Life feels meaningless without gaming</li>
                    <li>• <strong>Depression and sadness:</strong> Grieving the loss of virtual world</li>
                    <li>• <strong>Intense boredom:</strong> Nothing feels engaging or stimulating</li>
                    <li>• <strong>Anxiety and restlessness:</strong> Not knowing what to do with time</li>
                    <li>• <strong>Identity confusion:</strong> &quot;Who am I without gaming?&quot;</li>
                    <li>• <strong>Regret and doubt:</strong> Questioning decision to quit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Behavioral Patterns</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Compulsive browsing:</strong> Reddit, YouTube, gaming news</li>
                    <li>• <strong>Sleep disruption:</strong> No gaming to tire oneself out</li>
                    <li>• <strong>Social isolation:</strong> Avoiding gaming friends</li>
                    <li>• <strong>Time distortion:</strong> Days feel impossibly long</li>
                    <li>• <strong>Decision paralysis:</strong> Overwhelmed by non-gaming choices</li>
                    <li>• <strong>Frequent urges:</strong> Strong desire to &quot;check in&quot; on games</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-red-800 text-sm">
                  <strong>This is normal and temporary.</strong> The intense emptiness is your brain adjusting to 
                  life without constant stimulation and artificial achievement. Focus on basic self-care.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-4w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Weeks 1-4: Adjustment and Exploration</h3>
                  <p className="text-sm text-orange-600">Beginning to explore life beyond gaming</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Emerging Improvements</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Sleep normalization:</strong> Better sleep patterns without late-night gaming</li>
                    <li>• <strong>Time awareness:</strong> Realizing how much time gaming consumed</li>
                    <li>• <strong>Physical improvements:</strong> Less eye strain, better posture</li>
                    <li>• <strong>Moments of clarity:</strong> Brief periods of feeling &quot;present&quot;</li>
                    <li>• <strong>Curiosity about alternatives:</strong> Interest in other activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Ongoing Challenges</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Motivation struggles:</strong> Real-world activities feel less rewarding</li>
                    <li>• <strong>Social awkwardness:</strong> Difficulty with face-to-face interactions</li>
                    <li>• <strong>Comparison trap:</strong> Real progress feels slow vs. game progression</li>
                    <li>• <strong>FOMO episodes:</strong> Fear of missing game updates or events</li>
                    <li>• <strong>Trigger exposure:</strong> Seeing gaming content or friends playing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-3m
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Months 1-3: Skill Building and Habit Formation</h3>
                  <p className="text-sm text-yellow-600">Developing new interests and life structures</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">New Developments</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• <strong>Routine establishment:</strong> New daily and weekly structures</li>
                    <li>• <strong>Skill exploration:</strong> Trying new hobbies and activities</li>
                    <li>• <strong>Social re-engagement:</strong> Reconnecting with non-gaming relationships</li>
                    <li>• <strong>Goal setting:</strong> Beginning to set real-world objectives</li>
                    <li>• <strong>Attention improvement:</strong> Better focus on single tasks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Continued Struggles</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• <strong>Patience with progress:</strong> Real skills take longer to develop</li>
                    <li>• <strong>Social skills rebuilding:</strong> Relearning face-to-face communication</li>
                    <li>• <strong>Stress management:</strong> Learning to cope without gaming escape</li>
                    <li>• <strong>Purpose seeking:</strong> Still searching for meaningful direction</li>
                    <li>• <strong>Relapse temptations:</strong> Moments of wanting to return to gaming</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  3-6m
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">Months 3-6: Identity Reconstruction</h3>
                  <p className="text-sm text-green-600">Building new identity and life direction</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Personal Growth</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Identity clarity:</strong> Sense of self beyond gaming</li>
                    <li>• <strong>Value alignment:</strong> Activities matching personal values</li>
                    <li>• <strong>Relationship depth:</strong> Meaningful real-world connections</li>
                    <li>• <strong>Skill competence:</strong> Noticeable progress in new areas</li>
                    <li>• <strong>Future vision:</strong> Clearer goals and life direction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Emotional Regulation</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Stress tolerance:</strong> Better coping with difficulties</li>
                    <li>• <strong>Emotional range:</strong> More varied and authentic emotions</li>
                    <li>• <strong>Present awareness:</strong> Less escapism, more engagement with reality</li>
                    <li>• <strong>Self-compassion:</strong> Less harsh self-judgment</li>
                    <li>• <strong>Achievement satisfaction:</strong> Real accomplishments feel rewarding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  6m+
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">6+ Months: Integrated Life and Growth</h3>
                  <p className="text-sm text-blue-600">Stable recovery with continued personal development</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Life Integration</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Sustainable routines:</strong> Healthy daily and weekly patterns</li>
                    <li>• <strong>Balanced lifestyle:</strong> Work, relationships, hobbies, self-care</li>
                    <li>• <strong>Personal mastery:</strong> Developing expertise in chosen areas</li>
                    <li>• <strong>Leadership roles:</strong> Helping others or taking on responsibilities</li>
                    <li>• <strong>Creative expression:</strong> Original projects and contributions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Recovery Mastery</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Trigger resistance:</strong> Gaming content doesn&apos;t cause urges</li>
                    <li>• <strong>Healthy boundaries:</strong> Can be around gaming without relapsing</li>
                    <li>• <strong>Purpose clarity:</strong> Strong sense of life mission and values</li>
                    <li>• <strong>Helping others:</strong> Sharing recovery experience</li>
                    <li>• <strong>Ongoing growth:</strong> Continued learning and development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Common Withdrawal Symptoms by Category</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">😰 Emotional Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Depression and Emptiness</h4>
                  <p className="text-sm text-red-600 mb-2">
                    Deep sadness and feeling that life has no meaning without gaming achievements and virtual experiences.
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Most intense in first 2-4 weeks</li>
                    <li>• Gradual improvement with new activities</li>
                    <li>• May need professional support if severe</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Anxiety and Restlessness</h4>
                  <p className="text-sm text-red-600 mb-2">
                    Nervousness about how to fill time and anxiety about missing gaming content or falling behind.
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Physical restlessness and fidgeting</li>
                    <li>• Worry about gaming friends or guild</li>
                    <li>• Improves with structured activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🧠 Cognitive Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Attention and Focus Issues</h4>
                  <p className="text-sm text-orange-600 mb-2">
                    Difficulty concentrating on non-gaming tasks after brain adaptation to constant stimulation.
                  </p>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Reading feels difficult initially</li>
                    <li>• Mind wanders during conversations</li>
                    <li>• Improves significantly over 1-3 months</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Decision Fatigue</h4>
                  <p className="text-sm text-orange-600 mb-2">
                    Overwhelmed by choices about how to spend time when gaming provided clear objectives and structure.
                  </p>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Paralysis about what to do with free time</li>
                    <li>• Need for external structure initially</li>
                    <li>• Builds confidence with practice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">👥 Social Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Social Anxiety and Isolation</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Fear and awkwardness in face-to-face social situations after primarily online social interaction.
                  </p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Difficulty making eye contact</li>
                    <li>• Unsure how to start conversations</li>
                    <li>• Gradual improvement with practice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Relationship Strain</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Conflict with gaming friends who don&apos;t understand recovery and family who may not trust the change.
                  </p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Gaming friends may feel abandoned</li>
                    <li>• Family skeptical of lasting change</li>
                    <li>• New relationships take time to develop</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Physical Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Sleep Disruption</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    Changes in sleep patterns after removing late-night gaming sessions and screen time.
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• May fall asleep earlier without gaming</li>
                    <li>• Better sleep quality overall</li>
                    <li>• Vivid dreams may increase initially</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Physical Discomfort</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    Withdrawal from sedentary lifestyle and adjustment to more physical activity and varied postures.
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Restlessness from unused energy</li>
                    <li>• Muscle tension from stress</li>
                    <li>• Improves with exercise and movement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Factors Affecting Recovery Timeline</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🎮 Gaming History Factors</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Duration of addiction:</strong> Longer gaming history = longer adjustment period</li>
                <li>• <strong>Hours per day:</strong> Heavy gamers (8+ hours) have more intense withdrawal</li>
                <li>• <strong>Game types:</strong> MMORPGs and competitive games harder to quit</li>
                <li>• <strong>Social integration:</strong> Games as primary social outlet = more social adjustment needed</li>
                <li>• <strong>Identity integration:</strong> Gaming as core identity = more identity work required</li>
                <li>• <strong>Age started:</strong> Earlier onset often means deeper integration</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🧬 Individual Factors</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Mental health:</strong> Depression, anxiety, ADHD affect recovery timeline</li>
                <li>• <strong>Social support:</strong> Family and friend support accelerates recovery</li>
                <li>• <strong>Life circumstances:</strong> School/work stress complicates recovery</li>
                <li>• <strong>Alternative interests:</strong> Having other hobbies speeds transition</li>
                <li>• <strong>Physical health:</strong> Better fitness improves mood and energy</li>
                <li>• <strong>Age:</strong> Younger people often adapt faster but may struggle more with identity</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🎯 Recovery Approach</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Cold turkey vs. gradual:</strong> Complete break often more effective</li>
                <li>• <strong>Professional help:</strong> Therapy can significantly improve outcomes</li>
                <li>• <strong>Replacement activities:</strong> Having alternatives ready smooths transition</li>
                <li>• <strong>Environment changes:</strong> Moving gaming setup out of bedroom/living area</li>
                <li>• <strong>Social environment:</strong> Distance from heavy gaming friends initially</li>
                <li>• <strong>Structure and routine:</strong> Planned activities reduce decision fatigue</li>
              </ul>
            </div>
          </div>

          <h2>Strategies for Each Recovery Phase</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Week 1: Survival and Basic Needs</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Focus on basic self-care: eating, sleeping, hygiene</li>
                <li>• Remove all gaming devices from bedroom</li>
                <li>• Plan simple activities: walks, movies, basic exercise</li>
                <li>• Avoid gaming content entirely (streams, YouTube, Reddit)</li>
                <li>• Tell trusted people about your decision for accountability</li>
                <li>• Expect and accept that you&apos;ll feel terrible - this is normal</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Weeks 2-4: Structure and Exploration</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Create daily routines with specific times for activities</li>
                <li>• Try multiple new activities to find what interests you</li>
                <li>• Set small, achievable daily goals</li>
                <li>• Start journaling about your experience and feelings</li>
                <li>• Begin reconnecting with non-gaming friends and family</li>
                <li>• Consider therapy or support groups</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Months 1-3: Skill Building and Social Connection</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Commit to learning new skills with regular practice</li>
                <li>• Join clubs, classes, or groups related to your interests</li>
                <li>• Set medium-term goals (1-3 months) for skill development</li>
                <li>• Practice social skills through volunteering or group activities</li>
                <li>• Establish regular exercise routine for physical and mental health</li>
                <li>• Consider career or educational planning</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Long-term: Purpose and Mastery</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Focus on developing expertise in chosen areas</li>
                <li>• Take on leadership roles or mentor others</li>
                <li>• Set long-term life goals aligned with your values</li>
                <li>• Build and maintain diverse relationships</li>
                <li>• Consider how to use your experience to help others</li>
                <li>• Continue personal growth and learning</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">The Other Side: Life After Gaming Addiction</h3>
            <p className="text-green-700 mb-3">
              Thousands of people have successfully recovered from gaming addiction and report:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• <strong>Authentic relationships:</strong> Deeper connections with real people</li>
              <li>• <strong>Real achievement:</strong> Satisfaction from tangible accomplishments</li>
              <li>• <strong>Physical health:</strong> Better fitness, posture, and energy levels</li>
              <li>• <strong>Mental clarity:</strong> Improved focus and cognitive function</li>
              <li>• <strong>Life purpose:</strong> Clear direction and meaningful goals</li>
              <li>• <strong>Emotional range:</strong> Fuller spectrum of authentic emotions</li>
              <li>• <strong>Time abundance:</strong> Feeling like there&apos;s time for everything important</li>
              <li>• <strong>Self-respect:</strong> Pride in overcoming addiction and building real life</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Gaming withdrawal symptoms are temporary, but the benefits of recovery 
              last a lifetime. Every day without gaming is a day your brain is adapting to find satisfaction 
              in real-world achievements, relationships, and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
