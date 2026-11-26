---
title: How do I take a device in for service?
topic: service
screens: [service.intake.new, service.board.workshop]
module: service
related: [servis-nalog, servis-pechatenje, servis-teren, servis-mashini]
---
<!-- English translation of src/content/help/servis-priem.md. Translate again when that file changes. -->

When a client brings in a device, you make a **New intake**. The ticket gets a number by itself (for example SVC-2026-0013) and a legal deadline until which the device may stay with you.

## Intake step by step
1. At the top, click **Service**, then **+ New intake**.
2. Leave **In workshop** selected: the device stays with you. If you are going to the client, choose **On-site** (see [How do I schedule service at the client's place (on-site)?](../servis-teren/)).
3. In **Client**, type part of the name, phone or tax number and choose the client.
4. Under **Client’s machines**, click the device they brought. If it is not there, see "New machine" below.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/760"><img src="/help-img/en/service-priem.webp" alt="A new intake with the client chosen and their machines" width="1280" height="760" loading="lazy" decoding="async"><span class="shot-ring" style="left:3.83%;top:67.93%;width:45.47%;height:7.63%"></span><span class="shot-tag is-above is-right" style="bottom:32.07%;left:26.56%">Click here</span></span><figcaption>A new intake with the client chosen and their machines</figcaption></figure>
5. In **Reported problem**, write what the client says is not working.
6. In **Accessories left**, write down what they left with the device (cable, bag, charger). This is printed on the intake slip the client signs. If the machine has **Default accessories**, they are already filled in.
7. If you like, choose a **Technician** and enter **Expected ready**.
8. If agreed, enter the **Diagnostic fee** and **Deposit**. Tick **paid** only if the money has already been taken.
9. Click **Create intake**. The ticket opens, with the status **Received**.

The legal deadline is the intake day plus the number of days from the service settings (at most 30). It shows on the ticket and is printed on the intake slip. An intake made after the company's working hours gets the date of the next working day.

**Pre-approved up to** is an amount up to which the client allows a repair in advance, without a quote. Only an account with the **Generate documents** permission can enter it.

## A new client
If the client is not there, type the name and click **Create new** in the list. Enter the **Name** and **Phone** and click **Save client**. The client is entered and chosen.

## A new machine
1. Click **+ New machine**.
2. Choose the **Device type** (required), **Brand** and **Model**. If they are not in the list, click **Add new type**, **Add new brand** or **Add new model**.
3. Enter the **Serial number**. As you type, the app checks whether it already knows the device. A device you sold yourself says "sold by us": click it and the machine is linked to that sale. A machine of another client says "with another client" and their name, and cannot be taken in for this client.
4. A device without a serial number: click **suggest** next to **Our number**. The app gives it a number of your own, for the sticker.
5. Click **Save machine**. The machine is saved for the client and chosen for the intake.

## The intake slip
Print the intake slip right away and give it to the client to sign: at the top of the ticket, click **Intake slip**. See [How do I print the service intake slip or completion report?](../servis-pechatenje/)
