---
title: Selling, dealer and cost price — which is which?
topic: products
screens: [products.view.basic, products.new, products.view.stock]
module: null
top: false
related: [nov-proizvod, promeni-ceni, zaliha-na-proizvod, nabavna-nepoznata, devizna-troshoci, promeni-na-proizvod, novi-ceni-od-nabavka]
---
<!-- English translation of src/content/help/ceni-na-proizvod.md. Translate again when that file changes. -->

Every product has three prices. You enter two of them, and the app calculates the third.

- **Selling price** — the price for customers. It fills in by itself when you put the product on an invoice.
- **Dealer price** — a lower price for dealers. It is not required.
- **Cost price** — what the product costs you. You don't enter it by hand: it is calculated from goods receipts and from supplier invoices.

## How do I change the selling or dealer price
1. In **Products**, click the product.
2. On the **Basic** tab, enter the new price in **Selling price** or **Dealer price**. Both are without VAT. If you know the price with VAT, enter it in **Price incl. VAT** under it — the other field is calculated by itself.
3. Click **Save**.

A price you enter with VAT stays whole. For that, the price without VAT is kept with four decimals: 100 with 18 % VAT is 84,7458 without VAT, so in Products, on the label, on the invoice and towards UJP (the Public Revenue Office) it reads exactly 100,00. A price you write without VAT stays exactly as written.

If you want to see the price without VAT with two decimals (84,75), in **My profile**, under **Money format**, pick **2 decimals** under **Price without VAT**. This changes only what you see — the saved price and the price with VAT stay the same.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/800"><img src="/help-img/en/products-ceni-forma.webp" alt="The product's prices" width="1280" height="800" loading="lazy" decoding="async"><span class="shot-ring" style="left:34.77%;top:69.07%;width:10.00%;height:4.75%"></span><span class="shot-tag is-above is-right" style="bottom:30.93%;left:39.77%">Click here</span></span><figcaption>The product's prices</figcaption></figure>
Documents already made keep the old prices. The new price applies to the next documents. For who changed the price and when, see [Who changed the price or something else on the product, and when?](../promeni-na-proizvod/).

If the dealer price is higher than the selling price, it says "The dealer price is higher than the selling price." under it. That is only a warning — you can save.

## Markup
Next to the prices are **Selling markup %** and **Dealer markup %**. That is the percentage above cost that the app uses to suggest new prices when a new purchase arrives. If you leave them empty, the category's markup applies. Under the field it says which category it comes from.

The markup on its own does not change any price. See [How do I change selling prices when a new purchase arrives?](../novi-ceni-od-nabavka/). Only accounts with the **Costs & margins** permission see it.

## How do I sell at the dealer price
1. On the invoice, pick the product.
2. A strip with the prices opens under the line. Click **Dealer price**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/800"><img src="/help-img/en/products-dilerska-cena.webp" alt="The dealer price under the invoice line" width="1280" height="800" loading="lazy" decoding="async"><span class="shot-ring" style="left:45.47%;top:78.41%;width:13.88%;height:2.88%"></span><span class="shot-tag is-above is-left" style="bottom:21.59%;right:47.59%">Click here</span></span><figcaption>The dealer price under the invoice line</figcaption></figure>
3. The line's **Price** becomes the dealer price. If the strip is not there, click the ▾ arrow next to the product name.

## Where do I see the cost price
Open the product and click the **Stock** tab. The top shows **Cost price** and **Cost incl. VAT**, and the table shows the cost in each warehouse. **Products** also has **Cost price** and **Margin %** columns.

The cost is the average of what you paid for the goods still in stock. When a new purchase arrives, it is calculated again. If it says "unknown" instead of a cost price, see [What does "unknown" mean instead of a cost price?](../nabavna-nepoznata/).

If the **Stock** tab says "The cost is not final — the import is not finalized", the import's price is not closed yet. When the import is finalized, the cost corrects itself — see [How do I enter import costs and finalize the import invoice?](../devizna-troshoci/).

Only accounts with the **Costs & margins** permission see the cost price. If you don't have it on screen, ask the administrator.
