import React from 'react';
import { AlertTriangle, ShieldAlert, HeartPulse, UserX, Info } from 'lucide-react';

export const CheapToursDangerArticle = () => {
  return (
    <article className="prose prose-invert prose-red max-w-none">
      <div className="bg-red-950/20 border-l-4 border-red-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          If a Kilimanjaro tour price seems too good to be true, it probably is. Choosing a "cheap" operator can jeopardize your safety and ethically compromise your climb.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3">
        <ShieldAlert className="text-red-500" /> The Hidden Cost of Low Prices
      </h2>
      <p>
        Kilimanjaro park fees, rescue fees, and taxes are fixed for everyone (roughly $800-$1,100 per person). If an operator is charging you less than $1,800, they have very little left to cover food, equipment, and staff wages.
      </p>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">4 Dangers of Budget Operators</h2>
      
      <div className="space-y-8 my-10">
        <div className="flex gap-6 items-start">
          <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
            <HeartPulse className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1 uppercase tracking-tight text-lg">Inadequate Safety Gear</h4>
            <p className="text-gray-400">Cheap tours often skip expensive safety equipment like supplemental oxygen, pulse oximeters, and comprehensive medical kits. In an emergency, these can be the difference between life and death.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
            <UserX className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1 uppercase tracking-tight text-lg">Unethical Staff Treatment</h4>
            <p className="text-gray-400">Budget companies often underpay their porters or expect them to survive solely on tips. They may also provide inadequate food and sleeping conditions for the staff carrying your gear.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1 uppercase tracking-tight text-lg">Substandard Equipment</h4>
            <p className="text-gray-400">Leaking tents, worn-out sleeping mats, and broken stoves are common issues with low-budget operators. Staying dry and warm is essential for reaching the summit.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start">
          <div className="bg-red-500/10 p-3 rounded-lg shrink-0">
            <Info className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1 uppercase tracking-tight text-lg">Low Quality Food</h4>
            <p className="text-gray-400">Proper nutrition is fuel for your climb. Cheap operators often provide low-calorie, repetitive meals that don't give you the energy needed for a 12-hour summit push.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-white/5 p-8 rounded-2xl my-12">
        <h3 className="text-2xl font-bold text-white mb-4">How to Spot a Quality Operator</h3>
        <ul className="list-none p-0 space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Membership in the <strong>Kilimanjaro Porters Assistance Project (KPAP)</strong>.</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Providing a minimum of 1 guide for every 2-3 climbers.</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Explicitly listing safety equipment like emergency oxygen and oximeters.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Closing Thoughts</h2>
      <p>
        Saving $500 on a trek might seem appealing, but the risks to your health and the ethical impact on local workers far outweigh the savings. Choose an operator that values its staff and your safety above all else.
      </p>
      
      <p className="mt-8">
        Want to know where your money goes? Read our <a href="/costs/cost-breakdown" className="text-red-400 hover:underline font-bold">Full Kilimanjaro Cost Breakdown</a>.
      </p>
    </article>
  );
};
