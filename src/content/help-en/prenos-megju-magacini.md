---
title: How do I move goods from one warehouse to another?
topic: documents
screens: [documents.new.transfer, documents.view.transfer, documents.window.transfer_receive]
module: null
top: false
related: [magacini, barania-od-magacin, popis, trebovanje-nivelacija-otpis]
---
<!-- English translation of src/content/help/prenos-megju-magacini.md. Translate again when that file changes. -->

Goods are moved between warehouses with a **Transfer**, in two steps: **Dispatch** when the goods leave and **Receive** when they arrive. While they travel, the goods are "in transit": they are still yours, but they can't be sold. The cost value of the goods doesn't change in the transfer.

If **A transfer lands in the destination immediately** is turned on in **Settings** → **Company**, the **Receive** step isn't there: after **Dispatch**, the transfer is **Received** right away.

You can also make a transfer from a request from another warehouse — see [How do I request stock from another warehouse?](../barania-od-magacin/).

## Dispatch
1. At the top, click **Documents**, then **Internal**.
2. Click **Transfer**, then the blue "+" button. **New transfer** opens.
3. In **From warehouse**, choose where the goods leave from, and in **To warehouse**, where they go.
4. In the **Product** field, choose the product, and in **Qty**, enter how much you are sending. Below the product it says how much there is in the warehouse it leaves from.
5. If the product has serial numbers, choose which pieces travel.
6. Click **Dispatch**.

The transfer gets a number. The goods leave the first warehouse, and the transfer shows **In transit**.

## Receive
7. When the goods arrive, open the transfer: in **Documents** → **Internal**, click **Transfer**, then click it.
8. Click **Receive**.
9. The **Receive transfer** window opens. For each product it says how much was sent, and the field holds the same number. If less arrived, enter how much really arrived.
10. Click **Receive**.

The goods are in the new warehouse, and the transfer shows **Received**. If less arrived, the app makes a **Write-off** for the difference by itself, linked to the transfer, so nothing disappears without a document.

## If you made a mistake
The transfer has **Edit** and **Cancel**. **Cancel** returns all the goods to the warehouse they left from.

## Only one warehouse
For a transfer you need at least two warehouses. If the company has only one, **New transfer** says that a transfer needs a second warehouse. A second warehouse can be added only with the "Warehouse operations" module — see [How do I add a new warehouse?](../magacini/).
