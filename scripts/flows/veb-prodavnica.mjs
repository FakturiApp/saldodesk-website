// Веб-продавница — the recorded steps; one array per step of the task in src/content/tasks/veb-prodavnica.ts.
// veb-povrzuvanje only types an example address and two made-up keys and POINTS at „Зачувај" and
// „Тестирај врска": nothing is saved and no connection is tried.
// prikazhi-na-veb ticks „Прикажи на веб" on its OWN new product (a copy of the TK-1150 toner made
// in `prep`), so no demo product changes.

// The new product's code, new on every run.
const SKU = `DEMO-T-1160-${1000 + (Date.now() % 9000)}`

export const FLOWS = {
  'veb-povrzuvanje': {
    prep: [{ goto: '/' }],
    steps: [
      [{ click: "header button:has-text('Кони Копи')" }, { click: "[role=menu] a[href='/podesuvanja']" }, { pause: 700 }],
      [{ click: "main button:has-text('Вчитај податоци') + button" }, { wait: "main input[type='url']" }, { pause: 700 }],
      [{ type: "main input[type='url']", text: 'https://prodavnica.primer.mk' }, { pause: 700 }],
      [
        // Made-up keys, only typed: nothing is saved.
        { type: "main input[placeholder='ck_…']", text: 'ck_7f3a2b9c41d8e6f05a2c' },
        { type: "main input[placeholder='cs_…']", text: 'cs_4e1d8a6f93b2c7e05d1f' },
        { pause: 900 },
      ],
      [{ hover: "main label:has-text('Сите магацини')" }, { pause: 1200 }],
      [{ hover: "main button:has-text('Зачувај')" }, { pause: 900 }, { hover: "main button:has-text('Тестирај врска')" }, { pause: 1200 }],
    ],
  },
  'prikazhi-na-veb': {
    prep: [
      { goto: '/proizvodi/nov?duplicate=12' },
      { type: '#pr-name', text: 'Тонер Kyocera TK-1160' },
      { type: '#pr-sku', text: SKU },
      { click: "main label:has-text('Прикажи на веб')" },
      { click: "main button:has-text('Зачувај')" },
      { wait: "main a[href$='tab=stock']" },
    ],
    steps: [
      [{ click: "main label:has-text('Прикажи на веб')" }, { pause: 900 }],
      [{ click: "main button:has-text('Зачувај')" }, { pause: 1300 }],
      [{ hover: '#pr-name' }, { pause: 700 }, { hover: '#pr-sku' }, { pause: 900 }],
      [{ hover: '#pr-price-gross' }, { pause: 1300 }],
      [{ hover: '#pr-cat' }, { pause: 700 }, { hover: '#pr-brand' }, { pause: 900 }],
      [{ click: "main a[href$='tab=stock']" }, { pause: 1500 }],
    ],
  },
}
