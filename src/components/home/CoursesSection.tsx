"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen, Server, Users, Building, PlayCircle } from "lucide-react";

const highlights = [
  { icon: Clock, text: "80+ Hours Live Sessions" },
  { icon: BookOpen, text: "Real Case Studies" },
  { icon: Server, text: "Instance Access" },
  { icon: Users, text: "Placement Support" },
  { icon: Building, text: "Industry Projects" },
  { icon: PlayCircle, text: "Self-paced" },
];

export default function CoursesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display font-bold text-4xl mb-4 md:text-3xl">
            My Expertise & <span className="text-gradient-primary">Program</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Empowering both professionals and enterprises to master Oracle Fusion SCM with implementation-driven learning and strategic consulting insights.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl border border-border bg-card"
        >
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 p-8 md:p-12 py-[40px]">
            {/* Content Section */}
            <div className="flex flex-col justify-center">
              {/* Pricing */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-bold line-through text-neutral-400 text-xl">₹34,999</span>
                <span className="font-bold text-foreground text-3xl">₹30,000</span>
              </div>

              <h3 className="font-display text-4xl mb-4 font-bold md:text-2xl text-[#2597d9]">
                Oracle Fusion SCM Masterclass
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                Master Oracle Fusion SCM with comprehensive coverage of Procurement, Inventory, Order Management, and Logistics through real-world implementation scenarios.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-xs font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-3"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full lg:w-[400px] h-full rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full font-bold text-sm z-10 bg-[#2597d9] text-white">
                14% off!
              </div>
              <Image
                src="/images/scm-logistics.png"
                alt="Oracle Fusion SCM Masterclass"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

