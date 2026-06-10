import Image from "next/image";
import Link from "next/link";
import { UPCOMING_EVENTS } from "@/lib/data";
import { formatDateShort } from "@/lib/utils";

export default function WebinarsSection() {
  return (
    <section
      id="webinars"
      className="py-20 bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display font-bold text-4xl mb-6 text-white md:text-3xl">
            Upcoming Webinars &amp; Expert Talks
          </h2>
          <p className="text-white/90 text-base">
            Learn directly from Sudheer V through real-world ERP case studies, implementation insights, and leadership sessions for professionals and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => {
            const dateInfo = formatDateShort(event.date);
            return (
              <div
                key={event.id}
                className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group h-[420px]"
              >
                {/* Background Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Top Section - Date */}
                  <div className="flex justify-between items-start">
                    {/* Calendar Date */}
                    <div className="bg-background/95 rounded-xl overflow-hidden shadow-lg">
                      <div className="bg-background px-4 py-2 text-center">
                        <div className="text-sm font-medium text-foreground">{dateInfo.dayName}</div>
                      </div>
                      <div className="bg-foreground text-background px-4 py-3 text-center">
                        <div className="text-3xl font-bold leading-none mb-1">{dateInfo.day}</div>
                        <div className="text-sm font-medium">{dateInfo.month}</div>
                      </div>
                    </div>
                    {/* Type badge */}
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                      {event.type}
                    </span>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    <div className="text-white/90 text-sm font-medium tracking-wide">
                      {event.time} &middot; {event.duration}
                    </div>
                    <h3 className="font-display font-bold text-white leading-tight text-lg">
                      {event.title}
                    </h3>
                    <Link
                      href={`/events/${event.slug}`}
                      className="block w-full bg-background hover:bg-background/90 text-foreground font-semibold rounded-xl py-4 text-base transition-all text-center"
                      aria-label={`Register for ${event.title}`}
                    >
                      {event.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
