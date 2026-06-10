import { CheckCircle, Download } from "lucide-react";

const modules = [
  { num: "01", title: "Inventory Management", topics: ["Item Setup", "Warehouse Config", "Stock Control"] },
  { num: "02", title: "Procurement & Contracts", topics: ["PO Processing", "Supplier Mgmt", "Contract Lifecycle"] },
  { num: "03", title: "Order Management Cloud", topics: ["Order to Cash", "Pricing", "Fulfillment"] },
  { num: "04", title: "Costing & Pricing", topics: ["Cost Methods", "Margin Analysis", "Price Books"] },
  { num: "05", title: "Sourcing & Supplier Portal", topics: ["Negotiations", "RFQ/RFP", "Supplier Self-Service"] },
  { num: "06", title: "Self-Service Procurement", topics: ["Requisitions", "Catalog Shopping", "Approval Flows"] },
  { num: "07", title: "Product Management", topics: ["Item Master", "Product Hub", "Lifecycle Mgmt"] },
  { num: "08", title: "Global Order Promising", topics: ["ATP/CTP", "Sourcing Rules", "Supply Chain Mgmt"] },
  { num: "09", title: "OIC & OTBI Reporting", topics: ["Integrations", "BI Reports", "Data Analytics"] },
];

const bottomStats = [
  { value: "80+", label: "Training Hours" },
  { value: "10+", label: "Assessments" },
  { value: "15+", label: "Modules" },
  { value: "2", label: "Live Projects" },
];

export default function CourseModulesSection() {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-5 bg-brand-sky blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-foreground font-display mb-2">What You'll Learn</h2>
          <p className="text-muted-foreground text-lg">
            9 comprehensive modules covering the full Oracle Fusion SCM ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-brand-sky/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl font-black text-brand-sky/20 leading-none font-display">{mod.num}</span>
                <div className="flex-1 mt-1">
                  <h3 className="font-bold text-foreground text-base mb-3 group-hover:text-brand-sky transition-colors">
                    {mod.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {mod.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-course-hero rounded-3xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {bottomStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black text-white font-display">{value}</div>
                <div className="text-sm text-white/80 mt-1">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="flex items-center gap-3 px-8 py-3 bg-white text-brand-sky-dark font-semibold rounded-xl hover:bg-brand-sky-light transition-all duration-300 shadow-lg">
              <Download className="w-5 h-5" />
              Download Full Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
