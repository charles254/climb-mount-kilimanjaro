import React from 'react';
import Link from 'next/link';
import { Package, ShieldAlert, Thermometer, CheckCircle2, CloudRain, Sun, Wind, Scale, Mountain, Footprints } from 'lucide-react';

export const PackingListArticle = () => (
  <div className="space-y-12">
    <section className="prose prose-invert prose-amber max-w-none">
      <p className="text-xl text-slate-300 leading-relaxed mb-10 italic border-l-4 border-amber-500 pl-6 py-2">
        Packing for Kilimanjaro is a high-stakes balancing act. You must prepare for equatorial humidity, torrential rain, and arctic summit storms—all while staying within the strict 15kg (33lb) weight limit for your porter's duffel bag. This <Link href="/" className="text-amber-500 hover:underline font-bold">climb Mount Kilimanjaro</Link> packing list is the definitive guide based on over 1,000 successful expeditions.
      </p>

      <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">The Golden Rule: The 5-Layer System</h2>
      <p className="text-slate-400 leading-relaxed mb-10">
        On Kilimanjaro, "cotton is rotten." You will pass through five distinct climate zones in one week. Your clothing system must be modular to manage sweat (to prevent chilling) and to provide extreme insulation during the midnight summit push. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-amber-500/10 p-3 rounded-xl">
              <Thermometer className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight italic">Thermal Management</h3>
          </div>
          <div className="text-slate-400 text-sm leading-relaxed">
            <ul className="space-y-4 list-none p-0 m-0">
              <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 shrink-0" /> <span><strong>Base Layers:</strong> Moisture-wicking (Merino Wool is best). You need two sets—one for hiking, one for camping.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 shrink-0" /> <span><strong>Mid Layers:</strong> Insulating "fleece" or "softshell" jackets to trap body heat.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 shrink-0" /> <span><strong>Outer Shell:</strong> Waterproof and windproof layers (Gore-Tex or similar).</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-red-500/20 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-500/10 p-3 rounded-xl">
              <ShieldAlert className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight italic">The Weight Limit</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed italic mb-6">
            "Your main duffel bag will be carried by a porter and is strictly limited to 15kg (33 lbs). This is an industry-wide ethical standard set by the Kilimanjaro Porters Assistance Project (KPAP)."
          </p>
          <div className="flex items-center gap-2 text-amber-500 font-black uppercase text-xs tracking-widest">
            <Scale className="h-4 w-4" /> Weigh your bag before departing
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-white text-3xl font-bold mb-8 uppercase tracking-tighter italic border-b border-white/10 pb-4 flex items-center gap-3">
        <Package className="text-amber-500" /> The Ultimate Checklist
      </h2>
      
      <div className="space-y-8">
        {[
          {
            category: "Essential Footwear",
            icon: <Footprints className="h-5 w-5 text-amber-500" />,
            items: [
              "Well broken-in Hiking Boots (Waterproof & High-Ankle)",
              "Camp Shoes (Light sneakers or Crocs)",
              "5 pairs of Merino Wool Socks (Thickness varies)",
              "Thermal Liner Socks (Optional for summit night)",
              "Gaiters (Prevent mud and debris from entering boots)"
            ]
          },
          {
            category: "Technical Gear",
            icon: <Scale className="h-5 w-5 text-amber-500" />,
            items: [
              "4-Season Sleeping Bag (Comfort rating -15°C / 5°F)",
              "30L-35L Daypack (With rain cover)",
              "Trekking Poles (Essential for the joints)",
              "3-Liter Hydration Bladder (Camelbak or similar)",
              "1-Liter Nalgene Bottle (For hot water in sleeping bag)"
            ]
          },
          {
            category: "Electronics & Lighting",
            icon: <Sun className="h-5 w-5 text-amber-500" />,
            items: [
              "Headlamp (Min 200 lumens with spare batteries)",
              "Power Bank (20,000mAh for phone/camera)",
              "Solar Charger (Optional but recommended)",
              "Rugged Action Camera (GoPro) with cold-weather batteries"
            ]
          }
        ].map((group) => (
          <div key={group.category} className="bg-slate-800/20 rounded-[2rem] p-8 border border-white/5 hover:border-amber-500/20 transition-all">
            <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
              {group.icon} {group.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map(item => (
                <div key={item} className="flex items-start gap-3 text-slate-400 group/item">
                  <div className="h-5 w-5 rounded-md border-2 border-slate-700 flex-shrink-0 mt-0.5 group-hover/item:border-amber-500 transition-colors" />
                  <span className="text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-slate-900 rounded-[3rem] p-12 border border-slate-800 mt-12 relative overflow-hidden group">
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter">Rent or Buy?</h2>
        <p className="text-slate-400 leading-relaxed mb-8">
          If you don't plan on hiking again, <strong>renting gear in Moshi</strong> is a cost-effective and sustainable option for bulky items like sleeping bags and 80-liter duffels. However, we <Link href="/gear/best-boots" className="text-amber-500 font-bold hover:underline">highly recommend</Link> buying and breaking in your own boots at least 3 months before your climb.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/costs" className="bg-amber-600 text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-700 transition-colors">
            Gear Rental Pricing Guide
          </Link>
        </div>
      </div>
      <Mountain className="absolute -bottom-10 -right-10 h-48 w-48 text-amber-500/5 rotate-12 transition-transform group-hover:scale-110" />
    </section>

    <section className="bg-gradient-to-br from-slate-900 to-amber-900/40 rounded-[3rem] p-12 text-center border border-amber-500/10 shadow-3xl">
      <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Pack for Success</h3>
      <p className="text-slate-300 mb-8 italic max-w-lg mx-auto">Does your physical profile and chosen route match your gear expectations? Take our Success Predictor quiz to find out.</p>
      <Link 
        href="/#predictor" 
        className="inline-block bg-white text-slate-950 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all transform hover:scale-105 shadow-2xl"
      >
        Take the Predictor Quiz
      </Link>
    </section>

    <div className="text-center py-10">
       <p className="text-sm text-slate-500">
        Still undecided? Explore our <Link href="/ultimate-guide" className="text-amber-500 font-bold hover:underline">Ultimate Hub</Link> for more on routes and health.
      </p>
    </div>
  </div>
);
