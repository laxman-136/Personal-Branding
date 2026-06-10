"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "ERP Trends", "Career", "Digital Transformation", "Technology", "Implementation"];

const CATEGORY_COLORS: Record<string, string> = {
  "ERP Trends": "bg-blue-500/10 text-blue-600",
  "Career": "bg-emerald-500/10 text-emerald-600",
  "Digital Transformation": "bg-violet-500/10 text-violet-600",
  "Technology": "bg-cyan-500/10 text-cyan-600",
  "Implementation": "bg-orange-500/10 text-orange-600",
};

export default function InsightsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeCategory === "All"
    ? INSIGHTS
    : INSIGHTS.filter((i) => i.category === activeCategory);

  return (
    <section aria-label="Insights articles" className="py-12 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-white shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <Link href={`/insights/${insight.slug}`} className="group block h-full">
                <article className="card-premium rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
                  {/* Image placeholder */}
                  <div className={`h-44 bg-gradient-to-br ${
                    i % 3 === 0 ? "from-primary/15 to-[hsl(178,64%,42%)]/10" :
                    i % 3 === 1 ? "from-violet-500/10 to-purple-500/5" :
                    "from-emerald-500/10 to-teal-500/5"
                  } flex items-center justify-center`}>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-md ${CATEGORY_COLORS[insight.category] || "bg-primary/10 text-primary"}`}
                    >
                      {insight.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <span
                      className={`w-fit px-2.5 py-0.5 text-xs font-semibold rounded-md ${CATEGORY_COLORS[insight.category] || "bg-primary/10 text-primary"}`}
                    >
                      {insight.category}
                    </span>
                    <h3 className="font-display font-bold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {formatDate(insight.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {insight.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
