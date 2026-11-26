---
title: How do I set a credit limit for a customer?
topic: partners
screens: [partners.view.basic, partners.new, documents.new.invoice, documents.new.delivery]
refusals: [document.credit_blocked]
module: null
top: false
related: [partner-dolg, partner-kartichka, nacrt-ili-izdadena]
---
<!-- English translation of src/content/help/partner-kreditni-limit.md. Translate again when that file changes. -->

The credit limit is the most a customer may owe us. When the debt gets close to the limit, the app warns you. If you want, it can also refuse a new invoice.

## Set the limit
1. Open the customer (in **Partners**, click their name).
2. Click the **Finance** section to open it.
3. In **Credit limit**, enter an amount in denars, for example 100000.
4. If you don't want an invoice to be issued over the limit, tick **Block invoices and deliveries over the limit**. This field appears once you enter a limit.
5. Click **Save**.

The **Finance** section is visible only to an account with the **View payments & debt** permission. Only such an account can set a limit; if you don't have it, ask your administrator.

## What happens on the invoice
When you make an **Invoice — Dispatch note** or a **Dispatch note** for that customer, the app adds up their debt and the new document:
- When the total gets close to the limit, it says "The customer is getting close to the credit limit".
- When it goes over, it says "The customer is over the credit limit", together with the limit, the current debt, the debt with this document and how much it is over the limit.

The warning is at the top, right below the customer and the date, above the lines.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/960"><img src="/help-img/partners-limit-predupreduvanje.webp" alt="The credit limit warning on a new invoice" width="1280" height="960" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:49.09%;width:91.56%;height:3.96%"></span><span class="shot-tag is-above is-right" style="bottom:50.91%;left:49.61%">Click here</span></span><figcaption>The credit limit warning on a new invoice</figcaption></figure>
While there is room, above the total it quietly shows **Up to the limit** and how much is left.

Without blocking ticked, this is only a warning. The document can be issued.

## When blocking is ticked
If the customer is over the limit, after **Issue** it says "The customer is over the credit limit — the document won't be issued until they pay". The document stays a draft. Nothing is lost.

Blocking applies to invoices, dispatch notes and export invoices. On an export invoice there is no warning while you write it — it is stopped only at **Issue**.

When the customer pays, or when the limit on the card is raised, open the draft and click **Issue** again.

> **Important**
> Blocking works only if the company has the "Finance / Banking" module. Without it, only the warning remains and the invoice is issued.

## When exactly it warns
"Getting close" shows up when the debt reaches 80 % of the limit. You change that percentage in **Settings** → **Company**, in **Credit-limit warning (%)**.

Each user chooses how to see the warning: in **My profile** → **Windows and cards**, under **Credit limit reached**, choose **A bar at the top**, **A window to confirm** (asks before the document is saved) or **Nothing**.

## A salesperson without the finance permission
An account without the **View payments & debt** permission sees neither the debt nor the amount of the limit. On the card and on the invoice it sees only whether the customer may buy on credit: "Has a limit: … left", "The limit is reached" or "Blocked".
