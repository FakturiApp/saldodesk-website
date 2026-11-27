// The phone check (owner 2026-11-27: „no glitches on mobile"): drives a real Chromium at three
// phone sizes over the website and the app and measures every screen — a page wider than the
// phone, text spilling out of a button, a button's words broken over 3+ lines, a tap target a
// finger cannot hit, a field that makes a phone zoom, something left under the bottom bar.
// `sweep.mjs` runs it over every screen; write a one-off check the same way.
//
// Before a run (see sweep.mjs for the commands):
//   · the website's dev server on :4321, and the app's AUDIT copy on :5170/:8160
//     (.claude/launch.json → mobile-audit-backend / mobile-audit-frontend, data/mobile-audit.db —
//     a throwaway copy of data/website-shots.db: the check clicks and saves freely);
//   · the login of a test account in that copy, in Business_M-main/data/mobile-audit-login.txt
//     (`username: …` / `password: …`, the same shape as website-shots-login.txt; data/ is
//     git-ignored, so no password ever reaches the repository).
// Usage from a script in this folder:
//   import { open, login, check, shot, APP, SITE } from './audit-lib.mjs'
//   const { browser, page, problems } = await open('iphone')     // 'small' | 'iphone' | 'large'
//   await login(page)                                               // app only
//   await page.goto(APP + '/dokumenti'); await settle(page)
//   console.log(await check(page, 'documents list'))                // array of problem strings
//   await shot(page, 'docs-list')                                   // writes shots/docs-list.png, returns path
import { createRequire } from 'node:module'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..', '..')
export const APP_DIR = path.resolve(ROOT, process.env.SHOTS_APP ?? '../Business_M-main')
const require = createRequire(path.join(APP_DIR, 'frontend', 'package.json'))
// Chrome as the picture scripts use it (scripts/shoot-app.mjs), else Playwright's own Chromium.
const PW_CHROMIUM = path.join(process.env.LOCALAPPDATA ?? '', 'ms-playwright', 'chromium-1223', 'chrome-win64', 'chrome.exe')
const CHROME = process.env.SHOTS_CHROME
  ?? (existsSync('C:/Program Files/Google/Chrome/Application/chrome.exe') ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : PW_CHROMIUM)
const { chromium } = require('playwright-core')

export const APP = 'http://localhost:5170'   // the audit copy of the app (data/mobile-audit.db)
export const SITE = 'http://localhost:4321'  // the website dev server
export const SHOTS = path.join(import.meta.dirname, 'shots')
mkdirSync(SHOTS, { recursive: true })

export const DEVICES = {
  small: { viewport: { width: 360, height: 740 }, deviceScaleFactor: 2 },   // small Android
  iphone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 },  // iPhone 12–15
  large: { viewport: { width: 430, height: 932 }, deviceScaleFactor: 2 },   // Pro Max
}

export async function open(kind = 'iphone', { theme = 'dark' } = {}) {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true })
  const ctx = await browser.newContext({
    ...DEVICES[kind], isMobile: true, hasTouch: true, colorScheme: theme, locale: 'mk-MK',
    userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36',
  })
  const page = await ctx.newPage()
  const problems = []
  // 401s before the login are expected (the app asks who you are) — not a problem.
  page.on('console', (m) => { if (m.type() === 'error' && !/401 \(Unauthorized\)/.test(m.text())) problems.push(`console error: ${m.text().slice(0, 300)}`) })
  page.on('pageerror', (e) => problems.push(`page error: ${String(e).slice(0, 300)}`))
  page.on('response', (r) => { if (r.status() >= 500) problems.push(`HTTP ${r.status()} ${r.url()}`) })
  return { browser, ctx, page, problems }
}

export async function settle(page, ms = 900) {
  await page.waitForLoadState('networkidle').catch(() => {})
  await page.waitForTimeout(ms)
}

/** The audit copy's test login, from the app's git-ignored data folder. */
function auditLogin() {
  const file = path.join(APP_DIR, 'data', 'mobile-audit-login.txt')
  const txt = readFileSync(file, 'utf8')
  const get = (k) => (txt.match(new RegExp(`^${k}:[ 	]*(.+)$`, 'm')) ?? [])[1]?.trim()
  return { username: get('username'), password: get('password') }
}

/** Logs in to the audit app with the test account (see the top of this file). */
export async function login(page) {
  const who = auditLogin()
  await page.goto(APP + '/')
  await page.waitForSelector('input[type=password], header[data-app-chrome]', { timeout: 30000 })
  if (await page.locator('input[type=password]').count()) {
    await page.locator('input:not([type=password])').first().fill(who.username)
    await page.locator('input[type=password]').fill(who.password)
    await page.locator('button[type=submit]').click()
    await page.waitForSelector('header[data-app-chrome]', { timeout: 30000 })
    await settle(page, 1200)
  }
}

