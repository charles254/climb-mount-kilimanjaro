"use client";

import Link from "next/link";
import { topicalClusters } from "@/lib/topical-cluster-data";
import { articleContentRegistry } from "@/lib/articles/registry";
import { ArrowLeft, ChevronRight, Mountain, Shield, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQSchema from "@/components/FAQSchema";
import CostBreakdownTable from "./CostBreakdownTable";


interface Props {
  slug: string;
}

export default function ClusterArticleView({ slug }: Props) {
  // Find the article across all clusters
  let currentArticle = null;
  let currentCluster = null;

  for (const cluster of topicalClusters) {
    const article = cluster.articles.find(a => a.slug === slug);
    if (article) {
      currentArticle = article;
      currentCluster = cluster;
      break;
    }
  }

  if (!currentArticle || !currentCluster) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
      </div>
    );
  }

  const otherArticles = currentCluster.articles.filter(a => a.slug !== slug);
  const ArticleComponent = articleContentRegistry[slug];

  // Map slugs to generated images
  const imageMap: Record<string, string> = {
    'training-plan': 'kilimanjaro_training_hiker_1773766461652.png',
    'ultimate-packing-list': 'kilimanjaro_gear_flatlay_packing_list_1773766481421.png',
    'ams-guide': 'kilimanjaro_ams_medical_kit_1773766504435.png',
    'diamox-guide': 'kilimanjaro_ams_medical_kit_1773766504435.png',
    'best-route-beginners': 'images/articles/beginner-route-guide.png',
    'lemosho-vs-machame': 'images/articles/lemosho-vs-machame.png',
    'marangu-guide': 'images/articles/marangu-guide.png',
    'northern-circuit-guide': 'images/articles/northern-circuit-guide.png',
    'umbwe-guide': 'umbwe-guide.png',
    'cost-breakdown': 'images/articles/cost-breakdown.png',
    'cheap-tours-danger': 'images/articles/cheap-tours-danger.png',
    'tipping-guide': 'images/articles/tipping-guide.png',
    'best-time': 'images/articles/best-time-guide.png',
    'rainy-season': 'images/articles/northern-circuit-guide.png',
    'athlete-requirement': 'kilimanjaro_training_hiker_1773766461652.png',
    'mental-preparation': 'images/hiker-1.png',
    'best-boots': 'kilimanjaro_gear_flatlay_packing_list_1773766481421.png',
    'how-hard-is-it': 'images/hiker-2.png',
    'climate-zones': 'images/articles/northern-circuit-guide.png',
    'day-in-life': 'images/hiker-1.png',
    'food-and-nutrition': 'images/articles/northern-circuit-guide.png',
    'toilets-and-hygiene': 'images/hiker-2.png',
    'porters-role': 'images/hiker-3.png',
    'how-to-get-there': 'images/articles/northern-circuit-guide.png',
    'visa-requirements': 'images/articles/best-time-guide.png',
    'summit-night-gear': 'kilimanjaro_gear_flatlay_packing_list_1773766481421.png',
    'renting-vs-buying': 'kilimanjaro_training_hiker_1773766461652.png',
    'sleeping-bags': 'kilimanjaro_gear_flatlay_packing_list_1773766481421.png'
  };

  const articleImage = imageMap[slug];
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <article className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={slug} // Force reanimation on slug change
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display uppercase italic tracking-tighter leading-tight">
              {currentArticle.title}
            </h1>

            {currentArticle.author && (
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/5">
                <div className="bg-amber-500/10 h-10 w-10 rounded-full flex items-center justify-center border border-amber-500/20">
                  <Mountain className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-widest">{currentArticle.author.name}</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{currentArticle.author.role}</p>
                </div>
              </div>
            )}
            
            <div className="prose prose-invert prose-amber max-w-none text-slate-200">
              <p className="text-xl text-slate-300 leading-relaxed mb-10 italic border-l-4 border-amber-500 pl-6 py-2">
                {currentArticle.description}
              </p>

              {articleImage && (
                <div className="relative w-full h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image 
                    src={`/${articleImage}`} 
                    alt={currentArticle.title} 
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
              )}

              <div className="text-slate-300">
                {ArticleComponent ? (
                  <ArticleComponent />
                ) : (
                <div className="space-y-12">
                  <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 mb-12">
                    <h2 className="text-white text-2xl font-bold mb-4">Why This Matters for Your Climb</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Every detail in this guide is designed to help you successfully <Link href="/ultimate-guide" className="text-amber-500 hover:underline font-bold">climb Mount Kilimanjaro</Link>. 
                      Whether you're a beginner or an experienced hiker, understanding {currentCluster.name.toLowerCase()} is crucial for your safety and summit success.
                    </p>
                  </div>

                  <section>
                    <h2 className="text-white text-3xl font-bold mb-6">Expert Insight</h2>
                    <p className="text-slate-400 leading-relaxed">
                      [Article Content Placeholder] - This information is critical for those planning their <strong>Kilimanjaro expedition</strong>. 
                      We recommend pairing this knowledge with a proper 12-week training plan and high-quality gear.
                    </p>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                    <div className="p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                      <CheckCircle2 className="h-8 w-8 text-amber-500 mb-4" />
                      <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Key Takeaway</h3>
                      <p className="text-slate-400 text-sm italic">"Preparation is the difference between a summit photo and an early descent."</p>
                    </div>
                    <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                      <Shield className="h-8 w-8 text-amber-500 mb-4" />
                      <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Safety Priority</h3>
                      <p className="text-slate-400 text-sm italic">Always listen to your lead guide and follow the 'pole-pole' (slowly) pace.</p>
                    </div>
                  </div>
                </div>
              )}
              </div>
              {slug === "cost-breakdown" && <CostBreakdownTable />}
            </div>
          </motion.div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="sticky top-8 space-y-8">
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
                <Mountain className="h-5 w-5 text-amber-500" /> More on {currentCluster.name}
              </h3>
              <div className="space-y-4">
                {otherArticles.map(article => (
                  <Link 
                    key={article.slug}
                    href={`/${currentCluster.slug}/${article.slug}`}
                    className="block group"
                  >
                    <h4 className="text-slate-400 group-hover:text-amber-500 transition-colors text-sm font-medium leading-tight">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-amber-600 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 leading-tight uppercase italic">Ready to stand on Uhuru Peak?</h3>
                <p className="text-amber-100 mb-8 font-medium">Get a custom itinerary and expert guide for your 2026 climb.</p>
                <Link href="/contact" className="bg-white text-amber-600 w-full inline-block text-center py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-amber-50 transition-colors">
                  Contact Us
                </Link>
              </div>
              <Mountain className="absolute -bottom-10 -right-10 h-40 w-40 text-amber-500/20 rotate-12 group-hover:scale-110 transition-transform" />
            </div>
            
            {currentArticle.faqs && (
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
                <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
                   Quick Article FAQ
                </h3>
                <div className="space-y-4">
                  {currentArticle.faqs.map(faq => (
                    <div key={faq.question} className="border-b border-white/5 pb-4 last:border-0">
                      <p className="text-white text-xs font-bold mb-1">{faq.question}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {currentArticle.faqs && <FAQSchema faqs={currentArticle.faqs} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": currentArticle.title,
            "description": currentArticle.description,
            "author": {
              "@type": "Person",
              "name": currentArticle.author?.name || "Kilimanjaro Quest Expert"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kilimanjaro Quest",
              "logo": {
                "@type": "ImageObject",
                "url": "http://localhost:3003/icon.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `http://localhost:3003/${currentCluster.slug}/${currentArticle.slug}`
            }
          })
        }}
      />

      <section className="bg-slate-900 py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-6 font-display uppercase italic tracking-tight">Plan Your Journey</h2>
          <ContactForm source={`Cluster Article: ${currentArticle.title}`} />
        </div>
      </section>
    </div>
  );
}
