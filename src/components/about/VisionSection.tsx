import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="mx-6 my-12">
      <div className="bg-gradient-to-br from-[#5eb3cf] via-[#4a9bb5] to-[#3d8ca3] rounded-3xl py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white leading-tight md:text-2xl">
                From Learning to Delivery in Oracle ERP.
              </h2>
              <p className="text-white/90 leading-relaxed text-base">
                I help students and professionals learn Oracle Fusion with a practical,
                project-focused approach—so they become confident and job-ready. I also support
                enterprises with the right talent and delivery discipline to execute
                successfully.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#4a9bb5] font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-all"
                >
                  Join My Oracle Fusion Program
                  <GraduationCap className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#4a9bb5] font-semibold rounded-full px-8 py-3 shadow-lg hover:scale-105 transition-all"
                >
                  Partner with AIHI Cloud
                  <Briefcase className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/sudheer-vision.png"
                alt="Sudheer V - Oracle Fusion SCM Expert and Mentor"
                width={400}
                height={400}
                className="w-auto h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
