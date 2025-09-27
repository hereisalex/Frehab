import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function CannabisWithdrawalTimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Cannabis Withdrawal Timeline & Symptom Management
          </h1>
          <p className="text-neutral-600">
            Understanding cannabis withdrawal syndrome, symptom timeline, and evidence-based management strategies for recovery.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Cannabis Withdrawal is Real</h3>
              <p className="text-green-700">
                <strong>Cannabis withdrawal syndrome is officially recognized in the DSM-5.</strong> 
                While not life-threatening like alcohol withdrawal, cannabis withdrawal can be uncomfortable and challenging. 
                Symptoms are real, temporary, and manageable with the right strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Who Experiences Cannabis Withdrawal?</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">Risk Factors for Cannabis Withdrawal</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">High-Risk Users</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Daily or near-daily cannabis use</li>
                  <li>• High-THC product use (&gt;15% THC)</li>
                  <li>• Multiple times per day usage</li>
                  <li>• Use continuing despite problems</li>
                  <li>• Years of regular use</li>
                  <li>• Concentrates, dabs, or edibles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Lower Risk Users</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Occasional or weekend use only</li>
                  <li>• Low-THC products (CBD-dominant)</li>
                  <li>• Infrequent use patterns</li>
                  <li>• Short duration of use</li>
                  <li>• No tolerance development</li>
                  <li>• Social use only</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded">
              <p className="text-blue-800 text-sm">
                <strong>Key Factor:</strong> About 47% of daily cannabis users experience withdrawal when they stop, 
                compared to 10% of non-daily users.
              </p>
            </div>
          </div>

          <h2>Cannabis Withdrawal Timeline</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-3d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Days 1-3: Withdrawal Begins</h3>
                  <p className="text-sm text-yellow-600">Symptoms start within 24-72 hours</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Early Physical Symptoms</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Sleep difficulties and insomnia</li>
                    <li>• Decreased appetite</li>
                    <li>• Mild headaches</li>
                    <li>• Physical restlessness</li>
                    <li>• Stomach discomfort or nausea</li>
                    <li>• Night sweats or chills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">Early Psychological Symptoms</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Cannabis cravings begin</li>
                    <li>• Mild anxiety or nervousness</li>
                    <li>• Irritability and mood changes</li>
                    <li>• Difficulty concentrating</li>
                    <li>• Unusual or vivid dreams</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  4-14d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Days 4-14: Peak Withdrawal</h3>
                  <p className="text-sm text-orange-600">Symptoms are typically strongest</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Peak Physical Symptoms</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Severe sleep disturbances</li>
                    <li>• Significant appetite loss</li>
                    <li>• Headaches and fatigue</li>
                    <li>• Muscle tension and aches</li>
                    <li>• Tremors or shakiness</li>
                    <li>• Digestive issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Peak Psychological Symptoms</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Intense cannabis cravings</li>
                    <li>• Significant anxiety or panic</li>
                    <li>• Irritability and anger outbursts</li>
                    <li>• Depression and mood swings</li>
                    <li>• Difficulty focusing or thinking</li>
                    <li>• Intense, strange dreams</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  2-4w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">Weeks 2-4: Gradual Improvement</h3>
                  <p className="text-sm text-green-600">Most symptoms begin to resolve</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Improving Symptoms</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Sleep patterns slowly normalize</li>
                    <li>• Appetite gradually returns</li>
                    <li>• Physical discomfort decreases</li>
                    <li>• Energy levels begin to improve</li>
                    <li>• Dreams become less intense</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Ongoing Challenges</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Periodic cravings (especially stress-related)</li>
                    <li>• Mild anxiety in stressful situations</li>
                    <li>• Occasional sleep difficulties</li>
                    <li>• Some concentration problems</li>
                    <li>• Mood fluctuations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-3m
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">Months 1-3: Full Recovery</h3>
                  <p className="text-sm text-blue-600">Most people feel back to normal</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Recovery Signs</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Normal sleep patterns restored</li>
                    <li>• Stable appetite and eating</li>
                    <li>• Improved concentration and memory</li>
                    <li>• Better emotional regulation</li>
                    <li>• Increased motivation and energy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Occasional Challenges</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Situational cravings (parties, stress)</li>
                    <li>• Mild anxiety during high stress</li>
                    <li>• Learning new coping skills</li>
                    <li>• Adjusting to cannabis-free socializing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Managing Specific Withdrawal Symptoms</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">😴 Sleep Problems</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Why Sleep is Disrupted</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    Cannabis suppresses REM sleep. During withdrawal, REM sleep rebounds, causing vivid dreams and insomnia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Sleep Improvement Strategies</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Consistent bedtime routine</li>
                    <li>• No screens 1 hour before bed</li>
                    <li>• Cool, dark sleeping environment</li>
                    <li>• Melatonin (1-3mg) 30 minutes before bed</li>
                    <li>• Chamomile tea or magnesium supplements</li>
                    <li>• Progressive muscle relaxation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">😤 Irritability & Anger</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Why Irritability Occurs</h4>
                  <p className="text-sm text-red-600 mb-2">
                    Cannabis affects emotional regulation. Without it, emotions feel more intense and harder to manage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Anger Management Techniques</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Deep breathing exercises (4-7-8 technique)</li>
                    <li>• Physical exercise to release tension</li>
                    <li>• Time-outs when feeling overwhelmed</li>
                    <li>• Journaling about feelings</li>
                    <li>• Warn family/friends about increased irritability</li>
                    <li>• Practice patience and self-compassion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🍽️ Appetite Changes</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Why Appetite Decreases</h4>
                  <p className="text-sm text-orange-600 mb-2">
                    Cannabis stimulates appetite. During withdrawal, you may lose interest in food entirely.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Nutrition Strategies</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Small, frequent meals every 2-3 hours</li>
                    <li>• Nutrient-dense foods (smoothies, soups)</li>
                    <li>• Stay hydrated with water and herbal teas</li>
                    <li>• Ginger for nausea</li>
                    <li>• Don't force large meals</li>
                    <li>• Light exercise to stimulate appetite</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">😰 Anxiety & Panic</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Why Anxiety Increases</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    Cannabis masks anxiety. During withdrawal, anxiety returns and may feel overwhelming.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Anxiety Management Tools</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Box breathing (4-4-4-4 count)</li>
                    <li>• Grounding techniques (5-4-3-2-1 senses)</li>
                    <li>• Regular exercise (especially cardio)</li>
                    <li>• Limit caffeine intake</li>
                    <li>• Mindfulness meditation apps</li>
                    <li>• Talk to trusted friends or counselor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🧠 Concentration Problems</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-green-700">Why Focus is Difficult</h4>
                  <p className="text-sm text-green-600 mb-2">
                    Cannabis affects attention and memory. During withdrawal, cognitive function temporarily decreases.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-green-700">Focus Improvement Strategies</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Break tasks into smaller steps</li>
                    <li>• Use lists and reminders</li>
                    <li>• Work in short bursts (25-minute intervals)</li>
                    <li>• Minimize distractions</li>
                    <li>• Practice brain training exercises</li>
                    <li>• Be patient - this improves with time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-yellow-600 mb-3">💭 Intense Dreams</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-yellow-700">Why Dreams Become Vivid</h4>
                  <p className="text-sm text-yellow-600 mb-2">
                    Cannabis suppresses REM sleep. During withdrawal, REM sleep rebounds, causing extremely vivid dreams.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-yellow-700">Coping with Dream Changes</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Understand dreams are temporary and normal</li>
                    <li>• Keep a dream journal if helpful</li>
                    <li>• Practice relaxation before bed</li>
                    <li>• Remind yourself dreams aren't real upon waking</li>
                    <li>• Don't be alarmed by strange content</li>
                    <li>• Dreams typically normalize within 2-4 weeks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Natural Remedies and Supplements</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-800 mb-4">🌿 Evidence-Based Natural Support</h3>
            <p className="text-green-700 text-sm mb-4">
              <strong>Note:</strong> Consult with a healthcare provider before starting supplements, especially if you take medications.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">For Sleep & Anxiety</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Melatonin:</strong> 1-3mg for sleep onset</li>
                  <li>• <strong>Magnesium:</strong> 200-400mg for relaxation</li>
                  <li>• <strong>L-Theanine:</strong> 100-200mg for calm focus</li>
                  <li>• <strong>Chamomile tea:</strong> Natural sedative effect</li>
                  <li>• <strong>Valerian root:</strong> Traditional sleep aid</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">For Mood & Appetite</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>B-Complex vitamins:</strong> Support nervous system</li>
                  <li>• <strong>Omega-3 fatty acids:</strong> Brain health and mood</li>
                  <li>• <strong>Probiotics:</strong> Gut-brain connection</li>
                  <li>• <strong>Ginger:</strong> Nausea and appetite</li>
                  <li>• <strong>Vitamin D:</strong> Mood regulation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>When to Seek Professional Help</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">Consider Professional Support If:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Severe Symptoms</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Severe depression or suicidal thoughts</li>
                  <li>• Panic attacks or extreme anxiety</li>
                  <li>• Complete inability to sleep for days</li>
                  <li>• Severe appetite loss with weight loss</li>
                  <li>• Psychotic symptoms (paranoia, hallucinations)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Ongoing Challenges</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Withdrawal symptoms lasting more than 4 weeks</li>
                  <li>• Multiple failed quit attempts</li>
                  <li>• Underlying mental health conditions</li>
                  <li>• No support system or coping skills</li>
                  <li>• Using other substances to cope</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Timeline Factors That Affect Withdrawal</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⏰ Duration and Frequency of Use</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• <strong>Daily users:</strong> 2-4 weeks for most symptoms to resolve</li>
                <li>• <strong>Multiple daily users:</strong> 4-6 weeks for full recovery</li>
                <li>• <strong>Weekend/occasional users:</strong> 1-2 weeks or minimal symptoms</li>
                <li>• <strong>Years of use:</strong> May take 2-3 months for complete normalization</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">💪 THC Potency and Product Type</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>High-THC flower (20%+):</strong> More severe withdrawal</li>
                <li>• <strong>Concentrates/dabs:</strong> Longest and most intense withdrawal</li>
                <li>• <strong>Edibles:</strong> Moderate withdrawal, may last longer</li>
                <li>• <strong>Low-THC/high-CBD:</strong> Minimal or no withdrawal</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🧬 Individual Factors</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• <strong>Age:</strong> Younger users may experience more intense symptoms</li>
                <li>• <strong>Mental health:</strong> Anxiety/depression can worsen withdrawal</li>
                <li>• <strong>Overall health:</strong> Better health = easier withdrawal</li>
                <li>• <strong>Support system:</strong> Strong support improves outcomes</li>
                <li>• <strong>Coping skills:</strong> Better stress management = easier withdrawal</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Hope and Recovery</h3>
            <p className="text-green-700 mb-3">
              Cannabis withdrawal is temporary and manageable:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• Most symptoms peak in the first 1-2 weeks and then improve</li>
              <li>• Physical symptoms typically resolve completely within a month</li>
              <li>• Sleep patterns normalize within 2-6 weeks for most people</li>
              <li>• Mental clarity and motivation improve significantly after withdrawal</li>
              <li>• Many people report feeling more emotionally stable and energetic</li>
              <li>• Each day of withdrawal brings you closer to freedom from cannabis dependence</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Cannabis withdrawal is a sign that your body is healing and returning to its 
              natural state. While uncomfortable, these symptoms are temporary and will pass. Be patient and kind 
              to yourself during this important healing process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
