export default function EventsTestimonials() {
  const testimonials = [
    {
      quote: "The webinars helped me understand complex workflows I struggled with for months. Highly recommended!",
      name: "Sarah M.",
      role: "Consultant",
      company: "Technology Services",
    },
    {
      quote: "The deep dive sessions were incredibly insightful. Real-world examples made all the difference in my understanding.",
      name: "James R.",
      role: "Functional Lead",
      company: "IT Solutions",
    },
    {
      quote: "Best webinars I've attended. Complex topics are explained in a way that's easy to follow.",
      name: "Emily D.",
      role: "Project Manager",
      company: "Enterprise Systems",
    },
  ];

  return (
    <section className="py-12 bg-secondary/30" aria-label="What attendees say">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Attendees Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hear from professionals who have transformed their Oracle Fusion skills through our webinars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex-1">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary/40 mb-4"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
