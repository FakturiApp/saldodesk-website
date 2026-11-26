// Сервис — the tasks. Flows: scripts/flows/servis.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'servis-priem',
    icon: 'wrench',
    title: { mk: 'Прием на уред', en: 'Taking in a device' },
    intro: {
      mk: 'Клиентот донесува уред. Налогот сам добива број и законски рок.',
      en: 'A client brings in a device. The ticket gets its number and legal deadline by itself.',
    },
    steps: [
      { mk: 'Во „Сервис“ кликнете „+ Нов прием“.', en: 'In "Service", click "+ New intake".' },
      { mk: 'Во „Клиент“ напишете дел од името и изберете го клиентот.', en: 'In "Client", type part of the name and choose the client.' },
      { mk: 'Под „Машини на клиентот“ кликнете на уредот што го донел.', en: 'Under "Client’s machines", click the device they brought.' },
      { mk: 'Во „Опис на дефектот“ напишете што не работи.', en: 'In "Reported problem", write what is wrong.' },
      { mk: 'Кликнете „Прими“. Се отвора налогот, со статус „Примено“.', en: 'Click "Create intake". The ticket opens with the status "Received".' },
    ],
    help: ['servis-priem', 'servis-pechatenje'],
  },
  {
    id: 'servis-tabla',
    icon: 'wrench',
    title: { mk: 'Таблата Работилница', en: 'The Workshop board' },
    intro: {
      mk: 'Секоја колона е еден статус. Налогот се поместува со едно копче.',
      en: 'Each column is one status. A ticket moves on with one button.',
    },
    steps: [
      { mk: 'Кликнете „Сервис“. Налозите стојат во колони, по статус.', en: 'Click "Service". The tickets sit in columns, by status.' },
      { mk: 'Кликнете на картичката за да го отворите налогот.', en: 'Click a card to open the ticket.' },
      { mk: 'Кликнете „Дијагностика“ кога ќе почнете да го барате дефектот.', en: 'Click "Diagnosing" when you start looking for the fault.' },
      { mk: 'Кликнете „Во поправка“ кога се работи на уредот.', en: 'Click "In repair" while you work on the device.' },
      { mk: 'Кликнете „Подготвено“ кога уредот е готов.', en: 'Click "Ready" when the device is done.' },
      { mk: 'На таблата налогот е веќе во колоната „Подготвено“.', en: 'On the board, the ticket is now in the "Ready" column.' },
    ],
    help: ['servis-tabla', 'servis-nalog'],
  },
  {
    id: 'servis-naplata',
    icon: 'wrench',
    title: { mk: 'Наплата и затворање', en: 'Billing and closing' },
    intro: {
      mk: 'Клиентот го подига уредот. Ставките што се наплаќаат одат на фактура.',
      en: 'The client picks up the device. The charged lines go on an invoice.',
    },
    steps: [
      { mk: 'На подготвениот налог кликнете „Затвори…“.', en: 'On the ready ticket, click "Close…".' },
      { mk: 'Напишете кој ја презема машината.', en: 'Write who is picking up the machine.' },
      { mk: 'Кликнете „Потврди“. Под „Документи“ е фактурата, како нацрт.', en: 'Click "Confirm". The invoice is under "Documents", as a draft.' },
      { mk: 'Под „Документи“ кликнете на новата фактура.', en: 'Under "Documents", click the new invoice.' },
      { mk: 'Кликнете „Издади“. Фактурата добива број.', en: 'Click "Issue". The invoice gets its number.' },
    ],
    help: ['servis-naplata', 'servis-nalog'],
  },
]
