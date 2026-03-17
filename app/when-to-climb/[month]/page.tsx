import { getMonthBySlug, climbingMonths, climbingRoutes } from "@/lib/pseo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CloudSun, Thermometer, Users, Calendar, ArrowLeft, ArrowRight, CheckCircle, Info } from "lucide-react";

interface Props {
  params: { month: string };
}

export async function generateStaticParams() {
  return climbingMonths.map((month) => ({
    month: month.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ month: string }> }): Promise<Metadata> {
  const { month: monthSlug } = await params;
  const month = getMonthBySlug(monthSlug);
  if (!month) return { title: "Month Not Found" };

  return {
    title: `Climbing Kilimanjaro in ${month.month_name} | Weather & Crowds`,
    description: `Is ${month.month_name} a good time to climb Kilimanjaro? Weather: ${month.weather_profile}, Crowds: ${month.crowd_level}. Detailed guide for early-year treks.`,
  };
}

export default async function MonthPage({ params }: { params: Promise<{ month: string }> }) {
  const { month: monthSlug } = await params;
  const month = getMonthBySlug(monthSlug);

  if (!month) {
    notFound();
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Climbing in <span className="text-amber-500">{month.month_name}</span>
            </h1>
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-500/10 p-3 rounded-xl">
                  <Info className="h-6 w-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Expert Verdict</h2>
              </div>
              <p className="text-xl text-slate-200 leading-relaxed font-medium italic mb-4">
                "{month.verdict}"
              </p>
            </div>

            <div className="prose prose-invert prose-amber max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Weather Profile</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {month.month_name} is characterized by {month.weather_profile.toLowerCase()} conditions. Understanding the climate nuances of this month is crucial for proper gear preparation and choosing the right climbing route.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-4">
                    <CloudSun className="h-5 w-5 text-amber-500" />
                    <h3 className="text-white font-bold uppercase tracking-wider">Sky Conditions</h3>
                  </div>
                  <p className="text-slate-400">{month.weather_profile}</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-5 w-5 text-amber-500" />
                    <h3 className="text-white font-bold uppercase tracking-wider">Crowd Level</h3>
                  </div>
                  <p className="text-slate-400 capitalize">{month.crowd_level}</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Temperature Expectations</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Temperatures vary significantly between the base of the mountain and the summit. In {month.month_name}, here is what you can expect:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                  <Thermometer className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Base Camp Average</p>
                  <p className="text-3xl font-bold text-white">{month.base_temp}</p>
                </div>
                <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                  <Thermometer className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Summit Average</p>
                  <p className="text-3xl font-bold text-white">{month.summit_temp}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Routes for this Month */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 sticky top-28">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-500" /> Best Routes for {month.month_name}
              </h3>
              <div className="space-y-4">
                {climbingRoutes.slice(0, 3).map(route => (
                  <Link
                    key={route.slug}
                    href={`/routes/${route.slug}`}
                    className="block p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/30 transition-all group"
                  >
                    <h4 className="text-white font-bold mb-1 group-hover:text-amber-500 transition-colors">{route.name}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{route.duration} • {route.success_rate}</p>
                  </Link>
                ))}
              </div>
              
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Request a {month.month_name} Slot <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Months */}
        <div className="mt-24 pt-16 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-white mb-8">Planning for a Different Month?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {climbingMonths.filter(m => m.slug !== month.slug).map((m) => (
              <Link
                key={m.slug}
                href={`/when-to-climb/${m.slug}`}
                className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-amber-500/50 transition-all group"
              >
                <Calendar className="h-5 w-5 text-slate-500 group-hover:text-amber-500 mx-auto mb-2 transition-colors" />
                <span className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight">{m.month_name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
