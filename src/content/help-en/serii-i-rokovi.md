---
title: How do I track batches and expiry dates?
topic: products
screens: [products.window.enable_batches]
module: warehouse
refusals: [products.series_expiry_differs]
top: false
related: [seriski-broevi, nov-proizvod, zaliha-na-proizvod]
---
<!-- English translation of src/content/help/serii-i-rokovi.md. Translate again when that file changes. -->

A batch is goods that arrived together and have the same expiry date — for example ink from one delivery. When a product is tracked by batch, the app knows how much there is of each batch, in which warehouse, and until when it lasts.

## How to turn them on
- On a new product: tick **Batches / expiry** before you click **Save**.
- On a product that already exists: open it and tick **Batches / expiry**. The **Enable batches / expiry** window opens.

In the window:
1. For each warehouse that holds the product, write the batches — one per line: the batch number, the quantity and the expiry date (year-month-day). For example: LC2406 5 2027-06-30.
2. The quantities must add up to exactly what is in that warehouse. Otherwise the app does not save.
3. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/products-serii-vkluchi.webp" alt="The Enable batches / expiry window" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:31.25%;top:26.39%;width:36.72%;height:18.61%"></span><span class="shot-tag is-above is-right" style="bottom:73.61%;left:49.61%">Click here</span></span><figcaption>The Enable batches / expiry window</figcaption></figure>
If the product has no stock, the window says "No stock — tracking is turned on right away." Just click **Save**.

A service has no batches.

## On receipt (goods receipt, supplier invoice, foreign-currency invoice)
Under the line it says **Batch**. Write the batch from the packaging. If you already have that batch, the app suggests it as you type.

Next to the batch it says **Expiry**:
- A new batch — enter the expiry date from the packaging (day.month.year). If the goods have no expiry date, leave the field empty.
- A batch you already have — the expiry date is already recorded and is only shown. You do not write it again.
- A batch you have, but without an expiry date — enter the date, and the batch gets it when you issue the document.

The expiry date belongs to the batch, not the document. So one batch has one expiry date: if you write a different date on the line for a batch that already has one, **Issue** fails and tells you which date the batch has. Check the packaging — if the date is different, it is a different batch, so enter it under its own number.

Check the expiry date before **Issue**. While the document is a draft, the date can be changed.

If after **Issue** you see that the expiry date is wrong:
- The batch came only with this document — click **Edit**, fix the date and click **Save**. The batch's expiry date is corrected.
- You cancelled the document — enter the correct date on the next receipt of that batch. The batch gets it.
- The same batch also came with another document that is still valid — the date does not change, because those goods were already received with it.

## On sale (invoice, dispatch note…)
Under the line it says **Batch**, with a list. The app itself picks the batch that is in stock and expires first. Next to each batch in the list you see its expiry date and how much there is. If you are taking the goods from a different batch, choose that one.
It is the same on the other documents that take goods out, for example on a transfer.

## Where to see them
Open the product and click the **Stock** tab. Below the warehouses is the **Series on stock** table: each batch, its **Expiry** and how much there is. The batches in stock come first, by expiry date — the nearest first.

> **Important**
> Batches can be turned off only when the product has no stock — 0 in every warehouse, and no sale issued without stock that is still waiting for goods. While there is stock or a shortfall, the field is locked and next to it it says "Cannot be turned off while there is stock or a shortfall".
