---
title: How do I rent a machine to a customer?
topic: rentals
screens: [rentals.new.machine, rentals.new.contract, rentals.tab.machines, rentals.tab.overview]
module: rentals
top: false
related: [iznajmuvanje-naplata, iznajmuvanje-povekje-mashini, iznajmuvanje-otchituvanja, seriski-broevi]
---
<!-- English translation of src/content/help/iznajmuvanje-nova-mashina.md. Translate again when that file changes. -->

A rented machine is a product from stock with its own serial number. With **New rental**, the machine leaves stock and the contract with the customer is made together with it, in one step.

1. At the top, click **Rentals**, then **New rental** on the right. **+ Deploy machine** in **Machines** opens the same thing.
2. At the top, leave **New machine + contract** selected.
3. In **Product**, pick the machine's model. Only products kept by serial number are offered — see [How do I track devices by serial number?](../seriski-broevi/).
4. In **Serial number**, pick the machine. Only the units in stock are offered.
5. If you want, pick a **Type**, enter a **Location** (where the machine stands at the customer's) and tick **Color** if the machine prints in color.
6. In **Partner**, pick the customer. **Start** has today's date; change it if needed. Enter the end in **End**, or click one of the 12, 24 or 36 months buttons. **Unlimited** means a contract with no end.
7. If the customer pays a monthly rent, tick **Charged** and enter the rent. Without rent, the customer pays only per copy.
8. In **Starting meter counters**, enter what the machine's meters show today: **B/W** (black and white), and if it has them, **Color** and **Scan**. That is the machine's first reading.
9. In **Included copies & prices**, enter how many copies are included in the rent, and the **Overage price** — the price for each copy above them.
10. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1450"><img src="/help-img/en/rentals-novo-zachuvaj.webp" alt="A filled-in New rental and the Save button" width="1280" height="1450" loading="lazy" decoding="async"><span class="shot-ring" style="left:90.60%;top:96.51%;width:4.79%;height:2.48%"></span><span class="shot-tag is-above is-left" style="bottom:3.49%;right:7.01%">Click here</span></span><figcaption>A filled-in New rental and the Save button</figcaption></figure>
The machine leaves stock, the contract gets a number IZN-…, and the machine's page opens.

## More about the contract
- The contract number is assigned by itself. If the paper contract has its own number, tick **Own number** and enter it.
- **Auto-renew**: the contract extends itself by another 12 months every time it reaches its end.
- Under **Depreciation** you can set the rate, the method and the **In-service date** — see [What are the rented machines worth?](../iznajmuvanje-vrednost/).
- Tiered prices and the minimum monthly amount are set later, on the contract — see [How is the amount the customer pays for the rental calculated?](../iznajmuvanje-naplata/).

## A machine already in Rentals
**Contract for an existing machine** is for a machine that is already in Rentals, with its meters and history, and is being placed with another customer on another contract — without going back into stock. It is also for a machine that has no contract (for example, its contract was archived).

1. At the top, pick **Contract for an existing machine**.
2. In **Machine**, pick the machine. Next to each machine it says which customer it is with, or **free**.
3. If the machine is with a customer, under it it says who has it and what will happen: "The machine is with … (IZN-…). It will be moved to …: the contract with … ends on … with a final calculation, the new one starts from the same meters."
4. In **Partner**, pick the new customer, and in **Start** the day of the move (today or earlier).
5. In **Starting meter counters**, enter the meters on that day. They are filled in from the last reading; change them if the machine has printed since.
6. In "Final calculation with …" (the old customer), pick **Invoice now** or **Later**. Without a choice, it is not saved.
   - **Invoice now**: the invoice for the last part of the month with the old customer is made right after the move.
   - **Later**: the calculation stays as a row in **Billing** and is invoiced with the month's calculation.
7. Click **Save**, then **Move** in the question.

Only an account with the **Billing & reports** permission sees the "Final calculation with …" question; without that permission it works like **Later**.

With one save, the old machine changes customer:
- the old customer's contract for that machine ends on the day of the move, with a final calculation — as with **Return**. If the move is on the billing day, and the last calculation already ends with the reading from that day, the old customer does not pay new rent. If the machine was the last one on that contract, the contract is archived;
- the meters from that day are recorded once, as a reading: the old contract ends and the new one starts with them, so no copy is charged twice;
- the machine's history and readings stay with it, and the stock does not change.

If a month with the old customer has not been calculated, the app asks first — just like when returning. You can calculate that month, or click **Move without billing**.

> **Note**
> A machine that is already with the same customer is not moved — a machine is added to their contract with **+ Add machine**. A machine returned with **Return** is in stock: for it, pick **New machine + contract**.

> **Important**
> The machine must be in stock. If **Serial number** says "No free units in stock.", first enter the goods receipt for the machine — see [How do I enter a goods receipt when the goods arrive?](../vnesi-priemnica/). A company with **Allow issuing without stock** turned on can also do it another way: an account with the **Issue without stock** permission ticks **The machine has not been received yet** and enters the number in **The machine’s serial number**. The stock shows −1 until the goods receipt with that number arrives — see ["Not enough in stock" — what do I do?](../nema-zaliha/).
