import React from 'react';
import { Compass, ShieldCheck, Mountain, Clock, Globe, Info, Tent, Trees, Scale, BarChart } from 'lucide-react';
import Link from 'next/link';

export const NorthernCircuitArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          The Northern Circuit is Kilimanjaro's newest and longest route, widely considered the most successful path to Uhuru Peak. With its near-perfect 98% success rate, it is the ultimate "slow and steady" approach for any climber.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Compass className="text-amber-500" /> The Gold Standard for Acclimatization
      </h2>
      <p>
        If your #1 priority is reaching the summit safely, the <strong>Northern Circuit</strong> is the definitive choice. Because the trek takes 9 full days, it gives your body the absolute maximum time to adjust to the altitude. While other routes rush you to the top in 5 or 6 days, Northern Circuit follows the same western start as <Link href="/routes/lemosho" className="text-amber-500 hover:underline">Lemosho</Link> but then circles around the remote northern slopes.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12 font-display uppercase italic tracking-tighter">
        <div className="bg-slate-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all group">
          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-amber-500" /> 9-Day Duration
          </h3>
          <p className="text-gray-400 text-sm not-italic lowercase first-letter:uppercase font-sans">
            The extended time on the mountain allows for a gentle ascent and plenty of 'climb high, sleep low' opportunities, especially between Moir Hut and Buffalo Camp.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all group">
          <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-500" /> ~98% Success Rate
          </h3>
          <p className="text-gray-400 text-sm not-italic lowercase first-letter:uppercase font-sans">
            With 9 days of acclimatization, altitude sickness is rarely a summit-stopping issue. It is recommended for absolute beginners or those anxious about altitude.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Globe className="text-amber-500" /> 360-Degree Views & Solitude
      </h2>
      <p>
        The Northern Circuit literally circles around the northern slopes of Kilimanjaro. This means you experience parts of the mountain that very few other hikers ever see, including dramatic views across the border into Kenya's Amboseli National Park.
      </p>
      <div className="space-y-6 my-10">
        <div className="flex gap-4 items-start">
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <Trees className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Untouched Wilderness</h4>
            <p className="text-gray-400 text-sm">You pass through every single <Link href="/climb/climate-zones" className="text-amber-500 hover:underline">Kilimanjaro climate zone</Link>, spending more time in the high alpine desert than any other route.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <Tent className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Remote Camps</h4>
            <p className="text-gray-400 text-sm">Highlights include <strong>Buffalo Camp</strong> and <strong>Third Cave</strong>, offering one of the most remote and peaceful camping experiences on the entire mountain.</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <BarChart className="text-amber-500" /> Who Should Choose Northern Circuit?
      </h2>
      <ul className="list-disc pl-6 space-y-4 text-gray-400">
        <li><strong>Altitude Conscious:</strong> Those who want the best possible "safeguard" against AMS.</li>
        <li><strong>Escape Seekers:</strong> If you want to avoid the "highway" feel of the Machame or Marangu routes.</li>
        <li><strong>Professional Photographers:</strong> Diverse lighting and angles of Kibo's northern glaciers.</li>
        <li><strong>Slow Adventurers:</strong> Those who enjoy the journey and want to soak in every moment on the roof of Africa.</li>
      </ul>

      <div className="bg-amber-900/20 border-l-4 border-amber-500 p-8 my-12 rounded-r-2xl">
        <h4 className="text-amber-500 text-xl font-bold mb-4 flex items-center gap-2">
          <Info className="h-6 w-6" /> The Cost Consideration
        </h4>
        <p className="text-gray-300 leading-relaxed italic m-0 text-sm">
          Keep in mind that the Northern Circuit is typically the most expensive route due to the extra days of TANAPA permits, food, and staff wages. However, when you calculate the "cost per successful summit," it often provides the best value. Most climbers agree that the increased success rate and solitude are worth the investment.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Conclusion: The Hidden Gem</h2>
      <p>
        The Northern Circuit is Kilimanjaro's hidden gem. While others are fighting for space on the southern trails, you'll be enjoying the vastness of the mountain in peace. It is the gold standard for high-altitude trekking and our top recommendation for the 2026/2027 climbing season.
      </p>
      
      <div className="mt-12 p-10 bg-gradient-to-br from-amber-600 to-amber-900 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter leading-tight">Ready for a 98% Success Rate?</h3>
          <p className="text-white/90 mb-8 italic font-medium">Take our 2-minute Personal Success Predictor to see if your profile is a match for the Northern Circuit's long-distance endurance requirement.</p>
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
        Still thinking? Compare the <Link href="/routes/lemosho-vs-machame" className="text-amber-500 font-bold hover:underline">Machame vs. Lemosho alternatives</Link> or head back to the <Link href="/ultimate-guide" className="text-amber-500 font-bold hover:underline">Ultimate Hub</Link>.
      </p>
    </article>
  );
};
