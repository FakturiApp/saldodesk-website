---
title: A rental month was billed wrong — how do I bill it again?
topic: rentals
screens: [rentals.tab.billing]
refusals: [rentals.period_draft_delete, rentals.period_invoice_delete]
module: rentals
top: false
related: [iznajmuvanje-fakturiranje, iznajmuvanje-popravi-otchituvanje, storno-ili-ko]
---
<!-- English translation of src/content/help/iznajmuvanje-presmetka-odnovo.md. Translate again when that file changes. -->

You can delete a month's billing and do it again only while its invoice is a draft. A draft invoice from rentals is not deleted in **Documents** — it is deleted together with the billing, in **Billing**.

1. First fix whatever was wrong: the reading (see [I entered a wrong meter reading — how do I fix it?](../iznajmuvanje-popravi-otchituvanje/)) or the prices in the agreement (**Edit terms**).
2. In **Rentals**, click **Billing** and pick the **Year** and **Month**.
3. In the table, in the machine's row, in the **Invoice** column, click ✕ (**Delete period**).

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/800"><img src="/help-img/en/rentals-izbrishi-period.webp" alt="The button for deleting the billing in the Invoice column" width="1280" height="800" loading="lazy" decoding="async"><span class="shot-ring" style="left:82.88%;top:66.79%;width:1.52%;height:2.50%"></span><span class="shot-tag is-above is-left" style="bottom:33.21%;right:16.36%">Click here</span></span><figcaption>The button for deleting the billing in the Invoice column</figcaption></figure>
4. Confirm. The billing is deleted, and the draft invoice with it. This cannot be undone.
5. In **Mode**, pick **Draft** or **Issue** and click **Calculate**. The month is billed again, with the fixed meters and prices.

## A draft for several machines
When one draft invoice covers several machines — an agreement with several machines, or billing **By customer** — the billing is not deleted machine by machine. ✕ in the row of any of them asks how many machines are on the draft and, if you confirm, deletes the billing of all of them together with the draft invoice. Then bill the month again (step 5 above).

If one of those machines has been returned or moved to another customer, the question tells you so: after the deletion, its month can no longer be billed again.

## An issued invoice
When the invoice is issued, the ✕ is gone. What you do depends on whether the invoice has been sent to UJP (the Public Revenue Office).

### While it has not been sent to UJP
Cancel it — the month waits, and you decide whether to issue the same invoice again or bill the month again:

1. First fix whatever was wrong (the reading or the prices in the agreement, as above).
2. Open the invoice in **Documents** and click **Cancel**. In **Billing**, the month's row stays, marked **Cancelled — waiting**.
3. Pick one of the two ways:
   - The same invoice: in **Documents**, click **Edit and issue again**, fix it and issue it. The month stays billed with it.
   - A new billing: in **Rentals**, click **Billing**, pick the same **Year** and **Month**, in **Mode** pick **Draft** or **Issue** and click **Calculate**. The cancelled invoice is let go for good, the month is billed again with the fixed meters and prices, and a new invoice is made — for all the machines that were on the cancelled invoice.

A month is billed once, never twice: after **Calculate**, the cancelled invoice can no longer be issued, and an invoice issued again keeps its billing, so **Calculate** does not make a new one.

A machine that has been returned in the meantime keeps its row in **Billing**, with no invoice — invoice it with the **Invoice** button in its row.

### When it has already been sent to UJP
It cannot be cancelled. Correct it in **Documents** with a credit note (the customer pays less) or a debit note (the customer pays extra) — see [Storno or credit note — which one when?](../storno-ili-ko/) and [The customer has to pay extra — how do I make a debit note?](../knizno-zadolzhuvanje/).

> **Important**
> A cancelled rental invoice can be issued again only until the month is billed again with **Calculate**. You find a cancelled invoice in **Documents**, with the **Cancelled** button.
