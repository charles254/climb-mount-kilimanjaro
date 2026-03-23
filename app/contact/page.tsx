import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Summit",
  description: "Contact our expert Kilimanjaro guides in Nairobi for custom quotes, itineraries, and booking information. Start your 2026 expedition with the best.",
  keywords: "book Kilimanjaro trek, contact Kilimanjaro guides, Kilimanjaro quest office nairobi, custom kilimanjaro quotes",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Book Your <span className="text-amber-500">Summit</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to start your Kilimanjaro adventure? Get in touch with our expert guides in Nairobi for a custom quote and detailed itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-8">Our Headquarters</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-amber-500/10 p-4 rounded-2xl">
                    <MapPin className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 uppercase tracking-wider">Office Location</h3>
                    <p className="text-slate-400 leading-relaxed">Riverside Square, Riverside Drive<br />Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-amber-500/10 p-4 rounded-2xl">
                    <Mail className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 uppercase tracking-wider">Email Us</h3>
                    <p className="text-slate-400 font-medium">expeditions@kilimanjaroquest.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-amber-500/10 p-4 rounded-2xl">
                    <Phone className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 uppercase tracking-wider">Call or WhatsApp</h3>
                    <p className="text-slate-400 font-medium">+254 712 345 678</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-amber-500 mb-2">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">Live Status</span>
                </div>
                <p className="text-slate-400 text-sm">Our team is currently online. Average response time: <span className="text-white font-bold uppercase tracking-tight">under 10 minutes</span>.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Inquiry Form</h2>
            <ContactForm 
              source="Contact Page" 
              variant="light" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
