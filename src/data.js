export const NAV_LINKS = [
  { href: '#/how', label: 'How it works' },
  { href: '#/pricing', label: 'Pricing' },
  { href: '#/sell', label: 'Sell on TrustMart' },
  { href: '#/faq', label: 'FAQ' },
]

// Each step says where the money (m) and the item (i) are:
// money: 0 = you, 1 = vault, 2 = seller   item: 0 = seller, 1 = rider, 2 = you
export const STEPS = [
  { title: 'You and the seller agree on a price', text: 'Chat, negotiate, then tap Make deal. Nothing is paid yet.', you: 'iPhone 15 Pro Max for ₦980,000', seller: 'A buyer wants to make a deal', m: 0, i: 0 },
  { title: 'You pay into the vault', text: 'The money leaves your wallet but does not go to the seller. It waits in the TrustMart vault.', you: 'Payment protected', seller: 'Paid. Safe to ship.', m: 1, i: 0 },
  { title: 'A rider brings it to you', text: 'The seller hands the item to a rider. You follow the rider live on the map.', you: 'Rider is 12 minutes away', seller: 'Item picked up. Money still safe.', m: 1, i: 1 },
  { title: 'You check what arrived', text: 'Open the box and check it is what you ordered. The seller has not been paid yet, so you are in control.', you: 'Check, then decide', seller: 'Waiting for the buyer', m: 1, i: 2 },
]

export const END = {
  ok: { title: 'You confirm, and the seller gets paid', text: 'Slide to release. The vault sends the money to the seller. Deal done.', you: 'Order complete', seller: '₦980,000 received', m: 2, i: 2 },
  bad: { title: 'You report a problem, and you get your money back', text: 'The vault keeps holding the money while TrustMart reviews it. If the item is not as described, the money returns to you.', you: 'Money back in your wallet', seller: 'Item returned, no payment sent', m: 0, i: 0 },
}

export const ROLES = {
  buyer: { label: 'Buyer', headline: 'Pay first. Risk nothing.', points: ['Your money waits in the vault until you say the order arrived.', 'Chat with the seller and agree a price before you pay.', 'Follow the rider live, then check the item before you release.'] },
  seller: { label: 'Seller', headline: 'Ship knowing the money is real.', points: ['You see the payment is held before you send anything.', 'No more chasing buyers or waiting for “I will pay tomorrow”.', 'Get paid the moment the buyer confirms.'] },
  rider: { label: 'Rider', headline: 'Clear jobs. Fair fees.', points: ['See pickup, drop-off and your fee before you accept.', 'Slide to confirm each step: picked up, on the way, delivered.', 'Watch your earnings add up through the day.'] },
}

export const PROMISES = [
  'The seller never touches your money before you have your order.',
  'You never release a payment without seeing what you bought.',
  'If something is wrong, the money stays where it is until it is sorted.',
  'Every seller is verified before they can list.',
]

export const FAQ_ITEMS = [
  ['Who holds my money?', 'The TrustMart vault. It is kept apart from the seller until you confirm your order arrived.'],
  ['When does the seller get paid?', 'The moment you slide to release. Not before.'],
  ['What if the item is not what I ordered?', 'Report a problem instead of releasing. The money stays in the vault while we review it. If the item is wrong, it goes back to you.'],
  ['Is there a fee?', 'Anything you pay is shown before you slide to pay. No surprises after.'],
  ['Can I see where my order is?', 'Yes. Once the rider picks it up, you follow them live on the map with an estimated arrival time.'],
]

// Pricing page. Set a `rate` (for example '2%') once your fees are decided and it
// appears on the page. Left as null, the page only says fees are shown up front.
export const FEES = [
  { who: 'Buyers', headline: 'Free to browse and chat', rate: null, rateLabel: 'service fee',
    lines: ['Pay only for the item and delivery.', 'Any fee is shown before you slide to pay.'] },
  { who: 'Sellers', headline: 'Free to list', rate: null, rateLabel: 'when a deal completes',
    lines: ['You are charged only when a deal is done.', 'The fee is shown before you accept an order.'] },
  { who: 'Riders', headline: 'You keep your delivery fee', rate: null, rateLabel: 'platform fee',
    lines: ['See your fee before you accept a job.', 'Paid when the delivery is confirmed.'] },
]

export const EXAMPLE_DEAL = { item: 980000, delivery: 3000 }

export const SELL_BENEFITS = [
  ['See the money first', 'When a buyer pays, you see it is held in the vault before you pack anything.'],
  ['No more chasing', 'No “I will pay tomorrow”. No screenshots of transfers that never landed.'],
  ['Paid when they confirm', 'The moment the buyer confirms delivery, the money is released to you.'],
]

export const SELL_STEPS = ['Tell us about your shop', 'We verify your details', 'List your products and start dealing']
export const SELL_CATEGORIES = ['Phones and gadgets', 'Fashion', 'Home and living', 'Beauty', 'Sports', 'Something else']
