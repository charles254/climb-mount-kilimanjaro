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
};

export default function UltimateGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
