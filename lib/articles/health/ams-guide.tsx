import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Heart, Activity, Info, CheckCircle2, XCircle, ChevronRight, Wind, AlertTriangle, Syringe, HeartPulse } from 'lucide-react';

export const AMSArticle = () => {
  return (
    <article className="space-y-12">
      <div className="prose prose-invert prose-amber max-w-none">
        <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl shadow-xl">
          <p className="text-xl text-gray-300 m-0 italic leading-relaxed">
            "Will I get altitude sickness?" It is the single biggest fear for any climber attempting Kilimanjaro. Altitude sickness is <strong>not</strong> a reflection of your physical fitness; it is a biological response to thinning air that can affect a marathon runner just as easily as a couch potato. Understanding how to manage it is the key to standing on the Roof of Africa.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-12 mb-8 text-white flex items-center gap-3 font-display uppercase tracking-tight">
          <Wind className="text-amber-500 h-8 w-8" /> The Science of Thin Air
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          At sea level, the air you breathe is about 21% oxygen. At the summit of Mount Kilimanjaro (5,895 meters / 19,341 feet), the oxygen percentage remains the same, but the <em>barometric pressure</em> is roughly 40% lower. This means there are 40% fewer oxygen molecules in every breath you take.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          Your body must work drastically harder to oxygenate your blood and tissues. The condition formally known as <strong>Acute Mountain Sickness (AMS)</strong> occurs when your body cannot adapt quickly enough to this rapid decrease in oxygen pressure relative to your ascent rate.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-amber-500/20 pb-4">
              <Activity className="text-amber-500 h-6 w-6" /> Common (Mild) Symptoms
            </h3>
            <p className="text-slate-400 text-sm mb-6">These symptoms are entirely normal above 3,000 meters. They usually feel like a bad hangover and should be communicated immediately to your guide, but do not necessarily mean your climb is over.</p>
            <ul className="space-y-4 list-none p-0 text-slate-300">
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <strong>Persistent Headache:</strong> Often throbbing, typically worse in the morning.</li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <strong>Nausea & Loss of Appetite:</strong> Even your favorite snacks sound unappealing.</li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <strong>Dizziness:</strong> A feeling of lightheadedness when standing up quickly.</li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <strong>Extreme Fatigue:</strong> Feeling completely drained, despite sleeping well.</li>
            </ul>
          </div>
          <div className="bg-red-950/30 p-8 rounded-3xl border border-red-500/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3 border-b border-red-500/20 pb-4">
              <AlertTriangle className="h-6 w-6 text-red-500" /> Red Flag Symptoms
            </h3>
            <p className="text-slate-300 text-sm mb-6 font-medium">
              If mild AMS is ignored, it can rapidly progress into life-threatening conditions. If any of the following occur, you MUST descend immediately.
            </p>
            <ul className="space-y-4 list-none p-0 text-slate-200">
              <li className="flex items-start gap-3 bg-red-900/40 p-3 rounded-lg"><XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <strong>HACE (High Altitude Cerebral Edema):</strong> The brain swells with fluid. Symptoms include severe confusion, irrational behavior, hallucination, and the inability to walk heel-to-toe in a straight line (Ataxia).</li>
              <li className="flex items-start gap-3 bg-red-900/40 p-3 rounded-lg"><XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <strong>HAPE (High Altitude Pulmonary Edema):</strong> Fluid fills the lungs. Symptoms include a persistent, bubbling cough producing pink/frothy spit, extreme shortness of breath even while resting, and blue lips/fingernails.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-16 mb-8 text-white uppercase tracking-tight">
          How to Prevent AMS: The 3 Golden Rules
        </h2>
        
        <div className="space-y-8 my-10">
          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 flex gap-6 items-start">
            <div className="bg-amber-500/10 p-4 rounded-full shrink-0">
              <span className="text-2xl font-black text-amber-500">1</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Choose a Longer Route</h4>
              <p className="text-slate-400 text-base leading-relaxed">
                The absolute most effective way to prevent AMS is giving your body time to adapt. A 5-day climb on the <Link href="/routes/marangu-guide" className="text-amber-500 hover:underline">Marangu Route</Link> has a staggering failure rate because it forces an aggressive ascent. We highly recommend minimum 8-day itineraries like the <Link href="/routes/lemosho-vs-machame" className="text-amber-500 hover:underline">Lemosho Route</Link> or the <Link href="/routes/northern-circuit-guide" className="text-amber-500 hover:underline">9-Day Northern Circuit</Link>. Time is your best defense.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 flex gap-6 items-start">
            <div className="bg-amber-500/10 p-4 rounded-full shrink-0">
              <span className="text-2xl font-black text-amber-500">2</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Climb "Pole, Pole" (Slowly, Slowly)</h4>
              <p className="text-slate-400 text-base leading-relaxed">
                Your lead guide will insist on a pace that feels agonizingly slow on Day 1. Trust them. Walking at half your normal walking speed keeps your heart rate down and reduces oxygen depletion in your muscles. The mountain is a marathon, not a sprint.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 flex gap-6 items-start">
            <div className="bg-amber-500/10 p-4 rounded-full shrink-0">
              <span className="text-2xl font-black text-amber-500">3</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">Hydrate Relentlessly</h4>
              <p className="text-slate-400 text-base leading-relaxed">
                Dehydration exacerbates AMS symptoms (both cause headaches, making it hard to diagnose). At high altitude, you lose immense amounts of water vapor simply by exhaling in the dry, cold air. You must force yourself to drink 3 to 4 liters of purified water every day.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-amber-900/10 border-l-4 border-amber-500 p-8 rounded-2xl mt-12 mb-16">
        <h4 className="text-amber-400 text-2xl font-bold flex items-center gap-2 mb-4 uppercase tracking-tight">
          <Syringe className="h-7 w-7" /> What about Diamox?
        </h4>
        <p className="text-slate-300 leading-relaxed mb-4">
          Acetazolamide (Diamox) is an FDA-approved prescription medication used widely on Kilimanjaro to prevent AMS. It works by acidifying your blood, which tricks your body into breathing deeper and faster, especially while you sleep, supercharging the acclimatization process. It is a prophylactic, not a cure—it must be taken two days before the climb begins.
        </p>
        <p className="text-slate-300 leading-relaxed m-0 italic text-sm">
          *Note: The most common side effect is a harmless numbering/tingling sensation in the fingers, toes, and face. You must consult your primary care physician before taking Diamox, as it is a sulfa-based diuretic.
        </p>
      </div>

      <div className="mt-16 p-10 bg-gradient-to-br from-slate-900 to-amber-900/40 rounded-3xl text-center shadow-3xl border border-amber-500/20 relative overflow-hidden group">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter leading-tight flex items-center justify-center gap-3">
            <HeartPulse className="h-10 w-10 text-amber-500" /> Are You Altitude Ready?
          </h3>
          <p className="text-amber-100/80 mb-8 italic text-lg font-medium">Your route choice directly correlates to your altitude sickness risk. Take our 2-minute Success Predictor Quiz to analyze your age, fitness, and chosen path for a realistic summit probability.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/#predictor" 
              className="bg-amber-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl"
            >
              Calculate Summit Probability
            </Link>
          </div>
        </div>
        <Wind className="absolute -bottom-16 -left-16 h-64 w-64 text-amber-500/5 rotate-12 transition-transform group-hover:-translate-y-4" />
      </div>

    </article>
  );
};
