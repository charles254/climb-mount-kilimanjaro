import React from 'react';
import { Plane, Bus, MapPin, Info, CheckCircle2, AlertTriangle, Globe } from 'lucide-react';

export const HowToGetThereArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "The journey to the roof of Africa starts with a single flight to JRO."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Plane className="text-amber-500" /> Flying into Kilimanjaro (JRO)
      </h2>
      <p>
        The most direct way to get to Mount Kilimanjaro is to fly into **Kilimanjaro International Airport (JRO)**. It is located mid-way between Arusha and Moshi, the two main "gateway" towns for the mountain.
      </p>

      <div className="my-12 grid md:grid-cols-2 gap-8 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Globe className="text-amber-500" /> International Routes
          </h3>
          <p className="text-sm">
            Major airlines with direct flights into JRO include KLM (via Amsterdam), Qatar Airways (via Doha), and Ethiopian Airlines (via Addis Ababa).
          </p>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="text-amber-500" /> Regional Hubs
          </h3>
          <p className="text-sm">
            If you fly into Nairobi (NBO) or Dar es Salaam (DAR), you can take a low-cost carrier like Precision Air, Air Tanzania, or Kenya Airways for the short hop to JRO.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">Transferring from Nairobi (NBO)</h2>
      <p>
        Many climbers choose to fly into Nairobi, Kenya, as flights are often cheaper. From Nairobi, you have two options:
      </p>
      <ul className="text-slate-400">
        <li><strong>A short flight:</strong> (45 minutes) from NBO or Wilson Airport directly to JRO.</li>
        <li><strong>The Shuttle Bus:</strong> (6 hours) Arusha Express or Riverside Shuttle. This is a common and scenic route that crosses the border at Namanga.</li>
      </ul>

      <div className="bg-amber-950/20 border border-amber-500/30 p-8 my-16 rounded-3xl">
        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 italic uppercase">
          <AlertTriangle className="w-5 h-5 text-amber-500" /> Important: Visa Arrival
        </h4>
        <p className="text-slate-300 leading-relaxed mb-0">
          If you fly into Nairobi and then take a bus to Tanzania, you will need **TWO visas**: a Kenyan Transit Visa and a Tanzanian Entry Visa. Coordinate this ahead of time to avoid long delays at the Namanga border.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white">Airport Transfers</h2>
      <p>
        At KiliGo, we normally include private airport transfers in our packages. A guide will meet you at the arrivals gate with a sign and take you directly to your hotel in Moshi.
      </p>

      <p className="text-center italic text-slate-500 mb-12">
        Need help with travel requirements? Check our <a href="/costs/visa-requirements" className="text-amber-500 hover:underline">Visa Requirements Guide</a>.
      </p>
    </article>
  );
};
