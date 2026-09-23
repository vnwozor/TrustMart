import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data'
import { useRoute } from '../router'
import { Wordmark } from './Logo'
import { Icon } from './Icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { page } = useRoute()
  const current = (href) => (href === `#/${page}` ? 'page' : undefined)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const wide = window.matchMedia('(min-width: 860px)')
    const onWide = () => wide.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      window.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [])

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <a href="#/" className="site-header__brand" aria-label="TrustMart home" onClick={close}>
          <Wordmark />
        </a>

        <nav className="nav-links" aria-label="Main">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} aria-current={current(l.href)}>{l.label}</a>)}
        </nav>

        <a className="btn btn--lime btn--sm nav-cta" href="#/waitlist">Get early access</a>

        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-panel" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      {open && (
        <nav id="nav-panel" className="nav-panel" aria-label="Mobile">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} aria-current={current(l.href)} onClick={close}>{l.label}</a>)}
          <a className="btn btn--lime nav-panel__cta" href="#/waitlist" onClick={close}>Get early access</a>
        </nav>
      )}
    </header>
  )
}
