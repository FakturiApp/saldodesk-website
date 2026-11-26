---
title: How do I see which products are running low?
topic: products
screens: [products.low_stock, products.window.bulk_minimum, products.window.fetch]
module: warehouse
top: false
related: [lista-za-narachka, magacini, zaliha-na-proizvod]
---
<!-- English translation of src/content/help/niska-zaliha.md. Translate again when that file changes. -->

The app gathers the products that are below their minimum stock on one screen, **Low stock**. For it to work, the products first need a minimum stock.

The **Low stock** screen and the minimum stock are there only when the company has both "Warehouse management" and "Purchasing".

## First: set a minimum stock
For one product:
1. Open the product in **Products**.
2. On the **Basic** tab, open the **Purchasing** section.
3. Enter the **Minimum stock** — the least there should be in the whole company. If you like, also enter a **Reorder quantity** (how much is ordered at once) and a **Default supplier**.
4. Click **Save**.

For many products at once:
1. In **Products**, click **Set minimum**.
2. Pick a **Category**, enter a **Minimum stock** and/or a **Reorder quantity**.
3. Click **Set minimum**. The number applies to all products in that category and in all its subcategories, down to the lowest level. Services do not get a minimum.

If a warehouse needs to keep its own stock (for example a shop), open the product, the **Stock** tab, and enter a number in **Min. stock** in that warehouse's row. A warehouse without its own number does not warn.

## The Low stock screen
1. In **Products**, click **Low stock**.
2. For each product it says how much is **Free** (in stock, minus what is reserved), what the **Minimum** is and how much is **Short**.
3. The **Level** column tells you where the shortage is:
   - **Company** — there is not enough in the whole company. Click **Add to order**: the product goes onto the **Order list**. If the product has no default supplier, the app asks who to order it from.
   - **Warehouse** — only that warehouse is below its number. If another warehouse has free goods, there is a **Fetch from warehouse** button — see [How do I request goods from another warehouse?](../barania-od-magacin/). If under **Short** it also says "the company is low by …", the goods are short in the whole company too — then there is also **Add to order**.
4. At the top you can pick just one warehouse or just one supplier.

The **State** column says what has already been done, for example "Request sent" or "On the order list". When the goods arrive, the product leaves the screen by itself.

> **Important**
> A product's minimum stock is for the whole company, not for each warehouse. A warehouse warns only if it has its own **Min. stock** on the **Stock** tab.
