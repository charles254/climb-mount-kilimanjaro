import { deepDivesBatch1 } from "./travel-deep-dives-batch1";
import { deepDivesBatch2 } from "./travel-deep-dives-batch2";
import { deepDivesBatch3 } from "./travel-deep-dives-batch3";
import { deepDivesBatch4 } from "./travel-deep-dives-batch4";

export interface DeepDiveData {
  deep_dive: string;
  travel_tips: string[];
  recommended_layover: string;
  faqs: { question: string; answer: string }[];
}

// Merge all batches into a single lookup (78 enriched cities)
const allDeepDives: Record<string, DeepDiveData> = {
  ...deepDivesBatch1,
  ...deepDivesBatch2,
  ...deepDivesBatch3,
  ...deepDivesBatch4,
};

export function getDeepDive(slug: string): DeepDiveData | null {
  return allDeepDives[slug] || null;
}

export function hasDeepDive(slug: string): boolean {
  return slug in allDeepDives;
}
