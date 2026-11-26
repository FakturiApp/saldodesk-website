---
title: How much are the rented machines worth?
topic: rentals
screens: [rentals.tab.value, rentals.asset.basic]
module: rentals
top: false
related: [iznajmuvanje-vrati-mashina, iznajmuvanje-nova-mashina]
---
<!-- English translation of src/content/help/iznajmuvanje-vrednost.md. Translate again when that file changes. -->

Machines lose value while they are rented out (depreciation). **Value** shows for each machine: the **Purchase value**, **In service since**, how much is **Accumulated** and the **Net book value**.

1. In **Rentals**, click **Value** (top right).
2. In **As of**, pick the day. It starts at today.
3. At the top, in **Fleet total**, are the totals for all machines. **Download Excel** takes the table to Excel.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/rentals-vrednost.webp" alt="Value and the As of field" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:1.88%;top:29.90%;width:15.00%;height:5.28%"></span><span class="shot-tag is-above is-right" style="bottom:70.10%;left:9.38%">Click here</span></span><figcaption>Value and the As of field</figcaption></figure>
## Where the numbers come from
- The **Purchase value** is the machine's cost from stock when it was rented out. You do not enter it by hand. While the goods receipt has no price or the machine has not been received yet, it says "unknown" — it fills in by itself when the price arrives, and until then the machine has no depreciation either.
- By default a machine is written down 25% a year, straight-line — over 4 years.
- You change the rate and method on the machine: click **Basic**, change the **Depreciation rate** and **Depreciation method** (**Straight-line** or **Declining balance**) and click **Save**.
- Depreciation starts from **In service since**. When you rent a machine out, **In-service date** holds the day you fill in the form — change it if needed. A machine without that date (deleted on **Basic**, or carried over from the old program) is not depreciated — its net book value equals its purchase value.
- When the machine is returned, it goes into stock at its net book value.

Only an account with the **Costs & margins** right sees the **Purchase value**, **Accumulated**, **Net book value** and the depreciation rate.
