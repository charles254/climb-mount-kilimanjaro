import React from 'react';
import { Clock, Sun, Moon, Coffee, Tent, Info, CheckCircle2 } from 'lucide-react';

export const DayInLifeArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "The rhythm of the mountain is slow, steady, and early."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Sun className="text-amber-500" /> 06:30 AM: Wake-up Call
      </h2>
      <p>
        Your day begins with a gentle "Jambo!" outside your tent. A porter will offer you warm "washing water" in a small basin to freshen up, followed by a hot cup of tea or coffee served in your sleeping quarters or the mess tent.
      </p>

      <div className="my-12 space-y-8">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Coffee className="text-amber-500" /> 07:30 AM: Breakfast
          </h3>
          <p className="text-slate-400">
            Fueling up is essential. Expect porridge, eggs, sausage, toast, and fruit. After breakfast, you'll pack your daypack and the porters will dismantle the camp.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="text-amber-500" /> 08:30 AM: The Trek Begins
          </h3>
          <p className="text-slate-400">
            Most hiking happens in the morning when the sky is clearest. We walk *pole-pole* (slowly) to allow our bodies to adjust. Every hour, we take a short break to hydrate and snack.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Tent className="text-amber-500" /> 04:00 PM: Reaching Camp
          </h3>
          <p className="text-slate-400">
            By the time you reach the next camp, your tents are already set up. You'll have "Afternoon Tea" (snacks and hot drinks) before resting and preparing for dinner.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Moon className="text-blue-400" /> 07:00 PM: The Briefing & Dinner
      </h2>
      <p>
        Dinner is the social highlight of the day. Afterward, your lead guide will provide a briefing for the next day's terrain and check your oxygen levels (SpO2) and pulse.
      </p>

      <div className="bg-amber-600 rounded-3xl p-8 my-16 text-white shadow-xl">
        <h3 className="text-2xl font-black mb-4 uppercase italic leading-none">The Sleep Factor</h3>
        <p className="text-lg font-medium leading-relaxed mb-0">
          At high altitude, sleep can be light and vivid. Don't be discouraged if you don't sleep 8 hours straight; the rest of your body is still recovering in the horizontal position.
        </p>
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        Curious about the menu? See our <a href="/life/food-and-nutrition" className="text-amber-500 hover:underline">Food & Nutrition Guide</a>.
      </p>
    </article>
  );
};
