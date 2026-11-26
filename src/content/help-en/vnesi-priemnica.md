---
title: How do I enter a goods receipt when the goods arrive?
topic: documents
screens: [documents.new.receipt, documents.view.receipt, documents.list]
module: null
top: true
related: [faktura-od-dobavuvach, nabavna-nepoznata, vrati-stoka-dobavuvach, nov-proizvod, seriski-broevi, serii-i-rokovi, etiketi-so-ceni]
---
<!-- English translation of src/content/help/vnesi-priemnica.md. Translate again when that file changes. -->

You make the goods receipt as soon as the goods arrive, even before the supplier's invoice comes. Once you issue it, the goods are in stock and can be sold right away.

1. At the top, click **Documents**, then **Purchasing**.
2. Click **Goods receipt**, then the blue "+" button at the end of the row of document types. **New goods receipt** opens.
3. In **Supplier**, type part of the name and choose the supplier. If the supplier has agreed payment terms, **Payment due** fills in by itself.
4. If you have the supplier's invoice or dispatch note, copy its number into **Supplier invoice number**.
5. If the company has more than one warehouse, choose in **Warehouse** where the goods go in.
6. In the **Product** field, type a name, code or barcode and choose the product.
7. In **Qty**, enter how many pieces arrived.
8. In **Unit cost**, enter the cost price excluding VAT. If you do not know it yet, leave the field empty — see [What does "unknown" mean instead of a cost price?](../nabavna-nepoznata/).
9. If the product has serial numbers, under the line enter the number of each piece and press Enter after each number — see [How do I track devices by serial number?](../seriski-broevi/).
   If the product is tracked by batch, under the line enter the **Batch** and, for a new batch, its **Expiry** — see [How do I track batches and expiry dates?](../serii-i-rokovi/).
10. For another product, type in the empty row below it.
11. Click **Issue**.
The goods receipt gets a number, and the goods are in stock. For price labels for the goods that arrived, click **Print** on the goods receipt, then **Price labels** — see [How do I print price labels?](../etiketi-so-ceni/).

## If the product is not there
Type the name in the **Product** field and, at the bottom of the list, click **Create new** — see [How do I add a new product?](../nov-proizvod/).

## When the invoice arrives
Open the goods receipt and click **Enter the invoice** — see [How do I enter the supplier's invoice?](../faktura-od-dobavuvach/).

## If you made a mistake
Until an invoice has been entered for the goods receipt, it has **Edit** and **Void**. They fail if some of its goods have already left the warehouse.

Once you enter the invoice, neither the goods receipt nor the invoice can be changed any more. They can still be voided: open the invoice and click **Void**. There you choose whether only the invoice is voided (the goods receipt waits for its invoice again) or the goods receipt too — see [How do I enter the supplier's invoice?](../faktura-od-dobavuvach/). If voiding fails, the correction is made with a received credit/debit note — see [How do I return goods to a supplier or enter a credit note from them?](../vrati-stoka-dobavuvach/).

> **Important**
> **Issue** puts the goods into stock right away. If you are not finished yet, click **Save draft**.
