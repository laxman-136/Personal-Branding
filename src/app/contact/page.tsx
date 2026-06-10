import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Sudheer V | Oracle SCM Expert — Book a Consultation",
  description:
    "Connect with Sudheer V for Oracle Fusion SCM consulting, course enrollment, speaking engagements, or corporate training partnerships.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
