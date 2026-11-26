---
title: How do I track devices by serial number?
topic: products
screens: [products.serial, products.window.enable_serials, products.window.serial_lookup]
module: null
top: false
related: [nov-proizvod, zaliha-na-proizvod, rezervacija, serii-i-rokovi]
---
<!-- English translation of src/content/help/seriski-broevi.md. Translate again when that file changes. -->

With serial numbers, each device (printer, copier…) is tracked on its own: when it was received, which warehouse it is in, and who it was sold to.

Serial numbers come with the "Warehouse management" or "Rentals" module.

## How to turn them on
- On a new product: tick **Serial numbers** before you click **Save**.
- On a product that already exists: open it and tick **Serial numbers**. If the product has stock, the **Enable serial numbers** window opens. For each warehouse, write the numbers of the devices that are there, one per line — exactly as many as are in stock. Click **Save**. If in **Settings** → **Company**, **Serial numbers at receipt** is set to "optional", you can also enter fewer — the devices without a number get one when they are sold.

A service has no serial numbers.

## How to turn them off
Serial numbers can be turned off only when the product has no stock — 0 in every warehouse, and no sale issued without stock that is still waiting for goods. Open the product, untick **Serial numbers**, then click **Save**. While there is stock or a shortfall, the field is locked and next to it it says "Cannot be turned off while there is stock or a shortfall". They also cannot be turned off while any machine of that model is rented out to a client — when it comes back, it has to carry its own number.

## On receipt (goods receipt)
When you choose such a product, under the line it says **Serial numbers** and how many have been entered, for example 0/2. In the field next to it, type or scan the number and press Enter. Repeat for each device.
If the line says "(the rest — at sale)", your company also receives devices without a number. Then the device's number is written in when it is sold. This is set in **Settings** → **Company**, under **Serial numbers at receipt**.

## On sale (invoice)
Under the line it says **Serial numbers** 0/1. In the field "search in stock…", type part of the number or scan it, and choose the device. If the device was received without a number, type the number from the device — it is recorded when you issue the invoice. The invoice is not issued until every device has its own number.

## Where a device is
1. In **Products**, click **Serial number**.
2. Type or scan the number.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/products-seriski-baraj.webp" alt="Searching by serial number" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:26.02%;top:28.47%;width:6.13%;height:2.78%"></span><span class="shot-tag is-above is-right" style="bottom:71.53%;left:29.08%">Click here</span></span><figcaption>Searching by serial number</figcaption></figure>
3. You see whether it is in stock and in which warehouse, which product it is, and which document it was received with. Click the number for more: where it went, with which document and to whom.

All the serial numbers of a product are on its **Stock** tab, in the **Serial numbers** table.

> **Important**
> Enter the number exactly as it is written on the device. With a wrong number, the device cannot be found later, or sold under its real number.
