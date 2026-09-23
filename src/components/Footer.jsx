import { Wordmark } from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__bar">
        <Wordmark />
        <nav className="footer__links" aria-label="Footer">
          <a href="#/pricing">Pricing</a>
          <a href="#/sell">Sell on TrustMart</a>
          <a href="#/faq">FAQ</a>
        </nav>
        <span>Buy with confidence.</span>
      </div>
    </footer>
  )
}
