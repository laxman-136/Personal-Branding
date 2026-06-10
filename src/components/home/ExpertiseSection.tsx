"use client";

import { motion } from "framer-motion";
import {
  Database, Cloud, Briefcase, GraduationCap, Zap, Users, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { EXPERTISE_AREAS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Database, Cloud, Briefcase, GraduationCap, Zap, Users,
};

export default function ExpertiseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="expertise"
      aria-label="Areas of expertise"
      className="py-12 bg-background"
    >
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 space-y-4"
        >
          <span className="badge-primary">Areas of Expertise</span>
          <h2 className="section-title">
            Deep Domain Expertise in{" "}
            <span className="text-gradient-primary">Enterprise ERP & SCM</span>
          </h2>
          <p className="section-subtitle">
            Two decades of hands-on experience across the full Oracle Fusion ecosystem — delivering measurable transformation for organizations worldwide.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_AREAS.map((area, i) => {
            const Icon = ICON_MAP[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div
                  className={`card-premium p-7 h-full group hover:-translate-y-1 transition-all duration-300 rounded-2xl border ${area.borderColor}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {Icon && <Icon className="w-6 h-6 text-primary" aria-hidden="true" />}
                  </div>

                  <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {area.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-secondary rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/courses" className="btn-primary">
            Explore SCM Masterclass
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
