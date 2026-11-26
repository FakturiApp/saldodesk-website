---
title: How do I use an advance on a new invoice?
topic: payments
screens: [payments.window.pick_advance, documents.view.invoice, documents.new.invoice]
refusals: [docs.advance_invoiced_money]
module: null
top: false
related: [avans-od-kupuvach, avansna-faktura, vnesi-plakjanje, premesti-plakjanje]
---
<!-- English translation of src/content/help/iskoristi-avans.md. Translate again when that file changes. -->

If the customer has already paid in advance, don't enter a new payment. You put the advance on the invoice. How depends on whether an advance invoice was issued for the advance.

## Advance without an advance invoice
1. Issue the invoice as always.
2. In the invoice's **Payments** section it says **This partner holds an advance of** and how much. Click **Use it**.
3. If the customer has only one payment with an advance, the advance is put on the invoice right away.
4. If there are more, the **Pick the advance** window opens. The oldest payments are ticked, as much as the invoice needs. **Open** is how much the invoice still owes, **Selected** is how much you have picked. Click **Use it**.

If the advance is smaller than the invoice, the invoice stays **Partly paid**.

## Advance with an advance invoice
An advance with an advance invoice issued for it is not offered under **Use it**. It is deducted on the new invoice while that invoice is still a draft:

1. Make a new invoice for that customer (**New document**). If you are making it from the proforma, click **Invoice with changes** so you can deduct the advance.
2. As soon as you pick the customer, the **Advance** section appears with their advance invoices and how much is left on each.
3. Tick the advance invoice. The amount fills in by itself: how much is left, but not more than the invoice. You can change it, in whole denars.
4. Under the list you see **Total**, **Advance** and **To pay**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/payments-avans-del.webp" alt="The Advance section on a new invoice" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:53.07%;width:91.56%;height:20.44%"></span><span class="shot-tag is-above is-right" style="bottom:46.93%;left:49.61%">Click here</span></span><figcaption>The Advance section on a new invoice</figcaption></figure>
5. Click **Issue**. The advance is deducted when the invoice is issued. If you issue the invoice without ticking the advance invoice, the advance is not deducted.

On an invoice already saved as a draft: open it, tick in the **Advance** section and click **Save advance**.

An issued invoice keeps its advance, and it can no longer be changed. If the invoice is later cancelled or reversed with a storno, the advance becomes unused again. The same goes when the invoice is reversed only on the UJP (Public Revenue Office) portal: the advance money is still covered by the advance invoice, so even then it is deducted only in the **Advance** section of a new invoice.

> **Important**
> Money covered by an advance invoice cannot be put on an invoice with either **Use it** or **Edit** on the payment. It is deducted only in the **Advance** section of a new invoice — otherwise the VAT on it would be paid twice.
