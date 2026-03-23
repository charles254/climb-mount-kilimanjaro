import React from 'react';
import Link from 'next/link';
import { Pill, ShieldCheck, AlertTriangle, Clock, Activity, HeartPulse } from 'lucide-react';
import DiamoxTable from '@/components/DiamoxTable';

export const DiamoxGuideArticle = () => {
  return (
    <article className="space-y-12">
      <div className="prose prose-invert prose-amber max-w-none">

        <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl shadow-xl">
          <p className="text-xl text-gray-300 m-0 italic leading-relaxed">
            Diamox (Acetazolamide) is the most widely used prescription medication for preventing altitude sickness on Mount Kilimanjaro. It does not mask symptoms — it actively accelerates your body&apos;s natural acclimatization process. This guide covers dosage protocols, timing, side effects, and costs so you can make an informed decision with your doctor.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-12 mb-8 text-white flex items-center gap-3 font-display uppercase tracking-tight">
          <Pill className="text-amber-500 h-8 w-8" /> How Diamox Works
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Acetazolamide is a carbonic anhydrase inhibitor. It works by causing your kidneys to excrete bicarbonate, which acidifies your blood. This mild metabolic acidosis tricks your respiratory center into breathing deeper and faster — especially during sleep, when dangerous periodic breathing (Cheyne-Stokes respiration) can reduce your oxygen levels dramatically.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          The net result is that your body acclimatizes faster at altitude. Diamox is classified as a <strong>prophylactic</strong> (preventive) medication, meaning it must be started <em>before</em> you reach high altitude to be effective. It is FDA-approved specifically for the prevention and treatment of <Link href="/health/ams-guide" className="text-amber-500 hover:underline">Acute Mountain Sickness (AMS)</Link>.
        </p>

        <DiamoxTable />

        <h2 className="text-3xl md:text-4xl font-black mt-16 mb-8 text-white flex items-center gap-3 font-display uppercase tracking-tight">
          <Clock className="text-amber-500 h-8 w-8" /> When to Start and Stop
        </h2>
        <div className="space-y-6 mb-10">
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
            <h4 className="text-lg font-bold text-white mb-2">Before Your Climb</h4>
            <p className="text-slate-400 leading-relaxed">
              Begin taking Diamox 24 to 48 hours before reaching 2,500 meters (8,200 feet). For Kilimanjaro, this means starting 1 to 2 days before your trek begins at the gate, since most trailheads sit between 1,800m and 2,100m and you will ascend past 2,500m on Day 1.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
            <h4 className="text-lg font-bold text-white mb-2">During Your Climb</h4>
            <p className="text-slate-400 leading-relaxed">
              Continue the medication throughout the ascent. Take doses with meals to reduce stomach upset. Stay well-hydrated — Diamox is a diuretic, meaning it increases urine output significantly. Aim for 3 to 4 liters of water daily.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
            <h4 className="text-lg font-bold text-white mb-2">After Summiting</h4>
            <p className="text-slate-400 leading-relaxed">
              Continue taking Diamox for 2 days after reaching your highest altitude, or until you descend below 3,000 meters. Stopping too early can cause a rebound effect where symptoms return.
            </p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-16 mb-8 text-white flex items-center gap-3 font-display uppercase tracking-tight">
          <AlertTriangle className="text-amber-500 h-8 w-8" /> Side Effects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-slate-900 p-8 rounded-3xl border border-amber-500/20 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Common (Harmless) Side Effects</h3>
            <ul className="space-y-3 list-none p-0 text-slate-300">
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span><strong>Tingling (paresthesia):</strong> Pins and needles in fingers, toes, and lips. This is the most common side effect and is completely harmless.</span></li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span><strong>Increased urination:</strong> Diamox is a mild diuretic. You will need to drink extra water to compensate.</span></li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span><strong>Altered taste:</strong> Carbonated drinks (beer, soda) taste flat or metallic while on Diamox.</span></li>
              <li className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg"><ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> <span><strong>Mild nausea:</strong> Usually resolves if taken with food.</span></li>
            </ul>
          </div>
          <div className="bg-red-950/30 p-8 rounded-3xl border border-red-500/30 shadow-2xl">
            <h3 className="text-xl font-bold text-red-400 mb-4">Contraindications</h3>
            <ul className="space-y-3 list-none p-0 text-slate-300">
              <li className="flex items-start gap-3 bg-red-900/30 p-3 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span><strong>Sulfa allergy:</strong> Diamox is a sulfonamide derivative. If you are allergic to sulfa drugs, you cannot take it.</span></li>
              <li className="flex items-start gap-3 bg-red-900/30 p-3 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span><strong>Kidney disease:</strong> Not recommended for those with significant renal impairment.</span></li>
              <li className="flex items-start gap-3 bg-red-900/30 p-3 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span><strong>Pregnancy:</strong> Diamox is not recommended during pregnancy.</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-16 mb-8 text-white flex items-center gap-3 font-display uppercase tracking-tight">
          <Activity className="text-amber-500 h-8 w-8" /> Diamox vs. Natural Acclimatization
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Diamox is <strong>not a substitute</strong> for proper acclimatization. The best strategy is to combine Diamox with a longer route (8+ days), a slow pace (pole pole), and aggressive hydration. Choosing a short 5-day itinerary and relying solely on Diamox is a risky gamble.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          We recommend discussing Diamox with your doctor at least 4 to 6 weeks before your trip. Consider doing a test dose at home to check for any adverse reactions before you are on the mountain with limited medical support.
        </p>

      </div>

      <div className="mt-16 p-10 bg-gradient-to-br from-slate-900 to-amber-900/40 rounded-3xl text-center shadow-3xl border border-amber-500/20 relative overflow-hidden group">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter leading-tight flex items-center justify-center gap-3">
            <HeartPulse className="h-10 w-10 text-amber-500" /> Plan Your Altitude Strategy
          </h3>
          <p className="text-amber-100/80 mb-8 italic text-lg font-medium">
            The right combination of route choice, acclimatization days, and medication can push your summit success rate above 95%. Talk to our team to build a plan tailored to your health profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-amber-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
