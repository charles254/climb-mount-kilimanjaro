import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Trophy, Flame, Footprints, Heart, Dumbbell, ShieldCheck, Scale, AlertCircle, Mountain } from 'lucide-react';

export const TrainingPlanArticle = () => (
  <div className="space-y-12">
    <section className="prose prose-invert prose-amber max-w-none">
      <p className="text-xl text-slate-300 leading-relaxed mb-10 italic border-l-4 border-amber-500 pl-6 py-2">
        A successful summit of Uhuru Peak isn't just about physical strength—it's about building the specific endurance and mental resilience required to <Link href="/" className="text-amber-500 hover:underline font-bold">climb Mount Kilimanjaro</Link>. This 12-week training plan is your data-backed roadmap to peak performance at 5,895 meters.
      </p>

      <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">The Science of Altitude Preparation</h2>
      <p className="text-slate-400 leading-relaxed">
        While you cannot fully simulate the 40% reduction in oxygen levels found at the summit of Kilimanjaro without being at altitude, you can train your body to be a more efficient oxygen processor. The "Entry Fee" for a safe climb isn't being an elite athlete; it's being a "durable" hiker. This means building muscular stamina that doesn't quit after 6 hours of uphill grinding.
      </p>

      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 mb-12 shadow-2xl">
        <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
          <Trophy className="text-amber-500 h-7 w-7" /> The 4 Pillars of Kili Fitness
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <Heart className="h-5 w-5 text-red-500 mb-3" />
            <p className="text-white font-bold mb-1 uppercase text-xs">Aerobic Base</p>
            <p className="text-slate-400 text-xs leading-relaxed">Low-intensity, long-duration cardio to train your body to process oxygen efficiently.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <Dumbbell className="h-5 w-5 text-blue-500 mb-3" />
            <p className="text-white font-bold mb-1 uppercase text-xs">Leg Strength</p>
            <p className="text-slate-400 text-xs leading-relaxed">Focus on eccentric loading (downhill training) to protect your knees on the 10,000ft descent.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <Scale className="h-5 w-5 text-amber-500 mb-3" />
            <p className="text-white font-bold mb-1 uppercase text-xs">Weighted Stamina</p>
            <p className="text-slate-400 text-xs leading-relaxed">Gradually increasing your pack weight to simulate your daily 15-20lb daypack.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <ShieldCheck className="h-5 w-5 text-amber-500 mb-3" />
            <p className="text-white font-bold mb-1 uppercase text-xs">Mental Grit</p>
            <p className="text-slate-400 text-xs leading-relaxed">Developing the psychological tools to handle discomfort and cold during the 12-hour summit night.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-white text-3xl font-bold mb-8 flex items-center gap-3">
        Phase 1: Foundation (Weeks 1-4)
      </h2>
      <p className="text-slate-400 mb-6">In this phase, the goal is consistency. You are waking up dormant muscle groups and breaking in your <Link href="/gear/best-boots" className="text-amber-500 font-bold hover:underline italic">hiking boots</Link>. Never underestimate the importance of foot health.</p>
      
      <div className="overflow-x-auto rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
        <table className="w-full text-left bg-slate-900 border-collapse">
          <thead>
            <tr className="bg-slate-800">
              <th className="p-5 text-white font-black uppercase tracking-widest text-xs">Day</th>
              <th className="p-5 text-white font-black uppercase tracking-widest text-xs">Primary Activity</th>
              <th className="p-5 text-white font-black uppercase tracking-widest text-xs">Intensity/Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr>
              <td className="p-5 text-slate-300 font-bold text-sm uppercase">Mon/Wed</td>
              <td className="p-5 text-slate-400 text-sm">Light Cardio (Jogging at conversational pace or Swimming)</td>
              <td className="p-5 text-slate-400 text-sm">30-45 mins (HR Zone 2)</td>
            </tr>
            <tr>
              <td className="p-5 text-slate-300 font-bold text-sm uppercase">Tue/Thu</td>
              <td className="p-5 text-slate-400 text-sm">Strength Training (Squats, Walking Lunges, Plank)</td>
              <td className="p-5 text-slate-400 text-sm">3 sets of 15 / 45 sec planks</td>
            </tr>
            <tr>
              <td className="p-5 text-slate-300 font-bold text-sm uppercase">Saturday</td>
              <td className="p-5 text-slate-400 text-sm">Long Trail Walk (Local park or stairs)</td>
              <td className="p-5 text-slate-400 text-sm">2-3 hours (No pack weight yet)</td>
            </tr>
            <tr className="bg-amber-500/5">
              <td className="p-5 text-amber-500 font-black text-sm uppercase italic underline">Sun/Fri</td>
              <td className="p-5 text-amber-500 font-bold italic text-sm">Active Recovery & Mobility Work</td>
              <td className="p-5 text-slate-400 text-sm">20 mins Yoga / Foam Rolling</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="text-white text-3xl font-bold mb-8">Phase 2: The Incline Factor (Weeks 5-8)</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        This is where we build "Vertical Power." If you live in a flat city, the StairMaster is your best friend. Climbing Kilimanjaro isn't about miles; it's about vertical gain. You should now be training with your <Link href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">actual trekking daypack</Link>.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-amber-500/5 rounded-3xl border border-amber-500/10 hover:border-amber-500/30 transition-all group">
          <Flame className="h-10 w-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-black text-white mb-3 uppercase italic tracking-tighter">The StairMaster Secret</h3>
          <p className="text-slate-400 text-sm italic leading-relaxed">
            "Training on a StairMaster with your actual trekking boots and a 10lb pack is the single most effective way to prepare for the relentless steps of the Barranco Wall. Focus on steady, rhythmic stepping."
          </p>
        </div>
        <div className="p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-amber-500/20 transition-all group">
          <Footprints className="h-10 w-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-black text-white mb-3 uppercase italic tracking-tighter">The Weight Progression</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Increase your pack weight by 2-3 lbs each week during this phase. Aim to hit 15 lbs by week 8. This ensures your shoulders and lower back are conditioned for the summit night.
          </p>
        </div>
      </div>
    </section>

    <section className="prose prose-invert prose-amber max-w-none">
      <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Phase 3: Peak Volume (Weeks 9-11)</h2>
      <p className="text-slate-400 leading-relaxed mb-8">
        Your "Big Training Days" happen now. You should be doing 5-6 hour hikes with a full 20lb pack on back-to-back days. This simulates the exhaustion of the later stages of routes like the <Link href="/routes/northern-circuit" className="text-amber-500 hover:underline">9-Day Northern Circuit</Link>. 
      </p>
      <div className="bg-red-950/20 border-l-4 border-red-500 p-8 rounded-r-3xl my-10">
        <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5" /> Warning: The Taper (Week 12)
        </h4>
        <p className="text-gray-300 italic m-0 text-sm">
          Do not train hard in the final 7 days before you depart. Your goal is to arrive in Tanzania with zero injuries and full glycogen stores. Light walking and stretching only.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display italic uppercase tracking-tighter underline underline-offset-8 decoration-amber-500/30">The "Pole-Pole" Mindset</h2>
      <p className="text-slate-400 leading-relaxed mb-10">
        Remember that on the mountain, your lead guide will keep you at a <strong>Pole-Pole</strong> (Slowly, Slowly) pace. Your training isn't about speed; it's about <strong>heart rate discipline</strong>. If you can maintain a moderate heart rate while climbing a steep incline with weight, you have won 90% of the battle.
      </p>
    </section>

    <section className="text-center bg-slate-900 rounded-[3rem] p-12 border border-white/5 shadow-3xl relative overflow-hidden group">
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">Are You Physically Ready?</h3>
        <p className="text-slate-400 mb-8 italic">Don't guess. Our Success Predictor algorithm analyzes your age, fitness history, and chosen route to give you a realistic probability of reaching Uhuru Peak.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            href="/#predictor" 
            className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Take Success Quiz
          </Link>
          <button 
            className="bg-slate-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-700 transition-all border border-white/10"
          >
            Download PDF Plan
          </button>
        </div>
      </div>
      <Mountain className="absolute -bottom-20 -left-20 h-64 w-64 text-amber-500/5 rotate-12 transition-transform group-hover:scale-110" />
    </section>

    <p className="text-center text-xs text-slate-500 mt-12 mb-20 uppercase tracking-[0.2em]">
      Professional Training Guide Content © 2026 KiliGo Expedition Team
    </p>
  </div>
);
