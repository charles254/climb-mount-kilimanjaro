export interface ClusterArticle {
  title: string;
  slug: string;
  description: string;
  author?: {
    name: string;
    role: string;
    image?: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface Cluster {
  name: string;
  slug: string;
  description: string;
  articles: ClusterArticle[];
}

export const topicalClusters: Cluster[] = [
  {
    name: "Choosing Your Route",
    slug: "routes",
    description: "Kilimanjaro has several official routes, and this is the #1 thing climbers research.",
    articles: [
      { 
        title: "Best Route for Beginners on Kilimanjaro", 
        slug: "best-route-beginners", 
        description: "Which Kilimanjaro route is best for beginners? Compare Lemosho, Machame, and Marangu. Discover the safest, most scenic paths for first-time high-altitude trekkers.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Can a beginner climb Kilimanjaro?", answer: "Yes, many successful climbers are beginners. Success depends heavily on choosing a longer route (7-9 days) and maintaining a slow, 'pole-pole' pace." },
          { question: "Which route is safest for beginners?", answer: "The 8-day Lemosho and 9-day Northern Circuit are considered safest because they offer the most time for acclimatization, which prevents severe altitude sickness." },
          { question: "Is the short route (Marangu) easier?", answer: "No. While Marangu offers hut accommodations, its 5-day itinerary has the lowest success rate because beginners do not have enough time to adjust to the altitude." }
        ]
      },
      { 
        title: "Lemosho Route vs. Machame Route Comparison", 
        slug: "lemosho-vs-machame", 
        description: "Lemosho vs Machame: A head-to-head comparison of Kilimanjaro's two most popular and scenic routes. Compare success rates, crowds, and costs.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Is Lemosho better than Machame?", answer: "Lemosho generally offers a better experience because it is less crowded in the first few days and gives you an extra day for acclimatization, leading to higher success rates." },
          { question: "Why is Lemosho more expensive?", answer: "Lemosho typically takes 8 days compared to Machame's 7 days. The extra day means an extra day of National Park fees, food, and staff wages." },
          { question: "Do both routes use tents?", answer: "Yes, both Lemosho and Machame are camping routes where you sleep in tents set up by your porters." }
        ]
      },
      { 
        title: "Marangu Route Guide: The 'Coca-Cola' Path", 
        slug: "marangu-guide", 
        description: "Everything you need to know about the Marangu Route. Discover why this hut-based path is the cheapest, but has the lowest summit success rate.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Are there beds on the Marangu route?", answer: "Yes, Marangu is the only route with solar-lit sleeping huts equipped with bunk beds and mattress pads." },
          { question: "Why is the Marangu success rate so low?", answer: "Most climbers attempt Marangu in 5 days, which is not enough time for the human body to acclimatize to 5,895 meters. We strongly recommend adding an acclimatization day." },
          { question: "Is Marangu the easiest route?", answer: "While the trail itself is relatively gradual until summit night, the lack of acclimatization makes it one of the hardest routes to successfully summit." }
        ]
      },
      { 
        title: "Northern Circuit Route Guide: Best Acclimatization", 
        slug: "northern-circuit-guide", 
        description: "Explore the Northern Circuit Route, Kilimanjaro's longest and most successful path. Enjoy 360-degree views, fewer crowds, and 98% summit success rates.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "How long does the Northern Circuit take?", answer: "The Northern Circuit typically takes 9 days, making it the longest route and offering the best acclimatization." },
          { question: "Is the Northern Circuit hard?", answer: "While the daily hiking is generally moderate, the longevity of the trek makes it an endurance challenge. However, the excellent acclimatization makes the summit night typically easier than other routes." },
          { question: "Where do you sleep on the Northern Circuit?", answer: "It is a camping route, meaning you will sleep in tents that are carried and set up by your porters at designated campsites." }
        ]
      },
      {
        title: "Umbwe Route Guide: Kilimanjaro's Toughest Path",
        slug: "umbwe-guide",
        description: "The Umbwe Route is Kilimanjaro's toughest path. Discover success rates, itineraries, and expert warnings. Take our success predictor quiz to see if you are ready!",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Is the Umbwe route technical?", answer: "No, you do not need ropes or mountaineering equipment, but you will need to scramble using your hands for balance in steep rock sections." },
          { question: "Is the Umbwe route more dangerous than others?", answer: "The physical danger of falling is low, but the risk of severe altitude sickness is higher due to the rapid ascent rate." },
          { question: "Can I join a group on Umbwe?", answer: "Most Umbwe climbs are private because of the specialized nature of the route. Very few operators offer fixed-date group departures." }
        ]
      },
      {
        title: "Kilimanjaro vs Everest Base Camp: Which Trek Should You Choose?",
        slug: "kilimanjaro-vs-ebc",
        description: "A detailed comparison of climbing Kilimanjaro vs trekking to Everest Base Camp. Cost, difficulty, altitude, duration, and which adventure is right for your experience level.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Which is harder: Kilimanjaro or Everest Base Camp?", answer: "Kilimanjaro reaches a higher altitude (5,895m vs 5,364m) and has a more demanding summit push. EBC is a longer trek (12-14 days) but never requires the extreme 12-hour summit night push that Kilimanjaro does." },
          { question: "Which is more expensive?", answer: "Both cost roughly $2,000-$5,000 depending on operator and comfort level. Kilimanjaro park fees are higher, but EBC requires more days and often international flights to Kathmandu." },
          { question: "Can beginners do either trek?", answer: "Yes, both are non-technical treks suitable for fit beginners. However, both require good cardiovascular fitness and preparation for altitude." }
        ]
      }
    ]
  },
  {
    name: "Preparation & Fitness",
    slug: "preparation",
    description: "Climbers are highly anxious about whether they are physically capable.",
    articles: [
      { 
        title: "How to Train for Kilimanjaro: 12-Week Workout Plan", 
        slug: "training-plan", 
        description: "Get summit-ready with our science-backed 12-week Kilimanjaro training plan. Build aerobic base, leg strength, and mental grit for high altitude.",
        author: { name: "Dr. Sarah T.", role: "High-Altitude Physiologist" },
        faqs: [
          { question: "Do I need to run to train for Kilimanjaro?", answer: "Running is helpful for cardiovascular fitness, but hiking with a weighted backpack on inclined terrain is the most specific and effective training." },
          { question: "Can I train at sea level for Kilimanjaro?", answer: "Yes, most climbers train at sea level. Focus on exceptional cardiovascular endurance and leg strength to compensate for the lack of oxygen at altitude." },
          { question: "How heavy should my pack be during training?", answer: "Start with a light pack and gradually increase the weight over 12 weeks until you are carrying about 15-20 lbs (7-9 kg), which is heavier than your actual summit daypack." }
        ]
      },
      { 
        title: "Do You Need to Be an Athlete to Climb Kilimanjaro?", 
        slug: "athlete-requirement", 
        description: "Debunking myths about the fitness level required for the Kilimanjaro summit. Discover the true physical baseline needed to succeed.",
        author: { name: "Dr. Sarah T.", role: "High-Altitude Physiologist" },
        faqs: [
          { question: "Do I need to be a marathon runner?", answer: "No. Kilimanjaro requires slow, steady muscular endurance, not explosive cardiovascular speed." },
          { question: "What is the biggest physical challenge?", answer: "The continuous daily hiking (5-8 hours a day) combined with the physical toll of high altitude." }
        ]
      },
      { 
        title: "Mental Preparation for the Kilimanjaro Summit Night", 
        slug: "mental-preparation", 
        description: "Strategies for staying focused and overcoming mental barriers during the brutal 12-hour final push to Uhuru Peak.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "How hard is summit night?", answer: "It is the hardest part. You hike in freezing darkness on steep scree with 40% less oxygen. Mental resilience is crucial." },
          { question: "How do you stay motivated?", answer: "Break the climb into small milestones, trust your guide's pace, and focus on steady breathing rather than the peak above." }
        ]
      },
      {
        title: "How Hard is it to Climb Mount Kilimanjaro?",
        slug: "how-hard-is-it",
        description: "A realistic assessment of the physical and mental challenge of climbing Kilimanjaro, including terrain, weather, and altitude factors.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Is Kilimanjaro a technical climb?", answer: "No, it is a non-technical 'walk-up' mountain. You do not need ropes, crampons, or ice axes." },
          { question: "What is the overall success rate?", answer: "The overall success rate across all climbers is around 65%, but choosing a longer 8+ day route increases it to over 90%." }
        ]
      },
      {
        title: "Can You Climb Kilimanjaro Solo? Guide to Independent Trekking",
        slug: "solo-climb",
        description: "Everything you need to know about climbing Kilimanjaro solo. Park regulations require a licensed guide, but solo travelers can join group departures or book private treks.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Can you climb Kilimanjaro without a guide?", answer: "No. Tanzanian National Park regulations require all climbers to be accompanied by a licensed guide. However, solo travelers can book private guided treks or join open group departures." },
          { question: "Is it safe to climb Kilimanjaro as a solo traveler?", answer: "Yes, it is very safe. Solo travelers are paired with experienced guides and often join groups. The mountain infrastructure and guide system is well-established." },
          { question: "How much does a solo Kilimanjaro climb cost?", answer: "A private solo trek costs more than group rates, typically $3,500-$5,000 for a 7-day climb. Joining an open group departure brings the cost down to $2,200-$3,000." }
        ]
      },
      {
        title: "Kilimanjaro Age Limit: How Old (or Young) Can You Be?",
        slug: "age-limit",
        description: "Official age requirements for climbing Mount Kilimanjaro. The minimum age is 10 years for the summit, with no upper age limit. The oldest summiteer was 89 years old.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "What is the minimum age to climb Kilimanjaro?", answer: "The official KINAPA minimum age is 10 years to attempt the summit. Children must be accompanied by a parent or guardian." },
          { question: "Is there a maximum age limit?", answer: "There is no official upper age limit. The oldest person to summit Kilimanjaro was Anne Lorimor at age 89 in 2019. Many climbers in their 60s and 70s successfully summit." },
          { question: "What route is best for older climbers?", answer: "The Northern Circuit (9 days) or Lemosho (8 days) routes are recommended for older climbers because the longer duration allows better acclimatization." }
        ]
      }
    ]
  },
  {
    name: "Gear & Packing",
    slug: "gear",
    description: "Equipment is essential for surviving the varying climate zones on the mountain.",
    articles: [
      { 
        title: "Ultimate Kilimanjaro Packing List & Gear Guide", 
        slug: "ultimate-packing-list", 
        description: "The definitive 2026 Kilimanjaro packing list. Learn about the 5-layer thermal system, strict weight limits, and how to avoid the 'cotton is rotten' mistake.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "What is the weight limit for porters?", answer: "The strict ethical weight limit enforced by KPAP is 15kg (33 lbs) for your main duffel bag carried by a porter." },
          { question: "Can I rent gear in Tanzania?", answer: "Yes, it is highly recommended to rent bulky items like -15°C sleeping bags and thick down jackets in Moshi to save on luggage costs." },
          { question: "Do I really need 5 layers?", answer: "Yes. You will hike through a hot rainforest and a freezing arctic summit. A modular system of base layers, fleece, and a waterproof shell is critical." }
        ]
      },
      { 
        title: "The Best Hiking Boots for Mount Kilimanjaro", 
        slug: "best-boots", 
        description: "What to look for in Kilimanjaro footwear. Learn about stiffness, ankle support, waterproofing, and how to prevent summit-ending blisters.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Are running shoes okay for Kilimanjaro?", answer: "You can wear trail runners or sneakers around camp and on the lower slopes, but you absolutely need sturdy, waterproof high-ankle boots for the scree on summit night." },
          { question: "How do I avoid blisters?", answer: "Buy your boots at least 2 months in advance, wear them on training hikes, and use high-quality merino wool socks with a poly-liner." }
        ]
      },
      { 
        title: "What to Wear on Kilimanjaro Summit Night", 
        slug: "summit-night-gear", 
        description: "Tiered layering strategies for extreme cold. How to dress to survive -20°C temperatures and high winds at 5,895 meters.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "How cold does it get?", answer: "Temperatures on summit night can drop to -20°C (-4°F), excluding wind chill." },
          { question: "What pants should I wear?", answer: "Thermal base layer leggings, warm fleece or insulated pants, topped with a windproof and waterproof hard shell." }
        ]
      },
      { 
        title: "Renting Gear in Moshi vs. Bringing Your Own", 
        slug: "renting-vs-buying", 
        description: "Pros, cons, and costs of equipment logistics. Decide whether to rent sleeping bags and jackets locally or haul them on a plane.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Is rental gear good quality?", answer: "Reputable operators rent out high-quality, professionally cleaned gear from brands like Mountain Hardwear and The North Face." },
          { question: "What should I never rent?", answer: "Never rent your primary hiking boots. Boots must be broken in to your specific foot shape." }
        ]
      },
      { 
        title: "Sleeping Bags for Kilimanjaro: Temperature Ratings", 
        slug: "sleeping-bags", 
        description: "Ensuring you stay warm during those freezing alpine nights. Understanding European Norm (EN) ratings for extreme high-altitude camping.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "What temperature rating do I need?", answer: "You need a Four-Season sleeping bag with a Comfort Rating of at least -10°C (14°F) to -15°C (5°F)." },
          { question: "Down vs Synthetic sleeping bags?", answer: "Down is warmer for the weight and packs smaller, but synthetic insulates better if it somehow gets wet." }
        ]
      }
    ]
  },
  {
    name: "Health, Altitude, & Safety",
    slug: "health",
    description: "Altitude sickness is the primary reason people fail to reach the summit.",
    articles: [
      { 
        title: "Understanding Altitude Sickness (AMS) on Kilimanjaro", 
        slug: "ams-guide", 
        description: "The science of oxygen deprivation and how to spot symptoms of Acute Mountain Sickness (AMS), HACE, and HAPE.",
        author: { name: "Dr. Sarah T.", role: "High-Altitude Physiologist" },
        faqs: [
          { question: "What are the common symptoms of AMS?", answer: "Mild headaches, nausea, loss of appetite, shortness of breath, and fatigue are very common mild symptoms." },
          { question: "When does altitude sickness become dangerous?", answer: "If symptoms progress to severe confusion, loss of coordination (HACE), or coughing up frothy liquid (HAPE), immediate descent is required." }
        ]
      },
      { 
        title: "How to Prevent Altitude Sickness on Mount Kilimanjaro", 
        slug: "prevention-tips", 
        description: "Actionable strategies for successful acclimatization, including hydration protocols, climbing pace, and itinerary choices.",
        author: { name: "Dr. Sarah T.", role: "High-Altitude Physiologist" },
        faqs: [
          { question: "What is the best way to prevent AMS?", answer: "The absolute best prevention is time. Choose an itinerary that is 8 or 9 days long to give your body time to adapt." },
          { question: "How much water should I drink?", answer: "You should drink 3 to 4 liters of water per day to aid the acclimatization process." }
        ]
      },
      { 
        title: "Diamox for Kilimanjaro: Pros, Cons, and Side Effects", 
        slug: "diamox-guide", 
        description: "A look at the most common altitude medication (Acetazolamide). Learn how it works, when to take it, and common side effects like tingling.",
        author: { name: "Dr. Sarah T.", role: "High-Altitude Physiologist" },
        faqs: [
          { question: "Is Diamox a cheat?", answer: "No, Diamox doesn't mask symptoms; it actively speeds up your body's natural acclimatization process." },
          { question: "What are the side effects?", answer: "The most common side effect is a harmless tingling or 'pins and needles' sensation in the fingers, toes, and face." }
        ]
      },
      { 
        title: "What Travel Insurance Do You Need for Kilimanjaro?", 
        slug: "travel-insurance", 
        description: "Ensuring you are covered for high-altitude trekking. Learn why standard insurance won't work and what clauses to look for regarding helicopter evacuation.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Does my standard health insurance cover Kilimanjaro?", answer: "Usually not. You need specific travel insurance that covers 'High Altitude Trekking up to 6,000 meters'." },
          { question: "Do I need helicopter evacuation cover?", answer: "Yes, it is highly recommended. Ensure your policy covers emergency medical evacuation by helicopter from the mountain directly to a hospital." }
        ]
      },
      { 
        title: "Required and Recommended Vaccinations for Tanzania", 
        slug: "vaccinations", 
        description: "Medical entry requirements for your East African adventure. Details on Yellow Fever, Malaria prophylaxis, and routine boosters.",
        author: { name: "Dr. Sarah T.", role: "High-Altitude Physiologist" },
        faqs: [
          { question: "Do I need a Yellow Fever certificate?", answer: "If you are traveling from or transiting through (for more than 12 hours) a Yellow Fever endemic country, Tanzania requires proof of vaccination." },
          { question: "Is there Malaria on Kilimanjaro?", answer: "Mosquitoes cannot survive at high altitudes, so there is no Malaria on the mountain itself, but you are at risk in Moshi before and after the climb." }
        ]
      }
    ]
  },
  {
    name: "Budget, Costs, & Logistics",
    slug: "costs",
    description: "Climbing Kilimanjaro is expensive, and searchers want to know where their money goes.",
    articles: [
      { 
        title: "How Much Does it Really Cost to Climb Mount Kilimanjaro?", 
        slug: "cost-breakdown", 
        description: "A detailed look at permits, guides, food, and gear. Break down the $2,000 to $6,000 price tags seen across different expedition companies.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Where does most of the money go?", answer: "Tanzania National Park (TANAPA) fees are the largest expense, costing up to $1,000+ per climber just for the right to be on the mountain." },
          { question: "Can I climb without a guide to save money?", answer: "No, it is illegal to climb Mount Kilimanjaro without a licensed guide and registered crew." }
        ]
      },
      { 
        title: "Why You Shouldn't Book a 'Cheap' Kilimanjaro Tour", 
        slug: "cheap-tours-danger", 
        description: "The hidden costs of low-budget operators. Understand the ethics of porter treatment and the safety risks of cut-rate guide companies.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "What is considered a 'budget' climb?", answer: "Any 7+ day climb priced under $1,800 is generally considered a budget climb, often cutting corners on safety, food, or porter wages." },
          { question: "What is KPAP?", answer: "The Kilimanjaro Porters Assistance Project (KPAP) ensures that climbing companies treat their porters ethically, paying fair wages and providing proper gear/meals." }
        ]
      },
      { 
        title: "The Ultimate Tipping Guide for Kilimanjaro Guides and Porters", 
        slug: "tipping-guide", 
        description: "Industry standards and ethical considerations for tipping your mountain crew. Learn the per-day rates for guides, cooks, and porters.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Is tipping mandatory?", answer: "While technically optional, tipping is an expected and crucial part of the crew's income in the Kilimanjaro tourism industry." },
          { question: "How much should I tip overall?", answer: "Most climbers should budget between $250 and $400 for the tip pool, distributed among the entire crew at the end of the trek." }
        ]
      },
      { 
        title: "How to Get to Mount Kilimanjaro (Flights to JRO)", 
        slug: "how-to-get-there", 
        description: "A logistical guide to international and regional travel to Moshi/Arusha. Learn the best routes via KLM, Qatar, or Ethiopian Airlines.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "What is the closest airport?", answer: "Kilimanjaro International Airport (Code: JRO) is the closest airport, located about 45 minutes from the climbing base towns of Moshi and Arusha." },
          { question: "Can I fly into Nairobi?", answer: "Yes, many climbers fly into Nairobi (NBO) and take a 6-hour shuttle bus across the border to Moshi, which is often cheaper." }
        ]
      },
      { 
        title: "Tanzania Visa Requirements for Kilimanjaro Climbers", 
        slug: "visa-requirements", 
        description: "Navigating the entry requirements for Tanzania. Ensure you have the correct tourist passport documents and eVisa for a smooth arrival.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Do US citizens need a visa?", answer: "Yes, US citizens need a tourist visa, which costs $100 and can be applied for online (eVisa) before departure." },
          { question: "Can I get a visa on arrival?", answer: "Yes, many nationalities can get a visa on arrival at JRO, but getting an eVisa in advance saves time in airport queues." }
        ]
      }
    ]
  },
  {
    name: "Best Time to Go",
    slug: "climb",
    description: "Weather plays a huge factor in the climbing experience.",
    articles: [
      { 
        title: "When is the Best Time of Year to Climb Kilimanjaro?", 
        slug: "best-time", 
        description: "An overview of seasonal weather patterns. Find out why January-March and June-October offer the highest summit success rates.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "What are the dry seasons?", answer: "The primary dry seasons are from late June to October, and from late December to early March." },
          { question: "Is it warmer in January or July?", answer: "January is generally warmer and clearer, while July and August can be significantly colder on the summit, though both are dry." }
        ]
      },
      { 
        title: "Climbing Kilimanjaro During the Rainy Season", 
        slug: "rainy-season", 
        description: "Challenges and unexpected benefits of wet-season treks in April, May, and November. Learn how to prepare for rain and mud.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Are the trails open in the rainy season?", answer: "Yes, but the trails can be muddy and slippery, and cloud cover is frequent." },
          { question: "Why climb in the rainy season?", answer: "Because there are almost no crowds, you get the mountain to yourself, and the views above the clouds are spectacular." }
        ]
      },
      { 
        title: "Kilimanjaro Full Moon Climbs: Dates and Details", 
        slug: "full-moon-climbs", 
        description: "The magic of summiting under a bright lunar sky. Find out why these specific dates sell out quickly and how it helps the midnight push.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Do I need a headlamp on a full moon climb?", answer: "Usually, the moon is so bright reflecting off the glaciers that you can hike without a headlamp, which is an incredible experience." },
          { question: "Are full moon climbs more crowded?", answer: "Yes, these are the most popular dates of the year, so the trails and campsites will be significantly busier." }
        ]
      },
      { 
        title: "Understanding Kilimanjaro's 5 Climate Zones", 
        slug: "climate-zones", 
        description: "From rainforest to arctic desert in one week. Learn about the dramatic ecological shifts you experience during your vertical journey.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "What is the first climate zone?", answer: "The Cultivation/Rainforest Zone, extending up to about 2,800 meters, characterized by towering trees, humidity, and wildlife." },
          { question: "What is the summit zone?", answer: "The Arctic Zone (above 5,000 meters), featuring freezing temperatures, scarce oxygen, and volcanic rock with glaciers." }
        ]
      }
    ]
  },
  {
    name: "Life on the Mountain",
    slug: "life",
    description: "Searchers want to know what the day-to-day reality is like.",
    articles: [
      { 
        title: "A Day in the Life of a Kilimanjaro Climber", 
        slug: "day-in-life", 
        description: "The daily routine from 'washy-washy' wake-up calls to evening health checks and debriefs. Understand the rhythm of the mountain.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "What time do you wake up?", answer: "Usually around 6:00 AM, getting an early start to hike during the clearest, coolest part of the day." },
          { question: "What do you do when you get to camp?", answer: "Rest, wash up with provided warm water, have tea and snacks, and organize your gear for the night before dinner." }
        ]
      },
      { 
        title: "What Do You Eat While Climbing Kilimanjaro?", 
        slug: "food-and-nutrition", 
        description: "Fueling your body for a high-altitude challenge. Overview of the high-carb, easy-to-digest meals cooked by your mountain chefs.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Do I need to carry my own food?", answer: "No, a dedicated chef and team of porters carry all the food and cook three hot, nutritious meals per day for you in a mess tent." },
          { question: "Is the food safe and accommodated for diets?", answer: "Yes, professional chefs handle food hygiene strictly, and can easily accommodate vegetarian, vegan, and gluten-free diets." }
        ]
      },
      { 
        title: "Toilets and Hygiene on Kilimanjaro: What to Expect", 
        slug: "toilets-and-hygiene", 
        description: "Managing personal hygiene in a rugged mountain environment. Discover the truth about 'long drop' camp toilets and private portable potties.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "Are there flushing toilets?", answer: "No. Public toilets at camps are basic wooden 'long drop' squat toilets, which can be unhygienic and smell." },
          { question: "Should I rent a private toilet?", answer: "We highly recommend renting a private portable toilet tent. Your porters will clean and carry a western-style chemical toilet exclusively for your group." }
        ]
      },
      {
        title: "The Crucial Role of Kilimanjaro Porters",
        slug: "porters-role",
        description: "The unsung heroes who carry your camp. Learn how they balance 20kg loads on their heads while outpacing climbers, and why you couldn't summit without them.",
        author: { name: "David M.", role: "Lead Expedition Guide" },
        faqs: [
          { question: "How many porters per climber?", answer: "Usually, it requires 3 to 4 porters per climber to carry the tents, food, cooking equipment, and your personal 15kg duffel bag." },
          { question: "Do porters hike with us?", answer: "Porters typically leave camp after you, pack up all the tents, hike much faster than you, and have the next camp fully set up before you arrive." }
        ]
      },
      {
        title: "Kilimanjaro for Women: Tips, Groups & What to Expect",
        slug: "women-guide",
        description: "A practical guide for women climbing Kilimanjaro. Menstruation at altitude, women-only group treks, safety considerations, and tips from female guides and past climbers.",
        author: { name: "Sarah K.", role: "Gear & Logistics Specialist" },
        faqs: [
          { question: "Is Kilimanjaro safe for women?", answer: "Yes, Kilimanjaro is very safe for women. The mountain has excellent infrastructure, professional guides, and well-established camps. Many women climb solo or in women-only groups." },
          { question: "How do you manage menstruation on Kilimanjaro?", answer: "Bring extra supplies (pads, tampons, or a menstrual cup), zip-lock bags for disposal, and hand sanitizer. Altitude can sometimes delay or accelerate your cycle." },
          { question: "Are there women-only Kilimanjaro groups?", answer: "Yes, several operators offer women-only group departures. These are popular and provide a supportive environment with female guides and climbing partners." }
        ]
      }
    ]
  }
];
