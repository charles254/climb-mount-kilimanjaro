import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6 text-amber-500" />
              <span className="text-lg font-bold text-white tracking-tight">KILI TRAILBLAZERS</span>
            </div>
            <p className="text-sm leading-relaxed">
              Expert-led Kilimanjaro treks with a unique Kenyan perspective. Safety, success, and sustainability at the heart of every climb.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/routes/machame" className="hover:text-amber-500 transition-colors">Climbing Routes</Link></li>
              <li><Link href="/when-to-climb/february" className="hover:text-amber-500 transition-colors">Best Time to Climb</Link></li>
              <li><Link href="/travel-from/nairobi" className="hover:text-amber-500 transition-colors">Travel Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2"><Mail className="h-4 w-4 text-amber-500" /> <span>info@kilitrailblazers.com</span></li>
              <li className="flex items-center space-x-2"><Phone className="h-4 w-4 text-amber-500" /> <span>+254 712 345 678</span></li>
              <li className="flex items-center space-x-2"><MapPin className="h-4 w-4 text-amber-500" /> <span>Nairobi, Kenya</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-amber-500 cursor-pointer" />
              <Facebook className="h-5 w-5 hover:text-amber-500 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-amber-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Kili Trailblazers. All rights reserved. Locally owned in Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
