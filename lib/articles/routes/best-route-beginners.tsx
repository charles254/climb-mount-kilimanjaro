import React from 'react';
import { CheckCircle2, AlertTriangle, Mountain, Clock, BarChart, Heart, Sun, MapPin, Info } from 'lucide-react';
import Link from 'next/link';

export const BeginnerRouteArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Choosing the best Kilimanjaro route for beginners is the single most important decision you'll make for your trek. For a first-time high-altitude climber, the path you choose dictates your safety, enjoyment, and likelihood of reaching Uhuru Peak.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3">
        <Mountain className="text-amber-500" /> What Makes a Route "Beginner Friendly"?
      </h2>
      <p>
        For first-time high-altitude trekkers, "beginner-friendly" doesn't necessarily mean "easy." Every route involves steep climbs, long days, and cold nights. Instead, beginner-friendliness is defined by these core factors:
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg font-bold text-amber-500 mb-3 flex items-center gap-2 uppercase tracking-tight">
            <Clock className="w-5 h-5" /> Acclimatization
          </h3>
          <p className="text-gray-400 text-sm">
            The profile should allow your body to adjust to lower oxygen levels. The best routes follow the "climb high, sleep low" principle.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg font-bold text-amber-500 mb-3 flex items-center gap-2 uppercase tracking-tight">
            <BarChart className="w-5 h-5" /> Success Rate
          </h3>
          <p className="text-gray-400 text-sm">
            Routes with longer durations (7-9 days) have significantly higher success rates (over 85%) compared to shorter 5-6 day routes.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-lg font-bold text-amber-500 mb-3 flex items-center gap-2 uppercase tracking-tight">
            <Heart className="w-5 h-5 text-red-500" /> Physical Strain
          </h3>
          <p className="text-gray-400 text-sm">
            Beginner routes have more manageable daily walking distances, preventing early exhaustion before the final "summit push."
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white underline decoration-amber-500/50 underline-offset-8">Top Recommendation: The Lemosho Route (8 Days)</h2>
      <p>
        If you are looking for the absolute best experience as a beginner, the <strong>8-Day Lemosho Route</strong> is our #1 recommendation. According to statistics from the <a href="https://www.tanzaniaparks.go.tz/parks/kilimanjaro" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Tanzania National Parks</a>, longer routes significantly reduce the incident rate of high-altitude cerebral edema (HACE).
      </p>
      <p>Here's why Lemosho is the gold standard for beginners:</p>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <span><strong>Incredible Acclimatization:</strong> Crossing the Shira Plateau provides ample time for your body to adjust before the summit push. 8 days is much safer than the standard 6.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <span><strong>Stunning Scenery:</strong> It starts in the lush western rainforest and offers panoramic views of the entire mountain range.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <span><strong>Lower Daily Distance:</strong> By spreading the trek over more days, your "daily grind" is shorter, leaving you with more energy for the cold summit night.</span>
        </li>
      </ul>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Sun className="text-yellow-500" /> Secondary Choice: Northern Circuit (9 Days)
      </h2>
      <p>
        While less known than the "Whiskey Route," the <strong>Northern Circuit</strong> is arguably the best route for absolute beginners. It is the longest route, meaning your success rate is incredibly high—near 98% for most guided groups.
      </p>
      <p>
        It circles around the remote northern slopes, providing 360-degree views and total solitude. If you have the time and budget, this is the most professional and safest choice for a <Link href="/routes/northern-circuit" className="text-amber-500 hover:underline">Northern Circuit Kilimanjaro</Link> expedition.
      </p>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3 text-red-500">
        <AlertTriangle /> Caution: The Marangu Route (5-6 Days)
      </h2>
      <p>
        Many beginners are drawn to the <strong>Marangu Route</strong> (the "Coca-Cola" route) because it offers hut accommodations and is often the cheapest option. However, we generally advise against it for beginners for one major reason:
      </p>
      <div className="bg-red-950/20 p-8 rounded-2xl border border-red-500/20 leading-relaxed italic text-gray-300 my-8">
        <strong>The "Success Rate Trap":</strong> Because Marangu is often attempted in just 5 days, it has the lowest summit success rate on the mountain. Many beginners fail to reach the top because they simply don't have enough time to acclimatize. Unless you are already well-acclimatized from another peak, avoid this path.
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <MapPin className="text-amber-500" /> Comparison Summary for Beginners
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-white/10 my-8">
          <thead>
            <tr className="bg-white/5">
              <th className="p-4 border border-white/10 text-amber-500">Route</th>
              <th className="p-4 border border-white/10 text-amber-500">Duration</th>
              <th className="p-4 border border-white/10 text-amber-500">Beginner Score</th>
              <th className="p-4 border border-white/10 text-amber-500">Success Rate</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr>
              <td className="p-4 border border-white/10 font-bold">Lemosho</td>
              <td className="p-4 border border-white/10">8 Days</td>
              <td className="p-4 border border-white/10 text-amber-500 font-black">10/10</td>
              <td className="p-4 border border-white/10">95%+</td>
            </tr>
            <tr>
              <td className="p-4 border border-white/10 font-bold">Northern Circuit</td>
              <td className="p-4 border border-white/10">9 Days</td>
              <td className="p-4 border border-white/10 text-amber-500 font-black">9/10</td>
              <td className="p-4 border border-white/10">98%+</td>
            </tr>
            <tr>
              <td className="p-4 border border-white/10 font-bold">Machame</td>
              <td className="p-4 border border-white/10">7 Days</td>
              <td className="p-4 border border-white/10 text-yellow-500 font-black">7/10</td>
              <td className="p-4 border border-white/10">85%+</td>
            </tr>
            <tr>
              <td className="p-4 border border-white/10 font-bold">Marangu</td>
              <td className="p-4 border border-white/10">5-6 Days</td>
              <td className="p-4 border border-white/10 text-red-500 font-black">4/10</td>
              <td className="p-4 border border-white/10">65%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white text-center italic">Expert Q&A</h2>
      <div className="space-y-6 bg-slate-900 border border-white/5 p-8 rounded-3xl">
        <div>
          <h4 className="text-white font-bold mb-1">Is it safe for beginners?</h4>
          <p className="text-gray-400 text-sm">Absolutely. With a professional guide company and a long itinerary (7+ days), beginners have an excellent safety record on the mountain.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-1">Do I need to be an athlete?</h4>
          <p className="text-gray-400 text-sm">No, but you should follow a <Link href="/preparation/training-plan" className="text-amber-500 hover:underline">12-week training plan</Link> to ensure your body is ready for walking 5-8 hours a day.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white text-center">Conclusion</h2>
      <p className="text-center text-slate-400">
        If you have the budget and the time, choose <strong>Lemosho 8-Days</strong>. It is the gold standard for success and enjoyment on Mount Kilimanjaro for any beginner.
      </p>
      
      <div className="mt-12 bg-amber-600 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden group">
        <h3 className="text-2xl font-black text-white mb-4 uppercase italic leading-none">Ready to start your journey?</h3>
        <p className="text-amber-600 font-bold mb-8 bg-white/95 inline-block px-10 py-2 rounded-full text-sm">Join a 2026/2027 Beginner-Friendly Expedition</p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl"
          >
            Get Route Guide PDF
          </Link>
        </div>
        <Mountain className="absolute -bottom-10 -right-10 h-40 w-40 text-black/10 transition-transform group-hover:rotate-12" />
      </div>
    </article>
  );
};
