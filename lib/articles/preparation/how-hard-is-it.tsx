import React from 'react';
import { Mountain, AlertTriangle, Thermometer, Brain, CheckCircle2, Info } from 'lucide-react';

export const HowHardIsItArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "Is it a walk in the park or a brutal test of human endurance?" The truth lies somewhere in between, and it changes every thousand meters.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Mountain className="text-amber-500" /> The Physical Reality
      </h2>
      <p>
        Technically, Kilimanjaro is a "walk-up" mountain. You don't need ropes, harnesses, or technical mountaineering skills. However, "walking up" to 5,895m (19,341 ft) is anything but easy.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">The Trek</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            You will be hiking for 4 to 8 hours a day, mostly on inclined terrain. While the pace is slow (*pole-pole*), the cumulative fatigue over 6-8 days is significant.
          </p>
        </div>
        <div className="bg-amber-900/10 p-8 rounded-2xl border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-500 mb-4 uppercase tracking-tighter">The Summit Push</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            This is the hardest part. You start at midnight, climbing 1,200m in freezing darkness, followed by a 2,000m descent. It is a 12-15 hour day that tests every bit of your resolve.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic">The Three Greatest Challenges</h2>
      
      <div className="space-y-6">
        <div className="flex gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="shrink-0 bg-amber-500/10 p-3 rounded-xl h-fit">
            <Brain className="text-amber-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">1. Altitude (The X-Factor)</h4>
            <p className="text-slate-400">This is what makes Kilimanjaro "hard." At the summit, there is 50% less oxygen than at sea level. Your body has to work twice as hard just to breathe and digest food.</p>
          </div>
        </div>

        <div className="flex gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="shrink-0 bg-blue-500/10 p-3 rounded-xl h-fit">
            <Thermometer className="text-blue-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">2. The Cold</h4>
            <p className="text-slate-400">The temperature drop is extreme. You might start in 30°C rainforest and summit in -20°C arctic desert. Managing your body temp through layering is a constant task.</p>
          </div>
        </div>

        <div className="flex gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="shrink-0 bg-red-500/10 p-3 rounded-xl h-fit">
            <AlertTriangle className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">3. The Descent</h4>
            <p className="text-slate-400">Many forget that going down is brutal on the knees. You descend nearly 3,000m in two days. This is where most injuries occur.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-600 rounded-3xl p-8 my-16 text-white shadow-xl">
        <h3 className="text-2xl font-black mb-4 uppercase italic">Success Rates vs. Difficulty</h3>
        <p className="text-lg font-medium leading-relaxed mb-6">
          The difficulty is often determined by the route you choose. Shorter routes (5-6 days) are "harder" because your body lacks time to acclimatize, leading to a 50-60% success rate.
        </p>
        <div className="bg-white/10 p-4 rounded-xl">
          <p className="m-0 font-bold">Pro Tip: Choose an 8-day route like Lemosho or Northern Circuit to reduce the "difficulty" by improving your success rate to over 90%.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Conclusion</h2>
      <p>
        Kilimanjaro is a mental game as much as a physical one. If you are reasonably fit and have the right mindset, you can do it. It will be one of the hardest things you ever love.
      </p>

      <div className="mt-12 p-8 bg-slate-900 rounded-3xl border border-slate-800">
        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Ready to gauge your readiness?</h4>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/preparation/training-plan" className="bg-amber-500 text-slate-950 px-6 py-3 rounded-xl font-bold text-center hover:bg-amber-400 transition-colors">
            View Training Plan
          </a>
          <a href="/routes" className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-slate-700 transition-colors">
            Compare Routes
          </a>
        </div>
      </div>
    </article>
  );
};
