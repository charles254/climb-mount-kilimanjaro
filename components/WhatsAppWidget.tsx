"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONFIG } from "@/lib/config";

export default function WhatsAppWidget() {
  const message = encodeURIComponent("Hi KiliGo! I'm interested in climbing Mount Kilimanjaro. Can you help me with some details?");
  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${message}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group relative flex items-center justify-center w-16 h-16 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full bg-amber-600 animate-ping opacity-20 group-hover:hidden" />
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
          Chat with an Expert 🏔️
        </div>
      </a>
    </motion.div>
  );
}
