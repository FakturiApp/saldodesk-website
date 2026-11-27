// Every screen of the app and the website at the smallest phone (360 px), dark and light, through
// the checks in audit-lib.mjs. Run before a release; anything it prints is worth a look.
//
//   1. the website:  npm run dev                                   (:4321)
//   2. the app's audit copy, from the app repo (once: copy the picture database and add a login):
//        Copy-Item data/website-shots.db data/mobile-audit.db
//        $env:DB_PATH='data/mobile-audit.db'; .venv/Scripts/python.exe -m scripts.make_dev_account --username admin --password <pick one>
//        → write data/mobile-audit-login.txt:   username: admin / password: <the same>
//      then start mobile-audit-backend + mobile-audit-frontend (.claude/launch.json)
//   3. node scripts/phone-audit/sweep.mjs
import { open, login, check, settle, shot, APP, SITE } from './audit-lib.mjs'
const ids = { doc: 102, partner: 3, product: 12, ticket: 1, machine: 1, asset: 1, contract: 1, payment: 1, rec: 1 }
const app = [
  '/', '/partneri', `/partneri/${ids.partner}`, `/partneri/${ids.partner}?tab=card`, `/partneri/${ids.partner}?tab=documents`, `/partneri/${ids.partner}?tab=openItems`, '/partneri/nov', '/partneri/dupli',
  '/proizvodi', '/proizvodi?tab=zalihi', `/proizvodi/${ids.product}`, `/proizvodi/${ids.product}?tab=stock`, '/proizvodi/nov', '/proizvodi/niska-zaliha', '/proizvodi/narachka', '/proizvodi/barania', '/proizvodi/presek', '/proizvodi/modeli', '/proizvodi/etiketi',
  '/dokumenti', '/dokumenti?tab=nabavka', '/dokumenti?tab=knizni', '/dokumenti?tab=vnatreshni', `/dokumenti/${ids.doc}`, `/dokumenti/${ids.doc}/pecati`,
  '/dokumenti/nov', '/dokumenti/nova-priemnica', '/dokumenti/nova-faktura-priemnica', '/dokumenti/nova-faktura-trosok', '/dokumenti/nova-devizna', '/dokumenti/nova-izvozna',
  '/dokumenti/nova-povratnica', '/dokumenti/nova-kompenzacija', '/dokumenti/nova-nivelacija', '/dokumenti/nov-prenos', '/dokumenti/nov-otpis', '/dokumenti/nov-popis', '/dokumenti/novo-trebovanje', '/dokumenti/nov-knizen', '/dokumenti/nov-knizen-primen', '/dokumenti/nova-fiskalna',
  '/dokumenti/plakjanja', '/dokumenti/povtoruvachki', '/dokumenti/povtoruvachki/nova', '/dokumenti/prevoz', '/dokumenti/pari',
  '/izvestai', '/izvestai?view=products', '/servis', '/servis/nov', `/servis/${ids.ticket}`, '/servis/masini', '/servis/ponudi', '/servis/prigovori', '/servis/vo-servis', '/servis/postavki',
  '/iznajmuvanje', '/iznajmuvanje/dogovori/nov', '/iznajmuvanje/masini/nova', `/iznajmuvanje/masini/${ids.asset}`,
  '/otpad', '/prebaraj?q=kyocera', '/profil', '/podesuvanja', '/moduli', '/sporedi', '/pomos',
]
const site = ['/mk/', '/mk/kako-raboti/', '/mk/ceni/', '/mk/kontakt/', '/mk/pomosh/', '/mk/pomosh/avans/', '/en/', '/en/kako-raboti/', '/mk/uslovi/', '/404']
const out = []
for (const theme of ['dark', 'light']) {
  const { browser, page, problems } = await open('small', { theme })
  if (theme === 'light') for (const u of site) { await page.goto(SITE + u); await settle(page, 700); out.push(...(await check(page, 'site' + u)).filter(keep)) }
  await login(page)
  await page.evaluate((th) => { document.documentElement.dataset.theme = th }, theme)
  for (const u of app) {
    try {
      await page.goto(APP + u); await settle(page, 1300)
      await page.evaluate((th) => { document.documentElement.dataset.theme = th }, theme)
      const p = (await check(page, `${theme} ${u}`)).filter(keep)
      out.push(...p)
      if (p.some((x) => /WIDER|SPILLS|WRAPS|OFF SCREEN|UNDER BOTTOM/.test(x))) await shot(page, `lead-sweep-${theme}${u}`)
      // end of page: nothing hidden under the bar
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight)); await page.waitForTimeout(300)
      out.push(...(await check(page, `${theme} ${u} (bottom)`)).filter((x) => /UNDER BOTTOM|WIDER/.test(x)))
    } catch (e) { out.push(`[${theme} ${u}] FAILED TO LOAD: ${String(e).slice(0, 120)}`) }
  }
  out.push(...problems.map((p) => `[${theme}] ${p}`))
  await browser.close()
}
// noise the tool cannot tell apart: the skip link, things scrolled under the sticky header
function keep(x) { return !/Прескокни до содржината|Skip to content|COVERED/.test(x) }
console.log(out.length ? out.join('\n') : 'CLEAN')
