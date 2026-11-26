---
title: How do I do a stocktake?
topic: documents
screens: [documents.new.stocktake, documents.view.stocktake, documents.window.stocktake_refs, documents.window.stocktake_serials]
module: null
top: false
related: [trebovanje-nivelacija-otpis, prenos-megju-magacini, popisni-preseci]
---
<!-- English translation of src/content/help/popis.md. Translate again when that file changes. -->

With a stocktake you count the goods in one warehouse. The app compares what you counted with what it has on record, and fixes the differences by itself. While the stocktake is running, sales can go on.

## Start
1. At the top, click **Documents**, then **Internal**.
2. Click **Stocktake**, then the blue "+" button. **New stocktake** opens.
3. If the company has several warehouses, choose in **Warehouse** which one you are counting. Check the **Date**.
4. In **Products on the sheet**, choose which products go on the sheet:
   - **In stock** — the products that are in the warehouse (this is the default).
   - **All products** — all of the company's products, including those not in the warehouse (with 0). Services are not on the sheet.
5. Click **New stocktake**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/600"><img src="/help-img/buy-popis-nov.webp" alt="Starting a new stocktake" width="1280" height="600" loading="lazy" decoding="async"><span class="shot-ring" style="left:55.70%;top:54.09%;width:7.99%;height:6.00%"></span><span class="shot-tag is-above is-left" style="bottom:45.91%;right:40.31%">Click here</span></span><figcaption>Starting a new stocktake</figcaption></figure>
The sheet opens. **In system** shows how much there is according to the app.

## Counting
6. In **Counted qty**, enter how much you really counted. An empty field means "not counted yet". If there isn't a single piece on the shelf, enter 0.
7. You look for a product in the **Search…** field, by code, name or barcode. **Only uncounted** shows only the products that are not counted yet.
8. With a barcode reader: in **Scanning**, scan the codes, one per line ("code quantity" works too), then click **Add scanned**.
9. Click **Save this page** often. With **Next** and **Previous** you go to another page, and the page you leave is saved.

If you scan a product that isn't on the sheet, it is added to the stocktake and counted. At the top it says "Added to the stocktake:" and its code. "Not found among the products" means the code isn't on any product, or it is on a service — it isn't counted. A code that two products have isn't counted — enter it by hand.

## Finish
10. When you're done, click **Finish stock-take**.
11. If there were sales, receipts or transfers from that warehouse while you were counting, the **Counted documents** window opens. Tick the documents whose goods are already in your count, then continue.
12. If what you counted differs for a product with serial numbers, the **Serial numbers — differences** window opens. Choose which pieces are missing, enter the ones found, or click **Don’t know**. With **Don’t know**, a draft adjustment is made for that product, and the stocktake finishes without it.
13. If you didn't count some products, the app asks whether to finish the stocktake with what was counted. For the rest it makes a draft adjustment. A product you didn't count that has 0 in the system and didn't move while you were counting is just removed from the stocktake — it doesn't go into the adjustment.

The stocktake gets a number. The stock in the warehouse is now what you counted. The app values the differences by itself at cost price — you don't enter a price.

> **Important**
> Finish the stocktake on the same screen, without closing it. What you counted and saved stays, but an unfinished stocktake can't be opened again for counting from **Documents**.
