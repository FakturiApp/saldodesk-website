// Takes the wiki's pictures from INSIDE the app (owner 2026-11-16: „screenshots from within the
// app … PDF-guideline accuracy, with arrows where to click"), on a FICTIONAL company only.
//
// What it reuses: the app's own picture list, `docs/help/shots/*.json` in the app repo — for
// each picture the address, the clicks that bring the screen to the state the article talks
// about, and the one thing to click (`highlight`). The same names the articles reference.
//
// What it adds: it does NOT outline the target in the page. It records the target's box into
// `src/data/shot-targets.json`, and the website draws the ring, the arrow and the label itself
// (crisp at any size, both themes, every language).
//
// Safety, as the app's own script: only localhost; after the login the signed-in company must
// be exactly „Кони Копи ДООЕЛ" (the throwaway picture database `data/website-shots.db` in the
// app repo, set up through the app's own setup door and filled by its demo seeder) — never
// real books. The login is read from that database's login file and never printed.
//
// Usage (the app running: `app-shots-backend` + `app-copy-frontend` in this repo's .claude/launch.json):
//   node scripts/shoot-app.mjs [--only file.png]
//   SHOTS_URL (default http://localhost:5150) · SHOTS_APP (default ../Business_M-main)
//   SHOTS_CHROME (default the Chrome on this PC)
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import sharp from 'sharp'
import { SKIP } from './help-skip.mjs'
import { setAppLang } from './app-lang.mjs'

const root = path.resolve(import.meta.dirname, '..')
const APP = path.resolve(root, process.env.SHOTS_APP ?? '../Business_M-main')
const BASE = process.env.SHOTS_URL ?? 'http://localhost:5160'
const CHROME = process.env.SHOTS_CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const COMPANY = 'Кони Копи ДООЕЛ'
// `--lang en` takes the same pictures with the app in English (owner 2026-11-26), into
// public/help-img/en/ and src/data/shot-targets.en.json.
const LANG = process.argv.includes('--lang') ? process.argv[process.argv.indexOf('--lang') + 1] : 'mk'
if (!['mk', 'en'].includes(LANG)) { console.error('shoot-app — --lang mk | en'); process.exit(1) }
const OUT = path.join(root, 'public', 'help-img', ...(LANG === 'mk' ? [] : [LANG]))
const TARGETS = path.join(root, 'src', 'data', LANG === 'mk' ? 'shot-targets.json' : `shot-targets.${LANG}.json`)
const OVERRIDES = path.join(root, 'scripts', 'shot-overrides.json')

/** The app's own words: Macedonian → English, from its string tables (read only). A selector's
 *  quoted text that is a UI word is swapped; anything else (a partner's name) stays. */
function uiWords() {
  const dir = path.join(APP, 'frontend', 'src', 'i18n')
  const LINE = /^\s*"([^"]+)":\s*("(?:[^"\\]|\\.)*"),?\s*$/
  const read = (f) => new Map(readFileSync(path.join(dir, f), 'utf8').split('\n').map((l) => l.match(LINE)).filter(Boolean).map((m) => [m[1], JSON.parse(m[2])]))
  const mk = read('strings.mk.ts'), en = read('strings.en.ts'), out = new Map()
  for (const [k, v] of mk) if (en.has(k) && !out.has(v.trim())) out.set(v.trim(), en.get(k).trim())
  return out
}
const WORDS = LANG === 'en' ? uiWords() : null
// The products scripts/clean-demo-data.mjs renamed: a step written with the old name finds the new one.
const RENAMED = [
  ['DEMO-PRN-1210', 'DEMO-PRN-2040'], ['Brother HL-1210W', 'Kyocera ECOSYS P2040dn'],
  ['DEMO-LC424BK', 'DEMO-EPS103BK'], ['Мастило Brother LC-424BK', 'Мастило Epson 103 црно'],
]
const renamed = (s) => RENAMED.reduce((acc, [a, b]) => acc.split(a).join(b), s)
const tr = (sel) => {
  if (typeof sel === 'string') sel = renamed(sel)
  if (!WORDS || typeof sel !== 'string') return sel
  const swap = (s) => WORDS.get(s) ?? WORDS.get(s.replace(/[…:.]+$/, '')) ?? s
  return sel
    .replace(/'([^']+)'/g, (_, s) => `'${swap(s)}'`)
    .replace(/"([^"]+)"/g, (_, s) => `"${swap(s)}"`)
    .replace(/(^|>> )text=(.+)$/, (_, pre, s) => `${pre}text=${swap(s)}`)
}
const SCALE = 2 // twice the pixels: the text in a picture stays sharp, like a printed guide

