import { GraduationCap, Briefcase, Settings, Code } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Fresh Graduates",
    description: "Start your career in Oracle Fusion SCM with zero experience required",
    highlight: "No Experience Needed",
    gradient: "from-sky-500/20 to-blue-600/20",
    iconBg: "bg-sky-500",
  },
  {
    icon: Briefcase,
    title: "ERP Professionals",
    description: "Enhance your existing ERP knowledge and expand your skillset",
    highlight: "Career Growth",
    gradient: "from-amber-500/20 to-orange-600/20",
    iconBg: "bg-amber-500",
  },
  {
    icon: Settings,
    title: "EBS to Fusion",
    description: "Seamlessly upgrade from E-Business Suite to modern cloud",
    highlight: "Smooth Transition",
    gradient: "from-emerald-500/20 to-teal-600/20",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Code,
    title: "Non-Coders",
    description: "No programming background needed — just your drive to learn",
    highlight: "Zero Coding",
    gradient: "from-violet-500/20 to-purple-600/20",
    iconBg: "bg-violet-500",
  },
];

export default function CourseAudienceSection() {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-sky/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-display">
            Who Can Join This Program?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No technical background required — just your commitment to learning and growing in the Oracle ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {audiences.map((audience) => (
            <div key={audience.title} className="group">
              <div
                className={`relative h-full bg-gradient-to-br ${audience.gradient} rounded-3xl p-8 border border-border/50 hover:border-brand-sky/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 ${audience.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">{audience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{audience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
