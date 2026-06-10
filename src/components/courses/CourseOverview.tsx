"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, TrendingUp, Award, Users } from "lucide-react";
import { FEATURED_COURSE } from "@/lib/data";

export default function CourseOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section aria-label="Course overview" className="section-padding-sm bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Industry-Aligned",
              description: "Curriculum designed with inputs from Oracle-certified implementation consultants at Accenture, TCS, and Infosys.",
              color: "from-blue-500/10 to-cyan-500/10",
            },
            {
              icon: Award,
              title: "Certification Ready",
              description: "Prepares you for Oracle Fusion SCM certification exams with comprehensive practice tests and exam strategies.",
              color: "from-violet-500/10 to-purple-500/10",
            },
            {
              icon: Users,
              title: "Placement Network",
              description: "Direct access to 100+ corporate partners actively hiring Oracle Fusion SCM professionals across India and globally.",
              color: "from-emerald-500/10 to-teal-500/10",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={`card-premium p-7 rounded-2xl h-full space-y-4 bg-gradient-to-br ${item.color}`}>
                <item.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                <h3 className="font-display font-bold text-xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
