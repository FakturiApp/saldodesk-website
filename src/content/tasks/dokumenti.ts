// Документи — the tasks. Flows: scripts/flows/dokumenti.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'faktura',
    icon: 'doc',
    title: { mk: 'Издавање фактура', en: 'Issuing an invoice' },
    intro: {
      mk: 'Фактура за една минута. Залихата и долгот на купувачот се менуваат сами.',
      en: 'An invoice in a minute. Stock and the customer’s debt update by themselves.',
    },
    steps: [
      { mk: 'На „Почетна“ кликнете „Нова фактура“.', en: 'On "Home", click "New invoice".' },
      { mk: 'Изберете го купувачот.', en: 'Choose the customer.' },
      { mk: 'Внесете производ. Цената и залихата се појавуваат сами.', en: 'Enter a product. The price and stock appear by themselves.' },
      { mk: 'Внесете ја количината.', en: 'Enter the quantity.' },
      { mk: 'Кликнете „Издади“. Фактурата добива број.', en: 'Click "Issue". The invoice gets its number.' },
    ],
    help: ['napravi-faktura', 'nacrt-ili-izdadena', 'pechati-faktura'],
  },
]
