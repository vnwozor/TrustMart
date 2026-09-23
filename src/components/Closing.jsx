import Waitlist from './Waitlist'

export default function Closing({ onPick }) {
  return (
    <section className="section closing">
      <div className="container closing__grid">
        <div>
          <h2>Every deal needs someone in the middle. Let it be us.</h2>
          <div className="cta-row">
            <button className="btn btn--lime" onClick={() => onPick('buyer')}>Buy safely</button>
            <button className="btn btn--ghost btn--on-dark" onClick={() => onPick('seller')}>Sell safely</button>
          </div>
        </div>
        <Waitlist />
      </div>
    </section>
  )
}
