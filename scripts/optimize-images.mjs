import sharp from 'sharp'
import { readdirSync, statSync, unlinkSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname, basename } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'public', 'images')

const MAX_WIDTH = 1600
const WEBP_QUALITY = 82

const targets = readdirSync(imagesDir).filter((f) => {
  const full = join(imagesDir, f)
  if (!statSync(full).isFile()) return false
  const ext = extname(f).toLowerCase()
  return ['.jpg', '.jpeg', '.png'].includes(ext)
})

console.log(`Optimisation de ${targets.length} images vers WebP…\n`)

let totalBefore = 0
let totalAfter = 0
const renames = []

for (const file of targets) {
  const src = join(imagesDir, file)
  const ext = extname(file)
  const stem = basename(file, ext)
  const dst = join(imagesDir, `${stem}.webp`)

  const beforeBytes = statSync(src).size
  totalBefore += beforeBytes

  const meta = await sharp(src).metadata()
  const pipeline = sharp(src).rotate()
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }
  await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(dst)

  const afterBytes = statSync(dst).size
  totalAfter += afterBytes

  if (existsSync(src)) unlinkSync(src)

  renames.push({ from: file, to: `${stem}.webp` })

  const kbBefore = (beforeBytes / 1024).toFixed(0)
  const kbAfter = (afterBytes / 1024).toFixed(0)
  const reduction = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(0)
  console.log(`  ${file}  →  ${stem}.webp   ${kbBefore} KB → ${kbAfter} KB   (-${reduction}%)`)
}

const totalKbBefore = (totalBefore / 1024).toFixed(0)
const totalKbAfter = (totalAfter / 1024).toFixed(0)
const totalReduction = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)

console.log(`\n✓ Total : ${totalKbBefore} KB → ${totalKbAfter} KB  (-${totalReduction}%)`)
console.log('\n📝 Renommages à propager dans le code source :')
for (const r of renames) console.log(`   /images/${r.from}  →  /images/${r.to}`)
