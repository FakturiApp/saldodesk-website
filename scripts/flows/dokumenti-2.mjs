// Документи (2) — the recorded steps; one array per step of the task in src/content/tasks/dokumenti-2.ts.
export const FLOWS = {
  'ponuda-faktura': {
    // The offer is made in the steps, so the invoice comes from a fresh offer every time.
    prep: [{ goto: '/dokumenti?tab=prodazhba&tip=offer' }],
    steps: [
      [{ click: "main a[aria-label='Нова понуда']" }, { wait: "input[placeholder='Пребарај партнер…']" }, { pause: 700 }],
      [{ type: "input[placeholder='Пребарај партнер…']", text: 'Охрид Хотел Лихнидос ДООЕЛ' }, { press: 'Enter' }, { pause: 500 }, { press: 'Escape' }, { pause: 700 }],
      [{ type: '#dl-0-prod', text: 'DEMO-T-85A' }, { press: 'Enter' }, { type: '#dl-0-qty', text: '3' }, { pause: 900 }],
      [{ click: "main button:has-text('Издади')" }, { wait: "main button:has-text('Направи фактура')" }, { pause: 1300 }],
      [{ click: "main button:has-text('Направи фактура')" }, { wait: "main a[href^='/dokumenti/']:has-text('Понуда')" }, { pause: 1000 }],
      [{ hover: 'main a >> text=Тонер HP 85A CE285A' }, { pause: 1500 }],
    ],
  },
  'ispratnica-faktura': {
    // Its own new dispatch note for one customer, then the list of that customer's notes.
    prep: [
      { goto: '/dokumenti/nov?tip=ispratnica' },
      { type: "input[placeholder='Пребарај партнер…']", text: 'Тетово Градба ДОО' },
      { press: 'Enter' },
      { type: '#dl-0-prod', text: 'DEMO-T-85A' },
      { press: 'Enter' },
      { type: '#dl-0-qty', text: '2' },
      { click: "main button:has-text('Издади')" },
      { wait: "main button:has-text('Направи фактура')" },
      // The list opens already searched (?q=): typing races the list's search delay.
      { goto: `/dokumenti?tab=prodazhba&tip=delivery&q=${encodeURIComponent('Тетово Градба ДОО')}` },
      { wait: "main table tbody tr a[href^='/dokumenti/']" },
    ],
    steps: [
      [{ click: "main table tbody tr a[href^='/dokumenti/'] >> nth=0" }, { wait: "main button:has-text('Направи фактура')" }, { pause: 1000 }],
      [{ click: "main button:has-text('Направи фактура')" }, { wait: "main a[href^='/dokumenti/']:has-text('Испратница')" }, { pause: 1200 }],
      [{ hover: 'main >> text=Датум на промет' }, { pause: 1300 }],
      [{ hover: "main a[href^='/dokumenti/']:has-text('Испратница')" }, { pause: 1300 }],
    ],
  },
  priemnica: {
    prep: [{ goto: '/dokumenti?tab=nabavka&tip=receipt' }],
    steps: [
      [{ click: "main a[aria-label='Нова приемница']" }, { wait: "input[placeholder='Пребарај добавувач…']" }, { pause: 700 }],
      [{ type: "input[placeholder='Пребарај добавувач…']", text: 'Мак Тонер Дистрибуција ДООЕЛ' }, { press: 'Enter' }, { pause: 700 }],
      [{ type: '#rl-0-prod', text: 'DEMO-T-1150' }, { press: 'Enter' }, { type: '#rl-0-qty', text: '6' }, { pause: 800 }],
      [{ type: '#rl-0-price', text: '1520' }, { pause: 900 }],
      [{ click: "main button:has-text('Издади')" }, { wait: "main a[href*='nova-faktura-priemnica']" }, { wait: "main h2:has-text('/2026')" }, { hover: "main h2:has-text('/2026')" }, { pause: 1400 }],
      [{ click: "main button[aria-label='Детали за производот'] >> nth=0" }, { pause: 1600 }],
    ],
  },
}
