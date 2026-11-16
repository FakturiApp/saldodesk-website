# SaldoDesk — Website Blueprint & Implementation Requirements (Stage 7 draft)

*Draft 2026-11-16. It pulls together Stages 1–6:*
- *`01-application-analysis.md`*
- *`02-marketing-strategy.md`*
- *`03-website-structure.md`*
- *`04-pricing.md`*
- *`05-visual-direction.md`*

*This is the document Stage 8 (implementation) is approved against.*

---

## 1. Decisions locked so far

| Area | Decision |
|---|---|
| Delivery | Hosted in the browser; online sign-up |
| Headline | е-Фактура, with staged wording: „Изградено за" until ЕФ8 + a УЈП test invoice, then „Подготвено за" |
| Trial | 30 days, every module included, no card; read-only + export after it ends |
| Pricing | Per company; plans **Основен / Стандард ⭐ / Про** (2 / 5 / 10 users); add-ons on any plan: Сервис, Изнајмување, Веб-продавница, extra user |
| Billing | Monthly or yearly (yearly ≈ 2 months free); bank transfer against a pro-forma |
| Look | Смарагд: white page, emerald `#0a6e54`, two ledger-dark `#12161f` bands, Source Serif 4 + Inter, real product crops |
| Languages | mk (default), sq, en |

---

## 2. Architecture

```
saldodesk.<tld>          static marketing site (this blueprint)
  /mk/…  /sq/…  /en/…    pre-rendered HTML, CDN
        │  „Пробај бесплатно"  →  app.saldodesk.<tld>/signup?lang=mk
        │  „Најави се"         →  app.saldodesk.<tld>/
        │  „Види демо фирма"   →  demo.saldodesk.<tld>  (nightly-reset demo company)
app.saldodesk.<tld>      the existing SaldoDesk app (FastAPI + React), SIGNUP_MODE=open, Postgres
```

**The site is a separate, static project.** It shares nothing at runtime with the app: no API calls
and no app JavaScript. That is what keeps it fast, safe and deployable on its own.

**Stack (recommended):**

| Need | Choice | Why |
|---|---|---|
| Generator | **Astro** (static output) | HTML with zero JS by default; built-in i18n routing; Markdown content collections, so the 132 help articles in `docs/help/mk/` can become public pages in phase 2 without rewriting |
| Styling | **Tailwind**, with the app's tokens copied into one `tokens.css` | The same class vocabulary the team already uses in the app |
| Interactivity | A few lines of vanilla JS: the month/year switch and the mobile menu | No framework shipped to visitors |
| Fonts | Source Serif 4 + Inter, self-hosted WOFF2, subset to Latin + Cyrillic | Fast, private; no Google request |
| Images | Astro image pipeline → AVIF/WebP + `srcset` | Crops stay sharp and light |
| Analytics | **Cookieless and self-hosted** (Plausible CE or Umami) on our own server | No cookie banner, no visitor data leaves us |
| Hosting | Any static CDN, or the same server as the app behind nginx | Decide with the app's hosting (§6, item 2) |

**Where the code lives** (decision for you, §9): a **separate repository** is recommended. The app's
repo carries a strict gate (`scripts.verify`, its lints, `CLAUDE.md` rules) that is built for an
accounting engine, not a marketing site, and the two deploy on different rhythms. The only shared
piece is the brand tokens and logo, copied once with a note of their source.

---

## 3. Pages and content inventory (launch)

