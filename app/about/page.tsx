import { Metadata } from "next";
import { Mountain, Shield, Users, Award, MapPin, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About KiliGo — 500+ Kilimanjaro Summits Since 2018",
  description: "Meet KiliGo, a Nairobi-based Kilimanjaro expedition company. WFR-certified guides, 500+ summits, KPAP-certified porter welfare, and ethical small groups.",
  keywords: "about KiliGo, kilimanjaro guides nairobi, kilimanjaro tour company, WFR certified guides, kilimanjaro expedition team, KPAP certified, ethical kilimanjaro operator",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About KiliGo — Nairobi Kilimanjaro Guides With 500+ Successful Summits",
    description: "Meet KiliGo, a Nairobi-based Kilimanjaro expedition company with WFR-certified guides and 500+ successful summits.",
    url: "/about",
    type: "website",
    images: [{ url: "/images/rugged_kilimanjaro_hero.webp", width: 1200, height: 630, alt: "KiliGo expedition team at Uhuru Peak summit on Mount Kilimanjaro" }],
  },
  twitter: {
    title: "About KiliGo — 500+ Kilimanjaro Summits Since 2018",
    description: "Meet KiliGo, a Nairobi-based Kilimanjaro expedition company with WFR-certified guides.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About KiliGo",
            "description": "Learn about KiliGo, the Nairobi-based expedition company specializing in guided Kilimanjaro treks.",
            "url": `${SITE_URL}/about`,
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "KiliGo",
              "foundingDate": "2018",
              "foundingLocation": {
                "@type": "Place",
                "name": "Nairobi, Kenya"
              },
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 15,
                "maxValue": 30
              },
              "areaServed": "Mount Kilimanjaro, Tanzania",
              "slogan": "Summit Awaits"
            }
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter font-display">
            About <span className="text-amber-500">KiliGo</span>
            <span className="block text-2xl md:text-4xl text-slate-400 mt-2 not-italic tracking-tight">Your Kilimanjaro Expedition Team</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We are a Nairobi-based expedition company built by climbers, for climbers. Every trek we lead is a personal quest to get you safely to the roof of Africa.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter font-display">Our Story</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  KiliGo was born from a simple frustration: too many climbers were failing to summit because of poorly planned itineraries, underpaid guides, and cut-rate operators who prioritized volume over safety.
                </p>
                <p>
                  Founded in Nairobi in 2018, we set out to build a different kind of expedition company — one where <strong className="text-white">every guide is WFR-certified</strong>, every route is chosen for optimal acclimatization, and every climber gets the attention they deserve.
                </p>
                <p>
                  Our Nairobi base gives us a unique advantage: seamless logistics for East African travelers, direct relationships with KINAPA authorities, and a deep understanding of the Namanga corridor that most international operators lack.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden border border-slate-800">
              <Image
                src="/images/rugged_kilimanjaro_hero.webp"
                alt="KiliGo expedition team celebrating at the Uhuru Peak summit sign on Mount Kilimanjaro"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Successful Climbs", icon: Mountain },
              { value: "95%", label: "Summit Success Rate", icon: Award },
              { value: "100%", label: "WFR Certified Guides", icon: Shield },
              { value: "7+", label: "Years of Operations", icon: MapPin },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center group hover:border-amber-500/30 transition-all">
                <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-colors">
                  <stat.icon className="h-6 w-6 text-amber-500 group-hover:text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-amber-500 mb-2 font-display">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter font-display">What We Stand For</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First, Always",
                desc: "Every guide carries emergency oxygen, a pulse oximeter, and a satellite communicator. We never compromise on altitude protocols — if a climber shows signs of severe AMS, we descend. No exceptions.",
                icon: Shield,
              },
              {
                title: "Fair Wages, Ethical Treks",
                desc: "Our porters earn above KPAP-recommended wages, carry no more than 15kg, and receive proper meals and shelter. We believe ethical treatment of crew is non-negotiable.",
                icon: Heart,
              },
              {
                title: "Small Groups, Big Summits",
                desc: "We cap groups at 8 climbers per lead guide. This means more personalized pace management, better acclimatization monitoring, and a stronger team dynamic on summit night.",
                icon: Users,
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all">
                <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter font-display">Meet the Team</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Mwangi",
                role: "Lead Expedition Guide",
                bio: "12+ years guiding on Kilimanjaro. WFR certified. Has summited over 200 times across all 5 major routes.",
                image: "/images/team-david.webp",
              },
              {
                name: "Dr. Sarah Tanui",
                role: "High-Altitude Physiologist",
                bio: "Specializes in altitude medicine and acclimatization protocols. Designs our route-specific health monitoring systems.",
                image: "/images/team-sarah-t.webp",
              },
              {
                name: "Sarah Kimani",
                role: "Gear & Logistics Specialist",
                bio: "Manages equipment quality, porter welfare, and the Nairobi-Moshi logistics corridor. KPAP certified.",
                image: "/images/team-sarah-k.webp",
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-amber-500/30 transition-all">
                <div className="relative h-56 w-full">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at KiliGo`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{member.name}</h3>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-24">
          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">
            <h2 className="text-2xl font-black text-white mb-8 uppercase italic tracking-tighter font-display">Certifications & Affiliations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Wilderness First Responder (WFR) Certified — all lead guides",
                "KPAP (Kilimanjaro Porters Assistance Project) — partner operator",
                "KINAPA (Kilimanjaro National Park Authority) — licensed operator",
                "TATO (Tanzania Association of Tour Operators) — registered member",
                "Leave No Trace — trained and committed to minimal-impact trekking",
                "Emergency evacuation insurance — carried on every expedition",
              ].map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-amber-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 uppercase italic font-display">Ready to join the quest?</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto font-medium">
            Talk to our team about your fitness, schedule, and goals — we will match you with the perfect route and guide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl border border-slate-800/50 uppercase tracking-widest text-sm"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
