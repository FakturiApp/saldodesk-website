---
title: The customer is returning goods — how do I make a return note?
topic: documents
screens: [documents.new.povratnica, documents.view.povratnica, documents.view.invoice]
refusals: [document.return_needs_storno]
module: null
top: false
related: [storno-ili-ko, knizno-zadolzhuvanje, najdi-dokument]
---
<!-- English translation of src/content/help/povratnica.md. Translate again when that file changes. -->

With a return note, the goods go back into stock and the customer's debt goes down. For the money, the app makes a credit note by itself, at the price from the invoice.

1. Open the invoice the goods were sold with.
2. Click **New document from this one**, then under **Correction of** click **Return note**.
3. **New return note** opens with the invoice and the customer. For each product that is coming back, enter how many pieces in **Return qty**. No more than **Sold**.
4. In **Handling**, choose what you do with the goods:

- **Restock** — the goods are fine and go back on the shelf.
- **Scrap** — the goods are damaged: they come back and are written off right away with a write-off.

5. If the product has serial numbers, choose which pieces are coming back.
6. If you want, fill in **Reason** and **Note**.
7. Click **Make the return note**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/sell-povratnica-nova.webp" alt="New return note and the Make the return note button" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:81.93%;top:84.34%;width:13.46%;height:5.00%"></span><span class="shot-tag is-above is-left" style="bottom:15.66%;right:11.34%">Click here</span></span><figcaption>New return note and the Make the return note button</figcaption></figure>
The return note is issued right away. Under **Linked documents** you see the credit note (KO), and if you wrote off damaged goods, the write-off (TRB) too.

You send that credit note to UJP (the Public Revenue Office) like any other: open it and click **Sign & send (UJP)** — see [How do I send an invoice to UJP?](../e-faktura-ujp/).

You can also start a return note from **Documents**: **Credit notes**, then **Return note** and the blue "+" button. In **Original invoice**, search for the invoice by number or by customer.

## Stornoed or rejected invoice
- If the invoice has been stornoed, the return note is only for the goods, without a credit note. The storno already returned the money.
- If the customer rejected the invoice at UJP, first make a **Storno**, then a return note for the goods, then a new invoice — see [Storno or credit note — which one when?](../storno-ili-ko/).

## Wrong return note
Open it and click **Cancel**. Everything goes back to how it was before it: the goods leave stock again, and the credit note and the write-off are cancelled. If the returned goods have already been sold or moved, the app doesn't allow it and tells you why.

If the credit note from the return note has already been sent to UJP, the return note can't be cancelled. The app says "The automatic credit note is already at UJP — correct it with a debit note" — then make a debit note, see [The customer needs to pay more — how do I make a debit note?](../knizno-zadolzhuvanje/).

> **Important**
> A return note is for goods that really come back. If the customer returns nothing but should pay less, make a credit note — see [Storno or credit note — which one when?](../storno-ili-ko/).
