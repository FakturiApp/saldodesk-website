# SaldoDesk — Visual Direction & Design Concept (Stage 6 draft)

*Draft 2026-11-16. Source of the identity: `frontend/src/theme/tokens.css`, `tailwind.config.js`,
`ui/BrandLogo.tsx`, `ui/icons.tsx`, `public/favicon.svg`, and the screenshots in `docs/help/img/`.*

---

> ## ⚠️ Changed 2026-11-16 (owner, during W1) — this replaces §1–§7 below
>
> „The website should not be a direct copy of the app … it needs to be its own separate thing
> showcasing the app, not identical in the buttons and menus and some colours. It should
> prioritise explanation while keeping the marketing goal of presenting the options so they are
> almost clickbait level."
>
> **The site's own identity (as built in W1):**
> - **Shared with the app:** only the logo and its three colours (night tile, mint bars, blue
>   slabs), plus the real screenshots. Nothing else.
> - **Palette:**
>   - night `#0d1220` for the hero, dark bands and footer;
>   - warm paper `#f7f5ef` and white for the light sections;
>   - mint `#3fe0ad` for the main buttons, used on night;
>   - a yellow **highlighter** `#ffd75e` behind the key words, as the one loud colour.
>   - The app's emerald buttons, cool-grey canvas and status colours are not used.
> - **Type:** **Onest**, one family, extra-bold and tight for headlines. The app's Georgia /
>   Segoe UI pair and Source Serif + Inter are dropped.
> - **Controls:**
>   - **pill buttons with an arrow disc**;
>   - a **floating rounded header bar** (on phones, a dark fold-out menu);
>   - the active menu item underlined with the highlighter.
>   - None of the app's tab row or square buttons.
> - **Explanation first.** Every section is **hook question → plain explanation → the real
>   screen with numbered pins and a legend**.
> - **The options pull.** A "Што сакате да дознаете прво?" grid of question cards links into
>   the answers; the plan cards and the add-on tiles carry the same hook style.
> - **Two themes (owner, later on 16.11).**
>   - **Dark:** the night look with mint patches, as first built.
>   - **Light:** the same style on a golden, creamy paper (`#f5ebd3`), with a golden
>     highlighter. Never plain white.
>   - The visitor's choice is remembered; otherwise the system setting decides.
> - **Screenshots from inside the app, with arrows (owner, later on 16.11).** The wiki shows
>   real app screens, taken by `scripts/shoot-app.mjs` on a FICTIONAL company („Кони Копи
>   ДООЕЛ", a throwaway database). The site draws a ring and a „Кликнете тука" pointer on the
>   thing to click. The marketing pages keep their drawn mock-ups.
> - **No competitor named (owner, 16.11).** No other program is mentioned. `/akcent/` became
>   `/preminuvanje/` („Преминете од друга програма").
> - **The brand quote (owner, 16.11):** „Софтвер за фирми што сами си ги водат работите.", on
>   the home page and on `/za-nas/` („За SaldoDesk").
> - **Earlier the same day — no real screenshots (owner, 16.11):** Every product picture is a drawn mock-up with
>   invented data. The company is „Кони Копи ДООЕЛ", and the partners and figures are made up.
>   The help screenshots and the crop script are removed, so W3 no longer re-shoots screens.
> - **No long home page (owner, 16.11).** Each question opens its own page (`/dobivka/`,
>   `/dolgovi/`, `/ddv/`, `/e-faktura/`, `/akcent/`). The modules sit on one page with a
>   switcher (`/moduli/`). The home page is now: hero, the questions, the plans, the closing call.
> - **What stays from below:** honest claims (§9 of the analysis), real screenshots from
>   fictional data only, no stock photos, motion off with `prefers-reduced-motion`, AA contrast.

---

## 1. The idea in one line

**"Смарагд, on paper and on glass."** The site should feel like the app at its best: a calm,
precise financial tool. White paper, emerald money, deep ink. One dark "ledger" colour taken from
the logo tile gives the page weight.

It should look like a product that holds your books, not a startup that sells excitement.

**Three words for every design decision:** *точно · мирно · македонско* (precise · calm · Macedonian).

---

## 2. What carries over from the app, and what changes

| | App | Website | Why |
|---|---|---|---|
| Logo | Isometric blue slabs + green bars + arrow; wordmark **Saldo**Desk | Same, unchanged | Recognition from site to app |
| Brand colour | Emerald `#0a6e54` (light) / `#2fd0a0` (dark) | Same: CTAs, money figures, ticks | "Green = money", the app's own rule |
| Create colour | Blue `#1e63a8` | Secondary accent only (links, the "documents" family, small details) | Two accents at most |
| Canvas | Cool grey `#eaecf1` behind white cards | **White page**; `#eaecf1` for alternating bands; **dark ink `#12161f`** (the logo tile) for 2 bands | Marketing needs more contrast and rhythm than a work screen |
| Titles | Serif (Georgia) | Serif display, **self-hosted webfont with Cyrillic** (§4) | Keeps the app's "bank with style" voice; Georgia looks different on every device |
| Body | Segoe UI / system | A Cyrillic-complete sans (§4) | Segoe is Windows-only; visitors arrive on phones and Macs |
| Figures | `tabular-nums`, `1.450,00` | Same, everywhere a number appears | Accounting software must look exact |
| Radius / shadow | 12 px, soft pop shadow | Same | Cards and buttons match the app |
| Status tones | Red = stop, yellow = careful, blue = good to know, green = done | Used only on `/status` and in UI callouts | Meaning stays consistent |
| Document families | Emerald sales · blue purchases · amber corrections · grey internal, as a 3 px edge stripe | **A graphic motif**: the 3 px stripe on cards; the "family map" in the documents section | A real piece of the product turned into decoration |
| Icons | Own monoline set, 16 px grid, stroke 1.4, `currentColor` | Same style, drawn larger (24 px grid, the same stroke weight in proportion) | No generic icon pack |

---

## 3. Colour roles

| Role | Token | Hex | Use |
|---|---|---|---|
| Ink | `--tx` | `#1e2430` | Body text |
| Muted | `--mut` | `#5f6773` | Secondary text |
| Paper | `--surface` | `#ffffff` | Page and cards |
| Band | `--bg` | `#eaecf1` | Alternating sections |
| Hairline | `--line` | `#e2e6ec` | Card borders, table rules |
| Emerald | `--acc` | `#0a6e54` | Primary CTA, money, ✓ |
| Emerald tint | `--tint` | `#dff3ec` | Highlights, the ⭐ plan's band |
| Blue | `--create-bg` | `#1e63a8` | Links, secondary visuals |
| Ledger dark | logo tile | `#12161f` | е-Фактура band, final CTA |
| Emerald on dark | logo bars | `#3fe0ad` | Accent text and button on dark bands |

Every text and background pair is AA, as in the app. The dark bands use `#3fe0ad` with dark text
(`#0c1a15`) on its buttons, which is the app's own dark-theme pairing.

**Dark mode for the site:** not at launch. The site is light, with two dark bands. Visitors judge a
business tool in daylight; a second theme doubles the screenshot work.

---

## 4. Typography

| Use | Recommendation | Fallback | Notes |
|---|---|---|---|
| Display (H1–H3) | **Source Serif 4** (SemiBold) | Georgia | Open licence (OFL); full Cyrillic, including ѓ ќ ѕ ј љ њ џ; Albanian ë ç |
| Body / UI | **Inter** (Regular, Medium, SemiBold) | system-ui | OFL; full Cyrillic; tabular figures built in |

- **Self-hosted**, subset to Latin + Cyrillic, `font-display: swap`. No Google Fonts request: it is
  faster, and no visitor data goes to a third party.
- **Scale (mobile → desktop):**
  - H1 34 → 56 px
  - H2 26 → 38 px
  - H3 20 → 24 px
  - body 17 → 18 px
  - small 14 px
- **Line length** ≤ 68 characters. Macedonian words run long.
- **⚠ To check before choosing:** Macedonian italic and some letters (б, г, д, п, т in italic) have
  local forms that differ from Russian. Both fonts must be checked with `lang="mk"` on a real
  Macedonian paragraph before they are adopted. If either fails, PT Serif / PT Sans are the next
  candidates.

---

## 5. Graphic language

1. **Real product, cropped close.** No full dense screens on a phone. Each feature shows **one crop**
   of the real screen at readable size (a tile, a line with its margin strip, a partner's ✓/✗ chip),
   sometimes with a small annotation pointer.
   - Source: re-shot from the fictional demo database, at 2× resolution, in mk, sq and en. The
     project rule stands: never real data.
2. **The browser frame** appears once, in the hero, so visitors see "it runs in the browser".
3. **Ledger slabs.** The logo's isometric slab is used as a large, faint background shape (3–6 %
   opacity) behind the hero and the final CTA, and as the stacked "steps" in How it works. It is
   owned and recognisable, and it is not a stock illustration.
4. **Family stripes.** A 3 px coloured left edge on feature cards, in the document-family colours.
5. **Numbers as heroes.** Big tabular figures in the app's own format (`128.844,00 ден.`) as visual
   anchors in the money section.

**Not used:** stock photos of people and handshakes, 3D blobs, gradients across whole sections,
emoji, or illustrations of people.

---

## 6. Components

- **Buttons:**
  - primary: emerald fill, white text, 12 px radius, 48 px tall on mobile;
  - secondary: the app's "quiet" outline;
  - on dark bands: `#3fe0ad` fill with dark text.
- **Plan cards:** white, hairline border; the ⭐ plan has an emerald top band „Препорачано за
  трговија" and a 2 px emerald border. The price is big and tabular, with "без ДДВ" in small text
  beside it, as the app writes it.
- **Month / Year switch:** the app's segmented control, with a small saving pill on Годишно.
- **Feature block:** a text column and a crop. They alternate left and right on desktop and stack on
  mobile, text first.
- **FAQ:** native `<details>` accordions, so they work without JavaScript and are accessible.
- **Status list** (`/status`): green ✓ "Готово", blue "Во изработка", grey "Планирано".

---

## 7. Motion

- Only on first view of a section: a 200 ms fade and rise of the crop. Nothing loops, auto-plays or
  parallaxes.
- The е-Фактура band's three steps light up in order, once.
- Every animation is off with `prefers-reduced-motion`.

---

## 8. Hero concept (desktop)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [logo] SaldoDesk     Функции ▾  е-Фактура  Цени  Помош   МК▾  Најави се [Пробај бесплатно] │
├────────────────────────────────────────────────────────────────────────────┤
│                                              ╱ faint ledger slabs ╲         │
│  Фактури, залиха и долгови —             ┌──────── browser ─────────┐       │
│  уредно, по македонски закон.            │  Почетна (demo company)  │       │
│  Изградено за е-Фактура.                 │  tiles: Промет, Побарувања│      │
│                                          └──────────────────────────┘       │
│  Од понуда до фактура испратена          ┌ floating card ┐                  │
│  во УЈП, од приемница до ДДВ-04…         │ ✓ може е-фактура│                 │
│                                          └────────────────┘                 │
│  [Пробај бесплатно 30 дена]  Види демо фирма →                              │
│  30 дена · сите модули · без картичка · МК / SQ                             │
└────────────────────────────────────────────────────────────────────────────┘
```

On mobile: headline, then the one-line sub, then the buttons („Испрати ми линк за компјутер" as the
mobile secondary), then a single cropped tile instead of the full browser frame.

(„Изградено за е-Фактура" becomes „Подготвено за е-Фактура" at launch, per strategy §6.)

---

## 9. Decisions for you

1. **Font pair:** Source Serif 4 + Inter (recommended), or stay closer to the app with system fonts
   only. That is faster, but looks different on every device.
2. **Dark bands:** two of them (е-Фактура + final CTA), recommended, or an all-light page.
3. **Screenshots:** OK to re-shoot the help screenshots at 2× for the site, from the fictional demo
   database?
