import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="px-6 bg-gradient-to-br from-[#1a3d42] via-[#1f4a50] to-[#1a3d42] py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Quote Text */}
          <div className="space-y-8 text-white">
            <blockquote className="space-y-6 text-lg leading-relaxed italic">
              <p>
                &ldquo;I believe the right guidance can change everything—projects, teams, and
                careers.
              </p>
              <p className="text-base">
                When businesses struggle with execution, I bring structure, ownership, and
                delivery leadership to keep transformation on track.
              </p>
              <p className="text-base">
                When learners struggle with direction, I help them gain practical skills and
                real-world readiness—so they can build a future they&apos;re proud of.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right - Image with Yellow Quote Icon */}
          <div className="relative">
            {/* Yellow Quote Icon */}
            <div className="absolute -top-8 left-1/2 md:left-12 -translate-x-1/2 md:translate-x-0 z-10 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="black">
                <path d="M0,16 Q0,8 4,4 T12,0 L12,4 Q8,4 6,6 T4,12 Q4,14 6,16 L10,16 Q14,16 14,20 L14,28 Q14,32 10,32 L4,32 Q0,32 0,28 Z" />
                <path d="M20,16 Q20,8 24,4 T32,0 L32,4 Q28,4 26,6 T24,12 Q24,14 26,16 L30,16 Q34,16 34,20 L34,28 Q34,32 30,32 L24,32 Q20,32 20,28 Z" />
              </svg>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto md:mx-0">
              <Image
                src="/images/krishna-portrait.jpg"
                alt="Sudheer V - Entrepreneur and Business Leader"
                width={480}
                height={400}
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
