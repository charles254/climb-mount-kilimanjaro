import React from 'react';
import Link from 'next/link';
import { DollarSign, Wallet, CreditCard, PieChart, Info, AlertTriangle, Scale, Mountain, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CostBreakdownArticle = () => {
  return (
    <article className="space-y-12">
      <div className="prose prose-invert prose-amber max-w-none">
        <div className="bg-amber-950/20 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl shadow-xl">
          <p className="text-xl text-gray-300 m-0 italic leading-relaxed">
            "How much does it really cost to climb Kilimanjaro?" It is the most common question we receive. The short answer is: between <strong className="text-amber-500">$2,500 and $6,000 USD</strong>. But understanding <em>exactly</em> where that money goes is the key to ensuring you book a safe, ethical, and successful expedition. 
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-12 mb-8 text-white flex items-center gap-3 font-display uppercase tracking-tight">
          <PieChart className="text-amber-500 h-8 w-8" /> The True Cost Breakdown
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Climbing Mount Kilimanjaro is not a cheap endeavor. Unlike hiking in the Alps or the Rockies, the Tanzanian government heavily regulates entry to the mountain to preserve its fragile ecosystem and generate national revenue. Every climber must be accompanied by a licensed guide, and a full support crew of cooks and porters is mandatory.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          When you pay an outfitter, your money is distributed across several non-negotiable fixed costs, variable logistics costs, and finally, the company's profit margin. Here is the mathematical reality of a standard 7-day climb.
        </p>

        <div className="bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-2xl mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Estimated 7-Day Climb Expenses (Per Person)</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-4 hover:bg-white/5 rounded-2xl transition-colors">
              <div className="bg-amber-500/10 p-4 rounded-xl shrink-0">
                <DollarSign className="w-8 h-8 text-amber-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight flex justify-between">
                  <span>Park Fees & Taxes</span>
                  <span className="text-amber-500">$800 - $1,100</span>
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Tanzania National Parks (TANAPA) charges daily conservation fees, camping/hut fees, rescue fees, and an 18% VAT on all of the above. This money goes directly to the government and is 100% fixed. Longer routes like the 9-Day <Link href="/routes/northern-circuit-guide" className="text-amber-500 hover:underline">Northern Circuit</Link> cost significantly more in park fees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-4 hover:bg-white/5 rounded-2xl transition-colors">
              <div className="bg-amber-500/10 p-4 rounded-xl shrink-0">
                <Wallet className="w-8 h-8 text-amber-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight flex justify-between">
                  <span>Staff Wages</span>
                  <span className="text-amber-400">$600 - $900</span>
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A typical climber requires 1 lead guide, 1 assistant guide, 1 cook, and 3-4 porters. Paying fair, living wages to this crew of 6+ people for a week of grueling labor is the largest variable cost. Ethical operators never compromise here.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-4 hover:bg-white/5 rounded-2xl transition-colors">
              <div className="bg-blue-500/10 p-4 rounded-xl shrink-0">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight flex justify-between">
                  <span>Logistics & Equipment</span>
                  <span className="text-blue-400">$400 - $700</span>
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  This covers transportation to and from the gate, high-altitude 4-season tents, portable private toilets, thick sleeping mats, pulse oximeters, emergency oxygen tanks, and three hot, highly nutritious meals per day on the mountain.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-16 mb-8 text-white uppercase tracking-tight">
          The Danger of "Cheap" Tours (<AlertTriangle className="inline h-8 w-8 text-red-500 -mt-2" />)
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          If park fees alone cost almost $1,000 for a 7-day climb, how is it possible that some companies advertise entire expeditions for $1,400 or $1,500? The math simply does not work unless the operator is severely cutting corners.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          Budget operators survive by doing three things:
        </p>
        <ul className="list-none space-y-4 pl-0 mb-12">
          <li className="flex items-start gap-3 bg-red-950/20 p-4 rounded-xl border border-red-500/10">
            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <span className="text-slate-300"><strong>Exploiting Porters:</strong> They pay their porters below the minimum wage, or sometimes <em>nothing at all</em>, forcing them to rely entirely on your tips to feed their families. They also give them only one meal a day and lack proper sleeping tents.</span>
          </li>
          <li className="flex items-start gap-3 bg-red-950/20 p-4 rounded-xl border border-red-500/10">
            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <span className="text-slate-300"><strong>Compromising Safety:</strong> Budget guides often lack Wilderness First Responder (WFR) training. They do not carry emergency oxygen cylinders, hyperbaric bags, or proper medical radios. If <Link href="/health/ams-guide" className="text-red-400 hover:underline">altitude sickness</Link> strikes, you are essentially on your own.</span>
          </li>
          <li className="flex items-start gap-3 bg-red-950/20 p-4 rounded-xl border border-red-500/10">
            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <span className="text-slate-300"><strong>Substandard Gear & Food:</strong> Leaky tents in sub-zero freezing rain, thin sleeping mats, and carb-depleted meals that will crush your energy levels on summit night.</span>
          </li>
        </ul>

      </div>

      <div className="bg-amber-900/10 border-l-4 border-amber-500 p-8 rounded-2xl flex items-start flex-col gap-4">
        <h4 className="text-amber-600 text-xl font-bold flex items-center gap-2 m-0 uppercase tracking-widest">
          <CheckCircle2 className="h-6 w-6" /> The KPAP Standard
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed m-0">
          Always look for companies that are certified members of the <strong>Kilimanjaro Porters Assistance Project (KPAP)</strong>. KPAP is an independent watchdog that audits climbs to ensure porters receive fair wages, three meals a day, proper carrying weight limits (strictly 15kg/33lbs), and adequate sleeping conditions. KiliGo strictly adheres to all KPAP ethical guidelines.
        </p>
      </div>

      <div className="prose prose-invert prose-amber max-w-none mt-16">
        <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tight">Hidden Costs to Budget For</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          The price you pay your outfitter is not your final bill. When calculating your total expenditure, you must factor in the following "hidden" costs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-2">1. The Mandatory Crew Tip</h4>
            <p className="text-slate-400 text-sm">Tipping is deeply ingrained in Kilimanjaro climbing culture and makes up a significant portion of the crew's living. Expect to budget <strong>$250 to $400 USD per climber</strong> for the tip pool at the end of the trek. Read our <Link href="/costs/tipping-guide" className="text-amber-500 hover:underline">Ultimate Tipping Guide</Link> for exact daily rate breakdowns.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-2">2. Specialty Gear Rental & Purchase</h4>
            <p className="text-slate-400 text-sm">A -15°C four-season sleeping bag and an expedition down jacket are expensive to buy. Renting them in Moshi costs about $40-$60 each. See our <Link href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">Ultimate Packing List</Link> to audit your closet.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-2">3. Flights and Visas</h4>
            <p className="text-slate-400 text-sm">Flights to Kilimanjaro International Airport (JRO) range from $800 to $2,000 depending on origin. A Tanzanian tourist eVisa costs $50 ($100 for US Citizens) and must be paid online prior to arrival.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold mb-2">4. High-Altitude Insurance</h4>
            <p className="text-slate-400 text-sm">Standard travel insurance is not enough. You must buy a specialized policy that explicitly covers "High Altitude Trekking up to 6,000 meters" along with helicopter emergency medical evacuation. (Approx. $100-$200).</p>
          </div>
        </div>
      </div>

      <div className="mt-16 p-10 bg-gradient-to-br from-amber-600 to-amber-900 rounded-3xl text-center shadow-3xl relative overflow-hidden group">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter leading-tight">Does Your Budget Match Your Route?</h3>
          <p className="text-amber-100 mb-8 italic text-lg font-medium">Longer routes cost more, but they offer dramatically higher success rates. Take our 2-minute Success Predictor Quiz to see which route aligns with your budget and fitness level.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/#predictor" 
              className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              Take the Predictor Quiz
            </Link>
            <Link 
              href="/contact" 
              className="bg-amber-500/20 text-white border border-amber-400/50 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-500/30 transition-all"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
        <Scale className="absolute -bottom-16 -right-16 h-64 w-64 text-amber-900/40 rotate-12 transition-transform group-hover:scale-110" />
      </div>

    </article>
  );
};

// Fix the missing XCircle import at the top
export const XCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);
