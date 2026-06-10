export default function AboutStats() {
  return (
    <section className="py-20 md:py-[56px] px-6 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Trusted{" "}
              <span className="text-[hsl(202,83%,37%)]">IT Consulting</span>{" "}
              &amp; Oracle Expertise
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed text-base font-medium">
              By combining deep technical knowledge, hands-on implementation experience, and
              strategic consulting, I deliver results-driven IT solutions that transform
              business operations and empower organizations globally.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl md:text-4xl font-bold text-foreground mb-4">20+</div>
            <p className="text-base text-muted-foreground">Years</p>
            <p className="text-sm text-muted-foreground mt-1">Experience in the Industry</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-4xl font-bold text-foreground mb-4">98%</div>
            <p className="text-base text-muted-foreground">Customer</p>
            <p className="text-sm text-muted-foreground mt-1">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-4xl font-bold text-foreground mb-4">100+</div>
            <p className="text-base text-muted-foreground">Businesses</p>
            <p className="text-sm text-muted-foreground mt-1">Supported Globally</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-4xl font-bold text-foreground mb-4">10,000+</div>
            <p className="text-base text-muted-foreground">Learners</p>
            <p className="text-sm text-muted-foreground mt-1">Mentored Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
