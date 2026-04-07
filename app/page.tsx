import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { climbingRoutes, faqs } from "@/lib/pseo-data";
import FAQSchema from "@/components/FAQSchema";
import ReviewSchema from "@/components/ReviewSchema";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ContactForm"));
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"));
import HomeHero from "@/components/HomeHero";
import { FeaturesSection, TestimonialsGrid, QuizSection, RouteCards } from "@/components/HomeAnimatedSections";

export const metadata: Metadata = {
  title: "Climb Kilimanjaro 2026 — 95% Summit Rate | KiliGo",
  description: "Book a guided Kilimanjaro trek for 2026. WFR-certified local guides, 7-9 day acclimatization routes, and free custom itinerary from Nairobi.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Climb Mount Kilimanjaro in 2026 — Guided Treks With 95% Summit Rate",
    description: "Book a guided Kilimanjaro climb with WFR-certified local guides. Small groups, 7-9 day routes, 95% summit success, and Nairobi pickup included.",
    images: [{ url: "/images/rugged_kilimanjaro_hero.webp", width: 1200, height: 630, alt: "Climbers on the summit ridge of Mount Kilimanjaro at sunrise with Mawenzi Peak in background" }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HomeHero />

      {/* Why Climb With Me */}
      <section className="py-40 bg-slate-900 cv-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tight">Why Climb Kilimanjaro With KiliGo</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto" />
          </div>
          <FeaturesSection />
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-40 bg-slate-950 border-y border-slate-800 cv-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tight">Kilimanjaro Summit Reviews & Hiker Stories</h2>
            <p className="text-slate-400">Join 500+ adventurers who reached the roof of Africa with us.</p>
          </div>
          <TestimonialsGrid />
          <ReviewSchema />
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-40 bg-slate-900 relative overflow-hidden cv-auto">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuizSection />
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="py-40 bg-slate-950 cv-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tighter">Choose Your Kilimanjaro Route</h2>
              <p className="text-slate-400 max-w-2xl">From the classic &apos;Whiskey Route&apos; to the quiet Northern Circuit, find the path that suits your pace.</p>
            </div>
          </div>
          <RouteCards />
        </div>
      </section>

      {/* Route Comparison Table - Scientific SEO Match */}
      <section className="py-40 bg-slate-900 cv-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tighter">Kilimanjaro Route Comparison Table</h2>
            <p className="text-slate-400">A data-driven breakdown of the most popular paths to the summit.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/50">
                  <th className="p-6 text-sm font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Route Name</th>
                  <th className="p-6 text-sm font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Days</th>
                  <th className="p-6 text-sm font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Success Rate</th>
                  <th className="p-6 text-sm font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Difficulty</th>
                  <th className="p-6 text-sm font-bold text-amber-500 uppercase tracking-widest border-b border-slate-800">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {climbingRoutes.slice(0, 5).map((route) => (
                  <tr key={route.slug} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold text-white">{route.name}</td>
                    <td className="p-6 text-slate-300">{route.duration}</td>
                    <td className="p-6">
                      <span className="text-amber-500 font-bold">{route.success_rate}</span>
                    </td>
                    <td className="p-6 text-slate-300">{route.difficulty}</td>
                    <td className="p-6 text-slate-400 text-sm italic">{route.best_for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-slate-950 relative cv-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Kilimanjaro Climbing <span className="text-amber-500">FAQs</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know about your Kilimanjaro expedition.
            </p>
          </div>

          <FAQAccordion items={faqs} />
          <FAQSchema faqs={faqs} />

          <div className="mt-16 p-8 bg-slate-950 rounded-2xl border border-slate-800 text-center">
            <p className="text-slate-300 mb-4">Have more specific questions about your group or dates?</p>
            <Link
              href="/contact"
              className="text-amber-500 font-bold uppercase tracking-widest hover:text-amber-400 transition-colors flex items-center justify-center gap-2"
            >
              Ask an Expert Directly <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-40 bg-amber-800 cv-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start Planning Your Kilimanjaro Climb</h2>
          <p className="text-xl text-white mb-10">Get a custom <strong>Kilimanjaro itinerary</strong> and quote for your <strong>summit journey</strong>. Our logistics hub in <strong>Nairobi</strong> and <strong>Moshi</strong> handles everything from gear to <strong>National Park permits</strong>.</p>
          <ContactForm
            source="Homepage Bottom"
            variant="light"
            className="max-w-2xl mx-auto"
            footerClassName="text-white"
          />
          <p className="mt-6 text-sm text-white font-medium">No spam. Only altitude and adventure.</p>
        </div>
      </section>
    </div>
  );
}
