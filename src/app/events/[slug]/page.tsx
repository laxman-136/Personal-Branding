import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  MapPin,
  Video,
  Award,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  GraduationCap,
  Target,
  RefreshCw,
  Linkedin,
  ShieldCheck,
  Zap,
  Star,
} from "lucide-react";
import { UPCOMING_EVENTS, EVENT_PAST_WEBINARS } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";
import EventQuickDemoForm from "@/components/events/EventQuickDemoForm";
import EventsNewsletterInner from "@/components/events/EventsNewsletterInner";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return UPCOMING_EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = UPCOMING_EVENTS.find((e) => e.slug === params.slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} | Sudheer V Events`,
    description: event.description,
    alternates: { canonical: `/events/${params.slug}` },
    openGraph: {
      title: event.title,
      description: event.description,
      url: `/events/${params.slug}`,
    },
  };
}

const WHO_CAN_ATTEND = [
  {
    icon: GraduationCap,
    title: "Students & Beginners",
    description: "Perfect for students and freshers who want to start their journey in Oracle Fusion from scratch.",
    benefits: ["No prior experience needed", "Learn through real-world examples"],
  },
  {
    icon: Users,
    title: "Working Professionals",
    description: "Busy professionals seeking to upskill and add new Oracle Fusion expertise to their profile.",
    benefits: ["Upgrade your skill set efficiently", "Learn without disrupting your job"],
  },
  {
    icon: Target,
    title: "Industry Experts",
    description: "Experienced professionals aiming to stay current with the latest Oracle SCM trends.",
    benefits: ["Deep-dive into real-time use cases", "Learn feature upgrades & best practices"],
  },
  {
    icon: RefreshCw,
    title: "Career Changers",
    description: "Professionals from other fields exploring new opportunities in Oracle ERP.",
    benefits: ["Clear roadmap for transition", "Learn high-demand skills in tech"],
  },
];

const TESTIMONIALS = [
  {
    quote: "This webinar made Oracle Fusion concepts so clear. I feel much more confident handling complex workflows now!",
    name: "Rajesh Kumar",
    role: "Oracle Fusion Consultant",
    initials: "RK",
  },
  {
    quote: "Sudheer's practical examples were fantastic. He answered all my questions and gave me actionable steps to implement in my projects.",
    name: "Sarah Mitchell",
    role: "SCM Implementation Lead",
    initials: "SM",
  },
  {
    quote: "The tips I learned helped me optimize our setup faster than I thought possible. Highly recommend!",
    name: "Michael Chen",
    role: "ERP Functional Consultant",
    initials: "MC",
  },
];

const FAQS = [
  {
    question: "What is included in this webinar?",
    answer: "This webinar covers essential Oracle Fusion SCM topics with live demonstrations, Q&A sessions, and downloadable resources.",
  },
  {
    question: "Is this session free to attend?",
    answer: "Most sessions are completely free. Simply register with your details to secure your spot. Check the price badge above for this specific session.",
  },
  {
    question: "Will I get the recording after the session?",
    answer: "Yes! All registered attendees will receive a recording link within 24 hours after the session for convenient revision.",
  },
  {
    question: "Who should attend this webinar?",
    answer: "This webinar is ideal for Oracle Fusion consultants, SCM professionals, ERP implementation specialists, functional analysts, and anyone enhancing their Oracle Fusion skills.",
  },
  {
    question: "How is this different from the full Oracle Fusion course?",
    answer: "This webinar is a focused 90-minute session on specific topics. Our full Oracle Fusion SCM course spans multiple modules with hands-on projects, certification prep, and placement support.",
  },
  {
    question: "How do I join the full course after attending?",
    answer: "After the webinar, you'll receive information about our complete Oracle Fusion SCM Masterclass. You can also contact us directly to learn about curriculum and enrollment.",
  },
];

function HeroBgPattern({ moodKey }: { moodKey: string }) {
  if (moodKey === "procurement") {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="proc-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="white" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proc-dots)" />
        <line x1="0" y1="30%" x2="100%" y2="70%" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
        <line x1="0" y1="65%" x2="100%" y2="25%" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
      </svg>
    );
  }
  if (moodKey === "analytics") {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="analytics-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#analytics-grid)" />
        <rect x="73%" y="62%" width="3" height="18%" fill="white" fillOpacity="0.05" />
        <rect x="79%" y="52%" width="3" height="28%" fill="white" fillOpacity="0.05" />
        <rect x="85%" y="42%" width="3" height="38%" fill="white" fillOpacity="0.05" />
        <rect x="91%" y="57%" width="3" height="23%" fill="white" fillOpacity="0.05" />
      </svg>
    );
  }
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="cloud-hex" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <polygon points="28,2 54,16 54,44 28,58 2,44 2,16" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="0.7" />
          <polygon points="28,42 54,56 54,84 28,98 2,84 2,56" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cloud-hex)" />
      <circle cx="82%" cy="28%" r="5" fill="white" fillOpacity="0.07" />
      <circle cx="89%" cy="44%" r="3" fill="white" fillOpacity="0.06" />
      <circle cx="76%" cy="56%" r="4" fill="white" fillOpacity="0.06" />
      <line x1="82%" y1="28%" x2="89%" y2="44%" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
      <line x1="89%" y1="44%" x2="76%" y2="56%" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
    </svg>
  );
}

function getProcessFlowTitle(moodKey: string) {
  if (moodKey === "procurement") return "The Complete Procurement Lifecycle You'll Master";
  if (moodKey === "analytics") return "End-to-End Order-to-Cash Flow You'll Cover";
  return "Migration & Integration Architecture You'll Learn";
}

export default function EventInnerPage({ params }: Props) {
  const event = UPCOMING_EVENTS.find((e) => e.slug === params.slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display font-bold text-3xl">Event Not Found</h1>
          <Link href="/events" className="btn-primary">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const moodKey: string = (event as any).moodKey ?? "procurement";
  const heroStats: Array<{ value: string; label: string }> = (event as any).heroStats ?? [];
  const techStack: string[] = (event as any).techStack ?? [];
  const processFlow: Array<{ step: string; title: string; subtitle: string }> = (event as any).processFlow ?? [];

  const sessionFacts = [
    { icon: Clock, label: "Duration", value: event.duration },
    { icon: Video, label: "Mode", value: event.mode ?? "Online (Zoom)" },
    { icon: Users, label: "Seats", value: "100" },
    { icon: DollarSign, label: "Price", value: event.isFree ? "Free" : (event.price ?? "Paid") },
    { icon: Award, label: "Certificate", value: "Available" },
    { icon: TrendingUp, label: "Level", value: "Beginner to Intermediate" },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center text-white overflow-hidden"
        style={{ background: "var(--gradient-primary)" }}
        aria-label="Event hero"
      >
        <HeroBgPattern moodKey={moodKey} />

        {/* Cinematic ambient orbs */}
        <div
          className="absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(178 64% 55% / 0.28) 0%, hsl(178 64% 42% / 0.1) 45%, transparent 70%)", transform: "translate(35%, -42%)", filter: "blur(70px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(202 83% 55% / 0.22) 0%, transparent 70%)", transform: "translate(-38%, 38%)", filter: "blur(50px)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(178 64% 60% / 0.06) 0%, transparent 65%)", transform: "translateY(-50%)", filter: "blur(80px)" }}
          aria-hidden="true"
        />
        {/* Film grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
            mixBlendMode: "soft-light",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-7xl px-4 relative z-10 py-20 w-full">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80 truncate max-w-[200px]" aria-current="page">{event.title}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left – Content */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="glass text-white/90 text-xs font-semibold px-4 py-2 rounded-full border border-white/20">
                  {event.type}
                </span>
                {event.isFree ? (
                  <span className="bg-green-400/20 border border-green-400/40 text-green-200 text-xs font-bold px-4 py-2 rounded-full">
                    ✦ FREE ACCESS
                  </span>
                ) : (
                  <span className="bg-amber-400/20 border border-amber-400/40 text-amber-200 text-xs font-bold px-4 py-2 rounded-full">
                    ✦ PREMIUM — {event.price}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                {event.title}
              </h1>

              {event.subtitle && (
                <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed">
                  {event.subtitle}
                </p>
              )}

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/60" aria-hidden="true" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/60" aria-hidden="true" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/60" aria-hidden="true" />
                  <span>{event.mode ?? "Online / Live on Zoom"}</span>
                </div>
              </div>

              {/* Tech stack tags */}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#registration"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  {event.ctaText ?? "Register Now"}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  All Events
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-2 text-xs text-white/60 pt-1">
                <ShieldCheck className="w-4 h-4 text-green-300 flex-shrink-0" aria-hidden="true" />
                <span>Hosted by a certified Oracle Fusion expert with 20+ years of enterprise consulting experience</span>
              </div>
            </div>

            {/* Right – Hero Image */}
            <div className="relative hidden md:block">
              {/* Glow halo */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, hsl(178 64% 55% / 0.4) 0%, transparent 70%)", filter: "blur(40px)", transform: "scale(1.15)" }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15"
                style={{ transform: "perspective(1100px) rotateY(-5deg) rotateX(2deg)", transformStyle: "preserve-3d" }}
              >
                <Image
                  src={event.heroImage ?? event.image}
                  alt={event.title}
                  width={700}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-[hsl(178,64%,42%)]/15 pointer-events-none" />
                {/* Specular shine */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(0 0% 100% / 0.08) 0%, transparent 45%, hsl(178 64% 42% / 0.06) 100%)" }} />
              </div>
              {/* Floating price badge */}
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-2xl border border-white/20" aria-hidden="true">
                <p className="text-2xl font-bold text-white">{event.isFree ? "FREE" : event.price}</p>
                <p className="text-white/70 text-xs mt-0.5">Register Today</p>
              </div>
              {/* Floating attendee pill */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-xl border border-white/20" aria-hidden="true">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {["R", "S", "M"].map((initial) => (
                      <div key={initial} className="w-6 h-6 rounded-full bg-white/30 border border-white/40 flex items-center justify-center text-[8px] font-bold text-white">
                        {initial}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-white">100+ Registered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stats strip */}
          {heroStats.length > 0 && (
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {heroStats.map((stat, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center border border-white/15">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/65 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── QUICK DEMO FORM ───────────────────────────────── */}
      <EventQuickDemoForm />

      {/* ── PROCESS FLOW ────────────────────────────────────────────── */}
      {processFlow.length > 0 && (
        <section className="py-14 px-4 bg-secondary/40 border-y border-border/50" aria-label="Process flow overview">
          <div className="container mx-auto max-w-5xl">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-10">
              {getProcessFlowTitle(moodKey)}
            </p>
            <div className="relative">
              <div
                className="absolute top-7 left-[8%] right-[8%] h-px hidden md:block pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, hsl(202 83% 37% / 0.4) 15%, hsl(178 64% 42% / 0.4) 85%, transparent)" }}
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-2">
                {processFlow.map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center gap-3">
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg z-10 flex-shrink-0"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground leading-tight">{step.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{step.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ABOUT SESSION ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-background" aria-label="Session overview">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">About the Session</span>
                <h2 className="text-3xl font-bold text-foreground mb-4">What This Session Is About</h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-4">
                  {event.description}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  This session is designed for Oracle ERP professionals, fresh graduates aspiring to enter the Oracle ecosystem, and experienced consultants looking to stay at the cutting edge of supply chain technology. Through live demonstrations and practical scenarios, you&apos;ll gain hands-on knowledge you can immediately apply to your projects.
                </p>
              </div>
              <div
                className="flex items-center gap-4 p-5 rounded-2xl border border-primary/20"
                style={{ background: "linear-gradient(135deg, hsl(202 83% 37% / 0.06), hsl(178 64% 42% / 0.04))" }}
              >
                <Zap className="w-8 h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-bold text-foreground text-sm">Live Interactive Session</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Ask questions in real-time, get instant expert answers, and leave with an actionable implementation plan.</p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 border border-border shadow-lg"
              style={{ background: "linear-gradient(135deg, hsl(202 83% 37% / 0.04), hsl(178 64% 42% / 0.02))" }}
            >
              <h3 className="font-bold text-foreground mb-5 text-base flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" aria-hidden="true" />
                Session Details
              </h3>
              <div className="space-y-4">
                {sessionFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "hsl(202 83% 37% / 0.1)" }}>
                      <fact.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{fact.label}</p>
                      <p className="font-semibold text-foreground text-sm">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="divider-gradient my-5" />
              <a href="#registration" className="btn-cta w-full justify-center text-sm">
                Reserve My Spot
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── AGENDA / WHAT YOU'LL LEARN ────────────────────── */}
      {event.agenda && event.agenda.length > 0 && (
        <section className="py-16 px-4 bg-background" aria-label="Session agenda">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left – Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/agenda-gamification.jpg"
                    alt="Learning progress tracker"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right – Accordion */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Session Curriculum</span>
                <h2 className="text-4xl font-bold mb-8 text-foreground leading-tight md:text-3xl">
                  What You&apos;ll Learn in This Session
                </h2>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <details
                      key={index}
                      className="border border-border rounded-xl overflow-hidden bg-card shadow-sm group"
                      open={index === 0}
                    >
                      <summary className="px-6 py-4 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer flex items-center justify-between list-none">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary" style={{ background: "hsl(202 83% 37% / 0.12)" }}>
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <span className="text-sm font-semibold text-left">{item.title}</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
                      </summary>
                      <div className="px-6 py-4 text-muted-foreground text-sm leading-relaxed border-t border-border/50">
                        {item.description}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TAKEAWAYS ──────────────────────────────────────── */}
      {/* ── GRADIENT SWEEP: light → dark ─── */}
      {event.takeaways && event.takeaways.length > 0 && (
        <div className="h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)), hsl(220 25% 8%))" }} aria-hidden="true" />
      )}

      {event.takeaways && event.takeaways.length > 0 && (
        <section className="py-20 px-4 relative overflow-hidden" style={{ background: "hsl(220 25% 8%)" }} aria-label="What you'll gain">
          {/* Bottom ambient glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 110%, hsl(202 83% 37% / 0.14) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Key Outcomes</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                What You&apos;ll Gain from This Webinar
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Top row – 3 cards */}
              <div className="grid md:grid-cols-3 gap-5 mb-5">
                {event.takeaways.slice(0, 3).map((benefit) => (
                  <div
                    key={benefit.number}
                    className="relative p-8 pt-12 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 group"
                    style={{ background: "linear-gradient(145deg, hsl(220 25% 13%), hsl(220 25% 10%))" }}
                  >
                    <div
                      className="absolute -top-5 left-6 w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {benefit.number}
                    </div>
                    <h3 className="text-base font-bold mb-3 text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Bottom row – 2 cards centered */}
              <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {event.takeaways.slice(3, 5).map((benefit) => (
                  <div
                    key={benefit.number}
                    className="relative p-8 pt-12 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 group"
                    style={{ background: "linear-gradient(145deg, hsl(220 25% 13%), hsl(220 25% 10%))" }}
                  >
                    <div
                      className="absolute -top-5 left-6 w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-lg"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {benefit.number}
                    </div>
                    <h3 className="text-base font-bold mb-3 text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── GRADIENT SWEEP: dark → light ─── */}
      <div className="h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(220 25% 8%), hsl(var(--background)))" }} aria-hidden="true" />

      {/* ── WHO CAN ATTEND ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-background" aria-label="Who can attend">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Ideal Attendees</span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Who Can Attend This Webinar?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_CAN_ATTEND.map((audience, index) => (
              <div
                key={index}
                className="overflow-hidden bg-card border border-border/50 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(202 83% 37% / 0.1)" }}>
                    <audience.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground text-base group-hover:text-primary transition-colors">{audience.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                  <div className="space-y-2">
                    {audience.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-xs text-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKER ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-secondary/30" aria-label="Speaker">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Your Trainer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Your Expert Instructor
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-card border border-border">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative min-h-[300px]">
                <Image
                  src="/images/krishna-v-speaker.png"
                  alt="Sudheer V — Oracle Fusion SCM Expert"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>

              <div className="md:col-span-3 p-8 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Sudheer V (Krishna Vidiyala)
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    Oracle Fusion SCM Expert | 20+ Years Consulting
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "20+", label: "Years Exp." },
                    { value: "5K+", label: "Trained" },
                    { value: "100+", label: "Projects" },
                  ].map((s) => (
                    <div key={s.label} className="text-center rounded-xl p-3" style={{ background: "hsl(202 83% 37% / 0.07)" }}>
                      <p className="text-xl font-bold text-primary">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="divider-gradient" />

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sudheer V is a seasoned Oracle Fusion consultant with over two decades of experience implementing enterprise-level SCM solutions across global organizations, specializing in Supply Chain Management, Procurement, and Manufacturing modules.
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  His training approach focuses on hands-on learning and solving real business challenges consultants face in the field.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Oracle Fusion SCM", "Supply Chain", "ERP Consulting", "Training & Mentorship"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-primary text-xs font-medium rounded-full border border-primary/20" style={{ background: "hsl(202 83% 37% / 0.07)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://www.linkedin.com/in/sudheervofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-5 py-2 rounded-lg transition-colors font-medium text-sm"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      {/* ── GRADIENT SWEEP: light → dark ─── */}
      <div className="h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)), hsl(220 25% 8%))" }} aria-hidden="true" />

      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "hsl(220 25% 8%)" }} aria-label="Attendee testimonials">
        {/* Top glow accent */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(202 83% 37% / 0.1) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Social Proof</span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What Past Attendees Are Saying
            </h2>
            <p className="text-slate-400 mt-3 text-sm max-w-lg mx-auto">Real feedback from Oracle professionals who attended live sessions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col group"
                style={{ background: "linear-gradient(145deg, hsl(220 25% 12%), hsl(220 25% 9%))" }}
              >
                {/* Large editorial quote mark */}
                <div className="text-8xl font-serif leading-none text-primary/15 mb-1 select-none -ml-1" aria-hidden="true">&ldquo;</div>
                <div className="flex gap-0.5 mb-4 -mt-4">
                  {[1,2,3,4,5].map((n) => (
                    <Star key={n} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed text-sm flex-1 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRADIENT SWEEP: dark → light ─── */}
      <div className="h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(220 25% 8%), hsl(var(--background)))" }} aria-hidden="true" />

      {/* ── VIDEO TESTIMONIALS ────────────────────────────── */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10" aria-label="Video testimonials">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-foreground">Hear from Our Learners</h2>
            <p className="text-muted-foreground text-lg">Real feedback from professionals who attended previous webinars</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { thumbnail: "/images/past-webinar-1.jpg", name: "Priya Sharma", designation: "Senior SCM Consultant at TCS", quote: "The practical approach helped me implement Oracle Fusion in real projects", duration: "2:30" },
              { thumbnail: "/images/past-webinar-4.jpg", name: "David Thompson", designation: "Oracle Fusion Lead at Accenture", quote: "Best training I've attended. Clear explanations and hands-on examples", duration: "3:15" },
              { thumbnail: "/images/past-webinar-5.jpg", name: "Anita Desai", designation: "ERP Implementation Manager", quote: "Krishna's expertise and teaching style made complex topics easy to understand", duration: "2:45" },
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                  <Image src={video.thumbnail} alt={video.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white ml-1" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-white">{video.duration}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-semibold text-white text-base mb-1">{video.name}</p>
                    <p className="text-sm text-white/80">{video.designation}</p>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <p className="text-muted-foreground text-sm italic leading-relaxed">&ldquo;{video.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST SESSIONS GALLERY ──────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "var(--gradient-primary)" }} aria-label="Past sessions highlights">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Highlights from Past Webinars
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A glimpse of our previous interactive sessions, expert talks, and live Q&amp;As that helped hundreds of learners enhance their Fusion SCM expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {EVENT_PAST_WEBINARS.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      {/* ── GRADIENT SWEEP: light → dark ─── */}
      <div className="h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, hsl(var(--background)), hsl(220 25% 8%))" }} aria-hidden="true" />

      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "hsl(220 25% 8%)" }} aria-label="FAQ">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Common Questions</span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Got questions about this webinar? Find quick answers below.
            </p>
          </div>

          <div className="space-y-3 mb-12">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="border border-white/10 rounded-2xl px-6 group open:border-primary/30"
                style={{ background: "linear-gradient(145deg, hsl(220 25% 12%), hsl(220 25% 9%))" }}
              >
                <summary className="py-5 text-left text-sm font-semibold text-slate-200 hover:text-white cursor-pointer flex items-center gap-4 list-none">
                  <span className="text-primary font-bold text-xs min-w-[22px] font-mono">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <div className="pb-5 text-slate-400 leading-relaxed text-sm pl-10">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div
            className="border border-white/10 p-8 text-center rounded-2xl"
            style={{ background: "linear-gradient(135deg, hsl(202 83% 37% / 0.1), hsl(178 64% 42% / 0.06))" }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
            <p className="text-slate-400 mb-6 text-sm">Connect with our course advisor for personalized guidance</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium transition-all duration-300 text-sm"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION ───────────────────────────────────── */}
      <section id="registration" className="py-20 px-4" style={{ background: "linear-gradient(180deg, hsl(202 83% 37% / 0.04) 0%, hsl(178 64% 42% / 0.06) 100%)" }} aria-label="Registration">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-semibold mb-4" style={{ background: "var(--gradient-primary)" }}>
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              Limited Seats — Register Now to Secure Your Spot
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Reserve Your Spot</h2>
            <p className="text-muted-foreground">
              Join industry professionals advancing their Oracle Fusion expertise
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div
              className="card-premium rounded-2xl p-7"
              style={{ boxShadow: "0 20px 60px hsl(202 83% 37% / 0.12), 0 4px 16px hsl(202 83% 37% / 0.08)" }}
            >
              <EventRegistrationForm
                isFree={event.isFree}
                price={event.price ?? ""}
                date={formatDate(event.date)}
                time={event.time}
                duration={event.duration}
                buttonLabel={event.ctaText ?? (event.isFree ? "Register Free" : `Register — ${event.price ?? ""}`)}
              />
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                Secure Registration
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <Award className="w-4 h-4 text-primary" aria-hidden="true" />
                Expert Certified
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <Video className="w-4 h-4 text-primary" aria-hidden="true" />
                Live Session
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── NEWSLETTER ─────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "var(--gradient-primary)" }}
        aria-label="Newsletter signup"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Don&apos;t Miss the Next Webinar</h2>
            <p className="text-white/90 text-lg">
              Subscribe to receive updates about upcoming sessions, live events, and new resources from Sudheer V.
            </p>
            <EventsNewsletterInner />
          </div>
        </div>
      </section>

      {/* ── RELATED WEBINARS ───────────────────────────────── */}
      <section className="py-16 px-4 bg-background" aria-label="Other sessions you might like">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Other Sessions You Might Like</h2>
            <p className="text-lg text-muted-foreground">Continue your Oracle Fusion learning journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.filter((e) => e.slug !== params.slug).map((webinar, index) => (
              <div key={index} className="overflow-hidden bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={webinar.image} alt={webinar.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <span className="absolute bottom-3 right-3 px-3 py-1 text-white text-xs font-semibold rounded-full" style={{ background: "var(--gradient-primary)" }}>{webinar.isFree ? "Free" : webinar.price}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors line-clamp-2">{webinar.title}</h3>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <Link href={`/events/${webinar.slug}`} className="inline-flex w-full items-center justify-center gap-2 border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-5 py-2.5 rounded-lg transition-all font-medium text-sm">
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


