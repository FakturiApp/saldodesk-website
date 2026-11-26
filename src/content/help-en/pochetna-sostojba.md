---
title: How do I enter my opening stock when I start with the app?
topic: documents
screens: [documents.view.opening, dataimport.settings]
module: null
top: false
related: [vchitaj-podatoci, popis]
refusals: [document.opening_already_entered, document.opening_locked]
---
<!-- English translation of src/content/help/pochetna-sostojba.md. Translate again when that file changes. -->

The opening balance is the stock you have on the day you start with the app: how many pieces of each product there are and at what cost price. It isn't typed by hand. It is imported from the same Excel file from your old program that you import the products from.

1. First import the products — see [How do I bring in partners and products from my old program?](../vchitaj-podatoci/). For a product that isn't in the app, the opening balance creates it with only a code and name, without a selling price, category or brand.
2. At the top right, click your name, then **Settings**, then **Import data**.
3. In **What to import**, choose **Products**, and in **File**, choose the same file.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/600"><img src="/help-img/en/documents-pochetna-vchitaj.webp" alt="Import data, with Products chosen" width="1280" height="600" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:69.02%;width:7.89%;height:6.50%"></span><span class="shot-tag is-above is-right" style="bottom:30.98%;left:7.77%">Click here</span></span><figcaption>Import data, with Products chosen</figcaption></figure>
4. In **Columns**, check which **Field in the app** each column goes into. Four matter for the opening balance: **Item code**, **Name**, **Quantity** (how much is in stock) and **Cost price**. For products with serial numbers or batches, also **Serial numbers**, **Batch** and **Expiry** — see below.
5. In the **Opening balance** section, click **Set opening balance** and confirm.

The app shows what it did:
- **Line items** — how many rows went into stock. A product in two batches is two rows.
- **No stock** — rows with quantity 0. They are not entered.
- **Already opened** — rows of products that already have an opening balance. They are not entered twice.
- **Held back** — rows that were not entered: a negative quantity, a quantity or cost price that is not a number, the same row twice, or for example when the number of serial numbers doesn't equal the quantity. Below the numbers, in **Rows held back**, it shows the row in Excel, the product and why.
- **Value** — the value of the stock that came in, at cost price. The rows held back are not in it.
- **Rounding difference** — the cost price is rounded to two decimals, and this shows how much that changed the value.

All the opening stock goes into the main warehouse. If the goods are in several warehouses, move them with a transfer — see [How do I move goods from one warehouse to another?](../prenos-megju-magacini/).

## Serial numbers and batches
Serial numbers and batches come in with the same file.

- **Serial numbers** — for a product tracked by serial number: the numbers of all units in one row, separated by a comma, semicolon, space or new line. One number for each unit.
- **Batch** and **Expiry** — for a product tracked by batch: the batch and its expiry date, for example 31.03.2027. A product in several batches is written in several rows with the same code, one row for each batch.

Numbers and batches are accepted only for a product that has them turned on. So first turn them on for the product, then set the opening balance. See [How do I track devices by serial number?](../seriski-broevi/) and [How do I track batches and expiry dates?](../serii-i-rokovi/).

A row that can't be entered the way it is written is held back, and the others are entered. That happens when the number of serial numbers doesn't equal the quantity, when the same number appears twice or the product already has it, when the product isn't tracked by serial number or by batch, when the expiry date can't be read, when the same row (same code, batch and serial numbers) appears twice, when the same batch is in two rows with a different quantity, cost price or expiry date, when the same batch has a different expiry date in a row for other units (one batch has one expiry date), and when the batch is already recorded with a different expiry date. If one row of a product is held back, its other rows are held back too, so the product comes in whole. The same goes when a row of the product has a quantity or cost price that is not a number, or a negative quantity — that row is in **Rows held back** too, with the reason. Fix the rows in the file and set the opening balance again.

## Where the document is
Each import makes an **Opening balance** document. You find it in **Documents** → **Purchasing**, under **Opening balance**. A large file becomes several such documents. The opening balance can't be changed or cancelled.

## Only once
The opening balance can be set only while there is no issued document at all. After the first issued invoice, goods receipt or other document, the app refuses it. From then on, a wrong quantity is fixed with a stocktake or an adjustment — see [How do I do a stocktake?](../popis/) and [Write-off, adjustment or scrap — which one when?](../trebovanje-nivelacija-otpis/).

If you forgot some products and there is still no issued document, add them to the file and set the opening balance again. Products that already have an opening balance are skipped. If all products already have one, the app says "The opening balance for these products is already entered."

> **Important**
> If you were trying out the app and issued documents, the opening balance is locked. First delete the test data with "Start over" — see How do I delete the test data before the real work?. After that, the opening balance can be imported again.
