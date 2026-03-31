"use client";

import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

const RECENT_BOOKINGS = [
  { name: "John", city: "London", route: "Lemosho 8 Days", time: "2 mins ago" },
  { name: "Sarah", city: "Nora", route: "Machame 7 Days", time: "5 mins ago" },
  { name: "Ahmed", city: "Dubai", route: "Northern Circuit", time: "3 mins ago" },
  { name: "Kiptoo", city: "Nairobi", route: "Marangu Express", time: "8 mins ago" },
  { name: "Elena", city: "Madrid", route: "Lemosho Route", time: "9 mins ago" },
  { name: "Michael", city: "New York", route: "Rongai Route", time: "1 min ago" },
];

export default function SalesPop() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    const cycleTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % RECENT_BOOKINGS.length);
        setIsVisible(true);
      }, 500);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  const booking = RECENT_BOOKINGS[index];

  return (
    <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-8 left-8 z-[90] hidden md:flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl max-w-sm"
        >
          <div className="bg-amber-500/20 p-3 rounded-xl">
            <ShoppingBag className="h-6 w-6 text-amber-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold truncate">
              {booking.name} from {booking.city}
            </p>
            <p className="text-slate-400 text-xs truncate">
              Just booked <span className="text-amber-500 font-bold">{booking.route}</span>
            </p>
            <p className="text-slate-400 text-[11px] uppercase font-black mt-1 tracking-widest">
              Verified Booking • {booking.time}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
    </LazyMotion>
  );
}
