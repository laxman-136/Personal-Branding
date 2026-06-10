"use client";

import { MapPin, Phone, Mail, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Phone,
    content: "+91 8125 32 32 32",
    link: "tel:+918125323232",
  },
  {
    icon: MapPin,
    content: (
      <>
        4th Floor, Eashan Arcade, Plot no 3-164,
        <br />
        Trendz Arcade, Kavuri Hills Road, Doctor&apos;s Colony,
        <br />
        Hyderabad, Telangana 500033.
      </>
    ),
    link: undefined,
  },
  {
    icon: Mail,
    content: "info@techleadsit.com",
    link: "mailto:info@techleadsit.com",
  },
];

const TwitterX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_PLATFORMS = [
  { name: "Facebook", Icon: Facebook, url: "https://www.facebook.com/techleadsit" },
  { name: "Twitter / X", Icon: TwitterX, url: "https://twitter.com/techleadsit" },
  { name: "YouTube", Icon: Youtube, url: "https://www.youtube.com/@techleadsit" },
  { name: "Instagram", Icon: Instagram, url: "https://www.instagram.com/techleadsit" },
  { name: "LinkedIn", Icon: Linkedin, url: "https://www.linkedin.com/in/sudheer-v" },
];

export default function ContactInfo() {
  return (
    <section className="py-16 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-wide uppercase text-sky-400">
            Official Social Media
          </p>
          <h2 className="text-4xl font-bold text-white md:text-3xl">Connect with Me</h2>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {CONTACT_DETAILS.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#39bef7]/[0.23]">
                  <Icon className="h-10 w-10 text-sky-300" />
                </div>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-white leading-relaxed text-base">{detail.content}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 pt-8 flex-wrap">
          {SOCIAL_PLATFORMS.map((platform, index) => {
            const { Icon } = platform;
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 bg-sky-600 text-white"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
