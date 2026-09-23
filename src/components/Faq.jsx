import { FAQ_ITEMS } from '../data'

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="display h2 h2--narrow">Quick answers.</h2>
        <div className="faq__list">
          {FAQ_ITEMS.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
