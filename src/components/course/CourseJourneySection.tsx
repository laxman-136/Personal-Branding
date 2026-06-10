const journeySteps = [
  {
    step: 1,
    title: "Untrained Student",
    desc: "You join with enthusiasm but no Oracle Fusion knowledge",
    color: "bg-slate-500",
    textColor: "text-slate-600",
  },
  {
    step: 2,
    title: "Expert Training",
    desc: "12-week structured program covering all SCM modules",
    color: "bg-brand-sky",
    textColor: "text-brand-sky",
  },
  {
    step: 3,
    title: "Mock Interviews",
    desc: "Panel interviews with Oracle veterans to prepare you",
    color: "bg-violet-500",
    textColor: "text-violet-600",
  },
  {
    step: 4,
    title: "Placement Support",
    desc: "200% job assistance with resume, referrals & coaching",
    color: "bg-amber-500",
    textColor: "text-amber-600",
  },
  {
    step: 5,
    title: "Placed Professional",
    desc: "You are now a certified Oracle Fusion SCM professional",
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
  },
];

const placementStats = [
  { value: "95%", label: "Placement Rate" },
  { value: "200%", label: "Job Support" },
  { value: "50+", label: "Hiring Partners" },
  { value: "₹4L+", label: "Avg CTC" },
];

const masterySteps = [
  { num: "01", title: "LEARN", desc: "Master Oracle Fusion SCM through structured, hands-on curriculum" },
  { num: "02", title: "PRACTICE", desc: "Apply knowledge via live projects in real Oracle Cloud instances" },
  { num: "03", title: "SUCCEED", desc: "Land your dream job with 200% placement support behind you" },
];

export default function CourseJourneySection() {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Journey Timeline */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">
            From Beginner to Placed Professional
          </h2>
          <p className="text-muted-foreground text-lg">Your transformation journey in 5 stages</p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {journeySteps.map((s) => (
                <div key={s.step} className="text-center group">
                  <div
                    className={`w-16 h-16 ${s.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {s.step}
                  </div>
                  <h3 className={`font-bold text-sm mb-2 ${s.textColor}`}>{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-gradient-course-hero rounded-3xl p-10 mb-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {placementStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black text-white font-display">{value}</div>
                <div className="text-sm text-white/70 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey to Mastery */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">Your Journey to Mastery</h2>
          <p className="text-muted-foreground text-lg">Three phases that take you from zero to hired</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {masterySteps.map((s) => (
            <div
              key={s.num}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-brand-sky/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-8xl font-black text-brand-sky/10 font-display leading-none mb-4 select-none">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-sky transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
