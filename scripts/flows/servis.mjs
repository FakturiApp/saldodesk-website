// Сервис — the recorded steps; one array per step of the task in src/content/tasks/servis.ts.
// servis-tabla and servis-naplata change a ticket's status, so each first takes in its OWN
// device (a fresh ticket) in `prep`; no demo ticket is moved or closed.
import { L } from './lang.mjs'

/** A new intake for Скопје Принт's Canon, with the given fault — ends on the new ticket. */
const intake = (problem) => [
  { goto: '/servis/nov' },
  { wait: '#i-partner' },
  { type: '#i-partner', text: 'Скопје Принт' },
  { wait: 'text="Скопје Принт Солушнс ДООЕЛ"' },
  { press: 'Enter' },
  { click: "main button:has-text('CN2520-1188')" },
  { type: '#i-problem', text: problem },
  { click: "main button[type='submit']" },
  { wait: '#tv-diagnosis' },
]

// servis-tabla's fault: no demo ticket has it (the demo СВЦ-2026-0014 „Печати со пруги" sits in
// Подготвено), so on the clean database the card with it is this run's ticket.
const FAULT = L('Остава дамки на листот', 'Leaves smudges on the page')

/** Our ticket's card in one column of the Работилница board. */
const card = (column) => `main div.min-w-0:has(> :first-child:has-text('${column}')) a[href^='/servis/']:has-text('${FAULT}')`

/** The ticket's „Документи" box, where the invoice made on closing appears. */
const DOCS = "main div.rounded-app:has(> h3:text-is('Документи'))"

export const FLOWS = {
  'servis-priem': {
    prep: [{ goto: '/servis' }],
    steps: [
      [{ click: "main a[href='/servis/nov']" }, { wait: '#i-partner' }, { pause: 700 }],
      [{ type: '#i-partner', text: 'Скопје Принт' }, { wait: 'text="Скопје Принт Солушнс ДООЕЛ"' }, { press: 'Enter' }, { pause: 900 }],
      [{ click: "main button:has-text('CN2520-1188')" }, { pause: 900 }],
      [{ type: '#i-problem', text: L('Не влече хартија од касетата', 'Does not take paper from the tray') }, { pause: 700 }],
      [{ click: "main button[type='submit']" }, { wait: '#tv-diagnosis' }, { pause: 1300 }],
    ],
  },
  'servis-tabla': {
    prep: [...intake(FAULT), { goto: '/' }],
    steps: [
      [{ click: "nav a[href='/servis']" }, { hover: card('Примено'), on: true }, { pause: 1200 }],
      [{ click: card('Примено') }, { wait: '#tv-diagnosis' }, { pause: 700 }],
      [{ click: "main button:text-is('Дијагностика')" }, { pause: 1000 }],
      [{ click: "main button:text-is('Во поправка')" }, { pause: 1000 }],
      [{ click: "main button:text-is('Подготвено')" }, { pause: 1000 }],
      [{ click: "nav a[href='/servis']" }, { hover: card('Подготвено'), on: true }, { pause: 1400 }],
    ],
  },
  'servis-naplata': {
    prep: [
      ...intake('Не се вклучува'),
      { type: '#tl-add-product', text: 'Сервисна' },
      { press: 'Enter' },
      { click: "main button:text-is('Дијагностика')" },
      { click: "main button:text-is('Во поправка')" },
      { click: "main button:text-is('Подготвено')" },
      { wait: "main button:has-text('Затвори…')" },
    ],
    steps: [
      [{ click: "main button:has-text('Затвори…')" }, { wait: '[role=dialog] input' }, { pause: 1200 }],
      [{ type: '[role=dialog] input', text: 'Марко Петров' }, { pause: 600 }],
      [{ click: "[role=dialog] button:has-text('Потврди')" }, { pause: 900 }, { hover: `${DOCS} >> text=Нацрт` }, { pause: 1300 }],
      [{ hover: `${DOCS} a[href^='/dokumenti/']` }, { pause: 800 }, { click: `${DOCS} a[href^='/dokumenti/']` }, { wait: "[role=dialog] button:has-text('Издади')" }, { pause: 1200 }],
      [{ click: "[role=dialog] button:has-text('Издади')" }, { wait: "[role=dialog] h2:has-text('/')" }, { hover: "[role=dialog] h2:has-text('/')" }, { pause: 1600 }],
    ],
  },
}
