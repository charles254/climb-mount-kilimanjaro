import React from 'react';
import { Dumbbell, Heart, Mountain, Info, Compass, CheckCircle2 } from 'lucide-react';

export const AthleteRequirementArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "Do I need to be a marathon runner to reach Uhuru Peak?" This is the most common question we hear from prospective climbers.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Dumbbell className="text-amber-500" /> The Physical Reality
      </h2>
      <p>
        The answer is: <strong>No, you don't need to be an elite athlete.</strong> Kilimanjaro is a trekking peak, not a technical mountaineering expedition. There are no ropes, ice axes, or vertical climbs. However, you do need a solid level of cardiovascular fitness and, more importantly, leg endurance.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-12">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
          <Heart className="h-8 w-8 text-amber-500 mx-auto mb-4" />
          <h4 className="text-white font-bold mb-2">Cardio</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Lung capacity is vital. You need to be comfortable walking for 6-8 hours uphill.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
          <Mountain className="h-8 w-8 text-amber-500 mx-auto mb-4" />
          <h4 className="text-white font-bold mb-2">Legs</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Strength in your quads and calves will save you during the 1,200m descent.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
          <Compass className="h-8 w-8 text-amber-500 mx-auto mb-4" />
          <h4 className="text-white font-bold mb-2">Stamina</h4>
          <p className="text-xs text-slate-400 leading-relaxed">It's about consistency. Can you wake up and do it again 6 days in a row?</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Who Climbs Kilimanjaro?</h2>
      <p>
        We have successfully guided people aged 12 to 78 to the summit. The key is not your 10k run time, but your <strong>altitude tolerance</strong> and your willingness to go <em>pole-pole</em> (slowly).
      </p>

      <div className="space-y-6">
        <div className="bg-amber-900/10 p-6 rounded-2xl border border-amber-500/20">
          <h4 className="text-white font-bold mb-2 uppercase tracking-tight italic">The 1k Rule</h4>
          <p className="text-slate-300 m-0">If you can comfortably walk 10km on flat ground and 5km on a steady incline without feeling exhausted, you have the base fitness required to begin your 12-week training plan.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h4 className="text-white font-bold mb-2 uppercase tracking-tight italic">Why 'Athletes' Sometimes Fail</h4>
          <p className="text-slate-400 m-0">Interestingly, very fit individuals often try to push too hard, too fast. This 'powering through' mentality is dangerous at altitude and leads to AMS much faster than a slow, steady pace.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Medical Considerations</h2>
      <p>
        Before booking, you should consult with a doctor if you have a history of respiratory issues, heart conditions, or joint problems (especially knees). High altitude puts significant strain on the cardiovascular system.
      </p>

      <div className="my-16 flex justify-center">
        <div className="w-full max-w-2xl bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
          <CheckCircle2 className="absolute top-4 right-4 h-24 w-24 text-amber-500/10" />
          <h3 className="text-2xl font-black text-white mb-6 uppercase italic">Bottom Line</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-0">
            You don't need to be an athlete, but you do need to respect the mountain. A proper <strong>12-week training program</strong> focusing on hiking with a weighted pack will dramatically increase your enjoyment and chances of success.
          </p>
        </div>
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        Ready to start your prep? See our <a href="/preparation/training-plan" className="text-amber-500 hover:underline">12-Week Workout Plan</a>.
      </p>
    </article>
  );
};
