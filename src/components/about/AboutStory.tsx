"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  title: string;
  description: string;
  image: string;
  position: "left" | "right";
}

function TimelineItem({ title, description, image, position }: TimelineItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isLeft = position === "left";

  return (
    <div
      ref={ref}
      className={`relative mb-28 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
        {/* Text Content */}
        <div className={`space-y-4 ${isLeft ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}`}>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground">{title}</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Polaroid Photo Frame */}
        <div className={`flex ${isLeft ? "justify-end" : "md:order-1 justify-start"}`}>
          <div
            className={`relative inline-block transform transition-all duration-300 hover:scale-105 hover:rotate-0 ${
              isLeft ? "rotate-[-4deg]" : "rotate-[4deg]"
            }`}
          >
            <div className="bg-white p-4 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
              <div className="bg-gray-100 p-1">
                <Image
                  src={image}
                  alt={title}
                  width={288}
                  height={320}
                  className="w-64 h-72 md:w-72 md:h-80 object-cover"
                />
              </div>
            </div>
            {/* Yellow accent shadow */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-yellow-400/40 -z-10" />
          </div>
        </div>
      </div>

      {/* Center Circle Connector - Desktop only */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center z-10">
        <div className="w-8 h-8 rounded-full bg-yellow-400 border-4 border-white shadow-lg flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-yellow-400/30 animate-ping" />
        </div>
      </div>
    </div>
  );
}

const TIMELINE_ITEMS = [
  {
    title: "The Foundation",
    description:
      "My journey began as a Functional Consultant in global MNCs, working on Oracle ERP implementations. Those early years taught me that successful systems are built on clear processes and collaboration.",
    image: "/images/sudheer-foundation.png",
    position: "left" as const,
  },
  {
    title: "The Turning Point",
    description:
      "Over time, I met brilliant minds — from ambitious students and fresh graduates to experienced professionals — who struggled to grow because they lacked structured mentorship and industry exposure. That's when I founded Tech Leads IT Solutions Pvt Ltd, a platform bridging the gap between academic learning, technical skills and real-world readiness. Our goal is simple: make hands-on ERP training accessible to everyone willing to learn and grow.",
    image: "/images/sudheer-teaching.png",
    position: "right" as const,
  },
  {
    title: "Expanding into Consulting Leadership",
    description:
      "I established AIHI Cloud Solutions Pvt Ltd to bridge the gap between enterprise technology strategy and real execution. Today, I help organizations modernize and scale through ERP implementations, integrations, and managed services—delivered with measurable business impact.",
    image: "/images/sudheer-office.png",
    position: "left" as const,
  },
];

export default function AboutStory() {
  return (
    <section
      id="journey"
      className="relative py-20 px-6 bg-gradient-to-b from-background via-secondary to-background md:py-[40px]"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            My Evolution
          </h2>
          <p className="text-xl text-muted-foreground">
            From Consultant to Founder &amp; Mentor
          </p>
        </div>

        {/* Vertical Center Line - Desktop only */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-yellow-400/0 via-yellow-400/30 to-yellow-400/0" style={{ top: "14rem", bottom: "6rem" }} />

        <div className="relative pt-8">
          {TIMELINE_ITEMS.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
