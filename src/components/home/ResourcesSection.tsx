import Image from "next/image";

export default function ResourcesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Oracle Fusion SCM Handbook - Full Width Card */}
        <div className="overflow-hidden rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 lg:p-12 bg-sky-200">
            {/* Left Side - Content */}
            <div className="space-y-6 flex flex-col justify-center">
              {/* Title */}
              <h2 className="font-display text-4xl font-bold lg:text-3xl">
                <span className="text-sky-700">Oracle Fusion</span>{" "}
                <span className="text-sky-700">SCM Handbooks</span>
              </h2>

              {/* Description Blocks */}
              <div className="space-y-4">
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6">
                  <p className="leading-relaxed text-sky-700 text-base">
                    Master Oracle Fusion SCM with comprehensive implementation strategies, industry best practices, and real-world scenarios that accelerate your professional growth.
                  </p>
                </div>

                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6">
                  <p className="leading-relaxed text-sky-700">
                    This handbook provides end-to-end guidance with proven methodologies to help you excel in Oracle Fusion SCM implementation and achieve your career goals!
                  </p>
                </div>

                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6">
                  <p className="leading-relaxed text-sky-700">
                    From SCM basics to advanced concepts, this book covers everything with real-time scenarios, interview questions, and practical insights to prepare you for success in the Oracle Fusion ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/oracle-books-collection.png"
                  alt="Oracle Fusion SCM Books Collection by Sudheer V"
                  width={350}
                  height={280}
                  className="w-full max-w-sm h-auto rounded-lg shadow-2xl"
                />
                {/* Decorative badge */}
                <div className="absolute -top-4 -right-4 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg rotate-12 bg-sky-700">
                  for professionals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
