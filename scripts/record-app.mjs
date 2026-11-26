// Records the tasks of „Како работи" inside the app, ONE SHORT VIDEO PER STEP (owner 2026-11-26:
// „click step 2 and the video is about step 2"). Each task is played once, in one go; the
// frames are then cut at the step marks, so step 2's video starts where step 1's ended.
//
// Flows: scripts/flows/<area>.mjs — `{ [taskId]: { prep: [actions], steps: [[actions], …] } }`;
// a task's steps match its steps in src/content/tasks/<area>.ts one for one.
// Actions: { goto: '/path' } · { click: sel } · { type: sel, text } · { select: sel, value }
//          · { hover: sel } · { press: 'Enter' } · { scroll: px } · { pause: ms } · { wait: sel }
//          · { upload: sel, file: 'scripts/flows/files/x.xlsx' } (a file field gets that file)
// The cursor rests BESIDE a hovered thing — to its right, or { side: 'left' }; { on: true } puts it
// on it — and steps aside
// after typing, choosing and clicking ({ click, aside: false } keeps it where it clicked).
// Selectors are written in Macedonian (the app's words); for English the UI words are swapped
// with the app's own string tables. Data (names, codes) stays as it is.
//
// Out: public/rec/<lang>/<task>/<n>.webm + <n>.webp (n = 1…), and src/data/rec.json.
// A soft cursor and click ripple are drawn in the recording browser only. Frames come from
// Chrome's screencast; the encoder is the ffmpeg Playwright installs. The app's code is never
// touched; on Windows use the app copy (scripts/app-copy.mjs, port 5160).
//
// Safety: only localhost; the signed-in company must be exactly „Кони Копи ДООЕЛ"; the login
// comes from the app repo's data/website-shots-login.txt and is never printed. Flows may write
// to the throwaway picture database; restore its clean copy after a full run.
//
// Usage:  node scripts/record-app.mjs [--lang mk|en] [--only a,b] [--area partneri] [--dry]
//   --dry  walks every step without recording and reports which step fails (Macedonian only,
//          it never changes the app's language — safe to run beside other dry runs).
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync, readdirSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'
import { setAppLang } from './app-lang.mjs'

const root = path.resolve(import.meta.dirname, '..')
const APP = path.resolve(root, process.env.SHOTS_APP ?? '../Business_M-main')
const BASE = process.env.SHOTS_URL ?? 'http://localhost:5160'
const CHROME = process.env.SHOTS_CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const COMPANY = 'Кони Копи ДООЕЛ'
const arg = (k, d) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : d)
const DRY = process.argv.includes('--dry')
const LANG = DRY ? 'mk' : arg('--lang', 'mk')
const ONLY = arg('--only', null)?.split(',')
const AREA = arg('--area', null)
const SIZE = { width: 1280, height: 800 }
const FPS = 25
const FFMPEG = process.env.RECORD_FFMPEG ?? path.join(process.env.LOCALAPPDATA ?? '', 'ms-playwright', 'ffmpeg-1011', 'ffmpeg-win64.exe')
const OUT = path.join(root, 'public', 'rec', LANG)
const DATA = path.join(root, 'src', 'data', 'rec.json')
const fail = (m) => { console.error(`record-app — ${m}`); process.exit(1) }

if (!['mk', 'en'].includes(LANG)) fail('--lang mk | en')
if (!DRY && !existsSync(FFMPEG)) fail(`no video encoder at ${FFMPEG} — set RECORD_FFMPEG`)
if (!['localhost', '127.0.0.1'].includes(new URL(BASE).hostname)) fail(`only localhost, not ${BASE}`)
const loginFile = path.join(APP, 'data', 'website-shots-login.txt')
if (!existsSync(loginFile)) fail('no data/website-shots-login.txt in the app repo')
const login = Object.fromEntries(readFileSync(loginFile, 'utf8').trim().split('\n').map((l) => l.split(': ').map((x) => x.trim())))

