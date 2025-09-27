import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function DigitalDetoxTimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Digital Detox Timeline: What to Expect When Quitting Social Media
          </h1>
          <p className="text-neutral-600">
            Understanding the phases of social media withdrawal and digital detox, from initial discomfort to long-term benefits and mental clarity.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer id="digital-detox" />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Digital Withdrawal is Real</h3>
              <p className="text-blue-700">
                <strong>Social media withdrawal involves real psychological and physical symptoms.</strong> 
                Understanding what to expect can help you prepare for the journey and recognize that 
                discomfort is temporary and part of the healing process.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Understanding Social Media Withdrawal</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🧠 Why Digital Withdrawal Happens</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Dopamine System Disruption</h4>
                <p className="text-sm text-purple-600 mb-2">
                  Social media provides constant micro-doses of dopamine through likes, comments, and new content. 
                  When you stop, your brain needs time to recalibrate its reward system.
                </p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• Brain expects frequent dopamine hits from notifications</li>
                  <li>• Without social media, everyday activities feel less rewarding initially</li>
                  <li>• Dopamine receptors need time to regain sensitivity</li>
                  <li>• Natural reward systems (exercise, socializing, hobbies) become enjoyable again</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Attention System Recovery</h4>
                <p className="text-sm text-purple-600 mb-2">
                  Social media trains your brain for constant task-switching and instant gratification. 
                  Recovery involves rebuilding sustained attention and focus.
                </p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• Attention span has been fragmented by infinite scroll</li>
                  <li>• Brain needs retraining for deep, sustained focus</li>
                  <li>• Tolerance for boredom must be rebuilt</li>
                  <li>• Cognitive control systems strengthen over time</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Digital Detox Timeline Phases</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-3d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">Days 1-3: Acute Withdrawal Phase</h3>
                  <p className="text-sm text-red-600">Most intense discomfort and cravings</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Physical Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Phantom vibrations:</strong> Feeling phone buzz when it doesn&apos;t</li>
                    <li>• <strong>Compulsive reaching:</strong> Automatic hand movements toward phone</li>
                    <li>• <strong>Restlessness:</strong> Physical agitation and fidgeting</li>
                    <li>• <strong>Sleep disruption:</strong> Difficulty falling asleep without scrolling</li>
                    <li>• <strong>Headaches:</strong> From breaking habitual phone checking</li>
                    <li>• <strong>Eye strain relief:</strong> Eyes may feel tired as they adjust</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Psychological Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Intense FOMO:</strong> Fear of missing important updates</li>
                    <li>• <strong>Anxiety:</strong> Worry about what&apos;s happening online</li>
                    <li>• <strong>Boredom intolerance:</strong> Difficulty sitting with nothing to do</li>
                    <li>• <strong>Irritability:</strong> Mood swings and frustration</li>
                    <li>• <strong>Social anxiety:</strong> Worry about how to stay connected</li>
                    <li>• <strong>Identity questioning:</strong> &quot;Who am I without social media?&quot;</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-red-800 text-sm">
                  <strong>This is the hardest phase.</strong> Symptoms are most intense but temporary. 
                  Focus on getting through one day at a time.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-2w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Week 1-2: Adjustment Phase</h3>
                  <p className="text-sm text-orange-600">Learning new routines and coping strategies</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Emerging Improvements</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Reduced phantom vibrations:</strong> Phone checking urges decrease</li>
                    <li>• <strong>Better sleep onset:</strong> Falling asleep without screen time</li>
                    <li>• <strong>Moments of clarity:</strong> Noticing increased present-moment awareness</li>
                    <li>• <strong>Time awareness:</strong> Realizing how much time was spent scrolling</li>
                    <li>• <strong>Reduced comparison:</strong> Less exposure to others&apos; highlight reels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Ongoing Challenges</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Habitual reaching:</strong> Still automatically reaching for phone</li>
                    <li>• <strong>Boredom discomfort:</strong> Difficulty with unstimulated time</li>
                    <li>• <strong>Social pressure:</strong> Friends asking why you&apos;re not online</li>
                    <li>• <strong>News anxiety:</strong> Worry about missing important information</li>
                    <li>• <strong>Entertainment void:</strong> Looking for new ways to fill time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  2-4w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Weeks 2-4: Stabilization Phase</h3>
                  <p className="text-sm text-yellow-600">New habits forming, benefits becoming noticeable</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Cognitive Improvements</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• <strong>Longer attention span:</strong> Can focus on tasks for extended periods</li>
                    <li>• <strong>Deeper thinking:</strong> More thoughtful, less reactive responses</li>
                    <li>• <strong>Better memory:</strong> Less information overload improves retention</li>
                    <li>• <strong>Creative thinking:</strong> Mind has space for original thoughts</li>
                    <li>• <strong>Decision clarity:</strong> Less decision fatigue from constant choices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Emotional Changes</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• <strong>Mood stability:</strong> Less emotional volatility from social comparisons</li>
                    <li>• <strong>Reduced anxiety:</strong> Less constant stimulation and FOMO</li>
                    <li>• <strong>Self-acceptance:</strong> Less comparison to others&apos; curated lives</li>
                    <li>• <strong>Authentic interests:</strong> Rediscovering what you actually enjoy</li>
                    <li>• <strong>Boredom tolerance:</strong> Comfortable with quiet, unstimulated time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-3m
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">Months 1-3: Integration Phase</h3>
                  <p className="text-sm text-green-600">New lifestyle patterns solidifying</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Lifestyle Changes</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>New routines:</strong> Healthy morning and evening routines</li>
                    <li>• <strong>Real-world hobbies:</strong> Engaging in offline activities</li>
                    <li>• <strong>Deeper relationships:</strong> More meaningful face-to-face connections</li>
                    <li>• <strong>Productive habits:</strong> Time redirected to meaningful goals</li>
                    <li>• <strong>Mindful consumption:</strong> Intentional about information intake</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Psychological Benefits</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Authentic self-image:</strong> Identity less dependent on online validation</li>
                    <li>• <strong>Present-moment awareness:</strong> More mindful and engaged with life</li>
                    <li>• <strong>Emotional regulation:</strong> Better at managing difficult emotions</li>
                    <li>• <strong>Life satisfaction:</strong> Greater contentment with real experiences</li>
                    <li>• <strong>Mental clarity:</strong> Clearer thinking and decision-making</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  3m+
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">3+ Months: Long-Term Benefits</h3>
                  <p className="text-sm text-blue-600">Sustained improvements and life transformation</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Cognitive Enhancement</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Deep work ability:</strong> Can focus intensely for hours</li>
                    <li>• <strong>Reading endurance:</strong> Can read books cover to cover again</li>
                    <li>• <strong>Creative problem-solving:</strong> Original thinking and innovation</li>
                    <li>• <strong>Memory improvement:</strong> Better recall and information processing</li>
                    <li>• <strong>Learning capacity:</strong> Faster skill acquisition and retention</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Life Satisfaction</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Authentic relationships:</strong> Deeper, more meaningful connections</li>
                    <li>• <strong>Personal growth:</strong> Pursuing meaningful goals and interests</li>
                    <li>• <strong>Mental peace:</strong> Less anxiety and comparison-driven stress</li>
                    <li>• <strong>Time abundance:</strong> Feeling like you have more time for what matters</li>
                    <li>• <strong>Self-confidence:</strong> Identity based on real accomplishments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Common Withdrawal Symptoms by Category</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🚨 Physical Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Phantom Vibration Syndrome</h4>
                  <p className="text-sm text-red-600 mb-2">
                    Feeling your phone vibrate when it hasn&apos;t - a sign of conditioned response to expect notifications.
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Usually lasts 1-2 weeks</li>
                    <li>• Gradually decreases with time offline</li>
                    <li>• Keeping phone in another room helps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Sleep Changes</h4>
                  <p className="text-sm text-red-600 mb-2">
                    Sleep patterns often improve dramatically without blue light and stimulating content before bed.
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• May initially have trouble falling asleep without scrolling</li>
                    <li>• Sleep quality typically improves within days</li>
                    <li>• REM sleep and dream recall often increase</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🧠 Cognitive Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Attention Withdrawal</h4>
                  <p className="text-sm text-orange-600 mb-2">
                    Difficulty focusing on single tasks after brain has been trained for constant stimulation.
                  </p>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Initial difficulty with sustained attention</li>
                    <li>• Mind may feel &quot;understimulated&quot;</li>
                    <li>• Gradual improvement over weeks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Information Craving</h4>
                  <p className="text-sm text-orange-600 mb-2">
                    Feeling like you&apos;re missing important information or updates from your social networks.
                  </p>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Fear of being &quot;out of the loop&quot;</li>
                    <li>• Compulsive news checking may increase initially</li>
                    <li>• Realize most &quot;important&quot; news wasn&apos;t actually important</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">💭 Emotional Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">FOMO (Fear of Missing Out)</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Anxiety about missing social events, news, or important updates from friends and family.
                  </p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Most intense in first few days</li>
                    <li>• Often discover you missed very little of actual importance</li>
                    <li>• Transforms into JOMO (Joy of Missing Out)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Validation Withdrawal</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Missing the dopamine hits from likes, comments, and social approval through social media.
                  </p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• May feel less &quot;seen&quot; or important initially</li>
                    <li>• Opportunity to develop internal validation</li>
                    <li>• Real-world accomplishments become more satisfying</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">👥 Social Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Social Disconnection Anxiety</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    Worry about maintaining relationships and social connections without social media platforms.
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Fear of losing touch with acquaintances</li>
                    <li>• Worry about missing invitations or events</li>
                    <li>• Often leads to deeper connections with close friends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Identity Questioning</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    Uncertainty about identity and self-worth without online persona and social media presence.
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• &quot;Who am I without my online presence?&quot;</li>
                    <li>• Opportunity to discover authentic self</li>
                    <li>• Identity becomes based on real experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Factors Affecting Withdrawal Timeline</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📱 Usage Patterns</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Daily time spent:</strong> Heavier users typically have more intense withdrawal</li>
                <li>• <strong>Platforms used:</strong> More addictive platforms (TikTok, Instagram) = harder withdrawal</li>
                <li>• <strong>Checking frequency:</strong> Compulsive checkers have more phantom vibration syndrome</li>
                <li>• <strong>Notification settings:</strong> Heavy notification users have stronger conditioning</li>
                <li>• <strong>Duration of use:</strong> Longer history = more ingrained habits</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🧬 Individual Factors</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Age:</strong> Younger users often have more difficulty (brain still developing)</li>
                <li>• <strong>Mental health:</strong> Anxiety/depression may complicate withdrawal</li>
                <li>• <strong>Social support:</strong> Strong offline relationships ease transition</li>
                <li>• <strong>Stress levels:</strong> High stress makes withdrawal more challenging</li>
                <li>• <strong>Other addictions:</strong> Multiple addictive behaviors complicate recovery</li>
                <li>• <strong>Purpose and goals:</strong> Clear life direction aids recovery</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🎯 Approach Taken</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Cold turkey vs. gradual:</strong> Complete break often more effective long-term</li>
                <li>• <strong>Replacement activities:</strong> Having alternatives ready smooths transition</li>
                <li>• <strong>Environmental changes:</strong> Removing apps vs. just limiting use</li>
                <li>• <strong>Support system:</strong> Family/friends understanding makes huge difference</li>
                <li>• <strong>Motivation clarity:</strong> Strong &quot;why&quot; helps push through difficult moments</li>
              </ul>
            </div>
          </div>

          <h2>Strategies for Each Phase</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Days 1-3: Acute Phase Strategies</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Keep phone in another room or give to someone else</li>
                <li>• Have specific activities planned for urge moments</li>
                <li>• Practice deep breathing when anxiety hits</li>
                <li>• Remind yourself: &quot;This discomfort is temporary&quot;</li>
                <li>• Avoid news and information overconsumption</li>
                <li>• Get plenty of sleep and stay hydrated</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Weeks 1-2: Adjustment Phase Strategies</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Establish new morning and evening routines</li>
                <li>• Practice sitting with boredom for short periods</li>
                <li>• Start a creative project or learn a new skill</li>
                <li>• Schedule face-to-face time with friends</li>
                <li>• Keep a journal of benefits you&apos;re noticing</li>
                <li>• Use analog alternatives (physical books, paper maps)</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Long-term: Maintenance Strategies</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Develop a personal mission statement for technology use</li>
                <li>• Create phone-free zones and times</li>
                <li>• Regular digital detox periods (weekly/monthly)</li>
                <li>• Cultivate real-world hobbies and communities</li>
                <li>• Practice mindfulness and present-moment awareness</li>
                <li>• Help others understand digital wellness</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">The Other Side: Life After Social Media</h3>
            <p className="text-green-700 mb-3">
              Thousands of people have successfully reduced or eliminated social media from their lives and report:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• Significantly improved mental health and life satisfaction</li>
              <li>• Better relationships and deeper connections with others</li>
              <li>• Increased productivity and achievement of personal goals</li>
              <li>• Enhanced creativity and original thinking</li>
              <li>• Better sleep quality and overall physical health</li>
              <li>• Greater self-confidence and authentic self-image</li>
              <li>• More time for meaningful activities and experiences</li>
              <li>• Reduced anxiety and comparison-driven stress</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Digital withdrawal symptoms are temporary, but the benefits of reduced 
              social media use can last a lifetime. Every day offline is a day your brain is healing and 
              recalibrating for deeper focus, authentic relationships, and genuine happiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
