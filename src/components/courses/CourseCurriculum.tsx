"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MODULES = [
  {
    number: "01",
    title: "Oracle Fusion Procurement Cloud",
    topics: [
      "Supplier Management & Qualification",
      "Purchase Requisitions & Orders",
      "Supplier Portal Configuration",
      "Procurement Contracts",
      "Sourcing Negotiations & Awards",
    ],
    duration: "16 hours",
  },
  {
    number: "02",
    title: "Oracle Fusion Inventory Management",
    topics: [
      "Organization & Sub-inventory Setups",
      "Item Master & UOM Configuration",
      "Inventory Transactions & Adjustments",
      "ABC Analysis & Cycle Counting",
      "Cost Management Integration",
    ],
    duration: "18 hours",
  },
  {
    number: "03",
    title: "Oracle Fusion Order Management",
    topics: [
      "Order Types & Hold Management",
      "Pricing & Shipping Rules",
      "ATP & Availability Management",
      "Order Orchestration Flows",
      "Customer Returns (RMA)",
    ],
    duration: "16 hours",
  },
  {
    number: "04",
    title: "Oracle Fusion Logistics",
    topics: [
      "Shipping Execution & Pick Wave",
      "Carrier Management & Rates",
      "Receiving & Put-away Rules",
      "Transportation Management Basics",
      "Delivery & Manifest Processing",
    ],
    duration: "14 hours",
  },
  {
    number: "05",
    title: "Integration & Reporting",
    topics: [
      "OTBI Reports & Analytics",
      "BI Publisher Custom Reports",
      "Integration with Finance & HCM",
      "Data Migration Strategies",
      "Security & Role Configuration",
    ],
    duration: "16 hours",
  },
];

export default function CourseCurriculum() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="curriculum"
      aria-label="Course curriculum"
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 space-y-3"
        >
          <span className="badge-primary">Curriculum</span>
          <h2 className="section-title">
            What You&apos;ll{" "}
            <span className="text-gradient-primary">Learn & Master</span>
          </h2>
          <p className="section-subtitle">
            5 comprehensive modules covering every aspect of Oracle Fusion SCM implementation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {MODULES.map((module, i) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <details className="group card-premium rounded-2xl overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none hover:bg-secondary/30 transition-colors">
                  <span className="font-display font-black text-3xl text-gradient-primary w-14 shrink-0">
                    {module.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-open:text-primary transition-colors">
                      {module.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="badge-primary text-xs hidden sm:flex">{module.duration}</span>
                    <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-open:bg-primary group-open:border-primary transition-all">
                      <svg className="w-3 h-3 transition-transform group-open:rotate-180" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </summary>
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" aria-hidden="true" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
