---
title: How do I set the service rules?
topic: service
screens: [service.settings.rules, service.settings.device_categories, service.settings.machine_fields, service.settings.intake_fields]
module: service
top: false
related: [servis-prigovor, servis-pechatenje, servis-priem]
---
<!-- English translation of src/content/help/servis-postavki.md. Translate again when that file changes. -->

The service settings are in **Service**: click the gear button (**Settings**) to the right of **Machines**. Only an account with the **Manage tickets & machines** permission sees the button.

## Rules
1. Click **Rules**.
2. Fill in what you need:
- **Offer threshold (incl. VAT)**: above this amount, a ticket does not go into repair without an accepted quote or pre-approval. An empty field means no threshold.
- **Default warranty (days)**: filled in on every new ticket.
- **Holding period (days)**: how many days the device may stay with you, from 1 to 30.
- **Service warehouse**: which warehouse new tickets take parts from. It shows only when the company has more than one warehouse.
- **Complaint deadlines**: **Days to answer** (at most 15), **Days to resolve** (at most 30) and **Extension (days)** (at most 8). They can be shorter than the law, not longer. An empty field brings back the legal deadline.
3. Click **Save**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/760"><img src="/help-img/en/service-postavki.webp" alt="Service settings, Rules" width="1280" height="760" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:50.83%;width:15.00%;height:5.00%"></span><span class="shot-tag is-above is-right" style="bottom:49.17%;left:11.33%">Click here</span></span><figcaption>Service settings, Rules</figcaption></figure>
A higher threshold, or an empty field (no threshold), can be saved only by an account with the **Generate documents** permission. Anyone can set a lower threshold.

> **Important**
> A change to **Holding period (days)**, **Days to answer** and **Days to resolve** applies only to new intakes and complaints. A deadline already promised to a client does not move. **Extension (days)** also applies to open complaints: the number in the settings at the moment you click the complaint's extend button is used (the button shows that number, e.g. "Extend +8 days").

## Device categories
Click **Device categories** and tick which categories from **Products** are offered in **Device type** at intake. If you tick none, all are offered. Click **Save**.

For a new category, click **Manage the categories in Products**.

## Your own fields
**Machine fields** are for data that stays on the machine for good. **Intake fields** are for each visit, for example "Urgency".
1. Click **Machine fields** or **Intake fields**.
2. Enter the **Field name** and choose the **Type**. For a list type, write the choices in **Values (comma separated)**.
3. If the field must be filled in, tick **Required**.
4. Click **Add field**.

The fields appear in **Custom fields**: machine fields when you enter a new machine, intake fields at intake and on the ticket. **Archive** hides the field.

How the intake slip and completion report look is set in **Printed documents** (see [How do I print the service intake slip or completion report?](../servis-pechatenje/)).
