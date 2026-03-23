import React from 'react';
import { Brain, Mountain, Info, Compass, Shield, Users } from 'lucide-react';

export const MentalPreparationArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl text-center">
        <p className="text-xl text-gray-300 m-0 italic">
          "The first few days are for the legs. The summit night is for the mind."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Brain className="text-amber-500" /> The Secret to Success
      </h2>
      <p>
        Physical fitness gets you to the high camps, but mental toughness gets you to the summit. Many physically elite climbers turn back on summit night because they are mentally unprepared for the discomfort, cold, and slow progress.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4">The Summit Night 'Wall'</h3>
          <p className="text-sm text-slate-400">Around 2:00 AM, at 5,000m altitude, your brain will tell you to stop. Understanding that this 'mental block' is coming is half the battle won.</p>
        </div>
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4">Visualizing the Peak</h3>
          <p className="text-sm text-slate-400">Mental rehearsal of the final switchbacks and the sunrise over the glaciers can help maintain motivation when exhaustion sets in.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Three Mental Strategies</h2>
      
      <div className="space-y-8">
        <div className="flex gap-6 items-start">
          <div className="bg-amber-500/10 p-4 rounded-xl shrink-0 font-black text-2xl text-amber-500">01</div>
          <div>
            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Break it Down</h4>
            <p className="text-slate-400">Don't think about the 7 hours of climbing ahead. Think only about the next 15 minutes. Focus on the feet of the person in front of you. Win the next hundred meters, and then the next.</p>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="bg-amber-500/10 p-4 rounded-xl shrink-0 font-black text-2xl text-amber-500">02</div>
          <div>
            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Control Your Breath</h4>
            <p className="text-slate-400">Panic is your worst enemy at altitude. If you feel overwhelmed, stop, take three deep 'pressure breaths', and remind yourself that the air is thin but sufficient for survival.</p>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="bg-amber-500/10 p-4 rounded-xl shrink-0 font-black text-2xl text-amber-500">03</div>
          <div>
            <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Trust Your Guides</h4>
            <p className="text-slate-400">Our senior lead guides are trained to monitor your mental state. If they tell you that you are doing fine, believe them. Relinquishing the stress of 'judging your own progress' can be a huge mental relief.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4 uppercase italic">Dealing with Discomfort</h3>
        <p className="text-gray-300 m-0">
          You will be cold. You will have a headache. You will be tired of eating porridge. Accept these factors as part of the <strong>expedition experience</strong>. Once you stop fighting the discomfort and start accepting it, you save enormous amounts of mental energy.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Users className="text-amber-500" /> The Power of the Team
      </h2>
      <p>
        Climbing Kilimanjaro is a communal effort. Encourage your fellow climbers. When you help someone else stay positive, it inadvertently boosts your own mood and resilience.
      </p>

      <div className="mt-12 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-center">
        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Final Thought</h4>
        <p className="text-slate-400 leading-relaxed mb-0">
          The summit is only halfway. You need the mental discipline to make the descent safely. Stay focused until you reach the gate and sign the book.
        </p>
      </div>
    </article>
  );
};
