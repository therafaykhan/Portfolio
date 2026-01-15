import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta name="title" content="Software & Web Development Portfolio" />
        <meta name="description" content="Professional portfolio showcasing expertise in software and web development. Specializing in modern web technologies, full-stack development, and innovative solutions." />
        <meta name="keywords" content="software developer, web developer, full-stack developer, portfolio, web development, software engineering, react, node.js, javascript" />
        <meta name="author" content="Software Developer" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com/" />
        <meta property="og:title" content="Software & Web Development Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing expertise in software and web development." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-portfolio-domain.com/" />
        <meta property="twitter:title" content="Software & Web Development Portfolio" />
        <meta property="twitter:description" content="Professional portfolio showcasing expertise in software and web development." />
        <meta property="twitter:image" content="/images/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://your-portfolio-domain.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Structured Data / Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Software Developer",
              "jobTitle": "Senior Software & Web Developer",
              "url": "https://your-portfolio-domain.com/",
              "sameAs": [
                "https://www.linkedin.com/in/software-developer",
                "https://github.com/software-developer",
                "https://twitter.com/software-dev"
              ],
              "knowsAbout": [
                "Web Development",
                "Software Engineering",
                "JavaScript",
                "React",
                "Node.js",
                "TypeScript"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "telephone": "+1-555-123-4567",
              "email": "mailto:contact@your-portfolio-domain.com"
            })
          }}
        />
      </Head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}