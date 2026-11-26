// „Како работи" (owner 2026-11-26): the website walks the app the way its own menu does —
// every part of the app its own area, with the app's own symbol (components/AppIcon.astro).
// Each AREA is one part of the app: a real screen to explore (numbered spots that explain it),
// then the TASKS you do there (src/content/tasks/: steps, each with its own short video).
// Hotspot x / y are fractions of the picture (0–1), the centre of the spot.

import type { Lang } from '../i18n/ui'
import type { Shot } from './shots'
import type { Task } from './tasks/types'
import type { AppIconName } from '../components/AppIcon.astro'
import { taskById } from './tasks'

type T = Record<Lang, string>
export interface Hotspot { x: number; y: number; label: T }
export interface Area {
  id: string
  icon: AppIconName
  /** Not in every plan: which plan, or an add-on. */
  plan?: T
  title: T
  intro: T
  screen: Shot & { hotspots: Hotspot[] }
  /** The tasks done here, in order (src/content/tasks/<area>.ts). */
  tasks: string[]
}

const STD: T = { mk: 'Во планот Стандард и Про', en: 'In the Standard and Pro plans' }
const PRO: T = { mk: 'Во планот Про', en: 'In the Pro plan' }
const ADDON: T = { mk: 'Додаток', en: 'Add-on' }
void STD


