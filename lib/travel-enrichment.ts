/**
 * Enrichment data for travel origins.
 * Top cities get handcrafted data; others get smart defaults based on country/region.
 */

interface EnrichmentData {
  continent: string;
  flight_duration: string;
  timezone_diff: string;
  currency: string;
  best_airlines: string;
  airport_code: string;
  jet_lag_tip: string;
  local_tip: string;
  peak_flight_season: string;
  priority: "high" | "medium" | "low";
}

const enrichmentMap: Record<string, EnrichmentData> = {
  nairobi: { continent: "Africa", flight_duration: "1h flight or 6-7h bus", timezone_diff: "UTC+3 (same as EAT)", currency: "KES (KSh)", best_airlines: "Safarilink, AirKenya, Jambojet", airport_code: "NBO/WIL", jet_lag_tip: "No jet lag — Nairobi and Kilimanjaro share the same time zone.", local_tip: "The Riverside shuttle departs from Nairobi CBD daily. Book seats at least 2 days in advance during peak season.", peak_flight_season: "July-September, December-January", priority: "high" },
  mombasa: { continent: "Africa", flight_duration: "1.5h direct flight", timezone_diff: "UTC+3 (same as EAT)", currency: "KES (KSh)", best_airlines: "Fly540, Air Kenya, Safarilink", airport_code: "MBA", jet_lag_tip: "No jet lag — same time zone as Kilimanjaro.", local_tip: "Fly from Moi International Airport. Afternoon flights offer stunning views of the Tsavo landscape.", peak_flight_season: "December-March (beach + climb combo)", priority: "high" },
  london: { continent: "Europe", flight_duration: "12-14h (1 stop)", timezone_diff: "UTC+0 (3 hours behind EAT)", currency: "GBP (£)", best_airlines: "Qatar Airways, Ethiopian Airlines, KLM", airport_code: "LHR", jet_lag_tip: "Arrive in Tanzania 2 days early to adjust to the 3-hour time difference and African heat.", local_tip: "Book from Heathrow Terminal 4 (Qatar) or Terminal 2 (KLM) for the best Kilimanjaro connections.", peak_flight_season: "June-September (summer holidays)", priority: "high" },
  dubai: { continent: "Middle East", flight_duration: "6-8h (1 stop or direct)", timezone_diff: "UTC+4 (1 hour ahead of EAT)", currency: "AED (د.إ)", best_airlines: "FlyDubai, Emirates, Ethiopian Airlines", airport_code: "DXB", jet_lag_tip: "Minimal jet lag — only 1 hour difference. Your body clock will adjust naturally on arrival.", local_tip: "FlyDubai offers direct flights to JRO from Terminal 2 — often the cheapest and fastest option from the Gulf.", peak_flight_season: "October-March (escaping Gulf heat)", priority: "high" },
  "new-york": { continent: "North America", flight_duration: "18-22h (1-2 stops)", timezone_diff: "UTC-5 (8 hours behind EAT)", currency: "USD ($)", best_airlines: "Ethiopian Airlines, Qatar Airways, Turkish Airlines", airport_code: "JFK", jet_lag_tip: "The 8-hour time difference is significant. Fly out 3 days before your trek starts to fully adjust.", local_tip: "Ethiopian Airlines from JFK offers the most direct routing via Addis Ababa with just one stop.", peak_flight_season: "June-August, December (holiday breaks)", priority: "high" },
  sydney: { continent: "Oceania", flight_duration: "22-26h (2 stops)", timezone_diff: "UTC+10/11 (7-8 hours ahead of EAT)", currency: "AUD ($)", best_airlines: "Qatar Airways, Emirates, Ethiopian Airlines", airport_code: "SYD", jet_lag_tip: "The 7-8 hour time shift east-to-west is brutal. Arrive 3 days early and force yourself onto local meal times.", local_tip: "Qatar Airways via Doha is the fastest routing from Sydney. Book the SYD-DOH-JRO itinerary for minimal layover.", peak_flight_season: "June-September (Australian winter)", priority: "high" },
  berlin: { continent: "Europe", flight_duration: "12-14h (1 stop)", timezone_diff: "UTC+1/2 (1-2 hours behind EAT)", currency: "EUR (€)", best_airlines: "Turkish Airlines, Ethiopian Airlines, Qatar Airways", airport_code: "BER", jet_lag_tip: "Only 1-2 hours difference — minimal adjustment needed.", local_tip: "Turkish Airlines via Istanbul offers frequent connections from BER with competitive pricing.", peak_flight_season: "July-September", priority: "high" },
  mumbai: { continent: "Asia", flight_duration: "9-12h (1 stop)", timezone_diff: "UTC+5:30 (2.5 hours ahead of EAT)", currency: "INR (₹)", best_airlines: "Air India, Kenya Airways, Ethiopian Airlines", airport_code: "BOM", jet_lag_tip: "Only 2.5 hours difference — your body adjusts quickly. Focus on hydration for the altitude instead.", local_tip: "Air India and Kenya Airways offer direct flights to Nairobi from Mumbai. Connect to JRO via a short regional hop.", peak_flight_season: "October-March (post-monsoon)", priority: "high" },
  toronto: { continent: "North America", flight_duration: "18-22h (1-2 stops)", timezone_diff: "UTC-5 (8 hours behind EAT)", currency: "CAD ($)", best_airlines: "KLM, Ethiopian Airlines, Turkish Airlines", airport_code: "YYZ", jet_lag_tip: "8 hours behind East Africa — arrive 3 days early. Use melatonin to reset your sleep cycle.", local_tip: "KLM via Amsterdam offers excellent connections from Pearson International with a single stop.", peak_flight_season: "June-August, December", priority: "high" },
  tokyo: { continent: "Asia", flight_duration: "18-22h (1-2 stops)", timezone_diff: "UTC+9 (6 hours ahead of EAT)", currency: "JPY (¥)", best_airlines: "Qatar Airways, Ethiopian Airlines, Turkish Airlines", airport_code: "NRT/HND", jet_lag_tip: "6 hours ahead — you'll arrive 'feeling' late evening. Plan a rest day in Moshi before trekking.", local_tip: "Qatar Airways via Doha from Haneda or Narita offers the smoothest connection to JRO.", peak_flight_season: "March-May (Golden Week), August (Obon)", priority: "high" },
  "cape-town": { continent: "Africa", flight_duration: "6-8h (1 stop)", timezone_diff: "UTC+2 (1 hour behind EAT)", currency: "ZAR (R)", best_airlines: "Air Link, Ethiopian Airlines, Kenya Airways", airport_code: "CPT", jet_lag_tip: "Just 1 hour difference — no jet lag concerns at all.", local_tip: "Airlink offers direct flights to JRO from Cape Town via Johannesburg — book the combo for convenience.", peak_flight_season: "December-February (SA summer)", priority: "high" },
  singapore: { continent: "Asia", flight_duration: "14-16h (1 stop)", timezone_diff: "UTC+8 (5 hours ahead of EAT)", currency: "SGD ($)", best_airlines: "Qatar Airways, Ethiopian Airlines, Singapore Airlines", airport_code: "SIN", jet_lag_tip: "5 hours ahead — arrive a day early and you'll adjust smoothly.", local_tip: "Singapore Airlines connects to Nairobi, then take a short hop to JRO. Qatar via Doha is also excellent.", peak_flight_season: "June-September, December", priority: "high" },
};

