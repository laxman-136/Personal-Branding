import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[460px] bg-[radial-gradient(circle_at_20%_50%,rgba(250,204,21,0.1)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white leading-tight md:text-4xl">
                Hi, I&apos;m <span className="text-white">Sudheer V</span>
              </h1>
              <p className="text-xl font-semibold text-yellow-400 md:text-lg">
                Oracle Fusion SCM Expert · Mentor · Entrepreneur
              </p>
            </div>

            <div className="space-y-4 text-base text-gray-300 leading-relaxed">
              <p>
                I began my career implementing Oracle ERP systems for global enterprises.
                But over time, I found greater purpose in sharing that knowledge — helping others grow.
              </p>
              <p>
                That journey inspired me to build <span className="font-semibold text-white">Tech Leads IT</span> and{" "}
                <span className="font-semibold text-white">AIHI Cloud Solutions</span> to empower learners and organizations alike.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#journey"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold uppercase tracking-wide px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                Discover My Journey
                <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="relative flex items-center">
              <Image
                src="/images/sudheer-clean.png"
                alt="Sudheer V - Oracle Fusion SCM Expert"
                width={500}
                height={460}
                className="w-full max-w-lg max-h-[460px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
