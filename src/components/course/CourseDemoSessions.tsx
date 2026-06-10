import { Compass, Layers, Rocket } from "lucide-react";

const demos = [
  {
    day: "Free Preview",
    title: "Demo Session",
    icon: Compass,
    gradient: "from-amber-400 to-orange-500",
    desc: "Career Path & Mentoring",
    highlights: [
      "Overview of Oracle Fusion SCM career paths",
      "Meet your instructor Sudheer V",
      "Program structure walkthrough",
      "Q&A with previous batch alumni",
    ],
    takeaway: "Understand if this is the right program for your goals",
  },
  {
    day: "Day 1",
    title: "Foundation",
    icon: Layers,
    gradient: "from-brand-sky to-brand-sky-medium",
    desc: "Functional Foundations",
    highlights: [
      "What is Supply Chain Management?",
      "Introduction to Oracle Fusion Cloud",
      "Navigating the Redwood UI",
      "Understanding SCM modules overview",
    ],
    takeaway: "Build confidence with Oracle Fusion's core concepts",
  },
  {
    day: "Day 2",
    title: "Application",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-600",
    desc: "Fusion Applications",
    highlights: [
      "Hands-on with Oracle Fusion instance",
      "Inventory & Procurement walkthrough",
      "Real enterprise use case demo",
      "Certificate of Participation",
    ],
    takeaway: "Experience actual Oracle Fusion workflows live",
  },
];

export default function CourseDemoSessions() {
  return (
    <section className="py-12 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-block px-4 py-1.5 bg-brand-sky/10 border border-brand-sky/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-brand-sky uppercase tracking-wider">Free Access</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">3-Day Demo Preview</h2>
          <p className="text-muted-foreground text-lg">
            Experience the program before you enroll — completely free, no commitment needed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {demos.map((d) => (
            <div
              key={d.day}
              className="bg-card rounded-3xl overflow-hidden border border-border hover:border-brand-sky/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`bg-gradient-to-r ${d.gradient} p-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <d.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{d.day}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{d.title}</h3>
                <p className="text-white/80 text-sm mt-1">{d.desc}</p>
              </div>

              <div className="p-6 space-y-5">
                <ul className="space-y-2.5">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-sky mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-muted/50 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-1">Key Takeaway</p>
                  <p className="text-sm text-foreground">{d.takeaway}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
