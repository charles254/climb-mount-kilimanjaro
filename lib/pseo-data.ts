export interface ElevationDay {
  day: number;
  label: string;
  altitude: number; // in meters
}

export interface ClimbingRoute {
  slug: string;
  name: string;
  duration: string;
  success_rate: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Difficult";
  traffic: "Low" | "Medium" | "High";
  kenya_advantage_tip: string;
  description: string;
  elevation_data: ElevationDay[];
}

export interface ClimbingMonth {
  slug: string;
  month_name: string;
  weather_profile: string;
  base_temp: string;
  summit_temp: string;
  crowd_level: "Quiet" | "Moderate" | "Busy";
  verdict: string;
}

export interface TravelOrigin {
  slug: string;
  city: string;
  country: string;
  transport_method: string;
  visa_requirements: string;
  estimated_cost: string;
}

export const climbingRoutes: ClimbingRoute[] = [
  {
    slug: "lemosho",
    name: "Lemosho Route",
    duration: "7-8 Days",
    success_rate: "95%",
    difficulty: "Moderate",
    traffic: "Medium",
    kenya_advantage_tip: "Start from the western side of the mountain, easily accessible if flying into Nairobi and catching a regional connector to JRO.",
    description: "The Lemosho Route is widely considered the most beautiful path up Kilimanjaro. It offers panoramic views on various sides of the mountain and a high success rate due to its excellent acclimatization profile.",
    elevation_data: [
      { day: 0, label: "Londorossi Gate", altitude: 2100 },
      { day: 1, label: "Mti Mkubwa", altitude: 2650 },
      { day: 2, label: "Shira 1 Camp", altitude: 3500 },
      { day: 3, label: "Moir Hut", altitude: 4200 },
      { day: 4, label: "Lava Tower", altitude: 4630 },
      { day: 5, label: "Barranco Camp", altitude: 3976 },
      { day: 6, label: "Karanga Camp", altitude: 3995 },
      { day: 7, label: "Barafu Camp", altitude: 4673 },
      { day: 8, label: "Uhuru Peak", altitude: 5895 },
      { day: 9, label: "Mweka Camp", altitude: 3100 }
    ]
  },
  {
    slug: "machame",
    name: "Machame Route",
    duration: "6-7 Days",
    success_rate: "85%",
    difficulty: "Challenging",
    traffic: "High",
    kenya_advantage_tip: "A classic choice for regional travelers. Use the 'Whiskey Route' to test your endurance before heading back for a relaxing weekend in Mombasa.",
    description: "Known as the 'Whiskey' route, Machame is steeper and more physically demanding than Marangu, but offers better acclimatization and spectacular scenery.",
    elevation_data: [
      { day: 0, label: "Machame Gate", altitude: 1800 },
      { day: 1, label: "Machame Camp", altitude: 2835 },
      { day: 2, label: "Shira 2 Camp", altitude: 3850 },
      { day: 3, label: "Lava Tower", altitude: 4630 },
      { day: 4, label: "Barranco Camp", altitude: 3976 },
      { day: 5, label: "Karanga Camp", altitude: 3995 },
      { day: 6, label: "Barafu Camp", altitude: 4673 },
      { day: 7, label: "Uhuru Peak", altitude: 5895 },
      { day: 8, label: "Mweka Camp", altitude: 3100 }
    ]
  },
  {
    slug: "rongai",
    name: "Rongai Route",
    duration: "6-7 Days",
    success_rate: "80%",
    difficulty: "Easy",
    traffic: "Low",
    kenya_advantage_tip: "The ONLY route that approaches from the North (near the Kenya border). Ideal for those coming via the Namanga border crossing from Nairobi.",
    description: "Rongai is the only route that approaches Kilimanjaro from the north. It's a quieter route, less affected by rainfall, making it a great choice during the wet season.",
    elevation_data: [
      { day: 0, label: "Rongai Gate", altitude: 1950 },
      { day: 1, label: "1st Cave Camp", altitude: 2620 },
      { day: 2, label: "Kikelewa Camp", altitude: 3600 },
      { day: 3, label: "Mawenzi Tarn", altitude: 4330 },
      { day: 4, label: "Mawenzi Ridge", altitude: 4330 },
      { day: 5, label: "Kibo Hut", altitude: 4700 },
      { day: 6, label: "Uhuru Peak", altitude: 5895 },
      { day: 7, label: "Horombo Hut", altitude: 3720 }
    ]
  },
  {
    slug: "marangu",
    name: "Marangu Route",
    duration: "5-6 Days",
    success_rate: "65%",
    difficulty: "Easy",
    traffic: "High",
    kenya_advantage_tip: "The fastest route for busy expats in East Africa. The only route providing hut accommodation.",
    description: "The 'Coca-Cola' route is the oldest and most established path. It's the only route that offers sleeping huts in dormitory-style accommodations.",
    elevation_data: [
      { day: 0, label: "Marangu Gate", altitude: 1870 },
      { day: 1, label: "Mandara Hut", altitude: 2700 },
      { day: 2, label: "Horombo Hut", altitude: 3720 },
      { day: 3, label: "Kibo Hut", altitude: 4700 },
      { day: 4, label: "Uhuru Peak", altitude: 5895 },
      { day: 5, label: "Marangu Gate", altitude: 1870 }
    ]
  },
  {
    slug: "northern-circuit",
    name: "Northern Circuit",
    duration: "9 Days",
    success_rate: "98%",
    difficulty: "Moderate",
    traffic: "Low",
    kenya_advantage_tip: "Longest and newest route. Perfect for those who want to see nearly 360 degrees of the mountain.",
    description: "The Northern Circuit is the newest and longest route on Kilimanjaro. It circles around the northern slopes, offering the highest success rate and incredible solitude.",
    elevation_data: [
      { day: 0, label: "Londorossi Gate", altitude: 2100 },
      { day: 1, label: "Mti Mkubwa", altitude: 2650 },
      { day: 2, label: "Shira 1 Camp", altitude: 3500 },
      { day: 3, label: "Moir Hut", altitude: 4200 },
      { day: 4, label: "Buffalo Camp", altitude: 4020 },
      { day: 5, label: "Third Cave", altitude: 3870 },
      { day: 6, label: "School Hut", altitude: 4750 },
      { day: 7, label: "Uhuru Peak", altitude: 5895 },
      { day: 8, label: "Mweka Camp", altitude: 3100 }
    ]
  }
];

