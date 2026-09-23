import { useState } from 'react'
import { joinSeller } from '../api'
import { SELL_BENEFITS, SELL_STEPS, SELL_CATEGORIES } from '../data'
import PageHead from './PageHead'

const SELL_MESSAGES = {
  done: 'Thanks. We will contact you to set up your shop.',
  demo: 'Demo mode: nothing was saved. Set VITE_SELLER_URL to collect sign-ups.',
  error: 'Something went wrong. Please try again.',
}

export default function Sell() {
  const [status, setStatus] = useState('idle') // idle | sending | done | demo | error

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const details = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      const { demo } = await joinSeller(details)
      setStatus(demo ? 'demo' : 'done')
      if (!demo) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHead title="Sell to anyone. Get paid when it arrives.">
        Open a TrustMart shop and let buyers pay with confidence. You ship, they confirm, you get paid.
      </PageHead>

      <section className="section sell">
        <div className="container sell__grid">
          <div className="sell__info">
            <ul className="benefits">
              {SELL_BENEFITS.map(([title, text]) => (
                <li key={title}><h2>{title}</h2><p>{text}</p></li>
              ))}
            </ul>
            <ol className="sell__steps">
              {SELL_STEPS.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>

          <form className="form" onSubmit={submit}>
            <h2>Open your shop</h2>
            <div className="form__grid">
              <div className="field"><label htmlFor="s-shop">Shop name</label><input id="s-shop" name="shop" required autoComplete="organization" /></div>
              <div className="field"><label htmlFor="s-name">Your name</label><input id="s-name" name="name" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="s-phone">Phone or WhatsApp</label><input id="s-phone" name="phone" type="tel" required autoComplete="tel" /></div>
              <div className="field"><label htmlFor="s-email">Email</label><input id="s-email" name="email" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="s-cat">What do you sell?</label>
                <select id="s-cat" name="category" required defaultValue="">
                  <option value="" disabled>Choose one</option>
                  {SELL_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select></div>
              <div className="field"><label htmlFor="s-city">City</label><input id="s-city" name="city" required autoComplete="address-level2" /></div>
            </div>
            <button className="btn btn--dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Open my shop'}</button>
            <p className={`form__msg ${status === 'error' ? 'is-error' : ''}`} role="status">{SELL_MESSAGES[status] || ''}</p>
          </form>
        </div>
      </section>
    </>
  )
}