export const AREAS: Area[] = [
  {
    id: 'pochetna', icon: 'home',
    title: { mk: 'Почетна', en: 'Home' },
    intro: {
      mk: 'Првиот екран по најавата: прометот, кој доцни со плаќање и последните документи.',
      en: 'The first screen after you log in: sales, who is late paying and the latest documents.',
    },
    screen: {
      img: 'general-pochetna.webp', w: 1280, h: 720,
      caption: { mk: 'Почетна', en: 'Home' },
      hotspots: [
        { x: 0.258, y: 0.046, label: { mk: "Пребарување низ сè: партнери, производи, документи.", en: "Search everything: partners, products, documents." } },
        { x: 0.2, y: 0.32, label: { mk: "Почетни чекори: што да подесите прво, со копче до секој чекор.", en: "Getting started: what to set up first, with a button for each step." } },
        { x: 0.12, y: 0.804, label: { mk: "Брзи копчиња: нова фактура, понуда, приемница, партнер или производ.", en: "Quick buttons: a new invoice, quote, goods receipt, partner or product." } },
        { x: 0.105, y: 0.886, label: { mk: "За внимание: доспеани фактури и нераспределени уплати.", en: "Needs attention: overdue invoices and unallocated payments." } },
        { x: 0.36, y: 0.886, label: { mk: "Плочки со побарувања и промет. Ги средувате како сакате.", en: "Tiles with money owed and sales. Arrange them as you like." } },
      ],
    },
    tasks: ['pochetni-chekori', 'prebaruvanje', 'plochki'],
  },
  {
    id: 'partneri', icon: 'partner',
    title: { mk: 'Партнери', en: 'Partners' },
    intro: {
      mk: 'Купувачите и добавувачите. Секој има своја картичка со долгот и документите.',
      en: 'Your customers and suppliers. Each has a card with their debt and documents.',
    },
    screen: {
      img: 'partners-finansiska-kartica.webp', w: 1280, h: 800,
      caption: { mk: 'Финансиска картица на купувач', en: 'A customer’s account card' },
      hotspots: [
        { x: 0.468, y: 0.262, label: { mk: "Дали партнерот може да прима е-фактура.", en: "Whether the partner can receive an e-invoice." } },
        { x: 0.27, y: 0.311, label: { mk: "Колку должи, и рокот за плаќање.", en: "What they owe, and their payment terms." } },
        { x: 0.34, y: 0.366, label: { mk: "Јазичиња: попусти, отворени ставки, картица, документи, историја.", en: "Tabs: discounts, open items, account card, documents, history." } },
        { x: 0.87, y: 0.51, label: { mk: "Печатење или извоз во Excel.", en: "Print it or export it to Excel." } },
        { x: 0.95, y: 0.945, label: { mk: "Салдото по секој ред и вкупно.", en: "The balance after every line, and the total." } },
      ],
    },
    tasks: ['nov-partner', 'dolgovi', 'kreditni-limit', 'popusti'],
  },
  {
    id: 'proizvodi', icon: 'product',
    title: { mk: 'Производи', en: 'Products' },
    intro: {
      mk: 'Сите производи со цените и залихата, по магацин.',
      en: 'All products with their prices and stock, by warehouse.',
    },
    screen: {
      img: 'products-zalihi.webp', w: 1280, h: 720,
      caption: { mk: 'Залихи по производ', en: 'Stock by product' },
      hotspots: [
        { x: 0.116, y: 0.303, label: { mk: "Каталог, залихи или пресеци на залихата на одреден ден.", en: "Catalog, stock, or stock snapshots on a given day." } },
        { x: 0.303, y: 0.231, label: { mk: "Што е под минимумот и што треба да се нарача.", en: "What is below minimum and what to order." } },
        { x: 0.67, y: 0.231, label: { mk: "Нов производ.", en: "A new product." } },
        { x: 0.594, y: 0.376, label: { mk: "Залиха во сите магацини или во еден.", en: "Stock in all warehouses or in one." } },
        { x: 0.703, y: 0.855, label: { mk: "Бојата кажува: зелено има, жолто малку, црвено фали.", en: "The colour tells you: green in stock, yellow low, red missing." } },
      ],
    },
    tasks: ['nov-proizvod', 'niska-zaliha', 'etiketi', 'popis', 'prenos', 'seriski'],
  },
  {
    id: 'dokumenti', icon: 'invoice',
    title: { mk: 'Документи', en: 'Documents' },
    intro: {
      mk: 'Фактури, понуди, испратници, приемници и сите други документи.',
      en: 'Invoices, quotes, dispatch notes, goods receipts and every other document.',
    },
    screen: {
      img: 'faktura-izdaj.webp', w: 1280, h: 960,
      caption: { mk: 'Нова фактура', en: 'A new invoice' },
      hotspots: [
        { x: 0.11, y: 0.294, label: { mk: "Видот на документот: фактура, испратница, понуда, профактура.", en: "The document type: invoice, dispatch note, quote, proforma." } },
        { x: 0.19, y: 0.373, label: { mk: "Купувачот. Рокот за плаќање се пополнува сам.", en: "The customer. The payment terms fill in by themselves." } },
        { x: 0.29, y: 0.573, label: { mk: "Производот, по шифра, име или баркод. Цената се пополнува сама.", en: "The product, by code, name or barcode. The price fills in by itself." } },
        { x: 0.045, y: 0.667, label: { mk: "Колку има на залиха и по која набавна цена, додека пишувате.", en: "How much is in stock and at what cost, while you type." } },
        { x: 0.85, y: 0.837, label: { mk: "ДДВ и вкупно, пресметани сами.", en: "VAT and totals, calculated for you." } },
        { x: 0.924, y: 0.914, label: { mk: "„Издади“ му дава број и ја намалува залихата.", en: "\"Issue\" gives it a number and reduces stock." } },
      ],
    },
    tasks: ['faktura', 'ponuda-faktura', 'ispratnica-faktura', 'priemnica', 'storno', 'pechatenje', 'nema-zaliha', 'povtoruvachki'],
  },
  {
    id: 'plakjanja', icon: 'money',
    title: { mk: 'Плаќања', en: 'Payments' },
    intro: {
      mk: 'Што влегло и што излегло. Фактурите се затвораат сами.',
      en: 'Money in and money out. Invoices close by themselves.',
    },
    screen: {
      img: 'payments-izvod-red.webp', w: 1280, h: 720,
      caption: { mk: 'Извод од банка', en: 'A bank statement' },
      hotspots: [
        { x: 0.7, y: 0.208, label: { mk: "Еден извод, по еден ред за секој партнер.", en: "One bank statement, one line per partner." } },
        { x: 0.29, y: 0.39, label: { mk: "Партнерот што платил.", en: "The partner who paid." } },
        { x: 0.594, y: 0.39, label: { mk: "Износот од изводот.", en: "The amount from the statement." } },
        { x: 0.36, y: 0.47, label: { mk: "Кои фактури се затвораат, а колку останува како аванс.", en: "Which invoices it closes, and what stays as an advance." } },
        { x: 0.797, y: 0.644, label: { mk: "Зачувај, и фактурите се затворени.", en: "Save, and the invoices are closed." } },
      ],
    },
    tasks: ['plakjanje-faktura', 'izvod', 'avans', 'kompenzacija'],
  },
  {
    id: 'izveshtai', icon: 'trend',
    title: { mk: 'ДДВ и извештаи', en: 'VAT and reports' },
    intro: {
      mk: 'Промет, добивка, кој должи, ДДВ книгите и ДДВ-04.',
      en: 'Sales, profit, who owes you, the VAT books and VAT-04.',
    },
    screen: {
      img: 'reports-po-period.webp', w: 1280, h: 900,
      caption: { mk: 'Промет и добивка по период', en: 'Sales and profit by period' },
      hotspots: [
        { x: 0.364, y: 0.23, label: { mk: "Другите извештаи: производи, купувачи, споредба, ДДВ, пари.", en: "The other reports: products, customers, comparison, VAT, money." } },
        { x: 0.02, y: 0.355, label: { mk: "Период: овој месец, минатиот, оваа година или свои датуми.", en: "The period: this month, last month, this year or your own dates." } },
        { x: 0.2, y: 0.47, label: { mk: "Промет, добивка и маржа, споредени со претходниот период.", en: "Sales, profit and margin, compared with the period before." } },
        { x: 0.92, y: 0.634, label: { mk: "Извоз во Excel.", en: "Export to Excel." } },
        { x: 0.71, y: 0.797, label: { mk: "Најголемиот купувач и најпродаваниот производ.", en: "The biggest customer and the best-selling product." } },
      ],
    },
    tasks: ['ddv-04', 'podnesena', 'promet', 'kupuvachi-proizvodi', 'sporedba'],
  },
  {
    id: 'servis', icon: 'wrench', plan: ADDON,
    title: { mk: 'Сервис', en: 'Service' },
    intro: {
      mk: "Поправки на уредите на клиентите, од прием до фактура.",
      en: "Repairs of your customers’ devices, from intake to invoice.",
    },
    screen: {
      img: 'service-tabla.webp', w: 1280, h: 720,
      caption: { mk: "Таблата Работилница", en: "The Workshop board" },
      hotspots: [
        { x: 0.135, y: 0.224, label: { mk: "Работилница, терен или листа.", en: "Workshop, field work or a list." } },
        { x: 0.135, y: 0.32, label: { mk: "Колку налози има, кои се по рок, кои наскоро.", en: "How many tickets there are, which are overdue, which are due soon." } },
        { x: 0.39, y: 0.475, label: { mk: "Колони по статус: од прием до подготвено.", en: "Columns by status: from intake to ready." } },
        { x: 0.074, y: 0.583, label: { mk: "Налогот: број, денови до законскиот рок, клиент, дефект.", en: "The ticket: number, days to the legal deadline, client, fault." } },
        { x: 0.927, y: 0.225, label: { mk: "Нов прием на уред.", en: "A new device intake." } },
      ],
    },
    tasks: ['servis-priem', 'servis-tabla', 'servis-naplata'],
  },
  {
    id: 'iznajmuvanje', icon: 'printer', plan: ADDON,
    title: { mk: 'Изнајмување', en: 'Rentals' },
    intro: {
      mk: "Изнајмени машини, отчитувања на броилата и месечни фактури.",
      en: "Rented-out machines, meter readings and monthly invoices.",
    },
    screen: {
      img: 'rentals-fakturiranje-presmetaj.webp', w: 1280, h: 720,
      caption: { mk: "Месечно фактурирање", en: "Monthly billing" },
      hotspots: [
        { x: 0.4, y: 0.224, label: { mk: "Машини, договори, отчитувања и фактурирање.", en: "Machines, contracts, readings and billing." } },
        { x: 0.59, y: 0.224, label: { mk: "Кои машини итно бараат тонер.", en: "Which machines urgently need toner." } },
        { x: 0.13, y: 0.327, label: { mk: "Месецот што се фактурира.", en: "The month being billed." } },
        { x: 0.51, y: 0.328, label: { mk: "„Пресметај“ ги пресметува сите договори одеднаш.", en: "\"Calculate\" works out every contract at once." } },
        { x: 0.7, y: 0.756, label: { mk: "Секој договор добива своја фактура.", en: "Each contract gets its own invoice." } },
      ],
    },
    tasks: ['iznajmuvanje-novo', 'otchituvanja', 'iznajmuvanje-fakturi'],
  },
  {
    id: 'otpad', icon: 'leaf', plan: PRO,
    title: { mk: 'Отпад', en: 'Packaging' },
    intro: {
      mk: "Месечниот извештај за амбалажа, за ПАКОМАК или друг оператор.",
      en: "The monthly packaging report, for PAKOMAK or another operator.",
    },
    screen: {
      img: 'waste-mesec.webp', w: 1280, h: 680,
      caption: { mk: "Месечен извештај за амбалажа", en: "The monthly packaging report" },
      hotspots: [
        { x: 0.26, y: 0.235, label: { mk: "Извештај, видови пакување, производи и поставки.", en: "Report, packaging types, products and settings." } },
        { x: 0.23, y: 0.343, label: { mk: "Месецот или годината.", en: "The month or the year." } },
        { x: 0.17, y: 0.417, label: { mk: "Откако ќе пријавите, означете го месецот.", en: "Once you have reported, mark the month." } },
        { x: 0.08, y: 0.53, label: { mk: "Седумте броја по материјал, секој со „Копирај“.", en: "The seven figures by material, each with \"Copy\"." } },
        { x: 0.41, y: 0.759, label: { mk: "Што недостасува, пред да пријавите.", en: "What is missing, before you report." } },
      ],
    },
    tasks: ['vidovi-pakuvanje', 'otpad-izveshtaj'],
  },
  {
    id: 'uvoz-izvoz', icon: 'globe', plan: PRO,
    title: { mk: 'Увоз и извоз', en: 'Import and export' },
    intro: {
      mk: "Девизни фактури, трошоци на увозот и извозни фактури.",
      en: "Foreign-currency invoices, import costs and export invoices.",
    },
    screen: {
      img: 'sell-izvozna-nova.webp', w: 1280, h: 900,
      caption: { mk: "Нова извозна фактура", en: "A new export invoice" },
      hotspots: [
        { x: 0.685, y: 0.196, label: { mk: "Цените се во валута, на пример во евра.", en: "Prices are in a foreign currency, for example euros." } },
        { x: 0.816, y: 0.242, label: { mk: "Извозот е со 0 % ДДВ.", en: "Exports carry 0% VAT." } },
        { x: 0.8, y: 0.496, label: { mk: "Вкупно, во валутата на фактурата.", en: "The total, in the invoice currency." } },
        { x: 0.2, y: 0.527, label: { mk: "Курсот се внесува кога ќе ја издадете.", en: "The exchange rate is entered when you issue it." } },
        { x: 0.13, y: 0.587, label: { mk: "Испорака: адреса, палети, кутии, тежина.", en: "Delivery: address, pallets, boxes, weight." } },
      ],
    },
    tasks: ['devizna-faktura', 'izvozna-faktura'],
  },
  {
    id: 'veb-prodavnica', icon: 'store', plan: ADDON,
    title: { mk: 'Веб-продавница', en: 'Online store' },
    intro: {
      mk: "Цените и залихата одат сами во вашата WooCommerce продавница.",
      en: "Prices and stock go to your WooCommerce store by themselves.",
    },
    screen: {
      img: 'webpage-povrzi.webp', w: 1280, h: 520,
      caption: { mk: "Поврзување со продавницата", en: "Connecting the store" },
      hotspots: [
        { x: 0.672, y: 0.496, label: { mk: "Подесувања → Веб-страница.", en: "Settings → Website." } },
        { x: 0.17, y: 0.675, label: { mk: "Адресата на вашата продавница.", en: "Your store’s address." } },
        { x: 0.453, y: 0.675, label: { mk: "Клучевите што ги прави WooCommerce.", en: "The keys WooCommerce creates." } },
        { x: 0.14, y: 0.808, label: { mk: "Од кои магацини се праќа залихата.", en: "Which warehouses the stock comes from." } },
        { x: 0.155, y: 0.898, label: { mk: "Проверете ја врската пред да зачувате.", en: "Test the connection before you save." } },
      ],
    },
    tasks: ['veb-povrzuvanje', 'prikazhi-na-veb'],
  },
  {
    id: 'podesuvanja', icon: 'gear',
    title: { mk: 'Подесувања', en: 'Settings' },
    intro: {
      mk: 'Податоците за фирмата, сметките за вработените и преминот од друга програма.',
      en: 'Company details, staff accounts and switching from another program.',
    },
    screen: {
      img: 'settings-firma.webp', w: 1280, h: 900,
      caption: { mk: 'Податоци за фирмата', en: 'Company details' },
      hotspots: [
        { x: 0.24, y: 0.29, label: { mk: "Пребарајте ја поставката по име.", en: "Find a setting by its name." } },
        { x: 0.43, y: 0.358, label: { mk: "Фирма, сметки, полиња, магацини, печатење, вчитување податоци.", en: "Company, accounts, fields, warehouses, printing, importing data." } },
        { x: 0.845, y: 0.604, label: { mk: "Податоците за фирмата се пополнуваат од УЈП.", en: "The company details fill in from UJP." } },
        { x: 0.92, y: 0.464, label: { mk: "Зачувај.", en: "Save." } },
      ],
    },
    tasks: ['vchitaj-excel', 'nova-smetka', 'izgled-pechatenje'],
  },
]

/** The tasks of an area that are written (the rest are left out until they are). */
export const tasksOf = (a: Area): Task[] => a.tasks.map(taskById).filter((t): t is Task => t !== undefined)

/** Where a task lives: the area that holds it. */
export const areaOf = (taskId: string) => AREAS.find((a) => a.tasks.includes(taskId))