const fail = (m) => { console.error(`shoot-app — ${m}`); process.exit(1) }

const url = new URL(BASE)
if (!['localhost', '127.0.0.1'].includes(url.hostname)) fail(`only localhost, not ${BASE}`)

const loginFile = path.join(APP, 'data', 'website-shots-login.txt')
if (!existsSync(loginFile)) fail('no data/website-shots-login.txt in the app repo — set up the picture database first')
const login = Object.fromEntries(readFileSync(loginFile, 'utf8').trim().split('\n').map((l) => l.split(': ').map((x) => x.trim())))

// The pictures the PUBLISHED articles reference — a skipped article's pictures are not taken.
const helpDir = path.join(APP, 'docs', 'help', 'mk')
const wanted = new Set()
for (const f of readdirSync(helpDir).filter((x) => x.endsWith('.md'))) {
  if (f.slice(0, -3) in SKIP) continue
  for (const m of readFileSync(path.join(helpDir, f), 'utf8').matchAll(/!\[[^\]]*\]\(\.\.\/img\/([^)]+)\)/g)) wanted.add(m[1])
}
const shotsDir = path.join(APP, 'docs', 'help', 'shots')
let shots = readdirSync(shotsDir).filter((f) => f.endsWith('.json')).sort()
  .flatMap((f) => JSON.parse(readFileSync(path.join(shotsDir, f), 'utf8')))
  .filter((s) => wanted.has(s.file))
// The app's list opens some documents by a fixed number (`/dokumenti/12`) that names a different
// document in the picture database. scripts/shot-overrides.json gives such a picture the
// address of a document that fits (kept here, so the app repo is never edited).
const overrides = existsSync(OVERRIDES) ? JSON.parse(readFileSync(OVERRIDES, 'utf8')) : {}
shots = shots.map((s) => ({ ...s, ...(overrides[s.file] ?? {}) }))
const i = process.argv.indexOf('--only')
if (i !== -1) shots = shots.filter((s) => s.file === process.argv[i + 1])
if (!shots.length) fail('no pictures to take')

mkdirSync(OUT, { recursive: true })
const targets = existsSync(TARGETS) ? JSON.parse(readFileSync(TARGETS, 'utf8')) : {}

