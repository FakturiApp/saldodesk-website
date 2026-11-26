// Crops the home page hero picture (public/shots/), and the crops Функции needs, out of the wiki's pictures
// (public/help-img/, taken inside the app on the made-up „Кони Копи ДООЕЛ" by shoot-app.mjs).
// Run again after `npm run shoot`:  node scripts/crop-shots.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const from = (f) => path.join(root, 'public/help-img', f)
const to = (f) => path.join(root, 'public/shots', f)

// top / height in source pixels. The other pages use the wiki's pictures as they are; these
// crops leave out what the site does not sell yet (the Brother tab, the fiscal-devices tab).
const SHOTS = [
  { out: 'pochetna.webp', src: 'general-pochetna.webp', top: 0, height: 1440 },
  { out: 'ddv.webp', src: 'vat-ddv04.webp', top: 480, height: 1300 },
  { out: 'vchitaj.webp', src: 'settings-vchitaj.webp', top: 580, height: 430 },
]

// Each crop in Macedonian, and in English when the English picture has been taken
// (public/help-img/en/ → public/shots/en/).
import { existsSync } from 'node:fs'
for (const lang of ['', 'en']) {
  await mkdir(to(lang), { recursive: true })
  for (const s of SHOTS) {
    const src = from(path.join(lang, s.src))
    if (!existsSync(src)) continue
    const img = sharp(src)
    const { width } = await img.metadata()
    const out = to(path.join(lang, s.out))
    await img
      .extract({ left: 0, top: s.top, width, height: s.height })
      .resize({ width: 1600 })
      .webp({ quality: 82 })
      .toFile(out)
    const m = await sharp(out).metadata()
    console.log(path.join(lang, s.out), `${m.width}x${m.height}`)
  }
}
