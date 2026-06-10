"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EVENT_PAST_WEBINARS } from "@/lib/data";

export default function EventsPastCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === "right" ? w / 2 : -w / 2, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-background" aria-label="Highlights from past webinars">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Highlights from Past Webinars
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse of our previous interactive sessions, expert talks, and live Q&amp;As that
            helped hundreds of learners enhance their Fusion SCM expertise.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {EVENT_PAST_WEBINARS.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[calc(33.333%-12px)] min-w-[280px] snap-start"
              >
                <div className="group relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 80vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
