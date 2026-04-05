import Link from "next/link";
import { Compass, Map, Info, Flag, ArrowRight, CheckCircle2 } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { climbingRoutes } from "@/lib/pseo-data";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "All 6 Kilimanjaro Routes Compared — Success Rates, Days & Difficulty",
  description: "Compare all 6 Kilimanjaro routes side by side: Lemosho (95% success), Machame (85%), Marangu (65%), Northern Circuit (98%), Rongai & Umbwe. Duration, difficulty, and best-fit guide.",
  keywords: "kilimanjaro routes, best kilimanjaro route, kilimanjaro route comparison, lemosho vs machame, kilimanjaro success rates by route, kilimanjaro route difficulty, Barranco Wall, Shira Plateau",
  alternates: { canonical: "/routes" },
  openGraph: {
    title: "All 6 Kilimanjaro Routes Compared — Success Rates, Days & Difficulty",
    description: "Compare all 6 Kilimanjaro routes side by side. Find the best route for your fitness level, schedule, and summit success.",
    images: [{ url: "/images/rugged_kilimanjaro_hero.webp", width: 1200, height: 630, alt: "Kilimanjaro climbing routes overview showing all paths to Uhuru Peak" }],
  },
};

export default function RoutesIndex() {
  const routesCluster = topicalClusters.find(c => c.slug === "routes");
  
  return (
    <div className="bg-slate-950 min-h-screen pt-4 pb-16 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Kilimanjaro Climbing Routes Guide",
            "description": "Compare all Mount Kilimanjaro climbing routes for difficulty and success.",
            "url": `${SITE_URL}/routes`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": routesCluster?.articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${SITE_URL}/routes/${article.slug}`,
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
            Kilimanjaro <span className="text-amber-500">Climbing Routes</span>
            <span className="block text-2xl md:text-4xl text-slate-400 mt-2 not-italic tracking-tight">Compare All Paths to the Summit</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            There is <span className="text-white font-bold italic tracking-tighter">no single path</span> to the top. Your choice of route determines your <span className="text-white font-bold uppercase italic shadow-sm tracking-tight text-xl">acclimatization success</span>.
          </p>
        </div>

        {/* Essential Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Compass className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Kilimanjaro Route Scenery & Terrain</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              From the lush rainforest of Lemosho to the crossing of the Shira Plateau and the alpine desert.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-500 transition-colors">
              <Map className="h-6 w-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Route Difficulty Ratings</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium font-sans">
              Compare the physical demand of the steep Umbwe route against the gradual Northern Circuit.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all group">
            <div className="bg-amber-500/10 p-3 rounded-xl w-fit mb-6 group-hover:bg-amber-500 transition-colors">
              <Flag className="h-6 w-6 text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight italic text-xl">Summit Success Rates by Route</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Data-driven insights into why routes over 7 days consistently outperform shorter itineraries.
            </p>
          </div>
        </div>

        {/* Route Comparison Table - Featured Snippet Target */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Route Comparison</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900">
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Route</th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Days</th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Success Rate</th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Difficulty</th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Traffic</th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {climbingRoutes.map((route) => (
                  <tr key={route.slug} className="hover:bg-white/5 transition-colors">
                    <td className="p-5">
                      <Link href={`/routes/${route.slug}`} className="text-white font-bold hover:text-amber-500 transition-colors">
                        {route.name}
                      </Link>
                    </td>
                    <td className="p-5 text-slate-300">{route.duration}</td>
                    <td className="p-5">
                      <span className="text-amber-500 font-bold">{route.success_rate}</span>
                    </td>
                    <td className="p-5 text-slate-300">{route.difficulty}</td>
                    <td className="p-5 text-slate-300">{route.traffic}</td>
                    <td className="p-5 text-slate-400 text-sm">{route.best_for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter font-display">Route Intel</h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routesCluster?.articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/routes/${article.slug}`}
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
                <p className="text-slate-500 text-xs leading-relaxed uppercase font-bold tracking-widest tracking-tighter">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-amber-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display italic">Which route is right for you?</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto font-medium italic">
            Schedule a free consultation and let our lead guides help you pick the path that matches your fitness and goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Route Consultation <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
