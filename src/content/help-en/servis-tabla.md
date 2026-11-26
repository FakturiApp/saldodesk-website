---
title: Where do I see all the service tickets?
topic: service
screens: [service.board.workshop, service.board.field, service.board.list]
module: service
top: false
related: [servis-nalog, servis-teren, servis-otkazano, servis-prigovor]
---
<!-- English translation of src/content/help/servis-tabla.md. Translate again when that file changes. -->

At the top, click **Service**. Tickets can be seen in three ways: **Workshop**, **On-site** and **List**.

## The tiles at the top
- **In workshop**: how many client devices are with you. It counts the workshop tickets that are not finished, and the devices waiting for the client to pick them up.
- **Overdue**: workshop tickets whose legal deadline has passed. When there are any, the tile is red.
- **Due soon**: tickets whose deadline runs out in the next 5 days.
- **Visits today**: the visits scheduled for today and the visits without a time slot.
- **Complaints past due**: appears only when a complaint is late.

Click a tile to see exactly the tickets it counts.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/service-tabla.webp" alt="The Workshop board with the tiles at the top" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:25.98%;top:27.40%;width:23.16%;height:9.44%"></span><span class="shot-tag is-above is-right" style="bottom:72.60%;left:37.56%">Click here</span></span><figcaption>The Workshop board with the tiles at the top</figcaption></figure>
## Workshop
Each column is one status: **Received**, **Diagnosing**, **Awaiting approval**, **Approved**, **Awaiting parts**, **In repair** and **Ready**. Click a card to open the ticket.

The card says how many days are left until the legal deadline ("29 days left"). Five days before the deadline, the label turns red. When the deadline passes, it says "deadline missed" and by how many days.

The last column, **Awaiting pickup (unrepaired)**, appears when there are devices that ended as **Unrepairable** or **Cancelled** and the client has not picked them up yet (see [The client cancelled or the device cannot be repaired — what do I do?](../servis-otkazano/)).

The **Filter: number, problem…** field quickly searches the cards by number or problem.

## On-site
Visits to clients, in the columns **Scheduled** and **On-site**. See [How do I schedule service at the client's place (on-site)?](../servis-teren/)

## List
All tickets in a table, including the finished ones. The search field finds a ticket by number, client, machine (type, brand, model), serial number or problem.

For more filters, click **Columns & filters**, then **+ Add filter**, and choose a field. For example **Past the deadline — awaiting pickup**, then **Yes**: repaired devices that nobody picked up by the deadline.
