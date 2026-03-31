import React from 'react';
import { CloudRain, Info, CheckCircle2, AlertTriangle, Umbrella } from 'lucide-react';

export const RainySeasonArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-red-950/20 border-l-4 border-red-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Climbing Kilimanjaro in the rain is a different beast entirely. It's muddy, wet, and physically draining, but for some, the solitude is worth it.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <CloudRain className="text-amber-500" /> The Reality of Wet Season Treks
      </h2>
      <p>
        The "Long Rains" (April and May) see significant precipitation on the southern slopes. While many companies shut down operations during this time, 'KiliGo' specializes in northern approaches like the <strong>Rongai Route</strong>, which stays significantly drier.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-amber-500" /> Potential Benefits
          </h3>
          <ul className="space-y-2 list-none p-0 text-slate-400">
            <li>• Complete solitude on the trails</li>
            <li>• Stunning green scenery at lower levels</li>
            <li>• Deep snow at the peak (Beautiful!)</li>
            <li>• Lower flight costs to Tanzania</li>
          </ul>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" /> The Real Risks
          </h3>
          <ul className="space-y-2 list-none p-0 text-slate-400">
            <li>• High altitude + Cold + Wet = Higher AMS risk</li>
            <li>• Slower pace due to slippery trails</li>
            <li>• Gear often stays wet for the whole trip</li>
            <li>• Cloud cover blocks summit views</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Essential Gear for Rainy Seasons</h2>
      <p>
        If you decide to brave the wet season, your packing list must be upgraded. Standard waterproofs aren't enough; you need expedition-grade moisture management.
      </p>
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-xl">
          <Umbrella className="text-amber-500 mt-1" />
          <div>
            <strong>Gore-Tex Pro Everything:</strong> Your jacket and trousers must be 3-layer laminated shells to survive constant drizzle.
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-xl">
          <Info className="text-amber-500 mt-1" />
          <div>
            <strong>Waterproof Sacks:</strong> Every single item inside your duffel must be in individual dry bags. Don't rely on a single pack cover.
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Recommended Route: Rongai</h2>
      <p>
        For rainy season climbs, the <strong>Rongai Route</strong> is the only logical choice. Because it approaches from the north (near the Kenyan border), it sits in the rain shadow of the mountain. While the south is storming, the north often experiences only light mist or dry weather.
      </p>

      <div className="bg-amber-900/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4">Final Verdict</h3>
        <p className="text-gray-300 m-0">
          We only recommend rainy season climbs for <strong>highly experienced hikers</strong> who have spent multiple nights in wet alpine conditions. For everyone else, we advise waiting for the dry season to ensure your safety and enjoyment.
        </p>
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        Want to know more about the mountain's climate? Check out our <a href="/climb/climate-zones" className="text-amber-500 hover:underline">Climate Zones Guide</a>.
      </p>
    </article>
  );
};
