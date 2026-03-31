import { getOriginBySlug, travelOrigins, climbingRoutes } from "@/lib/pseo-data";
import { SITE_URL } from "@/lib/config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Bus, Plane, FileText, DollarSign, ArrowLeft, ArrowRight, Info, Clock, Globe, Mountain, Banknote } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return travelOrigins.map((origin) => ({
    city: origin.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const origin = getOriginBySlug(city);
  if (!origin) return { title: "Origin Not Found" };

  const robots = origin.priority === 'low' ? { index: false, follow: true } : undefined;

  return {
    title: `Climb Kilimanjaro from ${origin.city} | Travel Guide`,
    description: `How to get to Mount Kilimanjaro from ${origin.city}, ${origin.country}. ${origin.flight_duration} flight time, visa requirements, best airlines, and estimated travel costs.`,
    keywords: `climb Kilimanjaro from ${origin.city}, ${origin.city} to Kilimanjaro flights, Tanzania visa for ${origin.country} citizens, ${origin.city} to JRO`,
    alternates: {
      canonical: `/travel-guide/${city}`
    },
    ...(robots ? { robots } : {}),
  };
}

export default async function TravelOriginPage({ params }: Props) {
  const { city } = await params;
  const origin = getOriginBySlug(city);

  if (!origin) {
    notFound();
  }

  const originFaqs = origin.faqs || [
    { 
      question: `What is the best way to travel from ${origin.city} to Kilimanjaro?`, 
      answer: `The most common way to reach Kilimanjaro from ${origin.city} is by ${origin.transport_method.toLowerCase()}. Our team can help coordinate the final leg of your journey from the airport to your hotel.` 
    },
    { 
      question: `Do I need a visa for Tanzania if I'm traveling from ${origin.country}?`, 
      answer: `For travelers from ${origin.country}, the requirements are: ${origin.visa_requirements}. We recommend applying for an e-visa at least 2 weeks before your departure.` 
    },
    { 
      question: `Can KiliGo help with my logistics in ${origin.city}?`, 
      answer: `While we focus on the trek and regional transfers in East Africa, we provide all the necessary flight arrival information and documentation you'll need to present at ${origin.city} airports or border crossings.` 
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Climb Kilimanjaro from <span className="text-amber-500">{origin.city}</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Your complete logistical roadmap for traveling <strong>{origin.city}</strong>, <strong>{origin.country}</strong> to the base of the world's highest free-standing mountain. Start your <strong>journey to Uhuru Peak</strong> with expert <strong>regional logistics</strong>.
            </p>
          </div>

          {/* Primary Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-5">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <Plane className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Transport & Airlines</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{origin.transport_method}</p>
                <p className="text-amber-500 text-xs font-bold mt-2">Best airlines: {origin.best_airlines}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-5">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <Clock className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Flight Duration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{origin.flight_duration} from {origin.airport_code}</p>
                <p className="text-slate-500 text-xs mt-2">Peak season: {origin.peak_flight_season}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-5">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <FileText className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Visa Requirements</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{origin.visa_requirements}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-5">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <DollarSign className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Est. Travel Cost</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Approximately {origin.estimated_cost}</p>
                <p className="text-slate-500 text-xs mt-2">Local currency: {origin.currency}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-5">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <Globe className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Time Zone</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{origin.timezone_diff}</p>
                <p className="text-amber-500/80 text-xs mt-2">{origin.jet_lag_tip}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-5">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <Info className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">{origin.city} Tip</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{origin.local_tip}</p>
              </div>
            </div>
          </div>

          {/* Cross-links: Recommended Routes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              Popular Routes from <span className="text-amber-500">{origin.city}</span> Travelers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {climbingRoutes.slice(0, 3).map((route) => (
                <Link
                  key={route.slug}
                  href={`/routes/${route.slug}`}
                  className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold group-hover:text-amber-500 transition-colors">{route.name}</h3>
                    <span className="text-amber-500 text-xs font-bold">{route.success_rate}</span>
                  </div>
                  <p className="text-slate-500 text-xs">{route.duration} &middot; {route.difficulty}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/routes" className="text-amber-500 font-bold text-sm hover:text-amber-400 inline-flex items-center gap-1">
                View All Routes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Cross-links: Best Months */}
          <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 mb-16">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Best Months to Climb</h2>
            <p className="text-slate-400 text-sm mb-4">Peak dry seasons offer the best conditions. Book flights from {origin.city} early during these popular windows:</p>
            <div className="flex flex-wrap gap-3">
              {['january', 'february', 'july', 'august', 'september'].map((month) => (
                <Link
                  key={month}
                  href={`/climb/${month}`}
                  className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-white text-sm font-bold hover:border-amber-500/50 hover:text-amber-500 transition-all capitalize"
                >
                  {month}
                </Link>
              ))}
            </div>
          </section>

          {/* Localized FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Travel <span className="text-amber-500">FAQs</span>
              </h2>
              <p className="text-slate-400">Common questions for travelers from {origin.city}.</p>
            </div>
            <FAQAccordion items={originFaqs} />
            <FAQSchema faqs={originFaqs} />
          </div>

          {/* Cross-links: Other Origins from Same Continent */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
              Other {origin.continent} Departure Cities
            </h2>
            <div className="flex flex-wrap gap-3">
              {travelOrigins
                .filter((o) => o.continent === origin.continent && o.slug !== origin.slug && o.priority !== 'low')
                .slice(0, 8)
                .map((o) => (
                  <Link
                    key={o.slug}
                    href={`/travel-guide/${o.slug}`}
                    className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 text-slate-300 text-sm font-medium hover:border-amber-500/30 hover:text-amber-500 transition-all"
                  >
                    {o.city}
                  </Link>
                ))}
            </div>
          </section>

          <div className="bg-amber-600 rounded-3xl p-10 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Start Planning Your Trek from {origin.city}</h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">Our specialized team in <strong>East Africa</strong> handles all <strong>regional logistics</strong>, border crossings, and <strong>Tanzanian visa</strong> transfers for our {origin.city} clients.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50"
            >
              Get a Custom Quote from {origin.city} <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
            </Link>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `Climb Kilimanjaro ${origin.city}`,
            "description": `Comprehensive logistical guide for climbing Kilimanjaro from ${origin.city}, including flights and visas.`,
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
            "datePublished": "2025-01-15",
            "dateModified": "2025-06-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${SITE_URL}/travel-guide/${origin.slug}`
            }
          })
        }}
      />
    </div>
  );
}
