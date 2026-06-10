import Image from "next/image";
import { Map, Camera } from "lucide-react";

export default function TravelSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="italic text-base text-teal-600">Personal Passions</p>
              <h2 className="text-4xl font-bold text-foreground leading-tight md:text-3xl">
                Exploring the World Through{" "}
                <span className="text-teal-500">Travel &amp; Adventure</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              Beyond the world of Oracle and technology, I find my greatest inspiration and
              balance through traveling and exploring new destinations. Every journey I take
              brings fresh perspectives, cultural insights, and unforgettable experiences that
              enrich both my personal growth and professional vision. Traveling isn&apos;t just
              a hobby for me — it&apos;s a passion that fuels my creativity and broadens my
              worldview.
            </p>

            {/* Travel Highlights */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/10 flex-shrink-0">
                  <Map className="w-8 h-8 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">
                    Discovering New Cultures
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I love exploring how people live, work, and connect across diverse cultures
                    and traditions around the world.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/10 flex-shrink-0">
                  <Camera className="w-8 h-8 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">
                    Capturing Moments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I capture moments through my lens — landscapes, architecture, and the
                    genuine connections I make along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image Collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src="/images/travel-destinations.jpg"
                  alt="Travel Destinations - Exploring beautiful landscapes around the world"
                  width={800}
                  height={400}
                  className="w-full aspect-[3/1.5] object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/travel-architecture.jpg"
                alt="Travel Architecture - Historic monuments and cultural landmarks"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/travel-moments.jpg"
                alt="Travel Moments - Capturing cultural experiences and connections"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
