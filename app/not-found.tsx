import Link from "next/link";
import { Mountain, ArrowLeft, Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | KiliGo",
  description: "The page you are looking for does not exist. Browse our Kilimanjaro routes or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="bg-amber-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Mountain className="h-10 w-10 text-amber-500" />
        </div>
        <h1 className="text-7xl font-black text-white mb-4 font-display tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-slate-300 mb-4 uppercase tracking-tight">Trail Not Found</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          This path doesn't lead to the summit. The page you're looking for may have moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" /> Back to Base Camp
          </Link>
          <Link
            href="/routes"
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" /> Explore Routes
          </Link>
        </div>
      </div>
    </div>
  );
}
