import Image from "next/image";
import Link from "next/link";

export default function DualExpertiseSection() {
  return (
    <section className="py-20 px-6 bg-[#e8dfd2] md:py-[56px]">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Heading */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Empowering People · Enabling Enterprises
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl mx-auto">
              Every initiative I lead aims to transform potential into performance through
              practical training and strategic consulting
            </p>
          </div>

          {/* Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Trainer Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/images/tech-leads-logo.svg"
                  alt="Tech Leads IT Logo"
                  width={48}
                  height={48}
                  className="flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="inline-block bg-gray-200 text-foreground text-xs font-semibold uppercase tracking-wide px-4 py-2 mb-2 rounded-2xl">
                    TECH LEADS IT
                  </div>
                  <h3 className="font-bold text-foreground text-xl">Founder &amp; Trainer</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                I mentor learners to master Oracle Fusion SCM through scenario-based training,
                live projects, and career guidance — focusing not just on certification, but on
                transformation.
              </p>
              <Link
                href="#training"
                className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-6 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Explore SCM Program
              </Link>
            </div>

            {/* Consultant Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/images/aihi-logo.svg"
                  alt="AIHI Cloud Solutions Logo"
                  width={48}
                  height={48}
                  className="flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="inline-block bg-gray-200 text-foreground text-xs font-semibold uppercase tracking-wide px-4 py-2 mb-2 rounded-2xl">
                    AIHI CLOUD SOLUTIONS
                  </div>
                  <h3 className="font-bold text-foreground text-xl">
                    Consultant &amp; Entrepreneur
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At AIHI Cloud Solutions, we help enterprises plan and optimize Oracle Fusion
                implementations. Our mission — deliver measurable business results through
                expert consulting and skilled talent.
              </p>
              <Link
                href="#consulting"
                className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-6 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Discover AIHI Cloud
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