/** Measures the page as it is now and returns readable problem lines. */
export async function check(page, where = '') {
  const found = await page.evaluate(() => {
    const W = window.innerWidth, H = window.innerHeight
    const out = []
    const name = (e) => {
      const t = (e.innerText || e.getAttribute('aria-label') || e.getAttribute('placeholder') || '').trim().replace(/\s+/g, ' ').slice(0, 50)
      return `<${e.tagName.toLowerCase()}${e.id ? '#' + e.id : ''}> "${t}"`
    }
    const visible = (e) => {
      const r = e.getBoundingClientRect(), cs = getComputedStyle(e)
      return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && Number(cs.opacity) > 0.05
    }
    // 1. Sideways scroll of the whole page.
    // On a touch phone a too-wide page WIDENS the layout viewport (innerWidth grows past the
    // screen) — compare with the device's own width, not innerWidth.
    const SW = screen.width
    if (W > SW + 1) out.push(`PAGE WIDER THAN SCREEN: the layout is ${W}px on a ${SW}px phone (bottom bar pushed off)`)
    const docW = document.documentElement.scrollWidth
    if (docW > W + 1) {
      out.push(`PAGE WIDER THAN SCREEN: ${docW}px on a ${W}px screen`)
      const wide = [...document.querySelectorAll('body *')].filter((e) => visible(e) && e.getBoundingClientRect().right > W + 1)
        .filter((e) => !wide_has_parent(e))
      function wide_has_parent(e) { const p = e.parentElement; return p && p !== document.body && p.getBoundingClientRect().right > W + 1 }
      wide.slice(0, 6).forEach((e) => out.push(`  sticks out: ${name(e)} right=${Math.round(e.getBoundingClientRect().right)} class="${String(e.className).slice(0, 80)}"`))
    }
    // 2. Text cut or spilling out of its button / chip / label (not deliberate ellipsis).
    const ctrls = [...document.querySelectorAll('button, a, [role=button], [role=tab], label, summary, select, th, .rounded-full')]
    for (const e of ctrls) {
      if (!visible(e)) continue
      const cs = getComputedStyle(e)
      const r = e.getBoundingClientRect()
      if (r.right > W + 1 && !e.closest('.overflow-x-auto, .bm-swipe, [data-shot-view], .vid-view')) out.push(`OFF SCREEN: ${name(e)} right=${Math.round(r.right)}`)
      const deliberate = cs.textOverflow === 'ellipsis' || e.querySelector('[class*="truncate"]')
      if (!deliberate && e.scrollWidth > e.clientWidth + 2 && cs.overflowX !== 'auto' && cs.overflowX !== 'scroll' && e.clientWidth > 0) out.push(`TEXT SPILLS: ${name(e)} needs ${e.scrollWidth}px has ${e.clientWidth}px`)
      // A short label broken over 3+ lines inside a button reads as a glitch.
      const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.3
      const txt = (e.innerText || '').trim()
      if ((e.tagName === 'BUTTON' || e.getAttribute('role') === 'button') && txt && txt.length < 40 && r.height > lh * 2.6 && !e.querySelector('svg, img')) out.push(`BUTTON TEXT WRAPS ${Math.round(r.height / lh)} LINES: ${name(e)} (${Math.round(r.width)}px wide)`)
    }
    // 3. Tap targets a finger cannot hit (< 32 px in both directions), interactive only.
    const taps = [...document.querySelectorAll('button, a[href], input, select, [role=button], summary')].filter(visible)
    const small = taps.filter((e) => { const r = e.getBoundingClientRect(); return (r.height < 30 && r.width < 44) || r.height < 22 })
      .filter((e) => !(e.tagName === 'INPUT' && ['checkbox', 'radio'].includes(e.type) && e.getBoundingClientRect().width >= 18))
    if (small.length) out.push(`SMALL TAP TARGETS (${small.length}): ` + small.slice(0, 8).map((e) => `${name(e)} ${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`).join(' | '))
    // 4. Inputs under 16px (iOS zooms the page into them).
    const tiny = [...document.querySelectorAll('input:not([type=checkbox]):not([type=radio]):not([type=hidden]), select, textarea')].filter(visible).filter((e) => parseFloat(getComputedStyle(e).fontSize) < 16)
    if (tiny.length) out.push(`INPUTS UNDER 16px (phone zooms in): ${tiny.slice(0, 5).map(name).join(' | ')}`)
    // 5. Fixed/sticky bars covering things: anything clickable that sits under the bottom bar while scrolled fully.
    const bar = document.querySelector('.bm-bottom-nav, [data-mobile-cta]')
    if (bar && visible(bar)) {
      const b = bar.getBoundingClientRect()
      const docH = document.documentElement.scrollHeight
      if (window.scrollY + H >= docH - 2) {
        const hidden = taps.filter((e) => !bar.contains(e)).filter((e) => { const r = e.getBoundingClientRect(); return r.bottom > b.top + 4 && r.top < b.bottom })
        if (hidden.length) out.push(`HIDDEN UNDER BOTTOM BAR at page end: ${hidden.slice(0, 5).map(name).join(' | ')}`)
      }
    }
    // 6. Two clickable things on top of each other (centre point hits another element).
    const overl = []
    for (const e of taps.slice(0, 400)) {
      const r = e.getBoundingClientRect()
      if (r.bottom < 0 || r.top > H || r.right < 0 || r.left > W) continue
      const x = r.left + r.width / 2, y = r.top + r.height / 2
      const hit = document.elementFromPoint(x, y)
      if (hit && !e.contains(hit) && !hit.contains(e) && !hit.closest('[data-testid=dialog-backdrop]')?.contains(e)) {
        const cover = hit.closest('button, a, nav, header, [role=dialog], .bm-bottom-nav, [data-help-corner], [data-mobile-cta]')
        if (cover && !cover.contains(e)) overl.push(`${name(e)} covered by ${name(cover)}`)
      }
    }
    if (overl.length) out.push(`COVERED (${overl.length}): ` + overl.slice(0, 6).join(' | '))
    return out
  })
  return found.map((p) => (where ? `[${where}] ` : '') + p)
}

export async function shot(page, file, { full = false } = {}) {
  const p = path.join(SHOTS, file.replace(/[^a-z0-9._-]/gi, '_') + '.png')
  await page.screenshot({ path: p, fullPage: full })
  return p
}
