import Image from "next/image";
import { Award, CheckCircle, Star } from "lucide-react";

const features = [
  { icon: Award, title: "ISO 9001:2015 Certified", desc: "Internationally recognized quality standard" },
  { icon: CheckCircle, title: "Industry Recognition", desc: "Trusted by Oracle consultancies & enterprises" },
  { icon: Star, title: "Mentored by Sudheer V", desc: "Certificate endorsed by industry expert" },
  { icon: CheckCircle, title: "Lifetime Digital Access", desc: "Download and share your badge anywhere" },
];

export default function CourseCertification() {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">
            Earn Your Badge of Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            A certification that opens doors at Oracle partners, consultancies, and enterprises worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Feature List */}
          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="w-12 h-12 bg-brand-sky/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-sky" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-brand-sky/10 border border-brand-sky/20 rounded-2xl p-4">
              <p className="text-sm font-semibold text-brand-sky">Certificate Format</p>
              <p className="text-xs text-muted-foreground mt-1">
                A4 portrait, digital PDF — print-ready and shareable on LinkedIn
              </p>
            </div>
          </div>

          {/* Right: Certificate image */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-sky/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/course/certificate.png"
                  alt="Oracle Fusion SCM Completion Certificate"
                  width={520}
                  height={380}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
