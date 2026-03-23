"use client";

import Link from 'next/link';
import { Mountain, Menu, X, ChevronDown, Compass, Shield, Heart, Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Search from './Search';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const guideGroups = [
    {
      label: "Expertise",
      icon: <Compass className="h-4 w-4" />,
      items: [
        { label: "Climbing Routes", href: "/routes" },
        { label: "Best Time to Climb", href: "/climb" },
        { label: "Travel Logistics", href: "/travel-guide" }
      ]
    },
    {
      label: "Preparation",
      icon: <Shield className="h-4 w-4" />,
      items: [
        { label: "Gear Guide", href: "/gear" },
        { label: "Training & Prep", href: "/preparation" },
        { label: "Health & Safety", href: "/health" }
      ]
    },
    {
      label: "Experience",
      icon: <Heart className="h-4 w-4" />,
      items: [
        { label: "Costs & Budget", href: "/costs" },
        { label: "Life on Mountain", href: "/life" },
        { label: "Ultimate Guide", href: "/ultimate-guide" }
      ]
    }
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Mountain className="h-9 w-9 text-amber-500 transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-widest leading-none">KILIMANJARO</span>
                <span className="text-[10px] font-bold text-amber-500 tracking-[0.3em] uppercase">The Quest Awaits</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/routes" className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">Routes</Link>
            <Link href="/climb" className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">Seasons</Link>
            <Link href="/travel-guide" className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">Travel</Link>
            <Link href="/gear" className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">Gear</Link>
            <Link href="/about" className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">About</Link>
            
            {/* Guide Megamenu Trigger */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsGuideOpen(true)}
                className="flex items-center text-slate-300 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                Summit Guides
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${isGuideOpen ? 'rotate-180 text-amber-500' : ''}`} />
              </button>

              {/* Mega Dropdown */}
              <AnimatePresence>
              {isGuideOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseLeave={() => setIsGuideOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[640px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-8 origin-top"
                >
                  <div className="grid grid-cols-3 gap-8">
                    {guideGroups.map((group, idx) => (
                      <motion.div 
                        key={group.label} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.1 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-2 text-amber-500 font-black text-[10px] uppercase tracking-[0.2em] pb-2 border-b border-white/5">
                        {group.icon}
                        {group.label}
                      </div>
                      <div className="flex flex-col space-y-3">
                        {group.items.map((item) => (
                          <Link 
                            key={item.href}
                            href={item.href} 
                            className="text-slate-400 hover:text-white text-sm font-bold transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>

            <div className="pl-4 flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group border border-transparent hover:border-white/10"
                aria-label="Open search"
              >
                <SearchIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
              <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl shadow-amber-900/20 active:scale-95">
                Book Your Climb
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Open search"
            >
              <SearchIcon className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden bg-slate-900 overflow-hidden border-t border-white/5"
        >
          <div className="px-6 space-y-8 py-6 pb-10">
          {/* Main Mobile Links */}
          <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-8">
            <Link href="/routes" onClick={() => setIsOpen(false)} className="bg-slate-800/50 p-4 rounded-xl text-white font-black uppercase tracking-tighter text-xs text-center border border-white/5 italic">Routes</Link>
            <Link href="/climb" onClick={() => setIsOpen(false)} className="bg-slate-800/50 p-4 rounded-xl text-white font-black uppercase tracking-tighter text-xs text-center border border-white/5 italic">Seasons</Link>
            <Link href="/travel-guide" onClick={() => setIsOpen(false)} className="bg-slate-800/50 p-4 rounded-xl text-white font-black uppercase tracking-tighter text-xs text-center border border-white/5 italic">Travel</Link>
            <Link href="/gear" onClick={() => setIsOpen(false)} className="bg-slate-800/50 p-4 rounded-xl text-white font-black uppercase tracking-tighter text-xs text-center border border-white/5 italic">Gear</Link>
          </div>

          {/* Guide Groups Mobile */}
          {guideGroups.map((group) => (
            <div key={group.label} className="space-y-4">
              <div className="text-amber-500 font-black text-[10px] uppercase tracking-[0.2em]">{group.label}</div>
              <div className="grid grid-cols-1 gap-3">
                {group.items.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="text-white text-lg font-black tracking-tight flex items-center justify-between group"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 -rotate-90 text-slate-600 group-hover:text-amber-500" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link 
            href="/contact" 
            className="block w-full bg-amber-600 text-white py-5 rounded-2xl text-center text-sm font-black uppercase tracking-[0.2em]"
            onClick={() => setIsOpen(false)}
          >
            Book Your Climb
          </Link>
        </div>
        </motion.div>
      )}
      </AnimatePresence>

      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