| Page | Content source | Content still needed from you |
|---|---|---|
| Почетна | Strategy §3–§5, structure §2 | Founding-customer terms; whether to name Дигитрон |
| е-Фактура | Analysis §4①, strategy §6 | Nothing (law dates stamped and kept current) |
| Функции | Analysis §4–§5 | Nothing |
| Цени | Pricing §2–§5 | **Real prices; whether you are a VAT payer** |
| Преминете од Акцент | Analysis §4⑥ | OK to quote "2.988 партнери" |
| Демо фирма | — | App work (§6, item 7) |
| Што е готово | Analysis §9 | Kept current at each release |
| Контакт | — | **Name, phone/Viber, e-mail, hours** |
| Услови, Приватност | — | **Lawyer-written texts** |
| Footer | — | **Legal company name, address, ЕДБ** |
| **Помош (wiki)** | The app's own `docs/help/mk/*.md` (132 articles) and `docs/help/img/` | Nothing (see below) |

Phase 2: industry pages for service shops, copier rental and importers.

### Помош — the wiki, at launch (owner 2026-11-16)

- **One source.** The articles stay where they are written and gate-checked: in the app repo
  (`docs/help/mk/`, held to the screens by `help/gate.test.ts`). The website never keeps its own
  copy by hand. `scripts/sync-help.mjs` copies the articles and their pictures in before each
  build. The app repo's path is a setting, so CI can check it out beside the site.
- **Rendering.** An Astro content collection over the frontmatter the articles already have
  (`title`, `topic`, `screens`, `module`, `related`):
  - `[[slug|text]]` links become page links;
  - `related` becomes "Поврзани прашања";
  - `topic` groups the index page.
