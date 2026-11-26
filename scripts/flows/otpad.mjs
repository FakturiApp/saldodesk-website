// Отпад — the recorded steps; one array per step of the task in src/content/tasks/otpad.ts.
// vidovi-pakuvanje saves a NEW package type of its own (no demo type is changed). The report task
// only reads and copies: it never marks a month as reported.
import { L } from './lang.mjs'

// A type's name must be new, so each run names its box after a different scanner model.
const BOX = `${L('Кутија за скенер', 'Scanner box')} DS-${1000 + (Date.now() % 9000)}`

export const FLOWS = {
  'vidovi-pakuvanje': {
    prep: [{ goto: '/otpad' }],
    steps: [
      [{ click: "main a[href$='tab=vidovi']" }, { wait: "main a:has-text('+ Нов вид')" }, { pause: 900 }],
      [{ click: "main a:has-text('+ Нов вид')" }, { wait: '#wt-name' }, { pause: 700 }],
      [{ type: '#wt-name', text: BOX }, { pause: 600 }],
      [
        { click: "[role=dialog] button:has-text('+ Компонента')" },
        { type: "[role=dialog] input[aria-label^='Опис']", text: L('Стиропор во кутијата', 'Polystyrene in the box') },
        { pause: 600 },
      ],
      [
        // A new component starts as „Хартија": Пластика (styrofoam) makes the choice show.
        { select: "[role=dialog] select[aria-label^='Материјал']", value: 'plastic' },
        { type: "[role=dialog] input[aria-label^='Тежина (кг)']", text: '0,15' },
        { hover: "[role=dialog] div:has(> div:text-is('Кг по парче')) .num" },
        { pause: 1200 },
      ],
      [{ click: "[role=dialog] button:has-text('Зачувај')" }, { hover: `main a:has-text('${BOX}')` }, { pause: 1400 }],
    ],
  },
  'otpad-izveshtaj': {
    prep: [{ goto: '/' }],
    steps: [
      [{ click: "nav a[href='/otpad']" }, { wait: '#wr-month' }, { pause: 900 }],
      [{ select: '#wr-month', value: '10' }, { pause: 900 }],
      [{ hover: 'main >> text=Пластика' }, { pause: 700 }, { hover: 'main >> text=Дрво' }, { pause: 900 }],
      [{ click: ":nth-match(main button:has-text('Копирај'), 1)" }, { pause: 1300 }],
      // The warning opens its invoice; the pallets part of its „Амбалажа" box is further down.
      [
        { click: "main a:has-text('Палети не се внесени')" },
        { wait: "main div:has(> button:text-is('Без палета'))" },
        { pause: 600 },
        { hover: "main div:has(> button:text-is('Без палета'))" },
        { pause: 1500 },
      ],
    ],
  },
}
