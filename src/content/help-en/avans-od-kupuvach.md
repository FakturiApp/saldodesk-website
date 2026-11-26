---
title: What is an advance and where do I see it?
topic: payments
screens: [payments.view, payments.list]
module: null
top: false
related: [avansna-faktura, iskoristi-avans, vnesi-izvod, vnesi-plakjanje]
---
<!-- English translation of src/content/help/avans-od-kupuvach.md. Translate again when that file changes. -->

An advance is money the partner has paid that does not close any invoice yet. This happens when:

- the customer pays before getting an invoice;
- they paid more than they owe;
- you unticked an invoice when you entered the payment;
- the paid invoice was later cancelled or reversed with a storno.

## How do I enter a payment made in advance
- From the bank statement: in **Enter a statement**, enter the line and untick all the invoices under **Which invoices this closes**. The whole amount stays as an advance. If the customer has no open invoices, this happens even without unticking.
- If the customer pays against a proforma: open the issued **Proforma** and in the **Advance** section click **Record a payment**. That payment does not close any document — it is an advance for that proforma.

## Where you see the advance
- In the **Payments** list, the **Unallocated** column shows how much of each payment is an advance.
- When you click the payment, the top shows **Paid** and **Advance**. Under **What this paid** it says which invoices it closes — or that the whole amount is an advance.
- On every open invoice of that customer, the **Payments** section says **This partner holds an advance of** and how much. To put it on the invoice, see [How do I use an advance on a new invoice?](../iskoristi-avans/).

## Advance invoice
For money the customer paid before the sale, you issue an advance invoice. The app offers it everywhere it says "… den. of advance left without an advance invoice", but it never issues it on its own — see [The customer paid in advance — how do I issue an advance invoice?](../avansna-faktura/).

## How do I return the advance to the customer
- From the payment: open the customer's payment and click **Return advance**. The amount is already filled in — how much of the payment is free. Change it if you are returning less, pick a date and an account, and click **Return advance**. An **Out** payment to the same customer is entered, in the same currency, and their advance goes down by that amount.
- From the bank statement: in **Enter a statement**, enter an **Out** line to the customer, with no invoice ticked. If the customer has an advance, **Returning the customer’s advance** is offered — tick it. The oldest payments are returned first.

A return in a foreign currency uses the rate of the payment it is returned from — you do not enter a rate. The outgoing return payment does not close invoices. If the partner is also your supplier, your advance with them does not change — the two sides are kept separately.

> **Important**
> Money that has an **advance invoice** issued on it is not returned this way — it is only used up through the **Advance** section of the final invoice. To return it, first do a Storno or Cancel on the advance invoice. A payment that an advance was returned from cannot be cancelled while the return stands: cancel the return first.
