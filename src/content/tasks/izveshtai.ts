// Извештаи — the tasks. Flows: scripts/flows/izveshtai.mjs.
import { STD, type Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'ddv-04',
    icon: 'doc',
    title: { mk: 'ДДВ книги и ДДВ-04', en: 'VAT books and VAT-04' },
    intro: {
      mk: 'Апликацијата ги води излезната и влезната книга и од нив го пополнува ДДВ-04.',
      en: 'The app keeps the sales and purchase VAT books and fills in VAT-04 from them.',
    },
    steps: [
      { mk: 'Во „Извештаи“ кликнете „ДДВ“. Се отвора излезната книга.', en: 'In "Reports", click "VAT". The sales VAT book opens.' },
      { mk: 'Со стрелките ‹ и › одите на претходниот и следниот период.', en: 'The ‹ and › arrows go to the previous and the next period.' },
      { mk: 'Кликнете „Влезна книга“ за набавките.', en: 'Click "Purchase VAT book" for your purchases.' },
      { mk: 'Кликнете „ДДВ-04“. Сивите полиња се пополнети од книгите.', en: 'Click "VAT-04". The gray boxes are filled in from the books.' },
      { mk: 'Кликнете „Печати“. Се отвора образецот за печатење.', en: 'Click "Print". The form opens, ready to print.' },
    ],
    help: ['ddv-04', 'izlezna-kniga', 'vlezna-kniga'],
  },
  {
    id: 'podnesena',
    icon: 'lock',
    title: { mk: 'Поднесен ДДВ период', en: 'A filed VAT period' },
    intro: {
      mk: 'Откако ќе поднесете во УЈП, означете го периодот. Неговите книги повеќе не се менуваат.',
      en: 'Once you have filed with UJP, mark the period. Its books no longer change.',
    },
    steps: [
      { mk: 'Во „Извештаи“ → „ДДВ“ кликнете „ДДВ-04“.', en: 'In "Reports" → "VAT", click "VAT-04".' },
      { mk: 'Со стрелката ‹ одете на периодот што го поднесовте.', en: 'Use the ‹ arrow to go to the period you filed.' },
      { mk: 'Кликнете „Означи поднесена“.', en: 'Click "Mark as filed".' },
      { mk: 'Потврдете со „Означи поднесена“. Периодот е заклучен.', en: 'Confirm with "Mark as filed". The period is locked.' },
      { mk: 'Ако сте згрешиле: „Врати поднесување“, со причина.', en: 'If it was a mistake: "Take the filing back", with a reason.' },
    ],
    help: ['oznachi-podnesena', 'podnesen-ddv-period', 'ddv-04'],
  },
  {
    id: 'promet',
    icon: 'money',
    title: { mk: 'Промет и добивка', en: 'Sales and profit' },
    intro: {
      mk: 'Колку сте продале и заработиле во кој било период, по ден, месец или година.',
      en: 'How much you sold and earned in any period, by day, month or year.',
    },
    steps: [
      { mk: 'Во „Извештаи“ кликнете „Сопствен период“.', en: 'In "Reports", click "Custom period".' },
      { mk: 'Внесете „Од“ и „До“, па кликнете „Прикажи“.', en: 'Enter "From" and "To", then click "Show".' },
      { mk: 'Горе се прометот, добивката и маржата за тој период.', en: 'At the top: turnover, profit and margin for that period.' },
      { mk: 'Кликнете „По месец“. Табелата се дели по месеци.', en: 'Click "By month". The table splits by month.' },
      { mk: 'Кликнете „Извези во Excel“ за истата табела.', en: 'Click "Export to Excel" for the same table.' },
    ],
    help: ['izveshtaj-po-period', 'sporedba-na-periodi'],
  },
  {
    id: 'kupuvachi-proizvodi',
    icon: 'users',
    title: { mk: 'Купувачи и производи', en: 'Customers and products' },
    intro: {
      mk: 'Кој купува најмногу, кого сте го изгубиле и кои производи се продаваат.',
      en: 'Who buys the most, which customers you lost, and which products sell.',
    },
    steps: [
      { mk: 'Во „Извештаи“ кликнете „Купувачи“.', en: 'In "Reports", click "Customers".' },
      { mk: 'Најгоре е најголемиот купувач. Клик на името ја отвора картичката.', en: 'The biggest customer is at the top. Click a name to open the card.' },
      { mk: 'Кликнете „Изгубени“: купувале претходно, а сега не.', en: 'Click "Lost": they bought before, but not now.' },
      { mk: 'Кликнете „Производи“ за најпродаваните производи.', en: 'Click "Products" for the best-selling products.' },
      { mk: 'Кликнете „Категорија“ за збир по категорија.', en: 'Click "Category" for totals by category.' },
      { mk: 'Кликнете „Извези во Excel“ за истата листа.', en: 'Click "Export to Excel" for the same list.' },
    ],
    plan: { mk: 'Извештајот „Купувачи“: во планот Стандард и Про', en: 'The Customers report: Standard and Pro plans' },
    help: ['izveshtaj-kupuvachi', 'izveshtaj-proizvodi'],
  },
  {
    id: 'sporedba',
    icon: 'arrow',
    title: { mk: 'Споредба на два периода', en: 'Comparing two periods' },
    intro: {
      mk: 'Два периода еден до друг: што пораснало, што паднало и кај кого.',
      en: 'Two periods side by side: what went up, what went down, and with whom.',
    },
    steps: [
      { mk: 'Во „Извештаи“ кликнете „Споредба“.', en: 'In "Reports", click "Comparison".' },
      { mk: 'Кликнете „Сопствено“ за свои датуми.', en: 'Click "Custom" to set your own dates.' },
      { mk: 'Внесете ги периодите А и Б, па кликнете „Прикажи“.', en: 'Enter periods A and B, then click "Show".' },
      { mk: 'Во „Промена“ е разликата во проценти.', en: '"Change" shows the difference in percent.' },
      { mk: 'Долу се купувачите и производите што најмногу пораснале и паднале.', en: 'Below are the customers and products that grew and fell the most.' },
      { mk: 'Кликнете „Извези во Excel“ за истата споредба.', en: 'Click "Export to Excel" for the same comparison.' },
    ],
    plan: STD,
    help: ['sporedba-na-periodi', 'izveshtaj-po-period'],
  },
]
