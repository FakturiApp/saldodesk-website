# Implementation plan — no competitors, the brand quote, app screenshots with arrows (2026-11-16)

Owner, 16.11:
- „no we strip out Akcent — we don't mention any other competitor, use an 'other program'
  example";
- „what is our quote — software for self-governing business operations — on the main page,
  read in an About field";
- „screenshots from within the app, PDF-guideline accuracy, with arrows where to click";
- „make the plan, then don't ask me anything and push everything".

## 1. No competitor on the website

- Every „Акцент" on the site becomes a generic „друга програма" / „старата програма":
  - the topic card and page;
  - the mock-up's file name;
  - the plans' and FAQ lines;
  - „Што е готово";
  - the footer.
- The page `/akcent/` becomes **`/preminuvanje/`**, „Преминете од друга програма".
- The wiki needs nothing: no published article names Акцент (checked). The sync script still
  replaces the word if an article ever gains it, so the site never shows it.
- The planning brief (`docs/website/`) keeps its history. It is internal and not on the site.

## 2. The brand quote and „За SaldoDesk"

- **The quote:** „**Софтвер за фирми што сами си ги водат работите.**" (software for firms
  that run their own business). It is short, says who it is for, and has no adjectives.
- **On the home page:** a quote band between the questions and the plans. It shows the quote
  with one line under it, and a link „За SaldoDesk →".
- **A new page `/za-nas/`, „За SaldoDesk" (About):**
  - the quote, large;
  - what SaldoDesk is;
  - four principles, each provable from the brief:
    - made for Macedonian law;
    - you own your data;
    - we say openly what is ready;
    - people who answer;
  - who stands behind it: a `<Todo>` for the owner.
- It joins the footer's „Фирма" column and the page list in mk/sq/en.

## 3. App screenshots with arrows (the wiki at PDF-guide accuracy)

- **The source:** the app's OWN screenshot definitions (`docs/help/shots/*.json`, 157 pictures
  with the address, the clicks and the one thing to click — `highlight`). They are the same
  pictures the help articles reference, so every article gets its pictures back.
- **The data:** a throwaway database, `data/website-shots.db`, git-ignored, set up through the
  app's own setup door as **„Кони Копи ДООЕЛ"** (owner 16.11). It is filled by the app's demo
  seeder with its fictional partners and documents. Never the owner's books, and never a copy
  of them.
- **The script:** `saldodesk-website/scripts/shoot-app.mjs`. It:
  - logs in like a person;
  - refuses unless the signed-in company is exactly „Кони Копи ДООЕЛ";
  - accepts only localhost;
  - takes each picture;
  - records the click target's box (`highlight`) into `src/data/shot-targets.json`;
  - writes the pictures to `public/help-img/`.
- **The arrows are drawn by the website, not burned into the picture:**
  - a ring around the target;
  - a mint arrow;
  - a „Кликнете тука" tag.

  They are crisp at any size, follow the theme, and can be translated. `sync-help.mjs` keeps
  each picture as a `<figure>` with its caption (the article's own alt text) and the overlay.
- **What is left out:** a picture whose screen shows anything the site does not sell yet
  (Brother, fiscal) stays out with its article.

## 4. Order and checks

1. Strip the competitor; rename the page.
2. The quote band and „За SaldoDesk".
3. The shot database (setup + seed), the backend and frontend on their own ports (8150 / 5150),
   and the shooting.
4. The overlay and the sync; rebuild.
5. Checks:
   - every page builds;
   - no „Акцент" in `dist/`;
   - every article picture exists;
   - no broken links;
   - both themes, laptop and phone.
6. **Commit and push:**
   - the app repo gets `docs/website/` and the launch entries, on the current branch
     `app-polish-loose-ends`;
   - the website repo is committed locally and pushed if a remote can be created from this
     machine (the GitHub CLI is not installed here). If it cannot, the exact command is left
     for the owner.
