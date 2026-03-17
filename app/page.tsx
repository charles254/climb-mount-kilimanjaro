import Image from "next/image";
import Link from "next/link";
import { Mountain, Shield, Users, ArrowRight, CheckCircle2, ChevronRight, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { climbingRoutes } from "@/lib/pseo-data";
import SuccessPredictor from "@/components/SuccessPredictor";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Mount Kilimanjaro Summit at Sunrise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            <span className="text-amber-500">Climb Mount Kilimanjaro</span>: The Ultimate Guided Experience
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join the best-rated expedition team to <strong>Climb Mount Kilimanjaro</strong>. With a 95%+ success rate and local Kenyan expertise, we offer the safest and most immersive treks to the roof of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#routes"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold transition-all"
            >
              View Routes
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Climb With Me */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Kili Trailblazers Advantage</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "WFR Certified Safety",
                desc: "All our guides are Wilderness First Responder certified, with advanced medical kits and emergency oxygen on every trek.",
                icon: Shield,
              },
              {
                title: "Small Groups, High Success",
                desc: "We limit group sizes to ensure personalized attention and a 95%+ summit success rate across our primary routes.",
                icon: Users,
              },
              {
                title: "Local Kenyan Expertise",
                desc: "Strategically located for Nairobi & Mombasa travelers, offering seamless border crossings and regional logistical support.",
                icon: Mountain,
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all group">
                <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <feature.icon className="h-8 w-8 text-amber-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
                Will you reach <span className="text-amber-500">Uhuru Peak?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed italic">
                "98% of people who fail on Kilimanjaro do so because of poor route selection or insufficient acclimatization days."
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-amber-500/10 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-bold">1</span>
                  </div>
                  <p className="text-slate-200"><strong className="text-white">Scientific Accuracy:</strong> Our algorithm is based on decade-long summit success data from the Kilimanjaro National Park (KINAPA).</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amber-500/10 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-bold">2</span>
                  </div>
                  <p className="text-slate-200"><strong className="text-white">Personalized Tips:</strong> Get real-time advice on gear and preparation based on your experience level.</p>
                </div>
              </div>
            </div>
            <div id="predictor">
              <SuccessPredictor />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Path</h2>
              <p className="text-slate-400 max-w-2xl">From the classic 'Whiskey Route' to the quiet Northern Circuit, find the path that suits your pace.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {climbingRoutes.slice(0, 3).map((route) => (
              <div key={route.slug} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 transition-all group">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{route.name}</h3>
                    <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {route.success_rate} Success
                    </span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                      <span>{route.duration} duration</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                      <span>{route.difficulty} difficulty</span>
                    </div>
                  </div>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-semibold transition-all group-hover:bg-amber-600"
                  >
                    View Experience <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to stand on top of the world?</h2>
          <p className="text-xl text-amber-100 mb-10">Get a custom itinerary and quote for your Kilimanjaro climb. Our team in Nairobi will handle everything.</p>
          <ContactForm 
            source="Homepage Bottom" 
            variant="light" 
            className="max-w-2xl mx-auto"
          />
          <p className="mt-6 text-sm text-amber-200">No spam. Only altitude and adventure.</p>
        </div>
      </section>
    </div>
  );
}
