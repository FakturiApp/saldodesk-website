// Партнери — more tasks (new partner, credit limit, discounts). Flows: scripts/flows/partneri-2.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'nov-partner',
    icon: 'users',
    title: { mk: 'Нов партнер', en: 'A new partner' },
    intro: {
      mk: 'Купувач или добавувач се внесува еднаш. Потоа се избира на секој документ.',
      en: 'Enter a customer or supplier once, then pick them on every document.',
    },
    steps: [
      { mk: 'Во „Партнери“ кликнете „+ Нов партнер“.', en: 'In "Partners", click "+ New partner".' },
      { mk: 'Во „Име“ напишете го името на фирмата.', en: 'Type the company name in "Name".' },
      { mk: 'Внесете го даночниот број. Со „Пополни од УЈП“ адресата се пополнува сама.', en: 'Enter the tax number. "Fill from UJP" fills in the address by itself.' },
      { mk: 'Тука градот и адресата ги внесуваме рачно.', en: 'Here we type the city and address by hand.' },
      { mk: 'Штиклирајте „Купувач“, „Добавувач“ или двете.', en: 'Tick "Customer", "Supplier" or both.' },
      { mk: 'Кликнете „Зачувај“. Се отвора картичката на партнерот.', en: 'Click "Save". The partner’s card opens.' },
    ],
    help: ['partner-nov', 'partner-duplikati'],
  },
  {
    id: 'kreditni-limit',
    icon: 'shield',
    title: { mk: 'Кредитен лимит', en: 'Credit limit' },
    intro: {
      mk: 'Колку најмногу смее да ви должи купувачот. Новата фактура предупредува кога долгот оди над тоа.',
      en: 'The most a customer may owe you. A new invoice warns you when the debt goes over it.',
    },
    steps: [
      { mk: 'На картичката на купувачот отворете го делот „Финансии“.', en: 'On the customer’s card, open the "Financial" section.' },
      { mk: 'Во „Кредитен лимит“ внесете износ во денари.', en: 'Enter an amount in denars in "Credit limit".' },
      { mk: 'Кликнете „Зачувај“.', en: 'Click "Save".' },
      { mk: 'Кликнете „+ Нов документ“ за нова фактура.', en: 'Click "+ New document" for a new invoice.' },
      { mk: 'Внесете производ и количина.', en: 'Enter a product and the quantity.' },
      { mk: 'Над ставките пишува дека купувачот го надминува лимитот.', en: 'Above the lines, a warning says the customer goes over the limit.' },
    ],
    help: ['partner-kreditni-limit', 'partner-dolg'],
  },
  {
    id: 'popusti',
    icon: 'cart',
    title: { mk: 'Договорен попуст', en: 'Agreed discount' },
    intro: {
      mk: 'Попустот се внесува еднаш, на купувачот. Потоа сам се нуди на секоја нова фактура.',
      en: 'Enter the discount once, on the customer. Every new invoice then offers it by itself.',
    },
    steps: [
      { mk: 'На картичката на купувачот кликнете „Попусти“.', en: 'On the customer’s card, click "Discounts".' },
      { mk: 'Во „Вредност“ внесете колку, на пример 10 %.', en: 'Enter how much in "Value", e.g. 10 %.' },
      { mk: 'Кликнете „Додади правило“.', en: 'Click "Add rule".' },
      { mk: 'Кликнете „+ Нов документ“.', en: 'Click "+ New document".' },
      { mk: 'Внесете производ. „Попуст %“ се пополнува сам.', en: 'Enter a product. "Disc. %" fills in by itself.' },
    ],
    help: ['partner-popust', 'napravi-faktura'],
  },
]
