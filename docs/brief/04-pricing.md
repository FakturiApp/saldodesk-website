# SaldoDesk — Pricing & Subscription Presentation (Stage 5 draft)

*Draft 2026-11-16. Decisions so far:*
- *hosted;*
- *the core is paid after a **30-day trial with everything included**, no card;*
- *the price is **per company** (users included, extra users paid);*
- ***monthly and yearly** billing, yearly about two months cheaper;*
- *payment by **bank transfer against a pro-forma**.*

***No price in this document is final.** The amounts are placeholders until the economics in §6
are known.*

---

## 1. Is "three plans" the right shape?

Partly. The product is built as **a core + ten add-ons**, so there are two honest ways to sell it:

| | Three bundles (plans) | Core + pick your add-ons |
|---|---|---|
| Ease of choosing | ✅ three cards, one decision | ❌ eleven decisions |
| Fits how the app is built | ✅ a plan is just a set of modules | ✅ exact match |
| Fits the niches (service shop, copier rental) | ❌ they don't fit a "trade" ladder | ✅ |
| Average price | ✅ bundles lift it | Lower |

**Recommendation: both, in that order.**
- **Three plans** for the 80 % who trade.
- **Industry add-ons** (Сервис, Изнајмување) that can be **added to any plan**.
- The trial already includes everything, so on day 31 the customer simply picks the plan that
  matches what they used.

---

## 2. Proposed plans (module composition)

*Changed 2026-11-16 (owner): plans renamed to **Основен / Стандард / Про**; Веб-продавница moved
into **Стандард and up**; users per plan stay as drafted. Then **Финансии and Набавки moved up to
Про only**, to make Про worth more. Then **Веб-продавница became a separate add-on** (in no plan),
and **four core functions moved up from Основен to Стандард**: analysis reports, Повторувачка
фактура, Спореди, custom fields and form layout.*

Modules that cannot be sold yet are left out: Фискални уреди (no hosted connection yet) and
Brother (on request only).

| | **Основен** | **Стандард** ⭐ | **Про** |
|---|---|---|---|
| For (the line under the name on the card) | A small firm, one location | Trade: stock in several places, deeper insight | Importers and growing traders: buying abroad, credit control |
| Core: all documents, **е-Фактура**, stock in one магацин, payments and debt, ДДВ books + ДДВ-04, turnover and profit reports, Акцент import | ✅ | ✅ | ✅ |
| Analysis reports: month vs last month and last year, new and lost customers, slow movers, thin margins | — | ✅ | ✅ |
| Повторувачка фактура: recurring invoices made automatically | — | ✅ | ✅ |
| Спореди: 2–5 products, partners, documents or warehouses side by side | — | ✅ | ✅ |
| Custom fields and form layout: own fields; rename, hide and arrange the app's fields | — | ✅ | ✅ |
| Магацинско работење: more warehouses, serial numbers, batches with expiry | — | ✅ | ✅ |
| Набавки: reorder list, minimum stock | — | — | ✅ |
| Финансии: credit-limit block, e-mailed reminders | — | — | ✅ |
| Увоз / Извоз: Девизна фактура, landed cost, export invoice | — | — | ✅ |
| Отпад: monthly ПАКОМАК report | — | — | ✅ |
| Users included | 2 | 5 | 10 |
| Price / month (placeholder) | 500 ден. | 1.000 ден. | 1.800 ден. |
| Price / year (placeholder, = 10 months) | 5.000 ден. | 10.000 ден. | 18.000 ден. |

**Add to any plan** (placeholders until §6):
- **Сервис**: repair workshop, tickets, complaints.
- **Изнајмување**: copier/printer rental, meter billing, SNMP monitoring.
- **Веб-продавница**: WooCommerce sync of name, code, price, free stock, categories and brands.
- **Extra user**: per month.

**Why these splits:**
- **Основен** is complete for a real small business. It is not a crippled teaser: е-Фактура and the
  ДДВ books are in it, because the deadline is the reason they came.
- **Стандард** adds "more locations and deeper insight": more warehouses, serial numbers and
  batches, the analysis reports, Спореди, recurring invoices, and the company's own fields. It is the
  natural step up for a trading company.
- **Про** is the "run a bigger business" plan:
  - the import side: landed cost, plus ПАКОМАК, which is the importer's legal monthly duty;
  - control over money: the credit-limit block, supplier limits and e-mailed reminders;
  - control over buying: the reorder list per supplier, minimum stock and reorder quantity.
  Four modules on top of Стандард make the price step to Про easy to justify.
- **Watch-out:** every plan still warns when a customer nears the credit limit. Only the BLOCK at
  issue and the e-mailed reminders are Про. Say so on the comparison table, so Основен and Стандард
  never look like they let debt run unchecked.

