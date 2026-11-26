---
title: '"Not enough in stock" — what do I do?'
topic: documents
screens: [documents.new.invoice, documents.new.delivery, documents.window.stock_short]
refusals: [stock.short]
module: null
top: false
related: [napravi-faktura, faktura-od-ispratnica, barania-od-magacin, lista-za-narachka, rezervacija, kompatibilnost-modeli]
---
<!-- English translation of src/content/help/nema-zaliha.md. Translate again when that file changes. -->

This window opens when you click **Issue** and the warehouse does not have enough of some product. The document is not issued — it is kept as a draft. Nothing is lost.

For each product that is short, it says how much is needed, how much there is and how much is missing. Below that you may see some of these options (it depends on what your company has):
- **Who has it?** — how much there is in the other warehouses. Click **Fetch from warehouse**, check the **Quantity** and click **Send request**. That way you ask that warehouse to send the goods — see [How do I request goods from another warehouse?](../barania-od-magacin/).
- **Add to order** — the product goes onto the **Order list**, to be ordered from the supplier — see [How do I know what to order, and from whom?](../lista-za-narachka/).
- **Alternatives** — another product that can replace it and is in stock. Click **Replace** and the product on the line changes. Then click **Save**, then **Issue**.
- **Issue without stock** — the document is issued even without the goods, and the stock goes negative until the goods arrive. This button is there only if **Allow issuing without stock** is turned on in **Settings** → **Company** and your account has the **Issue without stock** right.

Click **Close** to go back to the document. When the goods arrive, open the draft and click **Issue** again.

## Before you click Issue
When you pick a product, a bar opens under the line. It says **In stock**: **here** is how much there is in the document's warehouse, and **total** is how much there is in all warehouses together. If the bar is not there, click the ▾ arrow next to the product's name.

<figure class="shot"><span class="shot-frame" style="aspect-ratio:1280/720"><img src="/help-img/en/nema-zaliha-lenta.webp" alt="The stock under the line" width="1280" height="720" loading="lazy" decoding="async"><span class="shot-ring" style="left:4.77%;top:87.61%;width:11.48%;height:2.22%"></span><span class="shot-tag is-above is-right" style="bottom:12.39%;left:10.50%">Click here</span></span><figcaption>The stock under the line</figcaption></figure>
If **here** is less than the quantity you are selling, the document will not be issued. If the goods are in another warehouse, change the **Warehouse** at the top, or click **Bring here** to request goods from another warehouse.
