---
title: How do I enter a bank statement?
topic: payments
screens: [payments.window.statement, payments.list, documents.list]
module: null
related: [vnesi-plakjanje, avans-od-kupuvach, premesti-plakjanje]
---
<!-- English translation of src/content/help/vnesi-izvod.md. Translate again when that file changes. -->

You enter the statement all at once: one line for each partner who paid you or whom you paid. Each line closes that partner's invoices by itself.

1. In **Documents**, click **Payments** (top right).
2. Click **Enter a statement**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/payments-izvod-kopche.webp" alt="The Enter a statement button" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:40.53%;top:41.07%;width:11.24%;height:5.00%"></span><span class="shot-tag is-above is-right" style="bottom:58.93%;left:46.15%">Click here</span></span><figcaption>The Enter a statement button</figcaption></figure>
3. In **Statement no.**, write the number from the statement. Without it, the statement is not saved.
4. **Date** is today. Change it to the date on the statement.
5. If the company has more than one bank account, check the **Account**. The main account is set — if the statement is from another one, change it.
6. In the first line, choose the partner, then **In** (the money came in to us) or **Out** (we paid), and enter the amount.
7. Under the line, in **Which invoices this closes**, the app ticks the partner's oldest open invoices, as far as the amount goes. If the partner paid for a different invoice, change the ticks.
8. If something is left over from the amount, under the line it says **Left as an advance**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/payments-izvod-red.webp" alt="A statement line with the invoices it closes" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:16.25%;top:35.02%;width:66.72%;height:16.88%"></span><span class="shot-tag is-above is-right" style="bottom:64.98%;left:49.61%">Click here</span></span><figcaption>A statement line with the invoices it closes</figcaption></figure>
9. For the next partner, click **Add a line**. Take out a wrong line with **Remove**.
10. Check the **Lines total**: it is money in minus money out, and it should match the statement.
11. Click **Save**.

## What happens
- Each line becomes a separate payment in the **Payments** list, with the statement number.
- The statement is saved whole or not at all: if one line cannot be recorded, nothing is recorded, and the window tells you why. Fix the line and click **Save** again.
- If a customer's line leaves an advance in denars, **Issue an advance invoice** is offered above the list — see [The customer paid in advance — how do I issue an advance invoice?](../avansna-faktura/).

> **Important**
> Do not enter again in the statement a payment you have already entered on the invoice (with **Record a payment**). The second entry does not pay the same invoice again — it would close another of the partner's documents or stay as an advance.

## Payment abroad
If the money is in euros or another currency, tick **Payment abroad** on the line, choose the **Currency** and enter the **Exchange rate**. The amount is written in that currency. Such a line closes only documents in the same currency, including a foreign-currency invoice.

## Awaiting statement
A payment through a bank account without a **Statement no.** is not complete: next to it it says **Awaiting statement**. In **Payments**, the **Awaiting statement** button shows all such payments. To complete one:
1. Click the payment.
2. Click **Edit**.
3. Enter the **Statement no.** and click **Save**.
