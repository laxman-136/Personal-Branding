import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import ContactCTA from "@/components/home/ContactCTA";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INSIGHTS.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = INSIGHTS.find((i) => i.slug === params.slug);
  if (!insight) return { title: "Article Not Found" };

  return {
    title: `${insight.title} | Sudheer V`,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${params.slug}` },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      url: `/insights/${params.slug}`,
      type: "article",
      publishedTime: insight.date,
      authors: ["Sudheer V"],
      tags: [insight.category],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.excerpt,
    },
  };
}

export default function InsightInnerPage({ params }: Props) {
  const insight = INSIGHTS.find((i) => i.slug === params.slug);
  const related = INSIGHTS.filter(
    (i) => i.slug !== params.slug && i.category === insight?.category
  ).slice(0, 3);

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display font-bold text-3xl">Article Not Found</h1>
          <Link href="/insights" className="btn-primary">Back to Insights</Link>
        </div>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    author: {
      "@type": "Person",
      name: "Sudheer V",
      url: "https://sudheervpersonal.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Leads IT",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="pt-32 pb-16 bg-background" aria-label={insight.title}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/insights" className="hover:text-primary transition-colors">Insights</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground font-medium truncate max-w-[200px]" aria-current="page">
                  {insight.title}
                </li>
              </ol>
            </nav>

            {/* Header */}
            <header className="space-y-5 mb-10">
              <span className="badge-primary">{insight.category}</span>
              <h1 className="font-display font-black text-4xl md:text-5xl leading-tight">
                {insight.title}
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                {insight.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[hsl(178,64%,42%)] flex items-center justify-center text-white text-xs font-bold">
                    SV
                  </div>
                  <span className="font-medium text-foreground">Sudheer V</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {formatDate(insight.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {insight.readTime}
                </span>
              </div>
            </header>

            <div className="divider-gradient mb-10" />

            {/* Article body */}
            <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Oracle Fusion SCM ecosystem is undergoing rapid transformation. Organizations that once relied on manual processes and siloed systems are now embracing end-to-end digital supply chains powered by AI, machine learning, and real-time data.
              </p>
              <h2 className="font-display font-bold text-2xl text-foreground mt-8 mb-4">
                The Shift Happening Right Now
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sudheer V has spent over two decades watching these shifts happen. The acceleration of cloud adoption, combined with Oracle&apos;s continuous innovation in Fusion SCM, has created an unprecedented opportunity for professionals who commit to deep expertise.
              </p>
              <blockquote className="border-l-4 border-primary pl-5 py-1 my-6 bg-primary/5 rounded-r-xl">
                <p className="text-foreground font-medium italic text-lg">
                  &ldquo;The professionals who will dominate the Oracle ecosystem in the next decade are those who invest in understanding not just how to configure the system, but why it works the way it does at the business level.&rdquo;
                </p>
                <footer className="text-sm text-muted-foreground mt-2">— Sudheer V</footer>
              </blockquote>
              <h2 className="font-display font-bold text-2xl text-foreground mt-8 mb-4">
                What This Means for Your Career
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For Oracle Fusion SCM professionals, the expanding skill gap is creating unparalleled career opportunities. Companies implementing Oracle Fusion are struggling to find qualified consultants who can bridge the gap between technical configuration and business process optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is where a comprehensive, implementation-focused training program makes all the difference. The ability to walk into a client engagement and immediately contribute is what separates high-value Oracle consultants from the rest.
              </p>
            </div>

            <div className="divider-gradient my-10" />

            {/* Back button */}
            <Link href="/insights" className="btn-secondary w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to All Insights
            </Link>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section aria-label="Related articles" className="section-padding-sm bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-2xl mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/insights/${r.slug}`} className="group block">
                  <article className="card-premium rounded-xl p-5 h-full space-y-3 hover:-translate-y-0.5 transition-all duration-300">
                    <span className="badge-primary text-xs">{r.category}</span>
                    <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(r.date)}</span>
                      <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
