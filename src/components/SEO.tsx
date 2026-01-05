import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  keywords?: string[]
}

const defaultMeta = {
  title: 'Kunj Shah // Autonomous Agent Architect',
  description: 'AI/ML Engineer building autonomous systems and neural architectures. 3rd Year CS student exploring MLOps and Agentic Intelligence. View my deployments and research labs.',
  image: 'https://kunjshah.dev/og-image.png',
  siteUrl: 'https://kunjshah.dev',
  twitterHandle: '@kunjshah',
  siteName: 'Kunj Shah Portfolio',
}

export function SEO({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.siteUrl,
  type = 'website',
  keywords = ['AI', 'Machine Learning', 'Agentic Workflows', 'Full Stack', 'Portfolio', 'Engineer', 'MLOps', 'LLM', 'Autonomous Agents'],
}: SEOProps) {
  const pageTitle = title 
    ? `${title} // Kunj Shah` 
    : defaultMeta.title

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Kunj Shah" />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultMeta.twitterHandle} />
      <meta name="twitter:creator" content={defaultMeta.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      {/* Additional */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
