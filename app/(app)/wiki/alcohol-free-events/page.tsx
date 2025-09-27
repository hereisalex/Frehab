import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function AlcoholFreeEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Alcohol-Free Event Survival Guide
          </h1>
          <p className="text-neutral-600">
            Navigate social events, parties, and celebrations while maintaining your recovery.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer />

        <div className="prose max-w-none">
          <h2>Before the Event: Planning for Success</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">The SAFE Method</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-semibold text-green-700">S - Support Person</p>
                <p className="text-sm text-green-600">Bring a sober friend or identify allies at the event</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">A - Arrival/Exit Plan</p>
                <p className="text-sm text-green-600">Drive yourself or arrange sober transportation</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">F - Festive Drink</p>
                <p className="text-sm text-green-600">Plan what non-alcoholic drink you'll order</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">E - Early Exit Strategy</p>
                <p className="text-sm text-green-600">Know when and how you'll leave if needed</p>
              </div>
            </div>
          </div>

          <h2>What to Say When Offered a Drink</h2>
          
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Simple & Direct</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• "No thanks, I'm driving"</li>
                <li>• "I don't drink"</li>
                <li>• "I'm good with this" (holding your drink)</li>
                <li>• "Not tonight, thanks"</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold text-purple-600 mb-2">Health-Focused</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• "I'm on medication that doesn't mix"</li>
                <li>• "I'm doing a health challenge"</li>
                <li>• "Alcohol doesn't agree with me"</li>
                <li>• "I'm the designated driver"</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold text-green-600 mb-2">Deflection</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• "I'll get something in a bit"</li>
                <li>• "I'm pacing myself tonight"</li>
                <li>• "Can you grab me a soda instead?"</li>
                <li>• Change subject: "How do you know [host]?"</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-4">
              <h4 className="font-semibold text-orange-600 mb-2">Confident & Honest</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• "I don't drink alcohol"</li>
                <li>• "I'm in recovery"</li>
                <li>• "Alcohol isn't my thing"</li>
                <li>• "I prefer to stay clear-headed"</li>
              </ul>
            </div>
          </div>

          <h2>Event-Specific Strategies</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-amber-600 mb-3">🎉 Weddings & Celebrations</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Challenges</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Open bars and toasts</li>
                    <li>• Long duration events</li>
                    <li>• Emotional atmosphere</li>
                    <li>• Dancing and celebration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solutions</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Toast with sparkling cider</li>
                    <li>• Focus on food and dancing</li>
                    <li>• Help with photos/coordination</li>
                    <li>• Leave after dinner if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">💼 Work Events</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Challenges</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Networking expectations</li>
                    <li>• Boss/client pressure</li>
                    <li>• Happy hour culture</li>
                    <li>• Professional image concerns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solutions</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Order sophisticated mocktails</li>
                    <li>• Focus on networking goals</li>
                    <li>• Volunteer to be note-taker</li>
                    <li>• "I don't mix business and drinking"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🎄 Holidays & Family</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Challenges</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Family traditions</li>
                    <li>• Stress and emotions</li>
                    <li>• Multiple events</li>
                    <li>• Family pressure/questions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solutions</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Bring your own special drinks</li>
                    <li>• Create new traditions</li>
                    <li>• Prepare family responses</li>
                    <li>• Limit visit duration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Great Non-Alcoholic Drink Options</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Sophisticated Options</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Virgin mojito with fresh mint</li>
                  <li>• Sparkling water with lime</li>
                  <li>• Cranberry juice and soda</li>
                  <li>• Virgin Mary (Bloody Mary)</li>
                  <li>• Kombucha (check alcohol content)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Pro Tips</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Always have a drink in hand</li>
                  <li>• Ask for it in a wine/cocktail glass</li>
                  <li>• Tip the bartender for good service</li>
                  <li>• Try alcohol-free beer/wine</li>
                  <li>• Bring your own if hosting</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Handling Difficult People</h2>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">The Pushy Person</h4>
              <p className="text-sm text-yellow-700 mb-2">
                <strong>What they say:</strong> "Come on, just one drink! Don't be boring!"
              </p>
              <p className="text-sm text-yellow-700">
                <strong>Response:</strong> "I'm having more fun sober, thanks. Want to dance/get some food?"
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">The Interrogator</h4>
              <p className="text-sm text-orange-700 mb-2">
                <strong>What they say:</strong> "Why aren't you drinking? Are you pregnant? On medication?"
              </p>
              <p className="text-sm text-orange-700">
                <strong>Response:</strong> "I just prefer not to. So how's your [job/family/hobby]?"
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">The Offended Host</h4>
              <p className="text-sm text-red-700 mb-2">
                <strong>What they say:</strong> "I bought this expensive wine special for tonight!"
              </p>
              <p className="text-sm text-red-700">
                <strong>Response:</strong> "That's so thoughtful! I bet others will really appreciate it. The food looks amazing!"
              </p>
            </div>
          </div>

          <h2>Emergency Exit Strategies</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">When to Leave</h3>
            <ul className="text-red-700 space-y-1">
              <li>• You're feeling strong cravings</li>
              <li>• People are getting very intoxicated</li>
              <li>• You're feeling isolated or uncomfortable</li>
              <li>• Someone is being pushy about drinking</li>
              <li>• You're not enjoying yourself</li>
            </ul>
            
            <h4 className="font-semibold text-red-800 mt-4 mb-2">Polite Exit Lines</h4>
            <ul className="text-red-700 space-y-1 text-sm">
              <li>• "Thanks for a great evening. I have an early morning."</li>
              <li>• "This was wonderful, but I need to head out."</li>
              <li>• "Great party! I'm going to call it a night."</li>
            </ul>
          </div>

          <h2>Post-Event Self-Care</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-3">After a Successful Event</h3>
            <ul className="text-green-700 space-y-2">
              <li>• <strong>Celebrate your success</strong> - you did something challenging!</li>
              <li>• <strong>Reflect on what worked</strong> - note strategies for next time</li>
              <li>• <strong>Reward yourself</strong> - treat yourself to something special</li>
              <li>• <strong>Share your victory</strong> - tell your support network</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> You don't owe anyone an explanation for not drinking. 
              Your recovery is your priority, and any event that threatens that isn't worth attending.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
