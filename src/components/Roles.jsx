import { ROLES } from '../data'

const ROLE_KEYS = Object.keys(ROLES)

export default function Roles({ role, onChange }) {
  const data = ROLES[role]

  // Arrow keys move between tabs, as people expect from a tab list.
  const onKeyDown = (e) => {
    const i = ROLE_KEYS.indexOf(role)
    let next
    if (e.key === 'ArrowRight') next = ROLE_KEYS[(i + 1) % ROLE_KEYS.length]
    if (e.key === 'ArrowLeft') next = ROLE_KEYS[(i + ROLE_KEYS.length - 1) % ROLE_KEYS.length]
    if (!next) return
    e.preventDefault()
    onChange(next)
    document.getElementById(`tab-${next}`)?.focus()
  }

  return (
    <section className="section roles" id="roles">
      <div className="container">
        <h2 className="display h2 h2--narrow">One app, three sides.</h2>
        <div className="tabs" role="tablist" aria-label="Who are you?" onKeyDown={onKeyDown}>
          {ROLE_KEYS.map((key) => (
            <button key={key} id={`tab-${key}`} role="tab" aria-selected={role === key} aria-controls="role-panel" tabIndex={role === key ? 0 : -1} onClick={() => onChange(key)}>
              {ROLES[key].label}
            </button>
          ))}
        </div>
        <div className="role" id="role-panel" role="tabpanel" aria-labelledby={`tab-${role}`}>
          <h3>{data.headline}</h3>
          <ul>{data.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
