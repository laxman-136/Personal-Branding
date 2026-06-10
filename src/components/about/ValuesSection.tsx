const VALUES = [
  {
    title: "Integrity",
    description: "Do the right thing for every student and client",
    bg: "bg-[#e8f4f8]",
  },
  {
    title: "Excellence",
    description: "Deliver beyond expectations in training and consulting",
    bg: "bg-[#f5f0e8]",
  },
  {
    title: "Empathy",
    description: "Understand every career journey and business need",
    bg: "bg-[#f5f0e8]",
  },
  {
    title: "Innovation",
    description: "Embrace new approaches to solve complex challenges",
    bg: "bg-[#e8f4f8]",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-6 md:py-[56px]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Principles That Drive Everything I Do
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">
            Whether in a classroom or a boardroom, my approach is rooted in clarity, commitment,
            and connection. Knowledge matters only when shared and applied to empower others.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {VALUES.map((value, index) => (
            <div
              key={index}
              className={`${value.bg} rounded-2xl p-8 transition-all duration-300 hover:shadow-md`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
