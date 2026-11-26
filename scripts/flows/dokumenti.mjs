// Документи — the recorded steps; one array per step of the task in src/content/tasks/dokumenti.ts.
// Picking from a search list: type the whole name or code, wait for it, press Enter (a click can
// land while the list is still re-rendering).
export const FLOWS = {
  faktura: {
    prep: [{ goto: '/' }],
    steps: [
      [{ click: 'main >> text=Нова фактура' }, { wait: "input[placeholder='Пребарај партнер…']" }],
      [
        { type: "input[placeholder='Пребарај партнер…']", text: 'Битола Комерц ДОО' },
        { wait: 'text=4002026500035' }, { pause: 300 }, { press: 'Enter' }, { pause: 500 },
        // Choosing the customer opens its product suggestions over the lines: closed.
        { press: 'Escape' }, { pause: 500 },
      ],
      [{ type: '#dl-0-prod', text: 'DEMO-T-59A' }, { wait: 'text=Тонер HP 59A CF259A' }, { pause: 300 }, { press: 'Enter' }, { pause: 1300 }],
      [{ type: '#dl-0-qty', text: '2' }, { pause: 900 }],
      [
        { click: "main button:has-text('Издади')" },
        { wait: "main h2:has-text('Фактура — Испратница')" },
        { hover: "main h2:has-text('Фактура — Испратница')" },
        { pause: 1500 },
      ],
    ],
  },
}
