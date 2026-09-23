import { PROMISES } from '../data'

export default function Promises() {
  return (
    <section className="section" id="promises">
      <div className="container">
        <h2 className="display h2 h2--narrow">Four promises we keep.</h2>
        <div className="promises">
          {PROMISES.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
