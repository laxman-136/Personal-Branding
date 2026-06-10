import { Settings, BookOpen, Puzzle, Briefcase, Globe, CheckCircle, Rocket, Lightbulb, Trophy, Link, ArrowRight } from "lucide-react";

const beforeItems = [
  { icon: Settings, title: "Limited Hands-On Experience", description: "You understand concepts but lack real implementation exposure." },
  { icon: BookOpen, title: "Unclear on Project Flow", description: "Unsure how Oracle Fusion processes connect across modules." },
  { icon: Puzzle, title: "Dependent Learning", description: "Relying on theory or fragmented online content without practical direction." },
  { icon: Briefcase, title: "Low Confidence in Consulting", description: "Hesitant to handle live client scenarios or ERP issues." },
  { icon: Globe, title: "Generic Skillset", description: "Hard to stand out in competitive ERP job markets." },
];

const afterItems = [
  { icon: CheckCircle, title: "Implementation Confidence", description: "Execute real Oracle Fusion projects end-to-end with project-based learning." },
  { icon: Rocket, title: "Process Mastery", description: "Understand full lifecycle flows — Procurement, Inventory, and Order Management." },
  { icon: Lightbulb, title: "Consulting Readiness", description: "Gain the mindset, templates, and frameworks used in real client delivery." },
  { icon: Trophy, title: "Career Acceleration", description: "Qualify for roles like Oracle Fusion Consultant or Implementation Lead." },
  { icon: Link, title: "Global Credibility", description: "Build recognition through certifications, mentorship, and community visibility." },
];

export default function CourseBeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-4 tracking-wide">
            YOUR TRANSFORMATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Before &amp; After the Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how your skills, confidence, and consulting readiness transform after completing the Oracle Fusion SCM program.
          </p>
        </div>

        {/* Main Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 max-w-6xl mx-auto">
          {/* Before Column */}
          <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border border-border/50 h-full">
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
              <div className="w-12 h-12 rounded-xl bg-muted-foreground/10 flex items-center justify-center">
                <Settings className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-muted-foreground">Before the Program</h3>
                <p className="text-sm text-muted-foreground/70">Where most learners start</p>
              </div>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-background/50 border border-border/30 group transition-all duration-300 hover:border-border"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-muted-foreground/70" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground/80 mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex lg:hidden justify-center -my-4 relative z-20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-sky-medium to-brand-sky flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* After Column */}
          <div className="bg-gradient-course-hero rounded-2xl p-6 md:p-8 h-full shadow-xl">
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/20">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">After the Program</h3>
                <p className="text-sm text-white/70">Where you&#39;ll be</p>
              </div>
            </div>

            <div className="space-y-4">
              {afterItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-white/10 border border-white/10 group transition-all duration-300 hover:bg-white/15 hover:border-white/20"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
