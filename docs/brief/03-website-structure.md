# SaldoDesk — Website Structure & Customer Journey (Stage 4 draft)

*Draft 2026-11-16. It builds on `01-application-analysis.md` and `02-marketing-strategy.md`.
Decisions so far:*
- *the product is **hosted in the browser**;*
- *е-Фактура **stays the headline**;*
- *the **core package is paid after a free trial**.*

*Pricing layout is Stage 5. Visual design is Stage 6.*

---

## 1. Sitemap

All pages exist in **mk / sq / en** under `/mk/…`, `/sq/…`, `/en/…`, with Macedonian as the
default. `/` detects the language once, and the visitor's choice is remembered.

| Page | Purpose | At launch? |
|---|---|---|
| **Почетна** `/` | Sell: understand → trust → try | ✅ |
| **е-Фактура** `/e-faktura` | Capture deadline searches; the flow, the dated law timeline, the staged claim (strategy §6) | ✅ |
| **Функции** `/funkcii` | One page with anchors: Документи · Залиха и добивка · Пари и долгови · ДДВ и сметководител · Вработени и дозволи · Додатоци | ✅ |
| **Цени** `/ceni` | Plans, add-ons, what the trial includes, billing, FAQ about money | ✅ |
| **Преминете од Акцент** `/akcent` | Remove the #1 switching objection; what is imported, what is not, "we do it with you" | ✅ |
| **Демо фирма** `/demo` | Opens the live demo company (needs the small app build) | ✅ if built, else "Закажи презентација" |
| **Што е готово** `/status` | Honest list: ready / coming | ✅ |
| **Помош (wiki)** `/pomosh` | The 132 help articles, public, with their screenshots | ✅ **At launch** (owner 2026-11-16: „wiki must be included in the website“) |
| **Industry pages** `/za-servisi`, `/za-iznajmuvanje`, `/za-uvoznici` | Deep niches: service shops, copier rental, importers (landed cost + ПАКОМАК) | Phase 2 |
| **Безбедност и податоци** `/bezbednost` | Where data lives, backups, export, access | When hosting is decided |
| **Контакт** `/kontakt` | A named person, phone/Viber, e-mail, hours | ✅ (details from you) |
| **Legal** `/uslovi`, `/privatnost` (+ cookies if analytics need it) | Terms, privacy | ✅ (lawyer) |
| **Најави се** → `app.…/` · **Пробај бесплатно** → `app.…/signup` | Into the app | ✅ |

**Navigation (header):**
- left: logo;
- middle: Функции ▾ · е-Фактура · Цени · Помош (the wiki);
- right: МК/SQ/EN · „Најави се" (text link) · **„Пробај бесплатно"** (filled emerald button).

On a phone, the menu collapses to ☰ and the CTA button stays visible.

Five menu items, no more. Industry pages hang under Функции ▾.

---

## 2. Homepage: section by section

Order follows **Discovery → Understanding → Interest → Trust → Pricing → Action**. Each row
says what the section must achieve; the copy comes from the strategy.

| # | Section | Job | Content | CTA |
|---|---|---|---|---|
| 1 | **Hero** | Understand in 5 seconds | Headline A + supporting line; under the button: „30 дена бесплатно · Без картичка · На македонски и албански"; **visual: the real Почетна screen** in a browser frame, with one or two floating detail cards (e.g. the partner's е-фактура ✓/✗ chip, a "Доцни 128.844 ден." tile) | **Пробај бесплатно** · Види демо фирма |
| 2 | **е-Фактура band** | Urgency, done calmly | Three steps: Издај → Потпиши со картичка → УЈП враќа ЕУИД; one dated line „според Предлог-законот…"; link to `/e-faktura` | Повеќе за е-Фактура → |
| 3 | **Problem → solution** | "This is about me" | 3–4 pairs, "Денес / Со SaldoDesk": Excel beside the program → one place; profit guessed → profit from real cost; chasing debts by phone → one click; accountant retypes → ДДВ-04 pre-filled | — |
| 4 | **Pillar: Добивка и залиха** | Interest | Screenshot (document with live margin and stock strip — `faktura-izdaj.png` style), 3 bullets | — |
| 5 | **Pillar: Пари и долгови** | Interest | Partner card / money calendar screenshot, 3 bullets | — |
| 6 | **Pillar: Направено за Македонија** | Credibility | Document-family map (four colours), ДДВ-04 thumbnail, mk/sq/en, "Преминете од Акцент" | Преминете од Акцент → |
| 7 | **For the team** | Owner reassurance | Permissions and margins visible only to you, PIN switching on a shared PC, „Изготвил" on every document | — |
| 8 | **Add-ons grid** | "It grows with me" | 6–8 tiles: Увоз/Извоз, Магацини и сериски, Сервис, Изнајмување, Веб-продавница, Отпад (ПАКОМАК), Набавки, Финансии. Each tile: one line + "во пробата" | Види ги цените → |
| 9 | **How it works** | "It's easy to start" | 3 steps that mirror the app's own Почетни чекори: 1) Отворете фирма (2 мин) 2) Внесете или пренесете податоци од Акцент 3) Издадете прва фактура | **Пробај бесплатно** |
| 10 | **Founding customers / trust** | Trust without logos | Founding terms, a real person (photo + name + phone), "built in a business that invoices every day" (if allowed), link to `/status` | Закажи 15 мин. презентација |
| 11 | **Pricing (compact)** | Price visibility | The plan cards from Stage 5 + "сите детали" link | **Пробај бесплатно** |
| 12 | **FAQ (6–8)** | Kill last doubts | Trial end, data safety, Акцент, accountant, е-Фактура readiness, cancel, fiscal/bank (honest), support | — |
| 13 | **Final CTA** | Action | One line + button, nothing else | **Пробај бесплатно 30 дена** |
| 14 | **Footer** | Navigation, legitimacy | Pages, legal, company details, contact, language | — |

