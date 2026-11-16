# SaldoDesk — Application Analysis (Website project, Stage 1–2)

*Prepared 2026-11-16 from the repository itself: `docs/spec/*` (the owner's spec), `backend/module_catalog.py`,
`backend/config.py`, `docs/STATUS.md`, `docs/ACCEPTANCE.md`, `docs/OPEN_QUESTIONS.md`, `INSTALL.md`,
`docs/ops/*`, the theme files and the 157 help screenshots. Nothing here is invented. Where the
code and the docs disagree, or something is unproven, it is marked.*

---

## 0. The short version

SaldoDesk is a **Macedonian-first business management (ERP) application for small and medium
businesses**. It covers invoicing and every trade document, stock with real cost and profit,
partners and who owes whom, VAT books (ДДВ) and **е-Фактура to УЈП**, in Macedonian, Albanian
and English. Paid add-ons cover warehouses, import/export, service workshops, copier rentals,
fiscal printers, WooCommerce sync and packaging-waste reporting.

**It is built to an unusual depth.** About 4,500 commits since 2026-07-09, around 2,000 backend
stock tests and about 2,000 frontend tests. The spec reads like accounting law rather than a
feature wish-list.

**It is not yet proven in the market.**
- No paying customer is documented. The only real use is the owner's own circle (Дигитрон).
- e-Faktura has never been sent to УЈП, not even to the test system.
- The fiscal printer has never been tested on real hardware.
- There is **no billing or checkout in the code**.

The website strategy has to be built around both facts.

---

## 1. Product overview

| | |
|---|---|
| **Name** | **SaldoDesk** (a fixed proper noun, never translated — `app.name`) |
| **What it is** | Business management for Macedonian SMEs. It covers trade documents, stock, money, VAT and e-invoicing in one program. |
| **Stack** | FastAPI + React. It runs on SQLite (one PC) or Postgres (server). |
| **Languages** | Macedonian (default), Albanian and English. The company has a language for paper, and each person chooses their own language. |
| **Delivery today** | A **Windows installer** (`SaldoDesk-Setup.exe`) that runs **fully offline** on one PC, with daily automatic backups and a backup before every update. Hosting many companies in a browser (`SIGNUP_MODE=open`) is supported in code, but **no hosted deployment exists**. |
| **Commercial model in code** | **Core package (always on) + 10 paid add-ons**, each with a **30-day free trial, no card, once per module**. There are no plans, prices or payment handling anywhere. A provider console grants modules by hand. |
| **Maturity** | Everything in the catalogue is built and most of it is test-verified. About 14 items are owner-*accepted*; walkthroughs D (Service), E (Rentals) and F (Settings/printing) are still owed. **No add-on is owner-accepted yet.** |

---

## 2. Target audience

The spec says it is for Macedonian small businesses. The spec notes that "almost every MK SMB has an
external сметководител" and that business is calendar-year. Albanian is there because it "sells in
Macedonia".

**Primary segments (ranked by fit with what is built):**

1. **Trading companies: wholesale, retail, distribution.** They issue invoices, delivery notes and
   quotes daily, keep stock, and chase debt. This is the core of the product and its deepest part.
2. **Importers.** Девизна фактура with landed cost spread from customs, excise and transport, at the
   average payment rate. The monthly packaging report to ПАКОМАК is a *legal duty* for importers.
3. **Service and repair shops**, in the workshop and on site. Tickets, legal holding deadlines,
   approvals, complaints, QR stickers.
4. **Office-equipment companies (copier/printer rental, MPS).** Meter billing, SNMP monitoring,
   counters by e-mail. This is the owner's own business; very deep, very niche.
5. **Shops with a WooCommerce store.** Price and free stock pushed to the web automatically.
6. **Shops with a cash register** (fiscal printer). Built, but unproven on hardware (see §9).

**Who decides and who uses it:**
- The **owner/manager** buys it. They care about money, debt, risk and the e-Faktura deadline.
- **Staff** (seller, cashier, warehouse, technician) use it every day. They care about speed and
  not making mistakes.
- The **external accountant** influences the decision. They care about VAT books, ДДВ-04 and
  exports. A permission template "Сметководител" exists for them.

---

## 3. Customer problems it solves

| Problem the customer has | How SaldoDesk answers it (source) |
|---|---|
| **e-Faktura becomes mandatory and the current program may not be ready.** Per the *draft* law (ЕНЕР 123632): voluntary from 01.10.2026; mandatory for VAT payers 01.04.2027, other legal entities 01.07.2027, budget users 01.10.2027, everyone 01.01.2028. **Not adopted as of 09.10.2026.** | Sign with the card at the PC and send to УЈП; ЕУИД and QR on the paper; status refreshed automatically; corrections as Сторно/КО/КЗ (`Documents.md`, `PLAN_EFAKTURA.md`) |
| "What does this client owe us, and what do we owe them?" means opening five screens | Partner card: open items both ways, Финансиска картица, average days late, penalty interest; Календар на пари 8 weeks ahead |
| Profit is wrong because supplier prices arrive after the goods are sold | Late supplier prices correct cost *and* the profit on units already sold (`Product fields.md`, RULE 3 "Decision 1") |
| VAT books are rebuilt by hand for the accountant every month | Output and input VAT books plus a pre-filled ДДВ-04; filed periods lock; a "За сметководителот" list |
| Switching program means retyping everything | Import from **Акцент**: partners, products, opening stock with serials and batches. Proven on the owner's real export: 2,988 partners → 2,978 imported. |
| Staff can see costs and margins they shouldn't | A permission per account; costs and margins are a separate right; quick switching on a shared PC by PIN |
| Mistakes: selling below cost, at 0, over the credit limit, without stock | Warnings while typing (Цена 0 / Под набавната), credit-limit warning (a block with Финансии), a "Нема доволно на залиха" window that names who has stock and offers a transfer |
| Dependence on internet or a cloud vendor | The PC installer runs fully offline; data stays on the company's computer, backed up daily |

---

## 4. Core features — ranked by marketing importance

For each feature: **what it does → why the customer cares → how to say it on the website.**

### ① е-Фактура (УЈП) — *the headline hook, with a caveat*
- **Does:** Издај → "Потпиши и испрати" with the smart card and PIN at the PC → УЈП returns the
  ЕУИД. The paper carries the ЕУИД and a QR code. Status is refreshed automatically and the signed
  original is kept. A rejected invoice becomes Сторно + new invoice. There is an outage mode. Fields
  УЈП needs can never be hidden, and each partner shows "може е-фактура ✓/✗" with exactly what is
  missing.
- **Why care:** this is a deadline every VAT payer faces. Fear of the deadline sells.
- **Website:** "Ready for е-Фактура before it becomes mandatory." Show the ✓/✗ readiness check per
  partner; it is concrete and unusual.
- **⚠ Caveat:** never sent to УЈП, not even to its test environment; no production host published by
  УЈП; incoming invoices (ЕФ9) not built. **We cannot say "certified", "works with УЈП" or
  "tested with УЈП" today.** See §9.

### ② Every Macedonian trade document, done correctly
- **Does:** about 25 document types: Фактура, Испратница, Понуда, Профактура, Авансна, Сторно,
  КО/КЗ, Повратница, Приемница, ФПР, ВФТ, Компензација (printed for both sides to sign), Пренос,
  Попис, Нивелација, Требовање, Отпис, Повторувачка фактура, plus the Патен налог and Товарен лист
  printed on plain A4. Numbers are given at issue, so drafts never leave gaps. Every change is in
  the history. "Нов документ од избраните" builds a new document from ticked ones.
- **Why care:** they won't need a second program or Excel for the odd document.
- **Website:** one visual "document family" map (the app's four family colours: sales, purchases,
  corrections, internal), not a list of 25 names.

### ③ Who owes whom: payments, debt, advances
- **Does:** payments from a statement (Нов извод), paid / partly paid / unpaid, advances and refunds,
  Компензација, ageing, Календар на пари, penalty interest by NBRSM periods, overdue reminders by
  e-mail (with Финансии).
- **Why care:** cash is what keeps a small business alive.
- **Website:** "Know who owes you, how much and since when — in one click." Use the screenshot of the
  Почетна tiles (Побарувања / Доцни).

### ④ Stock that knows its real value and profit
- **Does:** average or FIFO cost; late prices correct profit; reservations for a customer; selling
  continues during a count (Попис); month-end snapshots; labels, barcodes, warranty cards; a
  "not enough stock" window with alternatives.
- **Why care:** real margins, fewer stock surprises.
- **Website:** "Your profit is calculated on what goods really cost — even when the supplier's invoice
  comes a month later." A specific, believable difference from simpler programs.

### ⑤ VAT books and ДДВ-04 for the accountant
- **Does:** output and input VAT books by month or quarter; ДДВ-04 fields 01–32 pre-filled and
  printed in УЈП's layout; Excel; filed periods lock; "За сметководителот".
- **Why care:** the accountant recommends it, and the owner pays the accountant less time.
- **Website:** its own short section, "Your accountant will like it", ideally with a quote from a
  real accountant.
- **⚠** e-Даноци XML is not built (УЈП has not defined it).

### ⑥ Move from Акцент without retyping
- **Does:** reads Акцент exports (partners, products, opening stock including serials and batches),
  with column mapping and a preview before anything is written. "Почни одново" wipes test data and
  keeps the setup.
- **Why care:** switching cost is the #1 reason people stay with an old program.
- **Website:** a strong objection-killer. Name Акцент explicitly. Use the proven number only with the
  owner's OK.
- **⚠** Old *documents* cannot be imported yet (I4 is planned only).

### ⑦ Почетна: the business at a glance
- **Does:** customisable tiles (turnover today and this month, receivables and overdue, stock value,
  service, recent documents, money calendar); a "За внимание" list of everything late or wrong;
  quick buttons; "Почетни чекори" onboarding that ticks itself.
- **Website:** the **hero visual**. It is the most "product-looking" screen and is already shot on
  fictional data (`docs/help/img/general-pochetna.png`).

### ⑧ Built for a shared counter PC: people and permissions
- **Does:** a permission per account, with templates (Owner, Accountant, Cashier/Seller, Employee); a
  separate right to see costs; quick user switching by password or PIN; auto-lock; "Изготвил" on
  every document; a recovery code; logging out other devices; the last administrator can never be
  removed.
- **Website:** "Every employee sees only what they should." Small businesses worry about this a lot.

### ⑨ Search and Спореди (compare)
- Live search across everything, typed in **Cyrillic or Latin** (an "Stip" search finds "Штип").
  Спореди puts 2–5 products, partners, documents or warehouses side by side "на датум", and hides
  values the account may not see.
- **Website:** a short animated demo; it is an impressive moment, not a headline.

### ⑩ Your look on paper, your fields on screen
- A print editor with live true-size A4 preview (logo, accent colour, arrangement, per-document
  overrides). Custom fields (6 types, in 3 languages, required, printed, conditional). Rename or hide
  the app's own fields and arrange the forms.
- **Website:** "Your invoices look like your company, not like our software."

### ⑪ Three languages
- mk / sq / en, per person, with the company's paper language set separately.
- **Website:** the site itself must exist in **mk and sq** (and en). This is a real differentiator for
  Albanian-speaking businesses.
- **⚠** The help articles are Macedonian only so far (132 articles).

### ⑫ Offline, on your own PC, with backups
- Fully offline install, data in the company's own folder, daily backups (14 kept), a verified backup
  before every update.
- **Website:** "Works without internet. Your data stays with you." That is a trust argument. **But**
  it depends on the delivery-model decision (§11, Q1).

---

## 5. Secondary features — the paid add-ons

| Add-on (code) | What it unlocks | Who buys | Marketing weight | Status |
|---|---|---|---|---|
| **Увоз / Извоз** (`import_export`) | Девизна фактура, import receipt at landed cost, export invoice in any currency | Importers, exporters | **High** — landed cost is a real pain | Verified |
| **Магацинско работење** (`warehouse`) | Many warehouses, serial numbers, batches with expiry, transfer requests, tags, image, "compatible with" | Distributors, multi-location shops | **High** | Verified; parts accepted 15.08 |
| **Финансии / Банкарство** (`finance`) | Blocks issuing over the credit limit, supplier limits, overdue reminders by e-mail | Anyone with credit sales | Medium | Verified. ⚠ The name promises banking, but bank-statement import is *planned only* — rename or don't over-promise. |
| **Набавки** (`purchasing`) | Reorder list per supplier, minimum stock, reorder quantity | Shops, distributors | Medium | Verified |
| **Сервис** (`service`) | Repair tickets (workshop and on-site), machine history, diagnostic fee and deposit, approvals, offer → invoice/fiscal, complaints with legal deadlines, QR stickers, technician board | Repair shops | **High within its niche** | Verified; walkthrough D owed; SMS/Viber notifications parked |
| **Изнајмување** (`rentals`) | Copier/printer rental contracts, meter billing (flat, tiered, minimum), billing never twice and never lost, **SNMP agent** for counters and toner, counters from Sharp/Brother e-mails, EUR contracts | MPS / office-equipment firms | Very deep, very niche | Verified; walkthrough E owed |
| **Веб-страница** (`webpage`) | One-way push to WooCommerce: name, code, price, **free** stock, categories, brands; compare-first, nothing sent before Примени; nightly self-heal | Shops with WooCommerce | Medium–high (a visual, easy-to-grasp benefit) | Verified; real-store check owed; web orders back into the app **not built** |
| **Управување со отпад** (`waste`) | Packaging types, pallets, the **monthly ПАКОМАК report** from import invoices | Every importer (a legal monthly duty) | **Surprisingly high**: few programs do it | Steps 1–2 verified; e-waste (ОЕЕО) not built |
| **Фискални уреди** (`fiscal`) | Fiscal receipt, storno, daily report, cash/card split | Retail counters | High *demand*, **must not be marketed yet** | Only the Акцент protocol; **never touched a real printer** |
| **Brother извештај** (`brother`) | Brother's monthly sell-out Excel, in Brother's own layout | Brother partners only | Very niche — sell one-to-one, not on the site | Verified |

---

## 6. Unique selling propositions (USPs)

Only what the repo supports:

1. **Made for Macedonian law and practice, in depth.** ДДВ books, ДДВ-04, УЈП type codes, Компензација,
   Патен налог on plain A4, ПАКОМАК report, penalty interest by NBRSM periods, legal service
   deadlines. A foreign or generic product will not have these.
2. **Correct profit, not estimated profit.** Late supplier prices flow back into cost of sales;
   landed cost for imports.
3. **Built-in е-Фактура flow** (with the caveat in §9), including a per-partner ✓/✗ readiness check.
4. **Three languages including Albanian**, per person.
5. **Pay only for what your business does**: a core package plus add-ons, each tried free for 30 days
   with the full feature set and no card.
6. **One program instead of three** for service shops and rental companies. Service and Rentals
   replace the owner's own separate apps.
7. **Offline / own data** (if the PC install remains the product).

---

## 7. Competitive advantages — and a gap in this analysis

The repo names exactly **one** competitor: **Акцент**, the program the owner is migrating from and
which the importer reads. I found nothing on Pantheon, Минимакс or other local or international
products, and **I have not done any market research**. A "why us" section needs to know which
programs we actually lose deals to (see Q6).

Advantages we can stand behind against an older desktop program like Акцент:
- a modern, fast interface with dark mode, live search in Cyrillic and Latin, and a dashboard;
- built for е-Фактура from the start, not added on later;
- correct late-cost profit, reservations, real-time warnings;
- permissions per employee and quick switching;
- a migration path from Акцент.

---

## 8. Existing visual identity — what carries over to the website

Source: `frontend/src/theme/tokens.css`, `tailwind.config.js`, `public/favicon.svg`, `DESIGN_FRONTEND.md`.

| Element | In the app | Use on the website |
|---|---|---|
| **Logo** | Isometric blue "ledger slabs" + three green rising bars + a rising arrow, on a dark tile `#12161f`. Wordmark "**Saldo**Desk" (bold + regular). | Keep exactly. The dark tile suggests a dark hero section option. |
| **Brand accent** | Emerald `#0a6e54` (light) / `#2fd0a0` (dark). "Money" colour; price is always green. | Primary CTA and money highlights |
| **Create accent** | Blue `#1e63a8` ("+ Ново" — making something new) | Secondary accent, links, illustrations |
| **Canvas / surfaces** | Cool grey `#eaecf1`, white cards, hairlines `#e2e6ec`, radius 12 px, soft shadows | Section backgrounds, cards, pricing tables |
| **Document family hues** | Sales emerald · Purchases blue · Corrections amber `#8a5807` · Internal grey | A ready-made system for the "documents" section |
| **Status colours** | Red = stop, yellow = careful, blue = worth knowing; all WCAG AA in both themes | Inline UI callouts in feature visuals |
| **Type** | Body Segoe UI / system; **page titles in serif (Georgia)**; `tabular-nums` for figures | Keep the serif title and sans body pairing — it is distinctive ("a bank with style"). Pick a webfont with full Cyrillic (and Albanian ë/ç) for consistency across Mac and phone. Segoe is Windows-only. |
| **Atmosphere** | "Смарагд" — calm, precise, a bank with style; colour lives in the accents, data stays legible | The website should feel like a trustworthy financial tool, not a playful startup |
| **Screenshots** | **157 help screenshots on fictional data** ("Демо Фирма ДООЕЛ") from `data/help-shots.db`, by rule never real data | Ready-made, legally safe product visuals. They need re-shooting at higher resolution and in sq/en for the site. |

Note: `DESIGN_FRONTEND.md` §3 still describes "warm ivory" tokens, but the live palette was
re-skinned to the cool, vibrant version on 2026-07-24. **The website follows the live tokens.**

---

## 9. Limitations — what the website must NOT claim today

| Claim to avoid | Why (source) |
|---|---|
| "Certified / tested / working with УЈП е-Фактура" | Never sent to УЈП's test or production system; only a stub (`OPEN_QUESTIONS.md` §2); no production host published |
| "е-Фактура mandatory from 01.04.2027" as fact | Draft law, not adopted as of 09.10.2026. Phrase it as "per the draft law" and keep it updated |
| "Receive е-Фактури from suppliers" | Inbound accept/reject (ЕФ9) planned only |
| "Works with your fiscal printer" | One protocol (Акцент), never tested on hardware |
| "Bank statement import / banking" | Planned only, despite the module's name |
| "Import your whole history" | Only partners, products and opening stock; no old documents |
| "Mobile app / works on your phone" | Desktop only; phone layout is "a later plan" |
| "Cloud / access from anywhere" | No hosted deployment exists yet |
| "Used by N companies", testimonials, uptime, support SLA | None documented |
| e-waste (ОЕЕО), web orders into the app, SMS/Viber service notifications, accountant portal, ПП30 slip | Not built |
| Help in Albanian or English | Only Macedonian articles exist |

There are also two **conversion risks in the product** the website will run into:
- **The installer is unsigned.** Windows shows "Windows protected your PC" and the customer must
  click "More info → Run anyway". For a paid accounting product that is a trust-killer at the exact
  moment of conversion. A code-signing certificate is cheap compared with the lost sales.
- **No way to pay.** A "buy" button has nothing behind it today.

---

## 10. Likely customer objections

1. **"Is it ready? Who else uses it?"** A new product with no visible customers. → Pilot / founding
   customers, a named reference (if allowed), a guarantee, a personal onboarding offer.
2. **"Will е-Фактура really work on day one?"** → Show the flow honestly; publish the УЈП test result as
   soon as it exists. This is the single most important proof point to obtain *before* launch.
3. **"Moving my data is a nightmare."** → The Акцент import, with preview; "Почни одново"; a free
   migration call.
4. **"What about my accountant?"** → The accountant role, VAT books, ДДВ-04, Excel.
5. **"Where is my data, and what if the PC dies?"** → Offline, own folder, daily backups. Off-site
   backup is *not* automatic: be honest, or add it.
6. **"What does it cost and am I locked in?"** → Clear MKD prices, monthly with no long contract,
   export to Excel everywhere.
7. **"Who helps me if I'm stuck?"** → The in-app help (132 articles, "Испрати прашање") plus a human
   contact (to be defined).
8. **"Does it work with my fiscal printer / my e-shop / my bank?"** → Answer per item honestly (§9).
9. **"Windows says it's unsafe."** → Sign the installer.

---

## 11. Information still needed — the questions that change the plan

Only the questions that materially change the website:

1. ~~How do customers get the product at launch?~~ **Answered 2026-11-16: hosted in the browser.**
   See §13.
2. **Pricing structure.** The code sells a **core package + per-module add-ons**, not three tiers.
   - Is the core paid, or free?
   - Per company, per user, or per PC?
   - Monthly or yearly?
   - Your 500 / 1,000 / 1,800 MKD idea can work as *bundles* of modules (e.g. Trade / Trade + Stock &
     Import / Everything), but it should be designed from the module list, not on its own.
3. **How will money be collected at launch?** There is no checkout. Options: bank transfer against a
   pro-forma (manual, like the provider console today), or online card payment (e.g. a Macedonian
   processor). This decides whether "Buy now" can exist on day one, or whether the CTA is "Request
   access / Start trial → we contact you".
4. **Launch timing vs proof.** Will the УЈП test session and a first real sending happen before launch?
   And the fiscal-printer hardware session? This decides whether е-Фактура is the headline or a
   "coming" feature.
5. **The selling entity and support.** The legal company name, address, ЕДБ, phone/e-mail, support
   hours, and whether Дигитрон may be named as a customer. Needed for the footer, legal pages and
   trust section. I will not invent these.
6. **Competitors.** Which programs do your prospects use today besides Акцент? I need this for
   positioning and the "why us" section.

---

## 12. Early recommendations (to discuss, not decided)

- **Lead with е-Фактура readiness *and* Macedonian depth, not with "all-in-one".** The deadline gives
  urgency; the depth (VAT books, correct profit, Компензација, Албански) gives credibility. Avoid
  generic ERP slogans.
- **Position honestly as a new product with founding customers.** Offer "early customer" terms such as
  a fixed price, personal migration from Акцент, and direct line to the makers. That turns
  "unproven" into "exclusive and supported".
- **Get two proof points before launch:** (1) one real invoice through УЈП's test system;
  (2) a signed installer. Both are worth more than any design work.
- **Don't build a three-tier page in isolation.** Design bundles from the module list, keep à-la-carte
  add-ons visible, and keep the 30-day free trial as the main entry. It is already built, needs no
  card, and lowers risk for the buyer.
- **Industry pages** for the deep niches (Service, Rentals, Importers/ПАКОМАК) instead of crowding the
  home page. They are strong SEO and sales assets.
- **Treat Brother and the e-Faktura caveats as one-to-one sales topics**, not homepage content.

---

## 13. Decision 2026-11-16: hosted in the browser — what it changes

**For the website (good news):**
- The main CTA becomes **"Започни бесплатно" → online sign-up**. The code already has it:
  `SIGNUP_MODE=open` shows „Отворете нова фирма" on the login screen. The 30-day add-on trials work
  as built.
- There is no unsigned installer, no SmartScreen warning, and no "install on every PC". The
  objection list gets shorter.
- New messages become possible, **once they are true**: works from any PC in the office or at
  home; backups and updates done for you; nothing to install.
- The "offline / your data stays on your PC" USP (§4 ⑫, §6.7) **drops out**.

**Two features the hosted version cannot deliver today** (checked in `backend/config.py` and
`docs/STATUS.md`):

1. **е-Фактура signing.** The invoice is signed with the company's smart card, which sits at the
   customer's PC. A hosted server cannot reach it.
   - The server signers are `dev` (not qualified), `winstore` (the *server's* own Windows certificate
     store) and `helper`.
   - In `helper` mode the server signs nothing. It needs a signing client on the customer's PC
     (**ЕФ8**, "frontend signer client"), which is **planned only**.
   - So on a hosted server, е-Фактура — the headline hook — has **no working road yet**. ЕФ8 moves from
     "nice to have" to **launch blocker** if the website leads with е-Фактура.
2. **Fiscal printers.** The printer is on a COM port at the shop. Only `stub` and `serial` exist; the
   `bridge` transport a hosted server would need is listed as *planned*. Fiscal stays off the
   website until a bridge exists.

(The rentals SNMP agent is unaffected: it pushes from the customer's network to the server.)

**What the hosted model now requires before the site can sell** (none of it exists yet):
- A production server: Postgres, TLS, domain, monitoring, off-site backups and a tested restore
  (STATUS still owes "a real restore drill").
- A data-protection story:
  - where the servers are;
  - who can see the data;
  - a privacy policy under Macedonian personal-data law;
  - terms of service.
  These need a lawyer, not me.
- Payment collection (Q3) and the trial-to-paid step: the provider console's manual "activate" today.
- A support process.

**Website ↔ app architecture (first sketch, for Stage 7):**
- A separate, static, fast marketing site (`saldodesk.mk` or similar), in mk / sq / en.
- The app on its own sub-domain (e.g. `app.…`).
- "Најави се" and "Започни бесплатно" link into the app's existing login and sign-up screens.
- The marketing site shares only the brand tokens and logo with the app. None of the app's code
  ships to visitors.

**Decision 2026-11-16 (owner):** the е-Фактура signing client (ЕФ8) will be built in a separate
session. For the website, е-Фактура **stays the headline**. The site may say "ready for
е-Фактура" only once ЕФ8 works and an invoice has gone through УЈП's test system. Until then, launch
copy uses the softer "built for е-Фактура" wording (see `02-marketing-strategy.md` §6).
