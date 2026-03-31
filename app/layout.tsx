import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/config";

const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"));
const SalesPop = dynamic(() => import("@/components/SalesPop"));

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["700", "800", "900"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Climb Mount Kilimanjaro",
  },
  description: "Climb Mount Kilimanjaro with top-rated local guides. Best success rates, premium safety, and specialized treks from Nairobi.",
  keywords: "Climb Mount Kilimanjaro, Mount Kilimanjaro guide, Kilimanjaro treks, best time to climb Kilimanjaro, Kilimanjaro routes, climb Kili from Nairobi",
  verification: {
    google: "JPNe0xFvKkZan6QHESSVax3kk9Tf6I4FTmYjZyUBPAY",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Climb Mount Kilimanjaro | Expert Guided Treks",
    description: "Join the best Kilimanjaro guides for a safe and successful summit. Specialized treks for expats and regional travelers.",
    url: "https://kiligo.net",
    siteName: "KiliGo",
    images: [
      {
        url: "/images/rugged_kilimanjaro_hero.webp",
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
    images: ["/images/rugged_kilimanjaro_hero.webp"],
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
              "name": "KiliGo",
              "description": "Expert-led Kilimanjaro treks with the ultimate quest perspective.",
              "url": "https://kiligo.net",
              "telephone": "+254 712 345 678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Riverside Drive",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "image": "https://kiligo.net/images/hero.png",
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
