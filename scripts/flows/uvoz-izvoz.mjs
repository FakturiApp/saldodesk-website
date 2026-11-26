// Увоз/извоз — the recorded steps; one array per step of the task in src/content/tasks/uvoz-izvoz.ts.
// Both tasks make and issue their OWN new document; no demo document is changed. The import
// brings 20 toners in, the export sends 2 of the same toner out.

// The supplier's invoice number, new on every run.
const INV_NO = `PS-DE-2026-${100 + (Date.now() % 900)}`

export const FLOWS = {
  'devizna-faktura': {
    prep: [{ goto: '/dokumenti/nova-devizna' }],
    steps: [
      [
        { type: "input[placeholder='Пребарај добавувач…']", text: 'Print Sup' },
        { wait: '.bm-pop >> text=Print Supplies GmbH' },
        { press: 'Enter' },
        { type: '#i-invno', text: INV_NO },
        { type: '#i-invdate', text: '24.11.2026' },
        { pause: 600 },
      ],
      [{ type: '#i-rate', text: '61,5' }, { pause: 600 }],
      [
        { type: '#il-0-prod', text: 'DEMO-T-1150' },
        { click: 'text=Тонер Kyocera TK-1150' },
        { type: '#il-0-qty', text: '20' },
        { type: '#il-0-price', text: '10' },
        { pause: 700 },
      ],
      [{ click: "main button:has-text('Издади')" }, { wait: "main button:has-text('Зачувај трошоци')" }, { pause: 1200 }],
      [
        { type: "main label:has-text('Транспорт') input", text: '3000' },
        { type: "main label:has-text('Царинско посредување') input", text: '1500' },
        { click: "main button:has-text('Зачувај трошоци')" },
        { pause: 1200 },
      ],
      [
        // The app scrolls to the side panel but leaves its title under the top bar: once that
        // scroll is over, go to the very top, then point at the line's cost price in denars.
        { click: "main a:has-text('Приемница (увоз)')" },
        { wait: "main div.rounded-app:has(a:has-text('Отвори го документот')) li" },
        { pause: 1000 },
        { scroll: -4000 },
        { hover: "main div.rounded-app:has(a:has-text('Отвори го документот')) li span.w-16 >> nth=0" },
        { pause: 1500 },
      ],
    ],
  },
  'izvozna-faktura': {
    prep: [{ goto: '/dokumenti/nova-izvozna' }],
    steps: [
      [
        // The customer box is the form's first required field (its placeholder has two English versions).
        { type: "main input[aria-required='true'] >> nth=0", text: 'Adriatic' },
        { wait: '.bm-pop >> text=Adriatic Office d.o.o.' },
        { press: 'Enter' },
        { hover: '#x-cur' },
        { pause: 900 },
      ],
      [{ type: '#xl-0-prod', text: 'DEMO-T-1150' }, { click: 'text=Тонер Kyocera TK-1150' }, { type: '#xl-0-qty', text: '2' }, { pause: 600 }],
      [{ type: '#xl-0-price', text: '25' }, { hover: "main select[aria-label='ДДВ']" }, { pause: 1000 }],
      [{ click: "main button:has-text('Зачувај нацрт')" }, { wait: "main button:has-text('Издади')" }, { pause: 900 }],
      [{ click: "main button:has-text('Издади')" }, { type: '#dv-rate', text: '61,5' }, { pause: 700 }],
      [{ click: "[role=dialog] button:has-text('Издади')" }, { pause: 1600 }],
    ],
  },
}
