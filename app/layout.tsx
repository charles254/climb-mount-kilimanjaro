import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climb Mount Kilimanjaro | #1 Guided Treks & Tours [2026 Guide]",
  description: "Climb Mount Kilimanjaro with the top-rated local guides. Experience the best success rates, premium safety standards, and specialized treks from Nairobi. Start your adventure today!",
  keywords: "Climb Mount Kilimanjaro, Mount Kilimanjaro guide, Kilimanjaro treks, best time to climb Kilimanjaro, Kilimanjaro routes, climb Kili from Nairobi",
  metadataBase: new URL("http://localhost:3001"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Climb Mount Kilimanjaro | Expert Guided Treks",
    description: "Join the best Kilimanjaro guides for a safe and successful summit. Specialized treks for expats and regional travelers.",
    url: "http://localhost:3001",
    siteName: "Kili Trailblazers",
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
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Kili Trailblazers",
              "description": "Expert-led Kilimanjaro treks with a unique Kenyan perspective.",
              "url": "http://localhost:3001",
              "telephone": "+254 712 345 678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Riverside Drive",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "image": "http://localhost:3001/images/hero.png",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
