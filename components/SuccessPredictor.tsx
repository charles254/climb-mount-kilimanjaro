"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { climbingRoutes } from "@/lib/pseo-data";
import { 
  ChevronRight, 
  ChevronLeft, 
  Mountain, 
  Calendar, 
  Trophy, 
  CheckCircle2, 
  AlertCircle,
  Zap
} from "lucide-react";

import ContactForm from "./ContactForm";

type Experience = "Beginner" | "Intermediate" | "Advanced";

export default function SuccessPredictor() {
  const [step, setStep] = useState(0);
  const [routeSlug, setRouteSlug] = useState(climbingRoutes[0].slug);
  const [days, setDays] = useState(7);
  const [experience, setExperience] = useState<Experience>("Beginner");
  const [showResult, setShowResult] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const selectedRoute = useMemo(() => 
    climbingRoutes.find(r => r.slug === routeSlug) || climbingRoutes[0],
  [routeSlug]);

  const calculateSuccess = () => {
    const baseRate = parseInt(selectedRoute.success_rate);
    const minDays = parseInt(selectedRoute.duration.split('-')[0]);
    
    // Duration bonus: +5% per day over minimum
    const durationBonus = Math.max(0, (days - minDays) * 5);
    
    // Experience bonus
    const expBonus = experience === "Advanced" ? 10 : experience === "Intermediate" ? 5 : 0;
    
    const total = Math.min(98, baseRate + durationBonus + expBonus);
    return total;
  };

  const successRate = calculateSuccess();

  const nextStep = () => setStep(s => Math.min(2, s + 1));
  const prevStep = () => setStep(s => Math.max(0, s - 1));

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  if (showResult) {
    return (
      <div className="bg-slate-900 rounded-3xl p-8 border border-amber-500/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Trophy className="h-32 w-32 text-amber-500" />
        </div>
        
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Your Success Prediction</h3>
          
          <div className="relative inline-flex items-center justify-center mb-8">
            <svg className="w-48 h-48">
              <circle
                className="text-slate-800"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="96"
                cy="96"
              />
              <motion.circle
                className="text-amber-500"
                strokeWidth="8"
                strokeDasharray={440}
                initial={{ strokeDashoffset: 440 }}
                animate={{ strokeDashoffset: 440 - (440 * successRate) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="96"
                cy="96"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-white">{successRate}%</span>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-tighter">Chance of Summit</span>
            </div>
          </div>

          <div className="space-y-4 mb-10 max-w-md mx-auto">
            <div className="flex items-start gap-3 text-left bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Winning Strategy</p>
                <p className="text-slate-400 text-xs">The {selectedRoute.name} with {days} days provides excellent acclimatization.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <Zap className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Pro Tip</p>
                <p className="text-slate-400 text-xs">As a {experience.toLowerCase()}, focus on slow rhythmic breathing (Pole Pole) from Day 1.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                setShowResult(false);
                setShowLeadForm(false);
              }}
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Start Over
            </button>
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Get Personalized Itinerary <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {showLeadForm && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 z-50 bg-slate-900 flex flex-col p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">Save Your Plan</h4>
                  <button 
                    onClick={() => setShowLeadForm(false)}
                    className="text-slate-500 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <p className="text-slate-400 text-sm mb-6 text-left">
                  We'll send the full **{days}-day {selectedRoute.name}** itinerary to your inbox.
                </p>
                <ContactForm 
                  source={`Success Predictor: ${selectedRoute.name} (${days} days, ${experience})`}
                  variant="dark"
                  className="text-left"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" /> Success Predictor
        </h3>
        <div className="flex gap-1">
          {[0, 1, 2].map(i => (
            <div 
              key={i} 
              className={`h-1.5 w-8 rounded-full transition-all ${step >= i ? 'bg-amber-500' : 'bg-slate-800'}`} 
            />
          ))}
        </div>
      </div>

      <div className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait" custom={step}>
          <motion.div
            key={step}
            custom={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {step === 0 && (
              <div className="space-y-6">
                <div className="mb-4">
                  <h4 className="text-white font-bold text-lg mb-2">1. Choose Your Route</h4>
                  <p className="text-slate-400 text-sm">Each route has a unique success profile based on path and altitude.</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {climbingRoutes.map(route => (
                    <button
                      key={route.slug}
                      onClick={() => setRouteSlug(route.slug)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                        routeSlug === route.slug 
                        ? 'bg-amber-500/10 border-amber-500 text-white' 
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <Mountain className={`h-5 w-5 ${routeSlug === route.slug ? 'text-amber-500' : 'text-slate-500'}`} />
                        <div>
                          <p className="font-bold">{route.name}</p>
                          <p className="text-xs opacity-60">Base Success: {route.success_rate}</p>
                        </div>
                      </div>
                      {routeSlug === route.slug && <CheckCircle2 className="h-5 w-5 text-amber-500" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">2. How many days?</h4>
                  <p className="text-slate-400 text-sm">More days = Better acclimatization = Higher success.</p>
                </div>
                
                <div className="text-center py-10">
                  <div className="text-6xl font-black text-amber-500 mb-4">{days} <span className="text-2xl text-white">Days</span></div>
                  <input 
                    type="range" 
                    min="5" 
                    max="10" 
                    step="1" 
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between mt-4 text-xs text-slate-500 uppercase font-bold tracking-widest">
                    <span>Fast Trek</span>
                    <span>Slow & Steady</span>
                  </div>
                </div>

                <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Most experts recommend at least 7 days for {selectedRoute.name} to minimize Altitude Sickness (AMS).
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">3. Your Experience</h4>
                  <p className="text-slate-400 text-sm">Trekking experience helps you manage energy on summit night.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {(["Beginner", "Intermediate", "Advanced"] as Experience[]).map(exp => (
                    <button
                      key={exp}
                      onClick={() => setExperience(exp)}
                      className={`p-6 rounded-2xl border text-left transition-all ${
                        experience === exp 
                        ? 'bg-amber-500/10 border-amber-500 text-white ring-2 ring-amber-500/20' 
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <h5 className="font-bold text-lg mb-1">{exp}</h5>
                      <p className="text-xs opacity-60">
                        {exp === "Beginner" && "Occasional hiker, first high altitude trek."}
                        {exp === "Intermediate" && "Regular hiker, familiar with multi-day treks."}
                        {exp === "Advanced" && "Experienced climber, comfortable with extreme conditions."}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex gap-4">
        {step > 0 && (
          <button 
            onClick={prevStep}
            className="flex-1 px-4 py-4 rounded-xl border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <ChevronLeft className="h-5 w-5" /> Back
          </button>
        )}
        {step < 2 ? (
          <button 
            onClick={nextStep}
            className="flex-[2] bg-slate-800 hover:bg-slate-700 text-white px-4 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            Next Step <ChevronRight className="h-5 w-5" />
          </button>
        ) : (
          <button 
            onClick={() => setShowResult(true)}
            className="flex-[2] bg-amber-600 hover:bg-amber-700 text-white px-4 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Calculate My Chance <Trophy className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
