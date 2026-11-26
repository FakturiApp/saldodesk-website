// Веб-продавница — the tasks. Flows: scripts/flows/veb-prodavnica.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'veb-povrzuvanje',
    icon: 'store',
    title: { mk: 'Поврзување со продавницата', en: 'Connecting your store' },
    intro: {
      mk: 'Адресата и двата клуча од WooCommerce. На WordPress не се инсталира ништо.',
      en: 'The address and the two keys from WooCommerce. Nothing is installed on WordPress.',
    },
    steps: [
      { mk: 'Горе десно кликнете на вашето име, па „Подесувања“.', en: 'At the top right, click your name, then "Settings".' },
      { mk: 'Кликнете „Веб-страница“.', en: 'Click "Webpage".' },
      { mk: 'Во „Адреса на продавницата“ внесете ја адресата, со https://.', en: 'In "Store address", enter the address, with https://.' },
      { mk: 'Залепете ги двата клуча од WooCommerce: consumer key и consumer secret.', en: 'Paste the two WooCommerce keys: the consumer key and consumer secret.' },
      { mk: 'Во „Магацини за веб-залиха“ оставете „Сите магацини“ или изберете магацини.', en: 'In "Warehouses for web stock", keep "All warehouses" or pick some.' },
      { mk: '„Зачувај“ ја проверува врската. „Тестирај врска“ проверува повторно.', en: '"Save" checks the connection. "Test connection" checks it again.' },
    ],
    help: ['veb-povrzuvanje', 'veb-ne-se-obnovil'],
  },
  {
    id: 'prikazhi-na-veb',
    icon: 'store',
    title: { mk: 'Производ на веб', en: 'A product online' },
    intro: {
      mk: 'Само производ со „Прикажи на веб“ оди во продавницата. Од веб апликацијата не чита ништо.',
      en: 'Only a product with "Show on web" goes to the store. The app reads nothing back from the web.',
    },
    steps: [
      { mk: 'На картичката на производот штиклирајте „Прикажи на веб“.', en: 'On the product card, tick "Show on web".' },
      { mk: 'Кликнете „Зачувај“. Промената стига на веб сама, за помалку од една минута.', en: 'Click "Save". The change reaches the web by itself, in under a minute.' },
      { mk: 'На веб одат името и шифрата.', en: 'The name and the code go to the web.' },
      { mk: 'Цената на веб е „Продажна цена“ со ДДВ.', en: 'The web price is the "Selling price" with VAT.' },
      { mk: 'Одат и категоријата и брендот.', en: 'The category and the brand go too.' },
      { mk: 'Залихата што се праќа е слободната залиха во избраните магацини.', en: 'The stock sent is the free stock in the chosen warehouses.' },
    ],
    help: ['veb-shto-se-prakja', 'veb-povrzuvanje'],
  },
]