// Country-to-region mapping for defaults
const countryToContinent: Record<string, string> = {
  "Kenya": "Africa", "Tanzania": "Africa", "South Africa": "Africa", "Nigeria": "Africa", "Egypt": "Africa",
  "Ethiopia": "Africa", "Uganda": "Africa", "Rwanda": "Africa", "Ghana": "Africa", "Morocco": "Africa",
  "Zambia": "Africa", "Zimbabwe": "Africa", "Mauritius": "Africa", "Namibia": "Africa", "Botswana": "Africa",
  "USA": "North America", "Canada": "North America", "Mexico": "North America",
  "UK": "Europe", "France": "Europe", "Germany": "Europe", "Spain": "Europe", "Italy": "Europe",
  "Sweden": "Europe", "Norway": "Europe", "Denmark": "Europe", "Switzerland": "Europe",
  "Netherlands": "Europe", "Ireland": "Europe", "Portugal": "Europe", "Austria": "Europe",
  "Poland": "Europe", "Czech Republic": "Europe", "Hungary": "Europe", "Finland": "Europe",
  "Greece": "Europe", "Belgium": "Europe", "Iceland": "Europe", "Luxembourg": "Europe", "Russia": "Europe", "Turkey": "Europe",
  "Japan": "Asia", "China": "Asia", "South Korea": "Asia", "India": "Asia", "Thailand": "Asia",
  "Indonesia": "Asia", "Philippines": "Asia", "Malaysia": "Asia", "Vietnam": "Asia", "Taiwan": "Asia",
  "Singapore": "Asia", "Israel": "Middle East", "UAE": "Middle East", "Saudi Arabia": "Middle East",
  "Qatar": "Middle East", "Oman": "Middle East", "Jordan": "Middle East",
  "Australia": "Oceania", "New Zealand": "Oceania",
  "Brazil": "South America", "Argentina": "South America", "Colombia": "South America",
  "Peru": "South America", "Chile": "South America",
};

