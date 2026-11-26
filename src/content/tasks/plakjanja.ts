// Плаќања — the tasks. Flows: scripts/flows/plakjanja.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'izvod',
    icon: 'money',
    title: { mk: 'Внес на извод', en: 'Entering a bank statement' },
    intro: {
      mk: 'Еден извод, по еден ред за партнер. Фактурите се затвораат сами.',
      en: 'One bank statement, one line per partner. Invoices close by themselves.',
    },
    steps: [
      { mk: 'Во „Плаќања“ кликнете „Внеси извод“.', en: 'In "Payments", click "Enter a statement".' },
      { mk: 'Внесете го бројот на изводот.', en: 'Enter the statement number.' },
      { mk: 'Изберете партнер и внесете износ.', en: 'Choose the partner and enter the amount.' },
      { mk: 'Видете кои фактури се затвораат.', en: 'See which invoices it closes.' },
      { mk: 'Кликнете „Зачувај“.', en: 'Click "Save".' },
    ],
    help: ['vnesi-izvod', 'vnesi-plakjanje', 'avans-od-kupuvach'],
  },
]
