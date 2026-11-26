---
title: How do machines send their meter readings by email on their own?
topic: rentals
screens: [rentals.tab.email_import]
module: rentals
top: false
related: [iznajmuvanje-otchituvanja, iznajmuvanje-monitoring]
---
<!-- English translation of src/content/help/iznajmuvanje-email-unos.md. Translate again when that file changes. -->

Some machines (Sharp and Brother) send an email with their meter counts on their own. **Email import** reads those messages from your mailbox, finds the machine by its serial number and puts the reading on hold. No reading goes in until you accept it.

For this you need the **Email import & monitoring** permission.

## Set up the mailbox
1. In **Rentals**, click **Email import** (top right).
2. Open **IMAP settings** and enter the **IMAP host**, **Port**, **Username**, **Password** and **Folder**. Whoever runs your email gives you these details.
3. If you want only some messages, enter words from their subject in **Title filter (keywords)**.
4. If you want the app to fetch the mail on its own, turn on **Scheduled fetch** and pick when.
5. Click **Save**, then **Test connection**. The test checks the saved settings.

## Fetch and accept
1. **Fetch now** has **From date** and **To date** — the last 30 days. Change them if needed. If you clear both, the new unread messages are taken. Click **Fetch emails**.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/600"><img src="/help-img/en/rentals-email-preuzemi.webp" alt="The Fetch now section and the Fetch emails button" width="1280" height="600" loading="lazy" decoding="async"><span class="shot-ring" style="left:39.37%;top:51.38%;width:8.63%;height:6.00%"></span><span class="shot-tag is-above is-right" style="bottom:48.62%;left:43.68%">Click here</span></span><figcaption>The Fetch now section and the Fetch emails button</figcaption></figure>
2. The readings appear under **Pending readings**. Check them.
3. Click **Accept** on one reading, or **Accept all matched** for all of them at once. An accepted reading is the same as one entered by hand, and the same meter rules apply to it.
4. A wrong reading — click **Discard**.

If the serial number from the message is not recognized, the reading is **Unmatched**. Pick the machine and click **Link & accept**. The app remembers that number and finds the machine on its own next time.
