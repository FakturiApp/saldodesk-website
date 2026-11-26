// Извештаи — the recorded steps; one array per step of the task in src/content/tasks/izveshtai.ts.
const excel = [{ hover: "main button:has-text('Извези во Excel')" }, { pause: 1200 }]

// „Овој месец / минатиот": this month up to today against the month before, up to the same day.
const iso = (y, m, d) => `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
const now = new Date()
const [Y, M, D] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
const [PY, PM] = M === 1 ? [Y - 1, 12] : [Y, M - 1]
const PD = Math.min(D, new Date(PY, PM, 0).getDate())
const MONTH_PREV = `a_from=${iso(Y, M, 1)}&a_to=${iso(Y, M, D)}&b_from=${iso(PY, PM, 1)}&b_to=${iso(PY, PM, PD)}`

export const FLOWS = {
  'ddv-04': {
    prep: [{ goto: '/izvestai' }],
    steps: [
      [{ click: "main a:text-is('ДДВ')" }, { pause: 1200 }],
      [
        { click: "main a[aria-label='Претходен период']" },
        { pause: 700 },
        { click: "main a[aria-label='Следен период']" },
        { pause: 700 },
        { hover: "main a[aria-label='Претходен период'] + span span.font-semibold" },
        { pause: 900 },
      ],
      [{ click: "main a:text-is('Влезна книга')" }, { pause: 1200 }],
      [
        { click: "main a:text-is('ДДВ-04')" },
        { hover: "main td[data-box='01']" },
        { pause: 900 },
        { hover: "main td[data-box='31']" },
        { pause: 900 },
      ],
      // Opens the print form only; its own „Печати" (the browser's print window) is not clicked.
      [{ click: "main a:text-is('Печати')" }, { pause: 1500 }],
    ],
  },
  // 1. тримесечје 2025: before any demo document, so the lock touches nothing; the last step
  // takes the filing back, so the period is open again after every run.
  podnesena: {
    prep: [{ goto: '/izvestai/ddv?ddv=2025-Q2' }],
    steps: [
      [{ click: "main a:text-is('ДДВ-04')" }, { pause: 900 }],
      [{ click: "main a[aria-label='Претходен период']" }, { pause: 1000 }],
      [{ click: "main button:text-is('Означи поднесена')" }, { wait: '[role=dialog]' }, { pause: 1300 }],
      [
        { click: "[role=dialog] button:has-text('Означи поднесена')" },
        { wait: "main button:has-text('Врати поднесување')" },
        { pause: 1500 },
      ],
      [
        { click: "main button:has-text('Врати поднесување')" },
        { type: "[role=dialog] input[placeholder='Причина (задолжително)']", text: 'Погрешен период' },
        { click: "[role=dialog] button:has-text('Врати поднесување')" },
        { wait: "main button:text-is('Означи поднесена')" },
        { pause: 1200 },
      ],
    ],
  },
  promet: {
    // From/To ride in the address, so „Сопствен период" opens on a whole period and never says
    // „Периодот е непотполн…" while the new dates are typed.
    prep: [{ goto: '/izvestai?from=2026-11-01&to=2026-11-30' }],
    steps: [
      [{ click: "main a:text-is('Сопствен период')" }, { wait: "main input[aria-label='Од']" }, { pause: 600 }],
      [
        { type: "main input[aria-label='Од']", text: '01.10.2026' },
        { type: "main input[aria-label='До']", text: '30.11.2026' },
        { click: "main button:text-is('Прикажи')" },
        { pause: 900 },
      ],
      [{ hover: "main :text-is('Промет') >> nth=0" }, { pause: 900 }, { hover: "main :text-is('Добивка') >> nth=0" }, { pause: 900 }],
      [{ click: "main a:text-is('По месец')" }, { pause: 1300 }],
      excel,
    ],
  },
  'kupuvachi-proizvodi': {
    prep: [{ goto: '/izvestai' }],
    steps: [
      [{ click: "main a:text-is('Купувачи')" }, { pause: 1000 }],
      [{ hover: "main a[href^='/partneri/'] >> nth=0" }, { pause: 1300 }],
      [{ click: "main a:text-is('Изгубени')" }, { pause: 1300 }],
      [{ click: "main a:text-is('Производи')" }, { pause: 1000 }],
      [{ click: "main a:text-is('Категорија')" }, { pause: 1300 }],
      excel,
    ],
  },
  sporedba: {
    prep: [{ goto: '/izvestai' }],
    steps: [
      [{ click: "main a:text-is('Споредба')" }, { pause: 1000 }],
      // A click on „Сопствено" opens it with no dates in the address, and the app then says
      // „Периодите се непотполни…" until „Прикажи". The same view is opened by its address
      // instead (this month against the last, as the click shows), so no warning appears.
      [
        { hover: "main a:text-is('Сопствено')", on: true },
        { pause: 300 },
        { goto: `/izvestai/sporedba?par=custom&${MONTH_PREV}` },
        { wait: "main input[aria-label='А од']" },
        { hover: "main a:text-is('Сопствено')" },
        { pause: 700 },
      ],
      [
        { type: "main input[aria-label='А од']", text: '16.10.2026' },
        { type: "main input[aria-label='А до']", text: '31.10.2026' },
        { type: "main input[aria-label='Б од']", text: '01.10.2026' },
        { type: "main input[aria-label='Б до']", text: '15.10.2026' },
        { click: "main button:text-is('Прикажи')" },
        { pause: 900 },
      ],
      [{ hover: "main th:has-text('Промена')" }, { pause: 1200 }],
      [{ scroll: 420 }, { hover: "main :text-is('Најмногу пораснале') >> nth=0" }, { pause: 1300 }],
      excel,
    ],
  },
}
