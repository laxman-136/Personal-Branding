"use client";

import { useState } from "react";

export default function EventQuickDemoForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-8 bg-background border-b border-border/50" aria-label="Request free demo">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-primary mb-6">Request For Free Demo</h2>

        {submitted && (
          <p className="mb-4 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-block">
            Request submitted! We&apos;ll contact you shortly.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-4 lg:items-end"
        >
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="qdemo-name" className="text-sm font-medium text-foreground">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              id="qdemo-name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-premium h-12"
              aria-required="true"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="qdemo-email" className="text-sm font-medium text-foreground">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="qdemo-email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-premium h-12"
              aria-required="true"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="qdemo-phone" className="text-sm font-medium text-foreground">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              id="qdemo-phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              required
              className="input-premium h-12"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="btn-primary h-12 px-8 whitespace-nowrap lg:self-end"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
