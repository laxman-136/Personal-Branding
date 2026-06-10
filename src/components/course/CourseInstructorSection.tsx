import Image from "next/image";
import { Award, Users, Linkedin, Youtube, Instagram } from "lucide-react";

export default function CourseInstructorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-4">
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">Meet Your Mentor</span>
          </div>
          <h2 className="font-bold text-foreground mb-4 text-4xl">Learn from Industry Expert</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Get mentored by a seasoned Oracle professional with 20+ years of real-world experience
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Profile Card */}
          <div className="bg-gradient-to-br from-card via-card to-amber-500/5 rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left — Image Section */}
              <div className="lg:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-brand-sky/10" />
                <div className="relative p-8 lg:p-12 h-full flex flex-col items-center justify-center">
                  <div className="relative group mb-8">
                    {/* Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-brand-sky/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    <div className="relative">
                      <Image
                        src="/images/course/instructor-sudheer.png"
                        alt="Sudheer V - Lead Instructor"
                        width={360}
                        height={420}
                        className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      {/* Verified Badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-3 rounded-full shadow-xl border-4 border-background flex items-center gap-2 whitespace-nowrap">
                        <span className="font-bold text-sm">Verified Expert</span>
                      </div>
                    </div>
                  </div>
                  {/* Name & Title below picture */}
                  <div className="text-center mt-8 w-full">
                    <h3 className="font-bold text-foreground mb-2 text-2xl">Sudheer V</h3>
                    <p className="text-amber-500 font-semibold text-lg">Lead Instructor &amp; Mentor</p>
                  </div>
                </div>
              </div>

              {/* Right — Info Section */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                {/* Experience Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Award className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Industry Leadership</p>
                      <p className="text-sm text-muted-foreground">Ex-Oracle, Wipro | 20+ Years in Enterprise Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Users className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Training Excellence</p>
                      <p className="text-sm text-muted-foreground">5000+ Professionals Trained | 95% Placement Success Rate</p>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-8 p-6 bg-muted/30 border border-border/30 rounded-2xl">
                  <p className="text-foreground leading-relaxed text-base">
                    With two decades of hands-on experience in Oracle technologies, Sudheer V has trained thousands
                    of professionals and helped them build successful careers in Oracle Fusion SCM. His practical
                    approach and deep industry insights make complex concepts easy to understand and apply.
                  </p>
                </div>

                {/* Stats Strip */}
                <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-brand-sky/10 via-amber-500/10 to-brand-sky/10 rounded-xl px-6 py-4 mb-8 border border-brand-sky/20 gap-4">
                  {[
                    { value: "70+", label: "SCM Batches Delivered" },
                    { value: "20+", label: "Corporate Trainings" },
                    { value: "53+", label: "EBS Batches Delivered" },
                    { value: "95%", label: "Placement Success" },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="text-xl font-bold text-brand-sky">{value}</span>
                      <span className="text-xs text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links & CTA */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Youtube, label: "YouTube" },
                    ].map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 hover:bg-amber-500 transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                    {/* WhatsApp */}
                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 hover:bg-amber-500 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                  <button className="ml-auto px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule 1-on-1 Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
