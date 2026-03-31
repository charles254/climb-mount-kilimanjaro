import { MetadataRoute } from 'next';
import { climbingRoutes, climbingMonths, travelOrigins } from '@/lib/pseo-data';
import { topicalClusters } from '@/lib/topical-cluster-data';
import { generateComparisons } from '@/lib/route-comparisons';
import { personas } from '@/lib/persona-data';
import { SITE_URL } from '@/lib/config';

const lastModified = new Date('2025-06-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const routes = climbingRoutes.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const months = climbingMonths.map((month) => ({
    url: `${baseUrl}/climb/${month.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Only include high/medium priority origins in sitemap (noindex low-value)
  const origins = travelOrigins
    .filter((origin) => origin.priority !== 'low')
    .map((origin) => ({
      url: `${baseUrl}/travel-guide/${origin.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: origin.priority === 'high' ? 0.7 : 0.5,
    }));

  const clusterArticles = topicalClusters.flatMap((cluster) =>
    cluster.articles.map((article) => ({
      url: `${baseUrl}/${cluster.slug}/${article.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  const comparisons = generateComparisons().map((comp) => ({
    url: `${baseUrl}/routes/compare/${comp.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const personaPages = personas.map((p) => ({
    url: `${baseUrl}/for/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const clusterIndexPages = topicalClusters.map((cluster) => ({
    url: `${baseUrl}/${cluster.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/travel-guide`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ultimate-guide`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gear`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...clusterIndexPages,
    ...routes,
    ...months,
    ...origins,
    ...clusterArticles,
    ...comparisons,
    ...personaPages,
  ];
}
