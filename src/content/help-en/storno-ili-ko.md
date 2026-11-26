---
title: Storno or credit note — when to use which?
topic: documents
screens: [documents.view.invoice, documents.view.storno, documents.view.knizen_izdaden, documents.window.storno]
refusals: [document.annual_accounts_filed, document.correction_on_rejected, document.correction_on_stornoed, docs.storno_advance_money_spent]
module: null
top: false
related: [ponishti-faktura, nacrt-ili-izdadena, najdi-dokument, povratnica, knizno-zadolzhuvanje, podnesen-ddv-period]
---
<!-- English translation of src/content/help/storno-ili-ko.md. Translate again when that file changes. -->

Both correct an invoice that can no longer be voided — for example, an invoice the customer has accepted in UJP (the Public Revenue Office).

- **Storno** cancels the whole invoice.
- A credit note reduces it only in part: a wrong price, a discount agreed later, or fewer pieces.

If the invoice still has a **Void** button, you usually need neither. Void it or change it with **Edit** — see [How do I void an issued invoice?](../ponishti-faktura/). The exception is an invoice dated within a period for which VAT has already been filed: the app allows neither voiding nor editing ("VAT is filed up to …"). Then make a credit note — it gets today's date. See [Why can't I change a document from a filed VAT period?](../podnesen-ddv-period/).

An invoice to a private person without a tax number, or to a foreign customer, has no **Void** once it has been printed (or once you have clicked **Handed to the buyer**). You correct it too with **Storno**, a credit note or a return note.

An invoice made from **Rentals** or from a service ticket has its own rules — see [The rental month was calculated wrong — how do I calculate it again?](../iznajmuvanje-presmetka-odnovo/) and [How do I bill for the service and close the ticket?](../servis-naplata/).

## What the customer decided in UJP
When the invoice has been sent to UJP, the top of it shows what the customer decided. The correction depends on that:
- **Sent** — the customer has not decided yet. The invoice cannot be changed, voided or stornoed. Wait for them to accept it or for the deadline to pass; only then is **Storno** possible.
- **Accepted** — the customer accepted it. Correct it with **Storno**, a credit note or a return note.
- **Rejected** — the customer rejected it. No credit note or debit note is made on it: only **Storno**. After that, the invoice itself offers **Make the return note** (for the goods) and **Make the new invoice**.

## Storno — the whole invoice
1. Open the invoice and click **Storno**.
2. In **Reason**, choose why it is being stornoed.
3. If you like, fill in **Comment (sent to UJP)** — the customer sees this too. The **Note** stays with you only.
4. Click **Storno** in the window.

If the **Storno** button is not there and the invoice has been sent to UJP, it says on it that you have to wait for the customer to decide.

The storno is issued right away. You see it on the invoice, under **Related documents**. If the storno shows **Sign & send (UJP)**, send it to UJP just like an invoice.

If the customer has already paid, after the storno their payment becomes an advance — see [What is an advance and where do I see it?](../avans-od-kupuvach/).

If the invoice deducted an advance invoice (the **Advance** section), the storno brings that back too: the advance invoice again covers the money from the payment. If that money has been used in the meantime — on another invoice or returned to the customer — the storno is refused and names the advance invoice. First free up the money there (for example, with **Edit** on the payment), then storno.

Once the annual accounts for the invoice's year have been filed (entered in **Settings** → **e-Invoice**), no **Storno** can be made. Make a credit note — it gets today's date. See [How do I get the company ready for e-Invoice (UJP)?](../e-faktura-postavki/).

## Credit note — part of the invoice
1. Open the invoice and click **New document from this one**.
2. Under **Correction of**, choose **Credit/debit note (issued)**.
3. Leave **Type** as **Credit**. (**Debit** is for when the customer has to pay more.)
4. On the line you are correcting, enter either **Correction (qty)** — how many pieces fewer, or **Amount (money)** — how much money less, excluding VAT. Not both.
5. Write the **Reason**.
6. Click **Issue**.

If the invoice has already been stornoed, neither a credit note nor a debit note is made on it: the storno has reversed the whole amount. For goods coming back, make a return note. If the storno was a mistake, void it first.

> **Important**
> Storno and credit notes correct only the money. If the customer is also returning the goods, make a **Return note** instead of a credit note (in the same menu, under **Correction of**). It puts the goods back into stock and makes the credit note by itself. For a rejected invoice, the return note comes after **Storno**, from the **Make the return note** button.

## A wrong storno or credit note
Until it is sent to UJP, the storno and the credit note have a **Void** button.
