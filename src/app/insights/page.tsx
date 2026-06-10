import type { Metadata } from "next";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsGrid from "@/components/insights/InsightsGrid";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Insights & Articles | Sudheer V — Oracle SCM, ERP Trends & Career",
  description:
    "Expert insights on Oracle Fusion SCM, ERP trends, digital transformation, and career strategies from Sudheer V — India's leading Oracle expert.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsGrid />
      <ContactCTA />
    </>
  );
}
