---
title: How do I create a package type?
topic: waste
screens: [waste.tab.types, waste.window.type]
refusals: [waste.type_in_use, waste.type_in_use_inactive, waste.type_in_use_inactive_one]
module: waste
top: false
related: [otpad-vid-na-proizvod, otpad-paleti, otpad-mesechen-izveshtaj]
---
<!-- English translation of src/content/help/otpad-vidovi-pakuvanje.md. Translate again when that file changes. -->

A package type tells how much the packaging of one piece weighs, by material. Products with the same packaging share one type — for example all A4 printers that come in the same box. Each company makes its own types.

1. At the top, click **Waste**, then **Package types**.
2. Click **+ New type**. The **New package type** window opens.
3. In **Type**, write a name, for example "A4 printer box".
4. Click **+ Component**. A row appears for one part of the packaging. Fill it in:

- **Description** — for example box per piece, shared box, styrofoam, bag;
- **Material** — one of the seven (styrofoam and foam are Plastic);
- **Weight (kg)** — how much that part weighs;
- **Pieces** — how many products that part holds: 1 for the box of the piece itself, 36 for a box with 36 mugs.

5. For each other part (styrofoam, bag…), click **+ Component** again. A row is deleted with ✕.
6. Below them, **Kg per piece** shows how much packaging one piece carries, by material.
7. In **How it travels**, choose how the goods arrive on pallets, and in **How many fit on one pallet**, how many pieces one pallet holds — see [How are pallets counted on imports?](../otpad-paleti/).
8. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1000"><img src="/help-img/waste-vid-nov.webp" alt="New package type with one component" width="1280" height="1000" loading="lazy" decoding="async"><span class="shot-ring" style="left:21.25%;top:63.74%;width:10.05%;height:3.80%"></span><span class="shot-tag is-above is-right" style="bottom:36.26%;left:26.28%">Click here</span></span><figcaption>New package type with one component</figcaption></figure>
A type with no component at all is 0 kg on purpose — for example a part that travels in the machine's box.

Then you give the type to the products — see [How do I give a package type to a product or a whole category?](../otpad-vid-na-proizvod/).

## When the packaging changes
If the supplier packs differently from some date on, don't change the old type — the old months must keep the old packaging.

1. Open the type (click its name).
2. In **New version from date**, choose the date the new packaging applies from.
3. Click **Add version**. The new version starts as a copy of what is on the screen.
4. Fix the components and click **Save**.

The versions are in **Versions**, above the components. Each invoice counts the version that applies on its date.

If you made a mistake, just fix the version and click **Save**. A wrong date is fixed in **Valid from**; a version entered by mistake is deleted with **Delete version**. The first version ("from the start") always stays.

## Copy, archive, delete
- **Copy** makes a new type with the same components — good for similar packaging.
- **Archive** removes the type from the choices, but the products that have it are still counted with it. You see the archived ones with the **Archived** button above the list.
- **Delete** deletes only a type nobody uses. If products, categories or shipments use it, the app asks you to archive it.

## Package types from Excel
Below the list is **Package types from Excel**. **Export the types** takes all types into Excel, and **Download template** gives you an empty template. You choose the filled-in file in **File**. The app first shows what will change, and writes it only when you click **Import**.

> **Important**
> A version that is in the file is replaced in full: a component that is not in the file is deleted from that version.
