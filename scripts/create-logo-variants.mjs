import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const original = readFileSync(join(root, 'public', 'images', 'logo.svg'), 'utf-8')

// Stratégie : retirer cls-1 (fond + reflets), forcer fill-rule="evenodd"
// pour que les sous-paths se comportent comme des trous (et non un cumul
// de fills qui remplit tout).
function buildVariant(fillColor, titleSuffix) {
  let v = original.replace(/<defs>[\s\S]*?<\/defs>\s*/m, '')
  v = v.replace(/<path\s+class="cls-1"[^>]*\/>\s*/g, '')
  v = v.replace(/<polygon\s+class="cls-1"[^>]*\/>\s*/g, '')
  v = v.replace(/<path\s+d="/g, `<path fill="${fillColor}" fill-rule="evenodd" d="`)
  v = v.replace(
    /<title id="logo-title">.*?<\/title>/,
    `<title id="logo-title">Les Mains du Cœur — Logo ${titleSuffix}</title>`
  )
  return v
}

const darkVariant = buildVariant('#2D1B4E', '(transparent)')
const lightVariant = buildVariant('#FFFFFF', '(blanc, transparent)')

writeFileSync(join(root, 'public', 'images', 'logo-dark.svg'), darkVariant)
writeFileSync(join(root, 'public', 'images', 'logo-light.svg'), lightVariant)

console.log('✓ Variantes régénérées avec fill-rule="evenodd"')

// Aperçus
const previews = [
  { svg: darkVariant, bg: { r: 253, g: 242, b: 248, alpha: 1 }, name: '_preview-dark-on-cream.png' },
  { svg: lightVariant, bg: { r: 45, g: 27, b: 78, alpha: 1 }, name: '_preview-light-on-purple.png' },
  { svg: darkVariant, bg: { r: 220, g: 38, b: 38, alpha: 1 }, name: '_preview-dark-on-red.png' },
  { svg: lightVariant, bg: { r: 220, g: 38, b: 38, alpha: 1 }, name: '_preview-light-on-red.png' },
]

for (const { svg, bg, name } of previews) {
  await sharp(Buffer.from(svg), { density: 300 })
    .resize(500, 500, { fit: 'contain', background: bg })
    .png()
    .toFile(join(root, 'public', 'images', name))
}

console.log('✓ Aperçus créés (cream, purple, red)')
