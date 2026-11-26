// Подесувања — the recorded steps; one array per step of the task in src/content/tasks/podesuvanja.ts.
// „vchitaj-excel" gives the file field a small sample (scripts/flows/files/proizvodi-primer.xlsx,
// the app's own template with three made-up products) and shows the columns and the preview; it
// never clicks „Вчитај", so nothing is imported. „nova-smetka" adds a NEW account (a new username every
// run); the signed-in account is never touched. „izgled-pechatenje" changes the shared print
// layout only on screen and never clicks „Зачувај", so every other task prints as before.
const RUN = Date.now()
// The recording runs once on clean data, so a plain name is free; a dry run on used data may
// meet it again, so it then takes a number.
const USER = process.argv.includes('--dry') ? `elena.${String(RUN).slice(-5)}` : 'elena.petrovska'
const PRINT_SAVE = "main section:has(select:has(option:text-is('Заеднички изглед'))) button:text-is('Зачувај')"

export const FLOWS = {
  'vchitaj-excel': {
    prep: [{ goto: '/podesuvanja' }],
    steps: [
      [{ click: "main button[aria-pressed]:text-is('Вчитај податоци')" }, { wait: "main select:has(option:text-is('Партнери'))" }, { pause: 800 }],
      [{ select: "main select:has(option:text-is('Партнери'))", value: 'products' }, { pause: 900 }],
      [{ hover: "main button:text-is('Преземи шаблон')" }, { pause: 1300 }],
      [
        { upload: 'main input[type=file] >> nth=0', file: 'scripts/flows/files/proizvodi-primer.xlsx' },
        { wait: "main section:has(h3:text-is('Колони')) table" },
        { pause: 700 },
        { scroll: 380 },
        { hover: "main section:has(h3:text-is('Колони')) p >> nth=0" },
        { pause: 1500 },
      ],
      [
        { click: "main button:text-is('Прегледај')" },
        // (the preview's own button; its heading „Преглед" has another English word elsewhere)
        { wait: "main section button:text-is('Вчитај')" },
        { hover: "main section button:text-is('Вчитај')" },
        { pause: 1500 },
      ],
    ],
  },
  'nova-smetka': {
    prep: [{ goto: '/podesuvanja' }],
    steps: [
      [{ click: "main button[aria-pressed]:text-is('Сметки')" }, { wait: '#acc-new-username' }, { pause: 800 }],
      [{ type: '#acc-new-username', text: USER }, { type: '#acc-new-fullname', text: 'Елена Петровска' }, { pause: 700 }],
      [{ select: '#acc-new-role', value: '2' }, { pause: 1200 }],
      [{ click: "main form button:text-is('Прикажи ги сите дозволи')" }, { pause: 500 }, { scroll: 420 }, { pause: 1000 }],
      [{ click: "main label:has-text('Набавни цени и маржи') input" }, { pause: 1000 }],
      [{ click: "main form button:text-is('Додади сметка')" }, { wait: 'main b.select-all' }, { hover: 'main p:has(b.select-all) b >> nth=0' }, { pause: 1500 }],
    ],
  },
  'izgled-pechatenje': {
    prep: [{ goto: '/podesuvanja' }],
    steps: [
      [{ click: "main button[aria-pressed]:text-is('Печатење')" }, { wait: "main select:has(option:text-is('Заеднички изглед'))" }, { pause: 900 }],
      [{ hover: "main select:has(option:text-is('Заеднички изглед'))" }, { pause: 1300 }],
      [{ click: "main li:has(button:text-is('ЕМБС')) input[type=checkbox]" }, { pause: 1300 }],
      [{ type: "main div:has(> label:text-is('Порака на дното')) textarea", text: 'Ви благодариме за соработката.' }, { pause: 1000 }],
      [{ select: "main div:has(> label:text-is('Големина на буквите')) select", value: 'l' }, { pause: 1500 }],
      [{ hover: PRINT_SAVE }, { pause: 1300 }],
    ],
  },
}
