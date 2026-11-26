// The words a flow TYPES (a reason, a fault, a name) in the recording's language, so an English
// video does not type Macedonian text. Data that already exists (partners, products) stays as it is.
//   L('Попуст договорен подоцна', 'Discount agreed later')
const i = process.argv.indexOf('--lang')
export const LANG = i !== -1 && !process.argv.includes('--dry') ? process.argv[i + 1] : 'mk'
export const L = (mk, en) => (LANG === 'en' ? en : mk)
