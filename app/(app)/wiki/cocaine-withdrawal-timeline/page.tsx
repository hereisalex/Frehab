import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function CocaineWithdrawalTimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Cocaine Withdrawal Timeline & Recovery Phases
          </h1>
          <p className="text-neutral-600">
            Understanding the phases of cocaine withdrawal from initial crash through long-term recovery, with evidence-based management strategies.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Cocaine Withdrawal is Intensely Psychological</h3>
              <p className="text-red-700">
                <strong>Unlike alcohol or opioids, cocaine withdrawal is primarily psychological rather than physical.</strong> 
                However, this does not make it easier. The psychological symptoms - especially depression and cravings - 
                can be severe and are the primary cause of relapse in early recovery.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>The Three Phases of Cocaine Withdrawal</h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🔥 Phase 1: The Crash</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Duration:</strong> 1-3 days after last use
              </p>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• Severe depression and dysphoria</li>
                <li>• Extreme fatigue and sleepiness</li>
                <li>• Increased appetite</li>
                <li>• Agitation and restlessness</li>
                <li>• Initial intense cravings</li>
                <li>• Anxiety and irritability</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">⚡ Phase 2: Withdrawal</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Duration:</strong> 1-10 weeks
              </p>
              <ul className="text-sm text-orange-600 space-y-1">
                <li>• Continued depression</li>
                <li>• Intense cocaine cravings</li>
                <li>• Sleep disturbances</li>
                <li>• Concentration problems</li>
                <li>• Lack of energy and motivation</li>
                <li>• Social withdrawal</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-600 mb-3">🔄 Phase 3: Extinction</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Duration:</strong> Indefinite (episodic)
              </p>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• Episodic cravings triggered by cues</li>
                <li>• Generally normal mood</li>
                <li>• Improved sleep and energy</li>
                <li>• Ongoing vulnerability to triggers</li>
                <li>• Need for continued vigilance</li>
                <li>• Long-term recovery maintenance</li>
              </ul>
            </div>
          </div>

          <h2>Detailed Withdrawal Timeline</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  0-24h
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">Hours 0-24: Immediate Crash Begins</h3>
                  <p className="text-sm text-red-600">The comedown starts within hours</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Physical Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Extreme fatigue and exhaustion</li>
                    <li>• Hypersomnia (sleeping 12+ hours)</li>
                    <li>• Increased appetite (&quot;munchies&quot;)</li>
                    <li>• Headaches and body aches</li>
                    <li>• Slowed movements and reflexes</li>
                    <li>• General physical discomfort</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Psychological Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Severe depression and hopelessness</li>
                    <li>• Intense cocaine cravings</li>
                    <li>• Anxiety and agitation</li>
                    <li>• Irritability and mood swings</li>
                    <li>• Inability to experience pleasure</li>
                    <li>• Paranoia (especially with crack)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-red-800 text-sm">
                  <strong>Critical Period:</strong> Highest risk for immediate relapse due to intense discomfort and cravings.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-7d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Days 1-7: Peak Crash Phase</h3>
                  <p className="text-sm text-orange-600">Most intense physical and emotional symptoms</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Continuing Physical Effects</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Prolonged periods of sleep (up to 20 hours/day)</li>
                    <li>• Vivid, disturbing dreams</li>
                    <li>• Ravenous appetite and weight gain</li>
                    <li>• Muscle aches and general malaise</li>
                    <li>• Slowed heart rate and blood pressure</li>
                    <li>• Digestive issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Peak Psychological Distress</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Profound depression and despair</li>
                    <li>• Suicidal thoughts or ideation</li>
                    <li>• Intense, constant cocaine cravings</li>
                    <li>• Complete loss of motivation</li>
                    <li>• Severe anxiety and panic attacks</li>
                    <li>• Cognitive fog and confusion</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 rounded">
                <p className="text-orange-800 text-sm">
                  <strong>High Risk Period:</strong> Suicide risk is elevated. Professional support strongly recommended.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-4w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Weeks 1-4: Early Withdrawal Phase</h3>
                  <p className="text-sm text-yellow-600">Gradual improvement but ongoing challenges</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Physical Recovery</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Sleep patterns slowly normalizing</li>
                    <li>• Appetite beginning to regulate</li>
                    <li>• Energy levels gradually improving</li>
                    <li>• Physical aches and pains subsiding</li>
                    <li>• Normal heart rate and blood pressure</li>
                    <li>• Digestive function improving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Ongoing Psychological Challenges</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Persistent but decreasing depression</li>
                    <li>• Continued strong cocaine cravings</li>
                    <li>• Concentration and memory problems</li>
                    <li>• Emotional instability and mood swings</li>
                    <li>• Social anxiety and withdrawal</li>
                    <li>• Difficulty experiencing pleasure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  2-10w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">Weeks 2-10: Extended Withdrawal</h3>
                  <p className="text-sm text-green-600">Continued healing and gradual improvement</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Improving Function</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• More consistent sleep schedule</li>
                    <li>• Stable appetite and eating patterns</li>
                    <li>• Improved energy and motivation</li>
                    <li>• Better concentration and focus</li>
                    <li>• Increased social engagement</li>
                    <li>• Return of some pleasure capacity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Persistent Challenges</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Episodic intense cravings</li>
                    <li>• Triggered depression episodes</li>
                    <li>• Stress-related mood changes</li>
                    <li>• Difficulty with emotional regulation</li>
                    <li>• Vulnerability to environmental triggers</li>
                    <li>• Need for ongoing support</li>
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
                  <h3 className="text-xl font-semibold text-blue-800">Months 3+: Extinction Phase</h3>
                  <p className="text-sm text-blue-600">Long-term recovery with episodic challenges</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Recovery Achievements</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Normal sleep and eating patterns</li>
                    <li>• Stable mood most of the time</li>
                    <li>• Restored cognitive function</li>
                    <li>• Improved relationships and social life</li>
                    <li>• Return to work or school function</li>
                    <li>• Sense of hope and future planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Ongoing Vigilance Needed</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Conditioned responses to triggers</li>
                    <li>• Stress-induced craving episodes</li>
                    <li>• Anniversary reactions</li>
                    <li>• Need for continued coping strategies</li>
                    <li>• Importance of ongoing support</li>
                    <li>• Relapse prevention maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Factors That Affect Withdrawal Timeline</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">⚡ Use Pattern Factors</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Route of administration:</strong> Smoking (crack) = faster addiction, more intense withdrawal</li>
                <li>• <strong>Frequency of use:</strong> Daily use = longer, more severe withdrawal</li>
                <li>• <strong>Amount used:</strong> Higher doses = more intense symptoms</li>
                <li>• <strong>Duration of use:</strong> Years of use = extended withdrawal period</li>
                <li>• <strong>Binge patterns:</strong> Intensive binges = more severe crash</li>
                <li>• <strong>Polysubstance use:</strong> Multiple drugs = complicated withdrawal</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🧬 Individual Factors</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Mental health:</strong> Depression/anxiety = longer withdrawal</li>
                <li>• <strong>Age:</strong> Younger users may recover faster</li>
                <li>• <strong>Overall health:</strong> Better health = easier withdrawal</li>
                <li>• <strong>Genetics:</strong> Family history affects recovery timeline</li>
                <li>• <strong>Support system:</strong> Strong support = better outcomes</li>
                <li>• <strong>Previous quit attempts:</strong> Experience can help or hinder</li>
              </ul>
            </div>
          </div>

          <h2>Managing Cocaine Withdrawal by Phase</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-red-800 mb-3">🔥 Crash Phase Management (Days 1-3)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Immediate Priorities</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Safety first:</strong> Remove access to cocaine</li>
                    <li>• <strong>Sleep:</strong> Allow extended sleep periods</li>
                    <li>• <strong>Nutrition:</strong> Eat regularly despite poor appetite</li>
                    <li>• <strong>Hydration:</strong> Drink water and electrolytes</li>
                    <li>• <strong>Medical check:</strong> Assess for complications</li>
                    <li>• <strong>Support:</strong> Don&apos;t go through this alone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Avoid These Mistakes</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Don&apos;t try to &quot;push through&quot; fatigue</li>
                    <li>• Don&apos;t use other stimulants to feel better</li>
                    <li>• Don&apos;t isolate completely</li>
                    <li>• Don&apos;t make major life decisions</li>
                    <li>• Don&apos;t ignore suicidal thoughts</li>
                    <li>• Don&apos;t keep cocaine or paraphernalia around</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 mb-3">⚡ Withdrawal Phase Management (Weeks 1-10)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Building Recovery Structure</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Routine:</strong> Establish daily structure</li>
                    <li>• <strong>Therapy:</strong> Begin counseling or treatment</li>
                    <li>• <strong>Support groups:</strong> Connect with others in recovery</li>
                    <li>• <strong>Exercise:</strong> Start gentle physical activity</li>
                    <li>• <strong>Hobbies:</strong> Rediscover interests and activities</li>
                    <li>• <strong>Medical care:</strong> Address health consequences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Craving Management</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Practice urge surfing techniques</li>
                    <li>• Identify and avoid triggers</li>
                    <li>• Use distraction and redirection</li>
                    <li>• Connect with support when cravings hit</li>
                    <li>• Remember that cravings are temporary</li>
                    <li>• Develop emergency craving protocols</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">🔄 Extinction Phase Management (Ongoing)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Long-Term Strategies</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Relapse prevention:</strong> Maintain awareness of triggers</li>
                    <li>• <strong>Stress management:</strong> Healthy coping mechanisms</li>
                    <li>• <strong>Life building:</strong> Pursue goals and relationships</li>
                    <li>• <strong>Ongoing support:</strong> Maintain recovery connections</li>
                    <li>• <strong>Health maintenance:</strong> Regular medical check-ups</li>
                    <li>• <strong>Growth mindset:</strong> Continue learning and developing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Warning Signs to Watch</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Increased stress without coping strategies</li>
                    <li>• Social isolation or returning to old friends</li>
                    <li>• Neglecting recovery activities</li>
                    <li>• Romanticizing past cocaine use</li>
                    <li>• Major life changes without support</li>
                    <li>• Overconfidence about recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>When to Seek Professional Help</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">🚨 Seek Immediate Help If:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Emergency Situations</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Suicidal thoughts or plans</li>
                  <li>• Severe depression with hopelessness</li>
                  <li>• Psychotic symptoms (paranoia, hallucinations)</li>
                  <li>• Chest pain or heart problems</li>
                  <li>• Unable to function in daily life</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Consider Professional Support</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Multiple failed quit attempts</li>
                  <li>• Severe withdrawal symptoms</li>
                  <li>• Underlying mental health conditions</li>
                  <li>• No support system available</li>
                  <li>• Polysubstance use complications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Hope in Cocaine Recovery</h3>
            <p className="text-green-700 mb-3">
              Cocaine withdrawal is challenging but temporary and manageable:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• The crash phase typically lasts only 1-3 days</li>
              <li>• Most acute symptoms resolve within 2-4 weeks</li>
              <li>• Brain healing continues for months, bringing improved mood and function</li>
              <li>• Many people achieve long-term recovery from cocaine addiction</li>
              <li>• Each day of recovery strengthens your brain&apos;s natural reward system</li>
              <li>• Recovery often leads to a more fulfilling life than before addiction</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Cocaine withdrawal is primarily a healing process. Your brain is recovering 
              from the intense chemical changes caused by cocaine use. While uncomfortable, withdrawal symptoms 
              are signs that your body is returning to its natural state.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
