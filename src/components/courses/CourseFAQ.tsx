"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function CourseFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" aria-label="Frequently asked questions" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 space-y-3"
        >
          <span className="badge-primary">FAQ</span>
          <h2 className="section-title">
            Common <span className="text-gradient-primary">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className="card-premium rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/30 transition-colors"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                      open === i && "rotate-180 text-primary"
                    )}
                    aria-hidden="true"
                  />
                </button>
                {open === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
