// Производи и залиха — the tasks. Flows: scripts/flows/proizvodi.mjs.
import { STD, PRO, type Task } from './types'

export const TASKS: Task[] = [
  {
    id: 'nov-proizvod',
    icon: 'warehouse',
    title: { mk: 'Нов производ', en: 'Adding a product' },
    intro: {
      mk: 'Задолжителни се само називот и шифрата. Сè друго може да се дополни подоцна.',
      en: 'Only the name and the code are required. Everything else can be added later.',
    },
    steps: [
      { mk: 'Во „Производи“ кликнете „+ Нов производ“.', en: 'In "Products", click "+ New product".' },
      { mk: 'Во „Назив“ напишете го името на производот.', en: 'Type the product’s name in "Name".' },
      { mk: 'Во „Шифра“ притиснете → и се пополнува следната слободна шифра.', en: 'In "Code", press → to fill in the next free code.' },
      { mk: 'Внесете „Продажна цена“. Цената со ДДВ се пресметува сама.', en: 'Enter the "Selling price". The price incl. VAT fills in by itself.' },
      { mk: 'Кликнете „Зачувај“. Се отвора картичката на производот.', en: 'Click "Save". The product’s card opens.' },
    ],
    help: ['nov-proizvod', 'ceni-na-proizvod'],
  },
  {
    id: 'niska-zaliha',
    icon: 'cart',
    title: { mk: 'Ниска залиха и нарачка', en: 'Low stock and reordering' },
    intro: {
      mk: 'Поставете минимум, а апликацијата сама собира што е при крај и што треба да се нарача.',
      en: 'Set a minimum, and the app gathers what is running low and what to order.',
    },
    steps: [
      { mk: 'На производот, во „Набавка“, внесете „Минимална залиха“.', en: 'On the product, under "Purchasing", enter the "Minimum stock".' },
      { mk: 'Кликнете „Зачувај“.', en: 'Click "Save".' },
      { mk: 'Во „Производи“ кликнете „Ниска залиха“.', en: 'In "Products", click "Low stock".' },
      { mk: 'Покрај производот пишува колку фали до минимумот.', en: 'Next to the product you see how much is missing to reach the minimum.' },
      { mk: 'Кликнете „Додај во нарачка“.', en: 'Click "Add to order".' },
      { mk: 'Во „Листа за нарачка“ производот чека кај својот добавувач.', en: 'In the "Order list", the product waits under its supplier.' },
    ],
    plan: PRO,
    help: ['niska-zaliha', 'lista-za-narachka'],
  },
  {
    id: 'etiketi',
    icon: 'printer',
    title: { mk: 'Етикети со цени', en: 'Price labels' },
    intro: {
      mk: 'Етикети со име, цена со ДДВ и баркод, за принтер за етикети или A4 лист.',
      en: 'Labels with the name, the price incl. VAT and a barcode, for a label printer or A4 sheets.',
    },
    steps: [
      { mk: 'Во „Производи“ штиклирајте ги производите.', en: 'In "Products", tick the products.' },
      { mk: 'Кликнете „Печати етикети“.', en: 'Click "Print labels".' },
      { mk: 'За акција внесете попуст: старата цена се прецртува.', en: 'For a sale, enter a discount: the old price is crossed out.' },
      { mk: 'Изберете големина, на пример 100×50.', en: 'Pick a size, for example 100×50.' },
      { mk: 'Кликнете „Печати“ за да ги испечатите етикетите.', en: 'Click "Print" to print the labels.' },
    ],
    help: ['etiketi-so-ceni', 'promeni-ceni'],
  },
  {
    id: 'popis',
    icon: 'check',
    title: { mk: 'Попис на залиха', en: 'Stocktake' },
    intro: {
      mk: 'Ја броите стоката во магацинот. Ако има разлика, апликацијата сама ја поправа залихата.',
      en: 'You count the goods in a warehouse. If anything differs, the app corrects the stock itself.',
    },
    steps: [
      { mk: 'Во „Внатрешни“ → „Попис“ кликнете „+“.', en: 'In "Internal" → "Stocktake", click "+".' },
      { mk: 'Изберете го магацинот и кликнете „Нов попис“.', en: 'Choose the warehouse and click "New stocktake".' },
      { mk: 'Во „Попишана количина“ внесете колку изброивте.', en: 'Under "Counted qty", enter what you counted.' },
      { mk: 'Кликнете „Зачувај го бројот“.', en: 'Click "Save this page".' },
      { mk: 'Кликнете „Заврши попис“. Залихата е онаква каква што ја изброивте.', en: 'Click "Finish stock-take". The stock now matches your count.' },
    ],
    help: ['popis', 'trebovanje-nivelacija-otpis'],
  },
  {
    id: 'prenos',
    icon: 'arrow',
    title: { mk: 'Пренос меѓу магацини', en: 'Moving stock between warehouses' },
    intro: {
      mk: 'Во два чекора: „Испрати“ кога стоката заминува, „Прими“ кога ќе стигне.',
      en: 'In two steps: "Dispatch" when the goods leave, "Receive" when they arrive.',
    },
    steps: [
      { mk: 'Во „Внатрешни“ → „Пренос“ кликнете „+“.', en: 'In "Internal" → "Transfer", click "+".' },
      { mk: 'Изберете од кој и во кој магацин.', en: 'Choose the warehouse it leaves and the one it goes to.' },
      { mk: 'Изберете производ и внесете количина.', en: 'Choose the product and enter the quantity.' },
      { mk: 'Кликнете „Испрати“. Стоката е „Во транзит“.', en: 'Click "Dispatch". The goods are "In transit".' },
      { mk: 'Кога ќе стигне, на преносот кликнете „Прими“.', en: 'When it arrives, click "Receive" on the transfer.' },
      { mk: 'Проверете колку стигнало и кликнете „Прими“.', en: 'Check how much arrived and click "Receive".' },
    ],
    plan: STD,
    help: ['prenos-megju-magacini', 'magacini'],
  },
  {
    id: 'seriski',
    icon: 'pin',
    title: { mk: 'Уреди со сериски број', en: 'Devices by serial number' },
    intro: {
      mk: 'Секој уред се следи посебно: кога е примен, во кој магацин е и кому е продаден.',
      en: 'Each device is tracked on its own: when it came in, where it is, and who bought it.',
    },
    steps: [
      { mk: 'На приемницата изберете уред со сериски броеви.', en: 'On a goods receipt, choose a device with serial numbers.' },
      { mk: 'Внесете количина и набавна цена.', en: 'Enter the quantity and the cost price.' },
      { mk: 'Под ставката внесете го серискиот број и притиснете Enter.', en: 'Under the line, type the serial number and press Enter.' },
      { mk: 'Повторете за секој уред.', en: 'Repeat for each device.' },
      { mk: 'Кликнете „Издади“.', en: 'Click "Issue".' },
      { mk: 'Кликнете на серискиот број: се гледа каде е уредот.', en: 'Click a serial number to see where the device is.' },
    ],
    plan: STD,
    help: ['seriski-broevi', 'vnesi-priemnica'],
  },
]
