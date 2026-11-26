// Pictures taken inside the app on the made-up „Кони Копи ДООЕЛ": the wiki's pictures
// (public/help-img/<img>, English ones in public/help-img/en/) or crops of them (an `img` that
// starts with /shots/ — scripts/crop-shots.mjs). None shows Brother or a fiscal device.

import type { Lang } from '../i18n/ui'

type T = Record<Lang, string>
export interface Shot { img: string; w: number; h: number; caption: T }

const EN_CROPS = new Set(Object.keys(import.meta.glob('/public/shots/en/*.webp')).map((p) => p.split('/').pop()!))
const EN_SHOTS = new Set(Object.keys(import.meta.glob('/public/help-img/en/*.webp')).map((p) => p.split('/').pop()!))

/** A picture's address in this language: the English one on English pages when it exists. */
export const shotSrc = (s: Pick<Shot, 'img'>, lang: Lang = 'mk') => {
  if (s.img.startsWith('/shots/')) {
    const name = s.img.slice('/shots/'.length)
    return lang !== 'mk' && EN_CROPS.has(name) ? `/shots/${lang}/${name}` : s.img
  }
  if (s.img.startsWith('/')) return s.img
  if (lang !== 'mk' && EN_SHOTS.has(s.img)) return `/help-img/${lang}/${s.img}`
  return `/help-img/${s.img}`
}
