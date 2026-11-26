// Документи (2) — the tasks. Flows: scripts/flows/dokumenti-2.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'ponuda-faktura',
    icon: 'doc',
    title: { mk: 'Од понуда до фактура', en: 'From offer to invoice' },
    intro: {
      mk: 'Понудата не ја менува залихата. Кога купувачот ќе се согласи, фактурата е еден клик.',
      en: 'An offer does not touch the stock. When the customer agrees, the invoice is one click away.',
    },
    steps: [
      { mk: 'Во „Продажба“ → „Понуда“ кликнете „+“.', en: 'In "Sales" → "Offer", click "+".' },
      { mk: 'Изберете го купувачот.', en: 'Choose the customer.' },
      { mk: 'Внесете производ и количина.', en: 'Enter a product and the quantity.' },
      { mk: 'Кликнете „Издади“. Понудата добива број.', en: 'Click "Issue". The offer gets its number.' },
      { mk: 'Кога купувачот ќе се согласи, кликнете „Направи фактура“.', en: 'When the customer agrees, click "Make invoice".' },
      { mk: 'Фактурата е издадена, со истите ставки и цени.', en: 'The invoice is issued, with the same lines and prices.' },
    ],
    help: ['ponuda-vo-faktura', 'napravi-faktura'],
  },
  {
    id: 'ispratnica-faktura',
    icon: 'doc',
    title: { mk: 'Фактура од испратница', en: 'Invoice from a dispatch note' },
    intro: {
      mk: 'Стоката заминала со испратница. Фактурата ја правите од неа, без втор излез од залиха.',
      en: 'The goods left with a dispatch note. You invoice from it, and stock does not go out twice.',
    },
    steps: [
      { mk: 'Во „Продажба“ → „Испратница“ отворете ја испратницата.', en: 'In "Sales" → "Dispatch note", open the dispatch note.' },
      { mk: 'Кликнете „Направи фактура“. Фактурата се издава веднаш.', en: 'Click "Make invoice". The invoice is issued right away.' },
      { mk: 'Датумот на промет се зема од испратницата.', en: 'The date of supply is taken from the dispatch note.' },
      { mk: 'Испратницата е врзана за фактурата и повеќе не се менува.', en: 'The dispatch note is now tied to the invoice and can no longer be edited.' },
    ],
    help: ['faktura-od-ispratnica', 'ispratnica'],
  },
  {
    id: 'priemnica',
    icon: 'warehouse',
    title: { mk: 'Приемница од добавувач', en: 'Receiving goods' },
    intro: {
      mk: 'Стоката стигна: со приемница влегува на залиха и веднаш може да се продава.',
      en: 'The goods arrived: a goods receipt puts them in stock, ready to sell.',
    },
    steps: [
      { mk: 'Во „Набавка“ → „Приемница“ кликнете „+“.', en: 'In "Purchasing" → "Goods receipt", click "+".' },
      { mk: 'Изберете го добавувачот.', en: 'Choose the supplier.' },
      { mk: 'Изберете производ и внесете колку парчиња стигнале.', en: 'Choose the product and enter how many arrived.' },
      { mk: 'Во „Набавна“ внесете ја цената без ДДВ.', en: 'Under "Cost", enter the price without VAT.' },
      { mk: 'Кликнете „Издади“. Приемницата добива број.', en: 'Click "Issue". The goods receipt gets its number.' },
      { mk: 'Отворете ги деталите на производот: залихата веќе е поголема.', en: 'Open the product details: the stock has already gone up.' },
    ],
    help: ['vnesi-priemnica', 'faktura-od-dobavuvach', 'nabavna-nepoznata'],
  },
]
