// The wiki's own words (not the articles), and which articles to show per language.
import { getCollection } from 'astro:content'
import type { Lang } from '../i18n/ui'

export const HELP_COPY = {
  mk: {
    title: 'Помош',
    text: (n: number) => `${n} упатства за секој дел од програмата, чекор по чекор.`,
    search: 'Пребарај',
    placeholder: 'Пребарај, на пр. аванс, сторно, залиха',
    none: 'Нема резултат.',
    ask: 'Прашајте нè',
    topics: 'Теми',
    crumbs: 'Патека',
    related: 'Поврзани упатства',
    notFound: 'Не најдовте одговор?',
    notFoundText: 'Прашајте нè, ќе ви одговориме.',
    contact: 'Контакт',
    describe: (title: string) => `${title} — упатство за SaldoDesk.`,
    untranslated: '',
  },
  en: {
    title: 'Help',
    text: (n: number) => `${n} step-by-step guides for every part of the program.`,
    search: 'Search',
    placeholder: 'Search, e.g. advance, storno, stock',
    none: 'No results.',
    ask: 'Ask us',
    topics: 'Topics',
    crumbs: 'Breadcrumb',
    related: 'Related guides',
    notFound: 'Didn’t find the answer?',
    notFoundText: 'Ask us and we’ll reply.',
    contact: 'Contact',
    describe: (title: string) => `${title} — a SaldoDesk guide.`,
    untranslated: 'This guide is only in Macedonian for now.',
  },
} satisfies Record<Lang, unknown>

/** The articles for a language: the English copy where there is one, else the Macedonian. */
export async function helpArticles(lang: Lang) {
  const mk = await getCollection('help')
  if (lang === 'mk') return mk.map((e) => ({ id: e.id, data: e.data, entry: e, translated: true }))
  const en = new Map((await getCollection('helpEn')).map((e) => [e.id, e]))
  return mk.map((m) => {
    const e = en.get(m.id)
    return e ? { id: m.id, data: e.data, entry: e, translated: true } : { id: m.id, data: m.data, entry: m, translated: false }
  })
}
