// Партнери — the recorded steps; one array per step of the task in src/content/tasks/partneri.ts.
export const FLOWS = {
  dolgovi: {
    prep: [{ goto: '/partneri' }],
    steps: [
      [{ click: 'main >> text=Скопје Принт Солушнс ДООЕЛ' }, { pause: 700 }],
      [{ hover: 'main >> text=/Рок на плаќање|Payment deadline/' }, { pause: 1300 }],
      [{ click: "main a[href$='tab=openItems']" }, { pause: 1500 }],
      [{ click: "main a[href$='tab=card']" }, { pause: 900 }, { scroll: 320 }, { pause: 900 }],
      [{ hover: "main button:has-text('Excel')" }, { pause: 900 }],
    ],
  },
}
