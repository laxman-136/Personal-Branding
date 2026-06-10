import Image from "next/image";

const EXPERTISE_ITEMS = [
  { title: "Management Skills" },
  { title: "Project Delivery" },
  { title: "Oracle Fusion SCM" },
  { title: "Oracle Fusion Manufacturing & Planning" },
];

export default function AchievementsTimeline() {
  return (
    <section className="py-20 md:py-6 px-6 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left - Image */}
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-lg max-w-md max-h-[500px]">
              <Image
                src="/images/krishna-expertise.png"
                alt="Sudheer V - Oracle Fusion Expert"
                width={400}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Areas of Expertise</h2>
              <p className="font-semibold text-lg text-sky-500">
                Empowering Organizations through Oracle ERP Excellence
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With deep Oracle ERP experience, I help enterprises design, implement, and
                optimize Oracle Fusion Cloud while leading teams, aligning stakeholders, and
                ensuring predictable delivery. My focus is simple: strong governance, scalable
                solutions, and on-time execution. I drive transformation through AIHI Cloud
                Solutions Pvt Ltd and build industry-ready talent through Tech Leads IT. I
                specialize in turning complex requirements into clean, scalable solutions across
                SCM, Manufacturing, and Planning.
              </p>
            </div>

            {/* Expertise Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERTISE_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#E6F4F5] to-white rounded-[20px] p-6 transition-all duration-300 hover:shadow-lg hover:border-2 hover:border-[hsl(202,83%,37%)] border-2 border-transparent"
                >
                  <h3 className="text-foreground font-bold text-base">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
