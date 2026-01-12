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
  title: 'Kunj Shah | AI Engineer & Agent Builder',
  description: 'Portfolio of Kunj Shah - AI Engineer and Systems Builder. Specializing in applied generative AI, full-stack prototyping, and agentic workflows.',
  image: 'https://kunjshah.dev/og-image.png',
  siteUrl: 'https://kunjshah.dev',
  twitterHandle: '@kunjshah_dev',
  siteName: 'Kunj Shah Portfolio',
}

export function SEO({
  title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.siteUrl,
  type = 'website',
  keywords = [
    'AI Engineer',  
    'Autonomous Agent Builder', 
    'Freelance AI Engineer', 
    'AI Consultant', 
    'Machine Learning Freelancer', 
    'Agentic Workflows', 
    'Computer Vision Expert', 
    'MLOps Architect', 
    'LLM Developer', 
    'Custom AI Agents', 
    'Hire AI Developer', 
    'AI Project Development',
    'Python AI Specialist',
    'Deep Learning Consultant'
  ],
}: SEOProps) {
  const pageTitle = title 
    ? `${title} // Kunj Shah` 
    : defaultMeta.title

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Kunj Shah",
      "jobTitle": "AI Engineer",
      "url": defaultMeta.siteUrl,
      "sameAs": [
        "https://github.com/KunjShah95",
        "https://linkedin.com/in/kunjshah05"
      ],
      "description": defaultMeta.description
    },
    {
      "@context": "http://schema.org",
      "@type": "ProfessionalService",
      "name": "Kunj Shah AI Consulting",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressCountry": "India"
      },
      "url": defaultMeta.siteUrl,
      "image": defaultMeta.image,
      "description": "Expert AI and Autonomous Agent development services for high-impact engineering projects."
    }
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Kunj Shah" />
      
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
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaultMeta.twitterHandle} />
      <meta name="twitter:creator" content={defaultMeta.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      <link rel="canonical" href={url} />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

