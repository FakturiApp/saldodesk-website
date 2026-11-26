---
title: How do I record a payment for an invoice?
topic: payments
screens: [payments.window.new, documents.view.invoice, documents.view.receipt_invoice, documents.view.cost_invoice]
module: null
top: true
related: [vnesi-izvod, premesti-plakjanje, avans-od-kupuvach]
---
<!-- English translation of src/content/help/vnesi-plakjanje.md. Translate again when that file changes. -->

When the customer pays, you record the payment on their invoice. That way the invoice knows how much has been paid and how much is still open.

1. Open the invoice: in **Documents**, click it.
2. Below the invoice is the **Payments** section. Click **Record a payment**.
3. **Amount** already shows how much is still owed. If the customer paid a different amount, change it.
4. **Date** is today. If the money arrived on another day, change it.
5. If you like, choose the **Payment method** (by name, for example "Bank payment") and fill in the **Reference**.
6. Look at the **Closes** section: these are the documents this money pays, and how much on each.
7. Click **Save**.

## What happens
- Next to **Payments** it says **Paid**, **Partly paid** or **Unpaid**.
- Next to that you see **Invoiced**, **Paid** and **Remaining**.
- The payment also shows in the **Payments** list (in **Documents**, the **Payments** button at the top right).

## The Closes section
The app itself suggests which documents the money closes: first the document you opened the window from, then the partner's oldest open documents.

- You can change the amount on each row. An amount you entered yourself stays, even when you untick another row.
- If you untick a row, its money goes to the next open invoice. Under **Left as an advance** is only what does not close any document. The row stays in the list, so you can tick it again.
- If the customer paid more than they owe, the extra also stays as an advance. For what an advance is, see [What is an advance and where do I see it?](../avans-od-kupuvach/).

If the money went to the wrong invoice, that is fixed on the payment itself — see [The payment closed the wrong invoice — how do I move it?](../premesti-plakjanje/).

> **Important**
> Before **Save**, check the **Closes** section. The money first closes the document you opened the window from, and whatever is left goes to the partner's oldest open documents.

## Account and statement
If the company has a bank account entered, the account is already chosen: the main account, the only account, or for a document in a foreign currency, the account in that currency. If there are several accounts, you can choose another one in **Account**. Next to the chosen account is **Statement no.**

A payment through an account without a statement number gets the **Awaiting statement** mark — see [How do I enter a bank statement?](../vnesi-izvod/). If the customer paid in cash, choose "Cash payment" in **Payment method**: then the payment has no account and does not wait for a statement.

## Paying a supplier
What we pay a supplier is recorded the same way: on their invoice (**Receipt invoice** or **Cost invoice**), in the **Payments** section, with **Record a payment**.

Payments for a foreign-currency invoice are recorded in its **Payments** section, with the exchange rate at which it was paid — see [How do I enter import costs and finalize the foreign-currency invoice?](../devizna-troshoci/).

## When the button is not there
- The invoice is a draft. A payment can only be recorded on an issued invoice.
- Your account does not have the **Record & void payments** permission. Ask the administrator.
- If you do not even see the amounts in **Payments**, the account also lacks the **View payments & debt** permission.
