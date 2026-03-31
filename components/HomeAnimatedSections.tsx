"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Mountain, Shield, Users, CheckCircle2, ChevronRight, MessageCircle, Star } from "lucide-react";
import { climbingRoutes } from "@/lib/pseo-data";
import { motion } from "framer-motion";

const SuccessPredictor = dynamic(() => import("@/components/SuccessPredictor"), { ssr: false });

export function FeaturesSection() {
  const features = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {features.map((feature, idx) => (
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
  );
}

const testimonials = [
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
];

export function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, idx) => (
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
              alt={`Hiker ${testimonial.name} sharing their experience with KiliGo trek`}
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
            <p className="text-slate-300 italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
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
  );
}

export function QuizSection() {
  return (
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
          &ldquo;98% of people who fail to <strong>climb Kilimanjaro</strong> do so because of poor route selection or insufficient <strong>high altitude acclimatization</strong> days.&rdquo;
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
  );
}

export function RouteCards() {
  return (
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
  );
}
