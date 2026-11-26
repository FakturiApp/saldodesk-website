// Плаќања — more tasks (payment on an invoice, advance, offsetting). Flows: scripts/flows/plakjanja-2.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'plakjanje-faktura',
    icon: 'money',
    title: { mk: 'Плаќање на фактура', en: 'Payment on an invoice' },
    intro: {
      mk: 'Кога купувачот ќе плати, плаќањето го внесувате на неговата фактура.',
      en: 'When a customer pays, you record the payment on their invoice.',
    },
    steps: [
      { mk: 'Под фактурата, во „Плаќања“, кликнете „Внеси плаќање“.', en: 'Below the invoice, under "Payments", click "Record a payment".' },
      { mk: 'Во „Износ“ стои долгот. Сменете го ако е платено помалку.', en: '"Amount" shows what is owed. Change it if less was paid.' },
      { mk: 'Изберете „Начин на плаќање“, на пример преку банка.', en: 'Choose the "Method", e.g. bank transfer.' },
      { mk: 'Во „Затвора“ видете кој документ го плаќаат парите.', en: 'Under "Closes", see which document the money pays.' },
      { mk: 'Кликнете „Зачувај“.', en: 'Click "Save".' },
      { mk: 'До „Плаќања“ пишува „Делумно“ и колку останува.', en: 'Next to "Payments" it says "Partly paid" and what is left.' },
    ],
    help: ['vnesi-plakjanje', 'premesti-plakjanje'],
  },
  {
    id: 'avans',
    icon: 'history',
    title: { mk: 'Аванс на фактура', en: 'Using an advance' },
    intro: {
      mk: 'Купувачот платил однапред. Тие пари се аванс и ги ставате на фактурата.',
      en: 'The customer paid in advance. That money is an advance, and you put it on the invoice.',
    },
    steps: [
      { mk: 'Во „Плаќања“, колоната „Нераспределено“ покажува колку е аванс.', en: 'In "Payments", the "Unallocated" column shows how much is an advance.' },
      { mk: 'Кликнете на купувачот, па „Отвори“.', en: 'Click the customer, then "Open".' },
      { mk: 'Кликнете „+ Нов документ“.', en: 'Click "+ New document".' },
      { mk: 'Внесете производ.', en: 'Enter a product.' },
      { mk: 'Кликнете „Издади“. Под фактурата пишува „Партнерот има аванс“.', en: 'Click "Issue". Below the invoice it says the partner holds an advance.' },
      { mk: 'Кликнете „Искористи“. Авансот ја плаќа фактурата.', en: 'Click "Use it". The advance pays the invoice.' },
    ],
    help: ['avans-od-kupuvach', 'iskoristi-avans'],
  },
  {
    id: 'kompenzacija',
    icon: 'arrow',
    title: { mk: 'Компензација', en: 'Offsetting debts' },
    intro: {
      mk: 'Партнерот ви е и купувач и добавувач. Долговите се затвораат еден со друг, без пари.',
      en: 'The partner is both customer and supplier. The debts cancel each other out, with no money paid.',
    },
    steps: [
      { mk: 'Во „Документи“ → „Книжни одобренија“ → „Компензација“, кликнете „+“.', en: 'In "Documents" → "Credit notes" → "Offset", click "+".' },
      { mk: 'Изберете го партнерот.', en: 'Choose the partner.' },
      { mk: 'Во „Тие ни должат“ штиклирајте ги вашите фактури.', en: 'Under "They owe us", tick your invoices.' },
      { mk: 'Во „Ние им должиме“ штиклирајте ги неговите фактури.', en: 'Under "We owe them", tick their invoices.' },
      { mk: '„Се компензира“ е помалиот од двата збира.', en: '"Offset" is the smaller of the two totals.' },
      { mk: 'Кликнете „Зачувај“. Фактурите се затвораат до тој износ.', en: 'Click "Save". The invoices close up to that amount.' },
    ],
    help: ['kompenzacija', 'partner-dolg'],
  },
]
