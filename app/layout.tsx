import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
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
    default: "Climb Mount Kilimanjaro — Guided Treks by KiliGo",
  },
  description: "Climb Kilimanjaro with WFR-certified guides. 95% summit rate, small groups, 7-9 day routes, and Nairobi pickup included.",
  keywords: "Climb Mount Kilimanjaro, Mount Kilimanjaro guide, Kilimanjaro treks, best time to climb Kilimanjaro, Kilimanjaro routes, climb Kili from Nairobi, Uhuru Peak, guided Kilimanjaro expedition",
  verification: {
    google: "JPNe0xFvKkZan6QHESSVax3kk9Tf6I4FTmYjZyUBPAY",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Climb Mount Kilimanjaro in 2026 — Guided Treks With 95% Summit Rate",
    description: "Book a guided Kilimanjaro climb with WFR-certified local guides. Small groups, 7-9 day routes, 95% summit success, and Nairobi pickup included.",
    url: "https://kiligo.net",
    siteName: "KiliGo",
    images: [
      {
        url: "/images/rugged_kilimanjaro_hero.webp",
        width: 1200,
        height: 630,
        alt: "Sunrise view from Uhuru Peak on Mount Kilimanjaro with climbers on the summit ridge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climb Mount Kilimanjaro in 2026 — Guided Treks With 95% Summit Rate",
    description: "Climb Kilimanjaro with WFR-certified guides and a 95% summit rate. Small groups, Nairobi logistics, and free custom itineraries.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JQP5XQ1MJ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JQP5XQ1MJ4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "KiliGo",
              "description": "Nairobi-based Kilimanjaro expedition company offering guided treks with WFR-certified guides and a 95% summit success rate.",
              "url": "https://kiligo.net",
              "telephone": "+254 712 345 678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Riverside Drive",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "image": "https://kiligo.net/images/rugged_kilimanjaro_hero.webp",
              "priceRange": "$$$",
              "areaServed": "Mount Kilimanjaro",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "523",
                "bestRating": "5"
              },
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
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marangu Route Trek"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Northern Circuit Route Trek"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rongai Route Trek"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Umbwe Route Trek"
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
