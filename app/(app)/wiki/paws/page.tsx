'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function PAWSPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Link href="/program">
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Program
              </Button>
            </Link>
            <div className="text-sm text-neutral-500">
              Wiki
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-text mb-2">
            Post-Acute Withdrawal Syndrome (PAWS)
          </h1>
          <p className="text-neutral-600 text-lg">
            Understanding the long-term effects of substance withdrawal and how to manage symptoms that may persist for weeks or months after stopping use.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <div className="prose prose-lg max-w-none">
            <h2>What is PAWS?</h2>
            <p>
              Post-Acute Withdrawal Syndrome (PAWS) refers to a set of persistent symptoms that can occur after the initial acute withdrawal phase from alcohol or other substances. While acute withdrawal typically lasts for days to weeks, PAWS symptoms can persist for months or even years after stopping substance use.
            </p>

            <h2>Understanding the Timeline</h2>
            <p>
              The recovery process from substance use typically follows this pattern:
            </p>
            <ul>
              <li><strong>Acute Withdrawal (Days 1-7):</strong> Physical symptoms like nausea, sweating, tremors, and anxiety</li>
              <li><strong>Early Recovery (Weeks 1-4):</strong> Physical symptoms improve, but psychological symptoms may intensify</li>
              <li><strong>PAWS Phase (Months 1-24):</strong> Persistent symptoms that come and go in waves</li>
            </ul>

            <h2>Common PAWS Symptoms</h2>
            
            <h3>Physical Symptoms</h3>
            <ul>
              <li>Fatigue and low energy</li>
              <li>Sleep disturbances (insomnia or excessive sleep)</li>
              <li>Appetite changes</li>
              <li>Headaches</li>
              <li>Dizziness or lightheadedness</li>
              <li>Muscle aches and pains</li>
              <li>Sensitivity to light and sound</li>
            </ul>

            <h3>Psychological Symptoms</h3>
            <ul>
              <li>Anxiety and panic attacks</li>
              <li>Depression and mood swings</li>
              <li>Irritability and anger</li>
              <li>Difficulty concentrating and memory problems</li>
              <li>Emotional numbness</li>
              <li>Intense cravings</li>
              <li>Feelings of hopelessness</li>
            </ul>

            <h3>Cognitive Symptoms</h3>
            <ul>
              <li>Brain fog and confusion</li>
              <li>Difficulty making decisions</li>
              <li>Problems with short-term memory</li>
              <li>Reduced ability to focus</li>
              <li>Slower processing speed</li>
            </ul>

            <h2>Why PAWS Occurs</h2>
            <p>
              PAWS is thought to result from the brain&apos;s attempt to restore balance after the disruption caused by substance use. When you use substances regularly, your brain adapts by:
            </p>
            <ul>
              <li>Reducing natural production of neurotransmitters like dopamine and serotonin</li>
              <li>Changing the sensitivity of receptors</li>
              <li>Altering brain chemistry and structure</li>
            </ul>
            <p>
              When you stop using, your brain needs time to readjust to functioning without the substance. This process can take months or years, during which time you may experience PAWS symptoms.
            </p>

            <h2>Duration and Patterns</h2>
            <p>
              PAWS symptoms typically follow a wave-like pattern:
            </p>
            <ul>
              <li><strong>Waves:</strong> Symptoms come and go, often in cycles of 2-4 weeks</li>
              <li><strong>Gradual Improvement:</strong> Over time, symptoms become less intense and frequent</li>
              <li><strong>Individual Variation:</strong> Duration varies greatly between individuals</li>
            </ul>
            <p>
              Most people experience significant improvement within 6-18 months, though some symptoms may persist for 2 years or more.
            </p>

            <h2>Coping Strategies</h2>

            <h3>Self-Care Practices</h3>
            <ul>
              <li><strong>Sleep Hygiene:</strong> Maintain regular sleep schedule, create a calming bedtime routine</li>
              <li><strong>Exercise:</strong> Regular physical activity can help regulate mood and reduce anxiety</li>
              <li><strong>Nutrition:</strong> Eat balanced meals and stay hydrated</li>
              <li><strong>Stress Management:</strong> Practice relaxation techniques like deep breathing and meditation</li>
            </ul>

            <h3>Lifestyle Adjustments</h3>
            <ul>
              <li><strong>Routine:</strong> Establish and maintain daily routines</li>
              <li><strong>Pacing:</strong> Don&apos;t overcommit yourself; allow time for rest</li>
              <li><strong>Triggers:</strong> Identify and avoid situations that trigger cravings or stress</li>
              <li><strong>Support:</strong> Stay connected with supportive people</li>
            </ul>

            <h3>Professional Support</h3>
            <ul>
              <li><strong>Therapy:</strong> Individual or group therapy can help process emotions</li>
              <li><strong>Medication:</strong> In some cases, medication may help manage specific symptoms</li>
              <li><strong>Support Groups:</strong> Connect with others who understand the experience</li>
            </ul>

            <h2>When to Seek Help</h2>
            <p>
              While PAWS symptoms are normal, certain situations require professional attention:
            </p>
            <ul>
              <li>Severe depression or suicidal thoughts</li>
              <li>Panic attacks that interfere with daily life</li>
              <li>Symptoms that don&apos;t improve over time</li>
              <li>Difficulty maintaining sobriety due to symptoms</li>
              <li>Physical symptoms that may indicate other health issues</li>
            </ul>

            <h2>Preventing Relapse</h2>
            <p>
              PAWS symptoms can be challenging and may trigger cravings. To prevent relapse:
            </p>
            <ul>
              <li>Remember that symptoms are temporary and will improve</li>
              <li>Use healthy coping strategies instead of substances</li>
              <li>Stay connected with your support network</li>
              <li>Attend therapy or support groups regularly</li>
              <li>Practice self-compassion and patience</li>
            </ul>

            <h2>Tracking Your Progress</h2>
            <p>
              Keeping a journal can help you:
            </p>
            <ul>
              <li>Identify patterns in your symptoms</li>
              <li>Track improvements over time</li>
              <li>Recognize triggers and effective coping strategies</li>
              <li>Stay motivated by seeing your progress</li>
            </ul>

            <h2>Hope and Recovery</h2>
            <p>
              While PAWS can be challenging, it&apos;s important to remember that:
            </p>
            <ul>
              <li>Symptoms are temporary and will improve with time</li>
              <li>Your brain is healing and adapting</li>
              <li>Each day of sobriety brings you closer to full recovery</li>
              <li>Many people successfully navigate PAWS and go on to live fulfilling lives</li>
            </ul>

            <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-text mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">PAWS is a normal part of recovery that affects many people</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Symptoms come in waves and gradually improve over time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Self-care, support, and patience are essential for managing PAWS</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Professional help is available if symptoms become overwhelming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 