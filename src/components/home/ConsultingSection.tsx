"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Award, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";

const VALUE_CARDS = [
  {
    icon: Award,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "20+ Years Excellence",
    description: "Deep expertise in Oracle Fusion implementations across diverse industries",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    title: "200+ Projects",
    description: "Successfully delivered end-to-end Oracle Fusion solutions globally",
  },
  {
    icon: Users,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "95% Success Rate",
    description: "Proven track record of on-time, on-budget implementations",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    title: "100+ Clients",
    description: "Trusted by leading enterprises across multiple continents",
  },
];

const ADVISORY_SERVICES = [
  {
    title: "System Assessment",
    description:
      "Study your current ERP landscape, identify gaps, and recommend optimization strategies for Oracle Fusion migration or enhancement",
  },
  {
    title: "Implementation Strategy",
    description:
      "End-to-end Oracle Fusion deployment planning, configuration, and go-live support with best practice frameworks",
  },
  {
    title: "Process Optimization",
    description:
      "Streamline business processes using Oracle Fusion capabilities to drive efficiency and reduce operational costs",
  },
  {
    title: "Team Enablement",
    description:
      "Corporate training and knowledge transfer programs to empower your internal teams for long-term success",
  },
  {
    title: "Ongoing Support",
    description:
      "Post-implementation support, system upgrades, and continuous improvement advisory for sustained ROI",
  },
  {
    title: "Strategic IT Consulting",
    description:
      "Technology roadmap planning, digital transformation strategies, and IT infrastructure modernization guidance",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function ConsultingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="consulting"
      aria-label="IT Consulting Excellence"
      className="py-20 bg-[#1a2332] dark:bg-[#0A1C1E]"
      ref={ref}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            IT Consulting Excellence
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-5xl text-base">
            With 20+ years of experience, I deliver enterprise-grade Oracle Fusion implementations and strategic IT advisory services across multiple industries and geographies. Based in India and serving clients globally, my approach blends deep technical expertise with proven methodologies to deliver real results and long-term success —{" "}
            <span className="font-bold text-white">across 100+ corporate clients</span>.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VALUE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${card.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                <card.icon className={`w-7 h-7 ${card.iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold mb-3 text-foreground text-lg">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Advisory Services */}
        <div>
          <div className="flex items-start justify-between mb-8 gap-6 flex-wrap">
            <div>
              <h3 className="font-display font-bold text-3xl text-white mb-3">Advisory Services</h3>
              <p className="text-gray-300 text-lg">
                Comprehensive consulting solutions tailored to your business needs
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 btn-primary mt-1"
            >
              Get Started <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVISORY_SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-display font-bold text-lg mb-3 text-foreground">{svc.title}</h4>
                <p className="text-muted-foreground text-sm">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
