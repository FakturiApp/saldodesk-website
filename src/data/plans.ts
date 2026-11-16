// The plans and modules as decided with the owner on 2026-11-16 (brief 04-pricing §2).
// ALL PRICES ARE EXAMPLES („dummy data", owner 2026-11-16) until the economics in brief 04 §6
// are known. The pricing page says so once, in a <Todo>. Yearly = 10 months.

export type PlanKey = 'osnoven' | 'standard' | 'pro'

export interface Plan {
  key: PlanKey
  name: string
  forWhom: string
  users: number
  monthly: number
  recommended?: boolean
  /** Short lines for the card. */
  lines: string[]
}

export const PLANS: Plan[] = [
  {
    key: 'osnoven', name: 'Основен', forWhom: 'Мала фирма, едно место', users: 2, monthly: 500,
    lines: ['Сите документи и е-Фактура', 'Залиха во еден магацин', 'Плаќања, долгови и аванси', 'ДДВ книги и ДДВ-04', 'Промет и добивка', 'Пренос од старата програма'],
  },
  {
    key: 'standard', name: 'Стандард', forWhom: 'Трговија: залиха на повеќе места, подлабок увид', users: 5, monthly: 1000, recommended: true,
    lines: ['Сè од Основен', 'Повеќе магацини, сериски броеви и серии', 'Анализи по месеци, купувачи и производи', 'Повторувачки фактури', 'Спореди', 'Свои полиња и распоред на формите'],
  },
  {
    key: 'pro', name: 'Про', forWhom: 'Увозници и трговци во раст: набавка од странство, контрола на кредит', users: 10, monthly: 1800,
    lines: ['Сè од Стандард', 'Увоз / Извоз со зависни трошоци', 'Отпад: извештај за ПАКОМАК', 'Финансии: блокада над кредитниот лимит', 'Набавки: листа за нарачка'],
  },
]

/** Add to any plan (brief 04 §2). Example prices. */
export const EXTRA_USER_MONTHLY = 150

export const YEAR_MONTHS = 10

/** 1.000 — the Macedonian number style. */
export const fmtDen = (n: number) => n.toLocaleString('de-DE')

/** The full comparison (brief 04 §2), row by row. */
export const COMPARE: { row: string; in: [boolean | string, boolean | string, boolean | string] }[] = [
  { row: 'Сите документи: фактури, понуди, испратници, книжни, внатрешни', in: [true, true, true] },
  { row: 'е-Фактура во УЈП', in: [true, true, true] },
  { row: 'Залиха и набавна цена (просек или FIFO)', in: [true, true, true] },
  { row: 'Плаќања, долгови, аванси, компензации', in: [true, true, true] },
  { row: 'ДДВ книги и ДДВ-04', in: [true, true, true] },
  { row: 'Промет и добивка', in: [true, true, true] },
  { row: 'Пренос од старата програма', in: [true, true, true] },
  { row: 'Дозволи по вработен', in: [true, true, true] },
  { row: 'Магацини', in: ['1', 'повеќе', 'повеќе'] },
  { row: 'Сериски броеви и серии со рок', in: [false, true, true] },
  { row: 'Анализи: по месеци, нови и изгубени купувачи, бавни производи', in: [false, true, true] },
  { row: 'Повторувачки фактури', in: [false, true, true] },
  { row: 'Спореди', in: [false, true, true] },
  { row: 'Свои полиња и распоред на формите', in: [false, true, true] },
  { row: 'Увоз / Извоз', in: [false, false, true] },
  { row: 'Отпад — ПАКОМАК', in: [false, false, true] },
  { row: 'Финансии: блокада над лимит, потсетници по е-пошта', in: [false, false, true] },
  { row: 'Набавки: листа за нарачка', in: [false, false, true] },
  { row: 'Корисници', in: ['2', '5', '10'] },
]
