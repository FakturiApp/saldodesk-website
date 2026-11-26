// Изнајмување — the recorded steps; one array per step of the task in src/content/tasks/iznajmuvanje.ts.
// A rental takes a serial-numbered machine off stock, so each task that rents or reads one first
// RECEIVES ITS OWN machine (a receipt with a fresh serial number) in `prep`; the demo machines on
// stock are never used up and no demo machine gets a reading.
// The billing task runs „Нацрт" on a month that is already billed: it makes no invoice.

const STAMP = Date.now().toString(36).slice(-5).toUpperCase()
const SN_NEW = `KY2040-${STAMP}`
const SN_READ = `KY2040-${STAMP}R`

/** A receipt for one Kyocera ECOSYS M2040dn with the given serial number, issued. */
const receive = (serial) => [
  { goto: '/dokumenti/nova-priemnica' },
  { type: "input[placeholder='Пребарај добавувач…']", text: 'Мак Тон' },
  { wait: '.bm-pop >> text=Мак Тонер Дистрибуција ДООЕЛ' },
  { press: 'Enter' },
  { wait: "input[value='Мак Тонер Дистрибуција ДООЕЛ']" },
  { type: '#rl-0-prod', text: 'DEMO-PRN-M2040' },
  // The suggestion list re-renders while it loads: wait for it to settle before clicking.
  { wait: '.bm-pop >> text=Kyocera ECOSYS M2040dn' },
  { pause: 400 },
  { click: '.bm-pop >> text=Kyocera ECOSYS M2040dn' },
  { type: '#rl-0-price', text: '9000' },
  { type: "input[placeholder='внеси и Enter…']", text: serial },
  { press: 'Enter' },
  { click: "main button:has-text('Издади')" },
  { wait: "main button:has-text('Нов документ од овој')" },
]

/** That machine rented to Тетово Градба, from today, with 25000 on the B/W counter. */
const rent = (serial) => [
  { goto: '/iznajmuvanje/masini/nova' },
  { type: '#rc-product', text: 'Kyocera' },
  { click: 'text=Kyocera ECOSYS M2040dn' },
  { click: '#rc-serial' },
  { click: `text=${serial}` },
  { type: '#rc-partner', text: 'Тетово' },
  { wait: 'text=Тетово Градба ДОО' },
  { press: 'Enter' },
  { type: '#rc-start-bw', text: '25000' },
  { click: "main button[type='submit']:has-text('Зачувај')" },
  { wait: "main a[href^='/iznajmuvanje/dogovor/']" },
]

export const FLOWS = {
  'iznajmuvanje-novo': {
    prep: [...receive(SN_NEW), { goto: '/iznajmuvanje' }],
    steps: [
      [{ click: "main a[href='/iznajmuvanje/masini/nova']" }, { wait: '#rc-product' }, { pause: 700 }],
      [
        { type: '#rc-product', text: 'Kyocera' },
        { click: 'text=Kyocera ECOSYS M2040dn' },
        { click: '#rc-serial' },
        { click: `text=${SN_NEW}` },
        { pause: 700 },
      ],
      [{ type: '#rc-partner', text: 'Тетово' }, { click: 'text=Тетово Градба ДОО' }, { pause: 700 }],
      [{ click: "main label:has-text('Се наплаќа')" }, { type: '#rc-rent', text: '1500' }, { pause: 700 }],
      [
        { type: '#rc-start-bw', text: '25000' },
        { type: '#rc-inc-bw', text: '1000' },
        { type: '#rc-over-bw', text: '1,5' },
        { pause: 700 },
      ],
      [{ click: "main button[type='submit']:has-text('Зачувај')" }, { wait: "main a[href^='/iznajmuvanje/dogovor/']" }, { pause: 1300 }],
    ],
  },
  otchituvanja: {
    prep: [...receive(SN_READ), ...rent(SN_READ), { goto: '/iznajmuvanje' }],
    steps: [
      [{ click: "main a[href$='tab=chitanja']" }, { wait: '#rg-date' }, { pause: 900 }],
      [{ hover: '#rg-date' }, { pause: 1200 }],
      [{ type: "input[placeholder='Пребарај машини…']", text: SN_READ }, { pause: 1000 }],
      [{ type: `input[aria-label^='${SN_READ}'][id$='-bw']`, text: '26340' }, { pause: 1300 }],
      [{ click: "main button:has-text('Зачувај читања')" }, { wait: 'main >> text=Зачувани' }, { pause: 1400 }],
    ],
  },
  'iznajmuvanje-fakturi': {
    prep: [{ goto: '/iznajmuvanje' }],
    steps: [
      [{ click: "main a[href$='tab=presmetka']" }, { wait: '#billing-month' }, { pause: 900 }],
      [{ select: '#billing-month', value: '10' }, { pause: 900 }],
      [{ click: "main button:text-is('Нацрт')" }, { pause: 900 }],
      [{ click: "main button:text-is('Пресметај')" }, { wait: "[role=dialog] button:has-text('Пресметај')" }, { pause: 1500 }],
      [{ click: "[role=dialog] button:has-text('Пресметај')" }, { wait: 'main >> text=Не се пресметани' }, { pause: 1600 }],
      [{ hover: "main a[href^='/dokumenti/']" }, { pause: 1300 }],
    ],
  },
}
