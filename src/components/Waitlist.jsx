import { useState } from 'react'
import { joinWaitlist } from '../api'

const WAITLIST_MESSAGES = {
  done: 'You are on the list. We will email you when TrustMart opens.',
  demo: 'Demo mode: this email was not saved. Set VITE_WAITLIST_URL to collect signups.',
  error: 'Something went wrong. Please try again.',
}

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | demo | error

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const { demo } = await joinWaitlist(email.trim())
      setStatus(demo ? 'demo' : 'done')
      if (!demo) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="waitlist" id="waitlist" onSubmit={submit}>
      <label htmlFor="wl-email">Get early access</label>
      <div className="waitlist__row">
        <input id="wl-email" type="email" required autoComplete="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn--lime" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      <p className={`waitlist__msg ${status === 'error' ? 'is-error' : ''}`} role="status">
        {WAITLIST_MESSAGES[status] || ''}
      </p>
    </form>
  )
}
