---
title: What from a product goes to the web store?
topic: webpage
screens: [webpage.settings, products.view.basic]
module: webpage
top: false
related: [veb-povrzuvanje, veb-ne-se-obnovil]
---
<!-- English translation of src/content/help/veb-shto-se-prakja.md. Translate again when that file changes. -->

Only a product with **Show on web** ticked on its card goes to the web. The sync is one-way: the app sends, and reads nothing back from the web.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/800"><img src="/help-img/webpage-na-veb.webp" alt="The Show on web box on the product card" width="1280" height="800" loading="lazy" decoding="async"><span class="shot-ring" style="left:70.07%;top:48.70%;width:10.06%;height:2.50%"></span><span class="shot-tag is-above is-left" style="bottom:51.30%;right:24.90%">Click here</span></span><figcaption>The Show on web box on the product card</figcaption></figure>
## What the app sends
The app is in charge of these fields. If someone changes them on the web, the app puts them back — at the product's next change or at the nightly check:
- name;
- code (SKU on the web);
- price = **Selling price** plus VAT, rounded to two decimals;
- stock — the free stock in the warehouses chosen in **Warehouses for web stock**: what is on the shelf, minus what is reserved for customers; if it comes out below zero, the web shows 0;
- category (with its parent categories);
- brand — if the store accepts brands (WooCommerce 9.6 or newer); **Test connection** checks this.

## What stays on the web
You change these only in WooCommerce; the app does not touch them:
- the description;
- the pictures;
- whether the product is published or a draft;
- the categories and brands the store made itself;
- everything else in WooCommerce.

## When it is sent
A change goes to the web by itself, usually in less than a minute: when you save the product, when the stock changes (an issued invoice, goods receipt…), when a reservation is made or released, when a category or brand is renamed.

## New, hidden and archived products
- A new product with **Show on web** is created in the store as a draft. You publish it, once you have added a description and pictures.
- If you untick **Show on web**, or the product is no longer **Active**, the product goes to the store's trash. If you tick it again, the same product comes back from the trash; if the trash has already been emptied, it is created again, as a draft.
- Categories and brands are never deleted from the store.
- A product without a **Selling price** goes without a price — the app does not send 0,00. It is counted in "Products without a price".
- A service goes without stock.

> **Important**
> The price on the web is always the **Selling price** with VAT. Discounts or dealer prices are not sent.
