import { useState } from 'react'

const MARK_A = 'M13 20H38A26 26 0 0 1 64 46V54A26 26 0 0 1 38 80H32A26 26 0 0 1 6 54V27A7 7 0 0 1 13 20Z'
const MARK_B = 'M62 20H68A26 26 0 0 1 94 46V73A7 7 0 0 1 87 80H62A26 26 0 0 1 36 54V46A26 26 0 0 1 62 20Z'
const MARK_CHECK = 'M42.5 50.5l5.6 5.6L58 44.2'

const MARK_COLORS = {
  paper: { a: '#0F8A56', b: '#083F2B', m: '#CDF27E', ck: '#083F2B' },
  forest: { a: '#2BBE7E', b: '#FFFFFF', m: '#CDF27E', ck: '#083F2B' },
}

let markCounter = 0

// The TrustMart symbol: two shapes (buyer, seller) whose overlap is the deal.
export function Mark({ palette = 'paper', animate = false, className, label }) {
  const [clipId] = useState(() => `mark-clip-${markCounter++}`)
  const c = MARK_COLORS[palette]
  const cls = (name) => (animate ? name : undefined)
  return (
    <svg className={className} viewBox="0 0 100 100" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs>
        <clipPath id={clipId}><path d={MARK_A} /></clipPath>
      </defs>
      <path className={cls('mark-a')} d={MARK_A} fill={c.a} />
      <path className={cls('mark-b')} d={MARK_B} fill={c.b} />
      <path className={cls('mark-m')} d={MARK_B} fill={c.m} clipPath={`url(#${clipId})`} />
      <path className={cls('mark-m')} d={MARK_CHECK} fill="none" stroke={c.ck} strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Wordmark({ palette = 'forest', className = '' }) {
  return (
    <span className={`wordmark ${className}`}>
      <Mark palette={palette} className="wordmark__mark" />
      TrustMart
    </span>
  )
}
