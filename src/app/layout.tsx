import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://sudheervpersonal.com";
const AUTHOR_NAME = "Sudheer V";
const SITE_DESCRIPTION =
  "Oracle Fusion SCM Expert, Founder & CEO of Tech Leads IT. 20+ years of enterprise ERP experience. Transforming professionals and businesses into future-ready leaders.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${AUTHOR_NAME} | Oracle Fusion SCM Expert & CEO`,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Oracle Fusion SCM",
    "Supply Chain Management",
    "ERP Training",
    "Oracle Consultant",
    "Tech Leads IT",
    "Sudheer V",
    "SCM Expert",
    "Oracle ERP",
    "Enterprise Consulting",
    "Digital Transformation",
    "AIHI Cloud Solutions",
    "Oracle Training",
    "SCM Certification",
    "ERP Career",
  ],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${AUTHOR_NAME} - Oracle SCM Expert`,
    title: `${AUTHOR_NAME} | Oracle Fusion SCM Expert & CEO`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${AUTHOR_NAME} - Oracle Fusion SCM Expert`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AUTHOR_NAME} | Oracle Fusion SCM Expert & CEO`,
    description: SITE_DESCRIPTION,
    creator: "@sudheervofficial",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: AUTHOR_NAME,
              url: SITE_URL,
              jobTitle: "Founder & CEO",
              worksFor: {
                "@type": "Organization",
                name: "Tech Leads IT",
              },
              description: SITE_DESCRIPTION,
              knowsAbout: [
                "Oracle Fusion SCM",
                "Supply Chain Management",
                "ERP Implementation",
                "Enterprise Consulting",
                "Digital Transformation",
              ],
              sameAs: [
                "https://www.linkedin.com/in/sudheervofficial",
                "https://www.youtube.com/@techleadsit",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
