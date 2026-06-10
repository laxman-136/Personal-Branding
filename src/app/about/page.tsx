import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import ValuesSection from "@/components/about/ValuesSection";
import AboutStats from "@/components/about/AboutStats";
import AchievementsTimeline from "@/components/about/AchievementsTimeline";
import ImpactSection from "@/components/about/ImpactSection";
import DualExpertiseSection from "@/components/about/DualExpertiseSection";
import TravelSection from "@/components/about/TravelSection";
import QuoteSection from "@/components/about/QuoteSection";
import VisionSection from "@/components/about/VisionSection";

export const metadata: Metadata = {
  title: "About Sudheer V | Oracle Fusion SCM Expert & CEO — 20+ Years ERP Excellence",
  description:
    "Learn about Sudheer V's journey — from Oracle ERP pioneer to Founder & CEO of Tech Leads IT and AIHI Cloud Solutions. 20+ years of enterprise transformation expertise.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sudheer V | Oracle Fusion SCM Expert",
    description: "20+ years of Oracle ERP experience. Founder & CEO of Tech Leads IT. Mentor to 10,000+ professionals worldwide.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <AboutStats />
      <AchievementsTimeline />
      <ImpactSection />
      <DualExpertiseSection />
      <TravelSection />
      <QuoteSection />
      <VisionSection />
    </>
  );
}
