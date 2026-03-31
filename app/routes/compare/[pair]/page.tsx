import { generateComparisons, getComparisonBySlug } from "@/lib/route-comparisons";
import { climbingRoutes } from "@/lib/pseo-data";
import { SITE_URL } from "@/lib/config";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  BarChart,
  Map,
  Users,
  Trophy,
  Star,
  Scale,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ pair: string }>;
}

function getRouteBySlug(slug: string) {
  return climbingRoutes.find((r) => r.slug === slug);
}

function formatRouteName(slug: string): string {
  const route = getRouteBySlug(slug);
  return route?.name ?? slug.replace(/-/g, " ");
}

function generateFAQs(routeAName: string, routeBName: string, routeA: ReturnType<typeof getRouteBySlug>, routeB: ReturnType<typeof getRouteBySlug>) {
  if (!routeA || !routeB) return [];
  return [
    {
      question: `Which is harder, ${routeAName} or ${routeBName}?`,
      answer: `${routeAName} is rated ${routeA.difficulty} difficulty while ${routeBName} is rated ${routeB.difficulty}. ${routeA.difficulty === routeB.difficulty ? "Both routes have a similar level of physical demand." : `${routeA.difficulty === "Challenging" || routeA.difficulty === "Difficult" ? routeAName : routeBName} is the more physically demanding option.`} Your fitness level, trekking experience, and acclimatization tolerance should guide your choice.`,
    },
    {
      question: `How do ${routeAName} and ${routeBName} compare on success rate?`,
      answer: `${routeAName} has a ${routeA.success_rate} summit success rate compared to ${routeB.success_rate} for ${routeBName}. The difference is mainly driven by the number of acclimatization days built into each itinerary. Longer routes generally produce higher success rates because climbers have more time to adjust to altitude.`,
    },
    {
      question: `Can I switch from ${routeAName} to ${routeBName} mid-climb?`,
      answer: `No, you cannot switch routes once you have started. Each route has its own gates, camps, and permits. However, some routes share trail sections at higher elevations. The best approach is to research both options thoroughly and commit to the route that matches your goals before departure.`,
    },
  ];
}

