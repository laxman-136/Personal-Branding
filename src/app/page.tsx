import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import WhoAmISection from "@/components/home/WhoAmISection";
import ConsultingSection from "@/components/home/ConsultingSection";
import CoursesSection from "@/components/home/CoursesSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import WebinarsSection from "@/components/home/WebinarsSection";
import VenturesSection from "@/components/home/VenturesSection";
import VideoTestimonialSection from "@/components/home/VideoTestimonialSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InsightsPreview from "@/components/home/InsightsPreview";
import HomeContactSection from "@/components/home/HomeContactSection";

export const metadata: Metadata = {
  title: "Sudheer V | Oracle Fusion SCM Expert & CEO — Transform Your ERP Career",
  description:
    "Sudheer V is India's leading Oracle Fusion SCM Expert, Founder & CEO of Tech Leads IT. 20+ years experience, 10,000+ professionals mentored. Start your SCM transformation today.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoAmISection />
      <ConsultingSection />
      <CoursesSection />
      <ResourcesSection />
      <WebinarsSection />
      <VenturesSection />
      <VideoTestimonialSection />
      <TestimonialsSection />
      <InsightsPreview />
      <HomeContactSection />
    </>
  );
}
