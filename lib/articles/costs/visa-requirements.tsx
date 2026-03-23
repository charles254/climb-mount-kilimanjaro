import React from 'react';
import { ShieldCheck, Calendar, Info, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export const VisaRequirementsArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "Don't arrive at the Tanzanian border unprepared and without your documents."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <FileText className="text-amber-500" /> Entering Tanzania
      </h2>
      <p>
        Most nationalities require a visa to enter the United Republic of Tanzania. You can get yours on arrival in some cases, but the Tanzanian government now strongly encourages applying for an **E-Visa** online at least 15 days before departure.
      </p>

      <div className="my-12 grid md:grid-cols-2 gap-8 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide">Single Entry Visa</h3>
          <p className="text-sm">
            Cost: $50 USD. Valid for 90 days. Most European, Asian, and non-US Western citizens use this.
          </p>
        </div>
        <div className="bg-amber-900/10 p-8 rounded-2xl border border-amber-500/30">
          <h3 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2 uppercase tracking-wide">US Citizen Visa</h3>
          <p className="text-sm">
            Cost: $100 USD. US citizens are required to get a Multi-Entry Visa regardless of their stay length.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">Yellow Fever Requirements</h2>
      <p>
        Tanzania only requires a Yellow Fever vaccination certificate **if you are traveling from a Yellow Fever endemic country** or if you have a layover in one for more than 12 hours (this includes Kenya and Ethiopia).
      </p>

      <div className="bg-slate-900/50 border border-slate-800 p-8 my-16 rounded-3xl">
        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 italic uppercase">
          <Calendar className="w-5 h-5 text-amber-500" /> Mandatory Checklist
        </h4>
        <ul className="space-y-4 list-none p-0">
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Passport (Valid for at least 6 months after departure).</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> At least TWO blank pages in the passport.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Proof of onward travel (Flight confirmation).</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> Hotel confirmation or Invitation letter.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">The Kenyan Transit Visa</h2>
      <p>
        If you are flying into JRO via Nairobi Jomo Kenyatta (NBO) and NOT leaving the airport, you may not need a Kenyan visa. However, if you're taking the shuttle bus, you **WILL** need a Kenyan Transit Visa.
      </p>

      <div className="bg-amber-600 rounded-3xl p-8 my-16 text-white shadow-xl">
        <h3 className="text-2xl font-black mb-4 uppercase italic leading-none">Pro Tip: Always Carry USD Cash</h3>
        <p className="text-lg font-medium leading-relaxed mb-0">
          While E-Visas are the gold standard, always have $50 (or $100 for US) in **crisp, new $50/100 bills (post-2013 edition)** just in case the system is down at the border.
        </p>
      </div>

      <p className="text-center italic text-slate-500 mb-12">
        Need help with travel? Check our <a href="/costs/how-to-get-there" className="text-amber-500 hover:underline">Travel Guide</a>.
      </p>
    </article>
  );
};