// The flows, every area file.
const FLOWS = {}
const flowDir = path.join(root, 'scripts', 'flows')
for (const f of readdirSync(flowDir).filter((x) => x.endsWith('.mjs')).sort()) {
  if (AREA && f !== `${AREA}.mjs`) continue
  Object.assign(FLOWS, (await import(pathToFileURL(path.join(flowDir, f)).href)).FLOWS)
}

// The app's own UI words, Macedonian → English (read only), for the English recording.
const LINE = /^\s*"([^"]+)":\s*("(?:[^"\\]|\\.)*"),?\s*$/
const strings = (f) => new Map(readFileSync(path.join(APP, 'frontend', 'src', 'i18n', f), 'utf8').split('\n').map((l) => l.match(LINE)).filter(Boolean).map((m) => [m[1], JSON.parse(m[2])]))
const WORDS = new Map()
if (LANG === 'en') {
  const mk = strings('strings.mk.ts'), en = strings('strings.en.ts')
  for (const [k, v] of mk) if (en.has(k) && !WORDS.has(v.trim())) WORDS.set(v.trim(), en.get(k).trim())
}
const swap = (s) => WORDS.get(s) ?? WORDS.get(s.replace(/[…:.]+$/, '')) ?? s
const tr = (sel) => (LANG === 'mk' ? sel : sel
  .replace(/'([^']+)'/g, (_, s) => `'${swap(s)}'`)
  .replace(/"([^"]+)"/g, (_, s) => `"${swap(s)}"`)
  .replace(/(^|>> )text=(.+)$/, (_, pre, s) => `${pre}text=${swap(s)}`))

// The cursor and the click ripple, in the page (recording browser only).
const CURSOR = () => {
  const make = () => {
    if (document.getElementById('rec-cursor')) return
    const c = document.createElement('div')
    c.id = 'rec-cursor'
    c.style.cssText = 'position:fixed;left:640px;top:400px;width:24px;height:24px;margin:-12px 0 0 -12px;border-radius:50%;background:rgba(63,224,173,.45);border:2px solid #0d1220;box-shadow:0 0 0 2px #fff,0 4px 14px rgba(0,0,0,.25);z-index:2147483647;pointer-events:none;transition:transform .12s'
    document.documentElement.appendChild(c)
    addEventListener('mousemove', (e) => { c.style.left = `${e.clientX}px`; c.style.top = `${e.clientY}px` }, true)
    addEventListener('mousedown', (e) => {
      c.style.transform = 'scale(.7)'
      const r = document.createElement('div')
      r.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;border:3px solid #3fe0ad;z-index:2147483646;pointer-events:none;transition:all .55s ease-out;opacity:1`
      document.documentElement.appendChild(r)
      requestAnimationFrame(() => { r.style.width = r.style.height = '70px'; r.style.margin = '-35px 0 0 -35px'; r.style.opacity = '0' })
      setTimeout(() => r.remove(), 700)
    }, true)
    addEventListener('mouseup', () => { c.style.transform = '' }, true)
  }
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', make)
  else make()
}

/** Encodes frames [from, to) into one WebM at a steady 25 frames a second. */
async function encode(frames, from, to, out) {
  const enc = spawn(FFMPEG, ['-loglevel', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-r', String(FPS), '-i', 'pipe:0',
    '-an', '-c:v', 'libvpx', '-b:v', '1000k', '-crf', '12', '-qmin', '0', '-qmax', '45', '-deadline', 'good', '-cpu-used', '1',
    '-auto-alt-ref', '0', '-pix_fmt', 'yuv420p', '-y', out], { stdio: ['pipe', 'inherit', 'inherit'] })
  const done = new Promise((res, rej) => enc.on('close', (c) => (c === 0 ? res() : rej(new Error(`ffmpeg exited ${c}`)))))
  let f = 0
  for (let t = from; t < to; t += 1 / FPS) {
    while (f + 1 < frames.length && frames[f + 1].ts <= t) f++
    if (!enc.stdin.write(frames[f].buf)) await new Promise((r) => enc.stdin.once('drain', r))
  }
  enc.stdin.end()
  await done
}

