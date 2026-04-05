import Link from "next/link";
import { CheckCircle2, Dumbbell, Calendar, Brain, ArrowRight, Activity } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "How to Train for Kilimanjaro — 12-Week Fitness Plan & Difficulty Guide",
  description: "Is Kilimanjaro hard? Get a 12-week training plan with stair workouts, pack-loaded hikes, and mental resilience drills. Covers fitness requirements for all 6 routes and summit night preparation.",
  keywords: "how to train for kilimanjaro, how hard is it to climb kilimanjaro, kilimanjaro training plan, kilimanjaro fitness requirements, kilimanjaro preparation, kilimanjaro difficulty, VO2 max, weighted pack training",
  alternates: { canonical: "/preparation" },
};

export default function PreparationIndex() {
  const prepCluster = topicalClusters.find(c => c.slug === "preparation");
  
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Preparation & Training Guide",
            "description": "How to prepare physically and mentally for your Kilimanjaro journey.",
            "url": `${SITE_URL}/preparation`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": prepCluster?.articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/preparation/${article.slug}`,
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
            How to Train for <span className="text-amber-500">Kilimanjaro</span>
            <span className="block text-2xl md:text-4xl text-slate-400 mt-2 not-italic tracking-tight">Preparation & Fitness Guide</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Success at <span className="text-white font-bold italic tracking-tighter">5,895m</span> isn't luck—it's earned in the weeks leading up to your <span className="text-white font-bold uppercase italic shadow-sm tracking-tight text-xl">summit journey</span>.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Dumbbell className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Functional Training</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Stair climbing, heavy pack simulation, and endurance protocols designed for the high-altitude challenge.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <Brain className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Mental Resilience</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              Strategies to manage the summit night push when fatigue and cold try to override your willpower.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Calendar className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Optimal Timeline</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              The 12-week preparation roadmap to go from sea-level dreamer to Kilimanjaro summit success.
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Summit Readiness</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prepCluster?.articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/preparation/${article.slug}`}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <Activity className="h-5 w-5 text-amber-500" />
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
        <div className="mt-24 bg-amber-700 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display italic">Download Your Custom Training Plan</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto font-medium italic">
            Unlock the training protocols we recommend for our professional high-altitude guides.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Start Your Prep <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