**App work this split needs (later session).** The four functions moved from Основен are part of the
always-on core in code today, so nothing can switch them off yet. Plans need a gate for each. Two
rules carry over from how modules already behave:
- **a downgrade never loses data**: recurring profiles stop running, custom-field values stay stored
  and printed on the documents that carry them, but nothing new is added;
- **the gate never touches issuing an invoice**: that stays in every plan (the app's own rule that
  nothing locks a company out of its own invoices).

**Neutral names need a "for" line.** „Основен / Стандард / Про" say how much, not for whom. Each
card therefore carries the "For" row above directly under its name, so a visitor still finds
themselves in five seconds.

**The ⭐ mark.** On Стандард, use „Препорачано за трговија" (recommended for trade), **not** „Најпопуларно"
(most popular). We have no data to say most popular. The mark can change once real numbers exist.

---

## 3. How the pricing page presents it

1. **Banner on top:** „30 дена бесплатно, со сите модули · Без картичка · Плаќање по фактура"
   (30 days free with every module · no card · pay by invoice).
2. **Месечно / Годишно switch**, with yearly preselected and the saving in денари
   („заштедувате 2.000 ден.").
3. **Three cards.** Each has a name, who it is for, the price, the users included, 5–6 key lines and
   a „Пробај бесплатно" button. Every card's button leads to the same trial, because the plan is
   chosen on day 31.
4. **„Додадете на кој било план"** (add to any plan): Сервис, Изнајмување, extra user.
5. **Full comparison table** (folded by default): every module, row by row.
6. **ДДВ said on every price.** The app's own rule is that every money figure says „без ДДВ" or
   „со ДДВ"; the website keeps it. B2B buyers expect „без ДДВ" prices, but this depends on whether
   the selling company is a VAT payer (§6).
7. **Founding customers box** (if approved): a fixed price for N months, migration from Акцент done
   with you.
8. **Money FAQ:**
   - How do I pay?
   - When is my account active?
   - Can I change plan?
   - What happens on day 31?
   - Can I cancel?
   - Can I export my data?
9. **"Не сте сигурни кој план?"** (not sure which plan?) → „Закажи 15 мин. презентација".

What we leave out on purpose:
- tiny print;
- "from" prices;
- setup fees, unless real;
- a fourth "Enterprise — call us" card (no such offer exists).

---

## 4. What the visitor must understand without asking

- what each plan includes, and what it doesn't;
- monthly vs yearly;
- prices без ДДВ, or со ДДВ;
- users included, and the cost of one more;
- that nothing is charged automatically: payment is by invoice and bank transfer;
- what happens at the end of the trial;
- that they can change plan or leave, and take their data.

---

## 5. Payment flow (bank transfer)

```
Day 1     Signup → 30 days, everything on
Day 23    Reminder (in app + e-mail): „Изберете план"
Day ≤30   Customer picks a plan + monthly/yearly in the app
          → pro-forma generated and e-mailed (issued from SaldoDesk's own company in SaldoDesk)
          → trial extended by 7 days while the payment travels
Paid      Provider sees the payment → activates the plan (provider console today)
          → final invoice issued (as е-Фактура once live)
Not paid  After the grace period: read-only + export, data kept
Renewal   Pro-forma N days before the period ends, same flow
```

**Recommendation: run SaldoDesk's own billing in SaldoDesk.** The provider's company is one tenant
that invoices the customers. It costs little to build, every invoice is a demonstration, and it
proves the е-Фактура flow on real money.

**App work this needs (later session):**
1. a "choose your plan" screen;
2. the pro-forma created in the provider's tenant;
3. a grace period;
4. plan → modules mapping, and a user limit;
5. activate / renew on payment;
6. reminders.

The provider console already grants modules by hand, so the first version can be mostly manual.

---

## 6. What decides the real prices (needed from you)

The placeholders cannot become prices without:

1. **Cost per company per month.** Hosting, backups, e-mail, and support time. Support time is the
   big one for accounting software.
2. **Competitor prices.** What do Macedonian SMBs pay today for Акцент and others, per month or per
   licence? I have no data on this. A few phone calls or price lists settle it.
3. **Is the selling company a VAT payer?** This decides whether prices show „+ ДДВ".
4. **Founding customer offer.** How many companies, what discount, for how long?
5. **Revenue target.** How many paying companies in year one, and at what average price?

**One observation, not a market fact:** 500 ден. is about €8 a month for a program that issues legal
invoices and VAT books for a whole company. That reads cheap, and cheap can read as "toy" to an
owner choosing what will hold their books. I would test the middle plan higher before settling, but
the competitor prices in point 2 decide it.
