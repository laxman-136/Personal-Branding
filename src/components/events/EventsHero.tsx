"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsHero() {
  return (
    <section
      aria-label="Events page hero"
      className="relative pt-32 pb-0 overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full -translate-y-1/2 translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-16 space-y-5"
          >
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">Events</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/15 text-white border border-white/25">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live Events &amp; Webinars
            </span>

            <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
              Upcoming Webinars &amp; Live Events
            </h1>

            <p className="text-white/80 text-lg max-w-lg leading-relaxed">
              Join Krishna V&apos;s upcoming live sessions to explore Oracle Fusion SCM and ERP transformation — designed for professionals, students, and enterprises alike.
            </p>

            <a
              href="#webinars"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("webinars")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all shadow-lg"
            >
              View Upcoming Sessions
            </a>
          </motion.div>

          <div className="flex justify-center md:justify-end items-end">
            <Image
              src="/images/krishna-profile.png"
              alt="Krishna V - Oracle Fusion SCM Expert"
              width={292}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
