---
title: Where is the purchase VAT book and what is in it?
topic: vat
screens: [vat.incoming]
module: null
top: false
related: [izlezna-kniga, ddv-04, za-smetkovoditelot, devizna-troshoci]
---
<!-- English translation of src/content/help/vlezna-kniga.md. Translate again when that file changes. -->

The purchase book shows the invoices you received from suppliers. You find it in **Reports** → **VAT** → **Purchase VAT book**.

1. At the top, click **Reports**, then **VAT**.
2. Click **Purchase VAT book**.
3. Choose **Month** or **Quarter** and use the arrows ‹ and › to go to the period.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/vat-vlezna-kniga.webp" alt="Purchase VAT book" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:12.01%;top:34.14%;width:11.68%;height:3.78%"></span><span class="shot-tag is-above is-right" style="bottom:65.86%;left:17.85%">Click here</span></span><figcaption>Purchase VAT book</figcaption></figure>
4. At the top are the totals, and the base and VAT by rate, the same as in the sales book.
5. Click a row to open the document.
6. **Export to Excel** takes the whole book for the period, with the import section.

## What is in the book
- Receipt invoice (the supplier's invoice for the goods).
- Received credit/debit note: a credit from a supplier with a minus, a debit with a plus.
- Cost invoice from a domestic supplier.
- The goods receipt is not in the book. What goes into the book is the Receipt invoice you enter for it.
- A cost invoice from a foreign supplier is not here. You see it in **For the accountant**.

The period is decided by the **Receipt date** — the day the invoice reached you, not the date the supplier wrote (**Invoice date**). So an invoice that arrived late goes into the period when you received it.

## VAT that is not deductible
If **VAT not deductible** is ticked on the invoice, it is in the book, but its VAT is gray, marked **not deducted**. The **Total VAT** shows how much of it is not deducted.

## Imports — VAT paid at customs
Below the book is the **Imports — VAT paid at customs** section: one row for each item on the foreign-currency invoice, by its receipt date.
- VAT paid at customs is deducted, unless **in cost** is ticked in the costs of the foreign-currency invoice. Then it says "in cost price — not deducted".
- The base is the VAT divided by the **Rate %**. If the rate has not been entered, a yellow notice appears. Enter the rate from the customs declaration in the costs of the foreign-currency invoice — see [How do I enter import costs and finalize the foreign-currency invoice?](../devizna-troshoci/).
- VAT from the freight forwarder's bill is not here. That bill is a separate incoming invoice.

## Who sees it
The purchase book needs two permissions: **View reports** and **View payments & debt**. Without the second one, the **Purchase VAT book** button is not there.
