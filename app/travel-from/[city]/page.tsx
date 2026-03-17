import { getOriginBySlug, travelOrigins } from "@/lib/pseo-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Bus, Plane, FileText, DollarSign, ArrowLeft, ArrowRight, Info } from "lucide-react";

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return travelOrigins.map((origin) => ({
    city: origin.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const origin = getOriginBySlug(city);
  if (!origin) return { title: "Origin Not Found" };

  return {
    title: `Travel from ${origin.city} to Kilimanjaro | Logistics & Guide`,
    description: `How to get to Mount Kilimanjaro from ${origin.city}, ${origin.country}. Transport methods, visa requirements for expats, and estimated costs.`,
  };
}

export default async function TravelOriginPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const origin = getOriginBySlug(city);

  if (!origin) {
    notFound();
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Climb Kilimanjaro from <span className="text-amber-500">{origin.city}</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Your complete logistical roadmap for traveling from {origin.city}, {origin.country} to the base of the world's highest free-standing mountain.
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

          <div className="bg-amber-600 rounded-3xl p-10 text-center text-white mb-24">
            <h2 className="text-3xl font-bold mb-4">Start Planning Your Trek from {origin.city}</h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">Our specialized team in East Africa handles all regional logistics, border crossings, and transfers for our {origin.city} clients.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50"
            >
              Get a Custom Quote from {origin.city} <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
            </Link>
          </div>

          <div className="border-t border-slate-900 pt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Other Popular Travel Origins</h2>
            <div className="flex flex-wrap gap-4">
              {travelOrigins.filter(o => o.slug !== origin.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/travel-from/${other.slug}`}
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-800 px-6 py-3 rounded-xl text-slate-300 hover:text-amber-500 transition-all font-medium"
                >
                  {other.city} to Kili
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
