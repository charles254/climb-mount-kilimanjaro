"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
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
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-amber-800/20 w-full sm:w-64"
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
  );
}
