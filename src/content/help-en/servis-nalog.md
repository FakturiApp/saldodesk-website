---
title: How do I run a service ticket from intake to done?
topic: service
screens: [service.ticket.view]
refusals: [service.warehouse_locked]
module: service
related: [servis-priem, servis-naplata, servis-otkazano]
---
<!-- English translation of src/content/help/servis-nalog.md. Translate again when that file changes. -->

A service ticket is one visit of one device. It holds the problem, the work, the parts, the money and the history of everything that was done.

## The status buttons
At the top of the ticket (and at the bottom) are the buttons for the next step. The green button is the usual next step. Click it when the work gets there.
- **Received**: the device has been taken in, nobody has looked at it yet.
- **Diagnosing**: the fault is being looked for.
- **Awaiting approval**: the client has the quote and has not answered yet.
- **Approved**: the client agreed, work can start.
- **Awaiting parts**: waiting for a part from a supplier.
- **In repair**: the device is being worked on.
- **Ready**: done, waiting for the client to come.
- **Closed**: the client picked it up and it has been paid for.

**Approved** has no button of its own. The ticket goes there when you click **Customer accepted** on the quote (see How do I send the client a quote and record their answer?).

Some buttons go back, for example from **Ready** to **In repair**. Then the app asks for a short note with the reason.

## The work and the parts
1. In **Work**, enter the **Diagnosis** (what you found) and the **Work done**. Click **Save** below them. Each part of the ticket has its own **Save**.
2. In **Lines — parts & labor**, click in **Search product or service…**, type the part or service (for example "Service work") and choose it. Lines can only be products and services from **Products**.
3. Change **Qty**, **Price** or **Disc. %** if you need to.
4. **Charged**: ticked means the client pays for the line. Unticked means free. A free part still leaves stock, with a write-off.

For each line you also see **VAT** and **Incl. VAT**. Stock changes only when an invoice or write-off is issued, not when the line is written on the ticket.

A line that is already on an issued invoice or write-off has a padlock and cannot be changed. A line that is on the ticket's draft invoice can still be changed here — the draft follows the change. An account with the **Generate documents** permission can do this.

## Technician and warehouse
- **Technician** (top right): who is working on the device.
- **Warehouse**: which warehouse the parts are taken from. It shows only when the company has more than one warehouse. Once the ticket has an invoice or write-off, the warehouse can no longer be changed.

## Reserve
**Reserve** holds the ticket's parts for the client for 14 days: a sale will not take them without asking. Pressed again, the period is extended. **Release** lets them go.

## History
Every status change is recorded in **History**: when, who made it, and the note.
