import React from 'react';
import { Scale, Trees, Mountain, Clock, CheckCircle2, XCircle, Info, PieChart, Shield } from 'lucide-react';
import Link from 'next/link';

export const LemoshoVsMachameArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-blue-900/10 border-l-4 border-blue-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Lemosho and Machame are the two most popular "scenic" routes on Mount Kilimanjaro. While both offer extraordinary beauty and high success rates, choosing between them depends on your budget, timeframe, and crowd tolerance.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3">
        <Scale className="text-amber-500" /> Key Differences at a Glance
      </h2>
      
      <div className="overflow-x-auto my-10 border border-white/10 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="p-4 border-b border-white/10 text-amber-500">Feature</th>
              <th className="p-4 border-b border-white/10 text-amber-500">Lemosho Route</th>
              <th className="p-4 border-b border-white/10 text-amber-500">Machame Route</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Recommended Days</td>
              <td className="p-4 border-b border-white/10">8 Days</td>
              <td className="p-4 border-b border-white/10">7 Days</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Start Point</td>
              <td className="p-4 border-b border-white/10 font-bold text-amber-500 underline">West (Londorossi Gate)</td>
              <td className="p-4 border-b border-white/10 font-bold text-blue-400 underline">South (Machame Gate)</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Traffic/Crowds</td>
              <td className="p-4 border-b border-white/10">Low (until day 3)</td>
              <td className="p-4 border-b border-white/10">High</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Success Rate</td>
              <td className="p-4 border-b border-white/10 font-bold text-amber-500">95%+ (8-Day)</td>
              <td className="p-4 border-b border-white/10 font-bold">85%+ (7-Day)</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Price Range</td>
              <td className="p-4 border-b border-white/10">Premium (Extra Transport)</td>
              <td className="p-4 border-b border-white/10">Mid-range / Value</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Trees className="text-amber-500" /> The Lemosho Experience
      </h2>
      <p>
        The <strong>Lemosho Route</strong> is widely considered the most beautiful route on Mount Kilimanjaro. It starts in the West, and for the first two days, you are trekking through remote, pristine rainforest. Many climbers prefer Lemosho because it offers a quieter start than the southern routes like Machame.
      </p>
      <p>
        According to industry reports and <a href="https://www.tanzaniaparks.go.tz" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Tanzania National Parks (TANAPA)</a> data, Lemosho provides one of the best acclimatization profiles because it crosses the entire Shira Plateau before joining the southern circuit.
      </p>

      <div className="bg-amber-900/10 p-6 rounded-xl border border-amber-500/20 my-8">
        <h4 className="text-amber-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide">
          <Shield className="w-5 h-5" /> Why Choose Lemosho?
        </h4>
        <ul className="space-y-3 m-0 p-0 text-sm">
          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> <strong>Higher Success:</strong> The 8th day added for acclimatization makes a huge difference.</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> <strong>Remote Start:</strong> Fewer crowds initially compared to Machame.</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> <strong>Wildlife:</strong> Higher chance of seeing colobus monkeys and exotic birds in the western rain forest.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Mountain className="text-blue-500" /> The Machame Experience
      </h2>
      <p>
        The <strong>Machame Route</strong>, often nicknamed the "Whiskey Route," is more direct and slightly steeper than Lemosho. It is the most popular route on Kilimanjaro for a reason: it's incredibly scenic and offers great value for money. 
      </p>
      <p>
        For climbers on a tighter budget who are in good physical shape, the 7-day Machame trek is the perfect compromise. See our <Link href="/preparation/training-plan" className="text-blue-400 hover:underline">Kilimanjaro training guide</Link> for cardio prep specifically for the steeper sections of this path.
      </p>

      <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20 my-8">
        <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide">
          <Shield className="w-5 h-5" /> Why Choose Machame?
        </h4>
        <ul className="space-y-3 m-0 p-0 text-sm">
          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> <strong>Budget Friendly:</strong> Shorter duration and standard entry points keep costs down.</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> <strong>Social Atmosphere:</strong> Great for solo travelers looking to meet others.</li>
        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> <strong>Efficiency:</strong> Compact 7-day schedule fits into many vacation plans.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Clock className="text-amber-500" /> The Itinerary Overlap
      </h2>
      <p>
        Regardless of which you choose, both routes meet at the Shira Plateau on Day 3 (for Lemosho) or Day 2/3 (for Machame). From that point onward, the itinerary is identical:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Trek to <strong>Lava Tower</strong> (4,600m) for acclimatization.</li>
        <li>Descend to the magnificent <strong>Barranco Camp</strong>.</li>
        <li>Climb the legendary <strong>Barranco Wall</strong> the next morning.</li>
        <li>Final summit push from <strong>Barafu Camp</strong>.</li>
      </ul>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <PieChart className="text-amber-500" /> The Verdict: Which is Right for You?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 my-10">
        <div className="p-6 bg-slate-900 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-4 text-amber-500">Pick Lemosho If...</h3>
          <p className="text-gray-400 text-sm">
            You want the highest possible success rate, you prioritize photography or relative solitude, and you have the budget for an extra night and transport. It is the definitive <em>luxury</em> of time.
          </p>
        </div>
        <div className="p-6 bg-slate-900 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold mb-4 text-blue-400">Pick Machame If...</h3>
          <p className="text-gray-400 text-sm">
            You are physically fit, you like a bustling trail, and you want the "Whiskey Route" badge of honor. It's the best choice for adventurous climbers on a mid-range budget.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white text-center">Final Expert Advice</h2>
      <p className="text-center text-slate-400">
        Still not sure which path fits your personality? Explore our <Link href="/ultimate-guide" className="text-amber-500 font-bold hover:underline">Ultimate Guide to Climbing Mount Kilimanjaro</Link> for detailed comparisons across all 7 routes.
      </p>
      
      <div className="mt-12 p-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter">Success or Turning Back?</h3>
          <p className="text-white/90 mb-8 italic font-medium">Take our 2-minute Personal Success Predictor to see which Kilimanjaro route matches your profile.</p>
          <Link 
            href="/#predictor" 
            className="inline-block bg-slate-950 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl"
          >
            Take the Predictor Quiz
          </Link>
        </div>
        <Scale className="absolute -bottom-10 -right-10 h-48 w-48 text-white/10 transition-transform group-hover:rotate-12" />
      </div>
    </article>
  );
};
