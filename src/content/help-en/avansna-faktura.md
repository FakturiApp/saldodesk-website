---
title: The customer paid in advance — how do I issue an advance invoice?
topic: documents
screens: [documents.view.advance_invoice, documents.window.advance_invoice, documents.view.proforma, payments.view]
refusals: [docs.proforma_advance_typed, docs.advance_denari_only]
module: null
top: false
related: [avans-od-kupuvach, iskoristi-avans, ponuda-vo-faktura, storno-ili-ko]
---
<!-- English translation of src/content/help/avansna-faktura.md. Translate again when that file changes. -->

When the customer pays before the sale, you issue an advance invoice for the money they paid. Later, on the real invoice, the advance is deducted.

The app offers the advance invoice, but it never issues it on its own. It offers it on the payment, in the **Payments** section of the invoice and after you save a bank statement — everywhere it says "… den. of advance left without an advance invoice".

## From the payment
1. Open the payment (in **Payments**, click the row).
2. Click **Issue an advance invoice**.
3. The **Advance invoice** window opens. The date is the date of the payment. If that date falls in a VAT period that has already been filed, today's date is used, with the note "payment from … — the period is filed".
4. Check the **Amount incl. VAT**. The whole advance is filled in, and you can lower it.
5. **VAT** shows 18 %. Change it if needed.
6. Click **Issue**.

## Payment against a proforma
1. Open the proforma.
2. At the bottom, in the **Advance** section, click **Record a payment**.
3. In **Amount**, enter how much the customer paid (the full amount of the proforma is filled in to start). Check the **Date** and click **Save**. The payment is kept as an advance for the proforma.
4. Under the payment it says "… den. of advance left without an advance invoice". Click **Issue an advance invoice**.
5. The **Advance invoice** window opens. The date is the date of the payment. **Amount incl. VAT** is filled in, and **VAT** follows the rates on the proforma.
6. Click **Issue**.

An advance invoice is issued only for a payment in denars, in whole denars.

## The advance on the invoice
The advance is deducted on the real invoice, in its **Advance** section — see [How do I use an advance on a new invoice?](../iskoristi-avans/).

> **Important**
> While the advance invoice stands, the payment cannot be cancelled, and its amount, date, currency and rate cannot be changed — for how to get out of this, see [How do I cancel or fix a wrong payment?](../ponishti-plakjanje/). If the advance invoice is smaller than the advance, the rest is still offered under **Use it**.

## A wrong advance invoice
- **Cancel** — as long as no invoice has deducted the advance. The payment becomes a free advance again.
- **Storno** — with today's date, also only as long as the advance has not been deducted on an invoice.

If the advance has already been deducted, first cancel or storno the invoice that deducted it.
