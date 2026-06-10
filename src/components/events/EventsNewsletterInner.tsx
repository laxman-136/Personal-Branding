"use client";

import { useState } from "react";

export default function EventsNewsletterInner() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  if (done) {
    return (
      <p className="text-white font-semibold bg-white/20 rounded-xl py-2 px-4 inline-block">
        Successfully subscribed!
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-4 mt-2">
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
  );
}
