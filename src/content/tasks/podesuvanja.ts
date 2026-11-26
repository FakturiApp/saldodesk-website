// Подесувања — the tasks. Flows: scripts/flows/podesuvanja.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'vchitaj-excel',
    icon: 'doc',
    title: { mk: 'Вчитување од Excel', en: 'Importing from Excel' },
    intro: {
      mk: 'Партнерите и производите од старата програма се вчитуваат од Excel, не се пишуваат еден по еден.',
      en: 'Load partners and products from your old software in Excel instead of typing them one by one.',
    },
    steps: [
      { mk: 'Во „Подесувања“ кликнете „Вчитај податоци“.', en: 'In "Settings", click "Import data".' },
      { mk: 'Во „Што внесувам“ изберете „Партнери“ или „Производи“.', en: 'In "What to import", choose "Partners" or "Products".' },
      { mk: 'Немате датотека? „Преземи шаблон“ дава Excel со сите полиња.', en: 'No file yet? "Download template" gives an Excel file with every field.' },
      { mk: 'Кај „Датотека“ изберете ја Excel датотеката. Колоните се препознаваат сами.', en: 'Under "File", choose your Excel file. The columns are matched by themselves.' },
      { mk: 'Кликнете „Прегледај“. Ништо не се запишува додека не кликнете „Вчитај“.', en: 'Click "Preview". Nothing is saved until you click "Import".' },
    ],
    help: ['vchitaj-podatoci', 'pochetna-sostojba'],
  },
  {
    id: 'nova-smetka',
    icon: 'lock',
    title: { mk: 'Сметка за вработен', en: 'An employee account' },
    intro: {
      mk: 'Секој што работи во програмата има своја сметка и прави само она што ќе му го дозволите.',
      en: 'Everyone who works in the app has their own account and can do only what you allow.',
    },
    steps: [
      { mk: 'Во „Подесувања“ кликнете „Сметки“.', en: 'In "Settings", click "Accounts".' },
      { mk: 'Внесете корисничко име, па име и презиме.', en: 'Enter a username, then the full name.' },
      { mk: 'Во „Улога (шаблон)“ изберете, на пример, Сметководител.', en: 'In "Role (template)", choose a role, e.g. the accountant’s.' },
      { mk: 'Кликнете „Прикажи ги сите дозволи“.', en: 'Click "Show every permission".' },
      { mk: 'Отштиклирајте што не треба, на пример „Набавни цени и маржи“.', en: 'Untick what they don’t need, e.g. "Costs & margins".' },
      { mk: 'Кликнете „Додади сметка“. Горе стојат корисничкото име и привремената лозинка.', en: 'Click "Add account". The username and temporary password show at the top.' },
    ],
    help: ['nova-smetka', 'prava-na-smetka'],
  },
  {
    id: 'izgled-pechatenje',
    icon: 'printer',
    title: { mk: 'Изглед при печатење', en: 'Print layout' },
    intro: {
      mk: 'Како изгледаат фактурата и другите документи на хартија, наместено еднаш за сите.',
      en: 'How invoices and other documents look on paper, set once for all of them.',
    },
    steps: [
      { mk: 'Во „Подесувања“ кликнете „Печатење“.', en: 'In "Settings", click "Printing".' },
      { mk: 'Кај „Документ“ оставете „Заеднички изглед“. Сите документи го следат.', en: 'Leave "Document" on "Shared look". Every document follows it.' },
      { mk: 'Отштиклирајте што не сакате на листот, на пример ЕМБС.', en: 'Untick what you don’t want on the page, e.g. the registration number.' },
      { mk: 'Во „Порака на дното“ напишете текст за дното на листот.', en: 'Type a line for the bottom of the page in "Footer note".' },
      { mk: 'Изберете големина на буквите. Прегледот десно се менува со неа.', en: 'Pick the font size. The preview on the right follows it.' },
      { mk: '„Зачувај“ го зачувува изгледот за сите документи.', en: '"Save" keeps the layout for every document.' },
    ],
    help: ['izgled-pechateni', 'pechati-faktura'],
  },
]
