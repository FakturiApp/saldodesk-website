---
title: What does "unknown" instead of a cost mean?
topic: documents
screens: [documents.view.receipt, documents.new.receipt, documents.new.receipt_invoice, reports.period, reports.products]
module: null
top: false
related: [vnesi-priemnica, faktura-od-dobavuvach]
---
<!-- English translation of src/content/help/nabavna-nepoznata.md. Translate again when that file changes. -->

If you leave the **Cost** field empty on a goods receipt, the goods receipt is still issued and the goods go into stock. Instead of a price, the line says "unknown" in red.
This means:

- The goods can be sold right away.
- The goods go into stock with a cost of 0. So the product's average cost and the stock value count those pieces without a price until the invoice arrives.
- Sales of those goods have no cost for now. In **Reports**, next to the cost there is a ⚠ sign, and it says how many lines have no cost. Profit is calculated without them.

## When the invoice arrives
1. Open the goods receipt and click **Enter the invoice**.
2. On the line without a price, the **Cost** field is empty. Enter the price from the invoice, without VAT.
3. Enter the **Invoice date** and click **Issue**.

The price is written onto the goods still in stock, and onto the sales made before that. In **Reports**, those sales get a cost, and the ⚠ sign for them goes away.

> **Important**
> Do not type 0 when you do not know the price. 0 is a price: the sales would show a profit of the whole amount. Leave the field empty.
