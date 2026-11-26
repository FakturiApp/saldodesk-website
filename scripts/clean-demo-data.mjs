// Makes the made-up company „Кони Копи ДООЕЛ" fit for the website's pictures and recordings
// (owner 2026-11-26): nothing on screen may show what the site does not sell yet.
//  - the Brother products, supplier and brand become other realistic ones (Kyocera, Epson,
//    Dymo), renamed through the app's own edit API, so the app recomputes its search fields;
//  - the old document lines that named them are renamed in the database (an issued document
//    cannot be edited through the app), then the app's own indexer re-indexes them;
//  - the Brother and fiscal modules are switched off for this company.
// It changes DATA in the throwaway picture database only — never the app's code.
//
// Safety, as shoot-app.mjs: only localhost; the signed-in company must be exactly
// „Кони Копи ДООЕЛ"; the login is read from the app repo's data/website-shots-login.txt and
// never printed. Run with the app pair up on :8150 / :5150:
//   node scripts/clean-demo-data.mjs
import { readFileSync, existsSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const APP = path.resolve(root, process.env.SHOTS_APP ?? '../Business_M-main')
const API = process.env.SHOTS_API ?? 'http://localhost:8150'
const COMPANY = 'Кони Копи ДООЕЛ'
const DB = path.join(APP, 'data', 'website-shots.db')
const fail = (m) => { console.error(`clean-demo-data — ${m}`); process.exit(1) }

if (!['localhost', '127.0.0.1'].includes(new URL(API).hostname)) fail(`only localhost, not ${API}`)
const loginFile = path.join(APP, 'data', 'website-shots-login.txt')
if (!existsSync(loginFile)) fail('no data/website-shots-login.txt in the app repo')
const login = Object.fromEntries(readFileSync(loginFile, 'utf8').trim().split('\n').map((l) => l.split(': ').map((x) => x.trim())))

let token = ''
async function call(method, url, body) {
  const res = await fetch(API + url, {
    method,
    headers: { 'Content-Type': 'application/json', 'X-Auth-Mode': 'bearer', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  const text = await res.text()
  if (!res.ok) fail(`${method} ${url} → ${res.status} ${text.slice(0, 300)}`)
  return text ? JSON.parse(text) : null
}

const user = login.username ?? login.user ?? Object.values(login)[0]
const pass = login.password ?? login.pass ?? Object.values(login)[1]
const signed = await call('POST', '/api/auth/login', { username: user, password: pass })
token = signed.token
if (!token) fail('the login gave no bearer token')
const me = await call('GET', '/api/me')
if (me.tenant_name !== COMPANY) fail(`signed in to „${me.tenant_name}", not „${COMPANY}" — stopping`)
console.log(`signed in to ${COMPANY}`)

// ── products: Brother → Kyocera / Epson / Dymo (brand ids: 4 Epson, 5 → renamed Dymo, 6 Kyocera)
const PRODUCTS = [
  { id: 5, sku: 'DEMO-PRN-2040', name: 'Kyocera ECOSYS P2040dn', brand_id: 6 },
  { id: 11, sku: 'DEMO-T-1160', name: 'Тонер Kyocera TK-1160', brand_id: 6, tags: ['тонер'] },
  { id: 27, sku: 'DEMO-M2135DN', name: 'Kyocera ECOSYS M2135dn', brand_id: 6, barcode: '0632983047189' },
  { id: 28, sku: 'DEMO-M2540DN', name: 'Kyocera ECOSYS M2540dn', brand_id: 6, barcode: '0632983047196' },
  { id: 29, sku: 'DEMO-TK1170', name: 'Тонер Kyocera TK-1170', brand_id: 6, barcode: '0632983033519' },
  { id: 30, sku: 'DEMO-EPS103BK', name: 'Мастило Epson 103 црно', brand_id: 4 },
  { id: 31, sku: 'DEMO-D1-45013', name: 'Лента Dymo D1 45013', brand_id: 5, barcode: '5411313450135' },
]
const OLD_LINES = {
  'Brother HL-1210W': 'Kyocera ECOSYS P2040dn',
  'Тонер Brother TN-1090': 'Тонер Kyocera TK-1160',
  'Brother DCP-L2600D': 'Kyocera ECOSYS M2135dn', // M2040dn is already a product of the demo data
  'Brother MFC-L2922DW': 'Kyocera ECOSYS M2540dn',
  'Тонер Brother TN-2420': 'Тонер Kyocera TK-1170',
  'Мастило Brother LC-424BK': 'Мастило Epson 103 црно',
  'Лента Brother TZe-231': 'Лента Dymo D1 45013',
}

// Saved copies (a document's supplier as it was on the day, a filed waste report) keep the old
// words: plain text swaps, most specific first.
const SNAPSHOT = [
  ['"name": "Brother International Europe Ltd", "tax_number": "GB111222333"', '"name": "Kyocera Document Solutions Europe B.V.", "tax_number": "NL801234567B01"'],
  ['"country_code": "GB", "city": "Manchester", "municipality": null, "street": "Shepley Street", "street_number": "1", "postal_code": "M34 5JD"',
    '"country_code": "NL", "city": "Hoofddorp", "municipality": null, "street": "Industrieweg", "street_number": "12", "postal_code": "2132 NP"'],
  ['Brother International Europe Ltd', 'Kyocera Document Solutions Europe B.V.'],
  ['DEMO-DCPL2600DYJ1', 'DEMO-M2135DN'], ['DEMO-MFCL2922DWYJ1', 'DEMO-M2540DN'], ['DEMO-TN2420', 'DEMO-TK1170'],
  ['DEMO-LC424BK', 'DEMO-EPS103BK'], ['DEMO-ТZE231', 'DEMO-D1-45013'], ['DEMO-PRN-1210', 'DEMO-PRN-2040'], ['DEMO-T-1090', 'DEMO-T-1160'],
]

await call('PATCH', '/api/catalog/brands/5', { name: 'Dymo' })
console.log('brand Brother → Dymo')
for (const { id, ...p } of PRODUCTS) {
  await call('PATCH', `/api/products/${id}`, p)
  console.log(`product ${id} → ${p.name}`)
}
await call('PATCH', '/api/partners/17', {
  name: 'Kyocera Document Solutions Europe B.V.', tax_number: 'NL801234567B01', code: 'ДЕМО-KYO',
  country_code: 'NL', city: 'Hoofddorp', street: 'Industrieweg', street_number: '12', postal_code: '2132 NP',
})
console.log('partner 17 → Kyocera Document Solutions Europe B.V.')
await call('PATCH', '/api/catalog/compat-models/7', { name: 'Kyocera ECOSYS P2040dn' })
console.log('compatible model → Kyocera ECOSYS P2040dn')
const machine = await call('GET', '/api/service/machines/4')
const MACHINE_FIELDS = ['partner_id', 'device_type', 'category_id', 'brand', 'brand_id', 'model', 'serial_number', 'internal_code', 'serial_unit_id', 'accessories_default', 'notes', 'custom_data']
const mbody = Object.fromEntries(MACHINE_FIELDS.filter((k) => k in machine).map((k) => [k, machine[k]]))
await call('PUT', '/api/service/machines/4', { ...mbody, brand: 'Kyocera', brand_id: 6, model: 'ECOSYS P2040dn', serial_number: 'VCF2X41234' })
console.log('service machine 4 → Kyocera ECOSYS P2040dn')

// ── issued document lines + modules: data the API does not edit. Python's sqlite3, the app's own venv.
const py = path.join(APP, '.venv', 'Scripts', 'python.exe')
const sqlFile = path.join(root, 'scripts', '.clean-demo-data.tmp.py')
writeFileSync(sqlFile, `
import sqlite3, json, sys
con = sqlite3.connect(sys.argv[1])
pairs = json.loads(sys.argv[2])
n = 0
for old, new in pairs.items():
    n += con.execute("update document_lines set description=? where tenant_id=1 and description=?", (new, old)).rowcount
n += con.execute("update document_lines set description='Kyocera ECOSYS M2135dn' where tenant_id=1 and product_id=27 and description='Kyocera ECOSYS M2040dn'").rowcount
fix_old = json.dumps({"sku": "DEMO-M2040DN", "name": "Kyocera ECOSYS M2040dn"}, ensure_ascii=False)[1:-1]
fix_new = json.dumps({"sku": "DEMO-M2135DN", "name": "Kyocera ECOSYS M2135dn"}, ensure_ascii=False)[1:-1]
for t, c in (('documents', 'partner_snapshot'), ('waste_filings', 'snapshot')):
    con.execute(f"update {t} set {c}=replace(replace({c}, ?, ?), 'DEMO-M2040DN', 'DEMO-M2135DN') where tenant_id=1", (fix_old, fix_new))
m = con.execute("update tenant_modules set enabled=0 where tenant_id=1 and module_code in ('brother','fiscal')").rowcount
s = 0
for table, col in (('documents', 'partner_snapshot'), ('waste_filings', 'snapshot')):
    for old, new in json.loads(sys.argv[3]):
        s += con.execute(f"update {table} set {col}=replace({col}, ?, ?) where tenant_id=1 and instr({col}, ?) > 0", (old, new, old)).rowcount
for old, new in pairs.items():
    s += con.execute("update waste_filings set snapshot=replace(snapshot, ?, ?) where tenant_id=1 and instr(snapshot, ?) > 0", (old, new, old)).rowcount
con.commit()
print(f"document lines renamed: {n}; modules switched off: {m}; saved copies changed: {s}")
`)
console.log(execFileSync(py, [sqlFile, DB, JSON.stringify(OLD_LINES), JSON.stringify(SNAPSHOT)], { encoding: 'utf8' }).trim())

// Re-index the documents with the app's own indexer (a maintenance call, as its docstring says).
writeFileSync(sqlFile, `
import os, sys
os.environ['DB_PATH'] = sys.argv[1]
sys.path.insert(0, sys.argv[2])
import backend.main  # registers every search entity, as the running app does
from backend.database import SessionLocal
from backend.services.search import index
db = SessionLocal()
for key in ('document', 'product', 'partner', 'compat_model', 'service_machine'):
    print(key, index.backfill_entity(db, 1, key))
print('terms', index.rebuild_terms(db, 1))
db.close()
`)
console.log(execFileSync(py, [sqlFile, 'data/website-shots.db', APP], { cwd: APP, encoding: 'utf8' }).trim())
execFileSync(process.platform === 'win32' ? 'cmd' : 'rm', process.platform === 'win32' ? ['/c', 'del', sqlFile] : [sqlFile])
console.log('done — restart the app so it reads the switched-off modules')
