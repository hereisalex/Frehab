import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function PlatformAddictionFeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Platform-Specific Addiction Features: How Apps Hook You
          </h1>
          <p className="text-neutral-600">
            Understanding the specific psychological manipulation techniques used by different social media platforms to capture and hold your attention.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer id="platform-addiction" />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Social Media is Designed to Be Addictive</h3>
              <p className="text-red-700">
                <strong>These platforms employ teams of neuroscientists, behavioral economists, and addiction specialists</strong> 
                to design features that maximize engagement and make it difficult to stop using. Understanding these 
                techniques is the first step to breaking free from their influence.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Universal Addiction Mechanisms</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🧠 Core Psychological Techniques Used by All Platforms</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Variable Ratio Reinforcement</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Unpredictable rewards:</strong> Like slot machines, you never know when you&apos;ll get likes/comments</li>
                  <li>• <strong>Intermittent dopamine hits:</strong> Sometimes rewarded, sometimes not</li>
                  <li>• <strong>Creates compulsive checking:</strong> &quot;Maybe this time there will be something&quot;</li>
                  <li>• <strong>Most addictive schedule:</strong> More powerful than consistent rewards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Social Approval Loops</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Quantified validation:</strong> Likes, hearts, shares as social currency</li>
                  <li>• <strong>Public metrics:</strong> Visible follower counts create status competition</li>
                  <li>• <strong>Fear of social rejection:</strong> Not posting = disappearing socially</li>
                  <li>• <strong>Reciprocity pressure:</strong> If they liked yours, you should like theirs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Fear of Missing Out (FOMO)</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Real-time updates:</strong> Constant stream of &quot;happening now&quot;</li>
                  <li>• <strong>Stories that disappear:</strong> Time pressure to view content</li>
                  <li>• <strong>Live streaming:</strong> Can&apos;t pause or you&apos;ll miss something</li>
                  <li>• <strong>Trending content:</strong> &quot;Everyone is talking about this&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Infinite Scroll Design</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>No natural stopping point:</strong> Feed never ends</li>
                  <li>• <strong>Autoplay videos:</strong> Passive consumption continues automatically</li>
                  <li>• <strong>Seamless loading:</strong> No friction or pause to reconsider</li>
                  <li>• <strong>Variable content quality:</strong> Good post might be next</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Platform-Specific Addiction Features</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  IG
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-800">Instagram: Visual Perfection Addiction</h3>
                  <p className="text-sm text-pink-600">Focus on lifestyle envy and visual comparison</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-pink-700">Addictive Features</h4>
                  <ul className="text-sm text-pink-600 space-y-1">
                    <li>• <strong>Stories:</strong> 24-hour disappearing content creates urgency</li>
                    <li>• <strong>Double-tap likes:</strong> Easiest dopamine hit on social media</li>
                    <li>• <strong>Explore page:</strong> AI-curated infinite scroll of appealing content</li>
                    <li>• <strong>Reels:</strong> TikTok-style short videos with autoplay</li>
                    <li>• <strong>Close friends:</strong> Creates in-group/out-group dynamics</li>
                    <li>• <strong>Story viewers:</strong> See who viewed your story (social surveillance)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-pink-700">Psychological Hooks</h4>
                  <ul className="text-sm text-pink-600 space-y-1">
                    <li>• <strong>Curated perfection:</strong> Everyone else&apos;s life looks perfect</li>
                    <li>• <strong>Lifestyle comparison:</strong> Constant comparison to influencers</li>
                    <li>• <strong>Body image pressure:</strong> Heavily filtered/edited photos</li>
                    <li>• <strong>Purchase integration:</strong> Shopping directly from posts</li>
                    <li>• <strong>Celebrity culture:</strong> Access to famous people&apos;s lives</li>
                    <li>• <strong>Visual storytelling:</strong> Life as a highlight reel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-black to-gray-800 text-white border border-gray-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  TT
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">TikTok: Maximum Engagement Algorithm</h3>
                  <p className="text-sm text-gray-300">Designed for maximum time-on-app</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-white">Addictive Features</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong>For You Page:</strong> AI algorithm optimized for engagement</li>
                    <li>• <strong>Short-form content:</strong> Easy to consume, hard to stop</li>
                    <li>• <strong>Autoplay with sound:</strong> Immersive, attention-grabbing</li>
                    <li>• <strong>Duets and challenges:</strong> Viral participation mechanics</li>
                    <li>• <strong>Live streaming:</strong> Real-time connection with creators</li>
                    <li>• <strong>Comments during video:</strong> Multi-layered engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Psychological Hooks</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong>Predictive algorithm:</strong> Knows what you want before you do</li>
                    <li>• <strong>Micro-entertainment:</strong> Quick dopamine hits every 15-60 seconds</li>
                    <li>• <strong>Trend participation:</strong> FOMO around viral content</li>
                    <li>• <strong>Creator economy:</strong> Anyone can become famous</li>
                    <li>• <strong>Youth focus:</strong> Targets developing brains more susceptible to addiction</li>
                    <li>• <strong>Behavioral modification:</strong> Algorithm learns and adapts to keep you watching</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  FB
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">Facebook: Social Connection Manipulation</h3>
                  <p className="text-sm text-blue-600">Exploiting human need for social belonging</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Addictive Features</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>News Feed algorithm:</strong> Shows most engaging (often divisive) content</li>
                    <li>• <strong>Notifications:</strong> Constant alerts for likes, comments, tags</li>
                    <li>• <strong>Memories:</strong> &quot;On this day&quot; nostalgia triggers</li>
                    <li>• <strong>Groups:</strong> Creates sense of belonging and community</li>
                    <li>• <strong>Events:</strong> FOMO about social gatherings</li>
                    <li>• <strong>Messenger integration:</strong> All communication in one ecosystem</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">Psychological Hooks</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• <strong>Social surveillance:</strong> Keep tabs on everyone you&apos;ve ever known</li>
                    <li>• <strong>Birthday reminders:</strong> Guilt about forgetting relationships</li>
                    <li>• <strong>People you may know:</strong> Mysterious suggestions create curiosity</li>
                    <li>• <strong>Emotional manipulation:</strong> Algorithm promotes outrage engagement</li>
                    <li>• <strong>Life documentation:</strong> Fear of forgetting without posting</li>
                    <li>• <strong>Family connection:</strong> &quot;How will I stay in touch?&quot;</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white border border-blue-500 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold">
                  TW
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Twitter/X: News and Outrage Addiction</h3>
                  <p className="text-sm text-blue-100">Real-time information and controversy</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-white">Addictive Features</h4>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• <strong>Real-time timeline:</strong> Constant stream of breaking news</li>
                    <li>• <strong>Trending topics:</strong> What&apos;s happening right now</li>
                    <li>• <strong>Retweets and quotes:</strong> Easy content amplification</li>
                    <li>• <strong>Character limit:</strong> Forces quick, emotional responses</li>
                    <li>• <strong>Threads:</strong> Serialized content keeps you reading</li>
                    <li>• <strong>Spaces:</strong> Live audio conversations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Psychological Hooks</h4>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• <strong>Information addiction:</strong> Fear of being uninformed</li>
                    <li>• <strong>Outrage engagement:</strong> Controversial content gets more interaction</li>
                    <li>• <strong>Political identity:</strong> Reinforces tribal thinking</li>
                    <li>• <strong>Breaking news anxiety:</strong> Constant state of alert</li>
                    <li>• <strong>Intellectual superiority:</strong> Platform for hot takes and opinions</li>
                    <li>• <strong>Celebrity access:</strong> Direct communication with public figures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  YT
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">YouTube: Infinite Video Consumption</h3>
                  <p className="text-sm text-red-600">Optimized for maximum watch time</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Addictive Features</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Autoplay next video:</strong> Passive consumption continues</li>
                    <li>• <strong>Recommended videos:</strong> AI-optimized for your interests</li>
                    <li>• <strong>Thumbnails and titles:</strong> Designed to trigger curiosity</li>
                    <li>• <strong>Subscription notifications:</strong> New content from favorite creators</li>
                    <li>• <strong>Live streams:</strong> Real-time engagement and chat</li>
                    <li>• <strong>YouTube Shorts:</strong> TikTok-style short-form content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Psychological Hooks</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Rabbit hole effect:</strong> One video leads to hours of watching</li>
                    <li>• <strong>Parasocial relationships:</strong> Feel like you know YouTubers personally</li>
                    <li>• <strong>Educational justification:</strong> &quot;I&apos;m learning something&quot;</li>
                    <li>• <strong>Entertainment on demand:</strong> Video for every mood and interest</li>
                    <li>• <strong>Background watching:</strong> Can multitask while consuming</li>
                    <li>• <strong>Nostalgia content:</strong> Old videos and memories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  SC
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Snapchat: Ephemeral Communication Pressure</h3>
                  <p className="text-sm text-orange-600">FOMO through disappearing content</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Addictive Features</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Disappearing messages:</strong> Creates urgency to respond</li>
                    <li>• <strong>Snapstreaks:</strong> Daily communication pressure</li>
                    <li>• <strong>Snap Map:</strong> Real-time location sharing</li>
                    <li>• <strong>Bitmoji integration:</strong> Avatar representation</li>
                    <li>• <strong>Filters and lenses:</strong> Fun, shareable AR effects</li>
                    <li>• <strong>Story views:</strong> See who viewed your stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Psychological Hooks</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Streak anxiety:</strong> Fear of breaking daily communication</li>
                    <li>• <strong>Ephemeral FOMO:</strong> Content disappears, creating urgency</li>
                    <li>• <strong>Location pressure:</strong> Where you are becomes social signal</li>
                    <li>• <strong>Casual intimacy:</strong> Low-pressure communication feels natural</li>
                    <li>• <strong>Visual communication:</strong> Photos easier than text</li>
                    <li>• <strong>Youth-focused:</strong> Designed for teenage communication patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Common Manipulation Techniques Across Platforms</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-4">⚡ Advanced Psychological Manipulation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Artificial Intelligence and Personalization</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>Predictive algorithms:</strong> AI learns your weaknesses and exploits them</li>
                  <li>• <strong>A/B testing:</strong> Constant experimentation to maximize engagement</li>
                  <li>• <strong>Micro-targeting:</strong> Content personalized to your specific triggers</li>
                  <li>• <strong>Behavioral modeling:</strong> Predicts what will keep you scrolling</li>
                  <li>• <strong>Emotional state detection:</strong> Algorithm can tell when you&apos;re vulnerable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Notification and Attention Hijacking</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>Strategic timing:</strong> Notifications sent when you&apos;re most likely to engage</li>
                  <li>• <strong>Variable timing:</strong> Unpredictable notification schedule</li>
                  <li>• <strong>Bundled notifications:</strong> Multiple alerts to increase open likelihood</li>
                  <li>• <strong>Red badges:</strong> Visual anxiety triggers</li>
                  <li>• <strong>Push notification optimization:</strong> Testing which messages get clicks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Social Pressure and Obligation</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• <strong>Read receipts:</strong> Social pressure to respond immediately</li>
                  <li>• <strong>Last seen status:</strong> Creates anxiety about being available</li>
                  <li>• <strong>Mutual friends:</strong> Leverages existing relationships</li>
                  <li>• <strong>Group dynamics:</strong> Fear of exclusion from group chats/events</li>
                  <li>• <strong>Social proof:</strong> &quot;Your friends liked this&quot;</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Breaking Free from Platform Manipulation</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🛡️ Defense Strategies</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Turn off all notifications:</strong> Take back control of your attention</li>
                <li>• <strong>Remove apps from phone:</strong> Use web versions with more friction</li>
                <li>• <strong>Use app timers:</strong> Set strict daily limits</li>
                <li>• <strong>Unfollow triggering accounts:</strong> Curate a healthier feed</li>
                <li>• <strong>Delete apps during vulnerable times:</strong> Remove access when stressed</li>
                <li>• <strong>Use grayscale mode:</strong> Make phone less visually appealing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🧠 Awareness Practices</h3>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Mindful checking:</strong> Pause before opening apps</li>
                <li>• <strong>Question your urges:</strong> &quot;Why do I want to check this right now?&quot;</li>
                <li>• <strong>Notice manipulation:</strong> Recognize when features are designed to hook you</li>
                <li>• <strong>Track your usage:</strong> Become aware of actual time spent</li>
                <li>• <strong>Identify triggers:</strong> What emotions drive you to social media?</li>
                <li>• <strong>Set intentions:</strong> Why are you opening this app right now?</li>
              </ul>
            </div>
          </div>

          <h2>Platform-Specific Recovery Strategies</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
              <h4 className="font-semibold text-pink-800 mb-2">Instagram Recovery</h4>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Unfollow influencers and lifestyle accounts</li>
                <li>• Turn off read receipts for DMs</li>
                <li>• Disable story notifications</li>
                <li>• Use &quot;Close Friends&quot; sparingly</li>
                <li>• Avoid the Explore page entirely</li>
                <li>• Consider switching to a private account</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">TikTok Recovery</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Delete the app entirely (most effective)</li>
                <li>• If keeping: turn off all notifications</li>
                <li>• Set strict daily time limits</li>
                <li>• Avoid the For You page</li>
                <li>• Don&apos;t follow trending hashtags</li>
                <li>• Be aware of time distortion while watching</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Facebook Recovery</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Unfollow (not unfriend) problematic contacts</li>
                <li>• Leave groups that create FOMO or arguments</li>
                <li>• Turn off birthday notifications</li>
                <li>• Disable &quot;People You May Know&quot; suggestions</li>
                <li>• Use Facebook only for specific purposes (events, groups)</li>
                <li>• Consider deactivating while keeping Messenger</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">YouTube Recovery</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Turn off autoplay</li>
                <li>• Clear your watch history regularly</li>
                <li>• Unsubscribe from binge-worthy channels</li>
                <li>• Use YouTube only for specific searches</li>
                <li>• Avoid the homepage and recommendations</li>
                <li>• Set specific times for YouTube use</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Taking Back Control</h3>
            <p className="text-green-700 mb-3">
              Understanding these manipulation techniques is empowering:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• You&apos;re not weak for being addicted - these platforms are designed by experts to be irresistible</li>
              <li>• Awareness of these techniques reduces their power over you</li>
              <li>• Small changes to settings can dramatically reduce addictive pull</li>
              <li>• You can enjoy technology without being controlled by it</li>
              <li>• Recovery from social media addiction is completely possible</li>
              <li>• Many people report feeling happier and more focused after reducing social media</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> These platforms spend billions of dollars and employ thousands of the world&apos;s 
              best psychologists and data scientists to capture your attention. Being addicted is not a personal failure - 
              it&apos;s the intended result of sophisticated behavioral manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
