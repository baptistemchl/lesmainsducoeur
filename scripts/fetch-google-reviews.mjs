import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// --- Lecture .env.local (sans dépendance dotenv) -----------------
function loadEnv() {
  const envPath = join(root, '.env.local')
  if (!existsSync(envPath)) return {}
  const out = {}
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
  return out
}

const env = loadEnv()
const SERPAPI_KEY = env.SERPAPI_KEY || process.env.SERPAPI_KEY
const PLACE_ID = env.GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID

const outPath = join(root, 'src', 'data', 'google-reviews.json')

if (!SERPAPI_KEY || !PLACE_ID) {
  console.warn('⚠ Pas de SERPAPI_KEY ou GOOGLE_PLACE_ID dans .env.local — sync ignorée (le JSON existant est conservé).')
  process.exit(0)
}

const url = new URL('https://serpapi.com/search.json')
url.searchParams.set('engine', 'google_maps_reviews')
url.searchParams.set('place_id', PLACE_ID)
url.searchParams.set('hl', 'fr')
url.searchParams.set('api_key', SERPAPI_KEY)

console.log(`→ Fetch SerpAPI pour place_id=${PLACE_ID}…`)

let payload
try {
  const res = await fetch(url, { headers: { 'User-Agent': 'lesmainsducoeur-build' } })
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)
  payload = await res.json()
} catch (err) {
  console.error(`✗ Échec API SerpAPI : ${err.message}`)
  console.error('  Le JSON existant est conservé. Réessaie plus tard.')
  process.exit(0)
}

if (payload.error) {
  console.error(`✗ Erreur SerpAPI : ${payload.error}`)
  console.error('  Le JSON existant est conservé.')
  process.exit(0)
}

const placeInfo = payload.place_info ?? {}
const reviews = Array.isArray(payload.reviews) ? payload.reviews : []

const writeReviewLink = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`
const profileLink = placeInfo.link
  ?? `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`

const normalized = {
  fetchedAt: new Date().toISOString(),
  place: {
    name: placeInfo.title ?? null,
    rating: typeof placeInfo.rating === 'number' ? placeInfo.rating : null,
    totalReviews: typeof placeInfo.reviews === 'number' ? placeInfo.reviews : reviews.length,
    profileLink,
    writeReviewLink,
  },
  reviews: reviews
    .filter((r) => r.snippet && r.snippet.trim().length > 0)
    .map((r, idx) => ({
      id: r.review_id ?? `g-${idx}`,
      author: r.user?.name ?? 'Anonyme',
      authorPhoto: r.user?.thumbnail ?? null,
      authorLink: r.user?.link ?? null,
      rating: typeof r.rating === 'number' ? r.rating : 5,
      isoDate: r.iso_date ?? null,
      dateLabel: r.date ?? '',
      content: r.snippet,
      service: r.details?.service ?? null,
    })),
}

writeFileSync(outPath, JSON.stringify(normalized, null, 2) + '\n', 'utf8')

const r = normalized.place.rating ?? '—'
const total = normalized.place.totalReviews
const kept = normalized.reviews.length
console.log(`✓ ${outPath}`)
console.log(`  ${r}/5 sur ${total} avis Google · ${kept} avis avec texte conservés`)
