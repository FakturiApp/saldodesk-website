---
title: How do I find the figures for the monthly packaging report?
topic: waste
screens: [waste.tab.report]
module: waste
related: [otpad-amballaza-na-devizna, otpad-vid-na-proizvod, otpad-paleti]
---
<!-- English translation of src/content/help/otpad-mesechen-izveshtaj.md. Translate again when that file changes. -->

The collective operator (for example PAKOMAK) asks for seven figures every month: how many kilograms of packaging you brought in with imports, by material. The app calculates them from the month's import invoices.

1. At the top, click **Waste**. **Monthly report** opens.
2. The report opens on last month — the one you report. For another month, change the **Year** and **Month**.
3. At the top are the seven figures, in the order of the operator's form: Plastic, Paper, Metal, Glass, Wood, Composites, Aluminum.
4. Click **Copy** under the figure. The figure is copied the way it is written in the form — with a decimal comma, without a thousands dot (for example 1235,64).
5. Paste it into the operator's form (Ctrl+V). Repeat for each material.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/680"><img src="/help-img/en/waste-mesec.webp" alt="The month's seven figures and the Copy button" width="1280" height="680" loading="lazy" decoding="async"><span class="shot-ring" style="left:2.89%;top:56.37%;width:3.90%;height:4.41%"></span><span class="shot-tag is-above is-right" style="bottom:43.63%;left:4.84%">Click here</span></span><figcaption>The month's seven figures and the Copy button</figcaption></figure>
The app does not send anything to the operator. You enter the figures yourself, in their form.

## Mark the month as reported
Once you have sent the report to the operator, record that in the app too:
1. Under **Year** and **Month**, click **Mark as reported**.
2. Check the seven figures. Change the **Report date** if needed and, if you like, write a **Note**.
3. Click **Report**. The month now shows "Reported" with the date.

A reported month keeps the figures as they were reported. If something changes later (an import invoice, a packaging type, pallets), under each figure it says **Reported**, **Now** and **Difference**.

To correct it, click **Reopen**. The month is "Being corrected", and what was reported stays saved. When you report again to the operator, click **Mark as reported** again. Every report stays in the **Reports** table: when, what and who.

A month without import invoices can also be marked as reported — with seven zeros. For months reported before the app, click **Enter a reported month** and enter the figures as they were sent.

**Print** and **Excel** on a reported month offer a choice: **As reported** or **As it is now**.

Only an account with the **Waste — manage** right has **Mark as reported**, **Reopen** and **Enter a reported month**.

## What counts
- Only issued import invoices. A draft and a cancelled invoice do not count.
- The month follows the import invoice's **Receipt date**.
- Only goods. Services on the invoice (transport, forwarding) have no packaging.
- Domestic purchases do not count: the packaging on those goods was reported by whoever imported them.
- A goods receipt (import) made from the import invoice is not counted again.
- Goods returned to the supplier are not subtracted.

## Warnings
Under the figures, a yellow bar tells you how many warnings there are. The month can be reported with them too, but each one means something has not been counted:
- "no packaging type" — the product has no type, so its packaging is not counted;
- "Pallets not entered" — it is not known what pallets the shipment arrived on;
- "how many pieces fit on one pallet is not entered" — the type has no number for that pallet kind;
- "By hand — kilograms not entered" — the shipment is counted by hand, but the kilograms are missing;
- "The pallet is not counted — invoice … no longer carries it" — the shipment is **On the same pallet as…** another import invoice, but that one no longer has its own pallets (it is itself on someone else's pallet, has no pallet, is by hand, is not reported, or is cancelled), so the pallet is not counted anywhere. Pick another invoice, or enter the pallets on this one.

Click the warning. The place where you fix it opens: the product, the packaging type or the import invoice. If the **Suggestion** column has an "Accept: …" button, one click gives the suggested type to the product.

## The shipments and the year
Under the warnings is every import invoice of the month, with the kilograms by material and how the pallets were counted. A click on the row opens the invoice.

At the top left, **Year** shows all 12 months of the year, one under the other. A click on a month opens it. A month without import invoices shows "—", not zero.

> **Important**
> A product without a packaging type is not counted — not even as zero. Before you copy the figures, deal with the warnings.
