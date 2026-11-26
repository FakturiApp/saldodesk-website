---
title: How do I void or fix a wrong payment?
topic: payments
screens: [payments.view, payments.list, payments.window.edit]
refusals: [docs.advance_invoice_stands]
module: null
top: false
related: [premesti-plakjanje, vnesi-plakjanje, avans-od-kupuvach]
---
<!-- English translation of src/content/help/ponishti-plakjanje.md. Translate again when that file changes. -->

A payment is not deleted. A wrong amount, date or bank statement number is fixed. A payment that didn't happen, or was entered on the wrong partner, is voided.

## Fix
1. Open the payment: in **Documents** → **Payments**, click the row.
2. Click **Edit**.
3. Change what you need: **Amount**, **Date**, **Payment method**, **Statement no.** or **Reference**.
4. If you lower the amount, check **What this paid**: no more than the amount can be allocated to the invoices. In that case, lower the amount on the invoice.
5. Click **Save**.

Every change is recorded in **Payment history**. If the payment went to the wrong invoice, see [The payment closed the wrong invoice — how do I move it?](../premesti-plakjanje/).

## Void
1. Open the payment and click **Void**. The same button is also in the **Payments** list and on the invoice, next to the payment.
2. Read the message and click **Confirm**.

What happens:
- The payment stays recorded, crossed out, marked **Voided**.
- The invoices it closed are open again.
- A voided payment can no longer be edited. If needed, enter a new one.

## When it can't be voided
- An advance invoice stands on the payment. Then the payment isn't voided, and its amount, date, currency and rate can't be changed either. First open the advance invoice (the link is at the top of the payment, under **Advance invoices**) and click **Cancel** or **Storno** on it. If the advance from it has already been deducted on some invoice, that invoice must be cancelled or stornoed first.
- The payment is part of an offset. Cancel the offset.
- The payment was entered through an import invoice. Void it there, in the import invoice.
- Your account doesn't have the **Record & void payments** permission. Ask your administrator.

> **Important**
> A voided payment can't be brought back. If you voided the wrong payment, enter it again.
