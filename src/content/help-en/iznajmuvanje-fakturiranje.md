---
title: How do I invoice the rentals for the month?
topic: rentals
screens: [rentals.tab.billing, rentals.tab.overview]
module: rentals
related: [iznajmuvanje-otchituvanja, iznajmuvanje-presmetka-odnovo, iznajmuvanje-naplata, e-faktura-ujp]
---
<!-- English translation of src/content/help/iznajmuvanje-fakturiranje.md. Translate again when that file changes. -->

Rentals are invoiced all at once, for the previous month. Each contract gets one invoice with all its machines: the rent and the copies above the allowance.

1. Enter the meter readings — see [How do I enter the meter readings?](../iznajmuvanje-otchituvanja/).
2. In **Rentals**, click **Billing**.
3. Pick the **Year** and **Month**. The previous month is picked for you.
4. In **Mode**, pick:

- **Report** — only shows the amounts. Nothing is saved and nothing is invoiced.
- **Draft** — makes invoices as drafts, so you can check them before issuing.
- **Issue** — makes invoices and issues them right away, with a number.

5. If **By customer** is ticked, the customer gets one invoice for all their contracts. If not, each contract gets its own invoice.
6. Click **Calculate**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/rentals-fakturiranje-presmetaj.webp" alt="Mode, By customer and the Calculate button" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:44.39%;top:30.32%;width:7.02%;height:5.00%"></span><span class="shot-tag is-above is-right" style="bottom:69.68%;left:47.90%">Click here</span></span><figcaption>Mode, By customer and the Calculate button</figcaption></figure>
The invoices are in **Documents**, with today's date. You check and issue the drafts there. You send the invoice to UJP (the Public Revenue Office) by hand, like any other — see [How do I send the invoice to UJP?](../e-faktura-ujp/).

## Contracts in euros
A contract in a foreign currency (for example EUR) is invoiced in denars, at a rate you enter.

1. When the month has such a contract, the "EUR rate" field appears next to **Calculate** in **Draft** and **Issue**.
2. Enter the rate, for example 61,5. Without a rate, the month is not calculated.
3. Click **Calculate**. The contract's prices are converted into denars at that rate.

Automatic billing has no one to ask for the rate, so it leaves such contracts uninvoiced. Above the table it then says "Waiting for a rate", with the contract numbers. Enter the rate and click **Calculate**. **Invoice** on a single row asks for the rate in the window.

## Not billed
Under the buttons, **Not billed** lists every contract that was not calculated, and why:

- "already calculated for this month" — the month has already been invoiced. Nothing is invoiced twice.
- "no reading to close the month" — there is no reading yet close to the billing day in the next month. Enter it and click **Calculate** again.
- "the contract starts later" or "the contract has expired" — the month is outside the contract.
- "the price cannot be calculated — check the contract's rates" — there are copies without a price. The app does not invoice 0,00; put a price in the contract's **Edit terms**.
- "the copies are already on a later invoice — if that is a mistake, delete its calculation and calculate in order" — the month was skipped, and the next one has already been calculated (see Important below). The draft can be deleted (a draft for several machines is deleted as a whole) — see [The rental month was calculated wrong — how do I calculate it again?](../iznajmuvanje-presmetka-odnovo/).

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/760"><img src="/help-img/en/rentals-ne-se-presmetani.webp" alt="The Not billed list after the calculation" width="1280" height="760" loading="lazy" decoding="async"><span class="shot-ring" style="left:1.88%;top:41.35%;width:95.47%;height:31.84%"></span><span class="shot-tag is-above is-right" style="bottom:58.65%;left:49.61%">Click here</span></span><figcaption>The Not billed list after the calculation</figcaption></figure>
> **Important**
> Calculate the months in order. If you skip a month and calculate the next one, the copies from the skipped month go into the next invoice, and its rent is not charged.

## Billing settings
Open **Billing settings** (under the buttons), make your changes and click **Save**:

- **Rent service** and the services for the copies — these are the lines on the invoice. Without **Rent service**, **Draft** and **Issue** don't work.
- **Day of month** — the billing day. The month is measured by it.
- **Enable automatic billing** — on that day the app calculates the previous month on its own, in the **Automatic billing mode**. If the day falls on a weekend, it happens on the Monday. Machines that have no reading to close the month at that point, you calculate later by hand.
- **Group by customer (default)** — whether **By customer** is ticked when you open **Billing**. Automatic billing is grouped the same way.
- **Starting mode for Calculate** — which mode is picked when you open **Billing**.

**Download Excel**, **Client statement** and **Download CSV** download the calculations for the selected month.
