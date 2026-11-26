// A throwaway COPY of the app's screens (frontend), used only to take pictures and recordings
// on Windows. The app's own code is never touched (owner 2026-11-26).
//
// Why: the app has `pages/documents/serialImport.ts` and `SerialImport.tsx` side by side. On
// Windows names are case-blind, so `./SerialImport` resolves to the `.ts` file and every
// single-document screen fails („Оваа страница не се вчита"). In this copy the `.ts` file is
// renamed (serialImportLib.ts) and its importers point at the new name. When the app renames it
// itself, this copy is no longer needed: use the app's own frontend (port 5150) again.
//
// Out: .app-copy/frontend (git-ignored), with links to the app's node_modules and docs/.
// Run it again after the app changes:  node scripts/app-copy.mjs
// Then start it: the `app-copy-frontend` entry in .claude/launch.json (port 5160).
import { cpSync, existsSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const APP = path.resolve(root, process.env.SHOTS_APP ?? '../Business_M-main')
const OUT = path.join(root, '.app-copy')
const FE = path.join(OUT, 'frontend')

if (existsSync(FE)) {
  // Unlink the junctions first so removing the copy never reaches into the app.
  for (const j of [path.join(FE, 'node_modules'), path.join(OUT, 'docs')]) {
    if (existsSync(j)) execFileSync('cmd', ['/c', 'rmdir', j])
  }
  rmSync(OUT, { recursive: true, force: true })
}
mkdirSync(OUT, { recursive: true })
cpSync(path.join(APP, 'frontend'), FE, { recursive: true, filter: (src) => !src.includes(`${path.sep}node_modules`) })
execFileSync('cmd', ['/c', 'mklink', '/J', path.join(FE, 'node_modules'), path.join(APP, 'frontend', 'node_modules')])
execFileSync('cmd', ['/c', 'mklink', '/J', path.join(OUT, 'docs'), path.join(APP, 'docs')])

// The one fix: the lower-case module gets a name of its own.
const docs = path.join(FE, 'src', 'pages', 'documents')
renameSync(path.join(docs, 'serialImport.ts'), path.join(docs, 'serialImportLib.ts'))
let fixed = 0
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = path.join(d, f)
    if (statSync(p).isDirectory()) { walk(p); continue }
    if (!/\.(ts|tsx)$/.test(f)) continue
    const t = readFileSync(p, 'utf8')
    const u = t.replace(/(['"])((?:\.\.?\/)+(?:[\w-]+\/)*)serialImport\1/g, (_, q, pre) => `${q}${pre}serialImportLib${q}`)
    if (u !== t) { writeFileSync(p, u); fixed++ }
  }
}
walk(path.join(FE, 'src'))
console.log(`app-copy — .app-copy/frontend ready; ${fixed} files point at serialImportLib`)
