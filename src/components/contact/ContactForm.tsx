"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";

const SUBJECTS = ["Training", "Consulting", "Webinar / Speaking", "Other"];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start rounded-xl">
          {/* Left: Contact Form (60%) */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center space-y-4 py-16">
                <h3 className="text-2xl font-bold text-foreground">Thank you for reaching out!</h3>
                <p className="text-muted-foreground">
                  Your message has been received — our team will connect with you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-border hover:bg-secondary transition-all text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-sky-600">Book An Appointment</h2>

                <div className="space-y-2">
                  <label htmlFor="cf-name" className="block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="cf-email" className="block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="cf-phone" className="block text-sm font-medium text-foreground">
                    Contact Number
                  </label>
                  <input
                    id="cf-phone"
                    type="tel"
                    placeholder="+91 81253 23232"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="cf-subject" className="block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <select
                    id="cf-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <option value="">Select a topic</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s.toLowerCase()}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="cf-message" className="block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    placeholder="Write your message here…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full h-12 text-base font-medium transition-all duration-300 hover:shadow-lg group bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Professional Image (40%) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/krishna-expertise.png"
                alt="Sudheer V - Oracle Fusion SCM Expert & Corporate Trainer"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-white text-sm italic">
                  &ldquo;Empowering learners and leaders through ERP excellence.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
