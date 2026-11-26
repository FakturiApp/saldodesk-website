---
title: How do I log a complaint, and by when must I answer?
topic: service
screens: [service.complaints]
module: service
refusals: [service.complaint_future_date, service.complaint_ticket_other_partner, service.complaint_answer_empty, service.complaint_extension_used, service.complaint_answer_first, service.complaint_closed, service.complaints_no_right]
top: false
related: [servis-postavki, servis-tabla]
---
<!-- English translation of src/content/help/servis-prigovor.md. Translate again when that file changes. -->

The law gives two deadlines for a consumer complaint: 15 days to answer and 30 days to resolve. Resolving can be extended once, by 8 days. The app works out the dates by itself, from the day the complaint arrived.

## Log a complaint
1. At the top, click **Service**, then **Complaints**.
2. Click **+ New complaint**.
3. In **Client**, choose the client.
4. In **Ticket**, if the complaint is about a repair, choose the ticket. Only that client's tickets are offered. If you change the client, the ticket is cleared.
5. In **Channel**, choose how it arrived: **In person**, **Phone**, **Email**, **Viber** or **Letter**.
6. Leave **Received on** empty if it arrived today. If it arrived earlier, enter that date. A date in the future is not accepted.
7. In **Complaint**, write what the consumer is asking for.
8. Click **Log the complaint**.

Only an account that may see tickets sees **Ticket**. Without that field, the complaint is logged the same way, just without a ticket.

The complaint gets a number (for example PRG-2026-0005) and two dates: **Answer by** and **Resolve by**. A complaint that arrived after working hours counts from the next working day.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/900"><img src="/help-img/en/service-prigovori.webp" alt="The Complaints list and the New complaint button" width="1280" height="900" loading="lazy" decoding="async"><span class="shot-ring" style="left:64.33%;top:24.37%;width:7.55%;height:6.22%"></span><span class="shot-tag is-above is-left" style="bottom:75.63%;right:31.90%">Click here</span></span><figcaption>The Complaints list and the New complaint button</figcaption></figure>
## A complaint from the ticket
If the client is complaining about a repair, open their service ticket and, at the top, next to the print buttons, click **Complaint**. **Complaints** opens with the form, and **Client** and **Ticket** are already filled in. Continue from the **Channel** step.

## Answer
1. On the complaint, click **Accepted**, **Partially accepted** or **Rejected**.
2. Write the answer to the consumer and click **Confirm**.

The complaint becomes **Answered**, and the answer sits under it.

## Extend the deadline
If resolving needs more time, click the extend button and write the reason. The button says by how many days — as many as are set in **Extension (days)** in the service settings (if the field is empty, 8 days), e.g. "Extend +8 days". **Resolve by** moves by that many days, and it says "extended". This can be done only once.

## Close it
Click **Close** and confirm. A complaint without an answer cannot be closed: answer first.

> **Important**
> A closed complaint is a final record and can no longer be changed. Close it only when the matter is really resolved.

## What is late
- A deadline that has passed is colored red.
- **Late** shows the complaints with a passed deadline. While there are any, the **Complaints past due** tile shows on **Service**.
- In **Open**, the complaint with the nearest answer deadline is at the top.

Complaints can be logged by an account with the **Manage tickets & machines** or **Complaints** permission. The deadlines can be shortened in the service settings (see [How do I set the service rules?](../servis-postavki/)); they cannot be longer than the legal ones.
