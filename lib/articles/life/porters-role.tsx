import React from 'react';
import { Users, Heart, ShieldCheck, Info, CheckCircle2, Star, Mountain } from 'lucide-react';

export const PortersRoleArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "The guides lead the way, but it is the porters who build the mountain."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Users className="text-amber-500" /> The Unsung Heroes
      </h2>
      <p>
        Without Kilimanjaro porters, 99.9% of climbers would never reach the summit. For every 1 climber, there are between 3 and 4 support staff. While you carry a 5-8kg daypack, the porters carry up to 20kg of camp gear (tents, kitchen supplies, food, and your duffel bags).
      </p>

      <div className="my-12 space-y-8 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Heart className="text-amber-500" /> Ethical Treatment
          </h3>
          <p className="text-sm">
            Tanzania is a developing country, and porter work is a major source of income for many local families. However, the industry has seen exploitation in the past. We are proud partners of KPAP (Kilimanjaro Porter Assistance Project) to ensure our staff are treated with dignity.
          </p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-amber-500" /> Our Commitment
          </h3>
          <ul className="text-xs space-y-1 list-none p-0 opacity-80">
            <li>• Fair wages paid directly to porters.</li>
            <li>• Proper mountain gear and footwear.</li>
            <li>• Nutritious meals (equal to climbers).</li>
            <li>• Strictly enforced 20kg weight limit.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">Connecting with the Crew</h2>
      <p>
        Porters often come from the villages surrounding the mountain (Moshi, Arusha, Marangu). They are incredibly fit, skilled, and often speak several local languages. Engaging with them not only enriches your experience but shows respect for their vital cultural role.
      </p>

      <div className="bg-amber-600 rounded-3xl p-8 my-16 text-white shadow-xl relative overflow-hidden group">
        <h3 className="text-2xl font-black mb-4 uppercase italic leading-none">The Magic of Song</h3>
        <p className="text-lg font-medium leading-relaxed mb-0">
          On the final morning at the park gates, the porters and guides will often sing "The Kilimanjaro Song" (Jambo Bwana). It is an emotional celebration of the journey you’ve shared. Don't be afraid to join in!
        </p>
        <Mountain className="absolute -bottom-8 -right-8 h-32 w-32 opacity-10 -rotate-12 transition-transform group-hover:scale-110" />
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        See the industry standards for appreciation in our <a href="/costs/tipping-guide" className="text-amber-500 hover:underline">Tipping Guide</a>.
      </p>
    </article>
  );
};
