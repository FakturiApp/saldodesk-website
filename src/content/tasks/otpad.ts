// Отпад — the tasks. Flows: scripts/flows/otpad.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'vidovi-pakuvanje',
    icon: 'leaf',
    title: { mk: 'Вид на пакување', en: 'A package type' },
    intro: {
      mk: 'Колку тежи амбалажата на едно парче, по материјал. Производите со иста амбалажа делат еден вид.',
      en: 'How much one piece’s packaging weighs, by material. Products packed the same share one type.',
    },
    steps: [
      { mk: 'Во „Отпад“ кликнете „Видови пакување“.', en: 'In "Waste", click "Package types".' },
      { mk: 'Кликнете „+ Нов вид“.', en: 'Click "+ New type".' },
      { mk: 'Во „Вид“ напишете име, на пример „Кутија за скенер“.', en: 'In "Type", write a name, for example "Scanner box".' },
      { mk: 'Кликнете „+ Компонента“ и опишете го делот од амбалажата.', en: 'Click "+ Component" and describe the part of the packaging.' },
      { mk: 'Изберете материјал и внесете тежина. „Кг по парче“ се пресметува.', en: 'Choose the material and enter the weight. "Kg per piece" is worked out.' },
      { mk: 'Кликнете „Зачувај“.', en: 'Click "Save".' },
    ],
    help: ['otpad-vidovi-pakuvanje', 'otpad-vid-na-proizvod'],
  },
  {
    id: 'otpad-izveshtaj',
    icon: 'leaf',
    title: { mk: 'Месечна пријава на амбалажа', en: 'Monthly packaging report' },
    intro: {
      mk: 'Седумте броја што ги бара колективниот оператор, пресметани од девизните фактури.',
      en: 'The seven numbers the packaging scheme asks for, worked out from your import invoices.',
    },
    steps: [
      { mk: 'Горе кликнете „Отпад“. Се отвора „Месечен извештај“.', en: 'At the top, click "Waste". The "Monthly report" opens.' },
      { mk: 'Изберете го месецот. Однапред е избран минатиот.', en: 'Choose the month. The past month is already chosen.' },
      { mk: 'Горе се килограмите амбалажа, по материјал.', en: 'At the top are the kilograms of packaging, by material.' },
      { mk: 'Кликнете „Копирај“ и залепете го бројот во формуларот на операторот.', en: 'Click "Copy" and paste the number into the scheme’s form.' },
      { mk: 'Кликнете на предупредување: се отвора местото каде се поправа.', en: 'Click a warning: it opens the place where you fix it.' },
    ],
    help: ['otpad-mesechen-izveshtaj', 'otpad-amballaza-na-devizna', 'otpad-paleti'],
  },
]
