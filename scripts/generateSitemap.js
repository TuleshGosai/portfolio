/**
 * Sitemap Generator Script
 * 
 * Run this script to generate/update sitemap.xml:
 * node scripts/generateSitemap.js
 * 
 * Or add to package.json:
 * "scripts": {
 *   "generate:sitemap": "node scripts/generateSitemap.js"
 * }
 */

const fs = require('fs')
const path = require('path')

// Get base URL from environment variable or use default
const baseUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://tuleshgosai.vercel.app'
// Use current date for lastmod
const currentDate = new Date().toISOString().split('T')[0]

const pages = [
  {
    loc: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    loc: `${baseUrl}/#home`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    loc: `${baseUrl}/#services`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    loc: `${baseUrl}/#blog`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    loc: `${baseUrl}/#contact`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7',
  },
]

function generateSitemap() {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`

  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(sitemapPath, sitemap, 'utf8')
  console.log(`✅ Sitemap generated successfully at: ${sitemapPath}`)
  console.log(`📄 Generated ${pages.length} URLs`)
}

// Run if called directly
if (require.main === module) {
  generateSitemap()
}

module.exports = { generateSitemap }
