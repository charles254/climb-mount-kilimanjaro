import { getRouteBySlug, climbingRoutes } from "@/lib/pseo-data";
import ElevationProfile from "@/components/ElevationProfile";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Clock, BarChart, Map, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return climbingRoutes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return { title: "Route Not Found" };

  return {
    title: `${route.name} | Kilimanjaro Trek Guide`,
    description: `Complete guide to climbing Kilimanjaro via the ${route.name}. Success rate: ${route.success_rate}, Duration: ${route.duration}. Book your guided trek now.`,
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
              {route.name}
            </h1>
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-1.5 rounded-full text-sm font-bold uppercase">
                {route.success_rate} Success Rate
              </span>
              <span className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase">
                {route.difficulty} Difficulty
              </span>
              <span className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase">
                {route.duration}
              </span>
            </div>

            <div className="prose prose-invert prose-amber max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {route.description}
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-amber-500" /> The Kenya Advantage Tip
              </h2>
              <div className="bg-slate-900 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
                <p className="text-slate-200 italic leading-relaxed">
                  "{route.kenya_advantage_tip}"
                </p>
              </div>

              <div className="mb-12">
                <ElevationProfile data={route.elevation_data} />
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Route Overview</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                The {route.name} is a premier choice for many climbers. Whether you're looking for the best views, the highest success rate, or a quieter experience away from the crowds, this route offers unique characteristics that make it stand out.
              </p>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 sticky top-28">
              <h3 className="text-xl font-bold text-white mb-6">Route Insights</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Duration</h4>
                    <p className="text-white font-bold">{route.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-2 rounded-lg">
                    <BarChart className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Success Rate</h4>
                    <p className="text-white font-bold">{route.success_rate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-2 rounded-lg">
                    <Map className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Traffic Level</h4>
                    <p className="text-white font-bold uppercase">{route.traffic}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Book This Route <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="text-center text-xs text-slate-500 mt-4">Limited spots available for the next season.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Topical Cluster Navigation */}
        <div className="mt-24 pt-16 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-white mb-8">Compare Other Routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {climbingRoutes.filter(r => r.slug !== route.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/routes/${other.slug}`}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all group"
              >
                <h4 className="text-white font-bold mb-2 group-hover:text-amber-500 transition-colors uppercase tracking-tight">{other.name}</h4>
                <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <span>{other.duration}</span>
                  <span>{other.success_rate}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
