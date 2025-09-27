import React from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function GameTypesAddictionPotentialPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">
            Game Types and Addiction Potential: How Different Games Hook Players
          </h1>
          <p className="text-neutral-600">
            Understanding how different game genres use specific psychological mechanics to create and maintain addiction, and which types of games pose the highest risk.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <ClinicalDisclaimer id="game-types" />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Games Are Designed to Be Addictive</h3>
              <p className="text-red-700">
                <strong>Modern games employ sophisticated psychological manipulation</strong> including variable 
                ratio reinforcement, social pressure, and engineered progression systems specifically designed 
                to maximize player engagement and spending. Understanding these mechanics is crucial for recovery.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Universal Gaming Addiction Mechanics</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-purple-800 mb-4">🧠 Core Psychological Techniques Used Across All Games</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Variable Ratio Reinforcement</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Unpredictable rewards:</strong> Random loot drops, critical hits, rare items</li>
                  <li>• <strong>Gambling-like mechanics:</strong> Loot boxes, gacha systems, random outcomes</li>
                  <li>• <strong>Creates compulsive play:</strong> &quot;Just one more game&quot; mentality</li>
                  <li>• <strong>Most addictive schedule:</strong> More powerful than consistent rewards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Progression and Achievement Systems</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Experience points (XP):</strong> Constant measurable progress</li>
                  <li>• <strong>Level systems:</strong> Clear goals and achievement markers</li>
                  <li>• <strong>Unlock systems:</strong> New content rewards continued play</li>
                  <li>• <strong>Achievement badges:</strong> Multiple overlapping progression systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Social Pressure and Competition</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Leaderboards and rankings:</strong> Social comparison and status</li>
                  <li>• <strong>Guild/clan obligations:</strong> Social pressure to participate</li>
                  <li>• <strong>Multiplayer dependence:</strong> Teammates counting on you</li>
                  <li>• <strong>Status symbols:</strong> Rare skins, titles, achievements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Fear of Missing Out (FOMO)</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Limited-time events:</strong> Exclusive content with deadlines</li>
                  <li>• <strong>Daily login bonuses:</strong> Penalty for not playing daily</li>
                  <li>• <strong>Seasonal content:</strong> Miss it now, miss it forever</li>
                  <li>• <strong>Battle passes:</strong> Time-limited progression systems</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>High-Risk Game Categories</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  🏰
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800">MMORPGs (Massively Multiplayer Online RPGs)</h3>
                  <p className="text-sm text-red-600">Highest addiction risk - designed for endless engagement</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Addictive Features</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Persistent worlds:</strong> Game continues even when you&apos;re offline</li>
                    <li>• <strong>Endless progression:</strong> No natural stopping point or &quot;winning&quot;</li>
                    <li>• <strong>Social guilds/raids:</strong> Strong social obligations and schedules</li>
                    <li>• <strong>Daily quests:</strong> Penalty for missing daily activities</li>
                    <li>• <strong>Rare loot systems:</strong> Extremely low drop rates for valuable items</li>
                    <li>• <strong>Player economy:</strong> Real-world value in virtual items</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Psychological Hooks</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Identity investment:</strong> Character becomes extension of self</li>
                    <li>• <strong>Sunk cost fallacy:</strong> Years of progress too valuable to abandon</li>
                    <li>• <strong>Social belonging:</strong> Primary friend group exists in-game</li>
                    <li>• <strong>Escapism:</strong> Alternative life with clear purpose and achievement</li>
                    <li>• <strong>Power fantasy:</strong> Become powerful hero in virtual world</li>
                    <li>• <strong>Fear of falling behind:</strong> Other players progressing while offline</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-red-800 text-sm">
                  <strong>Examples:</strong> World of Warcraft, Final Fantasy XIV, Lost Ark, New World, Guild Wars 2
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  ⚔️
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800">MOBAs (Multiplayer Online Battle Arenas)</h3>
                  <p className="text-sm text-purple-600">High addiction risk - competitive pressure and skill progression</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700">Addictive Features</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>Ranked competitive play:</strong> Constant ladder climbing</li>
                    <li>• <strong>Short game duration:</strong> &quot;Just one more game&quot; is only 30-60 minutes</li>
                    <li>• <strong>Skill-based progression:</strong> Always room for improvement</li>
                    <li>• <strong>Team dependence:</strong> Can&apos;t abandon teammates mid-game</li>
                    <li>• <strong>Meta evolution:</strong> Constantly changing strategies to learn</li>
                    <li>• <strong>Professional esports:</strong> Aspirational competitive scene</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700">Psychological Hooks</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>Ego investment:</strong> Rank becomes measure of self-worth</li>
                    <li>• <strong>Rage and redemption cycle:</strong> Bad games fuel desire to win next one</li>
                    <li>• <strong>Mastery obsession:</strong> Complex game requires extensive study</li>
                    <li>• <strong>Social status:</strong> Rank determines respect in community</li>
                    <li>• <strong>Blame externalization:</strong> Losses blamed on teammates, not self</li>
                    <li>• <strong>Competitive drive:</strong> Must prove superiority over others</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded">
                <p className="text-purple-800 text-sm">
                  <strong>Examples:</strong> League of Legends, Dota 2, Heroes of the Storm, Smite
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  🔫
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800">Battle Royale Games</h3>
                  <p className="text-sm text-orange-600">High addiction risk - adrenaline and near-miss psychology</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Addictive Features</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>High-stakes gameplay:</strong> One life, winner-takes-all format</li>
                    <li>• <strong>Near-miss psychology:</strong> &quot;I almost won&quot; drives replaying</li>
                    <li>• <strong>Fast matchmaking:</strong> Immediate re-entry into new games</li>
                    <li>• <strong>Cosmetic progression:</strong> Skins, emotes, battle passes</li>
                    <li>• <strong>Seasonal events:</strong> Limited-time content and rewards</li>
                    <li>• <strong>Squad play:</strong> Social pressure from friends/teammates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-700">Psychological Hooks</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• <strong>Adrenaline addiction:</strong> High-stress, high-reward gameplay</li>
                    <li>• <strong>Victory euphoria:</strong> Rare wins create intense satisfaction</li>
                    <li>• <strong>Improvement obsession:</strong> Each death is a learning opportunity</li>
                    <li>• <strong>Social streaming culture:</strong> Aspirational content creators</li>
                    <li>• <strong>FOMO on trends:</strong> Missing popular cultural moments</li>
                    <li>• <strong>Perfectionism:</strong> Seeking that perfect game or victory</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 rounded">
                <p className="text-orange-800 text-sm">
                  <strong>Examples:</strong> Fortnite, PUBG, Apex Legends, Call of Duty: Warzone, Fall Guys
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">First-Person Shooters (FPS)</h3>
                  <p className="text-sm text-green-600">Medium-High risk - skill progression and competitive ranking</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Addictive Features</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Skill-based matchmaking:</strong> Always facing similar-skill opponents</li>
                    <li>• <strong>Weapon unlocks:</strong> New guns and attachments for progression</li>
                    <li>• <strong>Kill/death tracking:</strong> Detailed performance statistics</li>
                    <li>• <strong>Prestige systems:</strong> Multiple levels of progression</li>
                    <li>• <strong>Clan/team systems:</strong> Social competitive groups</li>
                    <li>• <strong>Frequent updates:</strong> New maps, modes, and balance changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Psychological Hooks</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>Reflex and skill pride:</strong> Identity tied to reaction time and accuracy</li>
                    <li>• <strong>Competitive ranking:</strong> Status and ego investment in rank</li>
                    <li>• <strong>Muscle memory development:</strong> Physical skills that degrade without practice</li>
                    <li>• <strong>Team coordination:</strong> Complex strategies requiring group practice</li>
                    <li>• <strong>Highlight moments:</strong> Spectacular plays create memorable highs</li>
                    <li>• <strong>Meta mastery:</strong> Learning optimal strategies and loadouts</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-green-800 text-sm">
                  <strong>Examples:</strong> Counter-Strike, Valorant, Overwatch, Call of Duty series, Rainbow Six Siege
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-800">Mobile Games (Gacha/Idle/Match-3)</h3>
                  <p className="text-sm text-pink-600">High risk - designed for maximum monetization and engagement</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2 text-pink-700">Addictive Features</h4>
                  <ul className="text-sm text-pink-600 space-y-1">
                    <li>• <strong>Gacha/loot box systems:</strong> Gambling mechanics for character collection</li>
                    <li>• <strong>Energy/stamina systems:</strong> Limited play time that regenerates</li>
                    <li>• <strong>Daily login bonuses:</strong> Rewards for consecutive days</li>
                    <li>• <strong>Push notifications:</strong> Alerts when energy is full or events start</li>
                    <li>• <strong>Pay-to-progress:</strong> Money can speed up or enhance progression</li>
                    <li>• <strong>Social features:</strong> Friends lists, gifting, competitions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-pink-700">Psychological Hooks</h4>
                  <ul className="text-sm text-pink-600 space-y-1">
                    <li>• <strong>Collection compulsion:</strong> Must collect all characters/items</li>
                    <li>• <strong>Gambling excitement:</strong> Thrill of rare character pulls</li>
                    <li>• <strong>Convenience addiction:</strong> Always available on phone</li>
                    <li>• <strong>Sunk cost fallacy:</strong> Money spent makes quitting harder</li>
                    <li>• <strong>Incremental progress:</strong> Constant small improvements</li>
                    <li>• <strong>Social comparison:</strong> Comparing collection to other players</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-pink-100 rounded">
                <p className="text-pink-800 text-sm">
                  <strong>Examples:</strong> Genshin Impact, Raid: Shadow Legends, Candy Crush, Clash of Clans, Pokémon GO
                </p>
              </div>
            </div>
          </div>

          <h2>Medium-Risk Game Categories</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">🏗️ Strategy Games</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Risk Factors</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Long play sessions (4-8 hours per game)</li>
                    <li>• Complex systems requiring mastery</li>
                    <li>• Perfectionist tendencies ("optimal" play)</li>
                    <li>• Historical/fantasy escapism</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-700">Examples</h4>
                  <p className="text-sm text-blue-600">
                    Civilization series, Total War, Europa Universalis, Crusader Kings
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">🏎️ Racing/Sports Games</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Risk Factors</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Skill progression and lap time improvement</li>
                    <li>• Online competitive leagues</li>
                    <li>• Car collection and customization</li>
                    <li>• Season-based competitive modes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-purple-700">Examples</h4>
                  <p className="text-sm text-purple-600">
                    Gran Turismo, Forza, FIFA, NBA 2K, F1 series
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🧩 Puzzle/Casual Games</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1 text-green-700">Risk Factors</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• &quot;Just one more level&quot; progression</li>
                    <li>• Stress relief and mindless play</li>
                    <li>• Achievement and completion obsession</li>
                    <li>• Easy accessibility and low commitment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-green-700">Examples</h4>
                  <p className="text-sm text-green-600">
                    Tetris, Portal series, Monument Valley, Baba Is You
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">🎭 Simulation Games</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibant mb-1 text-orange-700">Risk Factors</h4>
                  <ul className="text-sm text-orange-600 space-y-1">
                    <li>• Open-ended gameplay with no clear ending</li>
                    <li>• Creative expression and personal attachment</li>
                    <li>• Time acceleration making hours feel like minutes</li>
                    <li>• Modding communities extending playtime</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-orange-700">Examples</h4>
                  <p className="text-sm text-orange-600">
                    The Sims, Cities: Skylines, Minecraft, Stardew Valley
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Lower-Risk Game Categories</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📖 Single-Player Story Games</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-1">Why Lower Risk</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clear beginning, middle, and end</li>
                    <li>• No social pressure or obligations</li>
                    <li>• Can pause anytime without consequences</li>
                    <li>• No competitive elements or rankings</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-1">Examples</h5>
                  <p className="text-sm text-gray-600">
                    The Last of Us, God of War, Spider-Man, Zelda series, Red Dead Redemption (story mode)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🎲 Party/Local Multiplayer Games</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-1">Why Lower Risk</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Requires other people to be present</li>
                    <li>• Natural breaks when friends leave</li>
                    <li>• Social interaction is the main appeal</li>
                    <li>• No progression systems or unlocks</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-1">Examples</h5>
                  <p className="text-sm text-gray-600">
                    Mario Kart, Super Smash Bros., Jackbox Games, Overcooked, Among Us (with friends)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Warning Signs by Game Type</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-4">🚨 Red Flags for Each Category</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">MMORPGs Warning Signs</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Playing 6+ hours daily consistently</li>
                  <li>• Scheduling real life around raid times</li>
                  <li>• Feeling anxious when unable to complete daily quests</li>
                  <li>• Primary social relationships exist in-game</li>
                  <li>• Spending significant money on in-game items</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Competitive Games Warning Signs</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Extreme anger or mood swings from losses</li>
                  <li>• Playing while sick, tired, or hungry</li>
                  <li>• Neglecting responsibilities to maintain rank</li>
                  <li>• Self-worth tied to game performance</li>
                  <li>• Unable to stop after losses (&quot;win one back&quot;)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Mobile Games Warning Signs</h4>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Setting alarms to collect energy or complete events</li>
                  <li>• Spending money regularly on in-app purchases</li>
                  <li>• Playing during inappropriate times (work, driving, social events)</li>
                  <li>• Anxiety when phone battery dies or no internet</li>
                  <li>• Checking game compulsively throughout the day</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Recovery Strategies by Game Type</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-3">🔥 High-Risk Games</h3>
              <h4 className="font-semibold mb-2 text-red-700">Recommended Strategy: Complete Avoidance</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Uninstall immediately:</strong> No &quot;just checking in&quot;</li>
                <li>• <strong>Delete accounts:</strong> Reduce temptation to return</li>
                <li>• <strong>Block websites:</strong> Gaming news, forums, streams</li>
                <li>• <strong>Avoid gaming friends:</strong> At least initially during recovery</li>
                <li>• <strong>Find replacement activities:</strong> That satisfy same psychological needs</li>
                <li>• <strong>No moderation attempts:</strong> Too high risk for most people</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">⚖️ Medium-Risk Games</h3>
              <h4 className="font-semibold mb-2 text-blue-700">Strategy: Strict Boundaries or Avoidance</h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>• <strong>Time limits:</strong> Maximum 1-2 hours on weekends only</li>
                <li>• <strong>No online features:</strong> Avoid competitive/social elements</li>
                <li>• <strong>Accountability partner:</strong> Someone to monitor your limits</li>
                <li>• <strong>Complete games:</strong> Finish story, then uninstall</li>
                <li>• <strong>Physical barriers:</strong> Keep games on separate device</li>
                <li>• <strong>Regular breaks:</strong> Extended periods without any gaming</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Understanding Your Risk Profile</h3>
            <p className="text-green-700 mb-3">
              Different people are vulnerable to different types of games based on their personality and psychological needs:
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• <strong>Competitive personalities:</strong> Higher risk for MOBAs, FPS, battle royales</li>
              <li>• <strong>Social needs:</strong> Higher risk for MMORPGs and guild-based games</li>
              <li>• <strong>Achievement-oriented:</strong> Vulnerable to progression and unlock systems</li>
              <li>• <strong>Escapism seekers:</strong> Risk for immersive RPGs and virtual worlds</li>
              <li>• <strong>Collectors:</strong> High risk for gacha and loot box systems</li>
              <li>• <strong>Perfectionists:</strong> Risk for any game with optimization or mastery elements</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> The most addictive games are specifically designed by teams of psychologists, 
              data scientists, and behavioral economists to maximize engagement and spending. Understanding these 
              manipulation techniques is the first step toward breaking free from their influence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