const require = createRequire(path.join(APP, 'frontend', 'package.json'))
const { chromium } = require('playwright-core')
const browser = await chromium.launch({ executablePath: CHROME, headless: true })
try {
  const context = await browser.newContext({
    viewport: { width: shots[0].width, height: shots[0].height },
    deviceScaleFactor: SCALE, locale: LANG === 'en' ? 'en-GB' : 'mk-MK', timezoneId: 'Europe/Skopje', colorScheme: 'light',
  })
  await context.addInitScript((lang) => {
    try {
      localStorage.setItem('bm:lang', lang)
      for (const k of Object.keys(localStorage)) if (k.startsWith('bm.draft.')) localStorage.removeItem(k)
    } catch {}
  }, LANG)
  // Each page counts its own open requests, so a screen is judged ready by its own traffic.
  const opened = async () => {
    const page = await context.newPage()
    page.setDefaultTimeout(6000) // a button that is not there is skipped quickly
    const open = new Set()
    page.on('request', (r) => open.add(r))
    page.on('requestfinished', (r) => open.delete(r))
    page.on('requestfailed', (r) => open.delete(r))
    page.settle = async () => {
      await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
      const end = Date.now() + 5000
      await page.waitForTimeout(250)
      let quiet = Date.now()
      while (Date.now() < end) {
        if (open.size) quiet = Date.now()
        else if (Date.now() - quiet >= 350) break
        await page.waitForTimeout(80)
      }
      await page.evaluate(() => document.fonts.ready.then(() => true))
    }
    return page
  }

  // Log in like a person, then prove the company is the fictional one. The other pages share
  // the login through the context's cookie.
  const first = await opened()
  await first.goto(`${BASE}/`)
  await first.locator('#user').fill(login.username)
  await first.locator('#pass').fill(login.password)
  await first.locator('form button[type="submit"]').click()
  await first.waitForSelector('header[data-app-chrome]', { timeout: 20000 })
  const me = await first.evaluate(async () => (await fetch('/api/me', { credentials: 'include' })).json())
  if (me?.tenant_name !== COMPANY) fail(`the signed-in company is not „${COMPANY}" — pictures are taken on the fictional company only`)
  const langBefore = await setAppLang(first, LANG)
  await first.reload()
  await first.waitForSelector('header[data-app-chrome]', { timeout: 20000 })

  const save = () => writeFileSync(TARGETS, JSON.stringify(targets, null, 1) + '\n')
  let n = 0
  let next = 0
  let queue = shots
  const failed = []
  const worker = async (page) => {
    while (next < queue.length) {
      const shot = queue[next++]
      try {
        await page.setViewportSize({ width: shot.width, height: shot.height })
        await page.goto(`${BASE}${shot.path}`)
        await page.settle()
        for (const s of shot.clicks) {
          if (typeof s === 'string') await page.locator(tr(s)).first().click()
          else if ('fill' in s) {
            const b = page.locator(tr(s.fill)).first()
            await b.fill('')
            await b.pressSequentially(renamed(s.text), { delay: 25 })
            await page.settle() // a box that searches as you type answers after the last key
          } else await page.locator(tr(s.select)).first().selectOption(s.value)
        }
        await page.settle()
        await page.addStyleTag({ content: '[data-help-corner]{visibility:hidden!important}' })
        let box = null
        if (shot.highlight) {
          box = await page.locator(tr(shot.highlight)).first().evaluate((el) => {
            const r0 = el.getBoundingClientRect()
            const inView = r0.top >= 0 && r0.bottom <= innerHeight && r0.left >= 0 && r0.right <= innerWidth
            if (!inView) el.scrollIntoView({ block: 'center', inline: 'center' })
            const r = el.getBoundingClientRect()
            return { x: r.left / innerWidth, y: r.top / innerHeight, w: r.width / innerWidth, h: r.height / innerHeight }
          })
          await page.waitForTimeout(120)
        }
        const png = await page.screenshot()
        const name = shot.file.replace(/\.(png|jpg)$/, '.webp')
        await sharp(png).webp({ quality: 78 }).toFile(path.join(OUT, name))
        targets[shot.file] = { img: name, width: shot.width, height: shot.height, box }
        save()
        n++
        console.log(`shoot-app — ${name}${box ? '' : ' (no target)'}`)
      } catch (err) {
        failed.push(shot)
        console.error(`shoot-app — SKIPPED ${shot.file}: ${String(err.message).split('\n')[0]}`)
      }
    }
  }
  const pages = [first, await opened(), await opened()]
  await Promise.all(pages.map(worker))
  // A screen the dev server built for the first time can be too slow for the timeout: try every
  // skipped picture once more, one at a time, now that everything is warm.
  if (failed.length) {
    console.log(`shoot-app — trying the ${failed.length} skipped pictures again`)
    queue = failed.splice(0)
    next = 0
    first.setDefaultTimeout(12000)
    await worker(first)
  }
  if (failed.length) console.log(`shoot-app — still skipped: ${failed.map((s) => s.file).join(', ')}`)
  writeFileSync(TARGETS, JSON.stringify(targets, null, 1) + '\n')
  await setAppLang(first, langBefore)
  console.log(`shoot-app — ${n} of ${shots.length} pictures, targets in ${path.relative(root, TARGETS)}`)
} finally {
  await browser.close()
}
