/**
 * Sitemap Builder Utility
 * 
 * This utility helps generate and maintain sitemap.xml for SEO purposes.
 * Update the baseUrl and pages array as your site grows.
 */

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

interface SitemapConfig {
  baseUrl: string
  pages: SitemapUrl[]
}

/**
 * Generate sitemap.xml content
 */
export function generateSitemap(config: SitemapConfig): string {
  const urls = config.pages.map((page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urls}
</urlset>`
}

/**
 * Default sitemap configuration
 * Update this with your actual domain and pages
 */
export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://tuleshgosai.vercel.app',
  pages: [
    {
      loc: 'https://tuleshgosai.vercel.app/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: 'https://tuleshgosai.vercel.app/#home',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 1.0,
    },
    {
      loc: 'https://tuleshgosai.vercel.app/#services',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: 'https://tuleshgosai.vercel.app/#blog',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: 'https://tuleshgosai.vercel.app/#contact',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
  ],
}

/**
 * Generate sitemap with default configuration
 */
export function generateDefaultSitemap(): string {
  return generateSitemap(defaultSitemapConfig)
}
