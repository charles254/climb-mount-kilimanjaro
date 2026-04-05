"use client";

import Image from "next/image";
import Link from "next/link";
import { Mountain, Compass, Dumbbell, Shield, DollarSign, Cloud, Home, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { LazyMotion, domAnimation, m } from "framer-motion";

const clusterIcons = {
  routes: Compass,
  preparation: Dumbbell,
  gear: Mountain,
  health: Shield,
  costs: DollarSign,
  climb: Cloud,
  life: Home,
};

export default function UltimateGuide() {
  return (
    <LazyMotion features={domAnimation}>
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Panoramic view of Mount Kilimanjaro from Shira Plateau showing all five climate zones"
            fill
            priority
            className="object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-display uppercase italic tracking-tighter leading-none">
              The Ultimate Guide to <br />
              <span className="text-amber-500">Climbing Mount Kilimanjaro in 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Everything you need to know about planning, preparing, and successfully summiting the roof of Africa.
            </p>
          </m.div>
        </div>
      </section>

      {/* Table of Contents / Quick Navigation */}
      <section className="py-20 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {topicalClusters.map((cluster) => {
              const Icon = clusterIcons[cluster.slug as keyof typeof clusterIcons] || Compass;
              return (
                <Link
                  key={cluster.slug}
                  href={`#${cluster.slug}`}
                  className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:border-amber-500/50 hover:bg-slate-800 transition-all group"
                >
                  <Icon className="h-6 w-6 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{cluster.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 font-display uppercase italic tracking-tight">Your Summit Starts Here</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Climbing Mount Kilimanjaro is a life-changing expedition, but it requires meticulous planning. 
            As a 5,895-meter (19,341 ft) peak, it challenges you with five distinct climate zones and extreme altitude. 
            This guide is your central hub for every detail, from choosing the right route to the etiquette of tipping your porters.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-amber-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Cluster Sections */}
      {topicalClusters.map((cluster, idx) => {
        const Icon = clusterIcons[cluster.slug as keyof typeof clusterIcons] || Compass;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={cluster.slug}
            id={cluster.slug}
            className={`py-32 ${isEven ? 'bg-slate-900' : 'bg-slate-950'} border-t border-slate-800/50`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className={`flex flex-col lg:flex-row gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-3 bg-amber-500/10 px-4 py-2 rounded-full mb-6 border border-amber-500/20">
                    <Icon className="h-5 w-5 text-amber-500" />
                    <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">{cluster.name}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight font-display italic">
                    {cluster.description.split(',')[0]}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {cluster.description}
                  </p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cluster.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/${cluster.slug}/${article.slug}`}
                      className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:border-amber-500/30 hover:bg-slate-800/60 transition-all group relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center text-amber-500 text-xs font-black uppercase tracking-widest gap-2">
                          Read Strategy <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Icon className="h-16 w-16" />
                      </div>
                    </Link>
                  ))}
                  
                  {/* Internal Link Requirement */}
                  <div className="bg-amber-600 rounded-2xl p-6 flex flex-col justify-center items-center text-center text-white">
                    <p className="font-bold mb-4">Ready to book?</p>
                    <Link href="/contact" className="bg-white text-amber-600 px-6 py-2 rounded-lg font-black uppercase text-xs tracking-widest hover:bg-amber-50 transition-colors">
                      Start Your Climb
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer CTA */}
      <section className="py-32 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 font-display uppercase italic tracking-tight">The Roof of Africa Is Calling</h2>
          <p className="text-xl text-slate-400 mb-12">
            Don't leave your <strong className="text-white">Climb Mount Kilimanjaro</strong> success to chance. 
            Download our preparation checklist or talk to a specialist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
              Contact an Expert
            </Link>
            <Link href="/" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
    </LazyMotion>
  );
}
