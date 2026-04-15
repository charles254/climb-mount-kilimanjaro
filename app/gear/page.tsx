import Link from "next/link";
import { Mountain, ShieldCheck, Thermometer, ShoppingBag, ArrowRight } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kilimanjaro Packing List 2026 — Essential Gear",
  description: "The complete Kilimanjaro packing list for 2026. Layering for summit night, waterproof boots, sleeping bags, and rent-vs-buy cost advice.",
  keywords: "kilimanjaro packing list, what to wear climbing kilimanjaro, best boots for kilimanjaro, kilimanjaro gear, kilimanjaro sleeping bag, summit night gear kilimanjaro, trekking poles, headlamp, gaiters",
  alternates: { canonical: "/gear" },
  openGraph: {
    title: "Kilimanjaro Packing List 2026 — Essential Gear",
    description: "The complete Kilimanjaro packing list. Layering, boots, sleeping bags, and rent-vs-buy advice.",
    url: "/gear",
    type: "website",
  },
  twitter: {
    title: "Kilimanjaro Packing List 2026 — Essential Gear",
    description: "The complete Kilimanjaro packing list. Layering, boots, sleeping bags, and rent-vs-buy advice.",
  },
};

export default function GearGuideIndex() {
  const gearCluster = topicalClusters.find(c => c.slug === "gear");
  
  return (
    <div className="bg-slate-950 min-h-screen pt-4 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Gear Guide & Packing List",
            "description": "Essential equipment and clothing for climbing Mount Kilimanjaro.",
            "url": `${SITE_URL}/gear`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": gearCluster?.articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/gear/${article.slug}`,
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
            Kilimanjaro <span className="text-amber-500">Packing List</span>
            <span className="block text-2xl md:text-4xl text-slate-400 mt-2 not-italic tracking-tight">Essential Gear & Equipment Guide</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Surviving the <span className="text-white font-bold">arctic conditions</span> of Uhuru Peak starts with the right kit. Don't compromise on your safety—expert-curated <span className="text-white">summit gear</span>.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Thermometer className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight">Layering System</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              The secret to warmth at 5,000m+ is moisture management and air trapping. Base, mid, and outer shells are non-negotiable.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <Mountain className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight">Footwear</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              From tropical rainforest mud to loose volcanic scree, your boots must provide support, waterproofing, and warmth.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <ShoppingBag className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight">Rental vs. Buy</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Expensive equipment like -20°C sleeping bags can be rented locally in Moshi to save on luggage weight and costs.
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Practical Strategies</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gearCluster?.articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/gear/${article.slug}`}
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

        {/* Rental CTA */}
        <div className="mt-24 bg-amber-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display">Need Gear?</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto font-medium">
            We provide specialized rental kits for our climbers, including high-altitude sleeping bags, thermal mats, and trekking poles.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Request Rental List <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
