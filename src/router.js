import { useEffect, useState } from 'react'

// Hash routing, so it works on any static host with no server setup.
//   #/sell, #/pricing  -> those pages
//   #/, #/how, #/faq   -> home page, scrolled to that section id
const ROUTE_PAGES = ['sell', 'pricing']

function parseRoute() {
  const path = window.location.hash.replace(/^#\/?/, '')
  if (ROUTE_PAGES.includes(path)) return { page: path, section: null }
  return { page: 'home', section: path || null }
}

export function useRoute() {
  const [route, setRoute] = useState(parseRoute)
  useEffect(() => {
    const onChange = () => setRoute(parseRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
