// The app shows the language saved in the signed-in person's preferences (`lang`, the same
// thing „Мој профил → Јазик" sets), not the browser's. For an English picture or recording the
// scripts set it to English through the app's own preferences API, and put it back after.

/** Sets the signed-in person's language; returns what it was (undefined = the company's). */
export async function setAppLang(page, lang) {
  return page.evaluate(async (lang) => {
    const get = await fetch('/api/preferences', { credentials: 'include' })
    if (!get.ok) throw new Error(`preferences: ${get.status}`)
    const prefs = (await get.json()).data ?? {}
    const before = prefs.lang
    const data = { ...prefs }
    if (lang === undefined) delete data.lang
    else data.lang = lang
    const put = await fetch('/api/preferences', {
      method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data }),
    })
    if (!put.ok) throw new Error(`preferences: ${put.status} ${await put.text()}`)
    return before
  }, lang)
}
