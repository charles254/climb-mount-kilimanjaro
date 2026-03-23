import React from 'react';
import { Wind, Thermometer, ShieldCheck, Info, CheckCircle2, Moon, Zap } from 'lucide-react';

export const SummitNightGearArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "Summit night is the most extreme cold you will likely ever experience."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight font-black">
        <Moon className="text-amber-500" /> The Cold Truth
      </h2>
      <p>
        Starting at midnight from Kibo or Barafu Camp, temperatures drop to **-15°C to -25°C (5°F to -13°F)**. Add in the high wind chill at Stella Point, and it's dangerous. Proper layering is not just for comfort; it's for safety.
      </p>

      <div className="my-12 grid md:grid-cols-2 gap-8 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Wind className="text-amber-500" /> Layering for Success</h3>
          <p className="text-sm">
            4-5 layers on the upper body (Base, Fleece, Down jacket, Hard shell). 3 layers on the legs (Thermal base, Hiking pants, Gore-Tex shell).
          </p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Zap className="text-amber-500" /> Extremity Care</h3>
          <p className="text-sm">
            Double glove system (liner + heavy mitts). Two pairs of wool socks. A thermal balaclava and a warm beanie. Hand and toe warmers are highly recommended.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">The "Frozen Water" Problem</h2>
      <p>
        At -20°C, your hydration bladder tube will freeze solid in minutes. To prevent this, blow air back into the tube after every sip, or use insulated bottles like Nalgene with a thermal cover, stored upside down in your pack.
      </p>

      <div className="bg-amber-100/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4 uppercase italic leading-none">Headlamp: The Most Critical Piece</h3>
        <p className="text-slate-300 m-0 font-medium">
          You will hike for 6-8 hours in total darkness. Batteries drain 5x faster in the cold. Keep your spare batteries inside your jacket (close to your body) until you need them.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white uppercase italic font-black">Summit Night Checklist</h2>
      <ul className="space-y-4 list-none p-0">
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> High-power Headlamp (with fresh batteries).</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Thermal balaclava or neck gaiter.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Heavy down "Summit" jacket (Rated for -20°C).</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Heavyweight mittens over liner gloves.</li>
      </ul>

      <p className="text-center italic text-slate-500 mb-12">
        See the full gear suggestions in our <a href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">Ultimate Packing List</a>.
      </p>
    </article>
  );
};
