import { Play, Star } from "lucide-react";
import Image from "next/image";

const videos = [
  {
    name: "Rajesh Kumar",
    role: "Oracle Consultant @ Deloitte",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Sarah Mitchell",
    role: "SCM Lead @ Capgemini",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b1cc1f9d?w=600&q=80",
  },
  {
    name: "Michael Chen",
    role: "Fusion Analyst @ IBM",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
];

const statsRibbon = [
  { value: "10,000+", label: "Learners" },
  { value: "4.8★", label: "Google Rating" },
  { value: "1,000+", label: "Placements" },
];

export default function CourseVideoTestimonials() {
  return (
    <section className="py-12 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">Hear From Our Learners</h2>
          <p className="text-muted-foreground text-lg">Real testimonials from students who transformed their careers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {videos.map((v) => (
            <div
              key={v.name}
              className="group relative rounded-3xl overflow-hidden border border-border hover:border-brand-sky/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56">
                <Image
                  src={v.thumbnail}
                  alt={v.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-brand-sky/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-sky transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-card">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm">{v.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{v.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {statsRibbon.map(({ value, label }) => (
              <div key={label} className="text-center px-6">
                <div className="text-3xl font-black text-white font-display">{value}</div>
                <div className="text-sm text-white/80 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
