"use client";

import { ArrowRight } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div className="bg-gradient-to-r from-primary to-[hsl(178,64%,42%)]">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-display font-bold text-xl text-white mb-1">
              Stay Ahead in Oracle ERP
            </h2>
            <p className="text-white/85 text-sm">
              Get weekly insights on Oracle Fusion SCM, career tips, and event updates.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
