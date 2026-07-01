"use client";

import { useState } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function EventQuickDemoForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-12 bg-white dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900" aria-label="Request free demo">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 overflow-hidden shadow-sm">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full pointer-events-none filter blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Column - Heading info */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400">
                <Sparkles className="w-3.5 h-3.5" /> 1-on-1 Guidance
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                Request a Free Live Demo
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">
                Want a custom walkthrough of Oracle Fusion SCM setups? Schedule a free 15-minute call with our team.
              </p>
            </div>

            {/* Right Columns - Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex items-center gap-3 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300 animate-scale-in">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Demo Request Received!</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">We will reach out to you within 24 hours to schedule your session.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid sm:grid-cols-4 gap-4 items-end"
                >
                  <div className="sm:col-span-1 space-y-1">
                    <label htmlFor="qdemo-name" className="text-xs font-bold text-neutral-600 dark:text-neutral-400 block ml-0.5">
                      Your Name *
                    </label>
                    <input
                      id="qdemo-name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-sm shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700"
                      aria-required="true"
                    />
                  </div>

                  <div className="sm:col-span-1 space-y-1">
                    <label htmlFor="qdemo-email" className="text-xs font-bold text-neutral-600 dark:text-neutral-400 block ml-0.5">
                      Email Address *
                    </label>
                    <input
                      id="qdemo-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-sm shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700"
                      aria-required="true"
                    />
                  </div>

                  <div className="sm:col-span-1 space-y-1">
                    <label htmlFor="qdemo-phone" className="text-xs font-bold text-neutral-600 dark:text-neutral-400 block ml-0.5">
                      Phone Number *
                    </label>
                    <input
                      id="qdemo-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 text-sm shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700"
                      aria-required="true"
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative group overflow-hidden w-full inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-white text-white dark:text-neutral-900 font-bold rounded-xl py-3 transition-all duration-300 shadow-md text-sm sm:self-end h-11"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

