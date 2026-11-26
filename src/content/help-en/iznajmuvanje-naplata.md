---
title: How is the amount the customer pays for the rental calculated?
topic: rentals
screens: [rentals.agreement.machines, rentals.new.machine, rentals.new.contract]
module: rentals
top: false
related: [iznajmuvanje-fakturiranje, iznajmuvanje-nova-mashina, iznajmuvanje-povekje-mashini]
---
<!-- English translation of src/content/help/iznajmuvanje-naplata.md. Translate again when that file changes. -->

For each machine, every month, the customer pays:

- **Monthly rent** — the same amount every month, no matter how much they printed.
- The copies above the allowance: copies used minus **Included copies**, at the **Overage price**. Separately for B/W (black and white), color and scan.

Example: rent 1.500, 1.000 B/W copies included, price 1,50 per copy. The customer printed 1.400 copies: 1.500 + 400 × 1,50 = 2.100 without VAT. If they printed 800, they pay only 1.500 — unused copies don't carry over to the next month. VAT is added on the invoice.

**Service copies** (the technician's test pages) are subtracted before the calculation.

## Where the prices are changed
1. In **Rentals**, click **Contracts**, then click the contract.
2. In the **Machines** table, click **Edit terms** next to the machine.
3. Change the **Monthly rent**. Open **Meters & rates** — here are the included copies and the price above the allowance for each meter.
4. Click **Save**.

The new prices apply to the calculations you make from now on. A month already calculated as a draft for one machine — delete it and calculate it again — see [The rental month was calculated wrong — how do I calculate it again?](../iznajmuvanje-presmetka-odnovo/).

## Tiered price
In **Edit terms**, open **Charge model** and in **Model** pick:

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1000"><img src="/help-img/en/rentals-model-naplata.webp" alt="The Charge model section in Edit terms" width="1280" height="1000" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.91%;top:87.27%;width:91.41%;height:4.00%"></span><span class="shot-tag is-above is-right" style="bottom:12.73%;left:49.61%">Click here</span></span><figcaption>The Charge model section in Edit terms</figcaption></figure>
- **Package (one price above the allowance)** — every copy above the allowance has the same price.
- **Graduated (the price drops with volume)** — the more the customer prints, the lower the price.

If you pick Graduated, click **+ Add a tier** and for each tier enter **Up to** and **Price**. **Up to** is the total of copies above the allowance. Leave the last tier without **Up to** — it takes the rest. Example: up to 1.000 at 2,00, up to 5.000 at 1,50, the rest at 1,00. For 6.000 copies above the allowance: 1.000 × 2,00 + 4.000 × 1,50 + 1.000 × 1,00 = 9.000. The tiers apply only to B/W; color and scan stay at their own price.

## Minimum monthly commitment
If the rent and copies together are less than the **Minimum monthly commitment** (in the same section, **Charge model**), the month is charged at the minimum. A good month is never lowered to the minimum. It applies to both models.

## No rent
If the customer pays only per copy, turn off **Charged** next to **Monthly rent**. Then there are no included copies either.

> **Important**
> A meter with no price and no included copies is not charged (for example a scan you don't sell). But if the customer has copies above the allowance and there is no price for them, the app does not invoice 0,00: the contract stays uncalculated and is listed under **Not billed** in **Billing**.
