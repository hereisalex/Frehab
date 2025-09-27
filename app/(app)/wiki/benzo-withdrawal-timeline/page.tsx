import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function BenzoWithdrawalTimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Benzodiazepine Withdrawal Timeline & Medical Tapering
          </h1>
          <p className="text-neutral-600">
            Understanding benzodiazepine withdrawal phases, medical tapering requirements, and why professional supervision is essential for safety.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer id="benzo-withdrawal" />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">MEDICAL SUPERVISION REQUIRED</h3>
              <p className="text-red-700">
                <strong>Benzodiazepine withdrawal can be life-threatening.</strong> Abrupt discontinuation can cause 
                seizures, delirium, and death. Medical supervision and proper tapering protocols are essential. 
                NEVER attempt to stop benzodiazepines abruptly without medical guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Why Benzodiazepine Withdrawal is Different</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-4">🧠 GABA System Dependence</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">How Benzodiazepines Create Dependence</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>GABA receptor binding:</strong> Benzos enhance the brain&apos;s main inhibitory neurotransmitter</li>
                  <li>• <strong>Rapid tolerance:</strong> Brain reduces natural GABA production and receptor sensitivity</li>
                  <li>• <strong>Physical dependence:</strong> Can develop in as little as 2-4 weeks of regular use</li>
                  <li>• <strong>Rebound hyperexcitability:</strong> Without benzos, brain becomes dangerously overactive</li>
                  <li>• <strong>Seizure risk:</strong> Sudden loss of GABA function can trigger life-threatening seizures</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-3 rounded">
                <p className="text-yellow-800 text-sm">
                  <strong>Key Point:</strong> Even people who take benzodiazepines exactly as prescribed can develop 
                  life-threatening physical dependence. This is not a moral failing or addiction - it&apos;s a medical condition.
                </p>
              </div>
            </div>
          </div>

          <h2>Benzodiazepine Half-Lives and Withdrawal Timing</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">⚡ Short-Acting Benzodiazepines</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">Common Medications</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Alprazolam (Xanax):</strong> 11-15 hour half-life</li>
                    <li>• <strong>Lorazepam (Ativan):</strong> 10-20 hour half-life</li>
                    <li>• <strong>Temazepam (Restoril):</strong> 8-22 hour half-life</li>
                    <li>• <strong>Triazolam (Halcion):</strong> 1.5-5 hour half-life</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">Withdrawal Characteristics</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Onset:</strong> 1-4 days after last dose</li>
                    <li>• <strong>Peak:</strong> 1-2 weeks</li>
                    <li>• <strong>Intensity:</strong> More severe, rapid onset</li>
                    <li>• <strong>Seizure risk:</strong> Higher due to rapid elimination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🐌 Long-Acting Benzodiazepines</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-1">Common Medications</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Diazepam (Valium):</strong> 20-100 hour half-life</li>
                    <li>• <strong>Clonazepam (Klonopin):</strong> 18-50 hour half-life</li>
                    <li>• <strong>Chlordiazepoxide (Librium):</strong> 5-30 hour half-life</li>
                    <li>• <strong>Flurazepam (Dalmane):</strong> 40-250 hour half-life</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-1">Withdrawal Characteristics</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Onset:</strong> 1-7 days after last dose</li>
                    <li>• <strong>Peak:</strong> 2-4 weeks</li>
                    <li>• <strong>Intensity:</strong> More gradual but prolonged</li>
                    <li>• <strong>Seizure risk:</strong> Still present but delayed onset</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Phases of Benzodiazepine Withdrawal</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-7d
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">Days 1-7: Acute Withdrawal Phase</h3>
                  <p className="text-sm text-red-600">Highest risk period for medical complications</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Physical Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>SEIZURES (medical emergency)</strong></li>
                    <li>• Severe tremors and muscle spasms</li>
                    <li>• Hyperthermia (high fever)</li>
                    <li>• Rapid heart rate and high blood pressure</li>
                    <li>• Profuse sweating</li>
                    <li>• Nausea and vomiting</li>
                    <li>• Severe insomnia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Psychological Symptoms</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Delirium and confusion</strong></li>
                    <li>• Severe anxiety and panic attacks</li>
                    <li>• Hallucinations (visual, auditory, tactile)</li>
                    <li>• Paranoia and delusions</li>
                    <li>• Severe depression</li>
                    <li>• Suicidal thoughts</li>
                    <li>• Cognitive impairment</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-red-800 text-sm">
                  <strong>CRITICAL:</strong> This phase requires medical supervision. Seek immediate medical attention 
                  for seizures, delirium, hallucinations, or any signs of medical instability.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-4w
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Weeks 1-4: Early Recovery Phase</h3>
                  <p className="text-sm text-orange-600">Gradual stabilization with ongoing challenges</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Improving Physical Symptoms</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Seizure risk decreases (but still present)</li>
                    <li>• Tremors and muscle tension improve</li>
                    <li>• Heart rate and blood pressure stabilize</li>
                    <li>• Sleep slowly begins to improve</li>
                    <li>• Digestive function returns</li>
                    <li>• Temperature regulation normalizes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Ongoing Psychological Challenges</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Severe anxiety and panic attacks</li>
                    <li>• Depression and mood swings</li>
                    <li>• Concentration and memory problems</li>
                    <li>• Depersonalization/derealization</li>
                    <li>• Hypersensitivity to light, sound, touch</li>
                    <li>• Intense cravings for relief</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  1-6m
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Months 1-6: Protracted Withdrawal</h3>
                  <p className="text-sm text-yellow-600">Windows and waves pattern emerges</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">&quot;Windows&quot; (Good Days)</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Periods of feeling more like yourself</li>
                    <li>• Improved sleep and energy</li>
                    <li>• Better concentration and memory</li>
                    <li>• Reduced anxiety and depression</li>
                    <li>• Hope and optimism return</li>
                    <li>• Windows typically get longer over time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-700">&quot;Waves&quot; (Difficult Days)</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Return of withdrawal symptoms</li>
                    <li>• Intense anxiety and depression</li>
                    <li>• Physical symptoms may resurface</li>
                    <li>• Cognitive fog and confusion</li>
                    <li>• Despair and hopelessness</li>
                    <li>• Waves typically get shorter and less intense</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  6m+
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">Months 6+: Gradual Recovery</h3>
                  <p className="text-sm text-green-600">GABA system healing and function restoration</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Recovery Signs</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Longer, more frequent windows</li>
                    <li>• Shorter, less intense waves</li>
                    <li>• Improved baseline functioning</li>
                    <li>• Better stress tolerance</li>
                    <li>• Return of emotional regulation</li>
                    <li>• Cognitive function improvement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Full Recovery Timeline</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• 12-18 months: Significant improvement for most</li>
                    <li>• 18-24 months: Near-normal function</li>
                    <li>• 2+ years: Full GABA system recovery</li>
                    <li>• Some recover faster, some take longer</li>
                    <li>• Recovery is possible regardless of duration of use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Safe Tapering Protocols</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">📋 The Ashton Manual Protocol</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">General Tapering Principles</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• <strong>Slow and steady:</strong> 10-25% dose reduction every 1-2 weeks</li>
                  <li>• <strong>Convert to Valium:</strong> Switch to long-acting diazepam for smoother taper</li>
                  <li>• <strong>Individualized pace:</strong> Adjust based on withdrawal symptoms</li>
                  <li>• <strong>Hold when needed:</strong> Stay at current dose if symptoms are severe</li>
                  <li>• <strong>Medical supervision:</strong> Work with knowledgeable healthcare provider</li>
                  <li>• <strong>No time pressure:</strong> Taper can take 6 months to 2+ years</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Equivalent Doses (Valium Conversion)</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>1mg Xanax =</strong> 20mg Valium</li>
                    <li>• <strong>1mg Ativan =</strong> 10mg Valium</li>
                    <li>• <strong>1mg Klonopin =</strong> 20mg Valium</li>
                  </ul>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>30mg Restoril =</strong> 10mg Valium</li>
                    <li>• <strong>25mg Librium =</strong> 10mg Valium</li>
                    <li>• <strong>0.25mg Halcion =</strong> 5mg Valium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Managing Withdrawal Symptoms</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">😰 Anxiety and Panic</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Why It&apos;s So Severe</h4>
                  <p className="text-sm text-purple-600 mb-2">
                    GABA is the brain&apos;s main calming neurotransmitter. Without benzos, your brain is in a constant state of hyperarousal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Management Strategies</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Deep breathing exercises (4-7-8 technique)</li>
                    <li>• Progressive muscle relaxation</li>
                    <li>• Mindfulness and grounding techniques</li>
                    <li>• Gentle exercise like walking</li>
                    <li>• Avoid caffeine and stimulants</li>
                    <li>• Consider magnesium supplementation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">😴 Sleep Disturbances</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Common Sleep Problems</h4>
                  <p className="text-sm text-blue-600 mb-2">
                    Insomnia, frequent waking, vivid nightmares, and non-restorative sleep are common in benzo withdrawal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Sleep Support Strategies</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Consistent bedtime routine</li>
                    <li>• Cool, dark sleeping environment</li>
                    <li>• Melatonin (with doctor approval)</li>
                    <li>• Chamomile tea or valerian root</li>
                    <li>• Avoid screens 2 hours before bed</li>
                    <li>• Accept that sleep will be disrupted initially</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🧠 Cognitive Symptoms</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Brain Fog and Memory Issues</h4>
                  <p className="text-sm text-orange-600 mb-2">
                    Concentration problems, memory issues, and cognitive fog are common and usually improve with time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Cognitive Support</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Break tasks into smaller steps</li>
                    <li>• Use lists and reminders</li>
                    <li>• Gentle brain exercises (puzzles, reading)</li>
                    <li>• Omega-3 fatty acids</li>
                    <li>• B-complex vitamins</li>
                    <li>• Be patient - cognitive function returns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">⚡ Hypersensitivity</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Sensory Overload</h4>
                  <p className="text-sm text-red-600 mb-2">
                    Extreme sensitivity to light, sound, touch, and emotions is common due to nervous system hyperarousal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-red-700">Protection Strategies</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Sunglasses and dim lighting</li>
                    <li>• Noise-canceling headphones or earplugs</li>
                    <li>• Soft, comfortable clothing</li>
                    <li>• Limit overwhelming environments</li>
                    <li>• Create calm, quiet spaces</li>
                    <li>• Gentle self-care practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>When to Seek Emergency Medical Care</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">🚨 Seek Immediate Emergency Care If:</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Life-Threatening Symptoms</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• <strong>Seizures or convulsions</strong></li>
                  <li>• <strong>Delirium or severe confusion</strong></li>
                  <li>• <strong>Hallucinations</strong></li>
                  <li>• <strong>High fever (&gt;101°F)</strong></li>
                  <li>• <strong>Severe dehydration</strong></li>
                  <li>• <strong>Chest pain or difficulty breathing</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Serious Mental Health Concerns</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• <strong>Suicidal thoughts or plans</strong></li>
                  <li>• <strong>Severe depression with hopelessness</strong></li>
                  <li>• <strong>Psychotic symptoms</strong></li>
                  <li>• <strong>Inability to function or care for self</strong></li>
                  <li>• <strong>Dangerous behaviors</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Factors Affecting Withdrawal Timeline</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">💊 Medication Factors</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Half-life:</strong> Short-acting benzos have more severe, rapid withdrawal</li>
                <li>• <strong>Potency:</strong> High-potency benzos (Xanax, Klonopin) often harder to withdraw from</li>
                <li>• <strong>Duration of use:</strong> Longer use = more GABA system changes</li>
                <li>• <strong>Dose:</strong> Higher doses generally mean longer withdrawal</li>
                <li>• <strong>Tapering speed:</strong> Faster tapers = more severe symptoms</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🧬 Individual Factors</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Age:</strong> Older adults may have longer withdrawal</li>
                <li>• <strong>Genetics:</strong> GABA receptor variations affect withdrawal</li>
                <li>• <strong>Overall health:</strong> Better health = better resilience</li>
                <li>• <strong>Mental health:</strong> Pre-existing anxiety/depression affects timeline</li>
                <li>• <strong>Support system:</strong> Strong support improves outcomes</li>
                <li>• <strong>Polysubstance use:</strong> Other substances complicate withdrawal</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Hope and Healing</h3>
            <p className="text-green-700 mb-3">
              Benzodiazepine withdrawal is one of the most challenging medical experiences, but recovery is possible:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• The brain has remarkable ability to heal through neuroplasticity</li>
              <li>• GABA receptors can fully recover their normal function</li>
              <li>• Many people report feeling better than before they started benzos</li>
              <li>• Slow tapers significantly reduce withdrawal severity</li>
              <li>• Medical supervision makes withdrawal much safer</li>
              <li>• Support communities understand what you&apos;re going through</li>
              <li>• Each day of progress brings you closer to freedom</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Benzodiazepine withdrawal is a medical process that requires professional 
              guidance and patience. While challenging, full recovery is achievable with proper medical support, 
              appropriate tapering, and time for your nervous system to heal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