export const climbingMonths: ClimbingMonth[] = [
  {
    slug: "january",
    month_name: "January",
    weather_profile: "Warm and Clear",
    base_temp: "25°C",
    summit_temp: "-7°C",
    crowd_level: "Busy",
    verdict: "Excellent - One of the best times to climb."
  },
  {
    slug: "february",
    month_name: "February",
    weather_profile: "Warmest, Clear skies",
    base_temp: "27°C",
    summit_temp: "-5°C",
    crowd_level: "Busy",
    verdict: "Perfect - Warmest month with great visibility."
  },
  {
    slug: "march",
    month_name: "March",
    weather_profile: "Mixed - Rain starts late month",
    base_temp: "24°C",
    summit_temp: "-8°C",
    crowd_level: "Moderate",
    verdict: "Good for early month, risky late month due to rains."
  },
  {
    slug: "april",
    month_name: "April",
    weather_profile: "Heavy Rain (Long Rains)",
    base_temp: "22°C",
    summit_temp: "-10°C",
    crowd_level: "Quiet",
    verdict: "Poor - Very wet and muddy paths."
  },
  {
    slug: "may",
    month_name: "May",
    weather_profile: "Rain (Long Rains)",
    base_temp: "22°C",
    summit_temp: "-10°C",
    crowd_level: "Quiet",
    verdict: "Poor - Continued rainy season."
  },
  {
    slug: "june",
    month_name: "June",
    weather_profile: "Cool and Dry",
    base_temp: "20°C",
    summit_temp: "-12°C",
    crowd_level: "Moderate",
    verdict: "Good - Start of the dry season, can be cold."
  },
  {
    slug: "july",
    month_name: "July",
    weather_profile: "Cool and Dry",
    base_temp: "19°C",
    summit_temp: "-13°C",
    crowd_level: "Busy",
    verdict: "Very Good - Cold but dry, very clear skies."
  },
  {
    slug: "august",
    month_name: "August",
    weather_profile: "Cool and Dry",
    base_temp: "21°C",
    summit_temp: "-11°C",
    crowd_level: "Busy",
    verdict: "Excellent - Peak season, great weather."
  },
  {
    slug: "september",
    month_name: "September",
    weather_profile: "Warm and Dry",
    base_temp: "24°C",
    summit_temp: "-9°C",
    crowd_level: "Busy",
    verdict: "Excellent - Warmest dry month, perfect conditions."
  },
  {
    slug: "october",
    month_name: "October",
    weather_profile: "Warm, Mixed skies",
    base_temp: "25°C",
    summit_temp: "-8°C",
    crowd_level: "Moderate",
    verdict: "Good - Rains can start late in the month."
  },
  {
    slug: "november",
    month_name: "November",
    weather_profile: "Short Rains",
    base_temp: "23°C",
    summit_temp: "-9°C",
    crowd_level: "Moderate",
    verdict: "Mixed - Expect short afternoon rain showers."
  },
  {
    slug: "december",
    month_name: "December",
    weather_profile: "Warm and Mixed",
    base_temp: "24°C",
    summit_temp: "-8°C",
    crowd_level: "Busy",
    verdict: "Very Good - Holiday season peak, despite occasional rain."
  }
];

export const travelOrigins: TravelOrigin[] = [
  {
    slug: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    transport_method: "Riverside Shuttle (Bus) via Namanga Border or Flight (NBO/WIL to JRO)",
    visa_requirements: "EAC Citizens: Visa Free. Foreign Nationals/Expats: $50 Tanzanian Visa (Apply Online).",
    estimated_cost: "$30 - $250 USD"
  },
  {
    slug: "mombasa",
    city: "Mombasa",
    country: "Kenya",
    transport_method: "Direct flight to JRO via Fly540 or Air Kenya",
    visa_requirements: "EAC Citizens: Visa Free. Foreign Nationals: $50 Tanzanian Visa.",
    estimated_cost: "$150 - $300 USD"
  },
  {
    slug: "london",
    city: "London",
    country: "UK",
    transport_method: "Flight to JRO (Kilimanjaro Int'l) via Doha (Qatar) or Addis Ababa (Ethiopian)",
    visa_requirements: "$50 Tourist Visa on arrival or online",
    estimated_cost: "£600 - £900"
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    transport_method: "Direct flight to JRO via FlyDubai",
    visa_requirements: "Visa on arrival for most residents ($50-$100 depending on passport)",
    estimated_cost: "AED 1,500 - 2,500"
  },
  {
    slug: "new-york",
    city: "New York",
    country: "USA",
    transport_method: "Flight to NBO (Nairobi) then regional connector to JRO",
    visa_requirements: "$100 Tanzanian Visa (US Citizens)",
    estimated_cost: "$900 - $1,400"
  }
];

export function getRouteBySlug(slug: string) {
  return climbingRoutes.find(r => r.slug === slug);
}

export function getMonthBySlug(slug: string) {
  return climbingMonths.find(m => m.slug === slug);
}

export function getOriginBySlug(slug: string) {
  return travelOrigins.find(o => o.slug === slug);
}
