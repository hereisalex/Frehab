import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function CocaineDopamineEffectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Cocaine&apos;s Effects on Dopamine and the Brain&apos;s Reward System
          </h1>
          <p className="text-neutral-600">
            Understanding how cocaine hijacks your brain&apos;s natural reward system more powerfully than almost any other substance, and why this makes recovery so challenging.
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
              <h3 className="text-lg font-semibold text-red-800 mb-2">Cocaine Creates the Most Powerful Dopamine Spike</h3>
              <p className="text-red-700">
                <strong>Cocaine increases dopamine levels by 300-400% - more than food, sex, or other drugs.</strong> 
                This massive dopamine surge overwhelms your brain&apos;s natural reward system, making everything else 
                feel less rewarding and creating powerful motivation to use cocaine again.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Understanding Your Brain&apos;s Reward System</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">🧠 How the Normal Brain Reward System Works</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Natural Dopamine Function</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• <strong>Motivation system:</strong> Dopamine drives you to seek food, water, sex, and social connection</li>
                  <li>• <strong>Learning mechanism:</strong> Higher dopamine = brain says &quot;this is important, remember it&quot;</li>
                  <li>• <strong>Prediction system:</strong> Dopamine spikes when good things happen unexpectedly</li>
                  <li>• <strong>Balance mechanism:</strong> Natural highs are followed by gentle returns to baseline</li>
                  <li>• <strong>Variety and adaptation:</strong> Brain naturally seeks diverse rewarding experiences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Normal Dopamine Levels (Baseline = 100%)</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Food (when hungry):</strong> 120-150%</li>
                    <li>• <strong>Sex:</strong> 150-200%</li>
                    <li>• <strong>Exercise:</strong> 120-140%</li>
                    <li>• <strong>Music:</strong> 110-120%</li>
                  </ul>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Social connection:</strong> 120-150%</li>
                    <li>• <strong>Accomplishment:</strong> 130-160%</li>
                    <li>• <strong>Learning something new:</strong> 110-130%</li>
                    <li>• <strong>Helping others:</strong> 120-140%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>How Cocaine Hijacks This System</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-red-800 mb-4">⚡ Cocaine&apos;s Mechanism of Action</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">The Dopamine Transporter Blockade</h4>
                <p className="text-sm text-red-600 mb-3">
                  Normally, dopamine is released and quickly removed by &quot;dopamine transporters.&quot; 
                  Cocaine blocks these transporters, causing dopamine to flood the reward pathways.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white rounded p-4">
                    <h5 className="font-semibold text-red-700 mb-2">Normal Brain</h5>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>1. Neuron releases dopamine</li>
                      <li>2. Dopamine crosses synapse</li>
                      <li>3. Dopamine binds to receptors</li>
                      <li>4. Transporters quickly remove dopamine</li>
                      <li>5. Signal ends, system resets</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-4">
                    <h5 className="font-semibold text-red-700 mb-2">Brain on Cocaine</h5>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>1. Neuron releases dopamine</li>
                      <li>2. Dopamine crosses synapse</li>
                      <li>3. Dopamine binds to receptors</li>
                      <li>4. <strong>Cocaine blocks transporters</strong></li>
                      <li>5. <strong>Dopamine accumulates massively</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Cocaine vs Other Substances: Dopamine Comparison</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">📊 Dopamine Increase by Substance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-medium text-yellow-700">Cocaine (powder)</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-red-200 rounded-full h-4 mr-3">
                      <div className="bg-red-500 h-4 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-red-600">300-400%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-medium text-yellow-700">Crack Cocaine</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-red-200 rounded-full h-4 mr-3">
                      <div className="bg-red-600 h-4 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-red-700">400-500%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-medium text-yellow-700">Methamphetamine</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-orange-200 rounded-full h-4 mr-3">
                      <div className="bg-orange-500 h-4 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-orange-600">200-300%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-medium text-yellow-700">Alcohol</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-blue-200 rounded-full h-4 mr-3">
                      <div className="bg-blue-500 h-4 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-blue-600">150-200%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-medium text-yellow-700">Nicotine</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-green-200 rounded-full h-4 mr-3">
                      <div className="bg-green-500 h-4 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-green-600">120-150%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded">
                  <span className="font-medium text-yellow-700">Cannabis (THC)</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-green-200 rounded-full h-4 mr-3">
                      <div className="bg-green-400 h-4 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-green-500">110-140%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded">
                <p className="text-yellow-800 text-sm">
                  <strong>Key Insight:</strong> Cocaine produces dopamine levels 2-3 times higher than other drugs, 
                  explaining why it&apos;s so uniquely addictive and why other activities feel unrewarding during addiction.
                </p>
              </div>
            </div>
          </div>

          <h2>The Route of Administration Effect</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">👃 Snorting Cocaine (Powder)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-1">Timeline</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Onset:</strong> 3-5 minutes</li>
                    <li>• <strong>Peak:</strong> 15-30 minutes</li>
                    <li>• <strong>Duration:</strong> 30-90 minutes</li>
                    <li>• <strong>Bioavailability:</strong> 60-80%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-1">Dopamine Pattern</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Gradual rise to 300-400% baseline</li>
                    <li>• Sustained elevation for 30-60 minutes</li>
                    <li>• Gradual decline over 1-2 hours</li>
                    <li>• Less intense but longer-lasting high</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">💨 Smoking Crack Cocaine</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">Timeline</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Onset:</strong> 10-20 seconds</li>
                    <li>• <strong>Peak:</strong> 1-3 minutes</li>
                    <li>• <strong>Duration:</strong> 5-15 minutes</li>
                    <li>• <strong>Bioavailability:</strong> 70-90%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">Dopamine Pattern</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Explosive spike to 400-500% baseline</li>
                    <li>• Peak reached in seconds</li>
                    <li>• Rapid decline within 10-15 minutes</li>
                    <li>• More intense but much shorter high</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Why Cocaine is So Addictive: The Perfect Storm</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🌪️ Factors That Make Cocaine Uniquely Addictive</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Neurochemical Factors</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Massive dopamine spike:</strong> 3-5x higher than natural rewards</li>
                  <li>• <strong>Rapid onset:</strong> Especially with crack cocaine</li>
                  <li>• <strong>Short duration:</strong> Creates cycle of repeated use</li>
                  <li>• <strong>Complete blockade:</strong> Blocks 90%+ of dopamine transporters</li>
                  <li>• <strong>No tolerance ceiling:</strong> Can always increase dose</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Behavioral Factors</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Immediate reinforcement:</strong> Reward happens quickly</li>
                  <li>• <strong>Powerful conditioning:</strong> Strong environmental cues</li>
                  <li>• <strong>Binge pattern:</strong> Tends toward compulsive repeated use</li>
                  <li>• <strong>Crash and craving:</strong> Severe withdrawal drives re-use</li>
                  <li>• <strong>Availability:</strong> Relatively accessible in many areas</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>What Happens to Your Brain During Cocaine Addiction</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 mb-3">🧠 Short-Term Brain Changes (Hours to Days)</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• <strong>Dopamine depletion:</strong> Brain runs out of stored dopamine after binges</li>
                <li>• <strong>Receptor sensitivity:</strong> Dopamine receptors become less responsive</li>
                <li>• <strong>Neurotransmitter imbalance:</strong> Serotonin and norepinephrine also affected</li>
                <li>• <strong>Stress hormone elevation:</strong> Cortisol and adrenaline remain high</li>
                <li>• <strong>Sleep disruption:</strong> Normal sleep cycles completely disrupted</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 mb-3">🔄 Medium-Term Adaptations (Weeks to Months)</h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>• <strong>Dopamine system downregulation:</strong> Fewer dopamine receptors and transporters</li>
                <li>• <strong>Tolerance development:</strong> Need more cocaine for same effect</li>
                <li>• <strong>Anhedonia:</strong> Inability to feel pleasure from normal activities</li>
                <li>• <strong>Conditioned responses:</strong> Environmental cues trigger powerful cravings</li>
                <li>• <strong>Executive function impairment:</strong> Decision-making and impulse control damaged</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-red-800 mb-3">⚠️ Long-Term Brain Damage (Months to Years)</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• <strong>Structural brain changes:</strong> Reduced gray matter in frontal cortex</li>
                <li>• <strong>White matter damage:</strong> Disrupted connections between brain regions</li>
                <li>• <strong>Persistent cognitive deficits:</strong> Memory, attention, and learning problems</li>
                <li>• <strong>Emotional regulation damage:</strong> Increased depression and anxiety</li>
                <li>• <strong>Stress system dysregulation:</strong> Chronic activation of stress response</li>
              </ul>
            </div>
          </div>

          <h2>Recovery: How Your Brain Heals</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-green-800 mb-4">🌱 The Recovery Timeline</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Days 1-7: Initial Stabilization</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Dopamine levels begin to normalize from severely depleted state</li>
                  <li>• Sleep patterns start to improve</li>
                  <li>• Acute withdrawal symptoms peak and begin to subside</li>
                  <li>• Stress hormones gradually decrease</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Weeks 2-8: Early Recovery</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Dopamine receptors begin to increase in number and sensitivity</li>
                  <li>• Natural pleasure and motivation slowly return</li>
                  <li>• Cognitive function starts to improve</li>
                  <li>• Mood stability gradually improves</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Months 3-12: Significant Healing</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Dopamine system approaches normal function</li>
                  <li>• Executive function and decision-making improve significantly</li>
                  <li>• Natural activities begin to feel rewarding again</li>
                  <li>• Stress response system normalizes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Years 1+: Long-Term Recovery</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Brain structure continues to heal and adapt</li>
                  <li>• Cognitive function may return to near-normal levels</li>
                  <li>• Conditioned responses to triggers gradually weaken</li>
                  <li>• Natural reward system functions normally</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Supporting Your Brain&apos;s Recovery</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🏃‍♂️ Natural Dopamine Boosters</h3>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• <strong>Exercise:</strong> Increases dopamine and grows new brain cells</li>
                <li>• <strong>Protein-rich foods:</strong> Tyrosine helps rebuild dopamine</li>
                <li>• <strong>Social connection:</strong> Healthy relationships boost natural rewards</li>
                <li>• <strong>Achievement goals:</strong> Small wins rebuild confidence</li>
                <li>• <strong>Creative activities:</strong> Art, music, writing stimulate dopamine</li>
                <li>• <strong>Learning new skills:</strong> Brain plasticity and growth</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🛡️ Brain Protection Strategies</h3>
              <ul className="text-sm text-purple-600 space-y-2">
                <li>• <strong>Quality sleep:</strong> Essential for dopamine system recovery</li>
                <li>• <strong>Stress management:</strong> Chronic stress impairs healing</li>
                <li>• <strong>Nutrition:</strong> B-vitamins, omega-3s, antioxidants</li>
                <li>• <strong>Meditation:</strong> Increases dopamine and reduces cravings</li>
                <li>• <strong>Avoid alcohol:</strong> Interferes with dopamine recovery</li>
                <li>• <strong>Medical monitoring:</strong> Address any health complications</li>
              </ul>
            </div>
          </div>

          <h2>Understanding Cravings in Scientific Terms</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">🔬 Why Cocaine Cravings Are So Intense</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">The Dopamine Prediction Error</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Your brain learns to predict the massive dopamine spike from cocaine. When you encounter 
                  triggers (people, places, stress), your brain anticipates cocaine and craves it intensely.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Conditioned Place Preference</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Environmental cues become so strongly associated with cocaine that simply being in certain 
                  places or around certain people can trigger intense physiological cravings.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Stress-Induced Relapse</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Stress hormones can reactivate the cocaine reward pathway even after long periods of abstinence, 
                  which is why stress management is crucial in recovery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Hope for Recovery</h3>
            <p className="text-green-700 mb-3">
              Understanding cocaine&apos;s effects on your brain helps explain why recovery is challenging, but also why it&apos;s possible:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• Your brain has remarkable ability to heal and adapt (neuroplasticity)</li>
              <li>• Natural dopamine function can be largely restored with time and proper support</li>
              <li>• Many people achieve long-term recovery and report greater life satisfaction than before addiction</li>
              <li>• Each day of abstinence allows your brain to heal further</li>
              <li>• Modern treatment approaches work with brain science, not against it</li>
              <li>• Recovery is not just about stopping cocaine - it&apos;s about rebuilding a rewarding life</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Cocaine addiction is fundamentally a brain disease caused by neurochemical changes. 
              Understanding this science helps reduce shame and guides effective treatment approaches. Recovery is a process 
              of allowing your brain to heal while building new, healthy reward pathways.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
