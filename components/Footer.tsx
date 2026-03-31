import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
              <Mountain className="h-8 w-8 text-amber-500 transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-widest leading-none">KILIGO</span>
                <span className="text-[10px] font-bold text-amber-500 tracking-[0.3em] uppercase">Summit Awaits</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-8 italic">
              The premier resource for <strong className="text-white">high-altitude expeditions</strong>. We provide the data, gear guides, and tactical expertise for a successful <strong className="text-white">summit journey</strong>.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Follow us on Instagram" className="bg-slate-900 p-2.5 rounded-lg hover:text-amber-500 transition-all border border-white/5 shadow-xl">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Follow us on Facebook" className="bg-slate-900 p-2.5 rounded-lg hover:text-amber-500 transition-all border border-white/5 shadow-xl">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Follow us on Twitter" className="bg-slate-900 p-2.5 rounded-lg hover:text-amber-500 transition-all border border-white/5 shadow-xl">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div>
            <h3 className="text-amber-500 font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Expertise</h3>
            <ul className="grid grid-cols-1 gap-4 text-sm font-bold">
              <li><Link href="/routes" className="text-slate-300 hover:text-white transition-colors">Climbing Routes</Link></li>
              <li><Link href="/climb" className="text-slate-300 hover:text-white transition-colors">Best Time to Climb</Link></li>
              <li><Link href="/travel-guide" className="text-slate-300 hover:text-white transition-colors">Travel Logistics</Link></li>
            </ul>
          </div>

          {/* Column 3: Prep */}
          <div>
            <h3 className="text-amber-500 font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Preparation</h3>
            <ul className="grid grid-cols-1 gap-4 text-sm font-bold">
              <li><Link href="/gear" className="text-slate-300 hover:text-white transition-colors">Gear Guide</Link></li>
              <li><Link href="/preparation" className="text-slate-300 hover:text-white transition-colors">Training & Prep</Link></li>
              <li><Link href="/health" className="text-slate-300 hover:text-white transition-colors">Health & Safety</Link></li>
            </ul>
          </div>

          {/* Column 4: Experience */}
          <div>
            <h3 className="text-amber-500 font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Experience</h3>
            <ul className="grid grid-cols-1 gap-4 text-sm font-bold">
              <li><Link href="/costs" className="text-slate-300 hover:text-white transition-colors">Costs & Budget</Link></li>
              <li><Link href="/life" className="text-slate-300 hover:text-white transition-colors">Life on Mountain</Link></li>
              <li><Link href="/ultimate-guide" className="text-slate-300 hover:text-white transition-colors">Ultimate Guide</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Book Your Summit</Link></li>
            </ul>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-500/50" />
              95% Success Rate
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-500/50" />
              Certified Guides
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase font-bold tracking-widest text-slate-400">
            <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
            <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            <span>&copy; {new Date().getFullYear()} KILIGO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
