# Wiki review — articles that do not match the website (2026-11-16)

The website's Помош copies the app's 128 published help articles (`scripts/sync-help.mjs` in the
`saldodesk-website` repo). They were written for the app as it runs today: on one PC, with a
per-module trial, and with fiscal printing. Below is every place where an article says something
the website contradicts, or that the hosted version cannot do yet.

**Nothing here has been changed in the app's articles.** They live in this repo (`docs/help/mk/`),
are held to the app's screens by `help/gate.test.ts`, and are rewritten when the app itself
changes.

## A. Contradicts what the website promises — fix before launch

| Article | What it says | What the website says | Proposal |
|---|---|---|---|
| `moduli` — Модули | "Секој модул може еднаш да се проба бесплатно, 30 дена" with a **Започни бесплатен пробен период** button per module; **Наскоро** modules; buying = "Јавете ни се" | One 30-day trial for the whole company, every module included; on day 31 you pick a plan and pay against a pro-forma | Rewrite together with the app work for the company trial and plans (brief 06 §6, items 4–6). Until then, **skip it on the site**. |

## B. Describes something the hosted version cannot do yet

| Article | The passage | Why it conflicts | Proposal |
|---|---|---|---|
| `e-faktura-ujp` — испраќање во УЈП | **Потпиши и испрати (УЈП)** described as working; "оваа инсталација не испраќа во УЈП" | On the hosted server signing needs the signing client (ЕФ8), which is not built. The site's „Што е готово" lists it as **Во изработка**. | Skip on the site until ЕФ8 works, or add one line on top: "Во изработка за верзијата во прелистувач". The second keeps the article, which is good for the deadline searches. |
| `statusi-dokument` — section **Фискална сметка** | The statuses of a fiscal receipt (Фискализирана…) | Fiscal printers are not on the hosted version; the site lists them as **Планирано** | Skip the section, or the article, until the fiscal bridge exists |
| `servis-ponuda` | „Направи фискална сметка" as one of the two choices when an offer is accepted | Same | Same |
| `pochni-odnovo` — Почни одново | "резервна копија … во папката backups"; "на оваа инсталација" | PC-install wording. On the hosted version the backup is the server's, not a folder the customer sees. | Rewrite for the hosted version when it exists |

**Passing mentions — fine to keep.** These say "фискална сметка" as one document among others,
which stays true as soon as fiscal returns:
- `bavni-proizvodi`
- `izlezna-kniga`
- `izveshtaj-kupuvachi`
- `izveshtaj-po-period`
- `podnesen-ddv-period`
- `partner-kartichka`
- `servis-naplata`
- `servis-otkazano`

## C. Plan badges — already fixed on the site

The articles do not know the plans. The site labels these with the plan that has them
(`src/content/helpMeta.ts`):

- **Стандард и Про:**
  - `prenos-megju-magacini`, `magacini-i-vraboteni`, `seriski-broevi` (more warehouses, serial numbers);
  - `sporedi`, `povtoruvachki-fakturi`, `polinja`, `sporedba-na-periodi`, `bavni-proizvodi`,
    `izveshtaj-kupuvachi` (moved from Основен on 16.11).
- **`partner-kreditni-limit`:** "Предупредувањето: секој план · блокадата: план Про".

## D. Already left out by the sync

- `brother-mesechen-izveshtaj`, `brother-postavki` — Brother is sold one-to-one.
- `fiskalen-ured`, `fiskalna-smetka` — fiscal is not on the hosted version.

## E. Checked and fine

- **No real names.** No article mentions a real company or person; the examples are the demo
  company's.
- **No picture references.** No text refers to a picture ("на сликата"), so dropping the
  pictures leaves no dangling sentence.
- `iznajmuvanje-email-unos` names **Sharp** and **Brother** as the machines that e-mail their
  counters. That is a fact about what the module reads, not a claim of partnership.
- `iznajmuvanje-monitoring` — the network agent reports to the server, so it works hosted.

## Decision (owner, 2026-11-16) — done

As recommended: `moduli`, `statusi-dokument`, `servis-ponuda` and `pochni-odnovo` are in the
sync script's `SKIP` list with their reasons. `e-faktura-ujp` stays, with a „Напомена“ on top
(`NOTES` in the sync script) that links to „Што е готово“. The wiki now has 124 articles. When
the app catches up, take each one off the list.

## The options that were weighed

For A and B the choice is the same: **skip** the article on the site until the app catches up
(one line in the sync script's `SKIP` list, with its reason), or **keep it with a short note** on
top. My recommendation:
- **skip** `moduli`, `statusi-dokument`, `servis-ponuda` and `pochni-odnovo`;
- **keep** `e-faktura-ujp` with the "Во изработка" note — it is the article people searching for
  the deadline will land on.
