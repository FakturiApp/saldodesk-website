// Увоз/извоз — the tasks. Flows: scripts/flows/uvoz-izvoz.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'devizna-faktura',
    icon: 'globe',
    title: { mk: 'Девизна фактура', en: 'A foreign supplier invoice' },
    intro: {
      mk: 'Увоз во евра. Со трошоците на увозот добивате вистинска набавна цена.',
      en: 'An import in euros. With the import costs you get the real cost price.',
    },
    steps: [
      { mk: 'Во „Нова девизна фактура“ изберете добавувач и внесете број и датум.', en: 'In "New foreign invoice", choose the supplier and enter the number and date.' },
      { mk: 'Во „Курс (провизорен)“ внесете курс, на пример 61,5.', en: 'In "Rate (provisional)", enter a rate, for example 61.5.' },
      { mk: 'Внесете производ, количина и цена во евра.', en: 'Enter the product, quantity and price in euros.' },
      { mk: 'Кликнете „Издади“. Стоката е на залиха, по провизорниот курс.', en: 'Click "Issue". The goods are in stock, at the provisional rate.' },
      { mk: 'Внесете ги трошоците во денари и кликнете „Зачувај трошоци“.', en: 'Enter the costs in denars and click "Save costs".' },
      { mk: 'Кликнете „Приемница (увоз)“: набавната цена е со трошоците, во денари.', en: 'Click "Import receipt": the cost price includes the costs, in denars.' },
    ],
    help: ['devizna-faktura', 'devizna-troshoci'],
  },
  {
    id: 'izvozna-faktura',
    icon: 'globe',
    title: { mk: 'Извозна фактура', en: 'An export invoice' },
    intro: {
      mk: 'Продажба на странски купувач, во евра и без ДДВ.',
      en: 'A sale to a foreign customer, in euros and without VAT.',
    },
    steps: [
      { mk: 'Во „Нова извозна фактура“ изберете го купувачот. Валутата се пополнува сама.', en: 'In "New export invoice", choose the customer. The currency fills in by itself.' },
      { mk: 'Внесете производ и количина.', en: 'Enter the product and quantity.' },
      { mk: 'Внесете ја цената во евра. ДДВ е 0 %.', en: 'Enter the price in euros. VAT is 0%.' },
      { mk: 'Кликнете „Зачувај нацрт“.', en: 'Click "Save draft".' },
      { mk: 'Кликнете „Издади“ и внесете курс, на пример 61,5.', en: 'Click "Issue" and enter a rate, for example 61.5.' },
      { mk: 'Кликнете „Издади“. Фактурата добива број.', en: 'Click "Issue". The invoice gets its number.' },
    ],
    help: ['izvozna-faktura', 'pechati-faktura'],
  },
]
