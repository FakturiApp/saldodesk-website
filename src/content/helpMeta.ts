// How the wiki groups and labels the app's help articles.
import { MODULES } from './modules'

/** The `topic` of an article → its heading on the wiki, in the app's order. */
export const HELP_TOPICS: { key: string; name: string }[] = [
  { key: 'general', name: 'Почеток и општо' },
  { key: 'documents', name: 'Документи' },
  { key: 'partners', name: 'Партнери' },
  { key: 'products', name: 'Производи и залиха' },
  { key: 'payments', name: 'Плаќања' },
  { key: 'vat', name: 'ДДВ' },
  { key: 'reports', name: 'Извештаи' },
  { key: 'settings', name: 'Подесувања' },
  { key: 'dataimport', name: 'Вчитај податоци' },
  { key: 'service', name: 'Сервис' },
  { key: 'rentals', name: 'Изнајмување' },
  { key: 'waste', name: 'Отпад' },
  { key: 'webpage', name: 'Веб-продавница' },
]

/** The app's module code → where the website sells it (brief 04 §2). */
const MODULE_WHERE: Record<string, string> = {
  warehouse: 'magacini', import_export: 'uvoz', waste: 'otpad', finance: 'finansii',
  purchasing: 'nabavki', webpage: 'web', service: 'servis', rentals: 'iznajmuvanje',
}

/** Core functions the owner moved to Стандард (16.11) — their articles say module: null. */
const STANDARD_SLUGS = new Set([
  'sporedi', 'povtoruvachki-fakturi', 'polinja', 'sporedba-na-periodi', 'bavni-proizvodi', 'izveshtaj-kupuvachi',
  // More than one магацин or serial numbers: Магацинско работење, which is Стандард and up.
  'prenos-megju-magacini', 'magacini-i-vraboteni', 'seriski-broevi',
])

/** Articles whose answer differs by plan, said in their own words. */
const OWN_BADGE: Record<string, string> = {
  'partner-kreditni-limit': 'Предупредувањето: секој план · блокадата: план Про',
}

/** The badge an article wears: which plan or add-on has what it describes. */
export function planBadge(slug: string, module: string | null | undefined): { text: string; href?: string } | null {
  if (OWN_BADGE[slug]) return { text: OWN_BADGE[slug], href: '#finansii' }
  if (STANDARD_SLUGS.has(slug)) return { text: 'Во планот Стандард и Про' }
  if (!module) return null
  const m = MODULES.find((x) => x.id === MODULE_WHERE[module])
  if (!m) return null
  const text = 'plan' in m.where
    ? (m.where.plan === 'pro' ? `${m.name} · во планот Про` : `${m.name} · во планот Стандард и Про`)
    : `${m.name} · додаток`
  return { text, href: `#${m.id}` }
}
