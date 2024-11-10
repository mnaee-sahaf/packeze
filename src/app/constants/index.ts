// These are all the special features our store offers
// Like having a list of all the cool things about our toy store!
export const inclusions = [
  {
    title: 'Free Shipping',
    description: 'Free shipping for order above $150',
    icon: '/assets/icons/shipping.svg',
  },
  {
    title: 'Money Guarantee',
    description: 'Within 30 days for an exchange',
    icon: '/assets/icons/dollar.svg',
  },
  {
    title: 'Online Support',
    description: '24 hours a day, 7 days a week',
    icon: '/assets/icons/support.svg',
  },
  {
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards',
    icon: '/assets/icons/payment.svg',
  },
]

// These are all the buttons you see in your account page
// Like having different drawers for different types of toys!
export const profileNavItems = [
  {
    title: 'Personal Information',
    url: '/account',
    icon: '/assets/icons/user.svg',
  },
  {
    title: 'My Purchases',
    url: '/account/purchases',
    icon: '/assets/icons/purchases.svg',
  },
  {
    title: 'My Orders',
    url: '/account/orders',
    icon: '/assets/icons/orders.svg',
  },
  {
    title: 'Logout',
    url: '/logout',
    icon: '/assets/icons/logout.svg',
  },
]

// These are special pages that don't need the usual header and footer
// Like having some rooms that don't need all the usual decorations
export const noHeaderFooterUrls = ['/create-account', '/login', '/recover-password']
