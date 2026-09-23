import { FEES, EXAMPLE_DEAL } from '../data'
import PageHead from './PageHead'

const naira = (n) => '₦' + n.toLocaleString('en-US')

export default function Pricing() {
  const total = EXAMPLE_DEAL.item + EXAMPLE_DEAL.delivery
  return (
    <>
      <PageHead title="Simple. Shown before you pay.">
        No hidden charges. Whatever a deal costs, you see it before you slide to confirm.
      </PageHead>

      <section className="section">
        <div className="container">
          <div className="plans">
            {FEES.map((f) => (
              <article className="plan" key={f.who}>
                <span className="plan__who">{f.who}</span>
                <h2>{f.headline}</h2>
                {f.rate && <p className="plan__rate"><b>{f.rate}</b> {f.rateLabel}</p>}
                <ul>{f.lines.map((l) => <li key={l}>{l}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section example">
        <div className="container example__grid">
          <div>
            <h2 className="display h2 h2--narrow">What a {naira(EXAMPLE_DEAL.item)} deal looks like.</h2>
            <p className="lead" style={{ marginTop: 18 }}>The buyer pays the item and delivery into the vault. Nothing moves to the seller until the order is confirmed.</p>
          </div>
          <dl className="breakdown">
            <div><dt>Item</dt><dd>{naira(EXAMPLE_DEAL.item)}</dd></div>
            <div><dt>Delivery</dt><dd>{naira(EXAMPLE_DEAL.delivery)}</dd></div>
            <div className="breakdown__total"><dt>Held in the vault</dt><dd>{naira(total)}</dd></div>
          </dl>
        </div>
      </section>
    </>
  )
}
