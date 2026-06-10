"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PARTNER_COMPANIES } from "@/lib/data";

export default function LogoMarquee() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const doubled = [...PARTNER_COMPANIES, ...PARTNER_COMPANIES];

  return (
    <section
      aria-label="Corporate partners"
      className="py-14 border-y border-border overflow-hidden bg-secondary/20"
    >
      <div className="container mx-auto px-4 mb-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8"
        >
          Trusted by professionals from leading organizations
        </motion.p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          aria-hidden="true"
        />

        <div className="flex gap-10 animate-marquee w-max" aria-hidden="true">
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex items-center gap-2 px-6 py-3 bg-background rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 whitespace-nowrap min-w-max"
            >
              <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary">
                  {company.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-semibold text-muted-foreground">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
