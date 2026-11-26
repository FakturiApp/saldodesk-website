// How the wiki groups and labels the app's help articles, in both languages.
import type { Lang } from '../i18n/ui'

/** The `topic` of an article → its heading on the wiki, in the app's order. */
export const HELP_TOPICS: { key: string; name: Record<Lang, string> }[] = [
  { key: 'general', name: { mk: 'Почеток и општо', en: 'Getting started' } },
  { key: 'documents', name: { mk: 'Документи', en: 'Documents' } },
  { key: 'partners', name: { mk: 'Партнери', en: 'Partners' } },
  { key: 'products', name: { mk: 'Производи и залиха', en: 'Products and stock' } },
  { key: 'payments', name: { mk: 'Плаќања', en: 'Payments' } },
  { key: 'vat', name: { mk: 'ДДВ', en: 'VAT' } },
  { key: 'reports', name: { mk: 'Извештаи', en: 'Reports' } },
  { key: 'settings', name: { mk: 'Подесувања', en: 'Settings' } },
  { key: 'dataimport', name: { mk: 'Вчитај податоци', en: 'Importing data' } },
  { key: 'service', name: { mk: 'Сервис', en: 'Service' } },
  { key: 'rentals', name: { mk: 'Изнајмување', en: 'Rentals' } },
  { key: 'waste', name: { mk: 'Отпад', en: 'Packaging waste' } },
  { key: 'webpage', name: { mk: 'Веб-продавница', en: 'Online store' } },
]

const STD = { mk: 'Во планот Стандард и Про', en: 'In the Standard and Pro plans' }
const PRO = { mk: 'Во планот Про', en: 'In the Pro plan' }
const ADDON = { mk: 'Додаток за секој план', en: 'Add-on for any plan' }

/** The app's module code → which plan or add-on has it (brief 04 §2). */
const MODULE_BADGE: Record<string, Record<Lang, string>> = {
  warehouse: STD, import_export: PRO, waste: PRO, finance: PRO, purchasing: PRO,
  webpage: ADDON, service: ADDON, rentals: ADDON,
}

/** Core functions the owner moved to Стандард (16.11) — their articles say module: null. */
const STANDARD_SLUGS = new Set([
  'sporedi', 'povtoruvachki-fakturi', 'polinja', 'sporedba-na-periodi', 'bavni-proizvodi', 'izveshtaj-kupuvachi',
  'prenos-megju-magacini', 'magacini-i-vraboteni', 'seriski-broevi',
])

/** Articles whose answer differs by plan, said in their own words. */
const OWN_BADGE: Record<string, Record<Lang, string>> = {
  'partner-kreditni-limit': { mk: 'Предупредувањето: секој план · блокадата: план Про', en: 'The warning: every plan · the block: Pro plan' },
}

/** The badge an article wears: which plan or add-on has what it describes. */
export function planBadge(lang: Lang, slug: string, module: string | null | undefined): string | null {
  if (OWN_BADGE[slug]) return OWN_BADGE[slug][lang]
  if (STANDARD_SLUGS.has(slug)) return STD[lang]
  return module && MODULE_BADGE[module] ? MODULE_BADGE[module][lang] : null
}
