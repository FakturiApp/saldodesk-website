// Партнери (more) — the recorded steps; one array per step of the task in src/content/tasks/partneri-2.ts.
// Every task works on its OWN new partner (made in prep or in the steps), so no shared demo
// partner gets a limit or a discount. Names and tax numbers change per run: two partners may
// not share a tax number, and a partner is picked by its tax number where a name could repeat.
const RUN = Date.now()
const CITIES = ['Струга', 'Кичево', 'Гевгелија', 'Кавадарци', 'Куманово', 'Кочани', 'Неготино', 'Дебар', 'Струмица', 'Прилеп', 'Гостивар', 'Радовиш']
const KINDS = ['Трејд', 'Пак', 'Маркет', 'Комерц', 'Дистрибуција', 'Офис']
const firm = (n) => {
  const i = Math.floor(RUN / 1000) + n * 7
  return { city: CITIES[i % CITIES.length], name: `${CITIES[i % CITIES.length]} ${KINDS[Math.floor(i / CITIES.length) % KINDS.length]} ДООЕЛ`, tax: `40${String(RUN + n).slice(-11)}` }
}
const NEW = firm(1), LIMIT = firm(2), DISC = firm(3)

/** Makes a customer and ends on its card. */
const newPartner = (p) => [
  { goto: '/partneri/nov' },
  { type: '#p-name', text: p.name },
  { type: '#p-tax', text: p.tax },
  { click: "main button:text-is('Зачувај')" },
  { wait: "main a:has-text('+ Нов документ')" },
]
const SAVE = "main button:text-is('Зачувај')"
// The „Финансии" drawer (it holds #p-limit), found without its title so the English run finds it too.
const FIN = 'main div:has(> button[aria-expanded]):has(#p-limit) > button'

export const FLOWS = {
  'nov-partner': {
    prep: [{ goto: '/partneri' }],
    steps: [
      [{ click: "main :is(a,button):has-text('+ Нов партнер')" }, { wait: '#p-name' }, { pause: 700 }],
      [{ type: '#p-name', text: NEW.name }, { pause: 700 }],
      [{ type: '#p-tax', text: NEW.tax }, { hover: "main button:has-text('Пополни од УЈП')" }, { pause: 1000 }],
      [{ type: '#p-city', text: NEW.city }, { press: 'Escape' }, { type: '#p-street', text: 'Маршал Тито 12' }, { pause: 700 }],
      [{ click: "main label:has-text('Добавувач') input" }, { pause: 900 }],
      [{ click: SAVE }, { wait: "main a:has-text('+ Нов документ')" }, { pause: 1300 }],
    ],
  },
  'kreditni-limit': {
    prep: newPartner(LIMIT),
    steps: [
      // Opens „Финансии" if it is closed. The open/closed state is the account's own: the next
      // task (popusti) closes it again in its prep, unseen.
      [{ click: `${FIN}[aria-expanded='false'], #p-limit` }, { wait: '#p-limit' }, { hover: '#p-limit' }, { pause: 800 }],
      [{ type: '#p-limit', text: '5000' }, { pause: 900 }],
      // The „Зачувај" under the form, beside the field (the top one would scroll it away).
      [{ click: `${SAVE} >> nth=-1` }, { pause: 900 }, { hover: '#p-limit' }, { pause: 900 }],
      // The new invoice opens with the customer list open: closed.
      [{ click: "main a:has-text('+ Нов документ')" }, { wait: '#dl-0-prod' }, { pause: 500 }, { press: 'Escape' }, { pause: 700 }],
      [{ type: '#dl-0-prod', text: 'DEMO-T-59A' }, { click: 'text=Тонер HP 59A CF259A' }, { type: '#dl-0-qty', text: '2' }, { pause: 900 }],
      [{ hover: "main [data-notice] :text-is('Купувачот го надминува кредитниот лимит')" }, { pause: 1600 }],
    ],
  },
  popusti: {
    prep: [
      ...newPartner(DISC),
      // Closes „Финансии" if kreditni-limit left it open (else a harmless click on „Креиран: …").
      { click: `${FIN}[aria-expanded='true'], main form > div:nth-child(2) > div:nth-last-child(2) > span:first-child` },
    ],
    steps: [
      [{ click: "main a[href$='tab=discounts']" }, { wait: "main form input[inputmode='decimal']" }, { pause: 800 }],
      [{ type: "main form input[inputmode='decimal']", text: '10' }, { pause: 700 }],
      [{ click: "main button:has-text('Додади правило')" }, { pause: 1300 }],
      // The new invoice opens with the customer list open: closed.
      [{ click: "main a:has-text('+ Нов документ')" }, { wait: '#dl-0-prod' }, { pause: 500 }, { press: 'Escape' }, { pause: 700 }],
      [{ type: '#dl-0-prod', text: 'DEMO-T-59A' }, { click: 'text=Тонер HP 59A CF259A' }, { hover: "main input[aria-label^='Попуст %'] >> nth=0" }, { pause: 1500 }],
    ],
  },
}
