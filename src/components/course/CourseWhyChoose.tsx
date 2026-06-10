import { Users, TrendingUp, Briefcase, Award, Smartphone, Star } from "lucide-react";

const features = [
  {
    icon: Users,
    num: "01",
    title: "Real-Time Trainers",
    desc: "Industry practitioners — not just instructors — with active Oracle project experience",
    gradient: "from-brand-sky/20 to-brand-sky-medium/30",
    iconGrad: "from-brand-sky to-brand-sky-medium",
  },
  {
    icon: TrendingUp,
    num: "02",
    title: "200% Placement Support",
    desc: "We go beyond placement — our support continues even after you're placed in your first role",
    gradient: "from-emerald-500/20 to-teal-500/30",
    iconGrad: "from-emerald-500 to-teal-500",
  },
  {
    icon: Briefcase,
    num: "03",
    title: "Mock Interviews",
    desc: "Face real interview panels with Oracle veterans and get actionable feedback to improve",
    gradient: "from-violet-500/20 to-purple-500/30",
    iconGrad: "from-violet-500 to-purple-500",
  },
  {
    icon: Award,
    num: "04",
    title: "23,000+ Students Trained",
    desc: "Join a community of successful Oracle professionals who have transformed their careers",
    gradient: "from-amber-500/20 to-orange-500/30",
    iconGrad: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    num: "05",
    title: "LMS & Mobile App",
    desc: "2 years of LMS access and a dedicated mobile app to learn at your own pace and convenience",
    gradient: "from-blue-500/20 to-indigo-500/30",
    iconGrad: "from-blue-500 to-indigo-500",
  },
  {
    icon: Star,
    num: "06",
    title: "4.8★ on Google",
    desc: "Consistently rated 4.8 out of 5 by students — our quality speaks for itself",
    gradient: "from-rose-500/20 to-pink-500/30",
    iconGrad: "from-rose-500 to-pink-500",
  },
];

export default function CourseWhyChoose() {
  return (
    <section className="py-12 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-5 bg-brand-sky blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">Why Choose This Program</h2>
          <p className="text-muted-foreground text-lg">
            6 reasons why 23,000+ learners chose to transform their careers with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((f) => (
            <div
              key={f.num}
              className={`group relative bg-gradient-to-br ${f.gradient} rounded-3xl p-8 border border-border/50 hover:border-brand-sky/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <span className="absolute top-6 right-6 text-6xl font-black text-foreground/5 font-display leading-none select-none">
                {f.num}
              </span>

              <div
                className={`w-14 h-14 bg-gradient-to-br ${f.iconGrad} rounded-2xl flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
