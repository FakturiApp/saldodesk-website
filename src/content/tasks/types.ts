// A task of „Како работи": one thing a person does in the app, in steps. EVERY STEP IS ONE
// VISIBLE ACTION (owner 2026-11-26: each step has its own short video) — written with the app's
// own button names, short, in plain Macedonian and English. The steps match the task's flow in
// scripts/flows/<area>.mjs one for one; the videos are public/rec/<lang>/<task id>/<n>.webm.

import type { Lang } from '../../i18n/ui'

export type T = Record<Lang, string>

/** The icons in components/Icon.astro. */
export type TaskIcon = 'doc' | 'users' | 'money' | 'warehouse' | 'shield' | 'globe' | 'cart' | 'leaf' | 'wrench'
  | 'printer' | 'store' | 'lock' | 'pin' | 'history' | 'check' | 'arrow'

export interface Task {
  /** Latin slug, unique across all areas (it is the page anchor and the video folder). */
  id: string
  icon: TaskIcon
  /** 2–4 words. */
  title: T
  /** One sentence: what it is for. ≤ 20 words. */
  intro: T
  /** 3–6 steps, each ONE visible action, ≤ 14 words. */
  steps: T[]
  /** Only when not in every plan (and not already said by the area). */
  plan?: T
  /** 1–3 wiki slugs (src/content/help/<slug>.md) to read more. */
  help: string[]
}

export const STD: T = { mk: 'Во планот Стандард и Про', en: 'In the Standard and Pro plans' }
export const PRO: T = { mk: 'Во планот Про', en: 'In the Pro plan' }
