import { topicalClusters } from "@/lib/topical-cluster-data";
import ClusterArticleView from "@/components/ClusterArticleView";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const clusterArticles = topicalClusters
    .find(c => c.slug === "costs")
    ?.articles.map(a => ({ slug: a.slug })) || [];
  return clusterArticles;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = topicalClusters
    .find(c => c.slug === "costs")
    ?.articles.find(a => a.slug === slug);
  
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.description,
    keywords: `Kilimanjaro cost, ${slug.replace(/-/g, ' ')}, climbing budget`,
    alternates: {
      canonical: `/costs/${slug}`
    }
  };
}

export default async function ClusterArticlePage({ params }: Props) {
  const { slug } = await params;

  const isClusterArticle = topicalClusters
    .find(c => c.slug === "costs")
    ?.articles.some(a => a.slug === slug);

  if (!isClusterArticle) {
    notFound();
  }

  return <ClusterArticleView slug={slug} />;
}
