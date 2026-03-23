export interface ElevationDay {
  day: number;
  label: string;
  altitude: number; // in meters
}

export interface FAQ {
  question: string;
  answer: string;
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
  faqs?: FAQ[];
  best_for: string;
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
  faqs?: FAQ[];
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
    ],
    faqs: [
      { question: "Why is Lemosho recommended for acclimatization?", answer: "Lemosho is a longer route (7-8 days) that starts low and has an excellent 'climb high, sleep low' profile, particularly around the Lava Tower and Barranco Wall sections." },
      { question: "Is the Barranco Wall dangerous on Lemosho?", answer: "While it looks intimidating, the Barranco Wall is a non-technical scramble. No mountaineering experience is required, but it does require focus and steady footing." }
    ],
    best_for: "Highest success rates & scenic beauty"
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
    ],
    faqs: [
      { question: "Why is Machame called the 'Whiskey Route'?", answer: "Unlike the 'Coca-Cola' route (Marangu), Machame is tougher and more rugged, traditionally appealing to more adventurous climbers looking for a challenge." },
      { question: "Do I sleep in tents or huts on Machame?", answer: "Machame is a pure camping route. You will sleep in high-quality mountain tents which our porters set up and take down for you each day." }
    ],
    best_for: "Adventurous climbers & photographers"
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
    ],
    faqs: [
      { question: "Why choose Rongai over other routes?", answer: "Rongai is the only route that approaches from the North. It's much drier than the southern routes, making it the best choice during the rainy season." },
      { question: "Can I see Mawenzi Peak on the Rongai route?", answer: "Yes! Rongai offers one of the best views of Mawenzi, the second-highest peak on Kilimanjaro, especially from the Mawenzi Tarn camp." }
    ],
    best_for: "Rainy season climbs & solitude"
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
    ],
    faqs: [
      { question: "Do I need a sleeping bag for the huts on Marangu?", answer: "Yes. While the huts provide basic foam mattresses and bunks, you still need a high-quality (minus 10-15°C) sleeping bag for warmth." },
      { question: "Why does Marangu have a lower success rate?", answer: "Marangu is often chosen for its 5-day duration. This short ascent doesn't allow for proper acclimatization, leading to more altitude-related failures." }
    ],
    best_for: "Climbers seeking hut accommodation"
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
    ],
    faqs: [
      { question: "Is the Northern Circuit worth the extra days?", answer: "Absolutely. The 9-day duration gives you a 98% success rate and allows you to experience the remote northern slopes that 99% of climbers never see." },
      { question: "How physically demanding is the Northern Circuit?", answer: "While it's the longest route, the daily hiking distances are moderate, and the extra days actually make it easier on the body than shorter routes." }
    ],
    best_for: "Ultimate acclimatization & 360° views"
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
    estimated_cost: "$30 - $250 USD",
    faqs: [
      { question: "How long is the bus from Nairobi to Kilimanjaro?", answer: "The Riverside shuttle takes approximately 6-7 hours including the Namanga border crossing." },
      { question: "Can I fly from Wilson Airport (WIL)?", answer: "Yes, Safarilink and AirKenya operate daily flights from Wilson to JRO, which are often more convenient than Jomo Kenyatta (NBO)." }
    ]
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
  },
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    transport_method: "Flight to JRO via Doha or Addis Ababa",
    visa_requirements: "$50 Tourist Visa",
    estimated_cost: "$1,200 - $1,800 AUD"
  },
  {
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    transport_method: "Flight to JRO via Frankfurt or Istanbul",
    visa_requirements: "$50 Tourist Visa",
    estimated_cost: "€700 - €1,100"
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    transport_method: "Direct flight to NBO via Air India/Kenya Airways, then JRO",
    visa_requirements: "$50 Tourist Visa",
    estimated_cost: "₹50,000 - ₹80,000"
  },
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    transport_method: "Flight to JRO via Amsterdam or Addis Ababa",
    visa_requirements: "$50 Tourist Visa",
    estimated_cost: "$1,100 - $1,600 CAD"
  },
  {
    slug: "tokyo",
    city: "Tokyo",
    country: "Japan",
    transport_method: "Flight to JRO via Doha or Addis Ababa",
    visa_requirements: "$50 Tourist Visa",
    estimated_cost: "¥150,000 - ¥250,000"
  },
  {
    slug: "cape-town",
    city: "Cape Town",
    country: "South Africa",
    transport_method: "Flight to JRO via Nairobi or Johannesburg",
    visa_requirements: "Visa-free for SA Citizens",
    estimated_cost: "R8,000 - R15,000"
  },
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    transport_method: "Flight to JRO via Addis Ababa or Doha",
    visa_requirements: "$50 Tourist Visa",
    estimated_cost: "$1,200 - $1,800 SGD"
  },
  // --- North America ---
  { slug: "los-angeles", city: "Los Angeles", country: "USA", transport_method: "Flight to JRO via Doha or Amsterdam", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,200 - $1,700" },
  { slug: "chicago", city: "Chicago", country: "USA", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,100 - $1,500" },
  { slug: "houston", city: "Houston", country: "USA", transport_method: "Flight to JRO via Doha or Istanbul", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,100 - $1,600" },
  { slug: "san-francisco", city: "San Francisco", country: "USA", transport_method: "Flight to JRO via Doha or Amsterdam", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,300 - $1,800" },
  { slug: "seattle", city: "Seattle", country: "USA", transport_method: "Flight to JRO via Doha or Amsterdam", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,200 - $1,700" },
  { slug: "denver", city: "Denver", country: "USA", transport_method: "Flight to JRO via London or Munich", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,100 - $1,600" },
  { slug: "vancouver", city: "Vancouver", country: "Canada", transport_method: "Flight to JRO via Amsterdam or London", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,300 - $1,800 CAD" },
  { slug: "montreal", city: "Montreal", country: "Canada", transport_method: "Flight to JRO via Paris or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,100 - $1,600 CAD" },
  { slug: "calgary", city: "Calgary", country: "Canada", transport_method: "Flight to JRO via Amsterdam", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,200 - $1,700 CAD" },
  { slug: "mexico-city", city: "Mexico City", country: "Mexico", transport_method: "Flight to JRO via Madrid or Amsterdam", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,200 - $1,800" },
  { slug: "miami", city: "Miami", country: "USA", transport_method: "Flight to JRO via Doha or Istanbul", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,000 - $1,500" },
  { slug: "boston", city: "Boston", country: "USA", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$950 - $1,400" },
  { slug: "atlanta", city: "Atlanta", country: "USA", transport_method: "Flight to JRO via Doha or Amsterdam", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,100 - $1,550" },
  { slug: "washington-dc", city: "Washington DC", country: "USA", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,000 - $1,500" },
  { slug: "dallas", city: "Dallas", country: "USA", transport_method: "Flight to JRO via Doha or London", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,100 - $1,650" },
  { slug: "philadelphia", city: "Philadelphia", country: "USA", transport_method: "Flight to JRO via Doha", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,050 - $1,500" },
  { slug: "phoenix", city: "Phoenix", country: "USA", transport_method: "Flight to JRO via London or Amsterdam", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,200 - $1,750" },
  { slug: "san-diego", city: "San Diego", country: "USA", transport_method: "Flight to JRO via Doha", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,300 - $1,800" },
  { slug: "portland", city: "Portland", country: "USA", transport_method: "Flight to JRO via Amsterdam", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,250 - $1,700" },
  { slug: "honolulu", city: "Honolulu", country: "USA", transport_method: "Flight to JRO via Tokyo and Doha", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,800 - $2,500" },

  // --- Europe ---
  { slug: "paris", city: "Paris", country: "France", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€750 - €1,100" },
  { slug: "madrid", city: "Madrid", country: "Spain", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€700 - €1,000" },
  { slug: "rome", city: "Rome", country: "Italy", transport_method: "Flight to JRO via Addis Ababa or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "€700 - €1,050" },
  { slug: "stockholm", city: "Stockholm", country: "Sweden", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "6,500 - 9,500 SEK" },
  { slug: "oslo", city: "Oslo", country: "Norway", transport_method: "Flight to JRO via Doha or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "7,000 - 10,000 NOK" },
  { slug: "copenhagen", city: "Copenhagen", country: "Denmark", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "5,000 - 8,000 DKK" },
  { slug: "zurich", city: "Zurich", country: "Switzerland", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "CHF 800 - 1,200" },
  { slug: "amsterdam", city: "Amsterdam", country: "Netherlands", transport_method: "Direct flight to JRO via KLM", visa_requirements: "$50 Tourist Visa", estimated_cost: "€800 - €1,200" },
  { slug: "dublin", city: "Dublin", country: "Ireland", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€800 - €1,150" },
  { slug: "lisbon", city: "Lisbon", country: "Portugal", transport_method: "Flight to JRO via Addis Ababa or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "€750 - €1,100" },
  { slug: "vienna", city: "Vienna", country: "Austria", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€750 - €1,100" },
  { slug: "warsaw", city: "Warsaw", country: "Poland", transport_method: "Flight to JRO via Doha or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "3,500 - 5,500 PLN" },
  { slug: "prague", city: "Prague", country: "Czech Republic", transport_method: "Flight to JRO via Doha or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "18,000 - 28,000 CZK" },
  { slug: "budapest", city: "Budapest", country: "Hungary", transport_method: "Flight to JRO via Istanbul or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "250,000 - 380,000 HUF" },
  { slug: "helsinki", city: "Helsinki", country: "Finland", transport_method: "Flight to JRO via Doha or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "€850 - €1,200" },
  { slug: "athens", city: "Athens", country: "Greece", transport_method: "Flight to JRO via Addis Ababa or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "€650 - €1,000" },
  { slug: "manchester", city: "Manchester", country: "UK", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "£650 - £950" },
  { slug: "edinburgh", city: "Edinburgh", country: "UK", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "£700 - £1,000" },
  { slug: "munich", city: "Munich", country: "Germany", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€750 - €1,150" },
  { slug: "frankfurt", city: "Frankfurt", country: "Germany", transport_method: "Direct flight to JRO via Lufthansa (Seasonal) or via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€800 - €1,200" },
  { slug: "brussels", city: "Brussels", country: "Belgium", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€750 - €1,100" },
  { slug: "geneva", city: "Geneva", country: "Switzerland", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "CHF 850 - 1,250" },
  { slug: "milan", city: "Milan", country: "Italy", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€700 - €1,050" },
  { slug: "barcelona", city: "Barcelona", country: "Spain", transport_method: "Flight to JRO via Istanbul or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "€750 - €1,100" },
  { slug: "reykjavik", city: "Reykjavik", country: "Iceland", transport_method: "Flight to JRO via London and Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "120,000 - 180,000 ISK" },

  // --- Asia ---
  { slug: "beijing", city: "Beijing", country: "China", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "¥6,000 - ¥9,000" },
  { slug: "shanghai", city: "Shanghai", country: "China", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "¥6,000 - ¥9,500" },
  { slug: "hong-kong", city: "Hong Kong", country: "China", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "$7,000 - $11,000 HKD" },
  { slug: "seoul", city: "Seoul", country: "South Korea", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "₩1,200,000 - ₩1,800,000" },
  { slug: "bangkok", city: "Bangkok", country: "Thailand", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "฿28,000 - ฿45,000" },
  { slug: "jakarta", city: "Jakarta", country: "Indonesia", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "IDR 12M - 18M" },
  { slug: "manila", city: "Manila", country: "Philippines", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "₱60,000 - ₱90,000" },
  { slug: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "RM 3,500 - 5,500" },
  { slug: "ho-chi-minh-city", city: "Ho Chi Minh City", country: "Vietnam", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "VND 20M - 30M" },
  { slug: "taipei", city: "Taipei", country: "Taiwan", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "NT$ 35,000 - 55,000" },
  { slug: "tel-aviv", city: "Tel Aviv", country: "Israel", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "ILS 2,500 - 4,000" },
  { slug: "riyadh", city: "Riyadh", country: "Saudi Arabia", transport_method: "Flight to JRO via Doha or Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "SAR 2,800 - 4,500" },
  { slug: "abu-dhabi", city: "Abu Dhabi", country: "UAE", transport_method: "Direct flight to JRO via Etihad (Seasonal) or via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "AED 1,600 - 2,800" },
  { slug: "new-delhi", city: "New Delhi", country: "India", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "₹55,000 - ₹85,000" },
  { slug: "bangalore", city: "Bangalore", country: "India", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "₹50,000 - ₹80,000" },
  { slug: "osaka", city: "Osaka", country: "Japan", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "¥160,000 - ¥260,000" },
  { slug: "chennai", city: "Chennai", country: "India", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "₹50,000 - ₹80,000" },

  // --- Oceania ---
  { slug: "melbourne", city: "Melbourne", country: "Australia", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,250 - $1,850 AUD" },
  { slug: "brisbane", city: "Brisbane", country: "Australia", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,300 - $1,900 AUD" },
  { slug: "perth", city: "Perth", country: "Australia", transport_method: "Flight to JRO via Doha or Mauritius", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,100 - $1,700 AUD" },
  { slug: "auckland", city: "Auckland", country: "New Zealand", transport_method: "Flight to JRO via Doha or Perth", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,500 - $2,200 NZD" },
  { slug: "christchurch", city: "Christchurch", country: "New Zealand", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,600 - $2,300 NZD" },

  // --- Africa ---
  { slug: "johannesburg", city: "Johannesburg", country: "South Africa", transport_method: "Direct flight to JRO via Air Link or via Nairobi", visa_requirements: "Visa-free for SA Citizens", estimated_cost: "R7,000 - R12,000" },
  { slug: "lagos", city: "Lagos", country: "Nigeria", transport_method: "Flight to JRO via Addis Ababa or Nairobi", visa_requirements: "$50 Tourist Visa", estimated_cost: "₦800k - 1.2M" },
  { slug: "cairo", city: "Cairo", country: "Egypt", transport_method: "Flight to JRO via Addis Ababa or Nairobi", visa_requirements: "$50 Tourist Visa", estimated_cost: "EGP 15,000 - 25,000" },
  { slug: "addis-ababa", city: "Addis Ababa", country: "Ethiopia", transport_method: "Direct flight to JRO via Ethiopian Airlines", visa_requirements: "Visa on arrival / EAC protocols", estimated_cost: "$300 - $500" },
  { slug: "entebbe", city: "Entebbe", country: "Uganda", transport_method: "Direct flight to JRO via Air Tanzania or Uganda Airlines", visa_requirements: "Visa-free (EAC)", estimated_cost: "$250 - $400" },
  { slug: "kigali", city: "Kigali", country: "Rwanda", transport_method: "Direct flight to JRO via RwandAir", visa_requirements: "Visa-free (EAC)", estimated_cost: "$200 - $350" },
  { slug: "dar-es-salaam", city: "Dar es Salaam", country: "Tanzania", transport_method: "Direct flight to JRO (Air Tanzania/Precision) or Luxury Bus", visa_requirements: "Local / Resident", estimated_cost: "$50 - $150" },
  { slug: "accra", city: "Accra", country: "Ghana", transport_method: "Flight to JRO via Addis Ababa or Nairobi", visa_requirements: "$50 Tourist Visa", estimated_cost: "GHS 6,000 - 9,000",
    faqs: [
      { question: "What is the best flight route from Accra to Kilimanjaro?", answer: "The most efficient route is via Addis Ababa with Ethiopian Airlines, offering the shortest total travel time for West African climbers." },
      { question: "Do Ghanaians need a visa for Tanzania?", answer: "Yes, Ghanaian citizens require a tourist visa for Tanzania, which can be obtained online via the e-visa portal for $50." }
    ]
  },
  { slug: "casablanca", city: "Casablanca", country: "Morocco", transport_method: "Flight to JRO via Istanbul or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "7,000 - 11,000 MAD" },
  { slug: "nairobi-central", city: "Westlands/Nairobi", country: "Kenya", transport_method: "Expert-curated shuttle service or local flight", visa_requirements: "National/Resident", estimated_cost: "KSH 5,000 - 25,000" },
  { slug: "mombasa-beach", city: "Nyali/Mombasa", country: "Kenya", transport_method: "Coastal connector flight direct to JRO", visa_requirements: "National/Resident", estimated_cost: "KSH 12,000 - 22,000" },
  { slug: "lusaka", city: "Lusaka", country: "Zambia", transport_method: "Flight to JRO via Nairobi", visa_requirements: "Visa-free for SADC", estimated_cost: "ZMW 8,000 - 12,000" },
  { slug: "harare", city: "Harare", country: "Zimbabwe", transport_method: "Flight to JRO via Nairobi", visa_requirements: "Visa-free for SADC", estimated_cost: "USD 400 - 700" },
  { slug: "mauritius", city: "Port Louis", country: "Mauritius", transport_method: "Flight to JRO via Nairobi", visa_requirements: "Visa-free", estimated_cost: "MUR 25,000 - 40,000" },

  // --- South America ---
  { slug: "sao-paulo", city: "Sao Paulo", country: "Brazil", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "R$ 5,000 - 8,000" },
  { slug: "buenos-aires", city: "Buenos Aires", country: "Argentina", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,200 - $1,800" },
  { slug: "bogota", city: "Bogota", country: "Colombia", transport_method: "Flight to JRO via Madrid or Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,300 - $1,900" },
  { slug: "lima", city: "Lima", country: "Peru", transport_method: "Flight to JRO via Madrid", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,400 - $2,000" },
  { slug: "santiago", city: "Santiago", country: "Chile", transport_method: "Flight to JRO via Madrid", visa_requirements: "$50 Tourist Visa", estimated_cost: "$1,400 - $2,100" },

  // --- Rest of World Hubs ---
  { slug: "istanbul", city: "Istanbul", country: "Turkey", transport_method: "Direct flight to JRO via Turkish Airlines", visa_requirements: "$50 Tourist Visa", estimated_cost: "$600 - $900" },
  { slug: "doha", city: "Doha", country: "Qatar", transport_method: "Direct flight to JRO via Qatar Airways", visa_requirements: "$50-$100 Tourist Visa", estimated_cost: "QAR 2,000 - 3,500" },
  { slug: "moscow", city: "Moscow", country: "Russia", transport_method: "Flight to JRO via Addis Ababa or Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "70k - 110k RUB" },
  { slug: "denpasar", city: "Bali", country: "Indonesia", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "IDR 14M - 20M" },
  { slug: "manai", city: "Manai", country: "UAE", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "AED 1,800 - 3,000" },
  
  // --- Additional Final Batch ---
  { slug: "las-vegas", city: "Las Vegas", country: "USA", transport_method: "Flight to JRO via London", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,300 - $1,850" },
  { slug: "nashville", city: "Nashville", country: "USA", transport_method: "Flight to JRO via Doha", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,150 - $1,600" },
  { slug: "orlando", city: "Orlando", country: "USA", transport_method: "Flight to JRO via Istanbul", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,100 - $1,550" },
  { slug: "austin", city: "Austin", country: "USA", transport_method: "Flight to JRO via London", visa_requirements: "$100 Tanzanian Visa", estimated_cost: "$1,200 - $1,700" },
  { slug: "lyon", city: "Lyon", country: "France", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "€800 - €1,150" },
  { slug: "hamburg", city: "Hamburg", country: "Germany", transport_method: "Flight to JRO via Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "€800 - €1,100" },
  { slug: "cologne", city: "Cologne", country: "Germany", transport_method: "Flight to JRO via Istanbul", visa_requirements: "$50 Tourist Visa", estimated_cost: "€780 - €1,050" },
  { slug: "luxembourg", city: "Luxembourg City", country: "Luxembourg", transport_method: "Flight to JRO via Paris", visa_requirements: "$50 Tourist Visa", estimated_cost: "€850 - €1,200" },
  { slug: "bristol", city: "Bristol", country: "UK", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "£700 - £1,000" },
  { slug: "nagoya", city: "Nagoya", country: "Japan", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "¥170,000 - ¥270,000" },
  { slug: "guangzhou", city: "Guangzhou", country: "China", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "¥6,500 - ¥9,500" },
  { slug: "muscat", city: "Muscat", country: "Oman", transport_method: "Flight to JRO via Doha", visa_requirements: "$50 Tourist Visa", estimated_cost: "OMR 250 - 450" },
  { slug: "amman", city: "Amman", country: "Jordan", transport_method: "Flight to JRO via Addis Ababa", visa_requirements: "$50 Tourist Visa", estimated_cost: "JOD 500 - 800" },
  { slug: "windhoek", city: "Windhoek", country: "Namibia", transport_method: "Flight to JRO via Nairobi", visa_requirements: "Visa-free (SADC)", estimated_cost: "NAD 12,000 - 18,000" },
  { slug: "gaborone", city: "Gaborone", country: "Botswana", transport_method: "Flight to JRO via Nairobi", visa_requirements: "Visa-free (SADC)", estimated_cost: "PULA 8,000 - 12,000" }
];

export const faqs: FAQ[] = [
  {
    question: "Do I need a visa to climb Kilimanjaro from Kenya?",
    answer: "Yes, most foreign nationals require a Tanzanian visa ($50-$100 USD). If you are an EAC citizen, it is visa-free. If you are an expat living in Kenya, you still need a visa but the process is straightforward via the Tanzanian e-Visa portal."
  },
  {
    question: "What is the best month to climb?",
    answer: "The best months are January, February, July, August, and September. These months offer the clearest skies and driest conditions. June and October are also good shoulder months."
  },
  {
    question: "How fit do I need to be?",
    answer: "You don't need to be an elite athlete, but you should be in good cardiovascular shape. We recommend 3-4 months of training, including hiking with a weighted pack and stair climbing."
  },
  {
    question: "What is the success rate of reaching Uhuru Peak?",
    answer: "Our team maintains a 95%+ success rate on 7-8 day routes like Lemosho and Northern Circuit. Shorter routes like Marangu have lower success rates (around 65%) due to rapid ascent."
  },
  {
    question: "Is it safe for solo travelers?",
    answer: "Absolutely. We can pair you with a friendly group of like-minded adventurers or arrange a private trek with a dedicated lead guide and support team."
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