export async function generateStaticParams() {
  return generateComparisons().map((comp) => ({
    pair: comp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }): Promise<Metadata> {
  const { pair } = await params;
  const comparison = getComparisonBySlug(pair);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  const nameA = formatRouteName(comparison.routeA);
  const nameB = formatRouteName(comparison.routeB);

  return {
    title: `${nameA} vs ${nameB}`,
    description: `Compare the ${nameA} and ${nameB} side by side. Success rates, difficulty, duration, traffic, and expert recommendations to help you choose the best Kilimanjaro route.`,
    keywords: `${nameA} vs ${nameB}, kilimanjaro route comparison, ${comparison.routeA} or ${comparison.routeB}, best kilimanjaro route`,
    alternates: {
      canonical: `/routes/compare/${pair}`,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { pair } = await params;
  const comparison = getComparisonBySlug(pair);

  if (!comparison) {
    notFound();
  }

  const routeA = getRouteBySlug(comparison.routeA);
  const routeB = getRouteBySlug(comparison.routeB);

  if (!routeA || !routeB) {
    notFound();
  }

  const nameA = routeA.name;
  const nameB = routeB.name;
  const faqs = generateFAQs(nameA, nameB, routeA, routeB);

  const statRows = [
    { label: "Duration", valueA: routeA.duration, valueB: routeB.duration, icon: Clock },
    { label: "Success Rate", valueA: routeA.success_rate, valueB: routeB.success_rate, icon: Trophy },
    { label: "Difficulty", valueA: routeA.difficulty, valueB: routeB.difficulty, icon: BarChart },
    { label: "Traffic", valueA: routeA.traffic, valueB: routeB.traffic, icon: Users },
    { label: "Best For", valueA: routeA.best_for, valueB: routeB.best_for, icon: Star },
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/routes" className="hover:text-amber-500 transition-colors">
            Routes
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-400">
            {nameA} vs {nameB}
          </span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Scale className="h-3.5 w-3.5" />
            Route Comparison
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            {nameA} <span className="text-amber-500">vs</span> {nameB}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A detailed side-by-side comparison to help you choose the right Kilimanjaro route for your summit attempt.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Route A Card */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              {nameA}
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Clock className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</p>
                  <p className="text-white font-bold">{routeA.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Trophy className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Success Rate</p>
                  <p className="text-white font-bold">{routeA.success_rate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <BarChart className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Difficulty</p>
                  <p className="text-white font-bold">{routeA.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Users className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Traffic</p>
                  <p className="text-white font-bold uppercase">{routeA.traffic}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Star className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Best For</p>
                  <p className="text-white font-bold">{routeA.best_for}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h3 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">When to Choose {nameA}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{comparison.best_for_a}</p>
            </div>
            <Link
              href={`/routes/${routeA.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold text-sm transition-colors"
            >
              Full {nameA} Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Route B Card */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              {nameB}
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Clock className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</p>
                  <p className="text-white font-bold">{routeB.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Trophy className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Success Rate</p>
                  <p className="text-white font-bold">{routeB.success_rate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <BarChart className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Difficulty</p>
                  <p className="text-white font-bold">{routeB.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Users className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Traffic</p>
                  <p className="text-white font-bold uppercase">{routeB.traffic}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Star className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Best For</p>
                  <p className="text-white font-bold">{routeB.best_for}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h3 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">When to Choose {nameB}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{comparison.best_for_b}</p>
            </div>
            <Link
              href={`/routes/${routeB.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold text-sm transition-colors"
            >
              Full {nameB} Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Head-to-Head <span className="text-amber-500">Comparison</span>
            </h2>
            <div className="flex-grow h-px bg-slate-800" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900">
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">
                    Metric
                  </th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">
                    {nameA}
                  </th>
                  <th className="p-5 text-xs font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">
                    {nameB}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {statRows.map((row) => (
                  <tr key={row.label} className="hover:bg-white/5 transition-colors">
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <row.icon className="h-4 w-4 text-amber-500" />
                        <span className="text-white font-bold text-sm uppercase tracking-wider">
                          {row.label}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-300 font-medium">{row.valueA}</td>
                    <td className="p-5 text-slate-300 font-medium">{row.valueB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verdict */}
        <div className="mb-16">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500/10 p-2 rounded-lg">
                <Scale className="h-5 w-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                Our <span className="text-amber-500">Verdict</span>
              </h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">{comparison.verdict}</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 pt-16 border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">
              {nameA} vs {nameB} <span className="text-amber-500">FAQs</span>
            </h2>
            <p className="text-slate-400">
              Common questions about choosing between the {nameA} and {nameB}.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
            <FAQSchema faqs={faqs} />
          </div>
        </div>

        {/* Other Comparisons */}
        <div className="mb-16 pt-16 border-t border-slate-900">
          <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight">
            More Route <span className="text-amber-500">Comparisons</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {generateComparisons()
              .filter((c) => c.slug !== comparison.slug)
              .slice(0, 6)
              .map((comp) => {
                const a = formatRouteName(comp.routeA);
                const b = formatRouteName(comp.routeB);
                return (
                  <Link
                    key={comp.slug}
                    href={`/routes/compare/${comp.slug}`}
                    className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition-all group"
                  >
                    <h4 className="text-white font-bold mb-2 group-hover:text-amber-500 transition-colors uppercase tracking-tight">
                      {a} vs {b}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {comp.verdict}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-amber-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic">
            Need help deciding?
          </h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto font-medium italic">
            Our lead guides have summited Kilimanjaro over 200 times. Get a free consultation to pick the perfect route for your fitness and goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Route Consultation <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>

      {/* Structured Data: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Routes",
                item: `${SITE_URL}/routes`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Compare",
                item: `${SITE_URL}/routes/compare`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: `${nameA} vs ${nameB}`,
                item: `${SITE_URL}/routes/compare/${pair}`,
              },
            ],
          }),
        }}
      />

      {/* Structured Data: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${nameA} vs ${nameB} — Kilimanjaro Route Comparison`,
            description: `Compare the ${nameA} and ${nameB} side by side. Success rates, difficulty, duration, and expert recommendations.`,
            author: {
              "@type": "Organization",
              name: "KiliGo",
            },
            publisher: {
              "@type": "Organization",
              name: "KiliGo",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/icon.png`,
              },
            },
            datePublished: "2025-01-15",
            dateModified: "2025-01-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/routes/compare/${pair}`,
            },
          }),
        }}
      />
    </div>
  );
}
