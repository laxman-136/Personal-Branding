"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Clock, Calendar, ArrowRight, Users } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function EventsGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="webinars" aria-label="Events listing" className="py-12 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 space-y-3"
        >
          <h2 className="section-title">
            Upcoming <span className="text-gradient-primary">Sessions</span>
          </h2>
          <p className="section-subtitle">
            Register for free or premium sessions and learn directly from Sudheer V.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <article className="card-premium rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300 group">
                {/* Card image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Card header */}
                <div className="p-6 bg-gradient-to-br from-primary/8 to-[hsl(178,64%,42%)]/5 border-b border-border">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {event.type}
                      </span>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {formatDate(event.date)}
                      </p>
                    </div>
                    {event.isFree ? (
                      <span className="badge-success shrink-0">FREE</span>
                    ) : (
                      <span className="badge-accent shrink-0">{event.price}</span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <h3 className="font-display font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      {event.duration}
                    </span>
                  </div>

                  <Link
                    href={`/events/${event.slug}`}
                    className="btn-primary text-sm py-2.5"
                    aria-label={`Register for ${event.title}`}
                  >
                    {event.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
