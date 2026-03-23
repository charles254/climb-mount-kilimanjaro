import React from 'react';
import { Home, Coffee, Info, CheckCircle2, XCircle, Thermometer, ShieldAlert, Mountain, Clock, Scale } from 'lucide-react';
import Link from 'next/link';

export const MaranguArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          The Marangu Route, famously known as the "Coca-Cola" route, is Kilimanjaro's oldest and most established path. It remains the only route that offers dormitory-style hut accommodations, making it a favorite for those who prefer to avoid sleeping in tents.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3">
        <Coffee className="text-amber-500" /> Why the "Coca-Cola" Route?
      </h2>
      <p>
        The name is a historical relic from the days when Marangu was the only accessible route and hikers could literally buy a bottle of Coke at the Mandara and Horombo huts. Today, while it is still considered the "easiest" route in terms of terrain, its <strong className="text-red-400">summit success rate is actually among the lowest</strong> on the mountain due to the rapid ascent time of many 5-day itineraries.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-amber-900/10 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-colors">
          <h3 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2 uppercase tracking-wide">
            <CheckCircle2 className="w-5 h-5" /> The Pros
          </h3>
          <ul className="space-y-3 list-none p-0 m-0 text-sm">
            <li className="flex gap-2"><span>•</span> <span><strong>Hut Comfort:</strong> No sleeping in tents; real bunk beds with foam mattresses.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Cheapest Option:</strong> Lower logistics costs make it the most budget-friendly path.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Shortest Distance:</strong> Physically the shortest way to reach the crater rim.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Safe Descent:</strong> The downhill path is well-maintained and less technical.</span></li>
          </ul>
        </div>
        <div className="bg-red-900/10 p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2 uppercase tracking-wide">
            <XCircle className="w-5 h-5" /> The Cons
          </h3>
          <ul className="space-y-3 list-none p-0 m-0 text-sm">
            <li className="flex gap-2"><span>•</span> <span><strong>Poor Acclimatization:</strong> Rapid altitude gain leads to more altitude sickness.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Crowds:</strong> It is the second most popular route and can feel "over-touristed."</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Less Scenic Variety:</strong> You go up and down the same path, missing half the mountain's views.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Noisy Huts:</strong> Sharing a room with 6-12 strangers can make sleeping difficult.</span></li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Home className="text-amber-500" /> Life in the Kilimanjaro Huts
      </h2>
      <p>
        Sleeping in huts sounds like a luxury compared to camping, but keep your expectations in check. The huts (Mandara, Horombo, and Kibo) offer communal bunk beds. You still need a 4-season <Link href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline font-bold">sleeping bag</Link> rated for at least -15°C (5°F).
      </p>
      <div className="bg-slate-900 rounded-2xl p-8 border border-white/5 space-y-6 my-8">
        <div>
          <h4 className="text-white font-bold mb-2">Mandara Huts (2,700m)</h4>
          <p className="text-gray-400 text-sm leading-relaxed">Located in the lush rainforest belt. If you take the 6-day version, this is your first night. The humidity is high, and the A-frame structures are surprisingly cozy.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Horombo Huts (3,720m)</h4>
          <p className="text-gray-400 text-sm leading-relaxed">The largest camp. On the 6-day route, you spend two nights here (Day 2 and 3). This is where the "Coca-Cola" vibe is strongest, with large communal dining halls.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Kibo Huts (4,700m)</h4>
          <p className="text-gray-400 text-sm leading-relaxed">Base camp for the summit push. It is essentially a large stone building. It's cold, barren, and filled with tension as climbers prepare for the midnight summit start.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3 font-display uppercase italic">
        <Clock className="text-amber-500" /> The 6-Day Itinerary (Recommended)
      </h2>
      <p>We strongly advise against the 5-day itinerary. The success rate drops by nearly 40% without the extra day at Horombo:</p>
      <ul className="space-y-4 text-gray-400 border-l border-amber-500/30 ml-4 pl-6">
        <li><strong>Day 1:</strong> Marangu Gate to Mandara Hut (3-4 hours trek through rainforest).</li>
        <li><strong>Day 2:</strong> Mandara Hut to Horombo Hut (5-6 hours trek emerging into the moorland).</li>
        <li><strong>Day 3:</strong> <em>Mandatory Acclimatization Day</em>. A short hike to Zebra Rocks and back to Horombo for a second night.</li>
        <li><strong>Day 4:</strong> Horombo Hut to Kibo Hut (Crossing the desloate alpine desert 'Saddle').</li>
        <li><strong>Day 5:</strong> Summit Day! Midnight push to Gillman's Point and Uhuru Peak, then back down to Horombo.</li>
        <li><strong>Day 6:</strong> Horombo Hut to Marangu Gate for your summit certificate.</li>
      </ul>

      <div className="bg-red-950/20 border-l-4 border-red-500 p-8 my-12 rounded-r-2xl">
        <h4 className="text-red-400 text-xl font-bold mb-4 flex items-center gap-2">
          <ShieldAlert className="w-6 h-6" /> The Acclimatization Warning
        </h4>
        <p className="text-gray-300 leading-relaxed italic m-0">
          Statistically, Marangu is easier on the legs but harder on the lungs. Because the path doesn't follow the "climb high, sleep low" principle as well as the <Link href="/routes/lemosho" className="text-amber-500 hover:underline">Lemosho route</Link>, you must be extremely diligent about your pace. "Pole pole" (slowly, slowly) is the law here.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Conclusion: Huts or Tents?</h2>
      <p>
        The Marangu route is a great choice if you absolutely cannot stand camping or if you are looking for the most affordable way to climb Kilimanjaro. However, if your budget allows for an extra $300-$500, we recommend the <strong>Machame 7-Day</strong> or <strong>Lemosho 8-Day</strong> for a dramatically higher success rate and better scenery.
      </p>
      
      <div className="mt-12 p-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter leading-tight">Can You Handle the Coca-Cola Route?</h3>
          <p className="text-white/90 mb-8 italic font-medium">Take our 2-minute Personal Success Predictor to see if your experience level matches the Marangu route's rapid ascent profile.</p>
          <Link 
            href="/#predictor" 
            className="inline-block bg-slate-950 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl"
          >
            Take the Predictor Quiz
          </Link>
        </div>
        <Scale className="absolute -bottom-10 -right-10 h-48 w-48 text-white/10 transition-transform group-hover:rotate-12" />
      </div>

      <p className="mt-12 text-center text-sm text-slate-500">
        Still undecided? Explore our <Link href="/ultimate-guide" className="text-amber-400 font-bold hover:underline">Ultimate Kilimanjaro Hub</Link> for 20+ expert guides on preparation and safety.
      </p>
    </article>
  );
};
