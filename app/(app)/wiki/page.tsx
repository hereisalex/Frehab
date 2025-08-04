'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function WikiPage() {
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
            The Psychology of Motivation
          </h1>
          <p className="text-neutral-600 text-lg">
            Understanding the psychological principles that drive behavior change and sustained motivation in recovery.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Motivation is the driving force behind all human behavior, including the complex journey of recovery from substance use. Understanding the psychology of motivation can provide powerful insights into how to create lasting change in your life.
            </p>

            <h2>What is Motivation?</h2>
            <p>
              Motivation is the internal process that initiates, guides, and maintains goal-oriented behaviors. It&apos;s what gets you out of bed in the morning and keeps you moving toward your goals, even when faced with challenges.
            </p>

            <h2>Types of Motivation</h2>
            
            <h3>Intrinsic Motivation</h3>
            <p>
              Intrinsic motivation comes from within. It&apos;s driven by internal rewards like personal satisfaction, curiosity, or the joy of learning. When you&apos;re intrinsically motivated, you engage in activities because you find them inherently rewarding.
            </p>
            <p>
              <strong>Examples in recovery:</strong> Learning about yourself, feeling proud of your progress, enjoying new hobbies, experiencing improved relationships.
            </p>

            <h3>Extrinsic Motivation</h3>
            <p>
              Extrinsic motivation comes from external factors like rewards, recognition, or avoiding punishment. While extrinsic motivation can be powerful, it&apos;s generally less sustainable than intrinsic motivation.
            </p>
            <p>
              <strong>Examples in recovery:</strong> Avoiding legal consequences, keeping your job, maintaining relationships, meeting family expectations.
            </p>

            <h2>The Stages of Change Model</h2>
            <p>
              Developed by Prochaska and DiClemente, the Stages of Change model describes the process people go through when making behavioral changes:
            </p>

            <h3>1. Precontemplation</h3>
            <p>
              At this stage, you may not recognize that you have a problem or need to change. You might be defensive or in denial about the impact of substance use on your life.
            </p>

            <h3>2. Contemplation</h3>
            <p>
              You begin to recognize that there&apos;s a problem and start thinking about making changes. You weigh the pros and cons of changing versus staying the same.
            </p>

            <h3>3. Preparation</h3>
            <p>
              You&apos;re ready to take action and start making plans. You might be gathering information, seeking support, or setting specific goals.
            </p>

            <h3>4. Action</h3>
            <p>
              You&apos;re actively making changes to your behavior. This stage requires significant time and energy as you implement new strategies and coping mechanisms.
            </p>

            <h3>5. Maintenance</h3>
            <p>
              You&apos;ve successfully changed your behavior and are working to prevent relapse. You&apos;re developing new routines and strategies to sustain your recovery.
            </p>

            <h2>Building Sustainable Motivation</h2>

            <h3>Set Meaningful Goals</h3>
            <p>
              Goals that align with your values and personal vision are more likely to sustain motivation. Ask yourself: &quot;Why is recovery important to me?&quot; and &quot;What kind of person do I want to become?&quot;
            </p>

            <h3>Break Down Large Goals</h3>
            <p>
              Large, overwhelming goals can be demotivating. Break them into smaller, achievable steps. Celebrate each small victory along the way.
            </p>

            <h3>Create a Supportive Environment</h3>
            <p>
              Surround yourself with people who support your recovery goals. Remove or minimize exposure to triggers and negative influences.
            </p>

            <h3>Develop Self-Compassion</h3>
            <p>
              Recovery is a journey with ups and downs. Treat yourself with kindness and understanding, especially during difficult times. Remember that setbacks are opportunities for learning and growth.
            </p>

            <h2>Common Motivation Challenges</h2>

            <h3>Ambivalence</h3>
            <p>
              It&apos;s normal to have mixed feelings about change. You might want to stop using substances but also fear the challenges of recovery. Acknowledge these conflicting feelings and work through them.
            </p>

            <h3>Fear of Failure</h3>
            <p>
              The fear of not succeeding can paralyze motivation. Remember that recovery is a process, not a destination. Every day of effort is a success, regardless of the outcome.
            </p>

            <h3>Lack of Immediate Results</h3>
            <p>
              Recovery benefits often take time to become apparent. Focus on the process rather than just the outcomes. Trust that positive changes are happening even when they&apos;re not immediately visible.
            </p>

            <h2>Practical Strategies for Maintaining Motivation</h2>

            <h3>Daily Practices</h3>
            <ul>
              <li>Start each day by reminding yourself of your recovery goals</li>
              <li>Practice gratitude for the progress you&apos;ve made</li>
              <li>Use positive self-talk and affirmations</li>
              <li>Engage in activities that bring you joy and fulfillment</li>
            </ul>

            <h3>Long-term Strategies</h3>
            <ul>
              <li>Regularly revisit and revise your personal vision</li>
              <li>Connect with others in recovery for mutual support</li>
              <li>Continue learning about addiction and recovery</li>
              <li>Develop new interests and hobbies that support your recovery</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Understanding the psychology of motivation can empower you to create lasting change in your life. Remember that motivation is not a fixed trait—it&apos;s a skill that can be developed and strengthened over time. By understanding your own motivational patterns and using evidence-based strategies, you can build the momentum needed for successful, long-term recovery.
            </p>

            <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-text mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Motivation is a skill that can be developed and strengthened</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Intrinsic motivation is more sustainable than extrinsic motivation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Change happens in stages, and each stage requires different strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600">Self-compassion and support are essential for maintaining motivation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 