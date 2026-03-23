"use client";

import Image from "next/image";
import Link from "next/link";
import { Mountain, Shield, Users, ArrowRight, CheckCircle2, ChevronRight, Mail, Phone, MapPin, Send, MessageCircle, Star } from "lucide-react";
import { climbingRoutes, faqs } from "@/lib/pseo-data";
import { motion, useScroll, useTransform } from "framer-motion";
import SuccessPredictor from "@/components/SuccessPredictor";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import ReviewSchema from "@/components/ReviewSchema";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/rugged_kilimanjaro_hero.webp"
            alt="Climb Mount Kilimanjaro Summit at Uhuru Peak during Sunrise"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAgAAkA4JZQCdAEO/hepgAAA/v3sv+H9Rf/L8CPWX5pH/kuBHaH84v/ufzn/a/8z9l/YA//7sA//+7AP/4AAAA=="
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-32 md:mt-40 lg:mt-48"
        >
          <h1 className="font-black tracking-tighter font-display uppercase italic leading-[0.9] drop-shadow-2xl flex flex-col items-center">
            <span className="text-amber-500 text-5xl md:text-7xl lg:text-8xl mb-2">Climb</span>
            <span className="text-white text-4xl md:text-6xl lg:text-7xl">Mount Kilimanjaro</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-14 max-w-3xl mx-auto leading-relaxed">
            We limit group sizes to ensure specialized attention and a <strong className="text-white font-bold">95%+ summit success rate</strong> across our primary <strong className="text-white font-bold">acclimatization</strong> routes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-amber-600/20 w-full sm:w-64"
            >
              Start Your Journey <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#routes"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold transition-all w-full sm:w-64 flex items-center justify-center"
            >
              View Routes
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 items-center"
          >
            <div className="flex items-center gap-3">
              <div className="bg-amber-500/20 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-white/80 text-sm font-bold uppercase tracking-widest">WFR Certified Guides</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-500/20 p-2 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-white/80 text-sm font-bold uppercase tracking-widest">95% Success Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-500/20 p-2 rounded-lg">
                <Users className="h-5 w-5 text-amber-500" />
              </div>
              <span className="text-white/80 text-sm font-bold uppercase tracking-widest">Nairobi Logistics Hub</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Climb With Me */}
      <section className="py-40 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tight">The Kilimanjaro Quest Advantage</h2>
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
                desc: "We limit group sizes to ensure specialized attention and a <strong class='text-white font-bold'>95%+ summit success rate</strong> across our primary <strong class='text-white font-bold'>acclimatization</strong> routes.",
                icon: Users,
              },
              {
                title: "Local Kenyan Expertise",
                desc: "Strategically located for Nairobi & Mombasa travelers, offering seamless border crossings and regional logistical support.",
                icon: Mountain,
              },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-slate-700/10 group-hover:text-amber-500/5 transition-colors">
                  <feature.icon className="w-32 h-32" />
                </div>
                <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors relative z-10">
                  <feature.icon className="h-8 w-8 text-amber-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10 font-display uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: feature.desc }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-40 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tight">Hiker Stories</h2>
            <p className="text-slate-400">Join 500+ adventurers who reached the roof of Africa with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                location: "London, UK",
                text: "The Lemosho route was breathtaking. Our lead guide, David, was so patient. Reaching Uhuru Peak at sunrise was the highlight of my life!",
                rating: 5,
                image: "/images/hiker-1.webp"
              },
              {
                name: "Mark Thompson",
                location: "Nairobi, Kenya",
                text: "Being an expat in Kenya, the logistics were so easy. The team handled everything from the Namanga border crossing to the summit. Highly recommended.",
                rating: 5,
                image: "/images/hiker-2.webp"
              },
              {
                name: "Elena Rodriguez",
                location: "Madrid, Spain",
                text: "I was worried about the altitude, but the 'pole-pole' pace and the quality of food kept me going. Such a professional team.",
                rating: 5,
                image: "/images/hiker-3.webp"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 rounded-3xl border border-slate-800 relative group hover:border-amber-500/30 transition-all overflow-hidden"
              >
                <div className="relative h-48 w-full group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={testimonial.image}
                    alt={`Hiker ${testimonial.name} sharing their experience with Kilimanjaro Quest trek`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>
                <div className="p-8 relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-white font-bold uppercase tracking-tight">{testimonial.name}</p>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 text-slate-800 group-hover:text-amber-500/10 transition-colors">
                    <MessageCircle className="w-12 h-12" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <ReviewSchema />
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight font-display italic">
                Will you reach <span className="text-amber-500">Uhuru Peak?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed italic">
                "98% of people who fail to <strong>climb Kilimanjaro</strong> do so because of poor route selection or insufficient <strong>high altitude acclimatization</strong> days."
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-amber-500/10 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-bold">1</span>
                  </div>
                  <p className="text-slate-200"><strong className="text-white">Scientific Accuracy:</strong> Our algorithm is based on decade-long summit success data from the <strong>Kilimanjaro National Park (KINAPA)</strong> and <strong>TANAPA</strong> authorities.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-amber-500/10 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-bold">2</span>
                  </div>
                  <p className="text-slate-200"><strong className="text-white">Personalized Tips:</strong> Get real-time advice on gear and preparation based on your experience level.</p>
                </div>
              </div>
            </motion.div>
            <div id="predictor">
              <SuccessPredictor />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="py-40 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tighter">Choose Your Path</h2>
              <p className="text-slate-400 max-w-2xl">From the classic 'Whiskey Route' to the quiet Northern Circuit, find the path that suits your pace.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {climbingRoutes.slice(0, 3).map((route, idx) => (
              <motion.div 
                key={route.slug} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 transition-all group"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-tight">{route.name}</h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Route Comparison Table - Scientific SEO Match */}
      <section className="py-40 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-display uppercase italic tracking-tighter">Route Comparison</h2>
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
      <section className="py-40 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Climbing <span className="text-amber-500">FAQs</span>
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
      <section className="py-40 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to stand on top of the world?</h2>
          <p className="text-xl text-amber-100 mb-10">Get a custom <strong>Kilimanjaro itinerary</strong> and quote for your <strong>summit quest</strong>. Our logistics hub in <strong>Nairobi</strong> and <strong>Moshi</strong> handles everything from gear to <strong>National Park permits</strong>.</p>
          <ContactForm 
            source="Homepage Bottom" 
            variant="light" 
            className="max-w-2xl mx-auto"
            footerClassName="text-amber-100/90"
          />
          <p className="mt-6 text-sm text-amber-100/80 font-medium">No spam. Only altitude and adventure.</p>
        </div>
      </section>
    </div>
  );
}
