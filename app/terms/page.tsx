import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | KiliGo Kilimanjaro Treks',
  description:
    'Terms of service and booking conditions for Kilimanjaro expeditions. Read our cancellation policy, safety requirements, and insurance guidelines.',
  keywords: [
    'terms of service',
    'booking conditions',
    'Kilimanjaro terms',
    'cancellation policy',
    'expedition terms',
  ],
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsConditions() {
  return (
    <div className="bg-slate-950 min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 font-display uppercase italic tracking-tight italic">Terms & Conditions</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Booking Conditions</h2>
            <p>All bookings are subject to availability and the payment of the required deposit. By booking with us, you agree to these Terms & Conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Medical Fitness</h2>
            <p>Kilimanjaro is a high-altitude peak. It is your responsibility to ensure you are medically fit for the trek. We strongly recommend a medical check-up before departure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Cancellation Policy</h2>
            <p>Cancellatons must be made in writing. Charges vary depending on the lead time before the departure date. Detailed cancellation tables are provided in your booking documentation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Safety & Insurance</h2>
            <p>Comprehensive travel and mountain rescue insurance is mandatory for all participants. Our guides have final authority on safety decisions on the mountain.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
