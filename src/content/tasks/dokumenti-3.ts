// Документи (3) — the tasks. Flows: scripts/flows/dokumenti-3.mjs.
import { STD, type Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'storno',
    icon: 'doc',
    title: { mk: 'Поправка на издадена фактура', en: 'Correcting an issued invoice' },
    intro: {
      mk: 'Целата фактура се поништува со „Поништи“. Само дел од неа — со книжно одобрение.',
      en: '"Cancel" voids the whole invoice. A credit note takes back only part of it.',
    },
    steps: [
      { mk: 'На фактурата кликнете „Нов документ од овој“.', en: 'On the invoice, click "New document from this one".' },
      { mk: 'Под „Исправка на“ кликнете „Книжен (издаден)“.', en: 'Under "Correction of", click "Credit/debit note (issued)".' },
      { mk: 'Кај ставката внесете колку пари помалку, без ДДВ.', en: 'On the line, enter how much less money, excluding VAT.' },
      { mk: 'Напишете ја причината.', en: 'Write the reason.' },
      { mk: 'Кликнете „Издади“. Одобрението е издадено и врзано за фактурата.', en: 'Click "Issue". The credit note is issued and linked to the invoice.' },
    ],
    help: ['storno-ili-ko', 'ponishti-faktura', 'podnesen-ddv-period'],
  },
  {
    id: 'pechatenje',
    icon: 'printer',
    title: { mk: 'Печатење фактура', en: 'Printing an invoice' },
    intro: {
      mk: 'Фактурата на хартија или како PDF, онаква каква што ја гледа купувачот.',
      en: 'The invoice on paper or as a PDF, just as the customer sees it.',
    },
    steps: [
      { mk: 'На фактурата кликнете „Печати“.', en: 'On the invoice, click "Print".' },
      { mk: 'За повеќе примероци сменете го бројот кај „Примероци“.', en: 'For more than one copy, change the number in "Copies".' },
      { mk: 'За купувач што чита англиски, штиклирајте „На англиски“.', en: 'For a customer who reads English, tick "In English".' },
      { mk: 'Со „Печати“ горе десно печатите или зачувувате PDF.', en: 'With "Print" at the top right, you print or save a PDF.' },
    ],
    help: ['pechati-faktura', 'izgled-pechateni'],
  },
  {
    id: 'nema-zaliha',
    icon: 'warehouse',
    title: { mk: 'Нема доволно на залиха', en: 'Not enough stock' },
    intro: {
      mk: 'Фактурата не се издава без стока. Апликацијата покажува каде ја има и што ја заменува.',
      en: 'An invoice is not issued without the goods. The app shows where they are and what can replace them.',
    },
    steps: [
      { mk: 'Внесете производ. Под ставката пишува колку има на залиха.', en: 'Enter a product. Under the line you see how much is in stock.' },
      { mk: 'Внесете количина поголема од залихата.', en: 'Enter a quantity larger than the stock.' },
      { mk: 'Кликнете „Издади“. Се отвора „Нема доволно на залиха“.', en: 'Click "Issue". "Not enough stock" opens.' },
      { mk: 'Со „Донеси од магацин“ барате стока од друг магацин.', en: 'With "Fetch from warehouse" you ask another warehouse for the goods.' },
      { mk: 'Со „Додај во нарачка“ производот оди во листата за нарачка.', en: 'With "Add to order", the product goes on the order list.' },
      { mk: 'Или кликнете „Замени“ за друг производ што го има на залиха.', en: 'Or click "Replace" for another product that is in stock.' },
    ],
    help: ['nema-zaliha', 'barania-od-magacin', 'lista-za-narachka'],
  },
  {
    id: 'povtoruvachki',
    icon: 'history',
    title: { mk: 'Фактура секој месец', en: 'An invoice every month' },
    intro: {
      mk: 'За одржување или претплата. Апликацијата сама ја прави фактурата кога ќе дојде датумот.',
      en: 'For maintenance or a subscription. The app makes the invoice by itself when the date comes.',
    },
    steps: [
      { mk: 'Во „Повторувачки“ кликнете „Нова повторувачка“.', en: 'In "Recurring", click "New recurring".' },
      { mk: 'Изберете го купувачот.', en: 'Choose the customer.' },
      { mk: 'Во „Циклус“ веќе стои „Месечно“. Ако треба, сменете го.', en: '"Cycle" is already set to "Monthly". Change it if you need to.' },
      { mk: 'Во „Следно креирање“ внесете кога да се направи првата фактура.', en: 'In "Next run", enter when to make the first invoice.' },
      { mk: 'Под „Ставки“ изберете производ.', en: 'Under "Lines", choose a product.' },
      { mk: 'Кликнете „Зачувај“.', en: 'Click "Save".' },
    ],
    plan: STD,
    help: ['povtoruvachki-fakturi', 'nacrt-ili-izdadena'],
  },
]
