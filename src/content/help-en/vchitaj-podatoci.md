---
title: How do I bring in partners and products from my old program?
topic: dataimport
screens: [dataimport.settings]
module: null
top: false
related: [podatoci-za-firmata, pochetna-sostojba]
---
<!-- English translation of src/content/help/vchitaj-podatoci.md. Translate again when that file changes. -->

You do not have to type partners and products one by one. Export them from the old program to Excel (.xls or .xlsx) and import them in **Settings** → **Import data**. Nothing is written until you have seen the preview.

1. At the top right, click your name, then **Settings**.
2. Click **Import data**.
3. In **What to import**, choose **Partners** or **Products**.
4. Under **File**, choose the Excel file. If you do not have one, click **Download template** and fill it in.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/600"><img src="/help-img/en/settings-vchitaj.webp" alt="Import data" width="1280" height="600" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:69.02%;width:7.89%;height:6.50%"></span><span class="shot-tag is-above is-right" style="bottom:30.98%;left:7.77%">Click here</span></span><figcaption>Import data</figcaption></figure>
5. **Columns** opens: for each column of the file, the **Field in the app** it goes into is already chosen. Fix the wrong ones. Leave a column you do not need on **— do not import —**. The choice is remembered for next time.
6. Click **Preview**.
7. **Preview** shows how many records are **New**, **Changed**, **Unchanged** and **Rejected**. For the rejected ones, **Details** says why (for example "no code").
8. If it is all right, click **Import** and confirm.

Records are recognized by **Code**. If you import the file again, an existing partner or product with the same code is updated, not made twice.

For products, categories and brands the app does not have are created if **Create the categories and brands the app does not have yet** is ticked.

## Opening stock
Importing products does not set the stock. That is a separate step, from the same file, in the **Starting count** section. The serial numbers and the batches with their expiry dates come in with the same file, in the **Serial numbers**, **Batch** and **Expiry** columns. They are not written on the product, only on the opening stock. Each product gets a starting count only once, and only while there is no issued document (not even a test one) — see [How do I enter opening stock when I start using the app?](../pochetna-sostojba/).

## Fill from UJP
In the **Fill from UJP** section, click **Fill from UJP**. For every partner with a tax number, the app fetches the official name, address and whether they are registered for VAT. For this, the company needs an EPDD ID entered in **Company**. Where they differ, the UJP (Public Revenue Office) data replaces yours. A partner that has no VAT number in UJP will no longer have a VAT number on invoices, even if you entered one. The app asks first, and records every change in a list you can download.

All past imports are in **Past imports**. With **Download** you get the list of what was changed.
