// Every word the site shows, in its three languages. Macedonian is the source;
// Albanian and English are translated from it (brief 02 §11). The Albanian here is
// a DRAFT until a native speaker has checked it (brief 06 §7, launch gate).

export const LANGS = ['mk', 'sq', 'en'] as const
export type Lang = (typeof LANGS)[number]

export const LANG_LABEL: Record<Lang, string> = { mk: 'МК', sq: 'SQ', en: 'EN' }
export const LANG_NAME: Record<Lang, string> = { mk: 'Македонски', sq: 'Shqip', en: 'English' }

export function isLang(v: string | undefined): v is Lang {
  return (LANGS as readonly string[]).includes(v ?? '')
}

/** Where the app lives. The one place the site names it (brief 06 §2). */
export const APP_URL = 'https://app.saldodesk.mk/'
/** The app has no sign-up address yet: sign-up is a state of its login screen.
 *  A deep link (`?signup=1` or `/signup`) is app work, brief 06 §6 item 3. */
export const signupUrl = (lang: Lang) => `${APP_URL}?signup=1&lang=${lang}`
export const loginUrl = (lang: Lang) => `${APP_URL}?lang=${lang}`

/** The launch pages besides the home page (brief 06 §3). One slug in every
 *  language, so switching language keeps the visitor on the same page. */
export const PAGES = [
  'funkcii',
  'dobivka',
  'dolgovi',
  'ddv',
  'moduli',
  'e-faktura',
  'ceni',
  'pomosh',
  'preminuvanje',
  'demo',
  'status',
  'za-nas',
  'kontakt',
  'uslovi',
  'privatnost',
] as const
export type Page = (typeof PAGES)[number]

type Dict = Record<string, string>

const mk: Dict = {
  'site.tagline': 'фактури, залиха и долгови по македонски закон',
  'site.description':
    'SaldoDesk — фактури, залиха, долгови и ДДВ за македонски фирми, изградено за е-Фактура. На македонски и албански, од секој компјутер.',
  'skip': 'Прескокни до содржината',
  'menu': 'Мени',
  'lang.label': 'Јазик',
  'nav.main': 'Главно мени',
  'cta.trial': 'Пробај бесплатно',
  'cta.trialShort': 'Пробај',
  'cta.login': 'Најави се',
  'page.funkcii': 'Функции',
  'page.dobivka': 'Добивка и залиха',
  'page.dolgovi': 'Пари и долгови',
  'page.ddv': 'ДДВ и сметководител',
  'page.moduli': 'Модули',
  'theme.toLight': 'Светла тема',
  'theme.toDark': 'Темна тема',
  'page.e-faktura': 'е-Фактура',
  'page.ceni': 'Цени',
  'page.pomosh': 'Помош',
  'page.preminuvanje': 'Преминете од друга програма',
  'page.demo': 'Демо фирма',
  'page.status': 'Што е готово',
  'page.kontakt': 'Контакт',
  'page.za-nas': 'За SaldoDesk',
  'page.uslovi': 'Услови за користење',
  'page.privatnost': 'Приватност',
  'footer.product': 'Производ',
  'footer.company': 'Фирма',
  'footer.contact': 'Контакт',
  'footer.legalName': 'Назив на фирмата, адреса и ЕДБ',
  'footer.phone': 'Телефон / Viber',
  'footer.email': 'Е-пошта',
  'footer.hours': 'Работно време на поддршката',
  'footer.rights': 'Сите права задржани.',
  'todo': 'ПОПОЛНИ',
  'wip.title': 'Страницата се подготвува',
  'wip.body': 'Оваа страница е дел од следниот чекор на изработката.',
  'home.wip': 'Почетната страница доаѓа во чекор W1.',
  '404.title': 'Страницата не постои',
  '404.back': 'Назад на почетна',
}

