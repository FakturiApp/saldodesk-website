// Документи (3) — the recorded steps; one array per step of the task in src/content/tasks/dokumenti-3.ts.
import { L } from './lang.mjs'

/** A fresh issued invoice of our own (a service line, so no stock is spent); ends on its page. */
const ownInvoice = [
  { goto: '/dokumenti/nov?tip=faktura' },
  { type: "input[placeholder='Пребарај партнер…']", text: 'Велес' },
  { wait: '.bm-pop >> text=Велес Офис ДООЕЛ' },
  { pause: 300 },
  { click: '.bm-pop >> text=Велес Офис ДООЕЛ' },
  { type: '#dl-0-prod', text: 'DEMO-S-DIAG' },
  { click: 'text=Дијагностика на уред' },
  { type: '#dl-0-qty', text: '1' },
  { click: "main button:has-text('Издади')" },
  { wait: "main button:has-text('Нов документ од овој')" },
]

export const FLOWS = {
  storno: {
    prep: ownInvoice,
    steps: [
      [{ click: "main button:has-text('Нов документ од овој')" }, { pause: 1000 }],
      [{ click: "[role=menu] a:has-text('Книжен (издаден)')" }, { wait: '#kz-reason' }, { pause: 700 }],
      [{ type: "main input[aria-label^='Износ (пари)']", text: '100' }, { pause: 900 }],
      [{ type: '#kz-reason', text: L('Попуст договорен подоцна', 'Discount agreed later') }, { pause: 700 }],
      [
        { click: "main button:has-text('Издади')" },
        { wait: "main div:has(> span:has-text('Направен од')) a" },
        { scroll: 300 },
        { hover: "main div:has(> span:has-text('Направен од')) a >> nth=0" },
        { pause: 1500 },
      ],
    ],
  },
  pechatenje: {
    prep: ownInvoice,
    steps: [
      [{ click: "main a:has-text('Печати')" }, { wait: "main button:has-text('Печати')" }, { pause: 1000 }],
      [{ select: 'main select', value: '3' }, { pause: 900 }],
      [{ click: "main label:has-text('На англиски')" }, { pause: 1300 }],
      // Pointing only: a click would open the browser's print window.
      [{ hover: "main button:has-text('Печати')" }, { pause: 1300 }],
    ],
  },
  'nema-zaliha': {
    // Our own draft: „Издади" with too little stock keeps it a draft; nothing is issued.
    prep: [
      { goto: '/dokumenti/nov?tip=faktura' },
      { type: "input[placeholder='Пребарај партнер…']", text: 'Битола Ком' },
      { wait: '.bm-pop >> text=Битола Комерц ДОО' },
      { pause: 300 },
      { click: '.bm-pop >> text=Битола Комерц ДОО' },
    ],
    steps: [
      [
        { type: '#dl-0-prod', text: 'DEMO-T-85A' },
        { click: 'text=Тонер HP 85A CE285A' },
        { hover: "[data-testid='line-bar'] > span >> nth=0" },
        { pause: 1300 },
      ],
      [{ type: '#dl-0-qty', text: '80' }, { pause: 800 }],
      [{ click: "main button:has-text('Издади')" }, { wait: '[role=dialog]' }, { pause: 1300 }],
      // Pointing only: these two would send a request / fill the shared order list.
      [{ hover: "[role=dialog] button:has-text('Донеси од магацин')" }, { pause: 1300 }],
      [{ hover: "[role=dialog] button:has-text('Додај во нарачка')" }, { pause: 1300 }],
      [{ click: "[role=dialog] button:has-text('Замени')" }, { pause: 1500 }],
    ],
  },
  povtoruvachki: {
    prep: [{ goto: '/dokumenti/povtoruvachki' }],
    steps: [
      [{ click: "main a:has-text('Нова повторувачка')" }, { wait: "input[placeholder='Пребарај партнер…']" }, { pause: 600 }],
      [{ type: "input[placeholder='Пребарај партнер…']", text: 'Велес' }, { click: '.bm-pop >> text=Велес Офис ДООЕЛ' }, { pause: 600 }],
      // „Месечно" is already chosen for a new recurring invoice: the step points at it.
      [{ hover: "main select:has(option[value='weekly'])" }, { pause: 1300 }],
      [{ type: "main div:has(> label:has-text('Следно креирање')) input", text: '01.12.2026' }, { pause: 900 }],
      [
        { type: "main input[placeholder^='Производ']", text: 'DEMO-S-INSTAL' },
        { click: 'text=Инсталација и обука' },
        { pause: 900 },
      ],
      [{ click: "main button:text-is('Зачувај') >> nth=-1" }, { pause: 1600 }],
    ],
  },
}
