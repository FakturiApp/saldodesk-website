---
title: How do I enter an import invoice (foreign currency)?
topic: documents
screens: [documents.new.import_invoice, documents.view.import_invoice]
module: import_export
top: false
related: [devizna-troshoci, faktura-od-dobavuvach, vnesi-priemnica, otpad-amballaza-na-devizna]
---
<!-- English translation of src/content/help/devizna-faktura.md. Translate again when that file changes. -->

An import invoice is an invoice from a foreign supplier, in a foreign currency. As soon as you issue it, the goods are in stock, at a temporary (provisional) rate. You add the payments and the import costs (customs, transport…) later, on the same invoice.

1. At the top, click **Documents**, then **Purchasing**.
2. Click **Import invoice**, then the blue "+" button. **New import invoice** opens.
3. In **Supplier**, pick the supplier. **Currency** fills in by itself if the supplier has its own currency. If not, pick it.
4. Enter the **Supplier invoice number** and the **Invoice date** — the date written on the invoice. **Received on** is today.
5. If the company has more than one warehouse, pick in **Warehouse** where the goods go in.
6. In **Rate (provisional)**, enter a rate for the currency, for example today's. The grey number in the field is only an example: enter the rate yourself.
7. Enter the lines: **Product**, **Qty** and **Cost** — the price from the invoice, in the invoice's currency.
8. In **Customs group**, pick which group from the customs declaration the product belongs to. If you need a second one, pick "+ Group 2".
9. Click **Issue**. If you are not done yet, click **Save draft**.
On the issued invoice, the green section under the lines says "Initial — the prices are not final". This means the cost price is temporary: at the provisional rate and with the costs entered so far. With **Issue**, the app right away also makes an **Import receipt** — marked "provisional" until you finalize the import invoice. You find it under **Connected documents**. The next step is [How do I enter import costs and finalize the import invoice?](../devizna-troshoci/).

## If you made a mistake
- You change a draft with **Edit**.
- An issued import invoice is also changed with **Edit** — even after it is finalized. The supplier, currency, warehouse, date and rate stay the same. A line you change must still be fully in the warehouse; if part of its goods has already gone out, the change is refused and the product is named. Only a new price on a line with the same quantity is accepted even when part has been sold: the difference also reaches the goods that were sold. The prices and the import receipt are recalculated by themselves.
- **Cancel** at the top of the import invoice cancels it, even when finalized, as long as all the goods are in the warehouse. If there are payments, the app lists them and they are deleted with the cancellation — only a user with the cost-price permission can do this. If someone added a payment in the meantime, the app asks you to refresh the page and confirm again. A payment whose surplus was used as an advance on another document is not deleted: first remove the advance from that document. The import receipt is cancelled with it.

After **Finalize**, the **New selling prices** window opens, with the cost from the import receipt — with the costs, in denars. See [How do I change selling prices when a new purchase arrives?](../novi-ceni-od-nabavka/).
