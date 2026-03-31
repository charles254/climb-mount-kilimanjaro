import { personas, getPersonaBySlug } from "@/lib/persona-data";
import { getRouteBySlug } from "@/lib/pseo-data";
import { SITE_URL } from "@/lib/config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mountain, Shield, Calendar, DollarSign, ArrowRight, Users, Compass, Target, Zap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ persona: string }>;
}

export async function generateStaticParams() {
  return personas.map((p) => ({ persona: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { persona: slug } = await params;
  const persona = getPersonaBySlug(slug);
  if (!persona) return { title: "Page Not Found" };

  return {
    title: `Climb Kilimanjaro for ${persona.name}`,
    description: persona.description,
    keywords: `climb Kilimanjaro ${persona.name.toLowerCase()}, Kilimanjaro for ${persona.name.toLowerCase()}, ${persona.name.toLowerCase()} Kilimanjaro guide`,
    alternates: { canonical: `/for/${slug}` },
    openGraph: {
      title: `Climb Kilimanjaro for ${persona.name}`,
      description: persona.description.slice(0, 160),
      images: [{ url: "/images/rugged_kilimanjaro_hero.webp", width: 1200, height: 630, alt: `Kilimanjaro Guide for ${persona.name}` }],
    },
  };
}

export default async function PersonaPage({ params }: Props) {
  const { persona: slug } = await params;
  const persona = getPersonaBySlug(slug);

  if (!persona) notFound();

  const recommendedRoutes = persona.recommended_routes
    .map(getRouteBySlug)
    .filter(Boolean);

  const otherPersonas = personas.filter((p) => p.slug !== slug);

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-amber-500/20">
            <Users className="h-4 w-4" /> For {persona.name}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display uppercase italic tracking-tighter leading-tight">
            {persona.headline}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            {persona.intro}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <Calendar className="h-6 w-6 text-amber-500 mx-auto mb-3" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Duration</p>
              <p className="text-white font-bold text-lg">{persona.recommended_duration}</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <DollarSign className="h-6 w-6 text-amber-500 mx-auto mb-3" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Budget</p>
              <p className="text-white font-bold text-lg">{persona.budget_range}</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <Compass className="h-6 w-6 text-amber-500 mx-auto mb-3" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Best Routes</p>
              <p className="text-white font-bold text-lg">{recommendedRoutes.map(r => r!.name.split(' ')[0]).join(', ')}</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <Calendar className="h-6 w-6 text-amber-500 mx-auto mb-3" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Best Months</p>
              <p className="text-white font-bold text-lg">{persona.best_months.split(',')[0].trim()}</p>
            </div>
          </div>

          {/* Key Concerns */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-white mb-8 font-display uppercase italic tracking-tight">
              Key Considerations for <span className="text-amber-500">{persona.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {persona.key_concerns.map((concern, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="bg-amber-500/10 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-amber-500" />
                  </div>
                  <p className="text-slate-300 font-medium">{concern}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Routes */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-white mb-8 font-display uppercase italic tracking-tight">
              Recommended Routes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recommendedRoutes.map((route) => (
                <div key={route!.slug} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-tight">{route!.name}</h3>
                    <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {route!.success_rate}
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-400 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" />
                      {route!.duration} duration
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" />
                      {route!.difficulty} difficulty
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" />
                      {route!.traffic} traffic
                    </div>
                  </div>
                  <Link
                    href={`/routes/${route!.slug}`}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-semibold transition-all group-hover:bg-amber-600 text-sm"
                  >
                    View Route Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Training & Gear */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Training Advice</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">{persona.training_tip}</p>
              <Link href="/preparation/training-plan" className="text-amber-500 font-bold text-sm hover:text-amber-400 flex items-center gap-1">
                Full Training Plan <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Mountain className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Gear Priorities</h3>
              </div>
              <ul className="space-y-3">
                {persona.gear_priorities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/gear/ultimate-packing-list" className="text-amber-500 font-bold text-sm hover:text-amber-400 flex items-center gap-1 mt-6">
                Full Gear List <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>

          {/* Success Insight */}
          <section className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-10 mb-20">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl flex-shrink-0">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Success Insight for {persona.name}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{persona.success_insight}</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-white mb-8 font-display uppercase italic tracking-tight text-center">
              FAQs for <span className="text-amber-500">{persona.name}</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={persona.faqs} />
              <FAQSchema faqs={persona.faqs} />
            </div>
          </section>

          {/* Cross-links to other personas */}
          <section className="mb-20">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Other Traveler Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherPersonas.map((p) => (
                <Link
                  key={p.slug}
                  href={`/for/${p.slug}`}
                  className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all text-center group"
                >
                  <p className="text-white font-bold text-sm group-hover:text-amber-500 transition-colors">{p.name}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-amber-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tight">
              Ready to Plan Your {persona.name} Trek?
            </h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">
              Get a custom itinerary tailored specifically for {persona.name.toLowerCase()}. Our experts will recommend the perfect route, duration, and preparation plan.
            </p>
            <ContactForm
              source={`Persona Page: ${persona.name}`}
              variant="light"
              className="max-w-2xl mx-auto"
              footerClassName="text-amber-100/90"
            />
          </section>
        </div>
      </div>

      {/* Structured Data */}
      <FAQSchema faqs={persona.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Climb Kilimanjaro for ${persona.name}`,
            description: persona.description,
            author: { "@type": "Organization", name: "KiliGo" },
            publisher: {
              "@type": "Organization",
              name: "KiliGo",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
            },
            datePublished: "2025-01-15",
            dateModified: "2025-06-01",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/for/${persona.slug}`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: `For ${persona.name}`, item: `${SITE_URL}/for/${persona.slug}` },
            ],
          }),
        }}
      />
    </div>
  );
}
