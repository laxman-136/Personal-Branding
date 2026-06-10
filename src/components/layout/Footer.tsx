import Link from "next/link";
import { Linkedin, Youtube, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { BRAND } from "@/lib/data";

const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "SCM Masterclass", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Oracle Fusion SCM", href: "/courses" },
    { label: "Free Webinars", href: "/events" },
    { label: "ERP Blog", href: "/insights" },
    { label: "Career Guidance", href: "/about#journey" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  social: [
    { icon: Linkedin, label: "LinkedIn", href: BRAND.linkedin },
    { icon: Youtube, label: "YouTube", href: BRAND.youtube },
    { icon: Instagram, label: "Instagram", href: BRAND.instagram },
    { icon: Twitter, label: "Twitter/X", href: BRAND.twitter },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border" role="contentinfo">
      {/* Main footer */}
      <div className="container mx-auto py-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(178,64%,42%)] flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
                <span className="text-lg font-bold text-white font-display" aria-hidden="true">
                  {BRAND.initials}
                </span>
              </div>
              <span className="font-display font-bold text-lg">{BRAND.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Transforming professionals into future-ready ERP leaders through world-class Oracle Fusion SCM training and consulting.
            </p>
            {/* Contact details */}
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{BRAND.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{BRAND.location}</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Companies */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {FOOTER_LINKS.social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${label}`}
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-sm"
                >
                  <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                Organizations
              </p>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-muted-foreground">
                  🏢 {BRAND.companies.techLeads}
                </span>
                <span className="text-sm text-muted-foreground">
                  ☁️ {BRAND.companies.aihi}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} {BRAND.name}. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Built with ❤️ for Oracle Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
