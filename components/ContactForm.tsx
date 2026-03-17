"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface ContactFormProps {
  source?: string; // e.g., "Homepage", "Contact Page", "Success Predictor"
  className?: string;
  variant?: "dark" | "light";
}

export default function ContactForm({ 
  source = "General Enquiry", 
  className = "", 
  variant = "dark" 
}: ContactFormProps) {
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("LOADING");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Add metadata
    data.source = source;
    data.submittedAt = new Date().toISOString();

    try {
      if (CONFIG.FORMSPREE_ID === "placeholder") {
        // Mock success if no ID set yet to let user see the UI
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.warn("Form submitted with placeholder ID. Set your Formspree ID in lib/config.ts");
      } else {
        const response = await fetch(`https://formspree.io/f/${CONFIG.FORMSPREE_ID}`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error("Failed to send message. Please try again.");
        }
      }

      setStatus("SUCCESS");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("ERROR");
      setErrorMessage(err.message || "Something went wrong.");
    }
  }

  if (status === "SUCCESS") {
    return (
      <div className={`bg-slate-900/50 border border-green-500/30 p-8 rounded-2xl text-center shadow-xl ${className}`}>
        <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-6">Thank you for reaching out. A Kilimanjaro expert will contact you within 24 hours.</p>
        <button 
          onClick={() => setStatus("IDLE")}
          className="text-amber-500 font-bold hover:text-amber-400 transition-colors uppercase tracking-widest text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={`border px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
            variant === "dark" 
            ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" 
            : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className={`border px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
            variant === "dark" 
            ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" 
            : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
          }`}
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (WhatsApp preferred)"
        className={`w-full border px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
          variant === "dark" 
          ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" 
          : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
        }`}
      />
      <textarea
        name="message"
        placeholder="Tell us about your dream climb (Travel dates, preferred route...)"
        rows={4}
        required
        className={`w-full border px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none ${
          variant === "dark" 
          ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" 
          : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
        }`}
      ></textarea>
      
      {status === "ERROR" && (
        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
          <AlertCircle className="h-4 w-4" /> {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "LOADING"}
        className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest ${
          variant === "dark"
          ? "bg-amber-600 hover:bg-amber-700 text-white"
          : "bg-slate-900 hover:bg-slate-800 text-white"
        }`}
      >
        {status === "LOADING" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Request Free Consultation <Send className="h-4 w-4 ml-1" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-slate-500 italic">No spam, just expert advice. Guaranteed response within 24h.</p>
    </form>
  );
}
