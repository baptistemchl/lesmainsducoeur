// Mise en ligne de dist/ sur o2switch (lesmainsducoeur.com) en FTPS.
// Utilisé par `npm run deploy` (en local) et par la GitHub Action à chaque push.
// Identifiants : FTP_USER, FTP_PASSWORD, FTP_DIR (et FTP_HOST) dans .env.local
// ou dans l'environnement.
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, posix } from 'node:path'
import { Client } from 'basic-ftp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')

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
const get = (key) => env[key] || process.env[key]
const HOST = get('FTP_HOST') || 'orme.o2switch.net'
const USER = get('FTP_USER')
const PASSWORD = get('FTP_PASSWORD')
const DIR = get('FTP_DIR') || '/'

if (!USER || !PASSWORD) {
  console.error('✗ FTP_USER ou FTP_PASSWORD manquant (.env.local ou environnement).')
  process.exit(1)
}
if (!existsSync(join(dist, 'index.html'))) {
  console.error('✗ dist/ est vide : lance `npm run build` avant.')
  process.exit(1)
}

// Chemins relatifs (séparateur /) de tous les fichiers de dist/
function walk(dir, prefix = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name
    return entry.isDirectory() ? walk(join(dir, entry.name), rel) : [rel]
  })
}

// index.html en dernier : il ne pointe vers les nouveaux assets qu'une fois ceux-ci en ligne
const files = walk(dist).sort((a, b) => (a === 'index.html') - (b === 'index.html'))

const client = new Client(30_000)
try {
  await client.access({ host: HOST, user: USER, password: PASSWORD, secure: true })
  console.log(`→ Connecté à ${HOST}, envoi de ${files.length} fichiers dans ${DIR}`)

  let currentDir = null
  for (const rel of files) {
    const remoteDir = posix.join(DIR, posix.dirname(rel))
    if (remoteDir !== currentDir) {
      await client.ensureDir(remoteDir)
      currentDir = remoteDir
    }
    await client.uploadFrom(join(dist, rel), posix.basename(rel))
  }

  // Anciens bundles Vite (noms hachés) devenus inutiles
  const localAssets = new Set(files.filter((f) => f.startsWith('assets/')).map((f) => f.slice(7)))
  const remoteAssets = await client.list(posix.join(DIR, 'assets'))
  const stale = remoteAssets.filter((f) => f.isFile && !localAssets.has(f.name))
  for (const f of stale) await client.remove(posix.join(DIR, 'assets', f.name))

  console.log(`✓ Site en ligne (${files.length} fichiers envoyés, ${stale.length} anciens assets supprimés)`)
} catch (err) {
  console.error(`✗ Échec de la mise en ligne : ${err.message}`)
  process.exitCode = 1
} finally {
  client.close()
}
