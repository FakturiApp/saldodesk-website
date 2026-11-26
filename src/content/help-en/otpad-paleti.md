---
title: How are pallets counted on imports?
topic: waste
screens: [waste.tab.settings, waste.window.pallet_kind, waste.window.supplier]
refusals: [waste.pallet_kind_in_use]
module: waste
top: false
related: [otpad-amballaza-na-devizna, otpad-vidovi-pakuvanje, otpad-mesechen-izveshtaj]
---
<!-- English translation of src/content/help/otpad-paleti.md. Translate again when that file changes. -->

The pallet (wood or cardboard) and the foil around it are packaging too. The app counts them per shipment, from three things you set up once: the pallet kinds, what the goods from each supplier arrive on, and how many pieces of one type fit on one pallet.

## 1. Pallet kinds
1. At the top, click **Waste**, then **Settings**.
2. In **Pallet kinds**, click **+ New pallet kind**.
3. Fill in **Name** (for example Euro pallet), **Material** (a wooden pallet is Wood, a cardboard one is Paper), **Weight per pallet (kg)** — how much an empty pallet weighs, and **Foil per pallet (kg)** — the stretch foil around one pallet. The foil is counted as Plastic.
4. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/600"><img src="/help-img/en/waste-vid-paleta.webp" alt="Pallet kind: material, weight and foil" width="1280" height="600" loading="lazy" decoding="async"><span class="shot-ring" style="left:31.25%;top:48.50%;width:17.89%;height:6.33%"></span><span class="shot-tag is-above is-right" style="bottom:51.50%;left:40.20%">Click here</span></span><figcaption>Pallet kind: material, weight and foil</figcaption></figure>
The new weight (and foil) applies right away to all automatic pallets — on past months too. A pallet entered by hand on a shipment (**Pallets**) keeps its own values. A month that is already reported keeps the figures it was reported with — its report shows them next to **Now**.

A pallet kind that is in use can't be deleted — archive it with **Archive**. The **In use** column tells you how many package types, suppliers and shipments use it.

## 2. What the supplier's goods arrive on
1. In **Pallets per supplier**, click the supplier. The suppliers listed there are the ones you have import invoices from; **All suppliers** shows the others too.
2. In **How the shipments arrive**, choose one of the three:

- **On pallets** — then choose the kind in **Pallet kind**;
- **No pallet** — the goods arrive loose (courier shipment, container);
- **Not set** — you don't know yet.

3. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/560"><img src="/help-img/en/waste-dobavuvach.webp" alt="How the shipments from one supplier arrive" width="1280" height="560" loading="lazy" decoding="async"><span class="shot-ring" style="left:33.75%;top:26.07%;width:21.48%;height:7.50%"></span><span class="shot-tag is-above is-right" style="bottom:73.93%;left:44.49%">Click here</span></span><figcaption>How the shipments from one supplier arrive</figcaption></figure>
Here you choose only the pallet kind, not how many pallets. How many pallets is worked out by each import invoice from its own lines.

## 3. How many fit on one pallet
In the package type window (**Waste** → **Package types**, click the type):
- **How it travels**: **On the supplier's pallets** (the goods go on the supplier's pallet kind), **Own pallet** (always on its own pallet, from any supplier — for example a copier on its own Euro pallet; choose the kind in **Pallet kind**) or **Takes no pallet space** (small goods on top of other goods, parts in the machine's box).
- For **Own pallet**, that pallet kind needs a row in **How many fit on one pallet**. If it's missing, the window warns you: invoices with this type will show a warning and won't count a pallet.
- **How many fit on one pallet**: click **+ Pallet kind**, choose a **Pallet kind** and enter **Pieces per pallet** — a whole number. For example an A4 printer: 4 on a Euro pallet; a toner: 40.

## How it is calculated
On each import invoice, each line takes up pieces ÷ pieces per pallet. The spaces on the same pallet kind are added up and rounded up to whole pallets. For example 2 printers (4 per pallet) and 20 toners (40 per pallet) = ½ + ½ = 1 pallet; 6 printers = 1½ → 2 pallets.

The kilograms are: whole pallets × the pallet's weight, plus the foil on each pallet.

> **Important**
> If the type has no number for the pallet kind its goods travel on, those goods add no pallet, and the month shows a warning.
