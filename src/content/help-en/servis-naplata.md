---
title: How do I bill for the service and close the ticket?
topic: service
screens: [service.ticket.view]
refusals: [service.lines_on_ticket, service.header_on_ticket, service.nothing_to_bill]
module: service
top: false
related: [servis-nalog, servis-pechatenje, servis-otkazano]
---
<!-- English translation of src/content/help/servis-naplata.md. Translate again when that file changes. -->

Service is billed with documents made from the ticket. The lines that are charged go on an invoice. Free parts go on a write-off, so stock knows they went out.

## Close the ticket when the client comes
1. The ticket should be **Ready**.
2. Click **Close…**. The app tells you what it will do. The charged lines go on a new invoice (draft), or are added to the invoice from the quote if it has already been issued. Free parts go on a write-off, which is issued right away. If only a diagnostic fee was agreed, it goes on an invoice (draft).
3. In the field, write who is picking up the machine (optional) and click **Confirm**.
4. The ticket is **Closed**. **Warranty until** fills in by itself: the closing day plus **Warranty (days)**.
5. Under the ticket's **Documents**, click the new invoice and, in the window, click **Issue**.

> **Important**
> The invoice that **Close…** makes is a draft. The customer owes nothing and the parts do not leave stock until you click **Issue**.

## An invoice before closing
In the ticket's **Documents** section:
- **Invoice (draft)** makes a draft invoice from the charged lines. While it is a draft, **Regenerate** makes it again from the current lines.
- If the ticket has no line with **Charged** ticked that is not yet on a document, no invoice is made: there is nothing to bill. First enter the line or tick **Charged**, then click again.
- **Write-off** appears when there is a free part that has not been written off yet. The write-off is issued right away.
- If the invoice has been issued and you added parts after that, click **Add to the invoice**. The number stays the same.
- If the invoice no longer takes lines (it has been sent to UJP or has a credit note or return note), it says so next to it. Click **New invoice**: the new parts go on a new invoice, and the first one stays on the ticket. It is the same with **New fiscal receipt** after a paid fiscal receipt, and with **New write-off**.
## Deposit and diagnostic fee
If you ticked **paid** at intake, that money is recorded as a payment and taken off the ticket's invoice. For example: invoice 1.974 den., deposit paid 300 den., remaining 1.674 den.

The diagnostic fee goes on the first invoice as a "Diagnostics" line. Once the ticket has an invoice, the fee and the deposit can no longer be changed on the ticket, and further payments are entered in **Payments**.

## Lines are changed on the ticket
The ticket's invoice and write-off cannot be changed in **Documents**. There it says "The lines of this document are changed on the service ticket" and the ticket number. Add a new part on the ticket, then click **Regenerate** (while the invoice is a draft) or **Add to the invoice** (once it is issued). A line that is already on an issued invoice or write-off has a padlock and cannot be changed on the ticket. A line on the draft invoice is changed on the ticket (quantity, price, discount), and the draft follows the change. In the document's window, you can change only the serial numbers, the note and the payment due date.

## A voided invoice
If the ticket's invoice is voided, the ticket keeps it. Next to it it says "Voided — issue it again under the same number or bill again":
- **Issue again**: if the button is there, the same invoice opens as a draft with the same number. In the window, you can change only the serial numbers, the note and the payment due date. Click **Issue**.
- **Bill again**: the voided invoice is let go for good, and the lines are billed on a new document. If that invoice carried the diagnostic fee, the fee is billed again too — on the ticket's next invoice.

**Issue again** is not there, for example, when the invoice number has been freed for the next invoice, when the number is from another year, or when the invoice was made from an accepted quote. Then click **Bill again**.

Until you choose one of the two, the ticket cannot be closed or make another invoice.
