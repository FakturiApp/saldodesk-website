// Copies the app's help articles (Помош) into the website (brief 06 §3, owner 2026-11-16:
// „wiki must be included in the website"). The articles are WRITTEN in the app repo, where
// its gate holds them to the screens; this script only copies and adapts them — never edit
// src/content/help/ by hand, run this again.
//
// Usage: node scripts/sync-help.mjs [path-to-app-docs/help/mk]
// Run scripts/shoot-app.mjs first: it takes the pictures this script places.
//
// What it changes on the way:
//  - a picture becomes the site's own figure (owner 2026-11-16: „screenshots from within the
//    app … with arrows where to click"): the picture taken on the fictional company by
//    shoot-app.mjs, a ring and a „Кликнете тука" pointer on the thing to click, and the
//    article's own words for the picture as its caption. A picture that was not taken is left
//    out rather than shown broken;
//  - [[slug|text]] links become normal links to the article's page; a link to a skipped
//    article becomes plain text;
//  - an Obsidian callout „> [!important] Важно" becomes a blockquote that starts with its
//    title in bold, drawn as a callout box by the site.
import { readdir, readFile, writeFile, rm, mkdir } from 'node:fs/promises'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { SKIP } from './help-skip.mjs'

const root = path.resolve(import.meta.dirname, '..')
const src = path.resolve(root, process.argv[2] ?? '../Business_M-main/docs/help/mk')
const out = path.join(root, 'src/content/help')
const targetsFile = path.join(root, 'src/data/shot-targets.json')
const TARGETS = existsSync(targetsFile) ? JSON.parse(readFileSync(targetsFile, 'utf8')) : {}

/** A line put on top of an article that stays but is not yet fully true on the hosted version. */
const NOTES = {
  'e-faktura-ujp': 'Испраќањето во УЈП е **во изработка** за верзијата во прелистувач. Што е готово, а што доаѓа — види [Што е готово](../../status/).',
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pct = (v) => `${(v * 100).toFixed(2)}%`

/** One picture as the site's figure, on ONE line (Markdown ends an HTML block at a blank line). */
function figure(file, alt) {
  const t = TARGETS[file]
  if (!t || !existsSync(path.join(root, 'public', 'help-img', t.img))) return ''
  let mark = ''
  if (t.box) {
    const { x, y, w, h } = t.box
    // The pointer sits above the target, or below it when the target is near the top; it
    // leans to the side with more room.
    const below = y < 0.18
    const right = x + w / 2 < 0.5
    const tagStyle = [
      below ? `top:${pct(y + h)}` : `bottom:${pct(1 - y)}`,
      right ? `left:${pct(x + w / 2)}` : `right:${pct(1 - (x + w / 2))}`,
    ].join(';')
    mark = `<span class="shot-ring" style="left:${pct(x)};top:${pct(y)};width:${pct(w)};height:${pct(h)}"></span>`
      + `<span class="shot-tag ${below ? 'is-below' : 'is-above'} ${right ? 'is-right' : 'is-left'}" style="${tagStyle}">Кликнете тука</span>`
  }
  return `<figure class="shot"><span class="shot-frame" style="aspect-ratio:${t.width}/${t.height}">`
    + `<img src="/help-img/${t.img}" alt="${esc(alt)}" width="${t.width}" height="${t.height}" loading="lazy" decoding="async">${mark}</span>`
    + (alt ? `<figcaption>${esc(alt)}</figcaption>` : '') + '</figure>'
}

const files = (await readdir(src)).filter((f) => f.endsWith('.md'))
const slugs = new Set(files.map((f) => f.slice(0, -3)).filter((s) => !(s in SKIP)))

// Owner 2026-11-16: the website names no other program. An article that does is a person's
// call (reword it in the app, or SKIP it here), never a silent replacement — so check them
// all before anything is written.
for (const f of files) {
  if (f.slice(0, -3) in SKIP) continue
  if (/Акцент|Akcent/i.test(await readFile(path.join(src, f), 'utf8'))) {
    throw new Error(`${f} names another program — reword it or add it to SKIP`)
  }
}

await rm(out, { recursive: true, force: true })
await mkdir(out, { recursive: true })

let n = 0
let pictures = 0
let missing = 0
for (const f of files) {
  const slug = f.slice(0, -3)
  if (slug in SKIP) continue
  const text = await readFile(path.join(src, f), 'utf8')
  const end = text.indexOf('\n---', 3)
  const front = text.slice(0, end + 4)
  let body = text.slice(end + 4)

  body = body
    .replace(/^(\s*)!\[([^\]]*)\]\(\.\.\/img\/([^)]+)\)\s*$/gm, (_, indent, alt, file) => {
      const fig = figure(file, alt)
      if (fig) pictures++
      else missing++
      return fig ? `${indent}${fig}` : ''
    })
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, s, label) => {
      const t = label ?? s
      return slugs.has(s) ? `[${t}](../${s}/)` : t
    })
    .replace(/^> \[!(\w+)\]\s*(.*)$/gm, (_, kind, title) => `> **${title || kind}**`)
    .replace(/\n{3,}/g, '\n\n')

  // `related` may name a skipped article: drop it there too.
  const fixedFront = front.replace(/^related: \[(.*)\]$/m, (_, list) =>
    `related: [${list.split(',').map((s) => s.trim()).filter((s) => slugs.has(s)).join(', ')}]`)

  const note = NOTES[slug] ? `\n> **Напомена**\n> ${NOTES[slug]}\n` : ''
  await writeFile(path.join(out, f), `${fixedFront}\n<!-- Copied by scripts/sync-help.mjs from the app repo. Do not edit here. -->\n${note}${body}`)
  n++
}
console.log(`${n} articles copied, ${Object.keys(SKIP).length} skipped, ${pictures} pictures placed, ${missing} not taken — from ${src}`)
