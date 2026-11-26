---
title: How do I schedule service at the client's place (on-site)?
topic: service
screens: [service.board.field, service.intake.new, service.ticket.view]
module: service
top: false
related: [servis-priem, servis-tabla, servis-naplata]
---
<!-- English translation of src/content/help/servis-teren.md. Translate again when that file changes. -->

When the technician goes to the client, you make an on-site ticket. The new visit starts as **Scheduled**. The device is not with you, so the ticket has no legal deadline. Instead, it has a visit slot.

## Schedule a visit
1. At the top, click **Service**, then **+ New intake**.
2. Click **On-site**.
3. Choose the **Client** and the machine, the same as for a workshop intake (see [How do I take a device in for service?](../servis-priem/)).
4. In **Reported problem**, write what needs to be done.
5. In **Visit slot**, choose a date and time. In **Technician**, choose who is going.
6. Click **Create intake**. The ticket is **Scheduled**.

## The On-site board
In **Service**, click **On-site**. The visits are split into two columns: **Scheduled** and **On-site**.

When **Today only** is ticked, you see the visits scheduled for today and the visits without a time slot. Untick it to see all of them. The **Visits today** tile counts the same visits.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/620"><img src="/help-img/en/service-teren.webp" alt="The On-site board and the Today only box" width="1280" height="620" loading="lazy" decoding="async"><span class="shot-ring" style="left:1.88%;top:53.42%;width:7.07%;height:3.23%"></span><span class="shot-tag is-above is-right" style="bottom:46.58%;left:5.41%">Click here</span></span><figcaption>The On-site board and the Today only box</figcaption></figure>
## On the day of the visit
1. Open the ticket. When the technician sets off, click **On-site**.
2. Enter the **Diagnosis**, the **Work done** and the parts in **Lines — parts & labor**.
3. When the work is finished, click **Done**. The app tells you what it will do: an invoice (draft) for the charged lines, a write-off for the parts that are not charged.
4. Click **Confirm**. The ticket is **Closed**.

The invoice that gets made is a draft. Open it from the ticket's **Documents** and click **Issue** (see [How do I bill for the service and close the ticket?](../servis-naplata/)).

## The device has to come into the workshop
If it cannot be repaired on site, click **Taken into workshop**.
The ticket keeps the same number and lines, becomes an **In workshop** ticket with the status **Received**, and goes to the **Workshop** board. The legal deadline starts running from the day the device arrived at your place.
