---
title: How do I change the selling prices when a new purchase arrives?
topic: documents
screens: [documents.window.new_prices, documents.view.receipt_invoice, documents.view.import_invoice]
module: null
top: false
related: [faktura-od-dobavuvach, devizna-faktura, promeni-ceni, ceni-na-proizvod]
---
<!-- English translation of src/content/help/novi-ceni-od-nabavka.md. Translate again when that file changes. -->

When goods arrive at a new price, the app offers to set the new selling and dealer price right away, from the purchase itself.

The **New selling prices** window opens by itself:

- when you click **Issue** on a receipt invoice;
- when you enter the supplier's invoice with **Enter the invoice**;
- on an import invoice — when you click **Finalize**. Before that, the price does not include the costs yet.

Later you open it with the **New selling prices** button at the top of the document itself.

1. In the window, each product from the document is in its own row. You see the **Previous cost** (the price from the last purchase before this one) and the **New cost** (the price from this document, with the costs, in denars).
2. In the row, type a markup in the **Selling markup %** field, or type the price itself in the "Selling price — new" column. One fills in the other. The same goes for the dealer price. If the company has renamed the prices in **Settings** → **Fields**, the columns carry its name.
3. For the same markup on all products, type it at the top in **Markup for all** and click **Fill**.
4. If the product or its category already has a saved markup, click **From the product / category** — each row fills in from its own.
5. Click **Show**. Under the table a list appears with the old and the new price.
6. If it is right, click the save button. It says how many prices will change.

If you have typed prices and click **Close** or ✕ without saving them, the app asks first. **Continue** closes the window without saving them, **Cancel** takes you back to what you typed.

The price with VAT is rounded to whole denars, and the price without VAT is calculated back from it. The window shows the whole price with VAT.

The price without VAT is kept with four decimals, so the price with VAT stays whole. For example, 100 with 18 % VAT becomes 84,7458 without VAT. Products, the label and the invoices then show exactly 100,00 with VAT.

If you tick **Remember the markup on the products**, the markup you typed is saved on each product. Next time the window starts from it.

If someone has changed a price on one of the products in the meantime, nothing is saved. The window says which products and reads their prices again; what you typed stays. Click **Show** again, then save.

**Change prices in Products** opens **Products** with the document's products already ticked.

## Letting the prices change by themselves
In **Settings** → **Company**, in the **Stock and cost** section, under **New prices on a purchase**, pick **By themselves from the markup** and click **Save**. From then on, on **Issue** of a receipt invoice, on **Enter the invoice** and on **Finalize** of an import invoice, every product that has a markup gets the new price by itself.

By themselves, prices only go up. If the new price would be lower, the price stays, and the window offers the lower one as a suggestion. In the window, those products carry "changed automatically". A product without a markup stays as it is. A later change to the document does not change the prices again.

**Suggestion only** is the default: prices change only when you save them in the window.

Every changed price is recorded on the product itself, in the **Changes** tab, with the document number.

> **Important**
> Only an account with the right to see costs sees the window and the markup. Only an account that may also change products saves the prices.
