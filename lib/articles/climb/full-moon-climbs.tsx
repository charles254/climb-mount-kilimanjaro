import React from 'react';
import { Moon, Star, Camera, Info, CheckCircle2, Calendar } from 'lucide-react';

export const FullMoonClimbsArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-blue-950/20 border-l-4 border-blue-400 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Imagine standing at 19,341 feet, surrounded by glaciers that glow bright silver under the light of a massive African full moon.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Moon className="text-amber-500" /> Why Climb During a Full Moon?
      </h2>
      <p>
        Full moon climbs are legendary on Kilimanjaro. Most summit pushes start at midnight in pitch-black darkness. During a full moon, the lunar light reflects off the glaciers, illuminating the path and providing a surreal, magical atmosphere that reduces the need for headlamps.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Camera className="text-amber-500" /> Photographers Dream
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            The contrast between the dark volcanic rock and the silver-lit glaciers provides once-in-a-lifetime photography opportunities. You'll see the crater floor in perfect detail long before sunrise.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-amber-500" /> Better Visibility
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            The psychological boost of being able to see the peak above you (instead of just a small pool of light from a headlamp) can be a massive motivator during the grueling 7-hour ascent.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic">Planning Your Dates</h2>
      <p>
        To summit exactly on the full moon, you need to count backward from the lunar date based on your route length. For example, on an 8-day Lemosho route, you should start 7 days before the full moon date.
      </p>

      <div className="bg-amber-900/10 border-l-4 border-amber-500 p-6 my-12 rounded-r-xl">
        <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Calendar className="w-5 h-5 text-amber-500" /> 2026 Full Moon Dates</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none p-0 text-sm text-slate-300">
          <li>Jan 3, 2026</li>
          <li>Feb 1, 2026</li>
          <li>Mar 3, 2026</li>
          <li>Apr 1, 2026</li>
          <li>Oct 24, 2026</li>
          <li>Nov 22, 2026</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">The Crowds Consideration</h2>
      <p>
        Because of their popularity, full moon dates are the busiest times on the mountain. If you prefer solitude, we recommend summiting 2-3 days *after* the full moon. You will still have nearly 90% illumination but significantly fewer people on the trails.
      </p>

      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 my-16">
        <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Pro Tip: The Full Moon Shadow</h3>
        <p className="text-lg text-slate-300 leading-relaxed mb-0">
          Be aware that even during a full moon, the mountain itself can cast a shadow. If you are climbing from the south (Machame/Lemosho), the moon may be hidden behind the peak for part of your ascent until you reach the crater rim.
        </p>
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        See the best routes for these dates in our <a href="/routes" className="text-amber-500 hover:underline">Route Comparison Guide</a>.
      </p>
    </article>
  );
};
