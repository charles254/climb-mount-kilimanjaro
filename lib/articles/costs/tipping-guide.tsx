import React from 'react';
import { Banknote, Users, Heart, Info, CheckCircle2 } from 'lucide-react';

export const TippingGuideArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          Tipping is a standard practice on Kilimanjaro and a vital part of the local economy. Our guide helps you navigate the "Tipping Ceremony" with grace and fairness.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3">
        <Banknote className="text-amber-500" /> Why We Tip
      </h2>
      <p>
        Porters and guides work incredibly hard to ensure your safety and comfort. While reputable companies pay fair wages, tips are a traditional way to show appreciation for their extraordinary effort in a challenging environment.
      </p>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Recommended Tipping Rates (Per Group, Per Day)</h2>
      <div className="overflow-x-auto my-10 border border-white/10 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="p-4 border-b border-white/10 text-amber-500">Staff Role</th>
              <th className="p-4 border-b border-white/10 text-amber-500">Daily Tip Rate (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Main Guide</td>
              <td className="p-4 border-b border-white/10 text-gray-300">$20 - $25</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Assistant Guide</td>
              <td className="p-4 border-b border-white/10 text-gray-300">$15 - $20</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Chef</td>
              <td className="p-4 border-b border-white/10 text-gray-300">$10 - $15</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-white/10 font-bold">Porter</td>
              <td className="p-4 border-b border-white/10 text-gray-300">$8 - $10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Users className="text-amber-500" /> The Tipping Ceremony
      </h2>
      <p>
        On the last morning of your climb, after the final breakfast, the "Tipping Ceremony" takes place. It’s a celebratory event with singing and dancing where the climbers formally thank the crew.
      </p>
      <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 my-10">
        <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Best Practices:</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
            <span><strong>Individual Envelopes:</strong> Prepare separate envelopes for each staff member or at least for each role category.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
            <span><strong>Announce the Amounts:</strong> It is standard for the group leader (among the climbers) to announce the total tip amount given to the crew to ensure transparency.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
            <span><strong>Gear Donations:</strong> If you have high-quality gear you don't want to take home (boots, jackets), these are highly valued and can be added as a bonus.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3">
        <Heart className="text-amber-500" /> Ethical Tipping
      </h2>
      <p>
        Please ensure you are tipping at or above these industry standards. For many porters, these tips help pay for their children's school fees and household essentials. Tipping isn't just a "bonus"—it's a critical part of the livelihood for the local community.
      </p>

      <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl my-12 flex items-start gap-4">
        <Info className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
        <p className="text-blue-300 text-sm m-0">
          <strong>Pro Tip:</strong> Try to bring small, crisp USD bills (post-2013) or local Tanzanian Shillings for easier distribution.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Conclusion</h2>
      <p>
        The Tipping Ceremony is often one of the most emotional and memorable parts of the entire Kilimanjaro experience. By following these guidelines, you ensure that your appreciation is felt and that your climb has a positive impact on the local economy.
      </p>
      
      <p className="mt-8">
        Wondering about other costs? Check out our <a href="/costs/cost-breakdown" className="text-amber-500 hover:underline font-bold">Comprehensive Kilimanjaro Cost Guide</a>.
      </p>
    </article>
  );
};
