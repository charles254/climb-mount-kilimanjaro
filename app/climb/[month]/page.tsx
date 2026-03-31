import { getMonthBySlug, climbingMonths } from "@/lib/pseo-data";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { SITE_URL } from "@/lib/config";
import ClusterArticleView from "@/components/ClusterArticleView";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Info, Calendar, CloudSun, Users, Thermometer, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ month: string }>;
}

export async function generateStaticParams() {
  const monthParams = climbingMonths.map((month) => ({
    month: month.slug,
  }));

  const clusterArticles = topicalClusters
    .find(c => c.slug === "climb")
    ?.articles.map(a => ({ month: a.slug })) || [];

  return [...monthParams, ...clusterArticles];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { month: slug } = await params;
  const monthData = getMonthBySlug(slug);
  
  if (!monthData) {
    const article = topicalClusters
      .find(c => c.slug === "climb")
      ?.articles.find(a => a.slug === slug);
    
    if (article) {
      return {
        title: article.title,
        description: article.description,
        keywords: `best time to climb Kilimanjaro, ${slug.replace(/-/g, ' ')}, weather Kilimanjaro`,
        alternates: {
          canonical: `/climb/${slug}`
        }
      };
    }
    return { title: "Page Not Found" };
  }

  return {
    title: `Climb Kilimanjaro in ${monthData.month_name}`,
    description: `Expert guide to climbing Mount Kilimanjaro in ${monthData.month_name}. Weather, success rates, and crowd levels for your summit journey.`,
    keywords: `climb Kilimanjaro in ${monthData.month_name}, ${monthData.month_name} weather Kilimanjaro, best month to climb Kilimanjaro`,
    alternates: {
      canonical: `/climb/${monthData.slug}`
    }
  };
}

export default async function ClimbPage({ params }: Props) {
  const { month: slug } = await params;
  const month = getMonthBySlug(slug);

  if (!month) {
    // Check if it's a cluster article
    const isClusterArticle = topicalClusters
      .find(c => c.slug === "climb")
      ?.articles.some(a => a.slug === slug);

    if (isClusterArticle) {
       return <ClusterArticleView slug={slug} />;
    }
    notFound();
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
              Climb Kilimanjaro in <span className="text-amber-500">{month.month_name}</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Master your <strong>summit journey</strong> with our data-driven guide to <strong>{month.month_name} conditions</strong> on Mount Kilimanjaro.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-12 shadow-2xl ring-1 ring-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-500/10 p-3 rounded-xl">
                <Info className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider italic">Expert Verdict</h2>
            </div>
            <p className="text-xl text-slate-200 leading-relaxed font-medium italic mb-4">
              "{month.verdict}"
            </p>
          </div>

          <div className="prose prose-invert prose-amber max-w-none text-slate-200/90">
            <h2 className="text-3xl font-bold text-white mb-6 font-display italic tracking-tight">Weather Profile</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {month.month_name} is characterized by <strong>{month.weather_profile.toLowerCase()}</strong> conditions. Understanding the <strong>climate nuances</strong> of this month is crucial for proper <strong>gear preparation</strong> and choosing the right <strong>Kilimanjaro climbing route</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CloudSun className="h-5 w-5 text-amber-500" />
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm">Sky Conditions</h3>
                </div>
                <p className="text-slate-400">{month.weather_profile}</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-amber-500" />
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm">Crowd Level</h3>
                </div>
                <p className="text-slate-400 capitalize">{month.crowd_level}</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 font-display italic tracking-tight">Temperature Expectations</h2>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              Temperatures vary significantly between the base of the mountain and <strong>Uhuru Peak</strong>. In {month.month_name}, here is what you can expect during your <strong>summit journey</strong>:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex-1 bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 text-center backdrop-blur-md ring-1 ring-white/5">
                <Thermometer className="h-6 w-6 text-amber-500 mx-auto mb-4" />
                <p className="text-slate-500 text-xs uppercase font-black tracking-widest mb-2">Base Camp Average</p>
                <p className="text-4xl font-black text-white">{month.base_temp}</p>
              </div>
              <div className="flex-1 bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 text-center backdrop-blur-md ring-1 ring-white/5">
                <Thermometer className="h-6 w-6 text-blue-400 mx-auto mb-4" />
                <p className="text-slate-500 text-xs uppercase font-black tracking-widest mb-2">Summit Average</p>
                <p className="text-4xl font-black text-white">{month.summit_temp}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-16 border-t border-slate-900">
            <h2 className="text-2xl font-bold text-white mb-8 italic uppercase tracking-tighter">Plan for Another Month</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {climbingMonths.map((m) => (
                <Link
                  key={m.slug}
                  href={`/climb/${m.slug}`}
                  className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl text-center hover:border-amber-500/50 transition-all group backdrop-blur-sm"
                >
                  <Calendar className="h-5 w-5 text-slate-500 group-hover:text-amber-500 mx-auto mb-2 transition-colors" />
                  <span className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight">{m.month_name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `Climbing Kilimanjaro in ${month.month_name}`,
            "description": `Detailed guide on the weather, crowds, and conditions for climbing Kilimanjaro in ${month.month_name}.`,
            "author": {
              "@type": "Organization",
              "name": "KiliGo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "KiliGo",
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/icon.png`
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${SITE_URL}/climb/${month.slug}`
            }
          })
        }}
      />
    </div>
  );
}
