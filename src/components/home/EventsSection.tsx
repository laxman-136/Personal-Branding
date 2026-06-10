"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight, Users, Tag } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";
import { formatDateShort } from "@/lib/utils";

export default function EventsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="events"
      aria-label="Upcoming events"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_55%)]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,white_0%,transparent_65%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/15 text-white border border-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
            Upcoming Events
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
            Live Webinars &amp;{" "}
            <span className="text-white/80">Expert Sessions</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Learn directly from Sudheer V through real-world ERP case studies, career blueprints, and implementation insights.
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {UPCOMING_EVENTS.map((event, i) => {
            const dateInfo = formatDateShort(event.date);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="h-full rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Date strip */}
                  <div className="p-5 border-b border-white/15">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-center bg-white rounded-xl overflow-hidden shadow-md">
                          <div className="px-3 py-1 bg-primary text-xs font-semibold text-white">
                            {dateInfo.dayName}
                          </div>
                          <div className="px-4 py-2">
                            <p className="text-2xl font-black text-primary leading-none">
                              {dateInfo.day}
                            </p>
                            <p className="text-xs font-semibold text-muted-foreground">
                              {dateInfo.month}
                            </p>
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                            {event.type}
                          </span>
                          <div className="flex items-center gap-1.5 mt-1 text-white/60 text-xs">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{event.time} · {event.duration}</span>
                          </div>
                        </div>
                      </div>
                      {event.isFree ? (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-success/20 text-green-300 border border-green-400/30">
                          FREE
                        </span>
                      ) : (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          {event.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4 flex flex-col h-[calc(100%-140px)]">
                    <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-white/90">
                      {event.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed flex-1">
                      {event.description}
                    </p>
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all duration-200"
                      aria-label={`Register for ${event.title}`}
                    >
                      Register Free
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
          >
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
