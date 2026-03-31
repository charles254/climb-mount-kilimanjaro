import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Climbing Kilimanjaro",
  description:
    "A comprehensive guide covering everything you need to know about climbing Mount Kilimanjaro — routes, preparation, gear, health, costs, and more.",
  keywords: [
    "Kilimanjaro guide",
    "climb Kilimanjaro",
    "Mount Kilimanjaro",
    "Kilimanjaro routes",
    "Kilimanjaro preparation",
    "Kilimanjaro gear",
    "Kilimanjaro costs",
    "summit Kilimanjaro",
  ],
  alternates: {
    canonical: "/ultimate-guide",
  },
  openGraph: {
    title: "The Ultimate Guide to Climbing Kilimanjaro",
    description: "Everything you need to know about climbing Kilimanjaro — routes, gear, training, health, costs, and logistics.",
    images: [{ url: "/images/rugged_kilimanjaro_hero.webp", width: 1200, height: 630, alt: "Mount Kilimanjaro Ultimate Climbing Guide" }],
  },
};

export default function UltimateGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
