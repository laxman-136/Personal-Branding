"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhoAmISection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="about"
      aria-label="Who is Sudheer V"
      className="py-20 bg-[#1C1C1C] dark:bg-[#0A1C1E] overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left — Overlapping Portraits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] flex items-center justify-center lg:justify-start"
          >
            {/* Yellow vertical accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#F5C211]" aria-hidden="true" />

            {/* Background portrait (hero) */}
            <div className="absolute top-0 left-12 w-64 h-80 border-4 border-gray-600 shadow-2xl overflow-hidden">
              <Image
                src="/images/hero-portrait-new.jpg"
                alt="Sudheer V"
                fill
                className="object-cover grayscale-[30%]"
                sizes="256px"
              />
            </div>

            {/* Foreground portrait (professional) — overlapping */}
            <div className="relative ml-56 mt-24 w-72 h-96 border-8 border-white shadow-2xl overflow-hidden z-10">
              <Image
                src="/images/about-portrait-new.jpg"
                alt="Sudheer V — Professional"
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <h3 className="text-[#F5C211] font-display text-xl md:text-2xl">
              Who am I?
            </h3>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
              India&apos;s leading{" "}
              <span className="text-white">Oracle Fusion SCM consultant and mentor who has</span>{" "}
              <span className="text-[#F5C211]">
                implemented 100+ enterprise projects, trained more than 10,000 professionals,
              </span>{" "}
              <span className="text-white">and empowered global organizations to achieve a</span>{" "}
              <span className="text-[#F5C211]">95% implementation success rate.</span>
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#F5C211] hover:bg-[#E5B201] text-[#1C1C1C] font-semibold px-8 py-4 text-base rounded-md shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Know More About Me
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
