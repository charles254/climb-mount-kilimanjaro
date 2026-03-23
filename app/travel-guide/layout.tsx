import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Travel Guide",
  description: "Complete logistical roadmap for traveling to Mount Kilimanjaro from anywhere in the world. Flight options, regional transfers, and expert travel tips.",
};

export default function TravelGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
