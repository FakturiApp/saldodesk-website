// Производи и залиха — the recorded steps; one array per step of the task in src/content/tasks/proizvodi.ts.
// Serial numbers and product codes must be new on every run (dry run, mk, en): a short stamp.
const STAMP = Date.now().toString().slice(-6)
// niska-zaliha's own product: a name no demo product has; its row is found by its new code.
const LOW = 'Тонер Kyocera TK-3190'
const LOW_SKU = `DEMO-K-${STAMP}`

export const FLOWS = {
  'nov-proizvod': {
    prep: [{ goto: '/proizvodi?pogled=katalog' }],
    steps: [
      [{ click: "main a:has-text('+ Нов производ')" }, { wait: '#pr-name' }, { pause: 700 }],
      [{ type: '#pr-name', text: 'Тонер Canon 728' }, { pause: 700 }],
      [{ click: '#pr-sku' }, { pause: 900 }, { press: 'ArrowRight' }, { pause: 1000 }],
      [{ type: '#pr-price', text: '1450' }, { hover: '#pr-price-gross' }, { pause: 1000 }],
      [{ click: "main button:has-text('Зачувај') >> nth=0" }, { wait: "main a[href$='tab=stock']" }, { pause: 1300 }],
    ],
  },
  'niska-zaliha': {
    // Its own new product (no stock), with a default supplier, so nothing shared is changed.
    prep: [
      { goto: '/proizvodi/nov' },
      { type: '#pr-name', text: LOW },
      { type: '#pr-sku', text: LOW_SKU },
      { type: '#pr-price', text: '2900' },
      { type: "main input[placeholder='Пребарај добавувач…']", text: 'Мак Тонер Дистрибуција ДООЕЛ' },
      { press: 'Enter' },
      { click: "main button:has-text('Зачувај') >> nth=0" },
      { wait: '#pr-minstock' },
    ],
    steps: [
      [{ type: '#pr-minstock', text: '5' }, { pause: 900 }],
      [{ click: "main button:has-text('Зачувај') >> nth=0" }, { pause: 1000 }],
      [
        { click: "nav a[href='/proizvodi']" },
        { click: "main a[href='/proizvodi/niska-zaliha']" },
        { wait: `main tr:has-text('${LOW_SKU}')` },
        { hover: 'main h2.font-serif', on: true },
        { pause: 1000 },
      ],
      [{ hover: `main tr:has-text('${LOW_SKU}') td:nth-child(6)` }, { pause: 1300 }],
      [{ click: `main tr:has-text('${LOW_SKU}') button:has-text('Додај во нарачка')` }, { pause: 1200 }],
      [{ click: "main a[href='/proizvodi/narachka']" }, { hover: `main tr:has-text('${LOW_SKU}') >> text=${LOW}` }, { pause: 1300 }],
    ],
  },
  etiketi: {
    prep: [
      { goto: '/proizvodi?pogled=katalog' },
      // Only the two Kyocera toners DEMO-T-1150 and DEMO-T-1160 are listed.
      { type: "main input[aria-label='Пребарај по назив, шифра, баркод, таг…']", text: 'DEMO-T-11' },
      { wait: "main table tbody tr:has-text('DEMO-T-1160')" },
    ],
    steps: [
      [
        { click: "main table tbody tr:has-text('DEMO-T-1150') input[aria-label='Избери']" },
        { click: "main table tbody tr:has-text('DEMO-T-1160') input[aria-label='Избери']" },
        { pause: 700 },
      ],
      [{ click: "main a:has-text('Печати етикети')" }, { wait: '#labels-sale' }, { pause: 900 }],
      [{ type: '#labels-sale', text: '10' }, { pause: 1300 }],
      [{ click: 'main button >> text=100×50' }, { pause: 1300 }],
      [{ hover: "main button:text-is('Печати')" }, { pause: 1200 }],
    ],
  },
  popis: {
    // Its own new stocktake, in the small shop warehouse (two products); the count is what the
    // system has, so the stock does not change.
    prep: [{ goto: '/dokumenti?tab=vnatreshni&tip=stocktake' }],
    steps: [
      [{ click: "main a[aria-label='Нов попис']" }, { wait: '#s-wh' }, { pause: 700 }],
      [{ select: '#s-wh', value: '2' }, { click: 'main button >> text=/^(Нов попис|New stock-?take)$/i' }, { wait: '#st-0-qty' }, { pause: 900 }],
      [{ type: '#st-0-qty', text: '10' }, { type: '#st-1-qty', text: '5' }, { pause: 900 }],
      [{ click: "main button:has-text('Зачувај го бројот')" }, { pause: 1000 }],
      [{ click: "main button:has-text('Заврши попис')" }, { wait: "main a[href$='/pecati']" }, { pause: 1500 }],
    ],
  },
  prenos: {
    prep: [{ goto: '/dokumenti?tab=vnatreshni&tip=transfer' }],
    steps: [
      [{ click: "main a[aria-label='Нов пренос']" }, { wait: '#t-to' }, { pause: 700 }],
      // Both lists open on a warehouse already: „Во магацин" is moved off Битола and back, so the
      // choosing shows.
      [{ hover: '#t-from' }, { pause: 500 }, { select: '#t-to', value: '2' }, { pause: 500 }, { select: '#t-to', value: '4' }, { pause: 900 }],
      [{ type: '#tl-0-prod', text: 'DEMO-P-ROLLER' }, { press: 'Enter' }, { type: '#tl-0-qty', text: '2' }, { pause: 900 }],
      [{ click: "main button:has-text('Испрати')" }, { hover: 'main >> text=Во транзит' }, { pause: 1300 }],
      [{ click: "main button:has-text('Прими')" }, { wait: '[role=dialog]' }, { pause: 1000 }],
      [{ click: "[role=dialog] button:has-text('Прими')" }, { hover: 'main >> text=Примен' }, { pause: 1300 }],
    ],
  },
  seriski: {
    prep: [
      { goto: '/dokumenti/nova-priemnica' },
      { type: "input[placeholder='Пребарај добавувач…']", text: 'Мак Тонер Дистрибуција ДООЕЛ' },
      { press: 'Enter' },
    ],
    steps: [
      [{ type: '#rl-0-prod', text: 'DEMO-PRN-M404' }, { press: 'Enter' }, { pause: 900 }],
      [{ type: '#rl-0-qty', text: '2' }, { type: '#rl-0-price', text: '13500' }, { pause: 700 }],
      [{ type: "main input[placeholder='внеси и Enter…']", text: `HP404-${STAMP}1` }, { press: 'Enter' }, { pause: 900 }],
      [{ type: "main input[placeholder='внеси и Enter…']", text: `HP404-${STAMP}2` }, { press: 'Enter' }, { pause: 1000 }],
      [{ click: "main button:has-text('Издади')" }, { wait: `main a:has-text('HP404-${STAMP}1')` }, { pause: 1000 }],
      [{ click: `main a:has-text('HP404-${STAMP}1')` }, { pause: 1800 }],
    ],
  },
}
