import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description?: string;
  path?: string;
}

const SEOHead = ({ title, description, path = "/" }: SEOHeadProps) => {
  const siteName = "Glow Pediatric Dentistry";
  const fullTitle = path === "/" ? title : `${title} | ${siteName}`;
  const baseUrl = "https://glowpediatricdentistry.ca";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:site_name" content={siteName} />
    </Helmet>
  );
};

export default SEOHead;
