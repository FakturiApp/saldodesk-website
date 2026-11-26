---
title: How do I turn a quote or proforma into an invoice?
topic: documents
screens: [documents.new.offer, documents.view.offer, documents.new.proforma, documents.view.proforma]
module: null
refusals: [document.proforma_has_money, service.offer_cancel]
related: [napravi-faktura, avansna-faktura, nacrt-ili-izdadena]
---
<!-- English translation of src/content/help/ponuda-vo-faktura.md. Translate again when that file changes. -->

A quote and a proforma don't change the stock, and the customer owes nothing for them. When the customer agrees, you make an invoice from them with one click.

## New quote
1. At the top, click **Documents**, then **Sales**.
2. Click **Offer**, then the blue "+" button at the end of the row of document types.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/sell-ponuda-plus.webp" alt="The blue “+” button for a new quote" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:59.22%;top:27.78%;width:2.50%;height:4.44%"></span><span class="shot-tag is-above is-left" style="bottom:72.22%;right:39.53%">Click here</span></span><figcaption>The blue “+” button for a new quote</figcaption></figure>
3. **New document** opens with **Offer** chosen. In **Partner**, choose the customer.
4. If you want, enter in **Valid until** how long the quote is valid.
5. Add the products just like on an invoice and click **Issue**.

A proforma is made the same way: in the row of types, click **Proforma**.

## Invoice from a quote or proforma
1. Open the issued quote (or proforma).
2. Click **Make invoice**. The invoice is issued right away, with the same lines, prices and discounts. The date is today, and the payment deadline fills in by itself.
3. If you want to change something first (quantity, price, deadline), click **Invoice with changes** instead. The invoice opens as a draft. Change what you need, click **Save**, then **Issue**.

If the customer paid an advance on the proforma: to deduct the advance, click **Invoice with changes** and tick it in the **Advance** section. See [The customer paid in advance — how do I issue an advance invoice?](../avansna-faktura/).

After the invoice, the quote says "Another document was made from this one — changes are made there:" with the invoice number. The **Edit** and **Make invoice** buttons are gone.

## Cancel a quote or proforma
An issued quote or proforma that is no longer valid is cancelled: open it and click **Cancel**. The app asks first. The reservations from the document are released. If an invoice has already been made from it, the invoice stays.

A proforma with a payment on it can't be cancelled while that payment stands: first void the payment and the advance invoice made from it. A quote from a service ticket is handled on the ticket itself.

## Expired quote
Once the **Valid until** date passes, the quote shows **Expired**. You can still make an invoice from it, but the app asks first, because the price is from an old quote. If the quote is valid again, click **Edit** and change **Valid until**.