const sq: Dict = {
  'site.tagline': 'fatura, stoku dhe borxhe sipas ligjit maqedonas',
  'site.description':
    'SaldoDesk — fatura, stoku, borxhe dhe TVSH për firmat në Maqedoni, i ndërtuar për e-Faturën. Në maqedonisht dhe shqip, nga çdo kompjuter.',
  'skip': 'Kalo te përmbajtja',
  'menu': 'Menyja',
  'lang.label': 'Gjuha',
  'nav.main': 'Menyja kryesore',
  'cta.trial': 'Provo falas',
  'cta.trialShort': 'Provo',
  'cta.login': 'Hyr',
  'page.funkcii': 'Veçoritë',
  'page.dobivka': 'Fitimi dhe stoku',
  'page.dolgovi': 'Paratë dhe borxhet',
  'page.ddv': 'TVSH dhe kontabilisti',
  'page.moduli': 'Modulet',
  'theme.toLight': 'Tema e çelët',
  'theme.toDark': 'Tema e errët',
  'page.e-faktura': 'e-Fatura',
  'page.ceni': 'Çmimet',
  'page.pomosh': 'Ndihmë',
  'page.preminuvanje': 'Kaloni nga një program tjetër',
  'page.demo': 'Kompania demo',
  'page.status': 'Çfarë është gati',
  'page.kontakt': 'Kontakti',
  'page.za-nas': 'Rreth SaldoDesk',
  'page.uslovi': 'Kushtet e përdorimit',
  'page.privatnost': 'Privatësia',
  'footer.product': 'Produkti',
  'footer.company': 'Kompania',
  'footer.contact': 'Kontakti',
  'footer.legalName': 'Emri i kompanisë, adresa dhe NUI',
  'footer.phone': 'Telefoni / Viber',
  'footer.email': 'Email',
  'footer.hours': 'Orari i mbështetjes',
  'footer.rights': 'Të gjitha të drejtat e rezervuara.',
  'todo': 'PLOTËSO',
  'wip.title': 'Faqja po përgatitet',
  'wip.body': 'Kjo faqe është pjesë e hapit të ardhshëm të punës.',
  'home.wip': 'Faqja kryesore vjen në hapin W1.',
  '404.title': 'Faqja nuk ekziston',
  '404.back': 'Kthehu në fillim',
}

const en: Dict = {
  'site.tagline': 'invoices, stock and debts the Macedonian way',
  'site.description':
    'SaldoDesk — invoices, stock, debts and VAT for Macedonian businesses, built for e-Invoicing (е-Фактура). In Macedonian and Albanian, from any computer.',
  'skip': 'Skip to content',
  'menu': 'Menu',
  'lang.label': 'Language',
  'nav.main': 'Main menu',
  'cta.trial': 'Try it free',
  'cta.trialShort': 'Try free',
  'cta.login': 'Log in',
  'page.funkcii': 'Features',
  'page.dobivka': 'Profit and stock',
  'page.dolgovi': 'Money and debts',
  'page.ddv': 'VAT and your accountant',
  'page.moduli': 'Modules',
  'theme.toLight': 'Light theme',
  'theme.toDark': 'Dark theme',
  'page.e-faktura': 'e-Invoicing',
  'page.ceni': 'Pricing',
  'page.pomosh': 'Help',
  'page.preminuvanje': 'Switch from another program',
  'page.demo': 'Demo company',
  'page.status': "What's ready",
  'page.kontakt': 'Contact',
  'page.za-nas': 'About SaldoDesk',
  'page.uslovi': 'Terms of use',
  'page.privatnost': 'Privacy',
  'footer.product': 'Product',
  'footer.company': 'Company',
  'footer.contact': 'Contact',
  'footer.legalName': 'Company name, address and tax number',
  'footer.phone': 'Phone / Viber',
  'footer.email': 'E-mail',
  'footer.hours': 'Support hours',
  'footer.rights': 'All rights reserved.',
  'todo': 'TO FILL IN',
  'wip.title': 'This page is being prepared',
  'wip.body': 'This page is part of the next build step.',
  'home.wip': 'The home page arrives in step W1.',
  '404.title': 'Page not found',
  '404.back': 'Back to the home page',
}

const DICTS: Record<Lang, Dict> = { mk, sq, en }

/** A missing key shows itself as the key, so a gap is visible, never silent. */
export function useT(lang: Lang) {
  return (key: string) => DICTS[lang][key] ?? DICTS.mk[key] ?? key
}

export const pageHref = (lang: Lang, page?: Page) => (page ? `/${lang}/${page}/` : `/${lang}/`)
