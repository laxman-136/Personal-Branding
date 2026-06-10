"use client";

import { motion } from "framer-motion";

export default function InsightsHero() {
  return (
    <section
      aria-label="Insights page hero"
      className="relative pt-32 pb-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-blob w-[500px] h-[500px] bg-primary/10 -top-20 -right-20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-5"
        >
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">Insights</li>
            </ol>
          </nav>

          <span className="badge-primary">Thought Leadership · ERP Insights</span>

          <h1 className="font-display font-black text-5xl md:text-6xl leading-tight">
            Insights from{" "}
            <span className="text-gradient-primary">Sudheer V</span>
          </h1>

          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            Expert perspectives on Oracle Fusion SCM, ERP career strategies, digital transformation, and the future of supply chain technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
