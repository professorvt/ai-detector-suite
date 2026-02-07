import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
}

const SEO = ({
  title,
  description,
  name = "AI Suite",
  type = "website",
}: SEOProps) => {
  const siteTitle = `ai suite | ${title}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
