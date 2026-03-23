"use client";

import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, ArrowRight, Mountain, FileText, Compass, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { climbingRoutes } from "@/lib/pseo-data";
import { topicalClusters } from "@/lib/topical-cluster-data";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "route" | "article";
}

export default function Search({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const qTokens = q.split(/\s+/).filter(t => t.length > 0);
    const results: (SearchResult & { score: number })[] = [];

    const getScore = (title: string, desc: string, slug: string) => {
      let score = 0;
      const lowerTitle = title.toLowerCase();
      const lowerDesc = desc.toLowerCase();
      
      qTokens.forEach(token => {
        if (lowerTitle.includes(token)) score += 10;
        if (lowerDesc.includes(token)) score += 3;
        if (slug.toLowerCase().includes(token)) score += 5;
      });

      // Bonus for exact multi-word match
      if (lowerTitle.includes(q)) score += 20;
      if (lowerDesc.includes(q)) score += 10;
      
      return score;
    };

    // Search Routes
    climbingRoutes.forEach(route => {
      const score = getScore(route.name, route.description, route.slug);
      if (score > 0) {
        results.push({
          title: route.name,
          description: route.description,
          href: `/routes/${route.slug}`,
          type: "route",
          score
        });
      }
    });

    // Search Articles
    topicalClusters.forEach(cluster => {
      cluster.articles.forEach(article => {
        const score = getScore(article.title, article.description, article.slug);
        if (score > 0) {
          results.push({
            title: article.title,
            description: article.description,
            href: `/${cluster.slug}/${article.slug}`,
            type: "article",
            score
          });
        }
      });
    });

    // Sort by score and take top matches
    const matches = results
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...rest }) => rest);

    setResults(matches.slice(0, 8));
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60]"
          />

          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl z-[70] overflow-hidden"
          >
            <div className="p-6 border-b border-white/5 flex items-center gap-4">
              <SearchIcon className="h-6 w-6 text-amber-500" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search routes, gear, preparation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow bg-transparent border-none outline-none text-white text-xl placeholder:text-slate-600 font-medium"
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full text-slate-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {query === "" ? (
                <div className="p-8 text-center">
                  <div className="bg-slate-800/50 h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5">
                    <Compass className="h-8 w-8 text-slate-600" />
                  </div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Ready for Search</h4>
                  <p className="text-slate-500 text-sm">Type anything related to Kilimanjaro to find expert guides.</p>
                  
                  <div className="mt-12 grid grid-cols-2 gap-3 text-left">
                    {["Lemosho Route", "Packing List", "Altitude Sickness", "Best Time"].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="p-3 bg-slate-800/30 border border-white/5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-tight hover:border-amber-500/50 hover:text-white transition-all flex items-center justify-between group"
                      >
                        {tag}
                        <History className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2">
                  <p className="px-2 pb-2 text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] animate-pulse">
                    Found {results.length} results
                  </p>
                  {results.map((result, idx) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={onClose}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                    >
                      <div className="bg-slate-800 h-10 w-10 rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0 group-hover:bg-amber-500/10 transition-colors">
                        {result.type === "route" ? (
                          <Mountain className="h-5 w-5 text-amber-500" />
                        ) : (
                          <FileText className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h5 className="text-white font-bold mb-1 group-hover:text-amber-500 transition-colors">{result.title}</h5>
                        <p className="text-slate-500 text-sm line-clamp-1">{result.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-700 group-hover:text-amber-500 transition-transform group-hover:translate-x-1 self-center" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-slate-500 italic">No matches found for "{query}"</p>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-slate-950/50 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 border border-white/5 px-2 py-1 rounded bg-slate-900"><span className="text-slate-400">ESC</span> to close</span>
                <span className="flex items-center gap-1.5 border border-white/5 px-2 py-1 rounded bg-slate-900"><span className="text-slate-400">↵</span> to select</span>
              </div>
              <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.3em]">Summit Search v1.0</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
