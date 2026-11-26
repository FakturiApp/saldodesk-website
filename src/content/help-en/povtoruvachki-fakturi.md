---
title: How do I make an invoice that repeats every month?
topic: documents
screens: [documents.recurring.list, documents.recurring.edit, documents.list]
module: null
top: false
related: [napravi-faktura, nacrt-ili-izdadena, najdi-dokument]
---
<!-- English translation of src/content/help/povtoruvachki-fakturi.md. Translate again when that file changes. -->

For a customer who pays for the same thing every month (maintenance, a subscription), make a recurring invoice. The app makes the invoices by itself when the date comes.

Monthly invoices for rented machines with meters are not made here, but in **Rentals** → **Invoicing** — see [How do I invoice the rentals for the month?](../iznajmuvanje-fakturiranje/).

1. At the top, click **Documents**, then **Recurring** on the right. This button is visible only to accounts with the **View payments & debt** permission. If you don't have it, ask your administrator.
2. Click **New recurring**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/sell-povtoruvachka-nova.webp" alt="The New recurring button" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:45.03%;top:27.12%;width:9.57%;height:5.00%"></span><span class="shot-tag is-above is-right" style="bottom:72.88%;left:49.82%">Click here</span></span><figcaption>The New recurring button</figcaption></figure>
3. Choose the **Customer**.
4. In **Cycle**, choose **Monthly**, **Weekly** or **Every N days**. For the last one, also enter the **Number of days**.
5. In **Next run**, enter when the first invoice should be made.
6. If the contract runs for a limited time, fill in **Number of cycles** (e.g. 12) or **Valid until**. The profile stops at whichever comes first. Empty means no end.
7. Under **Missed cycles**, choose what to do if the app wasn't running on the day: **Create every missed one** or **Skip them, continue from the next**.
8. **Auto-issue**: without a tick, the app makes a draft that you review and issue yourself. With a tick, the invoice is issued by itself and gets a number right away.
9. Under **Lines**, choose a product, quantity and price, then **Disc. %** and **VAT** if needed — just like on an invoice. The customer's discount is offered by itself when you choose the product. The price field stays empty, with today's price shown in gray. If you leave the price empty, each invoice takes the product's price on that day. If you enter a price, it stays the same on every invoice. The same goes for **VAT**: if you don't change it, each invoice takes the product's rate. For a customer who is exempt from VAT, the line shows 0 % and their UJP (the Public Revenue Office) code. That isn't saved on the line: each invoice takes the customer's exemption as of the day it is made. If the exemption ends, the next invoice takes the product's rate.
10. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/960"><img src="/help-img/en/sell-povtoruvachka-forma.webp" alt="New recurring invoice" width="1280" height="960" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:62.53%;width:7.03%;height:2.08%"></span><span class="shot-tag is-above is-right" style="bottom:37.47%;left:7.34%">Click here</span></span><figcaption>New recurring invoice</figcaption></figure>
You find the drafts the profile makes in **Documents**, among the invoices. Open the draft, check it and click **Issue**.

## The list
In **Recurring**, for each profile you see the **Cycle**, **Next run**, how many invoices were **Created** and **Valid until**. Next to each profile there is:

- **Run now** — makes an invoice right away, without waiting for the date. The next run moves forward by one cycle;
- **Pause** — stops the profile for a while; **Resume** starts it again;
- **Delete** — deletes the profile. Invoices already made stay.

If **Behind** shows next to the date, the next run has passed but no invoice was made. Check whether the product and the customer still exist.

## Changing the lines
Open the profile from **Recurring**. The lines are changed in the same table — product, quantity, price, discount and VAT. **Save lines** below them saves only the lines. **Save** saves the schedule, and if you changed the lines, saves them too.

The new lines apply from the next run. Invoices the profile already made stay as they are.

A line that can't be invoiced isn't saved. For example: a VAT rate that doesn't match the UJP code, a product that isn't for sale, or a discount on a product that doesn't allow discounts. The message tells you what to fix. That way the profile doesn't stop later, on the day of the invoice.

> **Important**
> The customer on a profile can't be changed. For another customer, make a new profile.
