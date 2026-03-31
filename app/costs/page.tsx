import Link from "next/link";
import { CheckCircle2, DollarSign, Receipt, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "How Much Does Kilimanjaro Cost? 2026 Prices",
  description: "Kilimanjaro cost breakdown: park fees ($1,310+), guide salaries, gear, tipping, and why cheap tours are dangerous. Budget $2,200-$7,000.",
  keywords: "kilimanjaro cost, how much does it cost to climb kilimanjaro, kilimanjaro climb cost, kilimanjaro park fees, kilimanjaro tipping guide, cheap kilimanjaro tour",
  alternates: { canonical: "/costs" },
};

export default function CostsIndex() {
  const costCluster = topicalClusters.find(c => c.slug === "costs");
  
  return (
    <div className="bg-slate-950 min-h-screen pt-4 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Climbing Costs & Budget Breakdown",
            "description": "Transparent pricing guide for climbing Mount Kilimanjaro.",
            "url": `${SITE_URL}/costs`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": costCluster?.articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/costs/${article.slug}`,
                "name": article.title
              }))
            }
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter font-display">
            Kilimanjaro Costs <span className="text-amber-500">& Budget</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Climbing Kilimanjaro is a major investment. We provide full <span className="text-white font-bold tracking-tight">financial transparency</span> into where your <span className="text-white font-bold italic">money goes</span>.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <DollarSign className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Park Fees (50%)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Over half of your trek cost goes directly to KINAPA for permits, rescue services, and mountain conservation.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <TrendingUp className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Guide & Porter Wages</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              Ethical climbing means paying fair, standardized wages to the crew that carries your success to the top.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Receipt className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Logistics Hub</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Flights to JRO, shuttles from Nairobi, and visa processing are vital budget considerations for expats and international trekkers.
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Financial Planning</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costCluster?.articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/costs/${article.slug}`}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <ShieldCheck className="h-5 w-5 text-amber-500" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-amber-500 transition-all transform group-hover:translate-x-1" />
                </div>
                <h4 className="text-white font-bold group-hover:text-amber-500 transition-colors mb-2 uppercase tracking-tight">
                  {article.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase font-bold tracking-widest">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-amber-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display">Request Custom Itinerary Pricing</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto font-medium italic">
            Looking for group rates or specialized regional pricing for residents in Kenya and Tanzania? We offer tailored quotes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Get Custom Price Quote <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
