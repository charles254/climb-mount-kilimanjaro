import { getOriginBySlug, travelOrigins } from "@/lib/pseo-data";
import { SITE_URL } from "@/lib/config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Bus, Plane, FileText, DollarSign, ArrowLeft, ArrowRight, Info } from "lucide-react";
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

  return {
    title: `Climb Kilimanjaro ${origin.city}`,
    description: `How to get to Mount Kilimanjaro from ${origin.city}, ${origin.country}. Transport methods, visa requirements for expats, and estimated costs.`,
    keywords: `climb Kilimanjaro from ${origin.city}, ${origin.city} to Kilimanjaro flights, Tanzania visa for ${origin.country} citizens`,
    alternates: {
      canonical: `/travel-guide/${city}`
    }
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
      question: `Can Kilimanjaro Quest help with my logistics in ${origin.city}?`, 
      answer: `While we focus on the trek and regional transfers in East Africa, we provide all the necessary flight arrival information and documentation you'll need to present at ${origin.city} airports or border crossings.` 
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Climb Kilimanjaro <span className="text-amber-500">{origin.city}</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Your complete logistical roadmap for traveling <strong>{origin.city}</strong>, <strong>{origin.country}</strong> to the base of the world's highest free-standing mountain. Start your <strong>quest to Uhuru Peak</strong> with expert <strong>regional logistics</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex items-start gap-6">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <Plane className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Transport Mode</h3>
                <p className="text-slate-400 leading-relaxed">{origin.transport_method}</p>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex items-start gap-6">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <FileText className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Visa Requirements</h3>
                <p className="text-slate-400 leading-relaxed">{origin.visa_requirements}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex items-start gap-6">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <DollarSign className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Est. Travel Cost</h3>
                <p className="text-slate-400 leading-relaxed">Approximately {origin.estimated_cost}</p>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex items-start gap-6">
              <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                <Info className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Guide Tip</h3>
                <p className="text-slate-400 leading-relaxed">Book early to secure local connector flights or shuttle seats, especially during peak seasons.</p>
              </div>
            </div>
          </div>

          {/* Localized FAQ Section */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Travel <span className="text-amber-500">FAQs</span>
              </h2>
              <p className="text-slate-400">Common questions for travelers from {origin.city}.</p>
            </div>
            <FAQAccordion items={originFaqs} />
            <FAQSchema faqs={originFaqs} />
          </div>

          <div className="bg-amber-600 rounded-3xl p-10 text-center text-white mb-32">
            <h2 className="text-3xl font-bold mb-4">Start Planning Your Trek {origin.city}</h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">Our specialized team in <strong>East Africa</strong> handles all <strong>regional logistics</strong>, border crossings, and <strong>Tanzanian visa</strong> transfers for our {origin.city} clients.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50"
            >
              Get a Custom Quote {origin.city} <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
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
              "name": "Kilimanjaro Quest"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kilimanjaro Quest",
              "logo": {
                "@type": "ImageObject",
                "url": "${SITE_URL}/icon.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
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
