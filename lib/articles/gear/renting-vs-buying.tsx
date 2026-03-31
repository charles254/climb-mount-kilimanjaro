import React from 'react';
import { ShoppingBag, DollarSign, Wallet, ShieldCheck, Info, CheckCircle2, Star } from 'lucide-react';

export const RentingVsBuyingArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "Buying the wrong gear is an expensive mistake. Renting the wrong gear is a miserable journey."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight font-black">
        <ShoppingBag className="text-amber-500" /> The Cost-Benefit Analysis
      </h2>
      <p>
        If this is your first (and potentially only) major mountain expedition, you could spend over $2,000 on a complete "Kili-Ready" wardrobe. Many climbers choose to rent specialized items like sleeping bags and down jackets to save money and luggage space.
      </p>

      <div className="my-12 grid md:grid-cols-2 gap-8 text-slate-400">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><CheckCircle2 className="text-amber-500" /> BUY These Items</h3>
          <ul className="text-xs space-y-1 list-none p-0 opacity-80">
            <li>• Hiking Boots (Must be broken in!)</li>
            <li>• Base Layers & Socks (Hygiene issues)</li>
            <li>• Sunglasses & Sunscreen</li>
            <li>• Personal Daypack (30L)</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><DollarSign className="text-amber-500" /> RENT These Items</h3>
          <ul className="text-xs space-y-1 list-none p-0 opacity-80">
            <li>• Sleeping Bag (-15°C rated)</li>
            <li>• Insulated Down Parka</li>
            <li>• Waterproof Trousers</li>
            <li>• Trekking Poles</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic tracking-tight font-black">Why Boots are Non-Negotiable</h2>
      <p>
        Never rent hiking boots. You need to spend at least 40 to 60 hours in your boots before arriving in Tanzania to prevent blisters and hot spots. Your "break-in" period happens at home, not on the trail to Machame.
      </p>

      <div className="bg-amber-100/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4 uppercase italic leading-none">The Rental Gear Quality Check</h3>
        <p className="text-slate-300 m-0 font-medium">
          If you rent in Moshi or Arusha, check every zipper, snap, and seam before leaving the store. At KiliGo, we inspect all rental gear weekly to maintain international safety standards.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white uppercase italic font-black">Average Rental Costs</h2>
      <ul className="space-y-2 list-none p-0 text-slate-400">
          <li className="flex justify-between border-b border-slate-800 py-2"><span>Sleeping Bag (-40°C)</span> <span>$50 / trek</span></li>
          <li className="flex justify-between border-b border-slate-800 py-2"><span>Heavy Down Jacket</span> <span>$40 / trek</span></li>
          <li className="flex justify-between border-b border-slate-800 py-2"><span>Trekking Poles</span> <span>$20 / trek</span></li>
      </ul>

      <p className="text-center italic text-slate-500 mb-12">
        See the full gear suggestions in our <a href="/gear/ultimate-packing-list" className="text-amber-500 hover:underline">Ultimate Packing List</a>.
      </p>
    </article>
  );
};