The primary CTA appears **five times** (hero, how-it-works, pricing, final, sticky header). It is
never inside a feature block, which keeps the page from feeling pushy.

---

## 3. Customer journey

```
Discovery           Understanding        Interest / Trust          Decision              Trial                 Pay
─────────           ─────────────        ────────────────          ────────              ─────                 ───
Google:             Hero + е-Фактура     Pillars, Акцент page,     Цени, FAQ             Signup (2 min)        Reminder before the end
 „е-фактура          band                 demo company,             „Закажи              → Почетни чекори      → pay (method: open Q)
  програма",                              founding customers,       презентација"         → Акцент import       → module choice
 „програма за                             /status                                         → first invoice
  фактури"
Accountants' referral
Ads (deadline angle)
Акцент users
```

**Channels worth planning for:**
- **Search for the е-Фактура deadline.** The `/e-faktura` page should be the best plain-Macedonian
  explanation online, dated and kept current.
- **Accountants.** One accountant serves many SMBs. A later "за сметководители" page and a referral
  offer could be the cheapest channel there is. The app already has an Accountant permission
  template.
- **Акцент users** directly (the `/akcent` page).

---

## 4. Conversion risks found while planning, and the fixes

| Risk | Why it matters | Fix |
|---|---|---|
| **The signup form asks for no e-mail** (company, ЕДБ, name, username, password only) | We cannot remind a trial user before day 30, send onboarding tips, or recover a lost username — and paid-after-trial depends on that reminder | Add e-mail to signup (app change, later session) |
| **The app is desktop-only; ad traffic is mostly phones** | A visitor on a phone cannot meaningfully try an invoicing program | Mobile visitors get „Испрати ми линк за компјутер" (e-mail me a link for my PC) and „Закажи презентација" as the main actions; the website itself is fully mobile-first |
| **"Start free" lands on an empty company** | An empty program sells nothing | Demo company before signup; in the app, Почетни чекори and the Акцент import do the rest |
| **Trial-end lockout** | Fear of losing access to invoices kills signups | Read-only + export after the trial (strategy §10), said plainly in the FAQ |
| **No way to pay** | A trial with no payment step converts at zero | Payment method decision (open question) |
| **The install-token check** | In production the setup screen can ask for an install token | Verify that open signup never asks for it (code comments suggest the token only guards the first-run path) |

---

## 5. Measuring it (to detail in Stage 7)

Funnel events, counted without personal data:
- visit
- demo opened
- „Пробај бесплатно" clicked
- signup completed
- first invoice issued (in the app)
- paid

A cookie-less analytics tool avoids a cookie banner, which itself costs conversions. The final
choice is for Stage 7.

---

## 6. What I need from you to finish Stages 4–5

1. ~~Pricing unit?~~ **Answered 2026-11-16: per company**, with a number of users included and extra
   users paid on top. The number included per plan is set in Stage 5.
   - **App, later session:** today nothing counts or limits accounts per company, so an "included
     users" limit needs a check where accounts are created.
2. ~~Billing period?~~ **Answered 2026-11-16: both, yearly cheaper** (about two months free).
   - **Website:** a Месечно / Годишно switch on the pricing cards, yearly preselected, with the saving
     shown in денари (not only as %).
3. ~~Trial: everything included or core only?~~ **Answered 2026-11-16: 30 days, everything
   included.** At the end the customer picks the plan and add-ons to keep.
   - **Website:** one promise everywhere — „30 дена бесплатно, со сите модули · Без картичка".
     The add-ons grid (§2, row 8) says „вклучено во пробата". The FAQ explains what happens on
     day 31 (read-only + export until they choose).
   - **App, later session:**
     - a company-wide 30-day trial that turns every built add-on on;
     - the per-module "one trial ever" rule must count this trial, so a module cannot be trialled
       twice;
     - a reminder before the end (which needs the e-mail at signup, §4);
     - read-only + export after day 30;
     - a "choose your plan" step that ends in payment.
4. ~~Payment method?~~ **Answered 2026-11-16: bank transfer against a pro-forma.** The account is
   activated when the money arrives (by hand in the provider console at first). The flow is in
   `04-pricing.md` §5.
