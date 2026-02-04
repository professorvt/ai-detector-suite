import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO = ({ title, description, canonicalUrl }: SEOProps) => {
  // Apna Asli Domain yahan daalna jab live ho jaye (abhi localhost theek hai)
  const siteUrl = "https://ai-detector-suite.vercel.app";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Google aur AI ke liye Schema (Taaki wo samjhe ye Software Tool hai)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Detector Suite",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1024",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | AI Detector Suite</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Social Media Previews (Open Graph) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Schema for AI Engines */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
