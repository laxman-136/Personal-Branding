"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function ContactCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="contact-cta"
      aria-label="Contact call to action"
      className="py-12 bg-background"
    >
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ background: "var(--gradient-primary)" }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/3" />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 py-16 px-8 md:px-16 text-center space-y-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/15 text-white border border-white/25">
              Let&apos;s Connect
            </span>

            <h2 className="font-display font-black text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
              Ready to Transform Your{" "}
              <span className="text-white/75">Oracle ERP Career</span> or Business?
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a professional seeking to master Oracle Fusion SCM or an organization looking to optimize your ERP ecosystem — let&apos;s talk.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Schedule a Consultation
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                Explore SCM Masterclass
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick contact */}
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
