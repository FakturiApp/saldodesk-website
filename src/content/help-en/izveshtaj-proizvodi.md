---
title: Which products sell the most, and how much stock have we received?
topic: reports
screens: [reports.products]
module: null
top: false
related: [izveshtaj-po-period, bavni-proizvodi, sporedba-na-periodi]
---
<!-- English translation of src/content/help/izveshtaj-proizvodi.md. Translate again when that file changes. -->

Both are in **Reports** → **Products**: **Sold** shows what went out to customers, **Received** what came in from suppliers.

## Sold
1. At the top, click **Reports**, then **Products**.
2. Pick a period, just as in **By period**: **This month**, **Last month**… or **Custom period**.
3. Pick how to group: **Product**, **Category** or **Brand**.
4. Pick the order: **By turnover**, **By quantity**, **By profit** or **Lowest margin**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/reports-proizvodi.webp" alt="Products in Reports" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:20.83%;top:57.60%;width:6.72%;height:3.78%"></span><span class="shot-tag is-above is-right" style="bottom:42.40%;left:24.19%">Click here</span></span><figcaption>Products in Reports</figcaption></figure>
5. Click a product's name to open its card. A click on a category or brand shows the products in it.
6. **Export to Excel** takes the same list, with the same filters.

What the rows mean:
- **Quantity** is what was sold minus what came back with a return note.
- The **service** tag means the product is a service — it has no cost.
- **Free-text lines** are lines written without a product.
- Under the buttons it may say "Document rounding". With it, the total is the same as in **By period**.

## Received
1. In **Products**, click **Received**.
2. Pick the period and grouping, just as above. Order: **By value** or **By quantity**.
3. The partner field is now **Supplier** — pick one if you want only their goods.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/reports-primeno.webp" alt="Received in Reports" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:6.82%;top:55.82%;width:6.59%;height:3.78%"></span><span class="shot-tag is-above is-right" style="bottom:44.18%;left:10.11%">Click here</span></span><figcaption>Received in Reports</figcaption></figure>
What counts:
- Goods receipt, receipt invoice and import invoice, issued only.
- Goods returned to a supplier (a received credit note with goods) are subtracted.
- A goods receipt with its receipt invoice counts once, on the date of the receipt invoice.
- Transfers, opening balance, adjustment, stocktake and return notes from customers do not count.
- The value is the cost without VAT, in denars.
- A line without a cost is in the quantity but not in the value. Then it says at the top how many such lines there are.

## If you do not see the values
Only an account with the **Costs & margins** right sees the cost, profit, margin and the value of received goods. Without it, you see the quantities and the number of documents.
