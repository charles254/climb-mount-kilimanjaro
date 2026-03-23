export default function CostBreakdownTable() {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-white mb-4">Kilimanjaro Climb Cost Breakdown (2026)</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900">
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Expense Category</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Budget</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Mid-Range</th>
              <th className="p-4 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Park Fees (KINAPA)</td>
              <td className="p-4 text-slate-300">$1,310</td>
              <td className="p-4 text-slate-300">$1,310</td>
              <td className="p-4 text-slate-300">$1,310</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Operator & Guide Fees</td>
              <td className="p-4 text-slate-300">$600</td>
              <td className="p-4 text-slate-300">$1,200</td>
              <td className="p-4 text-slate-300">$2,500</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Crew Tips</td>
              <td className="p-4 text-slate-300">$150</td>
              <td className="p-4 text-slate-300">$250</td>
              <td className="p-4 text-slate-300">$400</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Gear (Rent/Buy)</td>
              <td className="p-4 text-slate-300">$100</td>
              <td className="p-4 text-slate-300">$300</td>
              <td className="p-4 text-slate-300">$800</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Flights (Intl + JRO)</td>
              <td className="p-4 text-slate-300">$500</td>
              <td className="p-4 text-slate-300">$900</td>
              <td className="p-4 text-slate-300">$1,500</td>
            </tr>
            <tr className="hover:bg-white/5">
              <td className="p-4 text-white font-semibold">Travel Insurance</td>
              <td className="p-4 text-slate-300">$80</td>
              <td className="p-4 text-slate-300">$150</td>
              <td className="p-4 text-slate-300">$300</td>
            </tr>
            <tr className="bg-slate-900/50">
              <td className="p-4 text-amber-500 font-bold">Total Estimated Cost</td>
              <td className="p-4 text-amber-500 font-bold">$2,740</td>
              <td className="p-4 text-amber-500 font-bold">$4,110</td>
              <td className="p-4 text-amber-500 font-bold">$6,810</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-500">Prices are estimates for 2026 based on a 7-day Lemosho route trek. Park fees are fixed by KINAPA and the same for all operators.</p>
    </div>
  );
}
