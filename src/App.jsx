import { useEffect, useState } from 'react'
import { useRoute } from './router'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import DealStage from './components/DealStage'
import Roles from './components/Roles'
import Promises from './components/Promises'
import Faq from './components/Faq'
import Closing from './components/Closing'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Sell from './components/Sell'

export default function App() {
  const [role, setRole] = useState('buyer')
  const { page, section } = useRoute()

  // New page -> top. Home with a section (#/faq) -> scroll to it.
  useEffect(() => {
    if (page === 'home' && section) {
      requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }))
    } else {
      window.scrollTo(0, 0)
    }
  }, [page, section])

  // Used by the closing buttons: switch tab, then go to that section.
  const pickRole = (next) => {
    setRole(next)
    if (window.location.hash === '#/roles') document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' })
    else window.location.hash = '#/roles'
  }

  return (
    <>
      <Nav />
      <main>
        {page === 'sell' && <Sell />}
        {page === 'pricing' && <><Pricing /><Closing onPick={pickRole} /></>}
        {page === 'home' && (
          <>
            <Hero />
            <Problem />
            <DealStage />
            <Roles role={role} onChange={setRole} />
            <Promises />
            <Faq />
            <Closing onPick={pickRole} />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
