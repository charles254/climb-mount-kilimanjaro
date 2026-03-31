import React from 'react';
import { Footprints, ShieldCheck, Info, CheckCircle2, AlertTriangle, Star } from 'lucide-react';

export const BestBootsArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Your boots are the most critical piece of equipment you will bring. A bad pair of boots can end your climb on day one.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Footprints className="text-amber-500" /> What Makes a Great Kilimanjaro Boot?
      </h2>
      <p>
        Kilimanjaro involves walking over 60km across varying terrain—from slippery rainforest mud to volcanic scree and sharp rocks. You need a boot that provides three things: **Ankle Stability**, **Waterproofing**, and **Traction**.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="text-amber-500" /> Key Features
          </h3>
          <ul className="space-y-3 list-none p-0 text-slate-400">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> <strong>Gore-Tex Lining:</strong> Essential for the wet rainforest and summit snow.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> <strong>High Ankle Support:</strong> To prevent sprains on uneven volcanic rocks.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> <strong>Vibram Soles:</strong> For maximum grip on the steep Barranco Wall.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> <strong>Lacing System:</strong> Locked hooks to keep your foot secure during descent.</li>
          </ul>
        </div>
        <div className="bg-amber-900/10 p-8 rounded-2xl border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2">
            <AlertTriangle /> Pro Tip: Sizing
          </h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Buy your boots <strong>one half-size or one full size larger</strong> than your normal shoes. 
          </p>
          <p className="text-sm text-slate-400">
            Why? Your feet will swell at altitude, and you need extra room in the "toe box" so your toes don't hit the front of the boot during the 5-hour descent from Uhuru Peak. This is how climbers lose toenails!
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic">Top 3 Recommended Boots</h2>
      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">1. Salomon Quest 4D GTX</h4>
            <div className="flex text-amber-500"><Star /><Star /><Star /><Star /><Star /></div>
          </div>
          <p className="text-slate-400 text-sm">The gold standard for Kilimanjaro. It offers the support of a traditional leather boot with the weight of a trail runner.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">2. Lowa Renegade GTX</h4>
            <div className="flex text-amber-500"><Star /><Star /><Star /><Star /><Star /></div>
          </div>
          <p className="text-slate-400 text-sm">Perfect for those with wider feet. Extremely comfortable out of the box and very durable.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-white">3. La Sportiva Trango Tech</h4>
            <div className="flex text-amber-500"><Star /><Star /><Star /><Star /><Star /></div>
          </div>
          <p className="text-slate-400 text-sm">A more 'mountaineering' oriented boot. Best for those doing technical routes like the Arrow Glacier.</p>
        </div>
      </div>

      <div className="bg-amber-600 rounded-3xl p-8 my-16 text-white shadow-xl">
        <h3 className="text-2xl font-black mb-4 uppercase italic">The Most Important Rule: Break Them In!</h3>
        <p className="text-lg font-medium leading-relaxed mb-0">
          Never, ever wear brand new boots on Day 1. You should walk at least <strong>50km to 80km</strong> in your boots before arriving in Tanzania. Wear them on your training hikes, at the gym, and even around the house. Your feet need to mold to the boot to avoid blisters.
        </p>
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        See the full gear list in our <a href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">Ultimate Packing List</a>.
      </p>
    </article>
  );
};
