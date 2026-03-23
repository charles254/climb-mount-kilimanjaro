import { SITE_URL } from "@/lib/config";

export default function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Kilimanjaro Quest",
    "url": SITE_URL,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "523",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Jenkins"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "The Lemosho route was breathtaking. Our lead guide, David, was so patient. Reaching Uhuru Peak at sunrise was the highlight of my life!",
        "datePublished": "2025-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mark Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Being an expat in Kenya, the logistics were so easy. The team handled everything from the Namanga border crossing to the summit. Highly recommended.",
        "datePublished": "2025-02-20"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Elena Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "I was worried about the altitude, but the 'pole-pole' pace and the quality of food kept me going. Such a professional team.",
        "datePublished": "2025-03-10"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
