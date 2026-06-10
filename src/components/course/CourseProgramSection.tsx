import { Clock, Smartphone, GraduationCap, Users, CheckCircle, Package, Code, Database, Globe, Briefcase } from "lucide-react";

const programStats = [
  { icon: Clock, value: "3 Months", label: "Program Duration" },
  { icon: Smartphone, value: "5 Months", label: "App Access" },
  { icon: GraduationCap, value: "2 Years", label: "LMS Access" },
  { icon: Users, value: "1 Year", label: "Multiple Batch Access" },
];

const included = [
  { icon: Package, title: "Comprehensive Curriculum", desc: "80+ hours of structured learning covering all SCM modules" },
  { icon: Code, title: "Hands-On Projects", desc: "2 live projects simulating real enterprise environments" },
  { icon: Database, title: "Cloud Instance Access", desc: "Direct access to Oracle Fusion Cloud training environment" },
  { icon: Users, title: "Expert Mentorship", desc: "1-on-1 support from Sudheer V and the training team" },
];

const programDetails = [
  { icon: Globe, label: "Format", value: "Online / Self-Paced" },
  { icon: Users, label: "Eligibility", value: "Any Graduate" },
  { icon: Briefcase, label: "Support", value: "200% Job Assistance" },
];

export default function CourseProgramSection() {
  return (
    <section className="py-12 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">Program Overview</h2>
          <p className="text-muted-foreground text-lg">
            A structured, outcome-focused curriculum designed for real-world job placement
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {programStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-card rounded-2xl p-6 border border-border hover:border-brand-sky/30 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-14 h-14 bg-brand-sky/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-sky/20 transition-colors">
                <Icon className="w-7 h-7 text-brand-sky" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* What's Included */}
          <div className="lg:col-span-2 bg-card rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-amber-500" />
              What&#39;s Included
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {included.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{title}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="relative bg-gradient-to-br from-amber-500 via-amber-500 to-amber-500/80 rounded-3xl p-8 border border-amber-500/20 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Program Details</h3>
            <div className="space-y-4 relative z-10">
              {programDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 pb-4 border-b border-white/20 last:border-0 last:pb-0">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-white/70 uppercase tracking-widest font-medium block">{label}</span>
                    <span className="text-white font-semibold">{value}</span>
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
