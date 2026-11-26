---
title: How do I return goods to a supplier or enter a credit note from them?
topic: documents
screens: [documents.new.knizen_primen, documents.view.knizen_primen]
module: null
top: false
related: [faktura-od-dobavuvach, vnesi-priemnica]
---
<!-- English translation of src/content/help/vrati-stoka-dobavuvach.md. Translate again when that file changes. -->

When the supplier sends you a credit note — for goods you returned to them, for a bonus or a discount — or a debit note for an extra charge, you enter it as a **Received credit/debit note**.

1. At the top, click **Documents**, then **Credit notes**.
2. Click **Credit/debit note (received)**, then the blue "+" button. **Received credit/debit note** opens.
3. In **Document the goods arrived on**, type a number or the supplier's name and choose the goods receipt, the Receipt invoice or the foreign-currency invoice. **Supplier** fills in by itself.
4. Enter the **Supplier's number** — the number of their document — and the **Invoice date**, the date written on it. **Receipt date** is today.
5. Choose **Returned goods** or **Money only**, then continue below.

## Returned goods
6. Under **Returned goods**, the lines of the document appear. **Bought** shows how many arrived.
7. In **Returning**, enter how many pieces you are returning. If the product has serial numbers, choose which pieces are going back.
8. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1000"><img src="/help-img/en/buy-vrati-stoka.webp" alt="The lines to return and the Returning column" width="1280" height="1000" loading="lazy" decoding="async"><span class="shot-ring" style="left:89.60%;top:61.22%;width:5.48%;height:3.80%"></span><span class="shot-tag is-above is-left" style="bottom:38.78%;right:7.66%">Click here</span></span><figcaption>The lines to return and the Returning column</figcaption></figure>
The goods leave stock at the current cost price, and the debt to the supplier goes down. Returned goods always go with **Credit (we owe less)**.

## Money only — bonus, discount, price correction
6. Choose **Money only**.
7. In **Type**, choose **Credit (we owe less)** or **Debit (we owe more)**.
8. Enter the **Amount** excluding VAT and a **Description**. **VAT rate** is set to 18 %; if the bonus is for goods at 5 % or 10 %, choose that rate. The app works out the VAT by itself.
9. Click **Save**.

If the credit note is not for a particular document, leave the **Document the goods arrived on** field empty and choose the **Supplier** by hand.

## Good to know
- The document is issued right away, with **Save**. There is no draft.
- If you made a mistake, open it and click **Void**. The goods go back into stock, and the debt to the supplier is again as it was before.
- Tick **VAT not deductible** only when the VAT on the document may not be deducted.

## From a foreign-currency invoice — a foreign supplier
If the goods came with a foreign-currency invoice, choose that invoice in **Document the goods arrived on**. Then:
- The document is in the invoice's currency (for example EUR), at its exchange rate. Returned goods are credited at the price from the foreign-currency invoice, and with **Money only** you write the **Amount** in that currency.
- There is no VAT — a foreign supplier does not charge domestic VAT. So the document does not go into the purchase VAT book.
- The debt to the supplier goes down in the currency of the foreign-currency invoice.
- While the document exists, the foreign-currency invoice can be neither edited nor voided. If you need to, void this document first.
- A document from a foreign supplier without a foreign-currency invoice is still entered by hand, with no document in **Document the goods arrived on**.