const continentDefaults: Record<string, Partial<EnrichmentData>> = {
  "Africa": { flight_duration: "2-6h (direct or 1 stop)", timezone_diff: "UTC+1 to UTC+3 (close to EAT)", jet_lag_tip: "Minimal to no jet lag from within Africa.", peak_flight_season: "June-September, December-January" },
  "Europe": { flight_duration: "10-14h (1 stop)", timezone_diff: "UTC+0 to UTC+2 (1-3 hours behind EAT)", jet_lag_tip: "1-3 hours difference — arrive a day early for a comfortable adjustment.", peak_flight_season: "June-September (summer holidays)" },
  "North America": { flight_duration: "18-24h (1-2 stops)", timezone_diff: "UTC-5 to UTC-8 (8-11 hours behind EAT)", jet_lag_tip: "Significant time difference — arrive at least 2-3 days early to adjust.", peak_flight_season: "June-August, December" },
  "South America": { flight_duration: "20-28h (2 stops)", timezone_diff: "UTC-3 to UTC-5 (6-8 hours behind EAT)", jet_lag_tip: "Long travel time — plan a rest day in Moshi before starting your trek.", peak_flight_season: "June-September" },
  "Asia": { flight_duration: "12-20h (1-2 stops)", timezone_diff: "UTC+5 to UTC+9 (2-6 hours ahead of EAT)", jet_lag_tip: "Arrive a day early — eastbound jet lag adjusts faster than westbound.", peak_flight_season: "October-March" },
  "Middle East": { flight_duration: "6-10h (direct or 1 stop)", timezone_diff: "UTC+3 to UTC+4 (same or 1 hour ahead of EAT)", jet_lag_tip: "Minimal jet lag — nearly the same time zone as East Africa.", peak_flight_season: "October-March (escaping summer heat)" },
  "Oceania": { flight_duration: "22-28h (2 stops)", timezone_diff: "UTC+10 to UTC+12 (7-9 hours ahead of EAT)", jet_lag_tip: "Major time shift — arrive 3 days early and force yourself onto local meal times.", peak_flight_season: "June-September (winter break)" },
};

