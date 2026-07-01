import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UPCOMING_EVENTS, EVENT_PAST_WEBINARS } from "@/lib/data";
import EventPageClient from "@/components/events/EventPageClient";

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
    title: `${event.title} | Sudheer V`,
    description: event.description,
    alternates: { canonical: `/events/${params.slug}` },
    openGraph: {
      title: event.title,
      description: event.description,
      url: `/events/${params.slug}`,
    },
  };
}

export default function EventPage({ params }: Props) {
  const event = UPCOMING_EVENTS.find((e) => e.slug === params.slug);
  if (!event) {
    notFound();
  }

  // Filter past webinars to show relevant ones or generic list
  const pastWebinars = EVENT_PAST_WEBINARS.slice(0, 3);

  return (
    <EventPageClient
      event={event}
      upcomingEvents={UPCOMING_EVENTS}
      pastWebinars={pastWebinars}
    />
  );
}
