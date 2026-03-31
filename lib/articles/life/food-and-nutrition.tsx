import React from 'react';
import { Utensils, Coffee, Apple, CheckCircle2, Info, Salad, Sandwich } from 'lucide-react';

export const FoodAndNutritionArticle = () => {
  return (
    <article className="prose prose-invert prose-amber max-w-none">
      <div className="bg-slate-900 border-l-4 border-amber-500 p-8 mb-12 rounded-r-2xl">
        <p className="text-xl text-gray-300 m-0 italic">
          "The altitude kills your appetite, but your body needs fuel more than ever."
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight">
        <Salad className="text-amber-500" /> High-Carbohydrate Focus
      </h2>
      <p>
        At altitude, your body burns through carbohydrates rapidly and digestion slows down significantly. Our menu is designed to maximize energy with iron-rich foods, complex carbs, and high-protein snacks.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12 text-slate-400">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Utensils className="text-amber-500" /> Typical Lunch
          </h3>
          <p className="text-sm">
            Sometimes served in camp, other times a packed box. It could include sandwiches, fruit, snacks (cashews, chocolate bars), and hot tea or juice.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sandwich className="text-amber-500" /> Typical Dinner
          </h3>
          <p className="text-sm">
            Soup is served first (essential for hydration), followed by a main course like pasta, rice with stew, grilled chicken with vegetables, or Tanzanian specialties like "Ugali" and "Ndizi" (banana stew).
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white flex items-center gap-3 font-display uppercase italic tracking-tight font-black">
        <Apple className="text-amber-500" /> Dietary Special Requirements
      </h2>
      <p>
        Are you vegetarian, vegan, or gluten-free? No problem! Our mountain chefs are expertly trained in handling specialized dietary needs. 
      </p>

      <div className="bg-amber-100/10 border-l-4 border-amber-500 p-8 my-16 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-4 uppercase italic">Hydration is Survival</h3>
        <p className="text-slate-300 m-0">
          You MUST drink 4 to 5 liters of water daily. The guide will remind you constantly. We provide purified and boiled water for your bottles and bladders every morning and evening.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-6 text-white font-display uppercase italic font-black">Snack Strategy</h2>
      <p>
        While we provide ample meals, we recommend bringing your favorite personal snacks. Hard candies, ginger chews (for nausea), and electrolyte tablets (like Nuun) are fantastic for the summit night.
      </p>

      <div className="mt-12 p-8 bg-slate-800/50 rounded-3xl border border-slate-700 text-center">
        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Questions about the menu?</h4>
        <p className="text-slate-400 mb-6">Ask our kitchen staff how they manage safety and hygiene at 15,000 feet.</p>
        <a href="/life/toilets-and-hygiene" className="inline-block bg-amber-500 text-slate-950 px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors">
          Toilets & Hygiene Info
        </a>
      </div>
    </article>
  );
};
