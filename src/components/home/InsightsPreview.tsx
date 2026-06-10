import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Top ERP Trends Shaping Supply Chain 2025",
    date: "October 28, 2025",
    image: "/images/insight-vr-tech.jpg",
    slug: "top-erp-trends-supply-chain-2025",
  },
  {
    title: "Why Oracle Fusion SCM Consultants Are in High Demand",
    date: "October 20, 2025",
    image: "/images/insight-sphere.jpg",
    slug: "oracle-fusion-scm-consultants-high-demand",
  },
  {
    title: "How Continuous Learning Drives ERP Career Growth",
    date: "October 15, 2025",
    image: "/images/insight-screens.jpg",
    slug: "continuous-learning-erp-career-growth",
  },
  {
    title: "Digital Transformation in Modern ERP Systems",
    date: "October 10, 2025",
    image: "/images/insight-gaming.jpg",
    slug: "digital-transformation-modern-erp",
  },
  {
    title: "Future of Supply Chain Management Technology",
    date: "October 5, 2025",
    image: "/images/insight-urban.jpg",
    slug: "future-supply-chain-management-technology",
  },
];

export default function InsightsPreview() {
  return (
    <section id="insights" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display font-bold text-4xl mb-4 md:text-3xl">
            Insights from <span className="text-gradient-primary">Sudheer V</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Expert perspectives on ERP trends, career development, and industry innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Featured Article - Left Side */}
          <Link
            href={`/insights/${insights[0].slug}`}
            className="overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl rounded-xl row-span-2 block"
          >
            <div className="relative h-full min-h-[600px]">
              <Image
                src={insights[0].image}
                alt={insights[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-primary/80 backdrop-blur-sm rounded-md text-sm text-white font-medium mb-6">
                    Technology
                  </span>
                  <h3 className="font-display font-bold text-4xl leading-tight text-white mb-4 group-hover:text-primary-foreground transition-colors md:text-3xl">
                    {insights[0].title}
                  </h3>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Sudheer V</p>
                    <p className="text-sm text-white/80">{insights[0].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Right Side Grid - 4 Smaller Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-1">
            {insights.slice(1).map((insight, index) => (
              <Link
                key={index}
                href={`/insights/${insight.slug}`}
                className="overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl rounded-xl block"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                  <div className="relative h-full flex flex-col justify-between p-6">
                    <span className="inline-block self-start px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-md text-xs text-white font-medium">
                      Technology
                    </span>
                    <h3 className="font-display leading-tight text-white group-hover:scale-[1.02] transition-transform font-bold text-base">
                      {insight.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-semibold rounded-full border-2 border-border px-8 py-4 hover:bg-secondary transition-all"
          >
            View All Insights
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
