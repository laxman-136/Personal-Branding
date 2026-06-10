import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Self-Paced",
    price: "₹20,000",
    badge: null,
    gradient: "",
    textOnDark: false,
    features: [
      "Full LMS access (2 years)",
      "Recorded video lectures",
      "Course completion certificate",
      "Study materials & notes",
      "Community forum access",
      "Email support",
    ],
    cta: "Enroll Now",
    ctaStyle: "border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white",
  },
  {
    name: "Live Training",
    price: "₹30,000",
    badge: "Most Popular",
    gradient: "bg-gradient-course-card",
    textOnDark: true,
    features: [
      "Everything in Self-Paced",
      "Live interactive classes",
      "1-on-1 mentor sessions",
      "Mock interview preparation",
      "Resume building support",
      "200% placement assistance",
      "WhatsApp support group",
    ],
    cta: "Enroll in Live Training",
    ctaStyle: "bg-white text-brand-sky-dark hover:bg-brand-sky-light",
  },
  {
    name: "Corporate",
    price: "Custom",
    badge: null,
    gradient: "",
    textOnDark: false,
    features: [
      "Customised curriculum",
      "Group batch scheduling",
      "On-site / remote delivery",
      "Corporate completion certificates",
      "Progress reporting dashboard",
      "Dedicated account manager",
    ],
    cta: "Get a Quote",
    ctaStyle: "border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white",
  },
];

export default function CoursePricing() {
  return (
    <section className="py-12 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">Choose Your Learning Path</h2>
          <p className="text-muted-foreground text-lg">
            Flexible pricing to match every learning style and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.gradient
                  ? `${plan.gradient} border-transparent`
                  : "bg-card border-border hover:border-brand-sky/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.textOnDark ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-4xl font-black font-display ${plan.textOnDark ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.textOnDark ? "text-white/80" : "text-brand-sky"
                      }`}
                    />
                    <span className={`text-sm ${plan.textOnDark ? "text-white/90" : "text-muted-foreground"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
