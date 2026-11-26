// Плаќања (more) — the recorded steps; one array per step of the task in src/content/tasks/plakjanja-2.ts.
// Every task pays, offsets or uses an advance on its OWN new partner and its own documents made
// in prep, so no shared demo invoice is closed. Names and tax numbers change per run (two
// partners may not share a tax number); a partner is picked by its tax number.
const RUN = Date.now()
const CITIES = ['Струга', 'Кичево', 'Гевгелија', 'Кавадарци', 'Куманово', 'Кочани', 'Неготино', 'Дебар', 'Струмица', 'Прилеп', 'Гостивар', 'Радовиш']
const KINDS = ['Трејд', 'Пак', 'Маркет', 'Комерц', 'Дистрибуција', 'Офис']
const firm = (n) => {
  const i = Math.floor(RUN / 1000) + n * 11
  return { name: `${CITIES[i % CITIES.length]} ${KINDS[Math.floor(i / CITIES.length) % KINDS.length]} ДООЕЛ`, tax: `40${String(RUN + 10 + n).slice(-11)}` }
}
const PAY = firm(1), ADV = firm(2), KOMP = firm(3)

/** A new partner (a customer; also a supplier when asked); ends on its card. */
const newPartner = (p, supplier = false) => [
  { goto: '/partneri/nov' },
  { type: '#p-name', text: p.name },
  { type: '#p-tax', text: p.tax },
  ...(supplier ? [{ click: "main label:has-text('Добавувач') input" }] : []),
  { click: "main button:text-is('Зачувај')" },
  { wait: "main a:has-text('+ Нов документ')" },
]
/** From the partner's card: an issued invoice for one toner; ends on the invoice. */
const issuedInvoice = [
  { click: "main a:has-text('+ Нов документ')" },
  { type: '#dl-0-prod', text: 'DEMO-T-59A' },
  { click: 'text=Тонер HP 59A CF259A' },
  { click: "main button:has-text('Издади')" },
  { wait: "main button:has-text('Внеси плаќање')" },
]
const PRODUCT = [{ type: '#dl-0-prod', text: 'DEMO-T-59A' }, { click: 'text=Тонер HP 59A CF259A' }]
const d = new Date()
const TODAY = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`
const advRow = `main tbody tr:has-text('${ADV.name}')`

export const FLOWS = {
  'plakjanje-faktura': {
    prep: [...newPartner(PAY), ...issuedInvoice],
    steps: [
      [{ click: "main button:has-text('Внеси плаќање')" }, { wait: '#pe-amount' }, { pause: 800 }],
      [{ type: '#pe-amount', text: '2000' }, { pause: 800 }],
      [{ select: '#pe-method', value: 'P12' }, { pause: 800 }],
      [{ hover: '[role=dialog] li >> nth=0' }, { pause: 1400 }],
      [{ click: "[role=dialog] button:has-text('Зачувај')" }, { pause: 1200 }],
      [{ hover: "main :text-is('Делумно')" }, { pause: 900 }, { hover: 'main section div:has(> h3) > span:last-child' }, { pause: 1500 }],
    ],
  },
  avans: {
    // The customer pays 5000 before any invoice — all of it stays as an advance.
    prep: [
      ...newPartner(ADV),
      { goto: '/dokumenti/plakjanja' },
      { click: "main button:has-text('Внеси извод')" },
      { type: '#iz-no', text: '73' },
      { type: "[role=dialog] input[placeholder='Пребарај партнер…']", text: ADV.tax },
      { wait: `.bm-pop button:has-text('${ADV.tax}')` },
      { pause: 400 },
      { click: `.bm-pop button:has-text('${ADV.tax}')` },
      { type: "[role=dialog] input[aria-label='Износ']", text: '5000' },
      { click: "[role=dialog] button:has-text('Зачувај')" },
      { wait: advRow },
    ],
    steps: [
      [{ hover: `${advRow} a >> nth=3` }, { pause: 1500 }],
      [
        { click: `${advRow} a[href^='/partneri/']` },
        { pause: 900 },
        { click: "[role=dialog] a:has-text('Отвори')" },
        { wait: "main a:has-text('+ Нов документ')" },
        // The partner's preview stays open over the card: closed.
        { press: 'Escape' },
        { pause: 600 },
      ],
      // The new invoice opens with the customer list open: closed.
      [{ click: "main a:has-text('+ Нов документ')" }, { wait: '#dl-0-prod' }, { pause: 500 }, { press: 'Escape' }, { pause: 700 }],
      [...PRODUCT, { pause: 900 }],
      [{ click: "main button:has-text('Издади')" }, { hover: "main :text('Партнерот има аванс')" }, { pause: 1300 }],
      [{ click: "main button:has-text('Искористи')" }, { pause: 900 }, { hover: "main :text-is('Платена')" }, { pause: 1300 }],
    ],
  },
  kompenzacija: {
    // The partner is both: our invoice to him (4.708 ден.) and his cost invoice to us (2.360 ден.).
    prep: [
      ...newPartner(KOMP, true),
      ...issuedInvoice,
      { goto: '/dokumenti/nova-faktura-trosok' },
      { type: "main input[placeholder='Пребарај добавувач…']", text: KOMP.tax },
      { wait: `.bm-pop button:has-text('${KOMP.tax}')` },
      { pause: 400 },
      { click: `.bm-pop button:has-text('${KOMP.tax}')` },
      { type: '#vf-invno', text: `F-${String(RUN).slice(-6)}` },
      { type: '#vf-invdate', text: TODAY },
      { type: '#vf-0-type', text: 'Те' },
      { click: '.bm-pop button >> nth=0' },
      { type: '#vf-0-price', text: '2000' },
      { click: "main button:has-text('Издади')" },
      { wait: "main button:has-text('Внеси плаќање')" },
      { goto: '/dokumenti?tab=knizni&tip=kompenzacija' },
    ],
    steps: [
      [{ click: "a[aria-label='Нова компензација']" }, { wait: "main input[placeholder='Пребарај партнер…']" }, { pause: 700 }],
      [
        { type: "main input[placeholder='Пребарај партнер…']", text: KOMP.name },
        { click: `.bm-pop button:has-text('${KOMP.tax}')` },
        { wait: "main h3:text-is('Тие ни должат')" },
        { pause: 900 },
      ],
      [{ click: "main div:has(> h3:text-is('Тие ни должат')) input[type=checkbox]" }, { pause: 800 }],
      [{ click: "main div:has(> h3:text-is('Ние им должиме')) input[type=checkbox]" }, { pause: 800 }],
      [{ hover: "main div:text-is('Се компензира')" }, { pause: 1500 }],
      [{ click: "main button:text-is('Зачувај')" }, { pause: 1600 }],
    ],
  },
}
