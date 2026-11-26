// Изнајмување — the tasks. Flows: scripts/flows/iznajmuvanje.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'iznajmuvanje-novo',
    icon: 'printer',
    title: { mk: 'Ново изнајмување', en: 'A new rental' },
    intro: {
      mk: 'Машината излегува од залиха и договорот со клиентот се прави заедно со неа.',
      en: 'The machine leaves stock and the contract with the client is made along with it.',
    },
    steps: [
      { mk: 'Во „Изнајмување“ кликнете „Ново изнајмување“.', en: 'In "Rentals", click "New rental".' },
      { mk: 'Изберете го моделот, па серискиот број на машината.', en: 'Choose the model, then the machine’s serial number.' },
      { mk: 'Во „Партнер“ изберете го клиентот.', en: 'In "Partner", choose the client.' },
      { mk: 'Штиклирајте „Се наплаќа“ и внесете ја месечната кирија.', en: 'Tick "Charged" and enter the monthly rent.' },
      { mk: 'Внесете ги броилата денес, колку копии се вклучени и цената за копиите над нив.', en: 'Enter today’s counters, how many copies are included and the price per extra copy.' },
      { mk: 'Кликнете „Зачувај“. Договорот добива број ИЗН-….', en: 'Click "Save". The contract gets its number.' },
    ],
    help: ['iznajmuvanje-nova-mashina', 'iznajmuvanje-naplata'],
  },
  {
    id: 'otchituvanja',
    icon: 'printer',
    title: { mk: 'Отчитување на броилата', en: 'Meter readings' },
    intro: {
      mk: 'Секој месец внесете што покажуваат броилата. Од нив се пресметуваат копиите.',
      en: 'Each month, enter what the counters show. The copies are counted from them.',
    },
    steps: [
      { mk: 'Во „Изнајмување“ кликнете „Отчитувања“.', en: 'In "Rentals", click "Readings".' },
      { mk: 'Проверете го „Датум на читање“. Важи за сите редови.', en: 'Check the "Reading date". It applies to every row.' },
      { mk: 'Најдете ја машината по сериски број.', en: 'Find the machine by its serial number.' },
      { mk: 'Внесете го броилото Ц/Б. Се гледа разликата од претходното читање.', en: 'Enter the B/W counter. The difference from the last reading shows.' },
      { mk: 'Кликнете „Зачувај читања“. Горе пишува колку се зачувани.', en: 'Click "Save readings". The top shows how many were saved.' },
    ],
    help: ['iznajmuvanje-otchituvanja', 'iznajmuvanje-popravi-otchituvanje'],
  },
  {
    id: 'iznajmuvanje-fakturi',
    icon: 'printer',
    title: { mk: 'Месечно фактурирање', en: 'Monthly billing' },
    intro: {
      mk: 'Сите изнајмувања се фактурираат одеднаш, за минатиот месец.',
      en: 'All rentals are billed at once, for the past month.',
    },
    steps: [
      { mk: 'Во „Изнајмување“ кликнете „Фактурирање“.', en: 'In "Rentals", click "Billing".' },
      { mk: 'Изберете го месецот. Однапред е избран минатиот.', en: 'Choose the month. The past month is already chosen.' },
      { mk: 'Во „Режим“ кликнете „Нацрт“: фактурите се прават за проверка.', en: 'In "Mode", click "Draft": the invoices are made for checking.' },
      { mk: 'Кликнете „Пресметај“. Апликацијата пишува што ќе направи.', en: 'Click "Calculate". The app says what it will do.' },
      { mk: 'Потврдете. Пресметан месец не се фактурира двапати.', en: 'Confirm. A month already billed is never billed twice.' },
      { mk: 'Во колоната „Фактура“ е фактурата на секој договор.', en: 'The "Invoice" column holds each contract’s invoice.' },
    ],
    help: ['iznajmuvanje-fakturiranje', 'iznajmuvanje-otchituvanja', 'iznajmuvanje-naplata'],
  },
]
