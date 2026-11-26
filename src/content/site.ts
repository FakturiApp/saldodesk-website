// The site's own words, in Macedonian and English (owner 2026-11-26: short, plain,
// natural language; a tab per page). The tasks live in src/content/tasks/, the areas in areas.ts.
// Every claim must be true of the app today (brief 01 §9). `**…**` = highlighted words.
// PRICES ARE EXAMPLES until the owner sets them; the pages say so in a <Todo>.

import type { Lang } from '../i18n/ui'

export interface Plan { key: string; name: string; who: string; monthly: number; users: number; lines: string[]; star?: boolean }

/** Example monthly prices (owner 2026-11-16). Yearly = 10 months. */
export const YEAR_MONTHS = 10
export const PRICE = { osnoven: 500, standard: 1000, pro: 1800, user: 150, web: 400, servis: 600, iznajmuvanje: 900 }

const mk = {
  home: {
    title: 'Фактури, залиха и долгови **на едно место.**',
    text: 'Програма за македонски фирми. Работи во прелистувач, без инсталација.',
    cta2: 'Погледнете како работи',
    note: '30 дена бесплатно · без картичка',
    alt: 'Почетниот екран на SaldoDesk',
    whatTitle: 'Што можете да правите',
    allFeatures: 'Сè што може програмата',
    tourTitle: 'Прошетајте низ програмата',
    tourText: 'Секој дел од програмата, со вистински екрани и чекори за секоја работа.',
    tourCta: 'Како работи',
    priceTitle: 'Од 500 ден. месечно',
    priceText: 'Три плана, 30 дена бесплатно со сите модули. Плаќате по фактура.',
    priceCta: 'Погледнете ги цените',
  },
  kako: {
    title: 'Како работи',
    text: 'Програмата, дел по дел, онака како е подредена во менито. Сликите се од програмата, на измислена фирма.',
    explore: 'Разгледајте го екранот',
    exploreHint: 'Кликнете на број.',
    tasks: 'Што правите тука',
    steps: 'Чекори',
    more: 'Цело упатство',
    top: 'Назад на врвот',
    next: 'Следен чекор',
    replay: 'Пушти повторно',
  },
  prices: {
    title: 'Цени',
    text: '30 дена бесплатно, со сите модули. Потоа плаќате по фактура.',
    todo: 'цените се примерни',
    month: 'Месечно',
    year: 'Годишно',
    yearBadge: '2 месеци бесплатно',
    perMonth: 'месечно',
    perYear: 'годишно',
    users: (n: number) => `${n} корисници`,
    star: 'Препорачано',
    plans: [
      { key: 'osnoven', name: 'Основен', who: 'За мала фирма', monthly: PRICE.osnoven, users: 2,
        lines: ['Сите документи', 'Залиха во еден магацин', 'Плаќања и долгови', 'ДДВ книги и ДДВ-04', 'Промет и добивка', 'Премин од друга програма'] },
      { key: 'standard', name: 'Стандард', who: 'За трговија', monthly: PRICE.standard, users: 5, star: true,
        lines: ['Сè од Основен', 'Повеќе магацини', 'Сериски броеви и рок на траење', 'Подетални извештаи', 'Фактури што се повторуваат', 'Свои полиња во формите'] },
      { key: 'pro', name: 'Про', who: 'За увоз и поголем промет', monthly: PRICE.pro, users: 10,
        lines: ['Сè од Стандард', 'Увоз и извоз со зависни трошоци', 'Листа за нарачка', 'Кредитен лимит по купувач', 'Извештај за амбалажа (ПАКОМАК)'] },
    ] as Plan[],
    addonsTitle: 'Додатоци за секој план',
    addons: [
      { name: 'Веб-продавница (WooCommerce)', price: PRICE.web },
      { name: 'Сервис', price: PRICE.servis },
      { name: 'Изнајмување апарати', price: PRICE.iznajmuvanje },
      { name: 'Дополнителен корисник', price: PRICE.user },
    ],
    factsTitle: 'Како се плаќа',
    facts: [
      'Без картичка за пробата.',
      'Плаќате по фактура, со банкарски трансфер.',
      'Ништо не се наплаќа автоматски.',
      'Ако не продолжите, податоците остануваат достапни за читање и извоз.',
    ],
  },
  contact: {
    title: 'Контакт',
    text: 'Јавете се или пишете. Ќе ви ја покажеме програмата за 15 минути.',
    person: 'Лице за контакт',
    todoPerson: 'име и улога',
    phone: 'Телефон / Viber',
    email: 'Е-пошта',
    hours: 'Работно време',
    todoPhone: 'телефонски број',
    todoEmail: 'е-пошта',
    todoHours: 'денови и часови',
  },
  cta: { title: 'Пробајте го на вашата фирма.', note: '30 дена бесплатно · без картичка' },
}

