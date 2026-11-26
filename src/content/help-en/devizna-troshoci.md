---
title: How do I enter import costs and finalize the import invoice?
topic: documents
screens: [documents.view.import_invoice, documents.view.import_receipt]
module: import_export
top: false
related: [devizna-faktura, nabavna-nepoznata, vlezna-kniga, ddv-04]
---
<!-- English translation of src/content/help/devizna-troshoci.md. Translate again when that file changes. -->

Once the import invoice is issued, there is a green section with the payments and costs under the lines. From it, the app calculates the final cost price of the goods: at the rate you paid, together with the import costs.

Open the import invoice: in **Documents** → **Purchasing**, click **Import invoice**, then click on it.

## 1. Payments
Every payment to the supplier has its own rate. From them the app calculates the **Middle rate**.

1. In **Payments**, enter the **Date**, **Statement no.**, the **Amount** in the invoice's currency and the **Rate** it was paid at.
2. Click **Add payment**.

If the payment has already been entered, for example from the bank statement, click **Link an earlier payment** and pick it.
## 2. Costs
3. In **Costs**, enter the amounts without VAT, in denars: **Transport**, **Customs processing**, **Insurance**. For another cost, click **+ cost** and write a name and amount.
4. In **Customs groups**, for each group from the customs declaration enter **Customs**, the **VAT (amount)** paid at customs, the **Rate %** (the VAT rate from the declaration) and **Excise**. Under VAT the app offers a suggestion; clicking it fills it in. The number from the declaration is what counts. Without the **Rate %**, the VAT base does not go into the VAT-04.
5. Click **Save costs**. If you leave the document before that (back, another tab, another document), the app asks first, so that what you entered is not lost.

The "in cost" tick next to each cost decides whether it goes into the cost price. A ticked cost is spread over the goods by their value. An unticked one is only recorded. **VAT — local costs (refundable)** usually stays unticked, because that VAT is refunded.

Above **Customs**, **VAT (amount)** and **Excise** there is also an **in cost** tick each. The one above **VAT (amount)** is ticked to start. While it is ticked, VAT paid at customs goes into the cost price and is not deducted in the purchase book — see [Where is the VAT purchase book and what is in it?](../vlezna-kniga/).

## 3. Finalize
6. Click **Finalize**. You can do it without a payment too: then the rate from **Issue** applies, and when you pay, the prices are recalculated by themselves.
7. If you have not entered a single cost, the app asks whether to finalize anyway. Confirm only if the import really has no costs.

## What happens
- The green section under the lines now says **Final**.
- The **Import receipt** already exists — the app makes it with **Issue**, marked "provisional". With **Finalize** it becomes final: the same document, with the same number. You find it under **Connected documents**.
- Every payment and every saved cost recalculates the import receipt — both before and after finalizing. The cost of the goods still in stock is corrected. For goods already sold, the difference is calculated on the sales themselves.
- You can keep changing payments, costs and lines (with **Edit**) afterwards.

Only an account with both permissions enters and changes payments and costs: **Create & edit** (for documents) and **Costs & margins**. Without the first, the section is visible, but the fields cannot be changed and the buttons are not there. Without the second, the section is not there — its figures are cost prices.

> **Important**
> Before **Finalize**, check that you entered all the costs from the customs declaration and from the forwarding agent. Without them, the cost price is lower than the real one, and the profit looks bigger.
