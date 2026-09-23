# TrustMart website

React + Vite site for TrustMart, the escrow marketplace. Three pages: Home, Pricing, Sell on TrustMart.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

- `src/data.js`: all copy (steps, roles, promises, FAQ, fees, seller page). Edit text here.
- `src/router.js`: tiny hash router (`#/pricing`, `#/sell`, `#/faq`). No server setup needed.
- `src/components/`: one component per section or page.
- `src/styles/`: mobile-first CSS. Breakpoints: 380, 560, 640, 760, 800, 860, 900, 960px.
- `src/api.js`: waitlist and seller sign-ups. Copy `.env.example` to `.env` and set
  `VITE_WAITLIST_URL` (and optionally `VITE_SELLER_URL`) to endpoints that accept a JSON POST.
  Without them both forms run in demo mode and save nothing.

## Pricing

`FEES` in `src/data.js` has a `rate` for each side, currently `null`. Set one (for example `'2%'`)
and it shows on the Pricing page.
