import { BookOpen, Target, Briefcase, FolderKanban, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    num: "01",
    title: "Foundation First",
    desc: "Start with the core fundamentals and build conceptual clarity before moving into complex configurations.",
  },
  {
    icon: Target,
    num: "02",
    title: "Progressive Learning",
    desc: "Advance step-by-step through structured learning stages designed to strengthen practical knowledge.",
  },
  {
    icon: Briefcase,
    num: "03",
    title: "Real-Time Use Cases",
    desc: "Learn each module through mapped, real-world project scenarios based on actual business implementations.",
  },
  {
    icon: FolderKanban,
    num: "04",
    title: "Project-Based Learning",
    desc: "Engage directly in guided projects that simulate real consulting challenges and enterprise deployments.",
  },
  {
    icon: ClipboardCheck,
    num: "05",
    title: "Continuous Assessment",
    desc: "Weekly assignments, use case reviews, and mentor feedback ensure consistent progress and application.",
  },
  {
    icon: Rocket,
    num: "06",
    title: "Job-Focused Delivery",
    desc: "Training tailored to meet corporate job requirements — preparing you for real Oracle Fusion project roles.",
  },
];

export default function CourseTrainingMethodology() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sky/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-sky font-semibold text-sm tracking-widest uppercase mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Training Methodology
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A structured path designed to transform beginners into project-ready professionals
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-sky/5 hover:-translate-y-1 bg-sky-50 border-sky-300 border-2"
            >
              {/* Step indicator */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-muted-foreground/20 group-hover:text-brand-sky/15 transition-colors duration-300">
                {item.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center mb-5 group-hover:bg-brand-sky/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-brand-sky" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-sky transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-brand-sky/10 border border-brand-sky/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-brand-sky animate-pulse" />
            <p className="text-foreground font-medium">
              From <span className="text-brand-sky font-semibold">zero to project-ready</span> — The aim is to make every learner job-ready, confident, and capable of handling live projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
