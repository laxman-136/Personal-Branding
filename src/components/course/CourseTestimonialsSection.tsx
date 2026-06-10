import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Onkar Channe",
    role: "Oracle SCM Consultant",
    company: "Oracle",
    quote:
      "The training quality at LaunchPad is unmatched. Sudheer's real-world examples made complex concepts easy to grasp. Within 3 months of completing the program, I landed my first Oracle role.",
    stars: 5,
    featured: false,
  },
  {
    name: "Santosh Kumar",
    role: "Senior SCM Analyst",
    company: "NTT Data",
    quote:
      "I was switching from manufacturing to IT and had zero Oracle knowledge. The structured curriculum, hands-on projects, and placement support transformed my career completely. Best investment I've made.",
    stars: 5,
    featured: true,
  },
  {
    name: "Priya Sharma",
    role: "Oracle Fusion Consultant",
    company: "TCS",
    quote:
      "The mock interviews and resume guidance were game-changers. I cleared my first Oracle interview with confidence because of the preparation I received here. Highly recommend this program.",
    stars: 5,
    featured: false,
  },
];

const companies = ["Oracle", "TCS", "IBM", "NTT Data", "Wipro", "Infosys"];

export default function CourseTestimonialsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Students Say</h2>
          <p className="text-muted-foreground text-lg">Real stories from graduates now working at top companies</p>
        </div>

        {/* Staggered 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 items-start">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={idx !== 1 ? "lg:pt-8" : ""}
            >
              <div
                className={`group relative border rounded-3xl p-8 flex flex-col transition-all duration-500 hover:shadow-2xl overflow-hidden bg-gradient-to-br from-card via-card to-amber-500/5 hover:border-amber-500/30 ${
                  t.featured ? "border-amber-500/20 lg:scale-105" : "border-border"
                }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Decorative quote watermark */}
                <Quote className="absolute top-6 right-6 w-24 h-24 text-amber-500 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

                {/* Featured badge */}
                {t.featured && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                    Featured
                  </span>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 mt-2">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 transition-transform duration-150 group-hover:scale-110"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="w-8 h-8 text-amber-500/40 mb-3 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/20 to-brand-sky/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-amber-500">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg leading-tight">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Companies */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Our Graduates Now Work At</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((c) => (
              <span
                key={c}
                className="text-3xl font-bold text-muted-foreground/30 hover:text-muted-foreground/70 transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
