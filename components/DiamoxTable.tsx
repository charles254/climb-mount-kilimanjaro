export default function DiamoxTable() {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-white mb-4">Diamox (Acetazolamide) Dosage Guide</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900">
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Protocol</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Dosage</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">When to Start</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Standard Prevention</td>
              <td className="p-4 text-slate-300">125mg twice daily</td>
              <td className="p-4 text-slate-300">2 days before ascent</td>
              <td className="p-4 text-slate-300">Until 2 days after highest point</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">High-Risk Prevention</td>
              <td className="p-4 text-slate-300">250mg twice daily</td>
              <td className="p-4 text-slate-300">1-2 days before ascent</td>
              <td className="p-4 text-slate-300">Until descent below 3,000m</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Treatment (active AMS)</td>
              <td className="p-4 text-slate-300">250mg twice daily</td>
              <td className="p-4 text-slate-300">At symptom onset</td>
              <td className="p-4 text-slate-300">Until symptoms resolve + descent</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-500">Common side effects: tingling in fingers/toes, increased urination, altered taste of carbonated drinks. Consult your doctor before use — Diamox is a prescription medication.</p>

      <h3 className="text-xl font-bold text-white mt-10 mb-4">Diamox Cost Breakdown</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900">
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Item</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Estimated Cost</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Doctor consultation</td>
              <td className="p-4 text-slate-300">$50 - $150</td>
              <td className="p-4 text-slate-300">Required for prescription; may be covered by insurance</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Generic Acetazolamide (30 tabs)</td>
              <td className="p-4 text-slate-300">$10 - $25</td>
              <td className="p-4 text-slate-300">Available at most pharmacies with prescription</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Brand-name Diamox (30 tabs)</td>
              <td className="p-4 text-slate-300">$30 - $60</td>
              <td className="p-4 text-slate-300">Same active ingredient as generic</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Purchase in Tanzania</td>
              <td className="p-4 text-slate-300">$5 - $15</td>
              <td className="p-4 text-slate-300">Available OTC in Moshi/Arusha pharmacies; verify authenticity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
