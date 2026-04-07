import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kilimanjaro Travel Guide | KiliGo",
  description: "Complete logistical roadmap for traveling to Mount Kilimanjaro from anywhere in the world. Flight options, regional transfers, and expert travel tips.",
};

export default function TravelGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
