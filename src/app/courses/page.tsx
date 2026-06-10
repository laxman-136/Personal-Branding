import type { Metadata } from "next";
import CourseHero from "@/components/courses/CourseHero";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseCurriculum from "@/components/courses/CourseCurriculum";
import CourseTestimonials from "@/components/courses/CourseTestimonials";
import CourseFAQ from "@/components/courses/CourseFAQ";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Oracle Fusion SCM Masterclass | Sudheer V — India's #1 SCM Training",
  description:
    "Join India's most comprehensive Oracle Fusion SCM Masterclass. 80+ hours of live training, real instance access, placement support. Enroll now at ₹30,000.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Oracle Fusion SCM Masterclass | Sudheer V",
    description: "80+ hours live training · Real Oracle instance · Placement support. India's #1 Oracle Fusion SCM program.",
    url: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <CourseHero />
      <CourseOverview />
      <CourseCurriculum />
      <CourseTestimonials />
      <CourseFAQ />
      <ContactCTA />
    </>
  );
}
