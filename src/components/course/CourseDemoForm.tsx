"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";

export default function CourseDemoForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Demo request submitted! We'll contact you within 24 hours.");
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-amber-500/5 rounded-3xl p-8 border border-border shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-brand-sky mb-1">Request For Free Demo</h2>
              <p className="text-muted-foreground text-sm">
                Fill in your details and we&#39;ll get back to you within 24 hours
              </p>
            </div>

            {/* Inline 4-col form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 bg-muted/50 border border-border/50 rounded-xl h-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 bg-muted/50 border border-border/50 rounded-xl h-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 bg-muted/50 border border-border/50 rounded-xl h-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-sky/50 focus:border-brand-sky transition-colors"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-brand-sky hover:bg-brand-sky-dark text-white font-semibold rounded-full px-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Free Demo
                  </button>
                </div>
              </div>
            </form>

            {/* Ratings */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Top Rated by Google &amp; Justdial</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Trustpilot */}
                <div className="bg-muted/80 rounded-xl p-4 flex items-center gap-3">
                  <Star className="w-8 h-8 text-emerald-500 fill-emerald-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-foreground">Rated 4.6/5 (34)</div>
                    <div className="text-xs text-muted-foreground">Trustpilot</div>
                  </div>
                </div>

                {/* Justdial */}
                <div className="bg-muted/80 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl font-extrabold flex-shrink-0">
                    <span className="text-blue-500">J</span>
                    <span className="text-yellow-500">d</span>
                  </span>
                  <div>
                    <div className="text-sm font-bold text-foreground">Rated 4.8/5 (1066)</div>
                    <div className="text-xs text-muted-foreground">Justdial</div>
                  </div>
                </div>

                {/* Google */}
                <div className="bg-muted/80 rounded-xl p-4 flex items-center gap-3">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-foreground">Rated 4.8/5 (1000+)</div>
                    <div className="text-xs text-muted-foreground">Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
