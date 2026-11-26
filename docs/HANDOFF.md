# Hand-off — where the website stands

## 2026-11-26 (latest)

- The repository is on GitHub (`FakturiApp/saldodesk-website`); clone it as below.
- The owner asked for a SIMPLE site in plain words, so it was rebuilt: tabs Почетна (overview),
  Функции, Преглед, Цени, Помош, Контакт. Pictures are real app screens of the made-up company
  (`public/help-img/`), not drawn mock-ups. Topic pages, Модули, Што е готово, Демо and За нас
  were removed (they are in git history, commit edd2eae).
- Macedonian and English everywhere; the wiki has an English copy in `src/content/help-en/`.
  Albanian is off (`LANGS` in `src/i18n/ui.ts`) until a native speaker writes it.
- Later the same day: Функции and Преглед became one tab, **„Како работи"**: every part of the
  app (12 areas, in the app's menu order, with the app's own symbols) — a real screen with numbered
  spots to explore, then **45 tasks** (src/content/tasks/), each 3–6 steps, and **every step has
  its own short video** (public/rec/<lang>/<task>/<n>.webm, MK and EN). Clicking a step plays its
  video; the steps then play on like a short story. A slim rail of symbols on the left opens on
  hover.
- How the videos are made: scripts/flows/<area>.mjs describe each step's clicks;
  `npm run record` (scripts/record-app.mjs) plays them in the app on the made-up company and cuts
  one video per step. `--dry` tests the steps without recording; `node scripts/check-tasks.mjs`
  checks that tasks and flows agree. Record on CLEAN data: stop app-shots-backend,
  `node scripts/restore-demo-data.mjs`, start it, then record (a run creates its own records).
  Every video was reviewed against its step text (twice) before it went in.
- The picture database was cleaned by `scripts/clean-demo-data.mjs` (data only): Brother →
  Kyocera / Epson / Dymo, the Brother and fiscal modules switched off. Its clean copy is
  `data/website-shots-backup-20261126/website-shots-clean.db` in the app repo.
- **App bug (Windows only, not fixed — the app's code was not touched):**
  `frontend/src/pages/documents/serialImport.ts` and `SerialImport.tsx` differ only by a capital
  letter. On Windows `./SerialImport` resolves to the `.ts` file, so every single-document screen
  (`/dokumenti/<id>`) fails with „Оваа страница не се вчита". Pictures and recordings therefore
  run on a throwaway copy of the app's screens (`node scripts/app-copy.mjs` → `.app-copy/`,
  port 5160) where that one file is renamed. Renaming one of the two files in the app fixes it for
  real (and makes the copy unnecessary).
- Pictures: 130 of 149 taken (the rest need demo data in a particular state); the wiki places
  134. English pictures: public/help-img/en/ (`npm run shoot -- --lang en`).
- Still open: owner inputs (prices, contact, company, legal texts), W5 (SEO, analytics,
  accessibility, staging), and the app work below.

---

## Earlier (2026-11-16)

Read `docs/brief/` first, in order (01 → 08). This note is only what a new session needs to
pick up the work.

## Done

- **W0–W2, W2b** built:
  - two themes (dark night + golden light);
  - drawn mock-ups on the marketing pages (fictional „Кони Копи ДООЕЛ");
  - a short home page with question cards that open their own topic pages;
  - Модули (switcher), Цени (example prices), Што е готово, Контакт, Демо, За SaldoDesk (the
    brand quote), legal shells;
  - Помош, the wiki: 124 of the app's help articles. 8 are skipped with reasons in
    `scripts/help-skip.mjs`.
- **No competitor is named anywhere** (owner 16.11). CI fails a build that does
  (`.github/workflows/build.yml`), and `sync-help.mjs` refuses an article that does.
- **Wiki pictures:**
  - taken INSIDE the app on the fictional company (`npm run shoot`);
  - 109 of 149 taken, 111 placed in articles;
  - the site draws a ring and a „Кликнете тука" pointer on the thing to click.

## Open

1. **Push this repository.** Create an EMPTY private repository on GitHub named
   `saldodesk-website` (under `FakturiApp`, beside the app, or your own account), then from
   this folder:
   ```
   git remote add origin https://github.com/FakturiApp/saldodesk-website.git
   git push -u origin main
   ```
   (The session could not create the GitHub repository itself.)
2. **40 wiki pictures not taken.** The app's shot list opens fixed document numbers
   (`/dokumenti/3`, `/dokumenti/12`…) that point at other documents in the fresh database,
   and a few steps name text the app has since changed. The next pass is to find each
   document by its type instead of its number. The skipped names are printed by
   `npm run shoot`.
3. **Owner inputs still marked `ПОПОЛНИ`:**
   - prices and ДДВ status;
   - founding-customer terms;
   - contact person, phone and e-mail;
   - company details;
   - legal texts.
4. **W3** (more mock-ups where a page needs one), **W4** (sq/en texts, Albanian checked by a
   native speaker), **W5** (SEO, analytics, speed and accessibility pass, staging).
5. **App work the site depends on** — brief 06 §6:
   - ЕФ8 signing;
   - hosting;
   - signup with e-mail and a sign-up address;
   - the company trial;
   - plans;
   - the pro-forma flow;
   - the demo company.

## To run it on another PC

```
git clone https://github.com/FakturiApp/saldodesk-website.git
cd saldodesk-website
npm ci
npm run dev        # http://localhost:4321
```

Node 24 (`.nvmrc`). The app's repository is only needed for `npm run sync:help` and
`npm run shoot`, checked out beside this folder as `../Business_M-main`.
