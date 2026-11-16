# Hand-off — where the website stands (2026-11-16, end of session)

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
