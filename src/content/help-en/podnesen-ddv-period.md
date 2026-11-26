---
title: Why can't I change a document from a filed VAT period?
topic: vat
screens: [vat.outgoing, vat.incoming]
refusals: [vat.period_filed]
module: null
top: false
related: [oznachi-podnesena, storno-ili-ko, ponishti-faktura]
---
<!-- English translation of src/content/help/podnesen-ddv-period.md. Translate again when that file changes. -->

The message "VAT is filed up to …" means someone marked VAT-04 as filed. Everything up to that date is locked, so the books stay the same as they were reported to UJP (the Public Revenue Office).

## What is locked
Issued documents that are in the VAT books, dated up to that day:
- invoice, export invoice, fiscal receipt and advance invoice;
- storno, credit note and debit note;
- invoice — goods receipt, received credit note, cost invoice and import invoice.

They can't be changed, cancelled or deleted. Their date can't be moved outside the locked period. No document can be issued with a date in that period, or be given a date in it.

Drafts are not locked — their date is free.

Documents without VAT are not locked: goods receipt, dispatch note, write-off, transfer, stocktake and adjustment. On an import invoice the costs can be changed, except the VAT paid at customs and its **in cost** tick.

## How to fix it
The fix is made with a new document dated today. It goes into the current period.
1. Open the document that needs fixing.
2. If it's your invoice: if it has a **Storno** button, storno it. If not, make a credit note — see [Storno or credit note — which one when?](../storno-ili-ko/).
3. If it's an invoice from a supplier: enter a received credit or debit note dated today.

A draft dated in the locked period — change its date to today, then click **Issue**. That way it goes into the current period.

An invoice from a supplier that arrived late is entered with today's **Received on** date. It goes into the current period.

If the period was marked as filed by mistake, an account with the **File VAT returns** permission can take the filing back — see [How do I mark VAT-04 as filed, and how do I take it back?](../oznachi-podnesena/). Only the last filed period can be taken back.
