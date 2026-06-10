"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

const faqs = [
  {
    q: "Do I need any prior Oracle or IT experience?",
    a: "No prior experience is needed. This program is designed for complete beginners as well as professionals looking to upskill. We start from fundamentals and build up to advanced concepts.",
  },
  {
    q: "How long is the program?",
    a: "The core live training program runs for 3 months. After completion, you get 5 months of app access and 2 years of LMS access to revisit all content.",
  },
  {
    q: "Will I get a certificate on completion?",
    a: "Yes. You receive an ISO 9001:2015 certified completion certificate signed by Sudheer V. The certificate is digital, print-ready, and perfect for sharing on LinkedIn.",
  },
  {
    q: "What is the 200% job placement support?",
    a: "Our placement support goes beyond just connecting you with companies. We assist with resume building, mock interviews, direct referrals to our 50+ hiring partners, and continued support even after your first placement.",
  },
  {
    q: "Can I attend if I'm from a non-IT background?",
    a: "Absolutely. Many of our successful graduates came from commerce, science, or manufacturing backgrounds. Oracle Fusion SCM is a functional role — no coding is required.",
  },
  {
    q: "What is the mode of training?",
    a: "Training is conducted online via live interactive sessions. Sessions are recorded and uploaded to the LMS so you can revisit them anytime. A mobile app is also available for on-the-go learning.",
  },
  {
    q: "Is there a demo session available before enrolling?",
    a: "Yes! We offer a 3-day free demo preview. You can attend the demo sessions, meet Sudheer V, and experience the teaching style before making any commitment.",
  },
  {
    q: "How do I enrol in the program?",
    a: "You can enrol by filling in the demo request form on this page. Our team will reach out within 24 hours to guide you through the enrollment process and answer any remaining questions.",
  },
];

export default function CourseFAQSection() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setContactForm({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before you enrol
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* FAQ Accordion */}
          <div className="lg:col-span-3">
            <Accordion.Root type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <Accordion.Item
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-sky/30 transition-colors"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between gap-4 p-6 text-left group">
                      <span className="font-medium text-foreground text-sm leading-relaxed">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    {faq.a}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-2">
            <div
              className="rounded-3xl overflow-hidden h-full"
              style={{
                background: "linear-gradient(160deg, #043433 0%, #0a4a48 50%, #0F5757 100%)",
              }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="relative h-40 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/course/contact-support.png"
                    alt="Contact Support"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                <p className="text-white/70 text-sm mb-6">
                  Drop us a message and we'll get back to you within a few hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                  {["name", "email", "phone"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      value={contactForm[field as keyof typeof contactForm]}
                      onChange={handleChange}
                      placeholder={field === "name" ? "Your name" : field === "email" ? "Email address" : "Phone number"}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                    />
                  ))}

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-sky text-white font-semibold rounded-xl hover:bg-brand-sky-medium transition-colors shadow-lg mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
