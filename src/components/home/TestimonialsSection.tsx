"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ravi K.",
    role: "IT Director",
    company: "",
    text: "Sudheer's consulting guidance helped streamline our Oracle implementation, saving 25% in procurement cycle time.",
  },
  {
    name: "Rajesh M.",
    role: "Senior Oracle Consultant",
    company: "Accenture",
    text: "The hands-on training and real project experience at Tech Leads IT gave me the confidence to lead enterprise implementations.",
  },
  {
    name: "Priya S.",
    role: "Fusion SCM Specialist",
    company: "Infosys",
    text: "Sudheer V's program is not just about learning Oracle—it's about understanding the business process behind the technology.",
  },
  {
    name: "Vikram K.",
    role: "ERP Implementation Lead",
    company: "TCS",
    text: "From a fresher to leading Oracle Fusion projects in 2 years—all thanks to the comprehensive training and career guidance.",
  },
  {
    name: "Deepa N.",
    role: "Oracle Trainer",
    company: "Tech Leads IT",
    text: "Working with Sudheer sir has been transformational. His vision and expertise continue to inspire our entire team.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display font-bold text-4xl mb-4 md:text-3xl">
            Real Stories · Real <span className="text-gradient-primary">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Hear from professionals who transformed their careers with Sudheer V&apos;s guidance
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((testimonial, index) => (
              <div
                key={`${active}-${index}`}
                className="p-8 h-full bg-muted/30 border-0 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-12 h-12 text-primary mb-6" />

                <p className="text-foreground mb-8 leading-relaxed text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-gradient-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Learners Worldwide</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-gradient-primary mb-2">100+</div>
            <div className="text-muted-foreground">Corporate Partners</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-gradient-primary mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
