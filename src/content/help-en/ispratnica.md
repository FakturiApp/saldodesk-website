---
title: How do I make a dispatch note?
topic: documents
screens: [documents.new.delivery, documents.view.delivery]
module: null
top: false
related: [faktura-od-ispratnica, nema-zaliha, napravi-faktura]
---
<!-- English translation of src/content/help/ispratnica.md. Translate again when that file changes. -->

You write a dispatch note when the goods leave for the customer before the invoice. The goods leave stock right away, and you make the invoice later, from the dispatch note.

1. At the top, click **Documents**, then **Sales**.
2. Click **Dispatch note**, then the blue "+" button at the end of the row of document types.
3. **New document** opens with **Dispatch note** selected. In **Partner**, pick the customer. **Date** is the delivery date — the day the goods leave. The same date also goes on the invoice made from the dispatch note.
4. If the company has more than one warehouse, pick in **Warehouse** which one the goods leave from.
5. In **Product**, pick the product. In **Qty**, enter the quantity. **Price** fills in by itself. The customer pays by the invoice, not by the dispatch note.
6. If the product has serial numbers, the app asks you to pick the pieces that are leaving.
7. Click **Issue**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/sell-ispratnica-izdadi.webp" alt="A filled-in dispatch note and the Issue button" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:90.41%;top:92.77%;width:4.98%;height:4.00%"></span><span class="shot-tag is-above is-left" style="bottom:7.23%;right:7.10%">Click here</span></span><figcaption>A filled-in dispatch note and the Issue button</figcaption></figure>
The dispatch note gets a number, and the goods leave stock. If "Not enough in stock" opens after **Issue**, see ["Not enough in stock" — what do I do?](../nema-zaliha/).

If you are not done yet, click **Save draft** instead of **Issue**.

## After that
- You make the invoice from the dispatch note — see [How do I make an invoice from a dispatch note?](../faktura-od-ispratnica/).
- As long as no invoice has been made from the dispatch note, you can change it with **Edit**.
- If the dispatch note is wrong, click **Cancel**, then confirm. The goods go back into stock. If the dispatch note was made from a quote that reserved stock, the app asks whether to bring the reservation back.
- For a warranty card for the goods, click **Warranty card**.

## A dispatch note that an invoice was made from
Once you make an invoice from the dispatch note, **Edit** is gone — the invoice carries the dispatch note. **Cancel** is still there, as long as the invoice has not been sent to UJP (the Public Revenue Office):

1. On the dispatch note, click **Cancel**.
2. The app asks, and names the invoice and all the dispatch notes it was made from. If something was paid against the invoice, it becomes the customer's advance.
3. Click **Confirm**. If any of the dispatch notes was made from a quote that reserved stock, the app also asks whether to bring the reservation back.

The invoice and all its dispatch notes are cancelled together, and the goods go back into stock — once. If the invoice is still a draft, the draft is deleted.

> **Important**
> When the invoice has already been sent to UJP, or was printed for a private person without a tax number or for a foreign customer, the dispatch note cannot be cancelled. Then correct the invoice with a **Storno** — see [How do I cancel an issued invoice?](../ponishti-faktura/). Cancel also does not work when the invoice has a return note or a credit note on it, or when it is from a period for which VAT has already been filed.
