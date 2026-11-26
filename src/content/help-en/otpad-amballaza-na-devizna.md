---
title: How do I check or change the packaging on one import invoice?
topic: waste
screens: [documents.view.import_invoice]
refusals: [waste.pallets_empty, waste.shared_target_invalid]
module: waste
top: false
related: [otpad-paleti, otpad-vid-na-proizvod, otpad-mesechen-izveshtaj, devizna-faktura]
---
<!-- English translation of src/content/help/otpad-amballaza-na-devizna.md. Translate again when that file changes. -->

Under every import invoice is the **Packaging** section: how many kilograms of packaging that shipment brought in, by material. Usually everything fills in by itself — from the products' types and from the supplier's pallets. Here you change only what was different on this shipment.

1. Open the import invoice (in **Documents**, or with a click on the shipment in **Waste** → **Monthly report**).
2. Scroll down below the invoice, to **Packaging**. At the top it says how many kilograms in total.
3. In **How the shipment counts**, leave **By types** — from the lines' types and from the pallets.
4. In **Pallets**, check what it says under the buttons, for example "2 × Euro pallet — automatic …", with the calculation.
5. In the table, for each line, **Type** and **Where from** tell you which type is counted and whether it comes from the product, from the category or is "no type".
6. If you changed something, click **Save**.
## The shipment's pallets
- **Automatic** — the app counts the pallets from the lines. They stay automatic until you change this section.
- **Pallets** — you enter them yourself: click **+ pallet**, pick the **Pallet kind** and **Number** (a whole number). The weights can be changed for this shipment only.
- **No pallet** — the goods arrived loose.
- **On the same pallet as…** — two invoices arrived on one pallet. Pick the other import invoice; the pallet is counted there, once.

If it says "Pallets not entered", the supplier has no setting for what they ship on. Pick **Pallets** or **No pallet** here, or set up the supplier once for all shipments — see [How are pallets on imports counted?](../otpad-paleti/).

## A different type for this shipment only
If some goods arrived packed differently this time, pick another type in the **Type** column and click **Save**. The product keeps its own type. If the new type should always apply, after saving click **Make it the default** — it becomes the product's own type.

If the line is "no type" and there is a suggestion, the "Accept: …" button gives the type to the product.

## Special shipments
- **By hand** — you enter the seven kilogram figures yourself, for the whole shipment (for example shelving or a forklift).
- **Not reported** — the shipment does not count in the month's figures. It still appears in the table of shipments in the monthly report, with "Not reported" in the **Pallets / mode** column and 0 kg.

In **Note**, write down why, for later.

> **Important**
> Only an issued import invoice counts. On a cancelled invoice, the packaging is only shown and not counted.
