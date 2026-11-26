---
title: Where is the VAT sales book and what is in it?
topic: vat
screens: [vat.outgoing]
module: null
top: false
related: [vlezna-kniga, ddv-04, podnesen-ddv-period]
---
<!-- English translation of src/content/help/izlezna-kniga.md. Translate again when that file changes. -->

The sales book shows all the documents you issued, with the base and VAT by rate. You find it in **Reports** → **VAT**.

1. At the top, click **Reports**, then **VAT**. The **Sales VAT book** opens, for the period we are in today.
2. Pick **Month** or **Quarter**.
3. Use the ‹ and › arrows to go to the previous or next period. Under the period it says whether it is **Open** or filed and locked.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/vat-izlezna-kniga.webp" alt="Sales VAT book" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:12.63%;top:28.24%;width:2.03%;height:3.33%"></span><span class="shot-tag is-above is-right" style="bottom:71.76%;left:13.65%">Click here</span></span><figcaption>Sales VAT book</figcaption></figure>
4. At the top are the totals: **Total** without VAT, **Total VAT**, **Total** with VAT and **Documents**. Under them are the base and VAT for 18 %, 10 % and 5 %, and **0 % / exempt**.
5. Click a row to open the document.
6. **Export to Excel** takes the whole book for the period.

## What is in the book
- Every issued document is its own row: an invoice, an export invoice, an advance invoice, and each fiscal receipt separately.
- A storno and a credit note are with a minus, a debit note with a plus.
- An invoice reduced by an advance shows the amounts after the deduction.
- A return note is not in the book — its credit note is.
- Quotes, proformas, dispatch notes, drafts and cancelled documents are not in the book.
- The customer and tax number are as they were on the document when it was issued. If you change the partner later, the book does not change.

The total without VAT is the Turnover for the same period, plus the advance invoices, minus the advances used. **Turnover for the same period →** opens that turnover in **Reports**.

## Advances without an advance invoice
If a customer paid an advance in the period and there is no advance invoice, it says above the table how many such advances there are. Click **show** to see the payments. Clicking a payment opens it, and **Issue an advance invoice** is there. Only an account with the **View payments & debt** permission sees the list of payments and the **show** button; others see only the count and the amount. An account with the **Create & edit** and **Record & void payments** permissions has **Issue an advance invoice**.

## Monthly or quarterly
The book opens by the company's VAT period. Every company starts with quarterly. If UJP (the Public Revenue Office) has set you to monthly, change it in **Settings** → **Company**, in the **Sales and documents** section, the **VAT period** field.

## Who sees it
Every account with the **View reports** permission sees the sales book. **Purchase VAT book**, **VAT-04** and **For the accountant** also need **View payments & debt**. Without it, those buttons are not there.
