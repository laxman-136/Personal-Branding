import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h1 className="font-display font-black text-5xl leading-tight uppercase lg:text-3xl md:text-3xl">
              Transforming Businesses & Professionals into{" "}
              <span className="block text-primary">Future-Ready ERP Leaders</span>
            </h1>

            <h2 className="font-semibold text-base text-neutral-500">
              Oracle Fusion SCM Expert | Founder & CEO – Tech Leads IT | Creator – AIHI Cloud Solutions
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg max-w-xl">
              <p className="text-secondary-foreground">
                With over 20 years of Oracle ERP experience, Sudheer V has led successful enterprise transformations and mentored{" "}
                <span className="font-medium text-secondary-foreground">10,000+ professionals worldwide</span>—bridging
                consulting strategy, career growth, and innovation in the Oracle Fusion SCM ecosystem.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 pt-6">
              <Link
                href="#expertise"
                className="inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-[#2597d9] text-white"
              >
                Start My Oracle SCM Transformation Journey!
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background border-0 px-6 py-4 rounded-lg transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Portrait */}
          <div className="relative flex justify-end">
            <div className="inline-block">
              <Image
                src="/images/krishna-professional.jpg"
                alt="Sudheer V - Oracle Fusion SCM Expert"
                width={400}
                height={533}
                className="w-full max-w-md h-auto object-contain block"
                priority
              />
              <div className="w-full h-1 bg-[#2597d9] -translate-y-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
