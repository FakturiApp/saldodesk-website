// Points the English wiki (src/content/help-en/) at the English pictures (public/help-img/en/,
// `npm run shoot -- --lang en`), with the ring and the „Click here" tag placed from the English
// click targets (src/data/shot-targets.en.json). A picture not yet taken in English keeps the
// Macedonian one. Run after the English shoot:  node scripts/help-en-pictures.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const dir = path.join(root, 'src', 'content', 'help-en')
const targetsFile = path.join(root, 'src', 'data', 'shot-targets.en.json')
const T = existsSync(targetsFile) ? JSON.parse(readFileSync(targetsFile, 'utf8')) : {}
const byImg = new Map(Object.values(T).map((t) => [t.img, t]))
const pct = (v) => `${(v * 100).toFixed(2)}%`

function figure(t, alt, caption) {
  let mark = ''
  if (t.box) {
    const { x, y, w, h } = t.box
    const below = y < 0.18
    const right = x + w / 2 < 0.5
    const tagStyle = [below ? `top:${pct(y + h)}` : `bottom:${pct(1 - y)}`, right ? `left:${pct(x + w / 2)}` : `right:${pct(1 - (x + w / 2))}`].join(';')
    mark = `<span class="shot-ring" style="left:${pct(x)};top:${pct(y)};width:${pct(w)};height:${pct(h)}"></span>`
      + `<span class="shot-tag ${below ? 'is-below' : 'is-above'} ${right ? 'is-right' : 'is-left'}" style="${tagStyle}">Click here</span>`
  }
  return `<figure class="shot"><span class="shot-frame" style="aspect-ratio:${t.width}/${t.height}">`
    + `<img src="/help-img/en/${t.img}" alt="${alt}" width="${t.width}" height="${t.height}" loading="lazy" decoding="async">${mark}</span>`
    + (caption ? `<figcaption>${caption}</figcaption>` : '') + '</figure>'
}

let swapped = 0, kept = 0
for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
  const file = path.join(dir, f)
  const text = readFileSync(file, 'utf8')
  const out = text.replace(/<figure class="shot">.*?<\/figure>/g, (fig) => {
    const img = fig.match(/<img src="\/help-img\/(?:en\/)?([^"]+)"/)?.[1]
    const t = img && byImg.get(img)
    if (!t || !existsSync(path.join(root, 'public', 'help-img', 'en', t.img))) { kept++; return fig }
    const alt = fig.match(/ alt="([^"]*)"/)?.[1] ?? ''
    const caption = fig.match(/<figcaption>(.*?)<\/figcaption>/)?.[1] ?? ''
    swapped++
    return figure(t, alt, caption)
  })
  if (out !== text) writeFileSync(file, out)
}
console.log(`help-en-pictures — ${swapped} pictures now English, ${kept} still Macedonian`)
