import Image from "next/image";
import { Clock, Settings, Code, GraduationCap, Star } from "lucide-react";

export default function CourseHeroSection() {
  return (
    <section className="relative bg-background overflow-hidden py-24 pb-8">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-brand-sky/10 rounded-full border border-brand-sky/20">
              <span className="text-sm font-semibold text-brand-sky">ISO 9001:2015 Certified Program</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-foreground font-display">
              Certified Program in Oracle Fusion SCM
            </h1>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Get the Redwood Experience. Learn AI-powered Supply Chain Management directly from Sudheer V.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {[
                { icon: Clock, label: "12+ Weeks", sub: "Program Duration" },
                { icon: Settings, label: "AI-Powered", sub: "Learning" },
                { icon: Code, label: "No Coding", sub: "Required" },
                { icon: GraduationCap, label: "All Graduates", sub: "Welcome" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-brand-sky flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-brand-sky text-white font-semibold rounded-xl hover:bg-brand-sky-dark shadow-lg hover:shadow-xl transition-all duration-300">
                Enroll Now
              </button>
              <button className="px-8 py-3 border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white rounded-xl transition-all duration-300 font-semibold">
                Book a Free Demo
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border/50">
              <div className="absolute inset-0">
                <Image
                  src="/images/course/hero-scm.jpg"
                  alt="Oracle Fusion SCM Interface"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Instructor Card - Bottom Left */}
              <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-border z-20 max-w-[280px] animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-brand-sky/20 flex-shrink-0">
                    <Image
                      src="/images/course/instructor-sudheer.png"
                      alt="Sudheer V"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Sudheer V</p>
                    <p className="text-xs text-muted-foreground">Lead Instructor</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-brand-sky fill-brand-sky" />
                      <span className="text-xs font-semibold text-foreground">20+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats - Top Right */}
              <div className="absolute top-6 right-6 space-y-3 z-20">
                <div className="bg-brand-sky text-white rounded-2xl p-4 shadow-xl text-center">
                  <div className="text-3xl font-bold leading-none">#1</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider mt-1 opacity-90">Course 2025</div>
                </div>
                <div className="bg-card/95 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg border border-brand-sky/20">
                  <div className="flex items-center gap-2">
                    <Settings className="w-3.5 h-3.5 text-brand-sky" />
                    <span className="text-xs font-bold uppercase tracking-wide">AI Powered</span>
                  </div>
                </div>
              </div>

              {/* Pills - Bottom Right */}
              <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-20">
                <div className="bg-brand-sky/90 text-white rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide shadow-lg">
                  SCM Expert
                </div>
                <div className="bg-card/95 text-foreground rounded-full px-4 py-1.5 text-xs font-semibold border border-border">
                  ISO Certified
                </div>
              </div>

              {/* Decorative orbs */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
