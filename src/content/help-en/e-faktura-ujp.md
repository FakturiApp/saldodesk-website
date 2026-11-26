---
title: How do I send the invoice to UJP?
topic: documents
screens: [documents.view.invoice, documents.view.storno, documents.view.knizen_izdaden, documents.window.send_date]
refusals: [ujp_off, ujp_doc_before_start, document.ujp_type_not_sent, document.ujp_data_missing, ujp_send_later_day]
module: null
top: false
related: [storno-ili-ko, e-faktura-postavki, nacrt-ili-izdadena, ponishti-faktura]
---
<!-- English translation of src/content/help/e-faktura-ujp.md. Translate again when that file changes. -->

> **Note**
> Sending to UJP (the Public Revenue Office) is **in progress** for the browser version.

An issued invoice does not go to UJP by itself. You send it with the **Sign & send (UJP)** button. A storno, and a credit note or debit note made from an invoice, are sent the same way.

1. Open the issued invoice.
2. Check it once more. After sending, the invoice can no longer be changed or cancelled.
3. Click **Sign & send (UJP)**.
4. If the invoice was issued on an earlier day, **Sending on a later day** opens first. Pick:

- "Send with …" (the invoice date) — the invoice goes with its own date;
- **Use today's date and send** — the invoice gets today's date, and the payment due date moves by the same number of days. The **Date of supply** stays the same.
5. When UJP receives it, the status becomes **Sent**, and **UJP EUID** appears at the top — the number UJP registered it under.

## Then the customer decides
The status shows what the customer decided: **Sent** (not decided yet), **Accepted** or **Rejected**. How the invoice is corrected depends on that — see [Storno or credit note — when to use which?](../storno-ili-ko/).

The app checks on its own what the customer decided. To check right now, click **Refresh UJP status**.

## When the button is grey or sending is refused
- The button is grey and next to it says "UJP is not turned on": this installation does not send to UJP. Ask the administrator.
- The message is about the e-invoicing start: in **Settings** → **e-Invoice** the start date is not entered, or that day has not come yet. A document dated before the start is never sent. See [How do I get the company ready for e-Invoice (UJP)?](../e-faktura-postavki/).
- The button is not there, and the document says "In UJP: …" and "the app does not send this type yet" (e.g. a dispatch note, an export invoice, an invoice to a private person without a tax number). Print a document like that. For the export invoice, see [How do I make an export invoice for a foreign customer?](../izvozna-faktura/).
- The message says what is missing for UJP (e.g. the customer's address or tax number): fill in the partner or the lines, then send again.

## If sending did not finish
If the connection breaks, the invoice says "Sending to UJP did not finish". Check in UJP. If the invoice is there, enter its EUID and click **It arrived — save the EUID**. If it is not there, click **It never arrived** and send it again.

> **Important**
> A sent invoice is final. It cannot be changed or cancelled — it is corrected only with a **Storno** (after the customer decides), a credit note or a return note.