const en: typeof mk = {
  home: {
    title: 'Invoices, stock and debts **in one place.**',
    text: 'Business software for companies in North Macedonia. Runs in your browser, nothing to install.',
    cta2: 'See how it works',
    note: '30 days free · no card needed',
    alt: 'The SaldoDesk home screen',
    whatTitle: 'What you can do',
    allFeatures: 'Everything the program does',
    tourTitle: 'Walk through the program',
    tourText: 'Every part of the program, with real screens and the steps for each job.',
    tourCta: 'How it works',
    priceTitle: 'From 500 MKD a month',
    priceText: 'Three plans, 30 days free with every module. You pay by invoice.',
    priceCta: 'See pricing',
  },
  kako: {
    title: 'How it works',
    text: 'The program, part by part, in the order of its menu. The pictures are from the program, with a made-up company.',
    explore: 'Explore the screen',
    exploreHint: 'Click a number.',
    tasks: 'What you do here',
    steps: 'Steps',
    more: 'Full guide',
    top: 'Back to top',
    next: 'Next step',
    replay: 'Play again',
  },
  prices: {
    title: 'Pricing',
    text: '30 days free, with every module. After that, you pay by invoice.',
    todo: 'example prices',
    month: 'Monthly',
    year: 'Yearly',
    yearBadge: '2 months free',
    perMonth: 'per month',
    perYear: 'per year',
    users: (n: number) => `${n} users`,
    star: 'Recommended',
    plans: [
      { key: 'osnoven', name: 'Basic', who: 'For a small business', monthly: PRICE.osnoven, users: 2,
        lines: ['All documents', 'Stock in one warehouse', 'Payments and debts', 'VAT books and VAT-04', 'Sales and profit', 'Import from another program'] },
      { key: 'standard', name: 'Standard', who: 'For trading companies', monthly: PRICE.standard, users: 5, star: true,
        lines: ['Everything in Basic', 'Several warehouses', 'Serial numbers and expiry dates', 'More detailed reports', 'Recurring invoices', 'Your own fields on forms'] },
      { key: 'pro', name: 'Pro', who: 'For importers and larger sales', monthly: PRICE.pro, users: 10,
        lines: ['Everything in Standard', 'Import and export with landed costs', 'Reorder list', 'Credit limit per customer', 'Packaging report (PAKOMAK)'] },
    ] as Plan[],
    addonsTitle: 'Add to any plan',
    addons: [
      { name: 'Online store (WooCommerce)', price: PRICE.web },
      { name: 'Service', price: PRICE.servis },
      { name: 'Equipment rental', price: PRICE.iznajmuvanje },
      { name: 'Extra user', price: PRICE.user },
    ],
    factsTitle: 'How payment works',
    facts: [
      'No card needed for the trial.',
      'You pay by invoice, by bank transfer.',
      'Nothing is charged automatically.',
      'If you stop, your data stays available to read and export.',
    ],
  },
  contact: {
    title: 'Contact',
    text: 'Call or write to us. We’ll show you the program in 15 minutes.',
    person: 'Contact person',
    todoPerson: 'name and role',
    phone: 'Phone / Viber',
    email: 'E-mail',
    hours: 'Hours',
    todoPhone: 'phone number',
    todoEmail: 'e-mail address',
    todoHours: 'days and hours',
  },
  cta: { title: 'Try it on your own business.', note: '30 days free · no card needed' },
}

export const SITE: Record<Lang, typeof mk> = { mk, en }
