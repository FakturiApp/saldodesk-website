---
title: Why didn't the product update on the web store?
topic: webpage
screens: [webpage.settings]
module: webpage
top: false
related: [veb-shto-se-prakja, veb-povrzuvanje]
---
<!-- English translation of src/content/help/veb-ne-se-obnovil.md. Translate again when that file changes. -->

A change usually reaches the web in less than a minute. If it has not, check the things below, in order.

## 1. The product
Open the product, the **Basic** tab:
- whether **Show on web** is ticked and whether the product is **Active** — if not, it is not sent, but removed from the web;
- whether it has a **Selling price** — a product without a price goes without a price, and the old price on the web stays.

## 2. The stock
What goes to the web is the free stock: what is on the shelf, minus what is reserved for customers. If the web shows less than the shelf, check whether some of it is reserved.

Only the warehouses in **Warehouses for web stock** (**Settings** → **Website**) count. Goods in another warehouse do not count.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/520"><img src="/help-img/webpage-magacini.webp" alt="Warehouses for web stock" width="1280" height="520" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.20%;top:78.90%;width:9.13%;height:3.85%"></span><span class="shot-tag is-above is-right" style="bottom:21.10%;left:7.77%">Click here</span></span><figcaption>Warehouses for web stock</figcaption></figure>
## 3. What Website says
In **Settings** → **Website**, once the store is connected, the figures are at the top:
- **Pending** — changes that have not been sent yet;
- **Errors** — changes that failed three times;
- **Products without a price**;
- **Last pushed** — when the app last sent something.

If the store is unreachable, nothing is lost: the changes wait, and the app tries again — after 1 minute, after 5, after 30, then every hour. After three failed attempts, the product appears in the **Errors** list, with the reason. When you have fixed the problem, click **Retry** in its row.

## 4. Check everything
**Check everything** reads the whole store and compares it with the app. After the check, the table shows every difference: **Field**, **In the app** and **On the web**. **Fix everything** sends the values from the app — the app always wins.

The app does the same check and fix by itself every night. When the last one was is shown in **Last check**.

## What is not an error
The app does not send the description and pictures — those are changed only in WooCommerce. Whether a product is published or a draft is also decided on the web: the app creates a new product as a draft, and one brought back from the trash gets the status it had. A difference in these is not an error.
