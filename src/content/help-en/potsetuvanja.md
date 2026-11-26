---
title: How can the app remind late-paying customers by itself?
topic: payments
screens: [settings.tab.company, payments.reports]
module: finance
top: false
related: [koj-mi-dolzhi]
---
<!-- English translation of src/content/help/potsetuvanja.md. Translate again when that file changes. -->

The app can email customers whose invoices are late by itself. You turn this on once, in the company settings.

1. At the top right, click your name, then **Settings**.
2. In the **Company** tab, find the **Email and reminders** section.
3. Fill in **SMTP server**, **Port**, **Username**, **Password** and **Sender (from)**. Whoever runs your email gives you these details.
4. Tick **Send reminders for unpaid documents (1/7/14 days past due)**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/payments-potsetuvanja.webp" alt="The Email and reminders section" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:47.24%;width:21.95%;height:5.56%"></span><span class="shot-tag is-above is-right" style="bottom:52.76%;left:14.80%">Click here</span></span><figcaption>The Email and reminders section</figcaption></figure>
5. If you want other days, write them in **Reminder days (past due)**, separated by commas, for example 3, 10, 30. If you leave it empty, 1, 7 and 14 apply.
6. If you want the messages to keep going after the last day, enter how many days apart in **Then every (days)**. If you leave it empty, no message goes out after the last day.
7. Click **Save**.

If **Settings** isn't in the menu, your account isn't allowed to change them. Ask your administrator.

## Change the message text
Below the reminders are **Message subject**, **Text above the list** and **Text below the list**. The fields hold the standard text. They are there even when the reminders aren't ticked, so you can try out the message before you turn them on. Without the Finance module they aren't there.
1. Write your text. The app writes the list of documents and the total amount.
2. Click **Save**.
3. Click **Send a sample reminder**. A sample with made-up invoices arrives at the address in **Sender (from)**.

If you empty a field and save, the standard text comes back.

## What is sent
- A reminder goes out when an unpaid invoice is 1, 7 and 14 days late (or your days).
- If on the same day this happens with several invoices of the same customer, they go in one message. A customer gets at most one message a day. If there is more for them, it goes the next day.
- The message goes to the first email on the partner card. A partner without an email gets nothing.
- If you entered **Then every (days)**, after the last day the messages keep going that many days apart, until the invoice is paid. A customer gets at most one such message in those days. A message for a day from the list doesn't wait for those days and doesn't start them.
- A message that is waiting (for another day from the list or for a repeat) doesn't hold up the messages for other customers.
- For the same invoice and the same day late, a message doesn't go out twice.
- If you turn on the reminders when an invoice is already several days late, one message goes out for it, not several.
- A paid invoice is not reminded.

> **Important**
> An invoice without a payment deadline is treated as due on the invoice date. The reminder for it goes out as soon as the next day. If the customer has an agreed deadline, enter it on their card — new invoices then get the deadline by themselves.
