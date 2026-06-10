import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(202 83% 97%)",
          100: "hsl(202 83% 93%)",
          200: "hsl(202 83% 83%)",
          300: "hsl(202 83% 68%)",
          400: "hsl(202 83% 55%)",
          500: "hsl(202 83% 45%)",
          600: "hsl(202 83% 37%)",
          700: "hsl(202 83% 30%)",
          800: "hsl(202 83% 22%)",
          900: "hsl(202 83% 15%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "brand-sky": {
          DEFAULT: "hsl(199 89% 48%)",
          dark: "hsl(199 89% 20%)",
          medium: "hsl(199 89% 35%)",
          bright: "hsl(199 89% 48%)",
          light: "hsl(199 50% 90%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25" }],
        "display-xs": ["1.5rem", { lineHeight: "1.3" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
        "section-xs": "3rem",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(202 83% 37%) 0%, hsl(178 64% 42%) 100%)",
        "gradient-hero": "linear-gradient(135deg, hsl(210 40% 4%) 0%, hsl(202 50% 8%) 50%, hsl(195 30% 6%) 100%)",        "gradient-course-hero": "linear-gradient(135deg, hsl(199 89% 20%) 0%, hsl(199 89% 35%) 100%)",
        "gradient-course-card": "linear-gradient(145deg, hsl(199 89% 35%) 0%, hsl(199 89% 48%) 100%)",        "gradient-dark": "linear-gradient(180deg, hsl(210 40% 4%) 0%, hsl(210 30% 7%) 100%)",
        "gradient-card": "linear-gradient(135deg, hsl(210 30% 8%) 0%, hsl(202 30% 12%) 100%)",
        "gradient-accent": "linear-gradient(135deg, hsl(45 93% 47%) 0%, hsl(39 100% 50%) 100%)",
        "gradient-overlay": "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
        "gradient-subtle": "linear-gradient(135deg, hsl(202 83% 37% / 0.05) 0%, hsl(178 64% 42% / 0.05) 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsl(202 83% 37% / 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(178 64% 42% / 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(202 83% 20% / 0.2) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px hsl(202 83% 37% / 0.3)",
        "glow": "0 0 30px hsl(202 83% 37% / 0.4)",
        "glow-lg": "0 0 60px hsl(202 83% 37% / 0.5)",
        "card": "0 4px 24px hsl(0 0% 0% / 0.12)",
        "card-hover": "0 12px 40px hsl(0 0% 0% / 0.2)",
        "premium": "0 20px 60px hsl(0 0% 0% / 0.3)",
        "inner-glow": "inset 0 1px 1px hsl(0 0% 100% / 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(202 83% 37% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(202 83% 37% / 0.6)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "counter": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
