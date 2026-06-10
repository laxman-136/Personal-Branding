import type { Metadata } from "next";
import CourseHeroSection from "@/components/course/CourseHeroSection";
import CourseAudienceSection from "@/components/course/CourseAudienceSection";
import CourseInstructorSection from "@/components/course/CourseInstructorSection";
import CourseModulesSection from "@/components/course/CourseModulesSection";
import CourseProgramSection from "@/components/course/CourseProgramSection";
import CourseTrainingMethodology from "@/components/course/CourseTrainingMethodology";
import CourseLMSSection from "@/components/course/CourseLMSSection";
import CourseBeforeAfter from "@/components/course/CourseBeforeAfter";
import CourseWhyChoose from "@/components/course/CourseWhyChoose";
import CourseJourneySection from "@/components/course/CourseJourneySection";
import CourseJobMarket from "@/components/course/CourseJobMarket";
import CourseCertification from "@/components/course/CourseCertification";
import CourseDemoSessions from "@/components/course/CourseDemoSessions";
import CourseDemoForm from "@/components/course/CourseDemoForm";
import CoursePricing from "@/components/course/CoursePricing";
import CourseTestimonialsSection from "@/components/course/CourseTestimonialsSection";
import CourseVideoTestimonials from "@/components/course/CourseVideoTestimonials";
import CourseFAQSection from "@/components/course/CourseFAQSection";
import CourseFinalCTA from "@/components/course/CourseFinalCTA";

export const metadata: Metadata = {
  title: "Oracle Fusion SCM Certified Program | LaunchPad",
  description:
    "Certified Program in Oracle Fusion SCM — mentored by Sudheer V. ISO 9001:2015 certified. 200% placement support. 23,000+ students trained. Enroll today.",
};

export default function CoursePage() {
  return (
    <main>
      <CourseHeroSection />
      <CourseAudienceSection />
      <CourseInstructorSection />
      <CourseModulesSection />
      <CourseProgramSection />
      <CourseTrainingMethodology />
      <CourseLMSSection />
      <CourseBeforeAfter />
      <CourseWhyChoose />
      <CourseJourneySection />
      <CourseJobMarket />
      <CourseCertification />
      <CourseDemoSessions />
      <CourseDemoForm />
      <CoursePricing />
      <CourseTestimonialsSection />
      <CourseVideoTestimonials />
      <CourseFAQSection />
      <CourseFinalCTA />
    </main>
  );
}
