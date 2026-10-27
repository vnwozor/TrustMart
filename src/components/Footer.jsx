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
      <p className="container footer__legal">TrustMart is operated by TRUSTMART DIGITAL VENTURES LTD (RC 9931691), registered in Nigeria.</p>
    </footer>
  )
}
