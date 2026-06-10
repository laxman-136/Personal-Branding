import Image from "next/image";
import { PlayCircle, Download, MessageSquare, Bell, BarChart3, FileText, Monitor, Smartphone } from "lucide-react";

const lmsFeatures = [
  { icon: PlayCircle, text: "24/7 Video Access" },
  { icon: BarChart3, text: "Progress Tracking" },
  { icon: FileText, text: "Quizzes & Assignments" },
  { icon: MessageSquare, text: "Mentor Support" },
];
const appFeatures = [
  { icon: Bell, text: "Live Notifications" },
  { icon: PlayCircle, text: "Recorded Sessions" },
  { icon: MessageSquare, text: "Chat Support" },
  { icon: Download, text: "Offline Access" },
];

export default function CourseLMSSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">Learning Platform</span>
          <h2 className="font-bold text-foreground mt-2 text-3xl">Access Learning Your Way</h2>
        </div>

        {/* Compact 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LMS Card */}
          <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-6 border border-accent/20">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">LMS Platform</h3>
                <p className="text-white/70 text-sm">Your complete learning hub</p>
              </div>
            </div>

            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Access recorded sessions, hands-on projects, and assignments anytime. Track your progress and interact with mentors through our smart dashboard.
            </p>

            <Image
              src="/images/course/lms-dashboard.png"
              alt="LMS Dashboard"
              width={600}
              height={288}
              className="w-full rounded-lg shadow-lg border border-white/10 mb-4 h-72 object-cover object-top"
            />

            <div className="grid grid-cols-2 gap-2">
              {lmsFeatures.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                  <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-xs font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile App Card */}
          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mobile App</h3>
                <p className="text-muted-foreground text-sm">Learning in your pocket</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Stay connected with live class notifications, watch sessions offline, and chat with instructors — all from your smartphone.
            </p>

            <div className="flex justify-center mb-4">
              <Image
                src="/images/course/mobile-app.png"
                alt="Mobile App"
                width={300}
                height={288}
                className="h-72 object-contain drop-shadow-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {appFeatures.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                  <feature.icon className="w-4 h-4 text-amber-500" />
                  <span className="text-foreground text-xs font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <span className="text-muted-foreground text-sm">Available on:</span>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-1.5 px-4 py-2 border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-white rounded-lg text-sm font-medium transition-all duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Play Store
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-white rounded-lg text-sm font-medium transition-all duration-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              App Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
