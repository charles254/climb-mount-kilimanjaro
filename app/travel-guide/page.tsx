import Link from "next/link";
import { MapPin, Plane, Globe, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { travelOrigins } from "@/lib/pseo-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "How to Get to Kilimanjaro: Flights & Visas",
  description: "Plan your journey to Kilimanjaro from anywhere. Flights to JRO, Tanzania visa info, and transport logistics from 100+ cities.",
  keywords: "how to get to kilimanjaro, flights to kilimanjaro, kilimanjaro from nairobi, tanzania visa requirements, JRO airport, kilimanjaro travel guide, climb kilimanjaro from",
  alternates: { canonical: "/travel-guide" },
};

const REGIONS = [
  { name: "Africa & Regional Hubs", countries: ["Kenya", "Tanzania", "South Africa", "Nigeria", "Egypt", "Ethiopia", "Uganda", "Rwanda", "Ghana", "Morocco", "Zambia", "Zimbabwe", "Mauritius"] },
  { name: "Europe", countries: ["UK", "Germany", "France", "Spain", "Italy", "Sweden", "Norway", "Denmark", "Switzerland", "Netherlands", "Ireland", "Portugal", "Austria", "Poland", "Czech Republic", "Hungary", "Finland", "Greece", "Belgium", "Iceland"] },
  { name: "North America", countries: ["USA", "Canada", "Mexico"] },
  { name: "Asia & Middle East", countries: ["China", "Japan", "South Korea", "Thailand", "Indonesia", "Philippines", "Malaysia", "Vietnam", "Taiwan", "India", "Israel", "Saudi Arabia", "UAE", "Turkey", "Qatar", "Russia"] },
  { name: "Oceania", countries: ["Australia", "New Zealand"] },
  { name: "South America", countries: ["Brazil", "Argentina", "Colombia", "Peru", "Chile"] }
];

export default function TravelGuideIndex() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Logistics & Travel Hub",
            "description": "Expert advice on traveling to Mount Kilimanjaro from all over the world.",
            "url": `${SITE_URL}/travel-guide`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": travelOrigins.map((origin, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/travel-guide/${origin.slug}`,
                "name": origin.city
              }))
            }
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter font-display">
            Kilimanjaro Travel <span className="text-amber-500">& Logistics Guide</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            Getting to the <span className="text-white font-bold">"Roof of Africa"</span> requires precision planning. Whether you're flying directly to <span className="text-white">Kilimanjaro</span> or connecting via <span className="text-white">Nairobi</span>, we've mapped out every route.
          </p>
        </div>

        {/* Masterclass Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-500/10 p-3 rounded-xl group-hover:bg-amber-500 transition-colors">
                <Plane className="h-6 w-6 text-amber-500 group-hover:text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight italic">Direct to JRO</h2>
            </div>
            <p className="text-slate-400 mb-6 font-medium">Flying into Kilimanjaro International Airport (JRO) is the fastest way to start your trek.</p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300">
                <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Customs and Immigration handled at the base of the mountain.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <Clock className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>Ideal if you have limited time and want to start climbing immediately.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500 transition-colors">
                <Globe className="h-6 w-6 text-blue-500 group-hover:text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight italic">Via Nairobi (NBO)</h2>
            </div>
            <p className="text-slate-400 mb-6 font-medium font-sans">The "Adventure Route"—connecting through Nairobi offers significant cost savings and more flexibility.</p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300">
                <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>More flight options from major global hubs.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <Globe className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>Option to combine your trek with a <strong className="text-white">Kenyan safari</strong> or a stay in <strong className="text-white">Nairobi</strong>.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Origins Index */}
        <div className="space-y-20">
          {REGIONS.map((region) => {
            const originsInRegion = travelOrigins.filter(o => region.countries.includes(o.country));
            if (originsInRegion.length === 0) return null;

            return (
              <div key={region.name}>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">{region.name}</h2>
                  <div className="flex-grow h-px bg-slate-800" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 tracking-tight">
                  {originsInRegion.map((origin) => (
                    <div
                      key={origin.slug}
                      className="group"
                    >
                      <Link 
                        href={`/travel-guide/${origin.slug}`}
                        className="block bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all transform hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <MapPin className="h-5 w-5 text-amber-500" />
                          <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-amber-500 transition-colors" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">{origin.city}</h3>
                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">{origin.country}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
