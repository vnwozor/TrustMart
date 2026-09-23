import { Mark } from './Logo'

export default function Problem() {
  return (
    <section className="section problem">
      <div className="container">
        <h2 className="display h2 h2--narrow">Online deals run on hope.</h2>
        <div className="voices">
          <blockquote className="say say--buyer">
            <small>The buyer thinks</small>
            <p>If I pay first, will it ever arrive?</p>
          </blockquote>
          <div className="voices__mid"><Mark className="voices__mark" /></div>
          <blockquote className="say say--seller">
            <small>The seller thinks</small>
            <p>If I ship first, will I ever get paid?</p>
          </blockquote>
        </div>
        <p className="punch">So we stand in the middle. Your money waits with us until you have your order.</p>
      </div>
    </section>
  )
}