const require = createRequire(path.join(APP, 'frontend', 'package.json'))
const { chromium } = require('playwright-core')
// --lang: the browser's own words (a file field's button) follow the recording's language.
const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: [`--lang=${LANG === 'en' ? 'en-GB' : 'mk'}`] })
const common = { viewport: SIZE, deviceScaleFactor: 1, locale: LANG === 'en' ? 'en-GB' : 'mk-MK', timezoneId: 'Europe/Skopje', colorScheme: 'light' }
const clearDrafts = () => { try { for (const k of Object.keys(localStorage)) if (k.startsWith('bm.draft.')) localStorage.removeItem(k) } catch {} }

let langBefore
let langSet = false
let state
let failures = 0
try {
  // Log in once; every task reuses the session.
  const auth = await browser.newContext(common)
  const p = await auth.newPage()
  await p.goto(`${BASE}/`)
  await p.locator('#user').fill(login.username)
  await p.locator('#pass').fill(login.password)
  await p.locator('form button[type="submit"]').click()
  await p.waitForSelector('header[data-app-chrome]', { timeout: 30000 })
  const me = await p.evaluate(async () => (await fetch('/api/me', { credentials: 'include' })).json())
  if (me?.tenant_name !== COMPANY) fail(`the signed-in company is not „${COMPANY}" — recordings are made on the fictional company only`)
  if (!DRY) { langBefore = await setAppLang(p, LANG); langSet = true }
  state = await auth.storageState()
  await auth.close()

  const data = existsSync(DATA) ? JSON.parse(readFileSync(DATA, 'utf8')) : {}
  for (const [name, flow] of Object.entries(FLOWS)) {
    if (ONLY && !ONLY.includes(name)) continue
    const ctx = await browser.newContext({ ...common, storageState: state })
    await ctx.addInitScript(clearDrafts)
    if (!DRY) await ctx.addInitScript(CURSOR)
    const page = await ctx.newPage()
    page.setDefaultTimeout(12000)
    const settle = async () => {
      await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {})
      await page.waitForTimeout(250)
    }
    // The cursor goes to a thing to click it; to POINT at a thing (hover) it rests just beside
    // it, and after typing, choosing or clicking it steps aside, so the value or label the step
    // is about is never hidden under it (owner review 2026-11-26).
    let last = null
    const point = async (sel, beside = false) => {
      const el = page.locator(tr(sel)).first()
      await el.waitFor({ state: 'visible' })
      await el.scrollIntoViewIfNeeded()
      const b = await el.boundingBox()
      last = b
      let x = b.x + b.width / 2, y = b.y + b.height / 2
      if (beside) {
        const right = beside !== 'left' && b.x + b.width + 16 < SIZE.width - 14
        x = right ? b.x + b.width + 16 : Math.max(14, b.x - 16)
        y = b.y + b.height * 0.65
      }
      await page.mouse.move(x, y, { steps: DRY ? 2 : 26 })
      await page.waitForTimeout(DRY ? 20 : 200)
      return el
    }
    const stepAside = async () => {
      if (DRY || !last) return
      const x = last.x + last.width + 22 < SIZE.width - 10 ? last.x + last.width + 22 : Math.max(10, last.x - 22)
      await page.mouse.move(x, Math.min(last.y + last.height + 14, SIZE.height - 10), { steps: 10 })
    }
    // A list that re-renders under the pointer (search suggestions) can replace the element
    // between finding and clicking it: try such a step again.
    const act = async (s, tries = 3) => {
      try { await act1(s) } catch (err) {
        if (tries > 1 && /not attached|detached|intercepts pointer/i.test(String(err.message))) {
          await page.waitForTimeout(300)
          return act(s, tries - 1)
        }
        throw err
      }
    }
    const act1 = async (s) => {
      if (s.goto) { await page.goto(`${BASE}${s.goto}`); await settle() }
      else if (s.click) {
        await point(s.click); await page.mouse.down(); await page.waitForTimeout(80); await page.mouse.up(); await settle()
        if (s.aside !== false) await stepAside()
      }
      else if (s.hover) await point(s.hover, s.on === true ? false : (s.side === 'left' ? 'left' : true))
      else if (s.type) {
        const box = await point(s.type)
        await page.mouse.down(); await page.mouse.up()
        await box.fill('')
        await box.pressSequentially(s.text, { delay: DRY ? 5 : 80 })
        await settle()
        await stepAside()
      } else if (s.select) { await point(s.select); await page.locator(tr(s.select)).first().selectOption(s.value); await settle(); await stepAside() }
      else if (s.press) { await page.keyboard.press(s.press); await settle() }
      else if (s.upload) { await point(s.upload, true); await page.locator(tr(s.upload)).first().setInputFiles(path.resolve(root, s.file)); await settle() }
      else if (s.scroll) { await page.mouse.wheel(0, s.scroll); await page.waitForTimeout(450) }
      else if (s.pause) await page.waitForTimeout(DRY ? Math.min(s.pause, 100) : s.pause)
      else if (s.wait) await page.locator(tr(s.wait)).first().waitFor({ state: 'visible' })
    }

    const frames = []
    let cdp = null
    const marks = []
    let where = 'prep'
    try {
      for (const s of flow.prep ?? []) await act(s)
      // A saved-note from the preparation must be gone before step 1 is filmed.
      if (!DRY && (flow.prep ?? []).some((s) => !s.goto)) await page.waitForTimeout(3200)
      await page.mouse.move(SIZE.width / 2, SIZE.height / 2)
      if (!DRY) {
        cdp = await ctx.newCDPSession(page)
        cdp.on('Page.screencastFrame', (f) => {
          frames.push({ ts: f.metadata.timestamp, buf: Buffer.from(f.data, 'base64') })
          cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {})
        })
        await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: SIZE.width, maxHeight: SIZE.height, everyNthFrame: 1 })
        await page.waitForTimeout(500)
      }
      for (const [i, step] of flow.steps.entries()) {
        where = `step ${i + 1}`
        marks.push(Date.now() / 1000)
        if (!DRY) await page.waitForTimeout(350)
        for (const s of step) { where = `step ${i + 1}: ${JSON.stringify(s)}`; await act(s) }
        if (!DRY) await page.waitForTimeout(900) // hold the result a moment
      }
      marks.push(Date.now() / 1000)
    } catch (err) {
      failures++
      console.error(`record-app — ${name}: FAILED at ${where} — ${String(err.message).split(String.fromCharCode(10))[0]}`)
      await page.screenshot({ path: path.join(root, `record-${name}-failed.png`) }).catch(() => {})
      if (cdp) await cdp.send('Page.stopScreencast').catch(() => {})
      await ctx.close()
      continue
    }
    if (DRY) { console.log(`record-app — ${name}: ${flow.steps.length} steps OK`); await ctx.close(); continue }
    await cdp.send('Page.stopScreencast').catch(() => {})
    await ctx.close()
    if (!frames.length) { failures++; console.error(`record-app — ${name}: Chrome sent no frames`); continue }

    // Cut: step n is the frames from its mark to the next one.
    const dir = path.join(OUT, name)
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    const steps = []
    for (let i = 0; i < flow.steps.length; i++) {
      const from = Math.max(marks[i], frames[0].ts), to = marks[i + 1]
      const first = frames.filter((f) => f.ts <= from).at(-1) ?? frames[0]
      await sharp(first.buf).webp({ quality: 78 }).toFile(path.join(dir, `${i + 1}.webp`))
      await encode(frames, from, to, path.join(dir, `${i + 1}.webm`))
      steps.push(Number((to - from).toFixed(2)))
    }
    data[name] = { ...(data[name] ?? {}), [LANG]: { steps } }
    writeFileSync(DATA, `${JSON.stringify(data, null, 1)}\n`)
    console.log(`record-app — ${LANG}/${name}: ${steps.length} step videos (${steps.join('s, ')}s)`)
  }
} finally {
  if (langSet && state) {
    const back = await browser.newContext({ ...common, storageState: state })
    const bp = await back.newPage()
    await bp.goto(`${BASE}/`).catch(() => {})
    await setAppLang(bp, langBefore).catch(() => {})
    await back.close()
  }
  await browser.close()
}
if (failures) { console.error(`record-app — ${failures} task(s) failed`); process.exit(2) }
