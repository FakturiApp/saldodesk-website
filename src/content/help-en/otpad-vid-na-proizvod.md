---
title: How do I give a package type to a product or a whole category?
topic: waste
screens: [waste.tab.products, waste.window.assign_type, products.view.waste]
refusals: [waste.bulk_too_many]
module: waste
top: false
related: [otpad-vidovi-pakuvanje, otpad-amballaza-na-devizna, otpad-mesechen-izveshtaj]
---
<!-- English translation of src/content/help/otpad-vid-na-proizvod.md. Translate again when that file changes. -->

Every product you import needs a package type. A product without a type is not counted in the monthly report and shows up as a warning.

## Which type applies
The app takes the first one that exists:
1. a type chosen for one shipment only, on the import invoice;
2. the product's own type;
3. the type of its category (or of the nearest parent category that has a type);
4. nothing — "no type", a warning.

So the fastest way is to give the type to a whole category, and an own type only to the products that are packed differently.

## To a whole category
1. At the top, click **Waste**, then **Settings**.
2. In **Package type per category**, choose a type in the category's row. It is saved right away.

The type applies to all products and subcategories that don't have their own type. A subcategory shows "inherits: …" and which category it comes from.

## To one product
1. In **Waste**, click **Products**.
2. In the **Type** column, in the product's row, choose a type. It is saved right away, and "own" appears next to it.
3. If there is a suggestion in **Suggestion** (the type of products with a similar name or from the same category), click **Accept**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1100"><img src="/help-img/en/waste-proizvodi-prifati.webp" alt="The Products list and the Accept button" width="1280" height="1100" loading="lazy" decoding="async"><span class="shot-ring" style="left:70.78%;top:72.55%;width:6.05%;height:3.45%"></span><span class="shot-tag is-above is-left" style="bottom:27.45%;right:26.19%">Click here</span></span><figcaption>The Products list and the Accept button</figcaption></figure>
The choice "no own type (follows category)" removes the own type — the product takes the category's type again.

You can do the same from the product card: the **Packaging** tab, the **Own type** field, then **Save**.

## To many products at once
1. In **Products**, tick the products (the box left of the code).
2. Click **Set type**. **Set the type of the selected** opens.
3. In **Type**, choose the type and click **Set type**.

You can tick at most 1.000 products at once. For more, use a filter.

A filter is even faster: for example, turn on **Only without a type** or choose a category or supplier. A button "Set the type of all … in the filter" then appears — it sets the type on all products in the filter, on the other pages too.

**Only without a type** shows the products that are not counted. **Include inactive** adds the inactive products too.

> **Important**
> A product's own type always comes before the category's type. If you change the category's type, products with their own type don't change.
