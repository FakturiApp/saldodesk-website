// Puts the throwaway picture database back to its clean copy (made right after
// scripts/clean-demo-data.mjs), so pictures and recordings start from the same data every time.
// Stop the app's backend first (app-shots-backend), start it again after.
//   node scripts/restore-demo-data.mjs
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const APP = path.resolve(root, process.env.SHOTS_APP ?? '../Business_M-main')
const clean = path.join(APP, 'data', 'website-shots-backup-20261126', 'website-shots-clean.db')
const db = path.join(APP, 'data', 'website-shots.db')
if (!existsSync(clean)) { console.error(`restore-demo-data — no clean copy at ${clean}`); process.exit(1) }
const py = path.join(APP, '.venv', 'Scripts', 'python.exe')
const out = execFileSync(py, ['-c', `
import sqlite3, sys
src = sqlite3.connect(sys.argv[1]); dst = sqlite3.connect(sys.argv[2])
src.backup(dst); dst.close(); src.close()
con = sqlite3.connect(sys.argv[2])
print('documents', con.execute('select count(*) from documents').fetchone()[0], '· accounts', con.execute('select count(*) from accounts').fetchone()[0])
`, clean, db], { encoding: 'utf8' })
console.log(`restore-demo-data — clean copy restored (${out.trim()})`)
