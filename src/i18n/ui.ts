// Every word the site shows, in Macedonian and English. Macedonian is the source.
// Albanian is not published yet (owner 2026-11-26): its route, switch and copy come back
// when a native speaker writes it. Add 'sq' to LANGS and a `sq` copy wherever `en` has one.

export const LANGS = ['mk', 'en'] as const
export type Lang = (typeof LANGS)[number]

export const LANG_LABEL: Record<Lang, string> = { mk: 'МК', en: 'EN' }
export const LANG_NAME: Record<Lang, string> = { mk: 'Македонски', en: 'English' }

export function isLang(v: string | undefined): v is Lang {
  return (LANGS as readonly string[]).includes(v ?? '')
}

/** Where the app lives. The one place the site names it. */
export const APP_URL = 'https://app.saldodesk.mk/'
/** The app has no sign-up address yet: sign-up is a state of its login screen. */
export const signupUrl = (lang: Lang) => `${APP_URL}?signup=1&lang=${lang}`
export const loginUrl = (lang: Lang) => `${APP_URL}?lang=${lang}`

/** The pages besides the home page. One slug in every language, so switching
 *  language keeps the visitor on the same page. */
export const PAGES = ['kako-raboti', 'ceni', 'pomosh', 'kontakt', 'uslovi', 'privatnost'] as const
export type Page = (typeof PAGES)[number]

/** The tabs in the top bar (owner 2026-11-26: Функции and Преглед became one, „Како работи"). */
export const NAV: Page[] = ['kako-raboti', 'ceni', 'pomosh', 'kontakt']

const mk = {
  'site.title': 'SaldoDesk — програма за фактури, залиха и долгови',
  'site.description':
    'Фактури, залиха, долгови и ДДВ за македонски фирми. Работи во прелистувач. 30 дена бесплатно.',
  'skip': 'Прескокни до содржината',
  'menu': 'Мени',
  'menu.close': 'Затвори мени',
  'pan.hint': 'Повлечете со прст за да го видите целиот екран',
  'spot.prev': 'Претходна точка',
  'spot.next': 'Следна точка',
  'spot.of': 'од',
  'video.zoom': 'Одблиску',
  'video.fit': 'Цел кадар',
  'video.full': 'На цел екран',
  'cta.free': '30 дена бесплатно',
  'cta.noCard': 'без картичка',
  'lang.label': 'Јазик',
  'nav.main': 'Главно мени',
  'cta.trial': 'Пробајте бесплатно',
  'cta.trialShort': 'Пробајте',
  'cta.login': 'Најава',
  'theme.toLight': 'Светла тема',
  'theme.toDark': 'Темна тема',
  'page.kako-raboti': 'Како работи',
  'page.ceni': 'Цени',
  'page.kontakt': 'Контакт',
  'page.pomosh': 'Помош',
  'page.uslovi': 'Услови за користење',
  'page.privatnost': 'Приватност',
  'top': 'Назад на врвот',
  'footer.rights': 'Сите права задржани.',
  'footer.company': 'Назив на фирмата, адреса и ЕДБ',
  'todo': 'ПОПОЛНИ',
  'legal.todo': 'текстот го подготвува правник',
  '404.title': 'Страницата не постои',
  '404.back': 'Назад на почетната',
}

const en: typeof mk = {
  'site.title': 'SaldoDesk — invoices, stock and debts in one program',
  'site.description':
    'Invoices, stock, debts and VAT for businesses in North Macedonia. Runs in your browser. Free for 30 days.',
  'skip': 'Skip to content',
  'menu': 'Menu',
  'menu.close': 'Close menu',
  'pan.hint': 'Drag with your finger to see the whole screen',
  'spot.prev': 'Previous spot',
  'spot.next': 'Next spot',
  'spot.of': 'of',
  'video.zoom': 'Close-up',
  'video.fit': 'Whole frame',
  'video.full': 'Full screen',
  'cta.free': '30 days free',
  'cta.noCard': 'no card needed',
  'lang.label': 'Language',
  'nav.main': 'Main menu',
  'cta.trial': 'Try it free',
  'cta.trialShort': 'Try free',
  'cta.login': 'Log in',
  'theme.toLight': 'Light theme',
  'theme.toDark': 'Dark theme',
  'page.kako-raboti': 'How it works',
  'page.ceni': 'Pricing',
  'page.kontakt': 'Contact',
  'page.pomosh': 'Help',
  'page.uslovi': 'Terms of use',
  'page.privatnost': 'Privacy',
  'top': 'Back to top',
  'footer.rights': 'All rights reserved.',
  'footer.company': 'Company name, address and tax number',
  'todo': 'TO FILL IN',
  'legal.todo': 'a lawyer is preparing this text',
  '404.title': 'Page not found',
  '404.back': 'Back to the home page',
}

export type Key = keyof typeof mk
const DICTS: Record<Lang, typeof mk> = { mk, en }

export function useT(lang: Lang) {
  return (key: Key) => DICTS[lang][key]
}

export const pageHref = (lang: Lang, page?: Page) => (page ? `/${lang}/${page}/` : `/${lang}/`)

/** Prices: `1.000` in Macedonian, `1,000` in English. */
export const fmtNum = (lang: Lang, n: number) => n.toLocaleString(lang === 'mk' ? 'de-DE' : 'en-US')
export const CURRENCY: Record<Lang, string> = { mk: 'ден.', en: 'MKD' }
