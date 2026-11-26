---
title: How do I add another machine to the same contract?
topic: rentals
screens: [rentals.agreement.machines, rentals.tab.contracts]
module: rentals
top: false
related: [iznajmuvanje-nova-mashina, iznajmuvanje-naplata, iznajmuvanje-obnova-kraj]
---
<!-- English translation of src/content/help/iznajmuvanje-povekje-mashini.md. Translate again when that file changes. -->

One contract can cover several machines at the same customer. All the machines on the contract have the same end, renewal, currency and note, and each machine has its own meters and prices. When billing, all the machines from the contract go on one invoice.

## Add a machine
1. In **Rentals**, click **Contracts**, then click the contract.
2. At the top right, click **+ Add machine**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/640"><img src="/help-img/en/rentals-dogovor-dodadi.webp" alt="The Add machine button on the contract" width="1280" height="640" loading="lazy" decoding="async"><span class="shot-ring" style="left:87.23%;top:25.51%;width:10.11%;height:5.63%"></span><span class="shot-tag is-above is-left" style="bottom:74.49%;right:7.71%">Click here</span></span><figcaption>The Add machine button on the contract</figcaption></figure>
3. **New rental** opens with the customer and the contract already selected. The prices are filled in from the last machine on the contract.
4. Pick the **Product** and **Serial number** of the new machine.
5. In **Join date**, enter since when the machine is at the customer's. It is charged from that month — and the month it joins has the full rent, not just for the days.
6. If the machine has its own annex number, enter it in **Annex number**. If it is empty, the machine gets the contract number with /2, /3 …
7. Enter the **Starting meter counters** and check the prices.
8. Click **Save**.

You get the same from **New rental**: when you pick a customer who already has a contract, the **Contract** field appears. Pick the contract, or leave **New contract** for a separate contract.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/rentals-novo-na-dogovor.webp" alt="The Contract field on New rental" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:50.23%;top:65.73%;width:22.50%;height:4.33%"></span><span class="shot-tag is-above is-left" style="bottom:34.27%;right:38.52%">Click here</span></span><figcaption>The Contract field on New rental</figcaption></figure>
## Prices of one machine
In the contract, in the **Machines** table, click **Edit terms** next to the machine. Only that machine's prices change — see [How is the amount the customer pays for the rental calculated?](../iznajmuvanje-naplata/).

## Merge two contracts
If the customer has two contracts that should be one:

1. Open the contract that stays and click **Contract terms**.
2. In the **Join with another contract** section, pick the other contract in **Contract**.
3. Click **Join with another contract** and confirm.

The machines from the other contract move into this one, and the other contract is archived. If the two contracts end differently, the app asks once more, because the machines take on this contract's end. Only contracts of the same customer and in the same currency are merged.

> **Important**
> **Return** on one machine ends only that machine, and the contract goes on with the others. When the last machine is returned, the contract ends — see [The customer is returning the machine — what do I do?](../iznajmuvanje-vrati-mashina/).
