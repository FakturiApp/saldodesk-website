# saldodesk.mk — the SaldoDesk marketing website

A static site (Astro 7 + Tailwind 4) in Macedonian and English (Albanian comes later). It shares nothing
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
- `npm run shoot` takes the wiki's pictures from a running app on the fictional company
  (`-- --lang en` for the English ones, into `public/help-img/en/`);
- `npm run record` records the tasks in `scripts/flows/` (`-- --lang en` for English,
  `-- --dry` to test them, `-- --only id1,id2` for some).

The app runs from this repo's `.claude/launch.json`: `app-shots-backend` (the throwaway picture
database `data/website-shots.db`) and, on Windows, `app-copy-frontend` (port 5160, made by
`node scripts/app-copy.mjs`); the scripts use port 5160 unless `SHOTS_URL` says otherwise. Run `node scripts/clean-demo-data.mjs`
once on a fresh picture database before shooting.

Their output is committed, so nobody who only builds the site needs the app.

## Where things are

| Path | What |
|---|---|
| `src/i18n/ui.ts` | Shared words (mk / en), the page list, the top-bar tabs, the app's URLs |
| `src/content/site.ts` | The words of Почетна, Цени, Контакт and the page intros; the (example) prices |
| `src/content/areas.ts` | „Како работи": the app's 12 areas, each a real screen with numbered spots, and the ids of its tasks |
| `src/content/tasks/*.ts` | The tasks (about 45), one file per area: title, intro, steps (each one visible action), guides |
| `scripts/flows/*.mjs` | The recording of each task, step by step — `npm run record` turns it into one short video per step |
| `src/content/help/` + `scripts/sync-help.mjs` | The wiki in Macedonian — COPIED from the app repo, never edited here |
| `src/content/help-en/` | The wiki in English — translated here; translate an article again when its mk copy changes |
| `scripts/shoot-app.mjs` → `public/help-img/` | The app pictures, taken inside the app on the made-up company |
| `scripts/crop-shots.mjs` → `public/shots/` | The home page's hero picture, cropped from a wiki picture |
| `scripts/clean-demo-data.mjs` | Makes the made-up company fit for pictures: Brother → Kyocera/Epson/Dymo, Brother + fiscal modules off (data only) |
| `scripts/record-app.mjs` → `public/rec/<lang>/<task>/<n>.webm` | One video per step (cursor + click ripple), `src/data/rec.json`; `--dry` tests the steps without recording |
| `scripts/app-copy.mjs` → `.app-copy/` | A throwaway copy of the app's screens that works on Windows (see docs/HANDOFF.md, the file-name bug) |
| `src/layouts/Base.astro` | `<head>` (title, hreflang, canonical), header, footer |
| `src/pages/[lang]/` | Почетна, Функции, Преглед, Цени, Помош, Контакт, legal shells — per language |

## Rules

- **Nothing invented.** A value the owner has not supplied (prices, company details, contacts)
  is a `<Todo>`: drawn in yellow with a dashed border, and marked `data-todo` so a pre-launch
  check can refuse it.
- **Short, plain words** (owner 2026-11-26): no slogans, no translated idioms.
- **No third-party requests.** Fonts are self-hosted, and there are no external scripts.
- **`robots.txt` blocks indexing** until launch.

## Status

- **W0–W2b (2026-11-16):** shell, themes, the first pages, the wiki.
- **2026-11-26 (owner):** a simple site in plain Macedonian and English. Tabs: Почетна (a short
  overview), **Како работи** (the app's 12 areas: a real screen with numbered spots, then 45 tasks
  whose every step has its own short video), Цени, Помош (124 guides, also in English), Контакт.
  Real pictures from the app on the made-up company. Albanian is off until a native speaker
  writes it. Details and the Windows app bug: `docs/HANDOFF.md`.
- **Open:** prices, contact and company details, legal texts (`<Todo>`s); SEO/analytics/
  accessibility pass and a staging deploy; the app work in brief 06 §6.
