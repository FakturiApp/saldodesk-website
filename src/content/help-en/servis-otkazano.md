---
title: The client cancelled or the device cannot be repaired — what do I do?
topic: service
screens: [service.ticket.view, service.window.bad_ending, service.board.workshop]
module: service
top: false
related: [servis-nalog, servis-naplata, servis-tabla]
---
<!-- English translation of src/content/help/servis-otkazano.md. Translate again when that file changes. -->

A ticket can also end without a repair:
- **Cancelled**: the client changed their mind. The button is there in every status.
- **Unrepairable**: the device cannot be repaired. The button is there in **Diagnosing** and **In repair**.
- **Abandoned**: the device has been repaired, but the client did not come to pick it up. The button is there only in **Ready**.

## End the ticket
1. On the ticket, click **Cancelled**, **Unrepairable** or **Abandoned**.
2. The app asks "The ticket is closed for good, with no way back. Continue?". Click **Confirm**.

This cannot be undone. A closed ticket can no longer be changed.

> **Important**
> **Cancelled** and **Unrepairable** charge nothing, except the diagnostic fee if the client wants to pay it.

## If the fee has not been paid
After you confirm, the app asks "The diagnostics … has not been paid. Bill it with an invoice?".
- **Yes, bill it**: an invoice is issued with only the fee. If the ticket has a draft invoice, that very draft is issued, and the other lines are taken off it. The parts do not leave stock.
- **No**: the fee is not charged. If the ticket has a draft invoice, the app then asks "Delete the draft invoice?".

The question does not appear if the fee is already on another document of the ticket (an issued invoice or a draft fiscal receipt). Only an account with the **Generate documents** permission sees it.

## The device is still with you
After **Unrepairable** or **Cancelled**, the device stays with you. The ticket says "The machine is still with us — waiting for the client to pick it up."
1. When the client comes for the device, click **Handed back to the customer**.
2. Write who is taking the machine and click **Confirm**.
Until it is handed back, the machine is counted in the **In workshop** tile and sits in the **Awaiting pickup (unrepaired)** column on the **Workshop** board — see [Where do I see all the service tickets?](../servis-tabla/).

## If the ticket has an issued invoice
With **Cancelled** and **Unrepairable**, the window "The invoice still bills for the work" opens. Choose:
- **Withdraw the invoice**: if the invoice has not been sent to UJP (the Public Revenue Office). The goods go back into stock, and what was paid becomes an advance. Then the ticket is ended.
- **Storno**: if the customer has already decided on the invoice in UJP.
- **Keep the invoice**: if the client pays after all. The ticket is ended, and the invoice stays issued. Only an account with the **Generate documents** permission can do this.

If the invoice has been sent to UJP and the customer has not answered yet, there is no button to reverse it. It says "Sent to UJP. Wait for the customer to accept it (or for the deadline to pass) — then Storno is possible. UJP abolished cancelling." Wait for the answer, then click **Cancelled** or **Unrepairable** again.

If the button to reverse it is not there and it says "You do not have permission to reverse the invoice", ask the administrator.

With **Abandoned**, the invoice stays issued by itself: the work is done and the parts are in the device.

## A repaired device that nobody picked up
The app never marks a device **Abandoned** by itself. To find such devices: in **List**, click **Columns & filters**, **+ Add filter**, choose **Past the deadline — awaiting pickup** and click **Yes**. These are the repaired devices whose legal deadline has passed.
