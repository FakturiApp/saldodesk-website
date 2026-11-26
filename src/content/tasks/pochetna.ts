// Почетна — the tasks. Flows: scripts/flows/pochetna.mjs.
import type { Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'pochetni-chekori',
    icon: 'check',
    title: { mk: 'Почетни чекори', en: 'Getting started' },
    intro: {
      mk: 'Листа на Почетна што покажува што уште треба да се подготви пред работа.',
      en: 'A list on Home that shows what is still left to set up.',
    },
    steps: [
      { mk: 'На „Почетна“, над плочките, стои листата „Почетни чекори“.', en: 'On "Home", above the tiles, is the "Getting started" list.' },
      { mk: 'Готовите чекори сами добиваат ✓. Не штиклирате ништо.', en: 'Finished steps get a ✓ by themselves. Nothing to tick.' },
      { mk: 'Чекор што не ви треба се прескокнува со „Прескокни“.', en: 'A step you don’t need is skipped with "Skip".' },
      { mk: 'До секој чекор стои „Отвори“, што води на вистинското место.', en: 'Each step has "Open", which takes you to the right place.' },
      { mk: 'Кликнете „Отвори“. Тука се внесуваат адресата и ЕДБ.', en: 'Click "Open". This is where the address and tax number go.' },
    ],
    help: ['pochetni-chekori', 'podatoci-za-firmata'],
  },
  {
    id: 'prebaruvanje',
    icon: 'arrow',
    title: { mk: 'Пребарување на сè', en: 'Search everything' },
    intro: {
      mk: 'Едно поле горе ги наоѓа партнерите, производите и документите, од секоја страница.',
      en: 'One box at the top finds partners, products and documents, from any page.',
    },
    steps: [
      { mk: 'Кликнете во „Пребарај…“ горе или притиснете Ctrl K.', en: 'Click "Search…" at the top or press Ctrl K.' },
      { mk: 'Напишете дел од име, број или град. Може и на латиница.', en: 'Type part of a name, number or city. Latin letters work too.' },
      { mk: 'Резултатите се појавуваат веднаш, по групи.', en: 'Results show up right away, in groups.' },
      { mk: 'Кликнете на резултатот и тој се отвора.', en: 'Click a result to open it.' },
    ],
    help: ['prebaruvanje', 'najdi-dokument'],
  },
  {
    id: 'plochki',
    icon: 'pin',
    title: { mk: 'Средување на Почетна', en: 'Arranging Home' },
    intro: {
      mk: 'Секој си ги избира плочките на својата Почетна. Почетна на другите не се менува.',
      en: 'Everyone picks the tiles on their own Home. Nobody else’s Home changes.',
    },
    steps: [
      { mk: 'На „Почетна“ кликнете „+ Додади“.', en: 'On "Home", click "+ Add".' },
      { mk: 'Кликнете „Додади“ до плочката што ви треба, на пример „Обврски“.', en: 'Click "Add" next to the tile you need, e.g. "Payables".' },
      { mk: 'Кликнете ⚙ горе десно на плочката.', en: 'Click ⚙ at the top right of the tile.' },
      { mk: 'Изберете боја. Плочката веднаш се бои.', en: 'Pick a color. The tile changes right away.' },
      { mk: 'Кликнете „Готово“.', en: 'Click "Done".' },
      { mk: 'Плочка што не ви треба ја тргате со ⚙ → „Отстрани“.', en: 'Take off a tile you don’t need with ⚙ → "Remove".' },
    ],
    help: ['pochetna-plochki'],
  },
]
