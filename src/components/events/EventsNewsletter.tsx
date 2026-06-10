"use client";

import { useState } from "react";

export default function EventsNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
      aria-label="Newsletter signup"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Don&apos;t Miss the Next Webinar
          </h2>
          <p className="text-white/90 text-lg">
            Subscribe to receive updates about upcoming sessions, live events, and new resources
            from Krishna V.
          </p>

          {subscribed && (
            <p className="text-white font-semibold bg-white/20 rounded-xl py-2 px-4 inline-block">
              Successfully subscribed to updates!
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="h-14 flex-1 rounded-xl px-5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              className="h-14 px-8 whitespace-nowrap bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
