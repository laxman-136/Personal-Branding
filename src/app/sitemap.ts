import { MetadataRoute } from "next";
import { INSIGHTS, UPCOMING_EVENTS } from "@/lib/data";

const BASE_URL = "https://sudheervpersonal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/courses`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/events`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eventRoutes: MetadataRoute.Sitemap = UPCOMING_EVENTS.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...insightRoutes, ...eventRoutes];
}
