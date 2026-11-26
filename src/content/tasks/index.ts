// Every task of „Како работи", from every area file in this folder.
import type { Task } from './types'

const files = import.meta.glob<{ TASKS: Task[] }>('./*.ts', { eager: true })
export const TASKS: Task[] = Object.entries(files)
  .filter(([p]) => !/\/(types|index)\.ts$/.test(p))
  .flatMap(([, m]) => m.TASKS ?? [])

const seen = new Set<string>()
for (const t of TASKS) {
  if (seen.has(t.id)) throw new Error(`tasks: the id „${t.id}" is used twice`)
  seen.add(t.id)
}

export const taskById = (id: string) => TASKS.find((t) => t.id === id)
