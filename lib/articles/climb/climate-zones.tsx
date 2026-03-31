import React from 'react';
import { CloudRain, Thermometer, Wind, Mountain, Sun, Trees, Info } from 'lucide-react';

export const ClimateZonesArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Climbing Kilimanjaro is like walking from the Tropics to the Arctic in just a few days.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Mountain className="text-amber-500" /> Five Worlds on One Mountain
      </h2>
      <p>
        Mount Kilimanjaro is home to five distinct climate zones. Each zone occupies roughly 1,000 meters of altitude and possesses its own unique ecosystem, temperature range, and landscape.
      </p>

      <div className="space-y-12 my-16">
        {/* Zone 1 */}
        <div className="relative pl-8 border-l-2 border-slate-800">
          <div className="absolute -left-3 top-0 bg-emerald-500 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase italic">1</div>
          <h3 className="text-2xl font-bold text-white m-0">Cultivation Zone (800m - 1,800m)</h3>
          <p className="text-slate-400 mt-2">The lower slopes are fertile and lush. This is where most Kilimanjaro coffee is grown. It’s warm, humid, and frequently receives rainfall.</p>
        </div>

        {/* Zone 2 */}
        <div className="relative pl-8 border-l-2 border-slate-800">
          <div className="absolute -left-3 top-0 bg-green-600 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase italic">2</div>
          <h3 className="text-2xl font-bold text-white m-0">Rainforest Zone (1,800m - 2,800m)</h3>
          <p className="text-slate-400 mt-2">Dense tropical forest characterized by mist, moss-covered trees, and high biodiversity. Expect rain here regardless of the season. Keep an eye out for Colobus monkeys.</p>
        </div>

        {/* Zone 3 */}
        <div className="relative pl-8 border-l-2 border-slate-800">
          <div className="absolute -left-3 top-0 bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase italic">3</div>
          <h3 className="text-2xl font-bold text-white m-0">Heath & Moorland Zone (2,800m - 4,000m)</h3>
          <p className="text-slate-400 mt-2">The forest thins out into giant heathers and weird-looking "Lobelia" plants. The air gets drier, and the views open up. Nights start to get cold here.</p>
        </div>

        {/* Zone 4 */}
        <div className="relative pl-8 border-l-2 border-slate-800">
          <div className="absolute -left-3 top-0 bg-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase italic">4</div>
          <h3 className="text-2xl font-bold text-white m-0">Alpine Desert Zone (4,000m - 5,000m)</h3>
          <p className="text-slate-400 mt-2">A desolate, Mars-like landscape of volcanic rock and dust. Very little vegetation survives here. Solar radiation is intense by day, and temperatures drop below freezing at night.</p>
        </div>

        {/* Zone 5 */}
        <div className="relative pl-8 border-l-2 border-slate-800">
          <div className="absolute -left-3 top-0 bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-900 uppercase italic">5</div>
          <h3 className="text-2xl font-bold text-white m-0">Arctic Zone (5,000m - 5,895m)</h3>
          <p className="text-slate-400 mt-2">Glaciers, scree, and permanent ice. There is 50% less oxygen than at sea level. This is the "Death Zone" where survival is a temporary state of being.</p>
        </div>
      </div>

      <div className="bg-amber-900/10 border border-amber-500/20 p-8 rounded-3xl my-16">
        <h4 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2 italic uppercase">
          <Info className="w-5 h-5" /> What does this mean for YOU?
        </h4>
        <p className="text-slate-300 leading-relaxed mb-0">
          This incredible diversity is why <strong>layering</strong> is so vital. You cannot pack for just one temperature. You need gear that can handle 30°C humidity and -20°C arctic wind in the same bag.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic">The "Kilimanjaro Wardrobe"</h2>
      <p>
        Because you travel through so many zones, your packing list is more complex than a standard hike. Most climbers use a 12-layer system to adapt as they move from the orchids of the rainforest to the ice fields of the summit.
      </p>

      <p className="mt-12 text-center">
        <a href="/gear/ultimate-packing-list" className="inline-block bg-amber-500 text-slate-950 px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors">
          View Packing List for All Zones
        </a>
      </p>
    </article>
  );
};
