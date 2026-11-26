---
title: How do I reserve stock for a customer?
topic: products
screens: [products.window.reserve, products.window.reserve_serials, products.view.stock]
module: null
top: false
related: [zaliha-na-proizvod, seriski-broevi]
---
<!-- English translation of src/content/help/rezervacija.md. Translate again when that file changes. -->

A reservation holds stock for a customer. The goods stay in the warehouse, but they are no longer free: nobody else can sell them without being asked.

## From the product
1. In **Products**, open the product and click the **Stock** tab.
2. Under **Reservations**, click **Reserve**.
3. Enter the **Quantity**. If you have more than one warehouse, choose the **Warehouse**.
4. In **Customer (optional)**, choose who the goods are for.
5. **Hold until** is already filled in (two weeks from today). Change it if you need to. On that day, at the end of the day, the reservation ends by itself.
6. If you like, write a **Note**.
7. Click **Reserve**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/800"><img src="/help-img/en/products-rezerviraj.webp" alt="The Reserve stock window" width="1280" height="800" loading="lazy" decoding="async"><span class="shot-ring" style="left:61.61%;top:52.86%;width:6.36%;height:4.50%"></span><span class="shot-tag is-above is-left" style="bottom:47.14%;right:35.21%">Click here</span></span><figcaption>The Reserve stock window</figcaption></figure>
The **Stock** tab now shows how much is reserved and how much is free, and the reservation is in the list: for whom, in which warehouse and until when.

For a product with serial numbers, you can also mark the exact devices you are promising. If you mark none, only a quantity is reserved.

## From a quote or proforma
Open the quote or proforma and click **Reserve**. All its lines are reserved, in its warehouse, until the **Valid until** date (if there is none — two weeks). When you make an invoice or dispatch note from it, the reservation ends by itself for the pieces that went out.

If the quote has a product with serial numbers, a list of the devices in stock opens after **Reserve**. Mark the ones you are promising (optional) and click **Reserve**. Anything not marked is reserved by quantity only.

## When it ends
- When **Hold until** passes (or **Valid until** on the quote).
- When you click **Release** on the reservation.
- When the document it was made from is invoiced or cancelled.

Ended reservations are not deleted. Click **Ended** to see when and why each one ended.

## If someone wants to sell the reserved stock
When you issue an invoice that also takes from the reserved stock, the app asks whether to take it. If you click **Take anyway**, the sale goes through and the reservation is reduced by that amount.

> **Important**
> A reservation does not take the goods out of stock. Stock goes down only when an invoice or dispatch note is issued.
