// Почетна — the recorded steps; one array per step of the task in src/content/tasks/pochetna.ts.
// Nothing here changes shared data for good: the checklist is only pointed at (no „Прескокни"),
// and the tile added in „plochki" is taken off again in its last step.
const GEAR = "button[title='Подеси ја плочката']"

export const FLOWS = {
  'pochetni-chekori': {
    prep: [{ goto: '/' }, { wait: '[data-first-steps]' }],
    steps: [
      [{ hover: '#first-steps-title' }, { pause: 1200 }],
      [{ hover: "[data-first-steps] li[data-step='first_document']" }, { pause: 1200 }],
      [{ hover: "[data-first-steps] button:has-text('Прескокни')" }, { pause: 1200 }],
      [{ hover: "[data-first-steps] a[href$='tab=company']", side: 'left' }, { pause: 1300 }],
      [{ click: "[data-first-steps] a[href$='tab=company']" }, { wait: '#c-street' }, { hover: '#c-street' }, { pause: 1300 }],
    ],
  },
  prebaruvanje: {
    prep: [{ goto: '/' }],
    steps: [
      [{ click: "header input[placeholder='Пребарај…']" }, { pause: 900 }],
      [{ type: "header input[placeholder='Пребарај…']", text: 'bitola' }, { wait: '#ls-listbox a[role=option]' }, { pause: 900 }],
      [{ hover: "#ls-listbox a[role=option][href^='/partneri/']" }, { pause: 1300 }],
      [{ click: "#ls-listbox a[role=option][href^='/partneri/']" }, { wait: 'main h2.font-serif' }, { hover: 'main h2.font-serif' }, { pause: 1300 }],
    ],
  },
  plochki: {
    prep: [{ goto: '/' }],
    steps: [
      [{ click: "main button:has-text('+ Додади')" }, { wait: '[role=dialog]' }, { pause: 900 }],
      [
        { click: "[role=dialog] li:has-text('Обврски') button:has-text('Додади')" },
        { pause: 600 },
        { press: 'Escape' },
        { hover: `${GEAR} >> nth=-1` },
        { pause: 900 },
      ],
      [{ click: `${GEAR} >> nth=-1` }, { wait: '[role=dialog]' }, { pause: 700 }],
      [{ click: "[role=dialog] button[aria-label='Сина']" }, { pause: 1200 }],
      [{ click: "[role=dialog] button:has-text('Отстрани') ~ button" }, { pause: 1200 }],
      [
        { click: `${GEAR} >> nth=-1` },
        { click: "[role=dialog] button:has-text('Отстрани')" },
        { click: "[role=dialog] button:has-text('Отстрани') >> nth=-1" },
        { pause: 600 },
        { scroll: 700 },
        { pause: 1300 },
      ],
    ],
  },
}
