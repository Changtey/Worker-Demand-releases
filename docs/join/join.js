// Opens the app's WhatsApp group. Inside the Facebook or Instagram app, the
// normal group link only reloads WhatsApp's own page, so on Android the
// buttons ask Android to open WhatsApp (or Chrome) directly.
(() => {
  const CODE = 'Hr2pTgnwVZ9GSPrpVAXqG3'
  const GROUP = `https://chat.whatsapp.com/${CODE}`
  const PAGE = 'https://changtey.github.io/Worker-Demand-releases/join/'
  const agent = navigator.userAgent || ''
  const android = /Android/i.test(agent)
  const iphone = /iPhone|iPad|iPod/i.test(agent)
  const inApp = /FBAN|FBAV|FB_IAB|FBIOS|Instagram|Messenger|Threads/i.test(agent)
  const intent = (address, app) => `intent://${address.replace(/^https:\/\//, '')}#Intent;scheme=https;package=${app};` +
    `S.browser_fallback_url=${encodeURIComponent(GROUP)};end`

  const open = document.getElementById('open-whatsapp')
  const business = document.getElementById('open-business')
  const chrome = document.getElementById('open-chrome')
  if (android) {
    open.href = intent(GROUP, 'com.whatsapp')
    business.href = intent(GROUP, 'com.whatsapp.w4b')
    business.hidden = false
    if (inApp) {
      chrome.href = `intent://${PAGE.replace(/^https:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`
      chrome.hidden = false
    }
  }
  if (inApp && iphone) document.getElementById('iphone-help').hidden = false
  if (inApp && android) document.getElementById('android-help').hidden = false

  const copy = document.getElementById('copy-link')
  const result = document.getElementById('copy-result')
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(GROUP)
      result.textContent = 'Link copied. Paste it in Chrome or Safari, then tap Join group. / लिंक कॉपी हो गया। इसे Chrome या Safari में पेस्ट करें, फिर Join group दबाएँ।'
    } catch {
      result.textContent = `Copy this link: ${GROUP}`
    }
  })
})()
