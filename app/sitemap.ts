import { MetadataRoute } from 'next';
import { climbingRoutes, climbingMonths, travelOrigins } from '@/lib/pseo-data';
import { topicalClusters } from '@/lib/topical-cluster-data';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const routes = climbingRoutes.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const months = climbingMonths.map((month) => ({
    url: `${baseUrl}/climb/${month.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const origins = travelOrigins.map((origin) => ({
    url: `${baseUrl}/travel-guide/${origin.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generate sitemap entries for all topical cluster articles
  const clusterArticles = topicalClusters.flatMap((cluster) =>
    cluster.articles.map((article) => ({
      url: `${baseUrl}/${cluster.slug}/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Index pages for each cluster category
  const clusterIndexPages = topicalClusters.map((cluster) => ({
    url: `${baseUrl}/${cluster.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
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
    {
      url: `${baseUrl}/travel-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ultimate-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gear`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...clusterIndexPages,
    ...routes,
    ...months,
    ...origins,
    ...clusterArticles,
  ];
}
