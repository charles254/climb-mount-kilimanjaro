import React from 'react';
import { CloudSun, CloudRain, Thermometer, Calendar, Info, CheckCircle2 } from 'lucide-react';

export const BestTimeArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Mount Kilimanjaro’s position near the equator means it doesn't experience typical four seasons. Instead, it has two rainy seasons and two dry seasons.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Calendar className="text-amber-500" /> Peak Climbing Seasons
      </h2>
      <p>
        The best time to climb Kilimanjaro is during the two dry seasons. These windows offer the clearest skies, the least rain, and the safest conditions on the mountain's steep and often dusty trails.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-amber-900/10 p-8 rounded-2xl border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-500 mb-4 uppercase tracking-wider">January to March</h3>
          <p className="text-sm text-gray-400 mb-4">The 'Warm Dry' Season</p>
          <ul className="space-y-2 list-none p-0 text-gray-300">
            <li>• Warmer temperatures at base</li>
            <li>• Clear views of the peak</li>
            <li>• Generally less crowded than summer</li>
            <li>• Perfect for Full Moon climbs</li>
          </ul>
        </div>
        <div className="bg-amber-900/10 p-8 rounded-2xl border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-500 mb-4 uppercase tracking-wider">June to October</h3>
          <p className="text-sm text-gray-400 mb-4">The 'Cool Dry' Season</p>
          <ul className="space-y-2 list-none p-0 text-gray-300">
            <li>• Most stable weather conditions</li>
            <li>• Coldest nights on the mountain</li>
            <li>• Peak trekking traffic</li>
            <li>• Best visibility for photography</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic">The Rainy Seasons (Avoid if possible)</h2>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="shrink-0 bg-red-500/10 p-3 rounded-xl h-fit">
            <Info className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">April to May (Long Rains)</h4>
            <p className="text-gray-400">The most difficult time to climb. Heavy cloud cover obscures views, and trails become extremely muddy and slippery. Success rates drop during this period.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 bg-orange-500/10 p-3 rounded-xl h-fit">
            <Info className="text-orange-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">November to Mid-December (Short Rains)</h4>
            <p className="text-gray-400">Occasional afternoon showers. It's possible to climb, but you should be prepared for moisture and reduced visibility.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 my-16 border border-slate-800">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-tighter italic">
          <Thermometer className="text-amber-500" /> Temperature at the Summit
        </h3>
        <p className="text-gray-300 mb-6">
          While it may be 25°C - 30°C in the town of Moshi, the summit of Kilimanjaro (Uhuru Peak) can drop to <strong>-15°C or even -20°C</strong> with wind chill.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800 rounded-xl">
            <p className="text-xs uppercase text-slate-500 font-bold mb-1">Base Average</p>
            <p className="text-2xl font-black text-white">24°C</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-xl">
            <p className="text-xs uppercase text-slate-500 font-bold mb-1">Summit Average</p>
            <p className="text-2xl font-black text-white">-10°C</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Conclusion</h2>
      <p>
        If your schedule allows, aim for <strong>late January through February</strong> or <strong>September through October</strong>. These windows offer the best balance of weather, success rates, and scenic beauty for your quest to stand on the roof of Africa.
      </p>

      <div className="mt-12 p-8 bg-amber-600 rounded-3xl text-white">
        <h4 className="text-2xl font-black mb-4 uppercase italic">Ready to Check Dates?</h4>
        <p className="mb-6 font-medium">We are now taking bookings for the 2026 peak seasons. Spots on full moon climbs fill up 12 months in advance.</p>
        <a href="/contact" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors">
          View 2026 Schedule
        </a>
      </div>
    </article>
  );
};
