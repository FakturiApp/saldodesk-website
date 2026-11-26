---
title: How do I give a customer an agreed discount?
topic: partners
screens: [partners.view.discounts]
module: null
top: false
related: [partner-kartichka, napravi-faktura, partner-kreditni-limit]
---
<!-- English translation of src/content/help/partner-popust.md. Translate again when that file changes. -->

The agreed discount is entered once, on the customer. After that it is offered by itself on every new sales document for them.

1. Open the customer (in **Partners**, click their name).
2. Click **Discounts**.
3. In **Applies to**, choose: **Everything** (all products), **Brand** or **Category**.
4. If you chose a brand or a category, choose which one in **Brand / Category**.
5. In **Type**, choose % or **Fixed amount**.
6. In **Value**, enter how much, for example 10.
7. Click **Add rule**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/partners-popusti.webp" alt="The Discounts tab and the Add rule button" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:53.16%;top:86.85%;width:6.76%;height:5.00%"></span><span class="shot-tag is-above is-left" style="bottom:13.15%;right:43.46%">Click here</span></span><figcaption>The Discounts tab and the Add rule button</figcaption></figure>
## Several rules
A customer can have several rules, for example 10 % on everything and 15 % on one brand.
- A rule for a category or brand also applies to all their subcategories and sub-brands.
- When several rules apply to one product, the narrowest one wins — the one deepest in its category or brand. For example, if "Toners" is a subcategory of "Consumables", for a toner 15 % on "Toners" comes before 10 % on "Consumables". The **Everything** rule applies only if no other one fits.
- Only between rules on the same level does the order decide: the first one from the top wins. You change the order with the arrows ↑ and ↓ in the **Priority** column.

A rule is deleted with **Delete** in its row. The discount is then no longer offered.

## On the invoice
When you choose a product on a new invoice for that customer, **Disc. %** fills in by itself. You can change the percentage by hand, on that line only. A fixed amount shows by itself below **Disc. %**, as "−amount ✕"; it can't be changed, only removed with ✕.

The discount is offered only on sales. It is not offered on purchasing (goods receipt, incoming invoice), where the price from the supplier's invoice applies, nor on an export invoice.
