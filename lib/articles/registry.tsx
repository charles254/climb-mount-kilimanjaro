import React from 'react';
import { TrainingPlanArticle } from './preparation/training-plan';
import { PackingListArticle } from './gear/packing-list';
import { AMSArticle } from './health/ams-guide';
import { DiamoxGuideArticle } from './health/diamox-guide';
import { BeginnerRouteArticle } from './routes/best-route-beginners';
import { LemoshoVsMachameArticle } from './routes/lemosho-vs-machame';
import { MaranguArticle } from './routes/marangu-guide';
import { NorthernCircuitArticle } from './routes/northern-circuit-guide';
import { UmbweArticle } from './routes/umbwe-guide';
import { CostBreakdownArticle } from './costs/cost-breakdown';
import { CheapToursDangerArticle } from './costs/cheap-tours-danger';
import { TippingGuideArticle } from './costs/tipping-guide';
import { BestTimeArticle } from './climb/best-time';
import { RainySeasonArticle } from './climb/rainy-season';
import { AthleteRequirementArticle } from './preparation/athlete-requirement';
import { MentalPreparationArticle } from './preparation/mental-preparation';
import { BestBootsArticle } from './gear/best-boots';
import { HowHardIsItArticle } from './preparation/how-hard-is-it';
import { FullMoonClimbsArticle } from './climb/full-moon-climbs';
import { ClimateZonesArticle } from './climb/climate-zones';
import { DayInLifeArticle } from './life/day-in-life';
import { FoodAndNutritionArticle } from './life/food-and-nutrition';
import { ToiletsAndHygieneArticle } from './life/toilets-and-hygiene';
import { HowToGetThereArticle } from './costs/how-to-get-there';
import { VisaRequirementsArticle } from './costs/visa-requirements';
import { SummitNightGearArticle } from './gear/summit-night-gear';
import { RentingVsBuyingArticle } from './gear/renting-vs-buying';
import { SleepingBagsArticle } from './gear/sleeping-bags';
import { PortersRoleArticle } from './life/porters-role';

// Export as components (Function Components), not as pre-rendered elements
export const articleContentRegistry: Record<string, React.ComponentType> = {
  'training-plan': TrainingPlanArticle,
  'ultimate-packing-list': PackingListArticle,
  'ams-guide': AMSArticle,
  'diamox-guide': DiamoxGuideArticle,
  'best-route-beginners': BeginnerRouteArticle,
  'lemosho-vs-machame': LemoshoVsMachameArticle,
  'marangu-guide': MaranguArticle,
  'northern-circuit-guide': NorthernCircuitArticle,
  'umbwe-guide': UmbweArticle,
  'cost-breakdown': CostBreakdownArticle,
  'cheap-tours-danger': CheapToursDangerArticle,
  'tipping-guide': TippingGuideArticle,
  'best-time': BestTimeArticle,
  'rainy-season': RainySeasonArticle,
  'athlete-requirement': AthleteRequirementArticle,
  'mental-preparation': MentalPreparationArticle,
  'best-boots': BestBootsArticle,
  'how-hard-is-it': HowHardIsItArticle,
  'full-moon-climbs': FullMoonClimbsArticle,
  'climate-zones': ClimateZonesArticle,
  'day-in-life': DayInLifeArticle,
  'food-and-nutrition': FoodAndNutritionArticle,
  'toilets-and-hygiene': ToiletsAndHygieneArticle,
  'porters-role': PortersRoleArticle,
  'how-to-get-there': HowToGetThereArticle,
  'visa-requirements': VisaRequirementsArticle,
  'summit-night-gear': SummitNightGearArticle,
  'renting-vs-buying': RentingVsBuyingArticle,
  'sleeping-bags': SleepingBagsArticle,
};
