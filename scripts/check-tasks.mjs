// Checks that the tasks of „Како работи" and their recording flows agree: every task listed by an
// area exists, every task has a flow with exactly as many steps, ids are unique, help slugs exist,
// and the step words keep to the length rules.   node scripts/check-tasks.mjs
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const flows = {}
for (const f of readdirSync(path.join(root, 'scripts', 'flows')).filter((x) => x.endsWith('.mjs'))) {
  Object.assign(flows, (await import(pathToFileURL(path.join(root, 'scripts', 'flows', f)).href)).FLOWS)
}
// The task files are TypeScript; read them as data with Node's type stripping.
const tasks = []
for (const f of readdirSync(path.join(root, 'src', 'content', 'tasks')).filter((x) => x.endsWith('.ts') && !['types.ts', 'index.ts'].includes(x))) {
  const src = readFileSync(path.join(root, 'src', 'content', 'tasks', f), 'utf8')
    .replace(/^import .*$/gm, '')
    .replace(/export const TASKS: Task\[\] =/, 'export const TASKS =')
    .replace(/\b(STD|PRO)\b(?=[,\s}])/g, (m) => JSON.stringify(m))
  const mod = await import(`data:text/javascript;base64,${Buffer.from(src).toString('base64')}`)
  for (const t of mod.TASKS) tasks.push({ ...t, file: f })
}
const areas = readFileSync(path.join(root, 'src', 'content', 'areas.ts'), 'utf8')
const listed = [...areas.matchAll(/tasks: \[([^\]]*)\]/g)].flatMap((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]))

const problems = []
const ids = new Set()
for (const t of tasks) {
  if (ids.has(t.id)) problems.push(`${t.id}: id used twice`)
  ids.add(t.id)
  const fl = flows[t.id]
  if (!fl) problems.push(`${t.id}: no flow`)
  else if (fl.steps.length !== t.steps.length) problems.push(`${t.id}: ${t.steps.length} steps but the flow has ${fl.steps.length}`)
  for (const h of t.help) if (!existsSync(path.join(root, 'src', 'content', 'help', `${h}.md`))) problems.push(`${t.id}: help „${h}" missing`)
  for (const [i, s] of t.steps.entries()) {
    for (const l of ['mk', 'en']) {
      if (!s[l]) problems.push(`${t.id} step ${i + 1}: no ${l}`)
      else if (s[l].split(/\s+/).length > 16) problems.push(`${t.id} step ${i + 1} (${l}): ${s[l].split(/\s+/).length} words`)
    }
  }
  if (!listed.includes(t.id)) problems.push(`${t.id}: not listed in any area`)
}
for (const id of listed) if (!ids.has(id)) problems.push(`${id}: listed in areas.ts but not written`)
for (const id of Object.keys(flows)) if (!ids.has(id)) problems.push(`${id}: a flow with no task`)
console.log(`${tasks.length} tasks, ${tasks.reduce((n, t) => n + t.steps.length, 0)} steps, ${Object.keys(flows).length} flows`)
console.log(problems.length ? problems.join('\n') : 'all agree')
process.exit(problems.length ? 1 : 0)
