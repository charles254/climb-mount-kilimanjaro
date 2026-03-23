import React from 'react';
import { AlertCircle, Mountain, TrendingDown, Thermometer, ShieldAlert, History, Map, Compass, Wind, Tent, Info } from 'lucide-react';
import Link from 'next/link';

export const UmbweArticle = () => {
  return (
    <article className="prose prose-invert prose-red max-w-none">
      <div className="bg-red-950/20 border-l-4 border-red-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          The Umbwe route is the most challenging, shortest, and steepest path on Mount Kilimanjaro. It is not for the faint of heart or the inexperienced. This guide breaks down why this path is legendary and who should actually attempt it.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3">
        <ShieldAlert className="text-red-500" /> A Reality Check
      </h2>
      <p>
        The <strong>Umbwe Route</strong> is often called the "direct" route. Unlike the <Link href="/routes/lemosho" className="text-amber-500 hover:underline">Lemosho</Link> or <Link href="/routes/machame" className="text-amber-500 hover:underline">Machame</Link> routes that wind around the mountain to aid acclimatization through a "climb high, sleep low" strategy, Umbwe goes straight up. 
      </p>
      <p>
        This creates a spectacular but punishing trek that should only be attempted by those who are extremely fit and have previous high-altitude experience. If your goal is primarily to reach the summit, this is statistically the most difficult way to do it. The <a href="https://www.tanzaniaparks.go.tz/parks/kilimanjaro" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">Tanzania National Parks (TANAPA)</a> regulations require all climbers to be accompanied by a licensed guide, and on Umbwe, that expertise is more critical than anywhere else.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-slate-900 p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-colors">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-red-500" /> Success Rate: ~60%
          </h3>
          <p className="text-gray-400">
            Due to the rapid ascent, many climbers struggle with Acute Mountain Sickness (AMS). It has one of the lowest summit success rates on the mountain compared to the 95%+ of the <Link href="/routes/northern-circuit" className="text-amber-500 hover:underline">Northern Circuit</Link>.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-colors">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mountain className="w-5 h-5 text-red-500" /> Steepness: Extreme
          </h3>
          <p className="text-gray-400">
            You'll be using your hands for balance in several sections during the first two days in the rainforest. The vertical gain is relentless.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <History className="text-red-500" /> The Reputation
      </h2>
      <p>
        Historically, the Umbwe route was used for descent or by elite mountaineers looking for the "Western Breach" approach—a dangerous and now rarely used path over the ice. Today, most Umbwe hikers join the standard southern circuit at Barranco Camp after two days of intense climbing.
      </p>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Why Climb Umbwe?</h2>
      <p>
        If it's so hard, why do people do it? The rewards are as extreme as the challenge:
      </p>
      <div className="space-y-6 my-8">
        <div className="flex gap-4">
          <div className="bg-red-500/10 p-2 rounded-lg h-fit">
            <Compass className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Total Solitude</h4>
            <p className="text-gray-400 text-sm">You see almost no other climbers for the first 48 hours. It feels like a private expedition in the dense jungle.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-red-500/10 p-2 rounded-lg h-fit">
            <Map className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">The Western Breach Views</h4>
            <p className="text-gray-400 text-sm">The early morning views as you emerge from the tree line are the most dramatic on the mountain. The scale of the Kibo peak is overwhelming.</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Wind className="text-red-500" /> Navigating the Climate Zones
      </h2>
      <p>
        On most Kilimanjaro routes, you experience the transition through five ecological zones gradually. On Umbwe, you "blast" through them.
      </p>
      <ul className="space-y-4 text-gray-400">
        <li><strong>Rainforest (1,600m - 2,800m):</strong> Extremely humid and muddy. You'll gain nearly 1,200m in a single day.</li>
        <li><strong>Heather and Moorland (2,800m - 4,000m):</strong> The trees thin out, exposing you to the sun and the first real views of the crater rim.</li>
        <li><strong>Alpine Desert (4,000m - 5,000m):</strong> By Day 3 (Karanga Camp), you are in a desolate, rocky landscape where nighttime temperatures drop below freezing.</li>
      </ul>

      <div className="bg-slate-900 rounded-2xl p-8 border border-red-500/20 my-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Info className="text-amber-500" /> Expert Warning from Kilimanjaro Quest
        </h3>
        <p className="text-gray-400">
          We do not recommend the Umbwe route for beginners or anyone who hasn't climbed above 4,000 meters before. If this is your first "big mountain," please consider our <Link href="/routes/lemosho" className="text-amber-500 hover:underline">Lemosho 8-day guide</Link> or the <Link href="/routes/northern-circuit" className="text-amber-500 hover:underline">Northern Circuit</Link>. Acclimatization is a biological process that cannot be rushed by fitness alone.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Thermometer className="text-red-500" /> Specific Training for Umbwe
      </h2>
      <p>
        If you are determined to tackle the Umbwe route, your training must go beyond standard cardio. You need "vertical endurance."
      </p>
      <ul className="list-disc pl-6 space-y-4">
        <li><strong>Weighted Ascent:</strong> Practice with a 12kg-15kg pack on the steepest grades you can find. Your goal is to build the muscular endurance to lift that weight for 6+ hours a day.</li>
        <li><strong>Core Stability:</strong> The uneven terrain requires significant core strength to prevent injury and save energy. See our <Link href="/preparation/training-plan" className="text-amber-500 hover:underline">12-week training plan</Link> for specific exercises.</li>
        <li><strong>Leg Strength:</strong> Focus on concentric (climbing) and eccentric (descending) loading. The descent is as hard on the knees as the ascent is on the lungs.</li>
      </ul>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Tent className="text-red-500" /> The Typical Itinerary (7 Days)
      </h2>
      <p>Most responsible operators run Umbwe as a 7-day trek to allow for at least one extra day of acclimatization:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse border border-slate-800 my-8">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4 border border-slate-700">Day</th>
              <th className="p-4 border border-slate-700">Route Section</th>
              <th className="p-4 border border-slate-700">Altitude Gain</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr>
              <td className="p-4 border border-slate-800 uppercase font-black">Day 1</td>
              <td className="p-4 border border-slate-800">Umbwe Gate to Umbwe Cave Camp</td>
              <td className="p-4 border border-slate-800">+1,200m</td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-800 uppercase font-black">Day 2</td>
              <td className="p-4 border border-slate-800">Umbwe Cave Camp to Barranco Camp</td>
              <td className="p-4 border border-slate-800">+1,100m</td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-800 uppercase font-black">Day 3</td>
              <td className="p-4 border border-slate-800">Barranco Camp (Acclimatization)</td>
              <td className="p-4 border border-slate-800">0m (Short Hike)</td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-800 uppercase font-black">Day 4</td>
              <td className="p-4 border border-slate-800">Barranco to Karanga Camp</td>
              <td className="p-4 border border-slate-800">+150m (Climbing Barranco Wall)</td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-800 uppercase font-black">Day 5</td>
              <td className="p-4 border border-slate-800">Karanga to Barafu Camp (Base Camp)</td>
              <td className="p-4 border border-slate-800">+600m</td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-800 uppercase font-black">Day 6</td>
              <td className="p-4 border border-slate-800">Summit Night (Uhuru Peak) & Mweka</td>
              <td className="p-4 border border-slate-800">+1,200m / -2,800m</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white text-center">Frequently Asked Questions</h2>
      <div className="space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-white/5">
        <div>
          <h4 className="text-white font-bold mb-2">Is the Umbwe route technical?</h4>
          <p className="text-gray-400 text-sm">No. You do not need ropes or mountaineering equipment, but you will need to "scramble" using your hands for balance in steep rock sections.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Is it more dangerous than other routes?</h4>
          <p className="text-gray-400 text-sm">The physical danger of falling is low, but the risk of severe altitude sickness is higher than on any other route due to the rapid ascent rate.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Can I join a group on Umbwe?</h4>
          <p className="text-gray-400 text-sm">Most Umbwe climbs are private because of the specialized nature of the route. Very few operators offer fixed-date group departures for this path.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Conclusion: Success or Suffering?</h2>
      <p>
        The Umbwe route is a masterpiece of mountain terrain, but it expects a high level of respect. It’s hard, it’s fast, and it’s beautiful. If you’re ready for the challenge, it provides the most visceral connection to Mount Kilimanjaro. If you aren't sure, don't risk your safety—opt for a longer route.
      </p>
      
      <div className="mt-12 p-8 bg-amber-600 rounded-3xl text-center">
        <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Not sure if you're ready?</h3>
        <p className="text-amber-100 mb-8 italic text-sm">Take our Personal Success Predictor to see which Kilimanjaro route matches your fitness and experience profile.</p>
        <Link 
          href="/#predictor" 
          className="inline-block bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl"
        >
          Take the Predictor Quiz
        </Link>
      </div>
    </article>
  );
};
