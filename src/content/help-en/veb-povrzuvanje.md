---
title: How do I connect the app to my web store (WooCommerce)?
topic: webpage
screens: [webpage.settings]
module: webpage
related: [veb-shto-se-prakja, veb-ne-se-obnovil]
---
<!-- English translation of src/content/help/veb-povrzuvanje.md. Translate again when that file changes. -->

With the "Website" module, the app sends your WooCommerce store the name, code, price and stock of your products — by itself, after every change. Nothing is installed on WordPress; all you need is the address and two keys.

## In WooCommerce
1. In the store's admin, under WooCommerce → Settings → Advanced → REST API, create a new key with Read/Write permission.
2. Write down the two keys WooCommerce shows you: the consumer key (starts with ck_) and the consumer secret (starts with cs_).
3. Check: the store's currency is MKD, and prices are entered with tax included ("prices include tax"). For brands you need WooCommerce 9.6 or newer.

## In the app
1. At the top right, click your name, then **Settings**, then **Website**.
2. In **Store address**, enter the address, with https:// at the start.
3. In **Consumer key** and **Consumer secret**, paste the two keys.
4. In **Warehouses for web stock**, leave **All warehouses**, or untick it and choose which warehouses count.
5. Click **Save**. The app checks the connection right away — the same as **Test connection** does — and next to the buttons it says what the store answered. It should say "The connection is OK".
6. Here the app also checks whether the store accepts brands (WooCommerce 9.6 or newer), and then sends brands by itself. You only need **Test connection** if you want to check again.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/520"><img src="/help-img/webpage-povrzi.webp" alt="Website: the address, the keys and Test connection" width="1280" height="520" loading="lazy" decoding="async"><span class="shot-ring" style="left:10.45%;top:86.11%;width:10.11%;height:7.31%"></span><span class="shot-tag is-above is-right" style="bottom:13.89%;left:15.51%">Click here</span></span><figcaption>Website: the address, the keys and Test connection</figcaption></figure>
If it says "Wrong keys" or "The store is unreachable", check the keys and the address. If it says "The store's currency is not MKD", change the currency in WooCommerce.

Saved keys are not shown again — the fields say "The keys are saved".

## What happens after Save
Save sends nothing to the web. It saves the connection and checks it, and that is all. Not a single product goes to the store until you first compare the products and press **Apply**.

> **Important**
> Before the first **Apply**, changes in the app are not sent to the web. Before you press **Apply**, look through the lists and choose what to do for each row.

## Compare with the store
1. Click **Compare with the store**. The app reads the store and shows lists, without changing anything. Each row already carries its suggestion:
   - **Matched** — the same SKU (code) both in the app and on the web. Suggestion: **Link** — the product on the web gets the name, price and stock from the app. Or **Don’t send**.
   - **Will be created** — products with **Show on web** that are not in the store. Suggestion: **Create as draft** — you add the description and pictures on the web, and you publish it. Or **Don’t send**.
   - **Will be removed from web (hidden in the app)** — they are in the store, but in the app they do not have **Show on web**. Suggestion: **Link and remove from the web** — they go to the store's trash. Or **Leave on the web** — the app does not touch them.
   - **Same name, different SKU — confirm** — a product with the same name as one on the web, but with a different code. Here the app does not choose by itself: choose **Link**, **Create as draft** or **Don’t send**.
   - **SKU twice on the web — not linked** — a code that two or more products carry on the web. The app does not guess which is the right one. Fix the code on the web and compare again, or choose **Don’t send**. The products on the web with that code show in "On web, unknown here".
   - **On web, unknown here** — an SKU the app does not know. Those products are not touched; they are only shown.
2. Wherever you want something else, click the other choice in the **What to do** column. The choice is saved right away.
3. Click **Apply** and confirm.

**Don’t send** turns off **Show on web** for the product — this also shows in its History.

If something changes after the comparison — you enter a new product with **Show on web**, change a code, or the store changes — **Apply** does nothing and asks for a new comparison. Click **Compare with the store** again.

From **Apply** on, every change goes to the web by itself, in less than a minute. This applies to every product with **Show on web**, and to one entered later: with its next change it is created on the web as a draft, or, if the store already has one product with the same code, it is linked to it. If two products on the web carry that code, the app does not guess: the product is not sent and sits in the **Errors** list with "Two products on the web carry this product's code". Fix the code on the web; the app tries again by itself.

> **Note**
> The buttons (**Save**, **Test connection**, **Compare with the store**, **Apply**, **Check everything**, **Fix everything**, **Retry**) and the choice in **What to do** are seen only by an account with the "Manage website" permission. An account with only "View sync" sees the lists and the choices, but changes nothing.

If you later change the store's address, the app asks first: the links to the products are deleted, and so are the comparison and the last check (**Check everything**) with the old store, and with the new store you start again with **Compare with the store**.
