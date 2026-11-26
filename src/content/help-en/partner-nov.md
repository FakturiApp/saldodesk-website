---
title: How do I add a new partner?
topic: partners
screens: [partners.new, partners.list, partners.view.basic]
module: null
top: true
related: [partner-kartichka, partner-duplikati, partner-kreditni-limit, partner-kategorii]
---
<!-- English translation of src/content/help/partner-nov.md. Translate again when that file changes. -->

A partner is any customer or supplier. One partner can be both a customer and a supplier.

1. At the top, click **Partners**.
2. Click **+ New partner**.
3. In **Name**, write the name of the company or the person. This field is required.
4. For a domestic company, enter the tax number in **Tax number** and click **Fill from UJP**. The name, address, number, city, postal code and municipality fill in by themselves, from the registry of UJP (the Public Revenue Office). **VAT obligor** is also ticked if the company is registered for VAT.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/620"><img src="/help-img/en/partners-nov-ujp.webp" alt="The tax number and the Fill from UJP button" width="1280" height="620" loading="lazy" decoding="async"><span class="shot-ring" style="left:73.36%;top:54.56%;width:8.94%;height:6.13%"></span><span class="shot-tag is-above is-left" style="bottom:45.44%;right:22.17%">Click here</span></span><figcaption>The tax number and the Fill from UJP button</figcaption></figure>
5. Check **Country**, **City**, **Address (street)**, **Number** and **Postal code**. **Country** is required; MK is already chosen.
6. Tick **Customer**, **Supplier** or both — at least one must be ticked. If it's a person and not a company, untick **Company**.
7. Click **Save**. The new partner's card opens.

If you're entering several partners one after another, click **Save and new**. The partner is saved, and the form is cleared for the next one.

## If "Fill from UJP" doesn't work
- Below the field it says "Enter the EPDD ID (eUJP ID) in Settings → Company…": the company isn't connected to UJP yet. You enter that in **Settings** → **Company**, in the **EPDD ID (eUJP ID)** field — if you don't have access to the settings, ask your administrator. Until then, enter the details by hand.
- "Not found in the UJP registry": check the number.
- "The UJP registry is unavailable": try again later.
- For a foreign partner the button isn't there. You type the details by hand.

## If the partner already exists
- While you type the name, "Similar partners already exist" may appear below **Name**. Click a name in the list: the partner opens in a new tab, so you can check whether it's the same one.
- Two partners can't have the same tax number. If the number already exists, it says "A company with this tax number already exists" and the name of that partner.

If you did enter the same partner twice, see [The same partner was entered twice — how do I merge them?](../partner-duplikati/).

## More details
Below the main fields there are sections that open with a click:
- **Contact** — contact people (each with their own phone and email), phones, email, website.
- **Other** — category, registration number, code, municipality, note. **Partner code** fills in by itself with the next number; you can change it.
- **Finance** — bank account, **Payment deadline (days)** and **Credit limit**. The deadline then fills in by itself on the invoices for this customer. This section is visible only to an account with the **View payments & debt** permission.
- **Custom fields** — the fields the company added itself.

The app remembers which sections you opened.

## "e-invoice ✗"
A partner can be saved without a tax number or without a full address. Then **e-invoice ✗** appears next to their name, with what is missing. An e-Invoice can't be sent to them until that is filled in. When everything is filled in, it shows **e-invoice ready ✓**.

> **Important**
> The tax number can't be changed once it is saved. If the partner was saved without one, it can be added later — but then too only once. Check the number before **Save**.
