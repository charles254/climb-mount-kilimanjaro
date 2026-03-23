import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import SalesPop from "@/components/SalesPop";
import { SITE_URL } from "@/lib/config";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kilimanjaro Quest",
    default: "Climb Mount Kilimanjaro | Kilimanjaro Quest",
  },
  description: "Climb Mount Kilimanjaro with the top-rated local guides. Experience the best success rates, premium safety standards, and specialized treks from Nairobi. Start your adventure today!",
  keywords: "Climb Mount Kilimanjaro, Mount Kilimanjaro guide, Kilimanjaro treks, best time to climb Kilimanjaro, Kilimanjaro routes, climb Kili from Nairobi",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Climb Mount Kilimanjaro | Expert Guided Treks",
    description: "Join the best Kilimanjaro guides for a safe and successful summit. Specialized treks for expats and regional travelers.",
    url: "https://kilimanjaroquest.com",
    siteName: "Kilimanjaro Quest",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Climb Mount Kilimanjaro Summit at Sunrise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climb Mount Kilimanjaro | Expert Guided Treks",
    description: "Experience the majestic Kilimanjaro with local experts. High success rates and premium safety standards.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} bg-slate-950 text-slate-100 antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Kilimanjaro Quest",
              "description": "Expert-led Kilimanjaro treks with the ultimate quest perspective.",
              "url": "https://kilimanjaroquest.com",
              "telephone": "+254 712 345 678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Riverside Drive",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "image": "https://kilimanjaroquest.com/images/hero.png",
              "priceRange": "$$$",
              "areaServed": "Mount Kilimanjaro",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kilimanjaro Treks",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lemosho Route Trek"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machame Route Trek"
                    }
                  }
                ]
              }
            })
          }}
        />
        <Navbar />
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <SalesPop />
      </body>
    </html>
  );
}
