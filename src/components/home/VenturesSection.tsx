"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { GraduationCap, Cloud, ExternalLink } from "lucide-react";

const VENTURES = [
  {
    title: "Tech Leads IT",
    subtitle: "Training Excellence Since 2012",
    description:
      "India's trusted Oracle Fusion training institute for over 12 years, delivering hands-on, placement-oriented programs under Sudheer V's leadership. Transforming careers through industry-aligned curriculum.",
    icon: GraduationCap,
    gradient: "/images/venture-gradient-1.jpg",
    logo: "/images/tech-leads-logo.png",
    href: "#",
  },
  {
    title: "AIHI Cloud Solutions",
    subtitle: "Next-Gen IT Consulting",
    description:
      "Next-generation IT consulting & staffing organization specializing in Oracle Fusion implementations and corporate upskilling solutions. Bridging the gap between enterprise needs and expert talent.",
    icon: Cloud,
    gradient: "/images/venture-gradient-2.jpg",
    logo: "/images/aihi-logo.png",
    href: "#",
  },
];

export default function VenturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="ventures"
      aria-label="Ventures — Tech Leads IT and AIHI Cloud Solutions"
      className="py-20 bg-background"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <h2 className="font-display font-bold text-4xl mb-4 md:text-3xl">
            My <span className="text-gradient-primary">Ventures</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Building organizations that connect education with opportunity and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {VENTURES.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient background image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={venture.gradient}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

                {/* Hexagonal icon with glassmorphism */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div
                      className="absolute inset-0 bg-background/20 backdrop-blur-md border border-white/30 shadow-lg"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <venture.icon className="w-12 h-12 text-white" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                      src={venture.logo}
                      alt={`${venture.title} logo`}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground">{venture.title}</h3>
                </div>
                <p className="text-primary text-sm font-semibold mb-4">{venture.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{venture.description}</p>
                <a
                  href={venture.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group-hover:gap-3"
                  aria-label={`Learn more about ${venture.title}`}
                >
                  Learn More <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
