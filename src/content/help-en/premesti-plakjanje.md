---
title: The payment closed the wrong invoice — how do I move it?
topic: payments
screens: [payments.window.edit, payments.view]
refusals: [docs.advance_money_held]
module: null
top: false
related: [ponishti-plakjanje, vnesi-plakjanje, avans-od-kupuvach, iskoristi-avans]
---
<!-- English translation of src/content/help/premesti-plakjanje.md. Translate again when that file changes. -->

Which invoices a payment pays is changed on the payment itself. That is also how you link an advance to one specific invoice.

1. Open the payment: in **Documents** → **Payments**, click the row. Or on the invoice, in the **Payments** section, click **Edit** next to the payment.
2. The **Payment** screen opens. Under **What this paid** are the invoices it closes now.
3. Click **Edit**.
4. **Edit this payment** opens. Under **What this paid**, the invoices the payment already closes are ticked, and below them are the other open documents of that partner.
5. Untick the wrong invoice.
6. Tick the right one. The amount fills in by itself. **Can be closed** tells you the most that can go to it.
7. At the bottom, check **Allocated** and **Left as an advance**. Whatever isn't allocated stays an advance.
8. Click **Save**.

## When it can't be moved
- Money covered by an advance invoice: it is deducted only in the **Advance** section of a new invoice — see [How do I use the advance on a new invoice?](../iskoristi-avans/).
- Money that closes an invoice which has already deducted an advance from it: it can't be taken out or reduced while that invoice stands — first storno it or cancel it.

## What is recorded
The change shows in **Payment history**. It is also recorded in the history of each invoice whose paid amount changed.

A payment in denars can't close an invoice in euros. If the payment was actually abroad, tick **Payment abroad** in the same window, choose the **Currency** and enter the **Exchange rate**. Then write the amount in the currency in **Amount**: the number isn't converted by itself, only the label next to the field changes — 61.500 denars left as they are would be saved as 61.500 EUR.

> **Important**
> The partner on a payment can't be changed. If the payment was entered on the wrong partner, void it and enter it again — see [How do I void or fix a wrong payment?](../ponishti-plakjanje/).