- **Pictures** are the help screenshots, taken only from the fictional demo database (the app
  repo's rule). They are safe to publish.
- **Plan badge.** An article whose `module` is an add-on shows which plan or add-on includes it
  (the plan → module table from `04-pricing.md` §2), so the wiki also sells.
- **Search.** A static index built at build time (Pagefind), loaded only on the help pages, so
  the rest of the site keeps its JS budget.
- **Languages.** The articles exist in Macedonian only. `/sq/pomosh/` and `/en/pomosh/` show
  them with a one-line note that the text is in Macedonian, until translations exist.
- **Before publishing, one review pass.** Some articles may name things a public reader should not
  see, or that are not ready (§9 of the analysis). The sync can skip an article by name.

---

## 4. Quality requirements

**Performance** (each page, mobile, simulated 4G):
- LCP < 2,0 s
- CLS < 0,05
- total JS < 20 KB
- fonts < 120 KB
- hero image < 150 KB
- Lighthouse ≥ 95 in all four categories

**Accessibility:**
- WCAG 2.2 AA.
- Every pair of colours is AA, as in the app.
- Keyboard-reachable menu and FAQ; visible focus.
- `lang="mk|sq|en"` on every page.
- Alt text in all three languages.
- `prefers-reduced-motion` respected.

**SEO:**
- `hreflang` between the three languages; `sitemap.xml`; canonical URLs.
- Real `<title>` and description per page per language.
- Open Graph images.
- Structured data: `Organization`, plus `SoftwareApplication` with `offers` once prices are final.
- The е-Фактура page is written to rank for the deadline questions businesses actually type.

**Security:**
- A static site with a strict CSP (self only, plus our analytics host).
- No third-party scripts; HSTS.
- Forms post nowhere at launch: contact goes by phone/Viber/e-mail links, so there is no form
  endpoint to abuse.

**Analytics events** (cookieless, no personal data):
- `cta_trial_click`, with section and language
- `demo_open`
- `pricing_toggle_year`
- `contact_click`, by channel
- the funnel continues in the app: signup completed → first invoice → plan chosen → paid

**Mobile:** mobile-first layout. On a phone the secondary actions become „Испрати ми линк за
компјутер" (a `mailto:` prefilled with the site's link) and „Закажи презентација".

---

## 5. Website build plan (Stage 8, once approved)

| Step | Delivers | Done when |
|---|---|---|
| **W0** | Repo, Astro + Tailwind, tokens, fonts (Macedonian italic check passed), header/footer, mk/sq/en routing | A blank page on every route passes Lighthouse ≥ 95 |
| **W1** | Почетна in mk, with placeholder crops | You walk it on desktop and phone |
| **W2** | Цени, е-Фактура, Функции, Акцент, Што е готово, Контакт, legal shells | Every page reachable; CTAs point at the app |
| **W2b** | **Помош (wiki)**: sync script, article pages, topic index, search, plan badges | All 132 articles render with their pictures and working links |
| **W3** | ~~Screenshots re-shot~~ — replaced on 16.11 by drawn mock-ups with invented data (Кони Копи ДООЕЛ). W3 is now: more mock-ups where a page needs one, and their sq/en words | Every product picture is a mock-up |
| **W4** | sq + en texts (Albanian reviewed by a native speaker) | All three languages complete |
| **W5** | SEO, analytics, performance and accessibility pass; staging deploy | §4 numbers met on staging |
| **W6** | Launch, once the gates in §7 are met | — |

One step at a time, each shown to you before the next (the repo's "one thing in flight" habit).

---

## 6. App-side work the website depends on

These belong in the app repo, each in its own session. **None of it is website work**, but the site
cannot sell without it:

| # | Work | Needed for | Launch gate? |
|---|---|---|---|
| 1 | **ЕФ8 signing client** + one invoice accepted by УЈП's test system | „Подготвено за е-Фактура" | **Yes** (or launch with „Изградено за") |
| 2 | **Production hosting**: Postgres, TLS, domain, off-site backups, a restore drill, monitoring | Anything to sell at all | **Yes** |
| 3 | **Sign-up asks for an e-mail**; confirm open sign-up never asks for the install token; **a sign-up address** the site can link to (today sign-up is only a state of the login screen; the site links `app.saldodesk.mk/?signup=1&lang=…`) | Trial reminders, recovery, the main CTA | **Yes** |
| 4 | **Company trial**: 30 days, all modules on; reminder; read-only + export after; grace while payment travels | The paid-after-trial model | **Yes** |
| 5 | **Plans**: plan → modules mapping, gates for the four functions moved to Стандард, users per plan, extra users | Pricing as published | **Yes** |
| 6 | **Choose plan → pro-forma → activation**, invoiced from SaldoDesk's own company | Getting paid | Yes (manual first version is fine) |
| 7 | **Public demo company**, reset nightly | „Види демо фирма" | No (the CTA falls back to „Закажи презентација") |
| 8 | **Your spec updated**: core vs Стандард split (`docs/spec/` is yours) | Consistency | No |

---

## 7. Launch gates (the site goes public when all are ✓)

- [ ] App items 2–6 done and walked by you
- [ ] е-Фактура wording matches reality (item 1 done, or the „Изградено за" wording)
- [ ] Real prices, VAT status and founding terms decided
- [ ] Company details, contact person, terms and privacy texts in place
- [ ] Albanian texts reviewed by a native speaker
- [ ] §4 quality numbers met on staging
- [ ] No claim on the site that `01-application-analysis.md` §9 forbids

---

## 8. What I will not do without you

- invent prices, testimonials, customer counts, company details or legal text;
- publish anything, or point a domain;
- touch the app's code while building the website.

---

## 9. Decisions needed before Stage 8

1. ~~Where the website code lives?~~ **Answered 2026-11-16: a separate repository.**
   - Proposed local folder: `C:\Users\Nikola\Desktop\saldodesk-website`, next to this repo.
   - A GitHub remote is created only when you say so.
   - These planning docs stay here in `docs/website/` and are copied into the new repo at W0 as
     its brief.
2. ~~Domain?~~ **Answered 2026-11-16: `saldodesk.mk`**, so the app will be at `app.saldodesk.mk`
   and the demo at `demo.saldodesk.mk`.
   - The `.mk` registration needs a Macedonian company as registrant; that step is yours.
   - It is worth also holding `saldodesk.com` and redirecting it, so nobody else takes it.
3. **Approval to start W0–W2.** These can begin now with placeholder prices and contact details,
   clearly marked, while the app work in §6 runs separately.
