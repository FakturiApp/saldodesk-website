---
title: How do I make an export invoice for a foreign customer?
topic: documents
screens: [documents.new.export_invoice, documents.view.export_invoice]
module: import_export
top: false
related: [storno-ili-ko, povratnica, pechati-faktura]
---
<!-- English translation of src/content/help/izvozna-faktura.md. Translate again when that file changes. -->

An export invoice is a sale to a foreign customer, in a foreign currency (e.g. EUR). The goods leave stock just as with an ordinary invoice.

1. At the top, click **Documents**, then **Sales**.
2. Click **Export invoice**, then the blue "+" button at the end of the row of document types.
3. In **Customer**, pick the foreign customer. **Currency** is filled in from the partner. If it is empty, enter it (e.g. EUR).
4. If needed, change the **Due date**, **Date of supply** and **Delivery date**.
5. Enter the products, the quantity and the price. The price is in the invoice's currency, not in denars. **VAT** on each line is 0 %; change it only if needed.
6. Click **Save draft**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/sell-izvozna-nova.webp" alt="A new export invoice and the Save draft button" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:85.77%;top:86.99%;width:9.63%;height:4.00%"></span><span class="shot-tag is-above is-left" style="bottom:13.01%;right:9.42%">Click here</span></span><figcaption>A new export invoice and the Save draft button</figcaption></figure>
7. The draft opens. Click **Issue**.
8. In **Rate (provisional)**, enter how many denars one unit of the currency is worth (e.g. 61,5 for 1 EUR). Click **Issue**.
The invoice gets a number, and the goods leave stock. The customer's debt is kept in the invoice's currency, and payments are entered in that currency, with a rate.

The invoice says "At UJP: 510 …" and that the app does not send this type yet. For now the customer gets it printed — see [How do I print the invoice?](../pechati-faktura/).

> **Important**
> An issued export invoice can no longer be changed: only the draft has **Edit**. Until it is locked, you cancel a wrong export invoice with **Cancel**.
> It is locked the first time you print it (or when you click **Handed to the buyer**); before that, the app asks. A locked one can be fixed only with a **Storno**, a credit note or a return note — see [Storno or credit note — which one when?](../storno-ili-ko/).
