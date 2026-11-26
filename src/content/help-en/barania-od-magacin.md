---
title: How do I request stock from another warehouse?
topic: products
screens: [products.transfer_requests, products.window.fetch, products.low_stock]
module: warehouse
top: false
related: [magacini, niska-zaliha, prenos-megju-magacini, zaliha-na-proizvod]
---
<!-- English translation of src/content/help/barania-od-magacin.md. Translate again when that file changes. -->

When one warehouse (a shop, for example) is short of goods that another one has, it sends a request. The warehouse that has the goods sends them with a transfer — see [How do I move stock from one warehouse to another?](../prenos-megju-magacini/).

The **Low stock** screen and minimum stock are there only when the company has both "Warehouse management" and "Purchasing".

## How do I request
From the **Low stock** screen:
1. In **Products**, click **Low stock**.
2. Next to the product, click **Fetch from warehouse**. (The button is there only if another warehouse has free stock.)
3. Under **From warehouse**, pick which warehouse — each one shows how much it has.
4. Check the **Quantity**. If you want, write a **Note**.
5. Click **Send request**.

You can also send a request while you are writing an invoice: if the document's warehouse does not have enough, click **Bring here** under the line.

## How do I send the requested goods
1. In **Products**, click **Low stock**, then **Requests**. If **Home** shows **Transfer requests waiting** under **Needs attention**, you can also click there.
2. Tick the requests you are sending. For a product with serial numbers, pick the units too.
3. Click **Dispatch**, then **Dispatch** again in the question that opens.

The app makes one transfer for each direction (from one warehouse to another). While the goods are on the way, the request is "In transit". When the warehouse that asked for them receives the transfer, the request is "Received". If **A transfer lands in the destination immediately** is turned on in **Settings** → **Company**, there is no "In transit" step — the request is "Received" right away.

## If it cannot be sent
- **Refuse** — pick or write a reason. The warehouse that asked sees the refusal on the **Low stock** screen. Refused requests are under **Refused**.
- **Withdraw request** — if the request is no longer needed.

A request on its own does not move the goods. The goods move only when you click **Dispatch** and the transfer is received in the other warehouse.
