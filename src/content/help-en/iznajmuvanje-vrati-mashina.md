---
title: The customer is returning the machine — what do I do?
topic: rentals
screens: [rentals.asset.basic, rentals.window.unbilled, rentals.tab.machines]
module: rentals
top: false
related: [iznajmuvanje-fakturiranje, iznajmuvanje-obnova-kraj, trebovanje-nivelacija-otpis]
---
<!-- English translation of src/content/help/iznajmuvanje-vrati-mashina.md. Translate again when that file changes. -->

With **Return machine**, the machine's rental ends: the machine goes back into stock, and the last part is billed.

1. First enter the last meter reading, from the day of the return — see [How do I enter the meter readings?](../iznajmuvanje-otchituvanja/). Without it, the copies since the last billing have nothing to be billed from.
2. In **Rentals**, click **Machines**, then click the machine. Or in the agreement, next to the machine, click **Return**.
3. At the bottom, in **Return machine**, enter in **Date** when the machine was returned. The date cannot be in the future, or before the day the machine was given to the current customer — for a moved machine, before the day of the move.
4. Click **Confirm return**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1100"><img src="/help-img/rentals-vrati-mashina.webp" alt="The Return machine section and the Confirm return button" width="1280" height="1100" loading="lazy" decoding="async"><span class="shot-ring" style="left:83.53%;top:91.07%;width:11.86%;height:3.45%"></span><span class="shot-tag is-above is-left" style="bottom:8.93%;right:10.54%">Click here</span></span><figcaption>The Return machine section and the Confirm return button</figcaption></figure>
## Unbilled months
If some month before the return has not been billed, the **Unbilled months** window opens instead of the return. After the return, those months can no longer be billed.

- "Calculate the month …" — bills that month. The button appears when there is a reading that closes the month and if you have the **Billing & reports** right.
- **Return without billing** — the machine is returned, and those months stay unbilled.
- **Cancel** — nothing is returned.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/800"><img src="/help-img/rentals-nepresmetani-meseci.webp" alt="The Unbilled months window" width="1280" height="800" loading="lazy" decoding="async"></span><figcaption>The Unbilled months window</figcaption></figure>
## What happens on the return
- The machine goes back into stock, into the warehouse it was rented out from, at its current value (after depreciation), not as new.
- A final billing is made: the copies from the last billing up to the return, and the rent for the month of the return, if that month has not been billed yet. If the last billing already ends with the reading from the day of the return (the machine was returned on the billing day), there is no new rent — only the copies made after that reading are charged, and if there are none, there is no final billing. It becomes an invoice in the mode set in **Automatic billing mode** (if that is **Report**, it becomes a draft) — if you have the **Billing & reports** right and a **Rent service** is set. Otherwise it stays in **Billing** and you invoice it with **Invoice**.
- A message appears at the bottom right: which warehouse the machine was returned to and what was billed.
- The machine's agreement ends. If the agreement has more machines, they carry on. With the last machine, the agreement ends too.

> **Important**
> A return cannot be undone, so check the date. **Return machine** always puts the machine back into stock. For a machine that goes to scrap, return it first, then write it off with **Disposal** in **Documents** — see [Write-off, adjustment or disposal — which one when?](../trebovanje-nivelacija-otpis/).
