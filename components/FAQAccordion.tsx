"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ } from "@/lib/pseo-data";

interface FAQAccordionProps {
  items: FAQ[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, idx) => (
        <div 
          key={idx}
          className={`border rounded-2xl transition-all duration-300 ${
            openIndex === idx 
            ? "bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/5 text-white" 
            : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-4">
              <HelpCircle className={`h-5 w-5 transition-colors ${openIndex === idx ? "text-amber-500" : "text-slate-600 group-hover:text-slate-400"}`} />
              <span className={`font-bold transition-colors ${openIndex === idx ? "text-white" : "group-hover:text-slate-200"}`}>
                {faq.question}
              </span>
            </div>
            <motion.div
              animate={{ rotate: openIndex === idx ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className={`h-5 w-5 ${openIndex === idx ? "text-amber-500" : "text-slate-600"}`} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-slate-300 leading-relaxed border-t border-slate-800/50 mt-2">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
