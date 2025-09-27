import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function THCCBDDifferencesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            THC vs CBD: Understanding Cannabis Components
          </h1>
          <p className="text-neutral-600">
            Learn the critical differences between THC and CBD, how they affect your brain differently, and why THC concentration matters for addiction risk.
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
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Not All Cannabis is the Same</h3>
              <p className="text-blue-700">
                <strong>THC and CBD have completely different effects on your brain and addiction risk.</strong> 
                Understanding these differences is crucial for making informed decisions about cannabis use and recovery. 
                Today's high-THC cannabis is fundamentally different from historical marijuana.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>THC vs CBD: The Basic Differences</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🔴 THC (Tetrahydrocannabinol)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">What It Does</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Creates the "high" or psychoactive effects</li>
                    <li>• Binds strongly to CB1 brain receptors</li>
                    <li>• Impairs memory, coordination, and judgment</li>
                    <li>• Causes euphoria and altered perception</li>
                    <li>• Increases appetite ("munchies")</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">Addiction Risk</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>High addiction potential</strong></li>
                    <li>• Creates tolerance and dependence</li>
                    <li>• Causes withdrawal symptoms</li>
                    <li>• Higher concentrations = higher risk</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🟢 CBD (Cannabidiol)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-700 mb-1">What It Does</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• No psychoactive "high" effects</li>
                    <li>• May reduce anxiety and inflammation</li>
                    <li>• Potential anti-seizure properties</li>
                    <li>• May improve sleep quality</li>
                    <li>• Generally well-tolerated</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Addiction Risk</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Very low addiction potential</strong></li>
                    <li>• No significant tolerance development</li>
                    <li>• Minimal withdrawal symptoms</li>
                    <li>• May actually reduce THC's effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>How THC and CBD Interact in Your Brain</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🧠 The Endocannabinoid System</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">THC's Brain Effects</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>CB1 receptor activation:</strong> Creates the high</li>
                  <li>• <strong>Dopamine release:</strong> Reward pathway activation</li>
                  <li>• <strong>Memory impairment:</strong> Hippocampus disruption</li>
                  <li>• <strong>Coordination issues:</strong> Cerebellum effects</li>
                  <li>• <strong>Tolerance building:</strong> Receptors become less sensitive</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">CBD's Brain Effects</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Indirect action:</strong> Doesn't bind directly to CB1</li>
                  <li>• <strong>Modulating effect:</strong> May reduce THC's intensity</li>
                  <li>• <strong>Anxiety reduction:</strong> Serotonin pathway effects</li>
                  <li>• <strong>Anti-inflammatory:</strong> Reduces brain inflammation</li>
                  <li>• <strong>Neuroprotective:</strong> May protect brain cells</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>THC Potency: Then vs Now</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">📈 The Potency Revolution</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="bg-yellow-200 rounded-lg p-4 mb-3">
                    <h4 className="font-bold text-yellow-800 text-2xl">3-5%</h4>
                    <p className="text-sm text-yellow-700">1960s-1980s THC</p>
                  </div>
                  <h5 className="font-semibold text-yellow-700 mb-1">Historical Cannabis</h5>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• Natural outdoor growing</li>
                    <li>• Seeds and stems included</li>
                    <li>• Lower addiction rates</li>
                    <li>• Milder effects</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-200 rounded-lg p-4 mb-3">
                    <h4 className="font-bold text-orange-800 text-2xl">15-25%</h4>
                    <p className="text-sm text-orange-700">2010s THC</p>
                  </div>
                  <h5 className="font-semibold text-orange-700 mb-1">Modern Cannabis</h5>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Selective breeding</li>
                    <li>• Indoor cultivation</li>
                    <li>• Sinsemilla (seedless)</li>
                    <li>• Higher addiction risk</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-red-200 rounded-lg p-4 mb-3">
                    <h4 className="font-bold text-red-800 text-2xl">80-99%</h4>
                    <p className="text-sm text-red-700">Concentrates/Dabs</p>
                  </div>
                  <h5 className="font-semibold text-red-700 mb-1">Ultra-High Potency</h5>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Chemical extraction</li>
                    <li>• Nearly pure THC</li>
                    <li>• Very high addiction risk</li>
                    <li>• Severe withdrawal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Why Higher THC Means Higher Addiction Risk</h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-red-800 mb-4">⚠️ The Potency-Addiction Connection</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Neurobiological Factors</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• <strong>Stronger CB1 activation:</strong> More intense reward pathway stimulation</li>
                  <li>• <strong>Faster tolerance:</strong> Brain adapts more quickly to high THC levels</li>
                  <li>• <strong>Greater dependence:</strong> Body becomes more reliant on external cannabinoids</li>
                  <li>• <strong>Worse withdrawal:</strong> More severe symptoms when stopping</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Research Findings</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• People using high-THC cannabis are 4x more likely to develop addiction</li>
                  <li>• Higher THC associated with increased psychosis risk</li>
                  <li>• Concentrate users show more severe withdrawal symptoms</li>
                  <li>• Treatment programs report more high-THC related admissions</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>THC:CBD Ratios and Their Effects</h2>

          <div className="grid gap-4 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">High THC, Low CBD (20:1 or higher)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Common Products</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Most recreational marijuana strains</li>
                    <li>• Concentrates, dabs, wax</li>
                    <li>• High-THC edibles</li>
                    <li>• Vape cartridges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Effects & Risks</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Highest addiction potential</strong></li>
                    <li>• Strong psychoactive effects</li>
                    <li>• Increased anxiety/paranoia risk</li>
                    <li>• More severe withdrawal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Balanced THC:CBD (1:1 to 2:1)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Common Products</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Some medical marijuana strains</li>
                    <li>• Specific balanced edibles</li>
                    <li>• Certain tinctures</li>
                    <li>• Targeted medical products</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Effects & Risks</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Moderate addiction potential</strong></li>
                    <li>• CBD may reduce THC's intensity</li>
                    <li>• Less anxiety and paranoia</li>
                    <li>• Milder withdrawal symptoms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">High CBD, Low THC (20:1 CBD or higher)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Common Products</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• CBD oils and tinctures</li>
                    <li>• Hemp-derived products</li>
                    <li>• Medical CBD preparations</li>
                    <li>• CBD edibles and topicals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Effects & Risks</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Very low addiction potential</strong></li>
                    <li>• No significant psychoactive effects</li>
                    <li>• Potential therapeutic benefits</li>
                    <li>• Minimal withdrawal risk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>How to Identify THC and CBD Content</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">🏷️ Reading Cannabis Labels</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">What to Look For</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• <strong>THC percentage:</strong> Total THC content</li>
                  <li>• <strong>CBD percentage:</strong> Total CBD content</li>
                  <li>• <strong>THC:CBD ratio:</strong> Often listed as ratio</li>
                  <li>• <strong>Serving size:</strong> Especially for edibles</li>
                  <li>• <strong>Third-party testing:</strong> Lab verification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Red Flags</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• No labeling (illegal/black market)</li>
                  <li>• Suspiciously high THC claims (&gt;35%)</li>
                  <li>• No CBD content listed</li>
                  <li>• Missing lab test results</li>
                  <li>• Unclear serving sizes</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Making Informed Decisions</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 mb-3">✅ Lower-Risk Options (If Using)</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• <strong>Choose high-CBD, low-THC products</strong> (CBD:THC ratios of 10:1 or higher)</li>
                <li>• <strong>Avoid concentrates and dabs</strong> (too high in THC for safe use)</li>
                <li>• <strong>Start with very small amounts</strong> and wait before taking more</li>
                <li>• <strong>Use infrequently</strong> (once a week or less) to prevent tolerance</li>
                <li>• <strong>Don't use daily</strong> as this rapidly leads to dependence</li>
                <li>• <strong>Buy from legal, tested sources</strong> when available</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-red-800 mb-3">❌ Higher-Risk Patterns to Avoid</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• <strong>Daily or near-daily use</strong> of any THC-containing products</li>
                <li>• <strong>Using high-THC products</strong> (&gt;15% THC) regularly</li>
                <li>• <strong>Concentrates, dabs, or wax</strong> use of any frequency</li>
                <li>• <strong>Using to cope with stress, anxiety, or sleep</strong> problems</li>
                <li>• <strong>Increasing amounts</strong> to get the same effect (tolerance)</li>
                <li>• <strong>Continuing use despite problems</strong> with work, relationships, or health</li>
              </ul>
            </div>
          </div>

          <h2>CBD for Cannabis Recovery</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🌿 Can CBD Help with Cannabis Addiction?</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Potential Benefits</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• May reduce anxiety during THC withdrawal</li>
                  <li>• Could help with sleep problems</li>
                  <li>• Might reduce THC cravings (limited research)</li>
                  <li>• No addiction potential itself</li>
                  <li>• May help with underlying anxiety disorders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Important Considerations</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• Research is still limited on CBD for cannabis addiction</li>
                  <li>• Ensure CBD products contain no THC (&lt;0.3%)</li>
                  <li>• Consult healthcare providers before using CBD</li>
                  <li>• CBD is not a magic cure for cannabis addiction</li>
                  <li>• Focus should remain on THC cessation</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>The Science Behind THC Addiction</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-4">🔬 Why THC is Addictive but CBD Isn't</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">THC's Addiction Mechanism</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>CB1 receptor binding:</strong> Direct activation</li>
                  <li>• <strong>Dopamine release:</strong> Reward pathway hijacking</li>
                  <li>• <strong>Tolerance development:</strong> Receptors downregulate</li>
                  <li>• <strong>Withdrawal symptoms:</strong> When receptors empty</li>
                  <li>• <strong>Craving cycles:</strong> Brain seeks THC to feel normal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">CBD's Non-Addictive Nature</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>No CB1 activation:</strong> Doesn't trigger reward pathway</li>
                  <li>• <strong>No dopamine flood:</strong> No euphoric high</li>
                  <li>• <strong>No tolerance:</strong> Effects remain consistent</li>
                  <li>• <strong>No withdrawal:</strong> Safe to stop anytime</li>
                  <li>• <strong>May block THC:</strong> Can reduce THC's effects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Key Takeaways</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>THC creates addiction, CBD does not</strong> - they are completely different compounds</li>
              <li>• <strong>Higher THC concentrations mean higher addiction risk</strong> - today's cannabis is much stronger</li>
              <li>• <strong>Balanced THC:CBD ratios may be less harmful</strong> than high-THC products</li>
              <li>• <strong>Concentrates and dabs are extremely high-risk</strong> due to their THC potency</li>
              <li>• <strong>CBD may help with withdrawal</strong> but is not a cure for cannabis addiction</li>
              <li>• <strong>Understanding potency is crucial</strong> for making informed decisions about cannabis</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Not all cannabis is created equal. Understanding the difference between 
              THC and CBD, and knowing the potency of what you're using, is essential for making informed decisions 
              about your health and addiction risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
