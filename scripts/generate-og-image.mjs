import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const svg = readFileSync(join(root, 'public', 'og-image.svg'))

await sharp(svg, { density: 300 })
  .resize(1200, 630)
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(join(root, 'public', 'og-image.png'))

console.log('✓ og-image.png generated')
