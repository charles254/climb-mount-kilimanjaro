import { climbingRoutes } from './pseo-data';

export interface RouteComparison {
  slug: string;
  routeA: string;
  routeB: string;
  verdict: string;
  best_for_a: string;
  best_for_b: string;
}

const comparisonDetails: Record<string, { verdict: string; best_for_a: string; best_for_b: string }> = {
  'lemosho-vs-machame': {
    verdict: 'Lemosho is the better choice for most climbers due to its higher success rate (95% vs 85%) and superior acclimatization profile, though Machame offers a more intense and rewarding physical challenge at a lower cost.',
    best_for_a: 'Choose Lemosho if you want the highest possible summit success rate, more scenic variety from the western approach, and slightly lower trail traffic during the first two days.',
    best_for_b: 'Choose Machame if you prefer a steeper, more physically demanding route with a classic reputation, and you want to save a day compared to the 8-day Lemosho itinerary.',
  },
  'lemosho-vs-rongai': {
    verdict: 'Lemosho has a significantly higher success rate (95% vs 80%) and more diverse scenery, but Rongai is the go-to option during the rainy season because it approaches from the drier northern side.',
    best_for_a: 'Choose Lemosho if you are climbing during the dry season and want the best balance of success rate, scenic variety, and moderate difficulty.',
    best_for_b: 'Choose Rongai if you are climbing during the wet months (March-May or November), prefer a quieter trail with very low traffic, or want the easiest route with camping.',
  },
  'lemosho-vs-marangu': {
    verdict: 'Lemosho dramatically outperforms Marangu in summit success (95% vs 65%) thanks to superior acclimatization over 7-8 days. Marangu is only preferable if you specifically require hut accommodation.',
    best_for_a: 'Choose Lemosho if summit success is your top priority and you want world-class scenery through multiple ecological zones with proper acclimatization days.',
    best_for_b: 'Choose Marangu if you need hut accommodation instead of camping, have limited time for a 5-6 day climb, or prefer a well-established trail with clear paths.',
  },
  'lemosho-vs-northern-circuit': {
    verdict: 'Northern Circuit edges out Lemosho on success rate (98% vs 95%) with the best acclimatization on the mountain, but Lemosho delivers nearly the same result in 1-2 fewer days and at a lower cost.',
    best_for_a: 'Choose Lemosho if you want an excellent success rate but cannot commit to a full 9-day trek, or if you want to balance cost and performance.',
    best_for_b: 'Choose Northern Circuit if you want the absolute highest summit success rate, maximum solitude, and a full 360-degree circumnavigation of the mountain.',
  },
  'machame-vs-rongai': {
    verdict: 'Machame offers a more dramatic and challenging climb with a higher success rate (85% vs 80%), while Rongai provides a gentler, drier, and far less crowded experience from the rarely visited northern slopes.',
    best_for_a: 'Choose Machame if you want a physically demanding route with dramatic scenery including the Barranco Wall and Lava Tower, and you enjoy climbing with other trekkers.',
    best_for_b: 'Choose Rongai if you value solitude, prefer an easier gradient, or are planning a wet-season climb when southern routes receive heavy rainfall.',
  },
  'machame-vs-marangu': {
    verdict: 'Machame has a much higher success rate (85% vs 65%) and far better scenery, making it the stronger choice for most climbers. Marangu only wins if hut sleeping is a must-have.',
    best_for_a: 'Choose Machame if you are reasonably fit and want better acclimatization, more scenic diversity, and a significantly higher chance of reaching the summit.',
    best_for_b: 'Choose Marangu if sleeping in mountain huts with basic beds is important to you, or if you are on a tight schedule and need the shortest possible itinerary.',
  },
  'machame-vs-northern-circuit': {
    verdict: 'Northern Circuit offers a far higher success rate (98% vs 85%) with unmatched acclimatization, but Machame packs more technical excitement into fewer days and is better for climbers with limited time.',
    best_for_a: 'Choose Machame if you have 6-7 days, enjoy a physical challenge with steep sections like the Barranco Wall, and want one of Kilimanjaro\'s most popular classic routes.',
    best_for_b: 'Choose Northern Circuit if you have 9 days available, prioritize summit success above all else, and want to experience the most remote and least-traveled trail on the mountain.',
  },
  'rongai-vs-marangu': {
    verdict: 'Rongai provides better acclimatization and a higher success rate (80% vs 65%) with far fewer crowds. Marangu is slightly easier logistically with hut accommodation but underperforms on summit success.',
    best_for_a: 'Choose Rongai if you want a quiet, uncrowded climb with unique northern-side views of Mawenzi Peak, especially during the rainy season when southern routes are wet.',
    best_for_b: 'Choose Marangu if hut accommodation is a requirement, you prefer the shortest possible trek duration, or you want the most established and well-marked trail.',
  },
  'rongai-vs-northern-circuit': {
    verdict: 'Northern Circuit has a dramatically higher success rate (98% vs 80%) thanks to its 9-day acclimatization schedule. Rongai is better for those with less time who still want a quiet, northern-approach experience.',
    best_for_a: 'Choose Rongai if you have 6-7 days, want a low-traffic route, prefer the drier northern approach, or are climbing during the wet season on a moderate budget.',
    best_for_b: 'Choose Northern Circuit if you can invest 9 days, want the highest summit success rate available, and wish to circumnavigate the entire mountain for a complete Kilimanjaro experience.',
  },
  'marangu-vs-northern-circuit': {
    verdict: 'Northern Circuit vastly outperforms Marangu in every metric except trip duration and cost, boasting a 98% vs 65% success rate. Marangu is only suitable for those needing the shortest trek with hut accommodation.',
    best_for_a: 'Choose Marangu if you are on a very tight schedule, require hut accommodation, or want the lowest-cost route option with the least number of days on the mountain.',
    best_for_b: 'Choose Northern Circuit if you want the ultimate Kilimanjaro experience with near-guaranteed summit success, 360-degree views, and complete solitude on the northern slopes.',
  },
};

export function generateComparisons(): RouteComparison[] {
  const comparisons: RouteComparison[] = [];
  const routeSlugs = climbingRoutes.map((r) => r.slug);

  for (let i = 0; i < routeSlugs.length; i++) {
    for (let j = i + 1; j < routeSlugs.length; j++) {
      const slug = `${routeSlugs[i]}-vs-${routeSlugs[j]}`;
      const details = comparisonDetails[slug];

      if (details) {
        comparisons.push({
          slug,
          routeA: routeSlugs[i],
          routeB: routeSlugs[j],
          verdict: details.verdict,
          best_for_a: details.best_for_a,
          best_for_b: details.best_for_b,
        });
      }
    }
  }

  return comparisons;
}

export function getComparisonBySlug(slug: string): RouteComparison | undefined {
  return generateComparisons().find((c) => c.slug === slug);
}
