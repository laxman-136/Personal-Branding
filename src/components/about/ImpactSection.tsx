import Image from "next/image";

const METRICS = [
  {
    number: "01",
    title: "Total Consulting Experience",
    description: "20+ Years delivering enterprise ERP transformation.",
  },
  {
    number: "02",
    title: "Consulting Projects",
    description: "8+ Oracle Fusion implementations successfully completed.",
  },
  {
    number: "03",
    title: "EBS Training Batches",
    description: "53+ batches delivered globally across industries.",
  },
  {
    number: "04",
    title: "Fusion Training Batches",
    description:
      "70+ Fusion batches delivered globally across SCM, Procurement & Manufacturing.",
  },
  {
    number: "05",
    title: "Corporate Trainings",
    description: "20+ customized corporate learning programs conducted.",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 bg-background md:py-[56px]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Image with Card Overlay */}
          <div className="relative overflow-hidden rounded-3xl shadow-lg min-h-[600px]">
            <Image
              src="/images/consulting-discussion-new.png"
              alt="Professional consulting discussion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Bottom Card Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-bl-3xl rounded-br-3xl p-8 md:p-10 z-10">
              <p className="text-base font-bold text-foreground leading-relaxed md:text-lg">
                Empowering enterprises through training, implementation, and strategic
                consulting success.
              </p>
            </div>
          </div>

          {/* Right Column - Numbered Metrics */}
          <div className="space-y-8">
            {METRICS.map((metric) => (
              <div key={metric.number} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-all duration-300">
                    <span className="text-2xl font-bold text-sky-500">{metric.number}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">{metric.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
