"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
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
  ChevronDown,
  MessageCircle,
  Linkedin,
  ShieldCheck,
  Zap,
  Star,
  Settings,
  Laptop,
  Check,
  FileText,
  Shield,
  Briefcase,
  Play,
  Activity,
  Layers,
  Database,
  ArrowUpRight,
  GraduationCap,
  Target,
  RefreshCw,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";
import EventQuickDemoForm from "@/components/events/EventQuickDemoForm";
import EventsNewsletterInner from "@/components/events/EventsNewsletterInner";

interface EventType {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  mode?: string;
  description: string;
  registrationUrl: string;
  isFree: boolean;
  price?: string;
  slug: string;
  image: string;
  heroImage?: string;
  ctaText?: string;
  agenda?: Array<{ title: string; description: string }>;
  takeaways?: Array<{ number: string; title: string; description: string }>;
  moodKey?: string;
  heroStats?: Array<{ value: string; label: string }>;
  techStack?: string[];
  processFlow?: Array<{ step: string; title: string; subtitle: string }>;
}

interface Props {
  event: EventType;
  upcomingEvents: EventType[];
  pastWebinars: Array<{ title: string; image: string }>;
}

const WHO_CAN_ATTEND = [
  {
    icon: GraduationCap,
    title: "Students & Beginners",
    description: "Perfect for students and freshers who want to start their journey in Oracle Fusion SCM from scratch.",
    benefits: ["No prior experience needed", "Learn through real-world examples"],
  },
  {
    icon: Users,
    title: "Working Professionals",
    description: "Busy professionals seeking to upskill and add new Oracle SCM expertise to their enterprise profile.",
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
    description: "Professionals from other fields exploring new opportunities in Oracle ERP ecosystem.",
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

export default function EventPageClient({ event, upcomingEvents, pastWebinars }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Curriculum sub-navigation states
  const [activeSubTab, setActiveSubTab] = useState<"syllabus" | "payload" | "lab">("syllabus");
  const [checkedLabs, setCheckedLabs] = useState<Record<string, boolean>>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Hero console tabs state
  const [heroTab, setHeroTab] = useState(0);
  const [isHeroTabAutoPlaying, setIsHeroTabAutoPlaying] = useState(true);
  const [heroTabTimeoutId, setHeroTabTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const selectHeroTabManually = (idx: number) => {
    setHeroTab(idx);
    setIsHeroTabAutoPlaying(false);
    
    if (heroTabTimeoutId) clearTimeout(heroTabTimeoutId);
    
    const tId = setTimeout(() => {
      setIsHeroTabAutoPlaying(true);
    }, 12000);
    setHeroTabTimeoutId(tId);
  };

  useEffect(() => {
    if (!isHeroTabAutoPlaying) return;
    const interval = setInterval(() => {
      setHeroTab((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHeroTabAutoPlaying]);

  // Intersection Observer hook to detect when Sandbox enters viewport
  const { ref: sandboxRef, inView: sandboxInView } = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  // Interactive Sandbox states
  const [autoCreatePO, setAutoCreatePO] = useState(true);
  const [groupRequisitions, setGroupRequisitions] = useState(false);
  const [approvalLimit, setApprovalLimit] = useState(50000);
  const [poStyle, setPoStyle] = useState("standard");
  const [receiptRouting, setReceiptRouting] = useState("standard");
  const [matchOption, setMatchOption] = useState("3-way");

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [manualTimeoutId, setManualTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Resume auto-play after user inactivity
  const selectStepManually = (idx: number) => {
    setActiveStep(idx);
    setIsAutoPlaying(false);
    
    if (manualTimeoutId) clearTimeout(manualTimeoutId);
    
    const tId = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 12000); // resume auto-play after 12s of inactivity
    setManualTimeoutId(tId);
  };

  // Auto-play interval loop when section is in viewport
  useEffect(() => {
    if (!sandboxInView || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 6500); // advance step every 6.5s to allow micro-interactions to run
    
    return () => clearInterval(interval);
  }, [sandboxInView, isAutoPlaying]);

  const [consolePhase, setConsolePhase] = useState<"loading" | "processing" | "success">("loading");

  // Dynamically schedule step progression internal timeline
  useEffect(() => {
    setConsolePhase("loading");
    
    const processingTimeout = setTimeout(() => {
      setConsolePhase("processing");
      
      // Perform automated configuration parameter adjustments to show flow
      if (activeStep === 0) {
        setAutoCreatePO((prev) => !prev);
        setGroupRequisitions((prev) => !prev);
      } else if (activeStep === 1) {
        setApprovalLimit((prev) => (prev === 50000 ? 120000 : 50000));
      } else if (activeStep === 2) {
        setPoStyle((prev) => (prev === "standard" ? "blanket" : "standard"));
      } else if (activeStep === 3) {
        setReceiptRouting((prev) => (prev === "standard" ? "inspection" : "standard"));
      } else if (activeStep === 4) {
        setMatchOption((prev) => (prev === "3-way" ? "2-way" : "3-way"));
      }
    }, 1500);

    const successTimeout = setTimeout(() => {
      setConsolePhase("success");
    }, 4200);

    return () => {
      clearTimeout(processingTimeout);
      clearTimeout(successTimeout);
    };
  }, [activeStep]);

  // Mastery Blueprint states
  const [activeLayer, setActiveLayer] = useState(0);
  const [isLayerAutoPlaying, setIsLayerAutoPlaying] = useState(true);
  const [layerTimeoutId, setLayerTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const { ref: masteryRef, inView: masteryInView } = useInView({
    threshold: 0.15,
    triggerOnce: false,
  });

  const selectLayerManually = (idx: number) => {
    setActiveLayer(idx);
    setIsLayerAutoPlaying(false);
    
    if (layerTimeoutId) clearTimeout(layerTimeoutId);
    
    const tId = setTimeout(() => {
      setIsLayerAutoPlaying(true);
    }, 12000);
    setLayerTimeoutId(tId);
  };

  // Auto-play loop for SCM Mastery roadmap when in viewport
  useEffect(() => {
    if (!masteryInView || !isLayerAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 4);
    }, 4200);
    
    return () => clearInterval(interval);
  }, [masteryInView, isLayerAutoPlaying]);

  const pageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Content Entrance
    gsap.from(".gsap-hero-animate", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

    // 2. Stepper Console ScrollTrigger
    gsap.from(".gsap-stepper-node", {
      scrollTrigger: {
        trigger: ".gsap-stepper-trigger",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });

    // 3. Curriculum Architecture Workspace ScrollTrigger
    gsap.from(".gsap-curriculum-animate", {
      scrollTrigger: {
        trigger: ".gsap-curriculum-trigger",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out"
    });

    // 4. Attendees Cards Stagger Reveal
    gsap.from(".gsap-attendee-card", {
      scrollTrigger: {
        trigger: ".gsap-attendees-trigger",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0.95,
      y: 25,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: pageContainerRef });

  // Mouse tilt states for Hero dashboard mockup
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXVal = ((y - centerY) / centerY) * -10; // max tilt 10 deg
    const rotateYVal = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const moodKey: string = event.moodKey ?? "procurement";
  const techStack: string[] = event.techStack ?? [];
  const processFlow = event.processFlow ?? [];

  // Specific simulation data for each step in SCM flow
  const flowSimulations = [
    {
      title: "Purchase Requisition Creation",
      code: "PR-2026-00412",
      badge: "Pending Approval",
      desc: "Requisitions are initiated by users. Automation checks item availability in the SCM Inventory Cloud and routes the request based on rules.",
      metrics: [
        { label: "Lines", value: "4 Items" },
        { label: "Total Value", value: "$45,200" },
      ],
      setup: "Define Procurement Business Functions & Requisitioning BU relationships.",
    },
    {
      title: "Approval Workflow Routing",
      code: "APPR-RULE-089",
      badge: "In Progress",
      desc: "Approval rules configured in BPM Worklist analyze requisition headers and lines. Rules automatically assign parallel approvals based on job levels.",
      metrics: [
        { label: "Active Rules", value: "Job Hierarchy" },
        { label: "Next Approver", value: "Finance Director" },
      ],
      setup: "Manage Document Approval Rules -> Requisition Rules Configuration.",
    },
    {
      title: "Purchase Order Generation",
      code: "PO-2026-99081",
      badge: "Approved & Sent",
      desc: "Upon requisition approval, SCM automation triggers the 'Create Purchase Order' process, linking negotiated terms and supplier agreements instantly.",
      metrics: [
        { label: "PO Automation", value: "100% Success" },
        { label: "Supplier Status", value: "Acknowledged" },
      ],
      setup: "Configure Purchasing Document Styles & Auto-Submit settings.",
    },
    {
      title: "Receiving & SCM Inspection",
      code: "RCV-88091",
      badge: "Receipt Confirmed",
      desc: "Warehouse operators log delivery against the PO. The system checks tolerances, handles serial tagging, and triggers downstream inventory tracking.",
      metrics: [
        { label: "Tolerance Check", value: "0% Variance" },
        { label: "Stock Location", value: "Bay-14 Main" },
      ],
      setup: "Manage Receiving Parameters & Inventory Organization definitions.",
    },
    {
      title: "Invoicing & 3-Way Matching",
      code: "INV-99015",
      badge: "Matched & Paid",
      desc: "The Payables Cloud receives supplier invoice. Automation runs 3-way matching (Requisition vs. PO vs. Invoice) to execute immediate disbursement.",
      metrics: [
        { label: "Match Status", value: "Validated" },
        { label: "Payment Date", value: "Immediate" },
      ],
      setup: "Define Invoice Matching Rules & Payables Options.",
    },
  ];

  // Structured syllabus/module blueprints for interactive course details
  const moduleDetailsData = [
    {
      focus: "ERP SETUP CORE",
      difficulty: "Intermediate",
      duration: "45 Mins",
      fsmPaths: [
        "Manage Procurement Agent",
        "Manage Purchasing Document Styles",
        "Configure Requisition Business Function"
      ],
      topics: [
        "Define purchasing document styles to enforce line-level rules.",
        "Assign functional security profiles to SCM Procurement Agents.",
        "Manage requisition import automation and template definitions."
      ],
      payloadType: "JSON Payload",
      payload: `{
  "RequisitionHeader": {
    "PreparerEmail": "scm.expert@techleads.it",
    "Description": "Production Raw Materials SCM Setup",
    "RequisitionLines": [
      {
        "LineNumber": 1,
        "ItemNumber": "ITEM-88015",
        "Quantity": 100,
        "Price": 452.00,
        "DestinationType": "INVENTORY"
      }
    ]
  }
}`,
      labTitle: "FSM Setup Sandbox Lab",
      labTasks: [
        "Create SCM sandbox environment in Oracle ERP portal",
        "Configure Purchasing Agent profiles with custom document styles",
        "Validate requisition line auto-approval workflows"
      ]
    },
    {
      focus: "SYSTEM INTEGRATION",
      difficulty: "Advanced",
      duration: "60 Mins",
      fsmPaths: [
        "Manage Integration Interfaces",
        "Manage Supplier Web Services",
        "Configure AP-SCM Ledger Linking"
      ],
      topics: [
        "Integrate Requisition import API with warehouse inventory terminals.",
        "Map cross-ledger invoice structures to General Ledger segments.",
        "Implement REST webhook notifications for PO status updates."
      ],
      payloadType: "SQL Ledger Query",
      payload: `SELECT 
    h.segment1 AS po_number, 
    l.line_num, 
    i.invoice_num, 
    i.invoice_amount 
FROM po_headers_all h
JOIN po_lines_all l ON h.po_header_id = l.po_header_id
JOIN ap_invoices_all i ON i.vendor_id = h.vendor_id
WHERE h.status = 'OPEN';`,
      labTitle: "API Data Mapping Integration Lab",
      labTasks: [
        "Map custom data schema fields to Oracle PO REST API columns",
        "Run sample SQL query to verify cross-ledger transaction links",
        "Debug invoice discrepancy thresholds in sandbox ledger"
      ]
    },
    {
      focus: "LIVE SETUP EXECUTION",
      difficulty: "Architect",
      duration: "75 Mins",
      fsmPaths: [
        "Manage Receiving Parameters",
        "Configure Invoice Matching Rules",
        "Manage Receiving Logistics"
      ],
      topics: [
        "Establish 3-way matching rules to align invoices, POs, and receipts.",
        "Configure receiving routing parameters (Direct, Standard, Inspection).",
        "Deploy tolerance limits for quantity/price discrepancies."
      ],
      payloadType: "JSON Transaction Payload",
      payload: `{
  "TransactionType": "RECEIVE",
  "SourceDocumentCode": "PO",
  "ReceiptLines": [
    {
      "POHeaderNumber": "PO-1002319",
      "ItemNumber": "ITEM-88015",
      "QuantityReceived": 10,
      "InspectionStatus": "PASSED"
    }
  ]
}`,
      labTitle: "P2P Lifecycle Transaction Lab",
      labTasks: [
        "Generate standard Purchase Order from approved requisition",
        "Process warehouse receipt with custom inspection routing",
        "Trigger AP 3-Way matching ledger verification checklist"
      ]
    },
    {
      focus: "PRODUCTION SUPPORT",
      difficulty: "Expert",
      duration: "50 Mins",
      fsmPaths: [
        "Troubleshoot BPM Workflow Exceptions",
        "Manage Purchasing Profile Options",
        "Diagnostic Framework Setup"
      ],
      topics: [
        "Debug stuck BPM approval threads using diagnostic status queries.",
        "Resolve payment disbursement holds triggered by matching errors.",
        "Implement multi-national business unit hierarchy overrides."
      ],
      payloadType: "SQL Diagnostic Script",
      payload: `-- Query to diagnose stuck SCM document approvals
SELECT 
    document_number, 
    approval_status, 
    stuck_node_id, 
    assigned_approver 
FROM fnd_bpm_stuck_instances_v 
WHERE module_code = 'PO'
ORDER BY creation_date DESC;`,
      labTitle: "BPM Debugging & Support Lab",
      labTasks: [
        "Diagnose stuck PO approval workflow in BPM Worklist portal",
        "Troubleshoot matching discrepancy holds on SCM payments",
        "Configure holiday routing rules for procurement supervisors"
      ]
    }
  ];

  return (
    <div ref={pageContainerRef} className="bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 font-sans transition-colors duration-300">
      
      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900">
        
        {/* Architectural grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
             style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        {/* Soft Radial Backlights */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none filter blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-sky-400/5 rounded-full pointer-events-none filter blur-3xl translate-x-1/3" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 gsap-hero-animate">
            <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-neutral-300">/</li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li aria-hidden="true" className="text-neutral-300">/</li>
              <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]" aria-current="page">{event.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left – Content details */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 items-center gsap-hero-animate">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 uppercase tracking-widest text-[10px]">
                  <Zap className="w-3 h-3 text-amber-400" /> {event.type}
                </span>
                {event.isFree ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/20">
                    ✦ FREE ACCESS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-emerald-400 border border-amber-500/20">
                    ✦ PREMIUM — {event.price}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-4 gsap-hero-animate">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-neutral-900 dark:text-neutral-50 leading-[1.05] tracking-tight uppercase">
                  Master SCM <br />
                  <span className="text-gradient-primary">Procurement</span> <br />
                  automation
                </h1>
                {event.subtitle && (
                  <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed max-w-xl">
                    {event.subtitle}
                  </p>
                )}
              </div>

              {/* Unique Inline Highlight Widget */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-150 dark:border-neutral-800 max-w-xl gsap-hero-animate">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">Enterprise SCM Sandbox</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    This is not a slide presentation. You will interact with a live Oracle Cloud environment and configure approval matrices under ex-consultant guidance.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center gsap-hero-animate">
                <a
                  href="#registration"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  {event.ctaText ?? "Register Free Spot"}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 border border-neutral-250 hover:border-neutral-300 text-neutral-700 dark:border-neutral-800 dark:hover:border-neutral-750 dark:text-neutral-300 font-semibold px-6 py-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all duration-300 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Events
                </Link>
              </div>

            </div>

            {/* Right – Interactive Masterclass Cohort Pass (with 3D mouse-tilt) */}
            <div className="lg:col-span-5 relative gsap-hero-animate" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl pointer-events-none filter blur-2xl transform scale-110" />
              
              {/* Classroom Admission Card Container */}
              <div 
                className="relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-premium overflow-hidden cursor-default"
                style={{ 
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.15s ease-out'
                }}
              >
                
                {/* pass header */}
                <div className="bg-neutral-50 dark:bg-neutral-900/80 px-5 py-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Classroom Board</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-primary/15 text-primary">
                    {event.isFree ? "Free Live Masterclass" : "Premium Cohort"}
                  </span>
                </div>

                {/* Tab Selector */}
                <div className="flex border-b border-neutral-100 dark:border-neutral-800 text-[10px] font-bold">
                  {[
                    { label: "Syllabus Preview", icon: Laptop },
                    { label: "Deliverables", icon: Layers },
                    { label: "Schedule", icon: Calendar }
                  ].map((tab, idx) => {
                    const isSelected = idx === heroTab;
                    return (
                      <button
                        key={idx}
                        onClick={() => selectHeroTabManually(idx)}
                        className={`flex-1 py-3 text-center border-b-2 flex items-center justify-center gap-1.5 transition-all ${
                          isSelected 
                            ? "border-primary text-primary bg-neutral-50/40 dark:bg-neutral-900/30" 
                            : "border-transparent text-neutral-400 hover:text-neutral-600"
                        }`}
                      >
                        <tab.icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Card content */}
                <div className="p-6 space-y-5 min-h-[260px] flex flex-col justify-between">
                  
                  {/* Dynamic Tab Panels */}
                  <div className="flex-1 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {heroTab === 0 && (
                        <motion.div
                          key="herotab-syllabus"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-3"
                        >
                          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Key Learning Modules:</span>
                          <div className="space-y-2">
                            {event.agenda && event.agenda.slice(0, 3).map((item, idx) => (
                              <div key={idx} className="flex gap-2.5 items-start text-left text-xs bg-neutral-50 dark:bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800">
                                <span className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                                  0{idx + 1}
                                </span>
                                <div>
                                  <p className="font-bold text-neutral-800 dark:text-neutral-200 leading-tight">{item.title}</p>
                                  <p className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {heroTab === 1 && (
                        <motion.div
                          key="herotab-deliv"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-3"
                        >
                          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Deliverables Included:</span>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            {[
                              { label: "Live Mentorship", val: "90-Min Session", desc: "Live coaching & Q&A" },
                              { label: "Practice Access", val: "14-Day Keys", desc: "Oracle SCM Instance" },
                              { label: "Setup Blueprints", val: "Config PDFs", desc: "Task checklists" },
                              { label: "Community", val: "ERP Discord", desc: "Career discussions" }
                            ].map((item, idx) => (
                              <div key={idx} className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800">
                                <span className="text-[9px] text-neutral-400 block uppercase">{item.label}</span>
                                <span className="font-bold text-primary block">{item.val}</span>
                                <span className="text-[9px] text-neutral-400 block mt-0.5">{item.desc}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {heroTab === 2 && (
                        <motion.div
                          key="herotab-sched"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-4 font-mono text-xs"
                        >
                          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Access Details:</span>
                          <div className="p-4 rounded-xl bg-neutral-950 text-neutral-300 space-y-2 border border-neutral-800">
                            <div className="flex justify-between items-center">
                              <span className="text-neutral-500">Date:</span>
                              <span className="text-neutral-200 font-bold">{formatDate(event.date)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-neutral-500">Start Time:</span>
                              <span className="text-neutral-200 font-bold">{event.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-neutral-500">Duration:</span>
                              <span className="text-neutral-200 font-bold">{event.duration}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-neutral-500">Access Link:</span>
                              <span className="text-emerald-400 font-bold">Sent upon Signup</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Seat Availability Progress Bar */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-bold text-neutral-600 dark:text-neutral-400">Cohort Seats Filling: 88%</span>
                      </div>
                      <span className="font-mono text-neutral-400 font-bold">12 Spots Left</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-[hsl(178,64%,42%)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "88%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── QUICK DEMO CALLOUT ────────────────────────────────────────── */}
      <EventQuickDemoForm />

      {/* ── SCM FUNCTIONAL SANDBOX CONSOLE (STEPPER) ──────────────────── */}
      {processFlow.length > 0 && (
        <section ref={sandboxRef} className="py-24 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 gsap-stepper-trigger">
          <div className="container mx-auto max-w-6xl px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3 gsap-stepper-node">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">SCM Functional Sandbox</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
                Procure-To-Pay Setup Console
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Interact with the setups below to test real Oracle Cloud configuration rules and live workflow branching.
              </p>
            </div>

            {/* Stepper Pipeline Header */}
            <div className="relative mb-12 max-w-5xl mx-auto gsap-stepper-node">
              {/* Connector line background */}
              <div className="absolute top-[22px] left-[6%] right-[6%] h-0.5 bg-neutral-100 dark:bg-neutral-800 -translate-y-1/2 pointer-events-none hidden md:block" />
              
              {/* Active progress bar connector */}
              <div 
                className="absolute top-[22px] left-[6%] h-0.5 bg-primary -translate-y-1/2 pointer-events-none hidden md:block transition-all duration-500" 
                style={{ width: `${(activeStep / (processFlow.length - 1)) * 88}%` }}
              />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                {processFlow.map((step, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectStepManually(idx)}
                      className={`flex md:flex-col items-center gap-3 md:gap-2 focus:outline-none transition-all duration-300 w-full md:w-auto ${
                        isActive ? "scale-105" : "hover:opacity-90"
                      }`}
                    >
                      <div 
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-xs border-2 transition-all duration-300 relative z-10 ${
                          isActive 
                            ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(25,151,217,0.4)]" 
                            : "bg-white text-neutral-500 border-neutral-250 dark:bg-neutral-900 dark:border-neutral-800"
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className={`text-left md:text-center transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-60"}`}>
                        <p className={`text-xs font-bold ${isActive ? "text-primary" : "text-neutral-700 dark:text-neutral-300"}`}>{step.title}</p>
                        <p className="text-[9px] text-neutral-400 uppercase tracking-widest hidden md:block">{step.subtitle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sandbox Console Core Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column - Functional Config Controls */}
              <div className="lg:col-span-5 p-6 md:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-150 dark:border-neutral-800/80 flex flex-col justify-between gsap-stepper-node">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary font-mono">FSM Task Manager</span>
                    <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-neutral-100 uppercase">
                      Configuration Console
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Configure parameters for **{flowSimulations[activeStep]?.title}** below:
                    </p>
                  </div>

                  <div className="h-px bg-neutral-200 dark:bg-neutral-850" />

                  {/* Dynamic interactive parameters depending on active step */}
                  <div className="min-h-[160px] flex flex-col justify-center">
                    {activeStep === 0 && (
                      <div className="space-y-4">
                        {/* Switch 1: Auto-Create PO */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800 shadow-xxs">
                          <div>
                            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">Auto-Create PO</span>
                            <span className="text-[10px] text-neutral-400 block">Convert approved PR to PO instantly</span>
                          </div>
                          <button
                            onClick={() => { setAutoCreatePO(!autoCreatePO); setConsolePhase("success"); selectStepManually(0); }}
                            className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none ${
                              autoCreatePO ? "bg-primary" : "bg-neutral-200 dark:bg-neutral-800"
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full bg-white absolute top-1 left-1 transition-transform ${
                              autoCreatePO ? "translate-x-5" : "translate-x-0"
                            }`} />
                          </button>
                        </div>

                        {/* Switch 2: Group Requisitions */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-155 dark:border-neutral-800 shadow-xxs">
                          <div>
                            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">Consolidate PR Lines</span>
                            <span className="text-[10px] text-neutral-400 block">Group same supplier items into one PO</span>
                          </div>
                          <button
                            onClick={() => { setGroupRequisitions(!groupRequisitions); setConsolePhase("success"); selectStepManually(0); }}
                            className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none ${
                              groupRequisitions ? "bg-primary" : "bg-neutral-200 dark:bg-neutral-800"
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full bg-white absolute top-1 left-1 transition-transform ${
                              groupRequisitions ? "translate-x-5" : "translate-x-0"
                            }`} />
                          </button>
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs font-bold text-neutral-700 dark:text-neutral-300">
                            <span>Approval Limit Value</span>
                            <span className="text-primary font-mono">${approvalLimit.toLocaleString()} USD</span>
                          </div>
                          <input 
                            type="range" 
                            min="10000" 
                            max="200000" 
                            step="10000" 
                            value={approvalLimit}
                            onChange={(e) => { setApprovalLimit(Number(e.target.value)); setConsolePhase("success"); selectStepManually(1); }}
                            className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary" 
                          />
                        </div>
                        <p className="text-[10px] text-neutral-400 italic">
                          Adjusting the slider dynamically reroutes the BPM rules. Requisitions above $50k and $100k trigger additional parallel hierarchical approval routing.
                        </p>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Configure Purchasing Document Style</span>
                        <div className="grid grid-cols-3 gap-2">
                          {["standard", "blanket", "contract"].map((style) => (
                            <button
                              key={style}
                              onClick={() => { setPoStyle(style); setConsolePhase("success"); selectStepManually(2); }}
                              className={`p-2.5 rounded-xl border text-[11px] font-bold transition-all ${
                                poStyle === style 
                                  ? "bg-primary text-white border-primary" 
                                  : "bg-white text-neutral-600 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-855 hover:bg-neutral-50"
                              }`}
                            >
                              {style.toUpperCase()}
                            </button>
                          ))}
                        </div>
                        <p className="text-[10px] text-neutral-400 leading-relaxed pt-1">
                          Oracle Purchasing Cloud supports multiple styles. Blanket agreements focus on negotiated prices, contracts enforce general terms, standards purchase directly.
                        </p>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Receiving Routing Preference</span>
                        <div className="flex flex-col gap-2">
                          {[
                            { id: "direct", label: "Direct Delivery", desc: "No receiving dock hold. Direct receipt." },
                            { id: "standard", label: "Standard Receipt", desc: "Log to dock first, then deliver." },
                            { id: "inspection", label: "Inspection Required", desc: "Quality inspection required before receipt." }
                          ].map((route) => (
                            <button
                              key={route.id}
                              onClick={() => { setReceiptRouting(route.id); setConsolePhase("success"); selectStepManually(3); }}
                              className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 bg-white dark:bg-neutral-900 ${
                                receiptRouting === route.id 
                                  ? "border-primary shadow-sm" 
                                  : "border-neutral-155 dark:border-neutral-850 hover:bg-neutral-50"
                              }`}
                            >
                              <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                                receiptRouting === route.id ? "border-primary bg-primary text-white" : "border-neutral-300"
                              }`}>
                                {receiptRouting === route.id && <div className="w-1 h-1 rounded-full bg-white" />}
                              </div>
                              <div>
                                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block leading-none">{route.label}</span>
                                <span className="text-[9px] text-neutral-400 block mt-0.5">{route.desc}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Invoice Matching Rules</span>
                        <div className="grid grid-cols-2 gap-2">
                          {["2-way", "3-way"].map((match) => (
                            <button
                              key={match}
                              onClick={() => { setMatchOption(match); setConsolePhase("success"); selectStepManually(4); }}
                              className={`p-3 rounded-xl border text-center font-bold text-xs transition-all ${
                                matchOption === match 
                                  ? "bg-primary text-white border-primary shadow-sm" 
                                  : "bg-white text-neutral-600 dark:bg-neutral-900 border-neutral-150 dark:border-neutral-800"
                              }`}
                            >
                              {match.toUpperCase()} MATCHING
                            </button>
                          ))}
                        </div>
                        <p className="text-[10px] text-neutral-400 leading-relaxed pt-1">
                          2-Way matching matches invoice prices to purchase orders. 3-Way matching introduces warehouse receipt checks to eliminate fraudulent billing.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Setup Task display footer */}
                <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800 mt-6 space-y-1 shadow-xxs">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase block tracking-wider">Oracle Cloud Config Goal</span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 font-semibold leading-relaxed">
                    {flowSimulations[activeStep]?.setup}
                  </p>
                </div>
              </div>

              {/* Right Column - Live Sandbox Output View */}
              <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl bg-neutral-900 text-neutral-200 border border-neutral-800 flex flex-col justify-between relative overflow-hidden min-h-[380px] gsap-stepper-node">
                
                {/* Console header */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">Sandbox Terminal Output</span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500">Instance: US_PROD_SCM_26</span>
                </div>

                {/* Simulated visual output based on active step and configuration */}
                <div className="flex-1 flex flex-col justify-center py-6 relative z-10 min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {consolePhase === "loading" && (
                      <motion.div
                        key="console-loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                          <p className="text-primary font-bold">&gt; CONNECTING TO ORACLE CLOUD ERP ENDPOINT...</p>
                          <p className="text-neutral-500 pl-3">&gt; Fetching active configurations for Step 0{activeStep + 1}...</p>
                          <div className="flex items-center gap-2 pl-3 text-neutral-400">
                            <span className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            <span>Loading document parameters...</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {consolePhase === "processing" && (
                      <motion.div
                        key="console-processing"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 font-mono text-xs text-left"
                      >
                        <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                          <p className="text-amber-400 font-bold">&gt; [AUTOMATED RULES CONFIGURATION IN PROGRESS]</p>
                          <p className="text-neutral-300 pl-3">&gt; Applying setup task configurations dynamically...</p>
                          <p className="text-neutral-400 pl-3 animate-pulse">&gt; Rerouting active BPM approval trees...</p>
                          <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden mt-3">
                            <motion.div 
                              className="h-full bg-amber-400"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2.2, ease: "easeInOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {consolePhase === "success" && (
                      <motion.div
                        key={`console-success-${activeStep}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {activeStep === 0 && (
                          <div className="space-y-4 text-left">
                            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
                              <p className="text-emerald-400 font-bold">&gt; REQUISITION CONFIGURATION ACTIVE</p>
                              <div className="space-y-1.5 pl-3">
                                <p className="text-neutral-300">File Source: SCM_PORTAL_API</p>
                                <p className="text-neutral-300">Lines Identified: 4 Items for supplier ACME CORP</p>
                                <p className={`${autoCreatePO ? "text-emerald-400" : "text-amber-400"}`}>
                                  &gt; Auto-Create PO Setting: {autoCreatePO ? "ENABLED (Will generate PO automatically)" : "DISABLED (Requires manual assignment)"}
                                </p>
                                <p className="text-neutral-300">
                                  &gt; Consolidated Supplier Rule: {groupRequisitions ? "TRUE (Consolidated to Single PO)" : "FALSE (Each line creates individual PO)"}
                                </p>
                              </div>
                            </div>

                            {/* Interactive flow path representation */}
                            <div className="flex items-center justify-center gap-4 py-2 bg-neutral-950/40 rounded-xl p-3 border border-neutral-800">
                              <div className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-[10px] font-mono text-neutral-300 font-bold">Approved PR</div>
                              <div className="h-0.5 w-8 border-t-2 border-dashed border-neutral-700 relative">
                                {autoCreatePO && <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full absolute -top-1 right-0 animate-ping" />}
                              </div>
                              <div className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono font-bold ${
                                autoCreatePO ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                              }`}>
                                {autoCreatePO ? "Auto PO Generated" : "Process PO Queue (Hold)"}
                              </div>
                            </div>
                          </div>
                        )}

                        {activeStep === 1 && (
                          <div className="space-y-4 text-left">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Visual BPM Rules Branching Tree</span>
                            
                            {/* Dynamic Approval Hierarchy Tree */}
                            <div className="flex flex-col items-center gap-3 bg-neutral-950/50 p-4 rounded-2xl border border-neutral-800 font-mono text-[10px]">
                              {/* Node 1: Creator */}
                              <div className="px-4 py-1.5 rounded-lg bg-neutral-850 border border-neutral-800 text-neutral-300 font-bold">
                                Requisitioner (Start)
                              </div>
                              <div className="h-4 w-0.5 bg-neutral-700" />

                              {/* Node 2: SCM Specialist */}
                              <div className="px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                                SCM Specialist Approval (Approved &gt;$0)
                              </div>
                              
                              {/* Conditional Node 3: Manager */}
                              {approvalLimit > 50000 && (
                                <motion.div 
                                  className="flex flex-col items-center w-full"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className="h-4 w-0.5 bg-neutral-700" />
                                  <div className="px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold animate-pulse">
                                    Procurement Manager Approval (&gt;$50,000 threshold matched)
                                  </div>
                                </motion.div>
                              )}

                              {/* Conditional Node 4: Director */}
                              {approvalLimit > 100000 && (
                                <motion.div 
                                  className="flex flex-col items-center w-full"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className="h-4 w-0.5 bg-neutral-700" />
                                  <div className="px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold animate-pulse">
                                    Finance Director Approval (&gt;$100,000 threshold matched)
                                  </div>
                                </motion.div>
                              )}

                              <div className="h-4 w-0.5 bg-neutral-700" />
                              <div className="px-4 py-1.5 rounded-lg bg-green-500 text-white font-bold uppercase tracking-wider">
                                Document Approved
                              </div>
                            </div>
                          </div>
                        )}

                        {activeStep === 2 && (
                          <div className="space-y-4 text-left">
                            <span className="text-[10px] uppercase text-neutral-400 block tracking-wider font-mono">Purchasing Document Structure Details</span>
                            
                            <div className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-950 font-mono text-[10px]">
                              <div className="px-4 py-2 border-b border-neutral-800 bg-neutral-905 grid grid-cols-4 font-bold text-neutral-400">
                                <span>PO Type</span>
                                <span>Line Item</span>
                                <span>Agreement</span>
                                <span>Auto-PO</span>
                              </div>
                              
                              {poStyle === "standard" && (
                                <div className="px-4 py-3 grid grid-cols-4 text-neutral-300 border-b border-neutral-900">
                                  <span className="font-bold text-primary">Standard</span>
                                  <span>Item-88015</span>
                                  <span>None (Direct)</span>
                                  <span className="text-emerald-400">YES</span>
                                </div>
                              )}

                              {poStyle === "blanket" && (
                                <div className="px-4 py-3 grid grid-cols-4 text-neutral-300 border-b border-neutral-900">
                                  <span className="font-bold text-primary">Blanket</span>
                                  <span>Supplies Map</span>
                                  <span>AG-90012</span>
                                  <span className="text-emerald-400">YES (Price break)</span>
                                </div>
                              )}

                              {poStyle === "contract" && (
                                <div className="px-4 py-3 grid grid-cols-4 text-neutral-300 border-b border-neutral-900">
                                  <span className="font-bold text-primary">Contract</span>
                                  <span>Terms Map</span>
                                  <span>AG-88091</span>
                                  <span className="text-amber-400">MANUAL</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {activeStep === 3 && (
                          <div className="space-y-4 text-left">
                            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
                              <p className="text-primary font-bold">&gt; RECEIVING LOGISTICS ROUTER</p>
                              <div className="space-y-1.5 pl-3">
                                <p className="text-neutral-300">Selected Routing: {receiptRouting.toUpperCase()}</p>
                                <p className="text-neutral-300">Default Tolerance Limit: 10%</p>
                                <p className={`font-bold ${
                                  receiptRouting === "inspection" ? "text-red-400" : "text-emerald-400"
                                }`}>
                                  &gt; Destination Status: {
                                    receiptRouting === "direct" ? "DELIVERED (Straight to inventory)" :
                                    receiptRouting === "standard" ? "RECEIVED (Cleared to warehouse dock)" :
                                    "HOLD PLACED (Routing to QC Inspection Lab)"
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeStep === 4 && (
                          <div className="space-y-4 text-left">
                            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
                              <p className="text-primary font-bold">&gt; AP MATCHING LEDGER VERIFICATION</p>
                              <div className="space-y-2 pl-3">
                                <p className="text-neutral-300 flex justify-between">
                                  <span>Requisition Amount:</span>
                                  <span className="font-bold text-neutral-100">$45,200</span>
                                </p>
                                <p className="text-neutral-300 flex justify-between">
                                  <span>Purchase Order Match:</span>
                                  <span className="font-bold text-neutral-100">$45,200 (MATCHED)</span>
                                </p>
                                {matchOption === "3-way" ? (
                                  <p className="text-neutral-300 flex justify-between">
                                    <span>Receipt Quantity Verification:</span>
                                    <span className="font-bold text-emerald-400">10 UNITS (MATCHED)</span>
                                  </p>
                                ) : (
                                  <p className="text-neutral-500 flex justify-between">
                                    <span>Receipt Quantity Check:</span>
                                    <span>SKIPPED (2-Way Matching)</span>
                                  </p>
                                )}
                                <div className="h-px bg-neutral-800 my-2" />
                                <p className="font-bold text-emerald-400 flex justify-between">
                                  <span>MATCH STATUS:</span>
                                  <span>VALIDATED &amp; CLEARED FOR DISBURSEMENT</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulated live telemetry logs */}
                <div className="pt-4 border-t border-neutral-800 font-mono text-[9px] text-neutral-500">
                  <p>&gt; System matched: OK | Latency: 1.4s | Rules Evaluated: 8</p>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* ── SCM MASTERY ROADMAP & BLUEPRINT CONSOLE (TAKEAWAYS) ───────── */}
      {event.takeaways && event.takeaways.length > 0 && (
        <section ref={masteryRef} className="py-24 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">SCM Competency Matrix</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
                SCM Architectural Mastery Roadmap
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                A visual schematic of the functional structures, rules, and integration endpoints you will configure in this masterclass.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column - Layered Progression Path */}
              <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
                {[
                  {
                    num: "01",
                    title: event.takeaways[0]?.title ?? "Procurement Setup Mastery",
                    desc: event.takeaways[0]?.description ?? "Enterprise BU structures, document configurations, and functional mapping.",
                    tag: "CORE STRUCTURE"
                  },
                  {
                    num: "02",
                    title: event.takeaways[2]?.title ?? "Auto-Workflow Setup",
                    desc: event.takeaways[2]?.description ?? "BPM Approval workflows, condition rules, and automated routing hierarchies.",
                    tag: "PROCESS RULES"
                  },
                  {
                    num: "03",
                    title: event.takeaways[1]?.title ?? "Case Study Audits",
                    desc: event.takeaways[1]?.description ?? "REST/SOAP API payloads, data integrations, and audit validation matrices.",
                    tag: "API INTEGRATIONS"
                  },
                  {
                    num: "04",
                    title: event.takeaways[3]?.title ?? "Career Growth Guidance",
                    desc: event.takeaways[3]?.description ?? "SCM solution design paradigms and enterprise consultant advisory routes.",
                    tag: "SOLUTIONS ADVISORY"
                  }
                ].map((layer, idx) => {
                  const isActive = idx === activeLayer;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectLayerManually(idx)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 bg-white dark:bg-neutral-900 ${
                        isActive 
                          ? "border-primary shadow-premium scale-[1.01]" 
                          : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 opacity-80"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
                        isActive ? "bg-primary text-white" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-850"
                      }`}>
                        {layer.num}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.2 rounded ${
                            isActive ? "bg-primary/10 text-primary" : "bg-neutral-100 text-neutral-400 dark:bg-neutral-850"
                          }`}>
                            {layer.tag}
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{layer.title}</h4>
                        <p className="text-[10px] text-neutral-400 leading-normal">{layer.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column - Blueprint Console Viewport */}
              <div className="lg:col-span-7 p-8 rounded-3xl bg-neutral-900 text-neutral-300 border border-neutral-800 shadow-premium flex flex-col justify-between relative overflow-hidden min-h-[440px]">
                
                {/* Blueprint grid pattern background */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                     style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                
                {/* Header title */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 relative z-10 font-mono text-[10px] text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span>SYSTEM_BLUEPRINT_VIEWER</span>
                  </div>
                  <span>ACTIVE_LAYER: 0{activeLayer + 1}</span>
                </div>

                {/* Main Viewport Content */}
                <div className="flex-1 flex flex-col justify-center py-8 relative z-10">
                  <AnimatePresence mode="wait">
                    
                    {/* Layer 1: Enterprise Structures Chart */}
                    {activeLayer === 0 && (
                      <motion.div
                        key="layer1"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6 flex flex-col items-center"
                      >
                        <h5 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">Oracle Enterprise structure relationships</h5>
                        
                        <div className="w-full max-w-md flex flex-col items-center gap-3 font-mono text-[10px]">
                          {/* Enterprise */}
                          <div className="px-5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 shadow-sm text-neutral-200 text-center font-bold min-w-[200px]">
                            Global Enterprise Org
                          </div>
                          
                          <div className="h-4 w-px border-l border-dashed border-primary" />
                          
                          {/* Ledger */}
                          <div className="px-5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 shadow-sm text-neutral-200 text-center font-bold min-w-[200px]">
                            Primary Ledger (Accounting)
                          </div>
                          
                          <div className="h-4 w-px border-l border-dashed border-primary" />
                          
                          {/* Legal Entity */}
                          <div className="px-5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 shadow-sm text-neutral-200 text-center font-bold min-w-[200px]">
                            Legal Entity (Tax/Regulatory)
                          </div>
                          
                          <div className="h-4 w-px border-l border-dashed border-primary" />
                          
                          {/* Business Units Split */}
                          <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-center font-bold">
                              Requisitioning BU (US1)
                            </div>
                            <div className="px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-center font-bold">
                              Purchasing BU (US1)
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Layer 2: BPM Workflow Rules */}
                    {activeLayer === 1 && (
                      <motion.div
                        key="layer2"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6 flex flex-col items-center"
                      >
                        <h5 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">BPM document approval logical flow</h5>
                        
                        <div className="w-full max-w-md flex flex-col items-center gap-3 font-mono text-[10px]">
                          {/* Initiator */}
                          <div className="px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 min-w-[160px] text-center">
                            Requisition Initiated
                          </div>
                          
                          <div className="h-4 w-px border-l border-neutral-700" />
                          
                          {/* Decision node */}
                          <div className="px-4 py-3 rounded-2xl bg-neutral-950 border-2 border-neutral-800 text-neutral-200 text-center min-w-[150px] relative font-bold">
                            Total Value &gt; $50K?
                          </div>
                          
                          <div className="flex justify-between w-full max-w-sm px-6 relative mt-1">
                            {/* Branch lines */}
                            <div className="absolute top-0 left-12 w-0.5 h-6 bg-neutral-700" />
                            <div className="absolute top-0 right-12 w-0.5 h-6 bg-neutral-700" />
                            
                            <div className="flex flex-col items-center mt-6">
                              <span className="text-[9px] text-red-400 absolute -top-4 left-10">YES</span>
                              <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-semibold min-w-[120px] text-center">
                                Executive Approval
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center mt-6">
                              <span className="text-[9px] text-green-400 absolute -top-4 right-10">NO</span>
                              <div className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-semibold min-w-[120px] text-center">
                                Auto-Approve PO
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Layer 3: REST API payload editor */}
                    {activeLayer === 2 && (
                      <motion.div
                        key="layer3"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h5 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">Oracle Cloud REST API PO Generation Payload</h5>
                        
                        <div className="p-5 rounded-2xl bg-neutral-950 text-emerald-400 font-mono text-[10px] leading-relaxed border border-neutral-800 shadow-inner max-w-md mx-auto overflow-x-auto">
                          <p className="text-neutral-500">// POST /fscmRestApi/resources/11.13.18.05/purchaseOrders</p>
                          <p className="text-neutral-300">&#123;</p>
                          <p className="pl-4">&quot;RequisitioningBU&quot;: &quot;US1 Business Unit&quot;,</p>
                          <p className="pl-4">&quot;PurchasingBU&quot;: &quot;US1 Business Unit&quot;,</p>
                          <p className="pl-4">&quot;DocumentStyle&quot;: &quot;Standard Purchase Order&quot;,</p>
                          <p className="pl-4">&quot;Supplier&quot;: &quot;ACME Corp&quot;,</p>
                          <p className="pl-4">&quot;Lines&quot;: [</p>
                          <p className="pl-8">&#123;</p>
                          <p className="pl-12">&quot;LineNumber&quot;: 1,</p>
                          <p className="pl-12">&quot;ItemNumber&quot;: &quot;ITEM-101&quot;,</p>
                          <p className="pl-12">&quot;Quantity&quot;: 10,</p>
                          <p className="pl-12">&quot;UnitPrice&quot;: 4520</p>
                          <p className="pl-8">&#125;</p>
                          <p className="pl-4">]</p>
                          <p className="text-neutral-300">&#125;</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Layer 4: Career Advisory Ladder */}
                    {activeLayer === 3 && (
                      <motion.div
                        key="layer4"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6 flex flex-col items-center"
                      >
                        <h5 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">Oracle ERP Consulting Career Progression Track</h5>
                        
                        <div className="w-full max-w-md space-y-4">
                          {[
                            { role: "Solutions Advisory Expert (Masterclass Peak)", val: "Lead architect mapping Ledger, BU, APIs, and BPM systems.", exp: "12+ Yrs", sal: "$200K+ / Contract Advisory" },
                            { role: "Senior Functional Consultant", val: "FSM setups, business requirements analysis, and validation mapping.", exp: "5-10 Yrs", sal: "$130K - $180K" },
                            { role: "Oracle Functional Associate", val: "Assists setups, logs tickets, runs basic functional sanity tests.", exp: "1-4 Yrs", sal: "$80K - $110K" }
                          ].map((ladder, idx) => (
                            <div key={idx} className={`p-3.5 rounded-2xl border font-mono text-[10px] ${
                              idx === 0 
                                ? "bg-primary/10 border-primary/30 text-neutral-100" 
                                : "bg-neutral-950/45 border-neutral-850 text-neutral-400"
                            }`}>
                              <div className="flex justify-between items-center mb-1 font-bold">
                                <span className={idx === 0 ? "text-primary text-xs" : "text-neutral-300"}>{ladder.role}</span>
                                <span className="text-neutral-500">{ladder.exp}</span>
                              </div>
                              <p className="text-[9px] text-neutral-400 leading-relaxed mb-1.5">{ladder.val}</p>
                              <span className="font-bold text-neutral-300">Expected Bracket: {ladder.sal}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Footer notes */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-[9px] text-neutral-500 relative z-10">
                  <span>System: compiled</span>
                  <span>Oracle Cloud SCM Advisory blueprint</span>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* ── CASCADING CURRICULUM DECK ────────────────────────────────── */}
      {event.agenda && event.agenda.length > 0 && (
        <section className="py-24 bg-white dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900 relative overflow-hidden gsap-curriculum-trigger">
          {/* Decorative subtle light background ring */}
          <div className="absolute top-1/2 left-3/4 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
          
          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Headline & Stack Selector */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2 gsap-curriculum-animate">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                    Webinar Syllabus
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-[1.1] uppercase">
                    Curriculum Architecture
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-1">
                    Select a course module from the catalog below to explore active setup scopes, developer REST payloads, database queries, and interactive lab tasks.
                  </p>
                </div>
                
                {/* Module selection buttons as high-end catalog list */}
                <div className="flex flex-col gap-3 pt-2 gsap-curriculum-animate">
                  {event.agenda.map((item, idx) => {
                    const isActive = activeTab === idx;
                    const moduleMeta = moduleDetailsData[idx] || { focus: "SCM SETUP", duration: "45 Mins", difficulty: "Core" };
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveTab(idx);
                        }}
                        className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-4 group relative ${
                          isActive 
                            ? "bg-white dark:bg-neutral-900 border-primary shadow-premium scale-[1.02]" 
                            : "bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-700 dark:text-neutral-300 border-neutral-100 dark:border-neutral-850 hover:bg-neutral-50 hover:border-neutral-200"
                        }`}
                      >
                        {/* Selected overlay glow */}
                        {isActive && (
                          <div className="absolute inset-0 bg-primary/[0.01] rounded-2xl pointer-events-none" />
                        )}

                        {/* Number Index Circle */}
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-all ${
                          isActive 
                            ? "bg-primary text-white" 
                            : "bg-white dark:bg-neutral-800 text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                        }`}>
                          0{idx + 1}
                        </div>

                        <div className="space-y-1.5 flex-1 min-w-0">
                          <span className={`text-[9px] font-bold uppercase tracking-wider block ${
                            isActive ? "text-primary" : "text-neutral-400"
                          }`}>
                            {moduleMeta.focus}
                          </span>
                          <h3 className={`text-xs font-bold leading-snug truncate ${
                            isActive ? "text-neutral-900 dark:text-neutral-50" : "text-neutral-700 dark:text-neutral-300"
                          }`}>
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[9px] text-neutral-400 font-mono">
                            <span>{moduleMeta.duration}</span>
                            <span>•</span>
                            <span>{moduleMeta.difficulty}</span>
                          </div>
                        </div>

                        <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Premium Interactive Workspace */}
              <div className="lg:col-span-7 gsap-curriculum-animate">
                {event.agenda.map((item, idx) => {
                  const isActive = idx === activeTab;
                  if (!isActive) return null;

                  const meta = moduleDetailsData[idx];
                  if (!meta) return null;

                  // Lab calculations
                  const activeTasks = meta.labTasks || [];
                  const completedCount = activeTasks.filter(task => checkedLabs[`${idx}-${task}`]).length;
                  const percent = activeTasks.length ? Math.round((completedCount / activeTasks.length) * 100) : 0;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border border-neutral-150 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-premium overflow-hidden"
                    >
                      {/* Workbook binder top tab-bar */}
                      <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-150 dark:border-neutral-800">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                          <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
                            CATALOG_ID: MOD_0{idx + 1}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-neutral-400 font-mono">
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded">Blueprint Active</span>
                        </div>
                      </div>

                      {/* Interactive Workspace Navigation Tabs */}
                      <div className="grid grid-cols-3 border-b border-neutral-150 dark:border-neutral-800">
                        {[
                          { id: "syllabus", label: "Syllabus Map", icon: Layers },
                          { id: "payload", label: "Data Payload", icon: Database },
                          { id: "lab", label: "Practice Lab", icon: Award }
                        ].map((tab) => {
                          const isSubTabActive = activeSubTab === tab.id;
                          const TabIcon = tab.icon;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => setActiveSubTab(tab.id as any)}
                              className={`py-3 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-all ${
                                isSubTabActive
                                  ? "border-primary text-primary bg-primary/[0.01]"
                                  : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                              }`}
                            >
                              <TabIcon className="w-3.5 h-3.5" />
                              <span>{tab.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Content panel */}
                      <div className="p-6 md:p-8 min-h-[300px]">
                        <AnimatePresence mode="wait">
                          {activeSubTab === "syllabus" && (
                            <motion.div
                              key="subtab-syllabus"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="space-y-6 text-left"
                            >
                              <div className="space-y-2">
                                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                                  Module {idx + 1}: {item.title}
                                </h3>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>

                              <div className="h-px bg-neutral-150 dark:bg-neutral-800" />

                              {/* SCM FSM Setup Tasks */}
                              <div className="space-y-3">
                                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">
                                  Setup Console Task Maps (FSM)
                                </span>
                                <div className="grid gap-2">
                                  {meta.fsmPaths.map((path, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-neutral-700 dark:text-neutral-300 p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-850">
                                      <Settings className="w-3.5 h-3.5 text-primary shrink-0" />
                                      <span className="font-mono">{path}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Core Topics */}
                              <div className="space-y-3 pt-2">
                                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">
                                  Architectural Concepts Covered
                                </span>
                                <div className="space-y-2">
                                  {meta.topics.map((topic, tIdx) => (
                                    <div key={tIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-450 leading-relaxed">
                                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {activeSubTab === "payload" && (
                            <motion.div
                              key="subtab-payload"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="space-y-4 text-left"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-primary" />
                                  <span className="text-[10px] font-mono font-bold text-neutral-600 dark:text-neutral-400">
                                    {meta.payloadType} Viewport
                                  </span>
                                </div>
                                <button
                                  onClick={() => copyToClipboard(meta.payload, idx)}
                                  className="text-[9px] font-mono font-bold px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5 transition-all"
                                >
                                  {copiedIndex === idx ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-500" />
                                      <span className="text-emerald-500">Copied!</span>
                                    </>
                                  ) : (
                                    <span>Copy Payload</span>
                                  )}
                                </button>
                              </div>

                              {/* Styled Code Terminal block */}
                              <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-850 p-4 relative font-mono text-[10px] text-neutral-300 leading-normal max-h-[260px] overflow-y-auto">
                                <pre className="whitespace-pre-wrap text-left">{meta.payload}</pre>
                              </div>
                              <p className="text-[10px] text-neutral-400 italic">
                                This payload shows how Oracle SCM integrates with rest services. Practice invoking this structure inside the sandbox environment.
                              </p>
                            </motion.div>
                          )}

                          {activeSubTab === "lab" && (
                            <motion.div
                              key="subtab-lab"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="space-y-6 text-left"
                            >
                              <div className="space-y-1">
                                <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                                  Hands-on Practice Activity
                                </span>
                                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                  {meta.labTitle}
                                </h3>
                              </div>

                              {/* Interactive Progress Bar */}
                              <div className="space-y-2 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-150 dark:border-neutral-850">
                                <div className="flex justify-between items-center text-[10px] font-bold text-neutral-500">
                                  <span>LAB PROGRESSION</span>
                                  <span className="text-primary font-mono">{percent}% COMPLETE</span>
                                </div>
                                <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-sky-400"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 0.3 }}
                                  />
                                </div>
                                {percent === 100 && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pt-2 text-[9px] font-bold text-emerald-500 uppercase flex items-center gap-1.5"
                                  >
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>Lab Verified! Custom SCM configurations validated.</span>
                                  </motion.div>
                                )}
                              </div>

                              {/* Task Checkboxes */}
                              <div className="space-y-2.5">
                                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">
                                  Functional Lab Steps
                                </span>
                                <div className="flex flex-col gap-2">
                                  {activeTasks.map((task, tIdx) => {
                                    const taskKey = `${idx}-${task}`;
                                    const isChecked = !!checkedLabs[taskKey];
                                    return (
                                      <button
                                        key={tIdx}
                                        onClick={() => {
                                          setCheckedLabs({
                                            ...checkedLabs,
                                            [taskKey]: !isChecked
                                          });
                                        }}
                                        className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                                          isChecked
                                            ? "bg-emerald-500/5 border-emerald-500/20 text-neutral-800 dark:text-neutral-300"
                                            : "bg-white dark:bg-neutral-900 border-neutral-150 dark:border-neutral-850 text-neutral-700 hover:bg-neutral-50"
                                        }`}
                                      >
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                                          isChecked ? "bg-emerald-500 border-emerald-500 text-white" : "border-neutral-300"
                                        }`}>
                                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                        </div>
                                        <span className="text-xs leading-tight">{task}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ── IDEAL ATTENDEES SECTION ─────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 gsap-attendees-trigger">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Target Audience</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Webinar Participant Scope
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              We have structured the session to deliver value to ERP practitioners at all career stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_CAN_ATTEND.map((audience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col justify-between gsap-attendee-card"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-[hsl(178,64%,42%)] w-full" />
                <div className="p-6 space-y-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <audience.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                      {audience.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed min-h-[60px]">
                      {audience.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {audience.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] text-neutral-500">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── speaker details section (business editorial) ──────────────── */}
      <section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="container mx-auto max-w-6xl px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Enterprise Trainer</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Meet the Instructor
            </h2>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden bg-neutral-50/30 dark:bg-neutral-900/10 shadow-premium">
            <div className="grid md:grid-cols-5 gap-0">
              
              {/* Profile image column */}
              <div className="md:col-span-2 relative min-h-[380px] bg-neutral-100">
                <Image
                  src="/images/krishna-v-speaker.png"
                  alt="Sudheer V — Oracle SCM Consultant"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Bio Details Column */}
              <div className="md:col-span-3 p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-neutral-100 uppercase">
                    Sudheer V (Krishna Vidiyala)
                  </h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">
                    Oracle Fusion SCM Advisor | 20+ Years Enterprise Consulting
                  </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "20+", label: "Years Exp." },
                    { value: "5K+", label: "Pros Trained" },
                    { value: "100+", label: "Projects Done" },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800 text-center">
                      <p className="text-base font-black text-primary">{stat.value}</p>
                      <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                  Sudheer V is a premium ERP advisor. Over two decades of experience, he has configured, automated, and led end-to-end Procurement and Supply Chain transformations for Fortune 500 organizations globally.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {["Oracle Cloud SCM", "Procurement Setup", "BPM Automation", "Enterprise Consulting"].map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-[9px] font-bold bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn Link */}
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/sudheervofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary border border-primary/30 hover:border-primary px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ─────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Student Reviews</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Verified Student Feedback
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-6">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{t.name}</p>
                    <p className="text-[9px] text-neutral-400 uppercase tracking-wider font-bold">{t.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HIGHLIGHTS FROM PAST SESSIONS ──────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Webinar Proof</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Highlights from Past Classes
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Take a look at the interactive dashboard walkthroughs and expert Q&amp;A sessions that have empowered SCM professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pastWebinars.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-850"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-4xl px-6">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Got Questions?</span>
            <h2 className="text-3xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-12 pb-5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── REGISTRATION FORM WIDGET ─────────────────────────────────── */}
      <section id="registration" className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-bold bg-primary tracking-wide">
              <Zap className="w-3.5 h-3.5" /> Secure Your Zoom Link Instantly
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Reserve Your Live Spot
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Join upcoming ERP professionals advancing SCM automation. Check your calendar for this session.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="p-6 md:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-155 dark:border-neutral-800/80 shadow-sm">
              <EventRegistrationForm
                isFree={event.isFree}
                price={event.price ?? ""}
                date={formatDate(event.date)}
                time={event.time}
                duration={event.duration}
                buttonLabel={event.ctaText ?? (event.isFree ? "Register Free Spot" : `Register Seat — ${event.price}`)}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP BANNER ─────────────────────────────────── */}
      <section className="py-16 bg-neutral-950 text-white relative overflow-hidden border-t border-neutral-900">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold tracking-tight uppercase">Stay Notified of Next Masterclasses</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Subscribe to get immediate updates on future SCM webinar dates, live case study config downloads, and Oracle updates from Sudheer V.
            </p>
            <div className="max-w-md mx-auto">
              <EventsNewsletterInner />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED EVENTS ───────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-display font-black text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Other Web Classes You Might Like
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Continue your path to certified Oracle ERP competence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter((e) => e.slug !== event.slug).map((webinar, index) => (
              <div key={index} className="overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <Image src={webinar.image} alt={webinar.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                    <span className="absolute bottom-3 right-3 px-3 py-1 text-white text-[10px] font-bold rounded-full bg-primary">{webinar.isFree ? "Free" : webinar.price}</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-primary transition-colors line-clamp-2 uppercase">{webinar.title}</h3>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>{webinar.time} ({webinar.duration})</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link href={`/events/${webinar.slug}`} className="inline-flex w-full items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-xl transition-all font-bold text-xs uppercase tracking-wider">
                    View &amp; Register
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
