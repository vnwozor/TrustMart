import { Mark } from './Logo'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <h1 className="hero__title">Let us be the middleman of all your deals.</h1>
          <p className="lead lead--on-dark">
            Buy and sell with anyone. We hold the money in the middle until the order arrives, so nobody has to trust a stranger.
          </p>
          <div className="cta-row">
            <a className="btn btn--lime" href="#/how">See how a deal works</a>
            <a className="btn btn--ghost btn--on-dark" href="#/roles">Buyers, sellers, riders</a>
          </div>
        </div>
        <Mark palette="forest" animate className="hero__mark" label="Two shapes meeting to make a deal" />
      </div>
    </section>
  )
}
