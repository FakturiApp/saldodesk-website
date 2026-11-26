// Puts the picture login's app language back to the company's (after an interrupted English run).
//   node scripts/app-lang-reset.mjs
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { setAppLang } from './app-lang.mjs'

const root = path.resolve(import.meta.dirname, '..')
const APP = path.resolve(root, process.env.SHOTS_APP ?? '../Business_M-main')
const BASE = process.env.SHOTS_URL ?? 'http://localhost:5160'
if (!['localhost', '127.0.0.1'].includes(new URL(BASE).hostname)) throw new Error('only localhost')
const login = Object.fromEntries(readFileSync(path.join(APP, 'data', 'website-shots-login.txt'), 'utf8').trim().split('\n').map((l) => l.split(': ').map((x) => x.trim())))
const require = createRequire(path.join(APP, 'frontend', 'package.json'))
const { chromium } = require('playwright-core')
const browser = await chromium.launch({ executablePath: process.env.SHOTS_CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true })
const page = await browser.newPage()
await page.goto(`${BASE}/`)
await page.locator('#user').fill(login.username)
await page.locator('#pass').fill(login.password)
await page.locator('form button[type="submit"]').click()
await page.waitForSelector('header[data-app-chrome]', { timeout: 20000 })
const me = await page.evaluate(async () => (await fetch('/api/me', { credentials: 'include' })).json())
if (me?.tenant_name !== 'Кони Копи ДООЕЛ') throw new Error('not the fictional company')
const was = await setAppLang(page, undefined)
console.log(`app language reset (was ${was ?? 'the company default'})`)
await browser.close()
