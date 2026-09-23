// Sign-ups. Set these in .env to endpoints that accept a JSON POST.
// Without them the forms run in demo mode and save nothing.
const API_WAITLIST_URL = import.meta.env.VITE_WAITLIST_URL
const API_SELLER_URL = import.meta.env.VITE_SELLER_URL || API_WAITLIST_URL

async function apiPost(url, body) {
  if (!url) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { demo: true }
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error('Request failed')
  return { demo: false }
}

export const joinWaitlist = (email) => apiPost(API_WAITLIST_URL, { type: 'waitlist', email })
export const joinSeller = (details) => apiPost(API_SELLER_URL, { type: 'seller', ...details })
