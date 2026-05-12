import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const today = new Date().toISOString().slice(0, 10)
const baseUrl = 'https://lesmainsducoeur.com'

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8')
console.log(`✓ public/sitemap.xml généré (lastmod=${today})`)
