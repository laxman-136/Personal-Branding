"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, BookOpen, Users, Server } from "lucide-react";
import { FEATURED_COURSE } from "@/lib/data";

export default function CourseHero() {
  return (
    <section
      aria-label="Course hero"
      className="relative pt-32 pb-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-blob w-[500px] h-[500px] bg-primary/10 -top-20 -right-20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium" aria-current="page">SCM Masterclass</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="badge-primary">Featured Program · Limited Seats</span>

            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-4xl text-gradient-primary">
                  {FEATURED_COURSE.currentPrice}
                </span>
                <span className="text-muted-foreground line-through">{FEATURED_COURSE.originalPrice}</span>
                <span className="badge-accent">{FEATURED_COURSE.discount}</span>
              </div>
              <h1 className="font-display font-black text-4xl md:text-5xl leading-tight">
                {FEATURED_COURSE.title}
              </h1>
              <p className="text-primary font-semibold text-lg">{FEATURED_COURSE.subtitle}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {FEATURED_COURSE.description}
            </p>

            <ul className="space-y-2.5">
              {FEATURED_COURSE.learningOutcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="#enroll" className="btn-cta">
                Enroll Now — {FEATURED_COURSE.currentPrice}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#curriculum" className="btn-secondary">
                View Curriculum
              </Link>
            </div>
          </motion.div>

          {/* Course highlights card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="card-premium rounded-2xl p-7 space-y-5 shadow-premium sticky top-24">
              <h2 className="font-display font-bold text-xl">Course Highlights</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "Duration", value: "80+ Hours" },
                  { icon: BookOpen, label: "Format", value: "Live + Recorded" },
                  { icon: Users, label: "Support", value: "Placement Help" },
                  { icon: Server, label: "Access", value: "Live Oracle Instance" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-secondary/50 rounded-xl p-4 space-y-1.5">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-semibold text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="divider-gradient" />
              <div className="space-y-3">
                <p className="text-sm font-semibold">Program Includes:</p>
                {FEATURED_COURSE.highlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                    {h.text}
                  </div>
                ))}
              </div>
              <Link
                href="#enroll"
                className="btn-cta w-full justify-center"
              >
                Start Learning Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-xs text-muted-foreground">
                7-day money-back guarantee · EMI available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
