import { FAQ } from './pseo-data';

export interface Persona {
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  recommended_routes: string[];    // slugs from climbingRoutes
  recommended_duration: string;
  key_concerns: string[];
  gear_priorities: string[];
  training_tip: string;
  success_insight: string;
  budget_range: string;
  best_months: string;
  faqs: FAQ[];
}

export const personas: Persona[] = [
  {
    slug: "beginners",
    name: "Beginners",
    headline: "Climb Kilimanjaro as a First-Timer",
    description: "Complete beginner's guide to climbing Mount Kilimanjaro. Route recommendations, training plans, and expert tips for first-time high-altitude trekkers with no prior experience.",
    intro: "You don't need to be an experienced mountaineer to summit Kilimanjaro. Thousands of beginners reach Uhuru Peak every year with the right route selection, adequate preparation, and expert guidance. The key is choosing a longer route that gives your body time to acclimatize.",
    recommended_routes: ["lemosho", "northern-circuit"],
    recommended_duration: "8-9 days",
    key_concerns: ["Altitude sickness prevention", "Physical fitness requirements", "What to expect on summit night", "Choosing the right operator"],
    gear_priorities: ["Quality hiking boots (broken in)", "Layered clothing system", "Warm sleeping bag (-15°C rated)", "Trekking poles for stability"],
    training_tip: "Start training 12 weeks before your climb. Focus on cardio endurance: stair climbing, long hikes with a loaded backpack, and brisk walking. Aim for 3-4 sessions per week, gradually increasing intensity.",
    success_insight: "Beginners on 8-day routes like Lemosho have a 95% summit success rate compared to just 65% on the 5-day Marangu route. The extra days are the single most important factor for first-timers.",
    budget_range: "$2,500 - $4,500 USD",
    best_months: "January, February, July, August, September",
    faqs: [
      { question: "Can a complete beginner climb Kilimanjaro?", answer: "Yes. Kilimanjaro is a non-technical trek requiring no mountaineering skills. With proper preparation and an 8+ day route, beginners consistently achieve summit success rates above 90%." },
      { question: "How fit do I need to be as a beginner?", answer: "You should be able to hike 6-8 hours with a daypack before your trip. You don't need elite fitness, but 12 weeks of training with cardio, hiking, and stair climbing is strongly recommended." },
      { question: "What is the easiest route for beginners?", answer: "The 8-day Lemosho Route offers the best balance of scenery, success rate (95%), and manageable daily distances. The Northern Circuit (9 days) has the highest success rate at 98% but is longer." }
    ]
  },
  {
    slug: "seniors",
    name: "Seniors (50+)",
    headline: "Climb Kilimanjaro Over 50",
    description: "Guide to climbing Mount Kilimanjaro for travelers over 50. Age-appropriate route selection, medical preparation, pacing strategies, and success stories from senior climbers.",
    intro: "Age is not a barrier to climbing Kilimanjaro. Climbers in their 60s and 70s regularly reach the summit. The keys are choosing the longest route available, getting a thorough medical check-up, and prioritizing the 'pole pole' (slowly, slowly) approach that experienced guides emphasize.",
    recommended_routes: ["lemosho", "northern-circuit"],
    recommended_duration: "9 days",
    key_concerns: ["Pre-existing medical conditions at altitude", "Recovery time between hiking days", "Knee and joint stress on descent", "Acclimatization pace"],
    gear_priorities: ["Trekking poles (essential for joint support)", "Knee braces or supports", "Extra warm layers (circulation)", "Comfortable, well-fitted boots"],
    training_tip: "Begin training 16 weeks ahead. Focus on low-impact cardio: swimming, cycling, and incline walking. Add strength work for legs and core. Practice hiking downhill with poles — descents cause the most joint strain.",
    success_insight: "Climbers over 50 who choose the 9-day Northern Circuit have a 96% summit rate. The slower pace actually suits mature climbers who tend to be more patient and disciplined with the 'pole pole' philosophy.",
    budget_range: "$3,500 - $5,500 USD",
    best_months: "January, February, September",
    faqs: [
      { question: "Is there an age limit for climbing Kilimanjaro?", answer: "There is no upper age limit. The oldest person to summit was 89 years old. What matters is your fitness level and medical clearance, not your birth certificate." },
      { question: "Should I take Diamox if I'm over 50?", answer: "Consult your doctor before the trip. Diamox (Acetazolamide) is commonly prescribed for altitude sickness prevention and is generally safe for older adults, but interactions with existing medications must be checked." },
      { question: "What medical tests should I get before climbing?", answer: "Get a full physical exam including cardiac stress test, blood pressure check, and lung function test. Discuss your altitude plans with your doctor at least 3 months before departure." }
    ]
  },
  {
    slug: "families",
    name: "Families",
    headline: "Climb Kilimanjaro with Your Family",
    description: "Family guide to climbing Mount Kilimanjaro. Age requirements, child-friendly routes, safety considerations, and how to plan a multi-generational Kilimanjaro expedition.",
    intro: "Climbing Kilimanjaro as a family is an unforgettable bonding experience. Tanzania National Parks Authority (TANAPA) requires climbers to be at least 10 years old, though we recommend 12+ for the full summit attempt. Family groups benefit from private treks with customized pacing.",
    recommended_routes: ["lemosho", "machame"],
    recommended_duration: "8 days",
    key_concerns: ["Minimum age requirements (10+ years)", "Youth altitude sensitivity", "Group pacing for mixed fitness levels", "Emergency evacuation plans for minors"],
    gear_priorities: ["Youth-sized gear (boots, pack, sleeping bag)", "Extra snacks and comfort food", "Entertainment for rest days", "Family first aid kit with pediatric medications"],
    training_tip: "Train together as a family for 12 weeks. Make weekend hikes a family activity, gradually increasing distance and elevation. Kids often have great cardiovascular fitness but need to build endurance for multi-hour days.",
    success_insight: "Family groups on private treks with 8+ days have excellent success rates. Children acclimatize similarly to adults, and their natural enthusiasm often carries the group through challenging sections like the Barranco Wall.",
    budget_range: "$2,500 - $4,000 USD per person",
    best_months: "July, August, December (school holidays)",
    faqs: [
      { question: "What is the minimum age to climb Kilimanjaro?", answer: "TANAPA requires climbers to be at least 10 years old. We recommend 12+ for the full summit attempt, and suggest families with younger children consider the Shira Plateau day hike instead." },
      { question: "Is Kilimanjaro safe for teenagers?", answer: "Yes, with proper preparation. Teenagers generally acclimatize well and have good cardiovascular fitness. We assign an additional guide per family group for safety." },
      { question: "Can grandparents and grandchildren climb together?", answer: "Absolutely. Multi-generational climbs are becoming popular. A private 9-day trek allows the group to set their own pace, and our guides are experienced in managing mixed-age groups." }
    ]
  },
  {
    slug: "solo-travelers",
    name: "Solo Travelers",
    headline: "Climb Kilimanjaro Solo",
    description: "Solo traveler's guide to climbing Kilimanjaro. How to join a group, safety tips, costs for solo climbers, and why climbing alone is one of the best ways to experience the mountain.",
    intro: "Solo travelers make up a significant portion of Kilimanjaro climbers, and many describe it as a life-changing experience. You can join a scheduled group departure to share costs and meet fellow adventurers, or book a private trek for the ultimate personal challenge.",
    recommended_routes: ["lemosho", "machame"],
    recommended_duration: "7-8 days",
    key_concerns: ["Finding group departures to share costs", "Solo safety on the mountain", "Meeting fellow climbers", "Single supplement charges"],
    gear_priorities: ["Lightweight, packable gear for travel", "Journal or camera for documenting", "Power bank for devices", "Quick-dry layers for efficiency"],
    training_tip: "Train independently with a focus on self-sufficiency. Practice hiking alone for 6-8 hours with a full pack. Building mental resilience is as important as physical fitness for solo climbers.",
    success_insight: "Solo climbers who join group departures often report stronger motivation from the group dynamic. The shared challenge of summit night creates bonds that last long after the mountain.",
    budget_range: "$2,200 - $3,800 USD",
    best_months: "January, February, July, August, September",
    faqs: [
      { question: "Can I climb Kilimanjaro alone without a guide?", answer: "No. Tanzania law requires all climbers to be accompanied by a licensed guide. However, you can book a private trek as a solo climber with your own guide and support team." },
      { question: "How do I join a group trek as a solo traveler?", answer: "We offer fixed-date group departures monthly. You'll be paired with 4-8 other climbers. It's the most cost-effective option and a great way to meet people from around the world." },
      { question: "Is there a single supplement for solo climbers?", answer: "For private treks, there may be a supplement since costs are not shared. Group departures have no supplement — you pay the same per-person rate as everyone else." }
    ]
  },
  {
    slug: "corporate-groups",
    name: "Corporate Groups",
    headline: "Kilimanjaro Corporate Team Building",
    description: "Corporate team building on Mount Kilimanjaro. How to organize group expeditions, team bonding benefits, logistics for 10-50 person groups, and CSR impact through ethical trekking.",
    intro: "A Kilimanjaro expedition is the ultimate corporate team-building experience. Climbing Africa's highest peak together builds trust, resilience, and shared purpose that no conference room exercise can match. We specialize in groups of 10-50 with dedicated logistics coordinators.",
    recommended_routes: ["lemosho", "machame"],
    recommended_duration: "8 days",
    key_concerns: ["Group logistics for 10-50 people", "Varying fitness levels within the team", "Corporate liability and insurance", "CSR and ethical trekking practices"],
    gear_priorities: ["Branded team gear (optional)", "Group first aid supplies", "Communication equipment", "Matching summit celebration gear"],
    training_tip: "Launch a 16-week corporate training program. Create accountability groups within the team. Host group training hikes on weekends. Consider bringing in a fitness coach for kick-off sessions.",
    success_insight: "Corporate groups with structured pre-trip training programs see 15% higher summit rates than untrained groups. The team accountability factor drives consistent preparation.",
    budget_range: "$2,800 - $5,000 USD per person",
    best_months: "January, February, June, September",
    faqs: [
      { question: "How large can a corporate group be on Kilimanjaro?", answer: "We handle groups from 10 to 50 people. Larger groups are split into sub-teams of 8-12 with dedicated guides, then reunite at camps. This maintains safety standards while preserving the team experience." },
      { question: "What happens if a team member can't continue?", answer: "Every group has dedicated safety guides who can escort anyone down safely at any point. The rest of the team continues with full guide support. This is planned for in advance." },
      { question: "Can we add a safari or CSR component?", answer: "Absolutely. We regularly add 2-3 day Serengeti or Ngorongoro safaris after the trek, and can arrange community visits or school supply donations in local Chagga villages." }
    ]
  },
  {
    slug: "women",
    name: "Women",
    headline: "Women's Guide to Climbing Kilimanjaro",
    description: "A woman's guide to climbing Kilimanjaro. Female-specific preparation tips, safety, hygiene, all-women group treks, and inspiration from women who have summited.",
    intro: "Women make up an increasing proportion of Kilimanjaro climbers and have summit rates equal to men. From menstrual management at altitude to all-women group departures, this guide covers everything female climbers need to know for a confident, safe, and successful expedition.",
    recommended_routes: ["lemosho", "northern-circuit"],
    recommended_duration: "8-9 days",
    key_concerns: ["Hygiene and menstrual management at altitude", "All-women group options", "Safety and personal space", "Altitude effects on hormonal cycles"],
    gear_priorities: ["Quality sports bras for multi-day trekking", "Pee funnel for convenience at altitude", "Personal hygiene kit (biodegradable)", "Warm base layers that wick moisture"],
    training_tip: "Follow the same 12-week training program as any climber. Track your menstrual cycle relative to your climb dates. If your period falls during the trek, altitude may delay or lighten it — bring supplies regardless.",
    success_insight: "Women often excel on Kilimanjaro due to better pacing discipline. Studies show female climbers are more likely to follow the 'pole pole' approach, which directly correlates with higher summit success.",
    budget_range: "$2,500 - $4,500 USD",
    best_months: "January, February, July, August, September",
    faqs: [
      { question: "Are there women-only Kilimanjaro group treks?", answer: "Yes, we offer scheduled all-women group departures with female lead guides. These are popular and create a supportive, empowering environment on the mountain." },
      { question: "How do I manage my period on Kilimanjaro?", answer: "Bring your preferred menstrual products (the mountain has no shops). Altitude can delay or lighten periods. A menstrual cup is popular for trekking as it's reusable. Carry zip-lock bags for waste." },
      { question: "Are there private toilet facilities?", answer: "Yes, all our treks include a private portable toilet for your group. At camps, there are also basic shared facilities. We prioritize hygiene and privacy for all climbers." }
    ]
  }
];

export function getPersonaBySlug(slug: string) {
  return personas.find(p => p.slug === slug);
}
