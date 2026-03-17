import { MetadataRoute } from 'next';
import { climbingRoutes, climbingMonths, travelOrigins } from '@/lib/pseo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3001';

  const routes = climbingRoutes.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const months = climbingMonths.map((month) => ({
    url: `${baseUrl}/when-to-climb/${month.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const origins = travelOrigins.map((origin) => ({
    url: `${baseUrl}/travel-from/${origin.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...routes,
    ...months,
    ...origins,
  ];
}
