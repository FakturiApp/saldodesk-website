# saldodesk.mk — the SaldoDesk marketing website

A static site (Astro 7 + Tailwind 4) in Macedonian, Albanian and English. It shares nothing
at runtime with the app (`app.saldodesk.mk`); it only links into it.

The plan it is built to is in [`docs/brief/`](docs/brief/), copied from the app repo's
`docs/website/`. Read `06-blueprint.md` first.

## Run it

```
npm install
npm run dev        # http://localhost:4321  (the font check: /dev/fonts/, dev only)
npm run build      # static output in dist/
```

## A repository of its own

The site builds from this repository alone: `npm ci && npm run build` (Node 24, `.nvmrc`), and
`.github/workflows/build.yml` does the same on every push. Only two optional maintenance
scripts read the app's repository, checked out beside this one (`../Business_M-main`):

- `npm run sync:help` copies the app's help articles into `src/content/help/`;
- `npm run shoot` takes the wiki's pictures from a running app on the fictional company.

Their output is committed, so nobody who only builds the site needs the app.

## Where things are

| Path | What |
|---|---|
| `src/i18n/ui.ts` | Every word, in mk / sq / en; the page list; the app's URLs |
| `src/styles/global.css` | The site's own tokens (only the logo colours come from the app), Onest, pills, highlighter |
| `src/content/topics.ts` · `modules.ts` | The topic pages' and modules' words (mk) |
| `src/components/mock/` | Drawn app screens with invented data (Кони Копи ДООЕЛ) — never real screenshots |
| `src/content/help/` + `scripts/sync-help.mjs` | The wiki — COPIED from the app repo, never edited here |
| `scripts/shoot-app.mjs` → `public/help-img/` + `src/data/shot-targets.json` | The wiki's pictures, taken inside the app on the fictional company, with the click targets |
| `src/data/plans.ts` | The three plans, the comparison, example prices |
| `src/layouts/Base.astro` | `<head>` (title, hreflang, canonical), header, footer |
| `src/components/` | Logo, header, language switch, footer, `Todo` placeholder |
| `src/pages/index.astro` | The root: picks a language once |
| `src/pages/[lang]/` | Home and every launch page, per language |

## Rules

- **Nothing invented.** A value the owner has not supplied (prices, company details, contacts)
  is a `<Todo>`: drawn in yellow with a dashed border, and marked `data-todo` so a pre-launch
  check can refuse it.
- **Albanian is a draft** until a native speaker has checked it.
- **No third-party requests.** Fonts are self-hosted, and there are no external scripts.
- **`robots.txt` blocks indexing** until launch.

## Status

- **W0 done (2026-11-16):** shell, tokens, fonts, header/footer, mk/sq/en routing, every launch
  route as a placeholder.
- **Identity changed (owner, 16.11):** the site has its own look and does not copy the app.
  See `docs/brief/05-visual-direction.md`.
- **W1 done (2026-11-16):** the home page in Macedonian (sq/en show the mk text until W4). Its
  sections run hook → explanation → annotated real screen. Prices and company details are
  `<Todo>`s.
- **16.11 (owner):** dark + golden light theme; drawn mock-ups instead of screenshots; a
  short home page whose questions open their own pages; the modules on one switcher page;
  example prices.
- **W2 done (2026-11-16):** Функции, the five topic pages, Модули, Цени, Што е готово, Контакт,
  Демо; legal shells.
- **W2b done (2026-11-16):** Помош, the wiki. `npm run sync:help` copies the app's help
  articles from `../Business_M-main/docs/help/mk` (124 published; 8 skipped with reasons —
  Brother, fiscal, and four that conflict with the site, see `docs/brief/07-wiki-review.md`), and
  pictures are dropped. The index is grouped by topic with a Cyrillic/Latin search. Article
  pages show related questions and the plan badge. The sq/en copies point search engines at
  the mk original.
- **16.11 (owner), `docs/brief/08-implementation-plan.md`:** no competitor named
  (`/preminuvanje/`); the brand quote on the home page and `/za-nas/`; the wiki's pictures
  taken inside the app on the fictional „Кони Копи ДООЕЛ" with a ring and a „Кликнете тука"
  pointer (`npm run shoot` then `npm run sync:help`).
- **Next:** W3 (more mock-ups where needed) and W4 (sq/en texts). Before launch, the owner
  reviews the wiki once for anything not ready on the hosted version.
