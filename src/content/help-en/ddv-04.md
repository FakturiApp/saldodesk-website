---
title: How do I fill in and print the VAT-04?
topic: vat
screens: [vat.ddv04]
refusals: [vat.ddv04_not_typed, vat.ddv04_whole_denari]
module: null
related: [oznachi-podnesena, izlezna-kniga, vlezna-kniga, za-smetkovoditelot, devizna-troshoci]
---
<!-- English translation of src/content/help/ddv-04.md. Translate again when that file changes. -->

The app fills in the VAT-04 from the books. The accountant fills in only the fields the app does not know.

1. At the top, click **Reports**, then **VAT**.
2. Click **VAT-04**.
3. Use the ‹ and › arrows to go to the period you are filing.
4. Check the grey fields. The app fills them in from the sales and purchase books, rounded to whole denars. Fields 20, 29 and 31 are the form's totals.
5. In the white fields (12–19, 23–26 and 30), the accountant writes the amounts that only they know. Whole denars only, no deni.
6. If you are asking for a VAT refund, tick **refund requested**.
7. Click **Save**.
8. Click **Print**. The print form opens. Click **Print** there once more.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/1000"><img src="/help-img/en/vat-ddv04.webp" alt="VAT-04 and the Print button" width="1280" height="1000" loading="lazy" decoding="async"><span class="shot-ring" style="left:82.65%;top:35.72%;width:5.02%;height:3.80%"></span><span class="shot-tag is-above is-left" style="bottom:64.28%;right:14.84%">Click here</span></span><figcaption>VAT-04 and the Print button</figcaption></figure>
While something you entered is not saved, **Print** waits. Save first.

The app does not send the return to UJP (the Public Revenue Office). You or the accountant file it. Then mark it as filed — see [How do I mark the VAT-04 as filed, and how do I undo it?](../oznachi-podnesena/).

## Notices above the form
- "Lines at 0 % without a UJP code…" — fields 07–11 are filled in by assumption. Check them with the accountant.
- "Customs groups with VAT paid at customs without a Rate %…" — the rate is missing on an import invoice. The VAT is in field 28, but the base is not in 27. Enter the rate in the import invoice's costs — see [How do I enter import costs and finalize the import invoice?](../devizna-troshoci/).
- "Services from abroad in the period…" — a possible internal invoice 240. The accountant writes those amounts in fields 12–15. See [What does "For the accountant" show (forms 240, 220 and 500)?](../za-smetkovoditelot/).

The first two are yellow and need checking. The third is blue, for information only.

## Who can
An account with the **View reports** and **View payments & debt** permissions sees the VAT-04. Only an account with the **File VAT returns** permission writes in the white fields — the "Owner" and "Accountant" roles have it. For everyone else, the white fields are read-only.
