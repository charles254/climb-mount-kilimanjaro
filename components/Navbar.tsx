"use client";

import Link from 'next/link';
import { Mountain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold text-white tracking-tight">KILI TRAILBLAZERS</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/routes/rongai" className="text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Routes</Link>
              <Link href="/when-to-climb/january" className="text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">When to Climb</Link>
              <Link href="/travel-from/nairobi" className="text-slate-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Travel Guide</Link>
              <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all transform hover:scale-105">Book Your Climb</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/routes/rongai" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Routes</Link>
            <Link href="/when-to-climb/january" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">When to Climb</Link>
            <Link href="/travel-from/nairobi" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Travel Guide</Link>
            <Link href="/contact" className="bg-amber-600 text-white block px-3 py-4 rounded-md text-center text-base font-bold">Book Your Climb</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
