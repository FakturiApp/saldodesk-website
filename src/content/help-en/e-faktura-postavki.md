---
title: How do I get the company ready for e-Invoice (UJP)?
topic: settings
screens: [settings.tab.einvoicing, settings.window.ujp_readiness]
refusals: [ujp_start_not_set, ujp_before_start]
module: null
top: false
related: [e-faktura-ujp, podatoci-za-firmata]
---
<!-- English translation of src/content/help/e-faktura-postavki.md. Translate again when that file changes. -->

Before the first e-Invoice, the app needs to know from which date the company sends to UJP (the Public Revenue Office). This is set once, in **Settings** → **e-Invoice**.

## First: the company details
In **Settings** → **Company**, the tax number, the EPDD ID and the full address must be entered — see [How do I enter the company details, the logo and the bank accounts?](../podatoci-za-firmata/).

## E-invoicing start date
1. At the top right, click your name, then **Settings**.
2. Click **e-Invoice**.
3. In **E-invoicing start date**, enter the date from which the company sends documents to UJP.
4. Check **The company is a VAT payer**. Untick it only if the company is not a VAT payer.
5. Under **Category**, pick **Legal entity**, **Budget user** or **Other**.
6. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/settings-e-faktura.webp" alt="E-invoicing start date" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:53.92%;width:15.00%;height:5.28%"></span><span class="shot-tag is-above is-right" style="bottom:46.08%;left:11.33%">Click here</span></span><figcaption>E-invoicing start date</figcaption></figure>
Without a start date, nothing goes to UJP. Nothing goes before that date either, and a document dated before the start is never an e-Invoice.

> **Important**
> Don't register with UJP voluntarily before the app covers all the document types the company issues. Registration cannot be undone: from that day, every invoice must go through UJP.

## Annual accounts
When you file the annual accounts, click **+ Add year**, enter the **Year** and **Filed on**, then **Save**. From that date, a Storno cannot be made on a document from that year. Credit notes and debit notes can still be made.

## Readiness check
Under the form, the **Readiness check** counts the documents issued last month:
- **Ready** — they would go to UJP without a problem;
- **Type not built yet** — the app does not send that document type yet;
- **Data missing** — something is missing on the document or on the partner.

Click the number to see the documents. The **What is missing** column says what to fill in. Then click **Check again**.

For how the invoice is sent, see [How do I send the invoice to UJP?](../e-faktura-ujp/).
