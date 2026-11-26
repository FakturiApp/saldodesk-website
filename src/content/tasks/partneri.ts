// Партнери — the tasks. Flows: scripts/flows/partneri.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'dolgovi',
    icon: 'users',
    title: { mk: 'Кој колку ви должи', en: 'Who owes you what' },
    intro: {
      mk: 'Долгот на секој партнер, што не е платено и картица со салдо по секој ред.',
      en: 'Each partner’s debt, what is unpaid, and an account card with the balance on every line.',
    },
    steps: [
      { mk: 'Во „Партнери“ отворете го партнерот.', en: 'In "Partners", open the partner.' },
      { mk: 'Горе стојат долгот и рокот за плаќање.', en: 'The debt and the payment terms are at the top.' },
      { mk: '„Отворени ставки“: што не е платено и колку доцни.', en: '"Open items": what is unpaid and how late it is.' },
      { mk: '„Финансиска картица“: сите документи и плаќања, со салдо.', en: '"Account card": every document and payment, with the balance.' },
      { mk: 'Печатете ја или извезете ја во Excel.', en: 'Print it or export it to Excel.' },
    ],
    help: ['partner-kartichka', 'partner-dolg', 'koj-mi-dolzhi'],
  },
]
