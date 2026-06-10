"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function HomeContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display font-bold text-4xl mb-4 md:text-3xl">
            Let&apos;s <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you&apos;re a student, professional, or enterprise — reach out to collaborate or learn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      4th Floor, Plot no 3-164, Trendz Eashan Arcade, Kavuri Hills Rd, Doctor&apos;s Colony, Hyderabad, Telangana
                      <br />
                      Hyderabad – 500081, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:sudheer.vidiyala@techleadsit.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sudheer.vidiyala@techleadsit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+918125323232"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8125 32 32 32
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-secondary rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6755!2d78.4089!3d17.4401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8b7c9e7e5%3A0x9f8b8b8b8b8b8b8b!2sTrendz%20Eashan%20Arcade%2C%20Kavuri%20Hills%20Rd%2C%20Doctor&#39;s%20Colony%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl">Message Sent!</h3>
                <p className="text-muted-foreground">We&apos;ll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input-premium"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input-premium"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="input-premium"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    placeholder="How can I help you?"
                    rows={5}
                    className="input-premium resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-3 text-base"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