const countryCurrency: Record<string, string> = {
  "USA": "USD ($)", "Canada": "CAD ($)", "Mexico": "MXN ($)", "UK": "GBP (£)",
  "France": "EUR (€)", "Germany": "EUR (€)", "Spain": "EUR (€)", "Italy": "EUR (€)",
  "Netherlands": "EUR (€)", "Ireland": "EUR (€)", "Portugal": "EUR (€)", "Austria": "EUR (€)",
  "Belgium": "EUR (€)", "Finland": "EUR (€)", "Greece": "EUR (€)", "Luxembourg": "EUR (€)",
  "Switzerland": "CHF (Fr)", "Sweden": "SEK (kr)", "Norway": "NOK (kr)", "Denmark": "DKK (kr)",
  "Poland": "PLN (zł)", "Czech Republic": "CZK (Kč)", "Hungary": "HUF (Ft)",
  "Iceland": "ISK (kr)", "Russia": "RUB (₽)", "Turkey": "TRY (₺)",
  "Japan": "JPY (¥)", "China": "CNY (¥)", "South Korea": "KRW (₩)", "India": "INR (₹)",
  "Thailand": "THB (฿)", "Indonesia": "IDR (Rp)", "Philippines": "PHP (₱)",
  "Malaysia": "MYR (RM)", "Vietnam": "VND (₫)", "Taiwan": "TWD (NT$)", "Singapore": "SGD ($)",
  "Israel": "ILS (₪)", "UAE": "AED (د.إ)", "Saudi Arabia": "SAR (﷼)", "Qatar": "QAR (﷼)",
  "Oman": "OMR (ر.ع.)", "Jordan": "JOD (د.ا)",
  "Australia": "AUD ($)", "New Zealand": "NZD ($)",
  "Brazil": "BRL (R$)", "Argentina": "ARS ($)", "Colombia": "COP ($)",
  "Peru": "PEN (S/)", "Chile": "CLP ($)",
  "Kenya": "KES (KSh)", "Tanzania": "TZS (TSh)", "South Africa": "ZAR (R)",
  "Nigeria": "NGN (₦)", "Egypt": "EGP (E£)", "Ethiopia": "ETB (Br)",
  "Uganda": "UGX (USh)", "Rwanda": "RWF (FRw)", "Ghana": "GHS (₵)",
  "Morocco": "MAD (MAD)", "Zambia": "ZMW (ZK)", "Zimbabwe": "USD ($)",
  "Mauritius": "MUR (₨)", "Namibia": "NAD (N$)", "Botswana": "BWP (P)",
};

// Priority: major global cities that actually have search volume for "climb Kilimanjaro from [city]"
const highPrioritySlugs = new Set([
  "nairobi", "mombasa", "london", "dubai", "new-york", "sydney", "berlin", "mumbai", "toronto",
  "tokyo", "cape-town", "singapore", "paris", "los-angeles", "amsterdam", "johannesburg",
  "addis-ababa", "dar-es-salaam", "san-francisco", "chicago", "istanbul", "doha",
  "melbourne", "auckland", "new-delhi", "hong-kong", "seoul", "bangkok",
]);
const mediumPrioritySlugs = new Set([
  "houston", "seattle", "denver", "vancouver", "montreal", "mexico-city", "miami",
  "boston", "washington-dc", "atlanta", "madrid", "rome", "stockholm", "oslo",
  "copenhagen", "zurich", "dublin", "lisbon", "vienna", "munich", "frankfurt",
  "brussels", "manchester", "edinburgh", "barcelona", "lagos", "cairo", "entebbe",
  "kigali", "accra", "sao-paulo", "buenos-aires", "perth", "brisbane", "taipei",
  "tel-aviv", "riyadh", "abu-dhabi", "bangalore", "kuala-lumpur", "manila", "jakarta",
  "warsaw", "prague", "budapest", "helsinki", "athens", "bogota", "moscow",
  "beijing", "shanghai", "osaka",
]);

export function getEnrichment(slug: string, country: string): EnrichmentData {
  // Return handcrafted data for top cities
  if (enrichmentMap[slug]) return enrichmentMap[slug];

  const continent = countryToContinent[country] || "Africa";
  const defaults = continentDefaults[continent] || continentDefaults["Africa"]!;
  const currency = countryCurrency[country] || "USD ($)";
  const priority = highPrioritySlugs.has(slug) ? "high" : mediumPrioritySlugs.has(slug) ? "medium" : "low";

  return {
    continent,
    flight_duration: defaults.flight_duration || "12-20h (1-2 stops)",
    timezone_diff: defaults.timezone_diff || "Varies",
    currency,
    best_airlines: "Ethiopian Airlines, Qatar Airways, Turkish Airlines",
    airport_code: slug.toUpperCase().slice(0, 3),
    jet_lag_tip: defaults.jet_lag_tip || "Arrive at least 1 day early to adjust to the time zone.",
    local_tip: `Check for seasonal flight deals and book at least 2 months in advance for the best fares.`,
    peak_flight_season: defaults.peak_flight_season || "June-September",
    priority,
  };
}
