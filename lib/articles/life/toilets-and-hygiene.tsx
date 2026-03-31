import React from 'react';
import { Shovel, ShieldCheck, Home, Info, CheckCircle2, CloudRain } from 'lucide-react';

export const ToiletsAndHygieneArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "The number one question every climber asks... but is too afraid to ask."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Home className="text-amber-500" /> Public Park Toilets vs. Private Loos
      </h2>
      <p>
        Kilimanjaro National Park (KINAPA) provides public long-drop toilets at every campsite. While they have improved, they are still "mountain toilets" and can be shared by hundreds of climbers.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="text-amber-500" /> Private Toilet Tents
          </h3>
          <p className="text-sm">
            At KiliGo, we include private portable toilet tents on almost all our treks. These are exclusively for your group, cleaned twice daily, and provide a much more sanitary (and dignified) experience.
          </p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CloudRain className="text-amber-500" /> Personal Hygiene
          </h3>
          <p className="text-sm">
            Washing water is provided twice a day. We highly recommend bringing "body wipes" (biodegradable) for a full-body wipe-down in your tent after a long hike.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">Leave No Trace</h2>
      <p>
        Everything must be carried out. Your porters are responsible for the heavy lifting, but on the trails between camps, it's vital to pack out your used toilet paper or tissues. 
      </p>

      <div className="bg-amber-100/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4 uppercase italic leading-none">The PEE-BOTTLE strategy</h3>
        <p className="text-slate-300 m-0 font-medium">
          Getting out of your sleeping bag and into the freezing cold night for a 3 AM bathroom break is brutal. Many experienced climbers use a "pee bottle" (clearly marked!) to stay inside their warm tent.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic font-black">Managing Period Health</h2>
      <p>
        For women, the combination of altitude and physical exhaustion can affect cycles. Bring extra supplies, biodegradable disposal bags, and talk to your guide if you're experiencing unusually bad cramps.
      </p>

      <p className="text-center italic text-slate-500 mb-12">
        See the full gear suggestions in our <a href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">Ultimate Packing List</a>.
      </p>
    </article>
  );
};
