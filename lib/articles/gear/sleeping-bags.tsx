import React from 'react';
import { Tent, Moon, Thermometer, Info, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const SleepingBagsArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "Recovery happens in the horizontal position at night. The cold is your worst enemy."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight font-black font-display uppercase italic tracking-tight">
        <Thermometer className="text-amber-500" /> Temperature Ratings: What you Need
      </h2>
      <p>
        Don't trust the "Extreme" rating on sleeping bags. Look for the **"Comfort" rating**. At 4,000 to 5,000 meters, overnight temperatures inside your tent will easily drop to **-10°C to -15°C (14°F to 5°F)**.
      </p>

      <div className="my-12 grid md:grid-cols-2 gap-8 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Moon className="text-amber-500" /> Winter Bags (4-Season)</h3>
          <p className="text-sm">
            We strongly recommend a **-20°C (0°F)** rated down-filled sleeping bag. While it may be overkill on Day 1, you will be thanking us on the night at Barafu or Kibo Camp.
          </p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Zap className="text-amber-500" /> Sleeping Liners</h3>
          <p className="text-sm">
            If your bag isn't warm enough, or if you're using a rental, a **silk or thermal liner** adds an extra 3°C to 5°C of warmth and keeps your bag cleaner.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">Choosing Down vs. Synthetic</h2>
      <p>
        **Down** is lighter and more compressible, but it loses its warmth when wet. **Synthetic** is heavier but stays warm even in humid conditions. Given that your duffel is carried by porters, the extra weight of synthetic isn't a dealbreaker, but the warmth of down is unparalleled.
      </p>

      <div className="bg-amber-100/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4 uppercase italic leading-none">The Sleep System: Don't forget the Pad</h3>
        <p className="text-slate-300 m-0 font-medium">
          Most of your heat loss occurs through the cold mountain ground. We provide thick foam sleeping pads on all treks, but if you want extra comfort, an inflatable **Therm-a-Rest (NeoAir)** is a game changer for rest.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white uppercase italic font-black">Expert Tips for Warmth</h2>
      <ul className="space-y-4 list-none p-0">
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Wear clean, dry wool socks to bed. Never wear the ones you hiked in.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Put a hot water bottle inside your bag 20 minutes before sleeping.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Keep your "summit clothes" inside the bag to pre-warm them for the morning.</li>
      </ul>

      <p className="text-center italic text-slate-500 mb-12">
        See the full gear suggestions in our <a href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">Ultimate Packing List</a>.
      </p>
    </article>
  );
};
