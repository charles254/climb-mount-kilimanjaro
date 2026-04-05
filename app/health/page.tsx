import Link from "next/link";
import { CheckCircle2, ShieldPlus, Activity, Heart, ArrowRight } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kilimanjaro Altitude Sickness — AMS Symptoms, Diamox & Prevention Guide",
  description: "How to prevent altitude sickness on Kilimanjaro: AMS warning signs, Diamox dosage protocol (125-250mg), acclimatization strategies, required vaccinations, and travel insurance recommendations.",
  keywords: "kilimanjaro altitude sickness, diamox kilimanjaro, AMS prevention kilimanjaro, kilimanjaro vaccinations, kilimanjaro travel insurance, altitude sickness symptoms, HACE, HAPE, pulse oximetry, acetazolamide",
  alternates: { canonical: "/health" },
};

export default function HealthSafetyIndex() {
  const healthCluster = topicalClusters.find(c => c.slug === "health");
  
  return (
    <div className="bg-slate-950 min-h-screen pt-4 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Health & Altitude Safety",
            "description": "Expert advice on health and safety for your Kilimanjaro climb.",
            "url": `${SITE_URL}/health`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": healthCluster?.articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/health/${article.slug}`,
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
            Kilimanjaro <span className="text-amber-500">Altitude Sickness</span>
            <span className="block text-2xl md:text-4xl text-slate-400 mt-2 not-italic tracking-tight">Health & Safety Guide</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Acclimatization is the only way to the summit. Master your <span className="text-white font-bold">physiology</span> and understand <span className="text-white font-bold">AMS</span> before stepping on the mountain.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Activity className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Acute Mountain Sickness Prevention</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Learn the science of oxygen deprivation and the "Climb High, Sleep Low" protocol we use for 95%+ success.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <ShieldPlus className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic">Pre-Climb Medical Preparation</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              From Diamox prescriptions to essential vaccinations required for Tanzania. Don't leave your health to luck.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Heart className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">High-Altitude Rescue & Evacuation Protocols</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              WFR certified guides and emergency oxygen are standard. Understand how we handle high-altitude evacuation.
            </p>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Safety Protocols</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthCluster?.articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/health/${article.slug}`}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
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
        <div className="mt-24 bg-blue-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display">Speak with our Medical Experts</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium italic">
            Our lead guides are Wilderness First Responder (WFR) certified and carry specialized medical pulse-oximeters to monitor your health daily.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Ask a Safety Expert <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
