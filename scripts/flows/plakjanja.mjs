// Плаќања — the recorded steps; one array per step of the task in src/content/tasks/plakjanja.ts.
// The statement pays the task's OWN new customer and its two invoices made in prep, so no
// shared demo invoice is closed (the plakjanja-2 pattern). The name, tax number and statement
// number change per run (two partners may not share a tax number); the partner is picked by
// its tax number.
const RUN = Date.now()
const CITIES = ['Струга', 'Кичево', 'Гевгелија', 'Кавадарци', 'Куманово', 'Кочани', 'Неготино', 'Дебар', 'Струмица', 'Прилеп', 'Гостивар', 'Радовиш']
const KINDS = ['Трејд', 'Пак', 'Маркет', 'Комерц', 'Дистрибуција', 'Офис']
const i = Math.floor(RUN / 1000) + 5
const FIRM = { name: `${CITIES[i % CITIES.length]} ${KINDS[Math.floor(i / CITIES.length) % KINDS.length]} ДООЕЛ`, tax: `40${String(RUN + 21).slice(-11)}` }
const STATEMENT = String(100 + (Math.floor(RUN / 1000) % 900))

/** An issued invoice for one toner to our partner; ends on the invoice. */
const invoice = [
  { goto: '/dokumenti/nov?tip=faktura' },
  { type: "input[placeholder='Пребарај партнер…']", text: FIRM.tax },
  { wait: `.bm-pop button:has-text('${FIRM.tax}')` },
  { pause: 400 },
  { click: `.bm-pop button:has-text('${FIRM.tax}')` },
  { type: '#dl-0-prod', text: 'DEMO-T-59A' },
  { click: 'text=Тонер HP 59A CF259A' },
  { click: "main button:has-text('Издади')" },
  { wait: "main button:has-text('Внеси плаќање')" },
]

export const FLOWS = {
  izvod: {
    prep: [
      { goto: '/partneri/nov' },
      { type: '#p-name', text: FIRM.name },
      { type: '#p-tax', text: FIRM.tax },
      { click: "main button:text-is('Зачувај')" },
      { wait: "main a:has-text('+ Нов документ')" },
      ...invoice,
      ...invoice,
      { goto: '/dokumenti/plakjanja' },
    ],
    steps: [
      [{ click: "main button:has-text('Внеси извод')" }, { wait: '#iz-no' }],
      [{ type: '#iz-no', text: STATEMENT }],
      [
        { type: "[role=dialog] input[placeholder='Пребарај партнер…']", text: FIRM.name },
        { click: `.bm-pop button:has-text('${FIRM.tax}')` },
        { type: "[role=dialog] input[aria-label='Износ']", text: '6000' },
      ],
      [{ hover: '[role=dialog] li >> nth=0' }, { pause: 900 }, { hover: '[role=dialog] li >> nth=1' }, { pause: 1300 }],
      [{ click: "[role=dialog] button:has-text('Зачувај')" }, { wait: `main tbody tr:has-text('${FIRM.name}')` }, { hover: `main tbody tr:has-text('${FIRM.name}') a[href^='/partneri/'] >> nth=0` }, { pause: 1300 }],
    ],
  },
}
