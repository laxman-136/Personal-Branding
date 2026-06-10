export default function CourseFinalCTA() {
  return (
    <section className="py-12 bg-gradient-course-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Limited Seats Available
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white font-display leading-tight">
            Shape Your Future with Oracle Fusion SCM
          </h2>

          <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Join 23,000+ professionals who transformed their careers. Your next Oracle Fusion role starts here.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-brand-sky-dark font-bold rounded-xl hover:bg-brand-sky-light shadow-xl hover:shadow-2xl transition-all duration-300 text-lg">
              Enroll Now
            </button>
            <button className="px-10 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg">
              Talk to a Mentor
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            {["ISO 9001:2015 Certified", "200% Job Placement Support", "No Coding Required", "Free 3-Day Demo"].map(
              (badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
