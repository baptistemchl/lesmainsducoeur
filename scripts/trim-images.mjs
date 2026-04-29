import sharp from 'sharp'
import { readdirSync, statSync, copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname, basename } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const imagesDir = join(root, 'public', 'images')
const backupDir = join(root, 'public', 'images', '_originals')

if (!existsSync(backupDir)) mkdirSync(backupDir, { recursive: true })

const targets = readdirSync(imagesDir).filter((f) => {
  const full = join(imagesDir, f)
  if (!statSync(full).isFile()) return false
  const ext = extname(f).toLowerCase()
  return ['.jpg', '.jpeg', '.png'].includes(ext) && f !== 'logo.svg'
})

for (const file of targets) {
  const src = join(imagesDir, file)
  const backup = join(backupDir, file)
  const ext = extname(file).toLowerCase()

  if (!existsSync(backup)) copyFileSync(src, backup)

  const meta = await sharp(backup).metadata()
  const trimmed = await sharp(backup)
    .rotate()
    .trim({ background: '#000000', threshold: 25 })
    .toBuffer({ resolveWithObject: true })

  const beforeSize = `${meta.width}×${meta.height}`
  const afterSize = `${trimmed.info.width}×${trimmed.info.height}`

  if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(trimmed.data).jpeg({ quality: 88, mozjpeg: true }).toFile(src)
  } else {
    await sharp(trimmed.data).png({ compressionLevel: 9 }).toFile(src)
  }

  const reduction = beforeSize !== afterSize ? ` ✂ trimmed` : ' (no trim needed)'
  console.log(`${file}: ${beforeSize} → ${afterSize}${reduction}`)
}

console.log('\n✓ All images processed. Originals saved in /public/images/_originals/')
