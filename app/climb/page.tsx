import Link from "next/link";
import { Calendar, CloudSun, Thermometer, Info, ArrowRight, CheckCircle2 } from "lucide-react";
import { climbingMonths } from "@/lib/pseo-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Best Time to Climb Kilimanjaro: Month-by-Month Weather Guide",
  description: "When is the best time to climb Kilimanjaro? Complete month-by-month weather breakdown, dry vs rainy seasons, crowd levels, and summit success rates for 2026.",
  keywords: "best time to climb kilimanjaro, kilimanjaro weather by month, kilimanjaro climbing seasons, kilimanjaro dry season, kilimanjaro rainy season, when to climb kilimanjaro",
  alternates: { canonical: "/climb" },
};

export default function ClimbSeasonsIndex() {
  return (
    <div className="bg-slate-950 min-h-screen pt-4 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Climbing Calendar",
            "description": "Monthly guide to weather and conditions for climbing Mount Kilimanjaro.",
            "url": "${SITE_URL}/climb",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": climbingMonths.map((month, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/climb/${month.slug}`,
                "name": month.month_name
              }))
            }
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter font-display">
            The Best Time <span className="text-amber-500">to Climb</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Weather is the <span className="text-white font-bold italic tracking-tighter">ultimate gatekeeper</span> of the summit. Choose your window with <span className="text-white font-bold uppercase italic shadow-sm tracking-tight text-xl">precision</span>.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <CloudSun className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Dry Seasons</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              January-March and June-October offer clear skies and the highest summit success rates.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <Thermometer className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Temperature Profile</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              From humid 30°C rainforests to -20°C arctic summits. Learn how temperature fluctuates by month.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Info className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Crowd Levels</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Balance perfect weather against trail traffic. Monthly insights into the busiest and quietest times.
            </p>
          </div>
        </div>

        {/* Months Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Monthly Intel</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {climbingMonths.map((month) => (
              <Link 
                key={month.slug}
                href={`/climb/${month.slug}`}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <Calendar className="h-5 w-5 text-amber-500" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-amber-500 transition-all transform group-hover:translate-x-1" />
                </div>
                <h4 className="text-white font-bold group-hover:text-amber-500 transition-colors mb-2 uppercase tracking-tight">
                  {month.month_name}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed uppercase font-bold tracking-widest tracking-tighter line-clamp-2">
                  {month.verdict}
                </p>
                <div className="mt-4 flex items-center gap-4">
                    <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">Weather: <span className="text-slate-400">{month.weather_profile}</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Full Moon CTA */}
        <div className="mt-24 bg-slate-900 rounded-3xl p-10 text-center text-white border border-amber-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 uppercase italic font-display italic">Full Moon Summit Dates</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto font-medium italic">
                Summiting under a full moon provides natural illumination and a magical atmosphere. Check our calendar for the best dates.
            </p>
            <Link
                href="/climb/full-moon-climbs"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
            >
                View Full Moon Dates <ArrowRight className="ml-2 h-5 w-5 text-white" />
            </Link>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
