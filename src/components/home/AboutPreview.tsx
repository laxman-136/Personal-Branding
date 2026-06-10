"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Globe, BookOpen } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { BRAND } from "@/lib/data";

const HIGHLIGHTS = [
  { icon: Award, label: "Oracle Certified", value: "Expert" },
  { icon: Users, label: "Professionals Mentored", value: "10,000+" },
  { icon: Globe, label: "Countries Reached", value: "15+" },
  { icon: BookOpen, label: "Years Oracle ERP", value: "20+" },
];

export default function AboutPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="about"
      aria-label="About Sudheer V"
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about-portrait-new.jpg"
                  alt="Sudheer V — Oracle Fusion SCM Expert"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating highlights */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="card-premium p-4 rounded-xl"
                >
                  <Icon className="w-5 h-5 text-primary mb-2" aria-hidden="true" />
                  <p className="font-bold text-lg text-gradient-primary">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <span className="badge-primary">About {BRAND.name}</span>
              <h2 className="section-title">
                The Architect of{" "}
                <span className="text-gradient-primary">Oracle ERP Excellence</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over <strong className="text-foreground">20 years of Oracle ERP experience</strong>, Sudheer V stands at the intersection of enterprise consulting, executive education, and technology innovation — a rare combination that drives transformational results.
              </p>
              <p>
                As Founder &amp; CEO of <strong className="text-foreground">Tech Leads IT</strong>, he has architected curriculum and mentored professionals who now lead Oracle implementations across Fortune 500 companies globally. His creation of <strong className="text-foreground">AIHI Cloud Solutions</strong> bridges the gap between traditional ERP and next-generation AI-powered supply chains.
              </p>
              <p>
                Sudheer is not just a trainer — he is a <strong className="text-foreground">thought leader, strategist, and trusted advisor</strong> to organizations navigating complex ERP transformations.
              </p>
            </div>

            {/* Key expertise pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Oracle Fusion SCM",
                "Supply Chain Strategy",
                "ERP Implementation",
                "AI & Cloud",
                "Executive Mentorship",
                "Digital Transformation",
              ].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-primary/8 text-primary text-xs font-medium rounded-full border border-primary/15">
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/about" className="btn-primary w-fit">
              Read Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
