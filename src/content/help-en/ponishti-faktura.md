---
title: How do I cancel an issued invoice?
topic: documents
screens: [documents.view.invoice]
refusals: [document.locked]
module: null
top: true
related: [storno-ili-ko, nacrt-ili-izdadena, podnesen-ddv-period, najdi-dokument]
---
<!-- English translation of src/content/help/ponishti-faktura.md. Translate again when that file changes. -->

An issued invoice that hasn't been sent to UJP (the Public Revenue Office) yet is cancelled with the **Cancel** button. The exception is an invoice dated up to a day for which VAT is already filed — see below.

1. Open the invoice: in **Documents**, click it.
2. Click **Cancel** (bottom left).
3. Read the message and click **Confirm**.
## What happens
- The invoice gets the status **Cancelled**. It isn't deleted: it stays recorded, so you can always see what happened.
- The goods go back into stock.
- If the customer already paid, their payment is kept as an advance.
- If this is the last issued invoice, its number is freed and the next invoice gets it. Otherwise the number stays on the cancelled invoice.

The cancelled invoice is not in the normal list. You find it in **Documents**, with the **Cancelled** button.

If the number stayed, the cancelled invoice has an **Edit and issue again** button. With it you fix the invoice and issue it again, under the same number.

## When the Cancel button is missing or doesn't work
- The invoice has been sent to UJP. Then it is corrected with a **Storno**, a credit note or a return note, depending on what the customer decided — see [Storno or credit note — which one when?](../storno-ili-ko/).
- The invoice is to an individual without a tax number or to a foreign customer and has already been printed (or you clicked **Handed to the buyer**). It too is corrected with a **Storno**, a credit note or a return note — see [Storno or credit note — which one when?](../storno-ili-ko/).
- The button is there, but after **Confirm** the app says "VAT is filed up to …". That means the invoice is dated up to a day for which VAT is already filed, so it may not be cancelled or changed. Make a credit note (it gets today's date) — see [Why can't I change a document from a filed VAT period?](../podnesen-ddv-period/).
- Your account doesn't have the **Delete & cancel** permission. Ask your administrator.

## Delete invoice
Sometimes the invoice also has **Delete invoice**. It is there only when the invoice:
- has no goods (services only);
- has no payment;
- has no linked documents;
- is the last issued invoice;
- hasn't been sent to UJP;
- isn't locked.

**Delete invoice** deletes the invoice completely, with no record, and the number is freed. If you want a record to stay, use **Cancel**.
