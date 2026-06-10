import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import EventsGrid from "@/components/events/EventsGrid";
import EventsPastCarousel from "@/components/events/EventsPastCarousel";
import EventsTestimonials from "@/components/events/EventsTestimonials";
import EventsSuggestTopic from "@/components/events/EventsSuggestTopic";
import EventsNewsletter from "@/components/events/EventsNewsletter";

export const metadata: Metadata = {
  title: "Upcoming Events & Webinars | Sudheer V — Oracle SCM Expert Sessions",
  description:
    "Join Sudheer V's upcoming Oracle Fusion SCM webinars, expert talks, and masterclasses. Free and premium sessions for ERP professionals.",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsGrid />
      <EventsPastCarousel />
      <EventsTestimonials />
      <EventsSuggestTopic />
      <EventsNewsletter />
    </>
  );
}
