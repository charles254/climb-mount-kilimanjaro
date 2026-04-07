import Link from "next/link";
import { CheckCircle2, Home, Utensils, Coffee, ArrowRight, HeartPulse } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Life on Kilimanjaro — Daily Camp Life & Food Guide",
  description: "What to expect on Kilimanjaro day by day: camp setup, mountain meals, toilet facilities, porter roles, and summit night schedule to Uhuru Peak.",
  keywords: "what is it like to climb kilimanjaro, kilimanjaro food, kilimanjaro toilets, kilimanjaro porters, day by day kilimanjaro, life on kilimanjaro, kilimanjaro camp, summit night schedule",
  alternates: { canonical: "/life" },
};

export default function LifeOnMountainIndex() {
  const lifeCluster = topicalClusters.find(c => c.slug === "life");
  
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Life on Kilimanjaro Hub",
            "description": "Insights into the daily life, food, and hygiene while climbing Mount Kilimanjaro.",
            "url": `${SITE_URL}/life`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": lifeCluster?.articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/life/${article.slug}`,
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
            Life on <span className="text-amber-500">Kilimanjaro</span>
            <span className="block text-2xl md:text-4xl text-slate-400 mt-2 not-italic tracking-tight">What to Expect Each Day</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Behind the spectacular views lies the <span className="text-white font-bold tracking-widest italic">rough reality</span>. Master the daily routine and learn how <span className="text-white font-bold italic text-amber-500 uppercase">luxury</span> is defined at 4,000m.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Utensils className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">High-Altitude Dining</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Fueling your 10,000 calorie burn with fresh, locally-sourced meals prepared by our gourmet mountain chefs.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <Home className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">The Base Camp</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              From walk-in tents to private chemical toilets. We prioritize hygiene to ensure your summit success.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Coffee className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Porter Spirit</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              The heart of the mountain. Learn why the KPAP-affiliated porter crew is essential to the Kilimanjaro experience.
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Living on the Edge</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lifeCluster?.articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/life/${article.slug}`}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <HeartPulse className="h-5 w-5 text-amber-500" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-amber-500 transition-all transform group-hover:translate-x-1" />
                </div>
                <h4 className="text-white font-bold group-hover:text-amber-500 transition-colors mb-2 uppercase tracking-tight">
                  {article.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase font-bold tracking-widest tracking-tighter">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-slate-800 rounded-3xl p-10 text-center text-white border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display">Experience the Expedition Life</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto font-medium italic">
            Join a small group of like-minded climbers and experience the camaraderie that makes Kilimanjaro unique.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Start Your Life Adventure <ArrowRight className="ml-2 h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
