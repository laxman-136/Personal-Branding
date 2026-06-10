"use client";

import { useState } from "react";
import Image from "next/image";

export default function EventsSuggestTopic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-12 bg-secondary/30" aria-label="Suggest a topic">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Form */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Topic Should Krishna Cover Next?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tell us what Oracle Fusion or ERP topic you&apos;d like Krishna to dive into next.
              Your input helps us shape future webinars that serve you best.
            </p>

            {submitted && (
              <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-3 text-green-700 font-medium text-sm">
                Thank you! Your suggestion has been received.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-premium w-full"
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-premium w-full"
                aria-label="Email Address"
              />
              <textarea
                placeholder="Suggest a webinar topic or Oracle Fusion area you want to learn more about…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="input-premium w-full resize-none"
                aria-label="Your suggestion"
              />
              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-8"
              >
                Submit Suggestion
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="order-first md:order-last">
            <Image
              src="/images/suggest-topic-new.png"
              alt="Professional working on Oracle Fusion"
              width={600}
              height={480}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
