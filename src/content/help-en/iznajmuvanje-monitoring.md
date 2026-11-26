---
title: What does Monitoring show for the rented machines?
topic: rentals
screens: [rentals.tab.monitoring]
module: rentals
top: false
related: [iznajmuvanje-email-unos, iznajmuvanje-otchituvanja]
---
<!-- English translation of src/content/help/iznajmuvanje-monitoring.md. Translate again when that file changes. -->

**Monitoring** shows whether the machines at your customers are working: when they last checked in, how many pages they counted, the toner and the errors. The data is sent by a small program (an agent) on the customer's network. You open it with **Rentals** → **Monitoring** (top right).

For this you need the **Email import & monitoring** permission.

> **Important**
> Monitoring only shows. No billing readings are made from it. The meters for the invoice are entered in **Readings** or through **Email import**.

## Live fleet monitoring
For each machine: **IP address**, **Last seen**, the pages counted, **Toner** and **Error**. The dot in front of the machine shows whether it is active, offline, in error or without an agent (grey). **↻ Refresh** loads the table again.

## New agent
1. In **SNMP agents**, click **+ New agent**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1000"><img src="/help-img/en/rentals-monitoring-agent.webp" alt="The SNMP agents section and the New agent button" width="1280" height="1000" loading="lazy" decoding="async"><span class="shot-ring" style="left:86.91%;top:90.73%;width:9.11%;height:3.80%"></span><span class="shot-tag is-above is-left" style="bottom:9.27%;right:8.54%">Click here</span></span><figcaption>The SNMP agents section and the New agent button</figcaption></figure>
2. Enter the **Agent name**, and if you want, the **Partner** and **Subnet (optional)**.
3. Click **+ New agent** under the fields.
4. The app shows the agent's token only once. Click **Copy token** and enter it in the program on the customer's network.

An agent has **Edit**, **Rotate token** (a new token; the old one stops working right away) and **Deactivate**.

## Discovered devices
Here are the devices the agent found that are not linked to a machine. Click **Link**, pick the machine and click **Link** again. A device you don't need — **Discard**.
