---
title: How do I enter the invoice from the supplier?
topic: documents
screens: [documents.new.receipt_invoice, documents.view.receipt_invoice, documents.view.receipt]
refusals: [docs.invoice_date_required, docs.invoice_date_after_receipt, document.unmatch_dropped_left, document.unmatch_cost_unknown, document.unmatch_average_blend, document.fpr_reissue_receipt_matched, document.fpr_reissue_receipt_cancelled, document.fpr_reissue_receipt_changed, document.fpr_reissue_header]
module: null
top: false
related: [vnesi-priemnica, nabavna-nepoznata, vrati-stoka-dobavuvach, vlezna-faktura-trosok, novi-ceni-od-nabavka]
---
<!-- English translation of src/content/help/faktura-od-dobavuvach.md. Translate again when that file changes. -->

You enter a domestic supplier's invoice for goods from the paper or from the PDF. In the app it is called **Receipt invoice**. With it, the supplier becomes your creditor, and the cost price of the goods becomes exact.

There are two ways: from a goods receipt, if you already entered the goods, or without a goods receipt.

## The goods are already entered with a goods receipt
1. In **Documents** → **Purchasing**, click **Goods receipt** and open the goods receipt.
2. Click **Enter the invoice**.
3. **New receipt invoice** opens, with the supplier and the lines from the goods receipt.
4. Check the **Supplier invoice number**.
5. In **Invoice date**, enter the date written on the invoice.
6. **Received on** is today — the day the invoice reached you. The invoice goes into VAT by this date. Change it if needed.
7. Compare the lines with the invoice. **Qty** and **Cost** should be the same as on the invoice. You can add or delete a line.
8. Click **Issue**.

This way there is no draft: the invoice is issued right away. The cost price of the goods is corrected to match the invoice, and the goods receipt is closed.

> **Important**
> The invoice is what counts. If it has fewer pieces than the goods receipt, the difference is taken off stock, and the goods receipt is locked. The app asks before that. Goods that have already left the warehouse cannot be taken off: then the app does not enter the invoice.

## Without a goods receipt
When the goods arrived together with the invoice:

1. In **Documents** → **Purchasing**, click **Receipt invoice**, then the blue "+" button. **New receipt invoice** opens.
2. Leave the **Goods receipt (open)** field empty.
3. Pick the **Supplier** and enter the **Supplier invoice number** and **Invoice date**.
4. If the company has more than one warehouse, pick in **Warehouse** where the goods go in.
5. Enter the lines: **Product**, **Qty** and **Cost** — the price without VAT from the invoice. Here the cost must be entered.
6. Click **Issue**. If you are not done yet, click **Save draft**.

The goods go into stock, and the invoice gets a number.

## What else is on the screen
- **Payment due** fills in by itself if the supplier has agreed payment terms. It is counted from the **Invoice date**.
- The **Invoice date** must not be after **Received on**.
- Tick **VAT not deductible** only when the VAT on the invoice must not be deducted, for example for entertainment or a passenger car. The invoice stays in the VAT purchase book, but its VAT is not deducted.

## After issuing
After **Issue** (and after **Enter the invoice**), the **New selling prices** window opens — there you set the new selling and dealer prices from this purchase. See [How do I change selling prices when a new purchase arrives?](../novi-ceni-od-nabavka/).

- When you pay, click **Record a payment** on the invoice.
- An invoice entered without a goods receipt has **Edit** and **Cancel**.
- An invoice entered from a goods receipt (with **Enter the invoice**) can no longer be changed, but it can be cancelled.

## Cancel an invoice entered from a goods receipt
Open the invoice and click **Cancel**. The app first asks what is being cancelled:

- **Cancel only the invoice** — the goods receipt is open again and waits for its invoice. The stock goes back to the quantities on the goods receipt, and the cost price to the price on the goods receipt — both for the goods on the shelf and for the goods already sold. After that, the invoice can be entered again (see below).
- **Cancel both** — both the invoice and the goods receipt are cancelled, and all their goods leave the warehouse.

Pick one, then click **Confirm**.

After **Cancel only the invoice**, the invoice can be issued again in two ways: on the goods receipt click **Enter the invoice**, or on the cancelled invoice click **Edit and issue again** — you correct it if needed, and with **Issue** it is tied to the same goods receipt again, just like with **Enter the invoice**. **Edit and issue again** is not there if:
- the goods receipt got another invoice in the meantime or was cancelled;
- the goods receipt was changed, so the invoice's lines are no longer its own.

The cancelled invoice keeps its number even when it is the last receipt invoice issued, so it is issued again under the same number.

The invoice you issue again stays in the warehouse of its goods receipt. If you change the **Warehouse** on the draft, **Issue** is refused — set the warehouse back to the goods receipt's, then issue.

**Cancel only the invoice** does not bring back the selling prices. If the invoice raised the selling and dealer price on its own (the "By themselves from the markup" setting), they stay — change them on the product if needed.

Cancelling does not work when:
- the invoice is paid, or there is a received credit note on it (or on the goods receipt);
- the invoice's VAT period has been filed;
- for **Cancel both**: part of the goods has already left the warehouse;
- for **Cancel only the invoice**: the goods the invoice added on top of the goods receipt have gone out, or part of a line on which the invoice had fewer pieces than the goods receipt has gone out;
- for **Cancel only the invoice**: on a goods receipt line the cost price was left empty, so the invoice brought the price — then cancel both. A cost price of 0 that you wrote is not a problem;
- for **Cancel only the invoice**, on a product kept at average cost price: goods left it after the goods receipt, and the invoice had fewer pieces than the goods receipt; or the invoice had a different price, and goods mixed with another purchase were sold after it. Then the sold goods cannot be put back exactly at the goods receipt's price — cancel both.

When **Cancel only the invoice** does not work, the same window says why and what you can do instead: pick **Cancel both** (as long as all their goods are still in the warehouse), or keep the invoice and enter a received credit note for the difference — see [How do I return goods to a supplier or enter a credit note from them?](../vrati-stoka-dobavuvach/).
