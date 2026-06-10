import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoTestimonialSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="font-display font-bold text-4xl mb-0 md:text-3xl">
            A Personal <span className="text-primary">Message</span> From Me
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Video Thumbnail */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video">
              <Image
                src="/images/krishna-v-portrait.jpg"
                alt="Sudheer V — Personal Message"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-foreground mb-2 text-3xl">
                  Sudheer V
                </h3>
                <p className="uppercase tracking-wider text-sm font-semibold text-[#2597d9]">
                  ORACLE FUSION SCM EXPERT & CONSULTING SPECIALIST
                </p>
              </div>

              <blockquote className="text-muted-foreground text-lg leading-relaxed">
                I believe success in Oracle Fusion is about bridging consulting expertise and practical learning. Through my work with global enterprises and aspiring professionals, I aim to build a future where knowledge drives both business growth and personal transformation.
              </blockquote>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <h3 className="font-display font-bold text-primary text-xl">Who I Am</h3>
              <p className="text-muted-foreground">My consulting and mentoring journey</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-display font-bold text-primary text-xl">How I Work</h3>
              <p className="text-muted-foreground">My approach to strategy & enablement</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-display font-bold text-primary text-xl">Your Success</h3>
              <p className="text-muted-foreground">What you gain from our collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
