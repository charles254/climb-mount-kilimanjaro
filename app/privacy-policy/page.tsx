import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Our commitment to protecting your personal data during your Kilimanjaro expedition planning. Learn how we collect, use, and safeguard your information.',
  keywords: [
    'privacy policy',
    'data protection',
    'Kilimanjaro',
    'personal data',
    'expedition planning privacy',
  ],
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 font-display uppercase italic tracking-tight italic">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p className="text-slate-400">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us through our contact forms, such as your name, email address, and trip details. This information is used only to provide you with the services you requested.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. How We Use Informtion</h2>
            <p>Your data is used to coordinate your trek, process your booking, and communicate essential safety information. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at info@kiligo.net.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
