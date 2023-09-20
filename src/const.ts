export const Category = [ 
  {
    href: '/',
    literal: 'Shopi',
  },
  {
    href: '/',
    literal: 'All',
  },
  {
    href: '/electronics',
    literal: 'Electronics',
  },
  {
    href: '/jewelery',
    literal: 'Jewelery',
  },
  {
    href: '/mens-clothing',
    literal: "men's clothing",
  },
  {
    href: '/womens-clothing',
    literal: "women's clothing",
  },
] as const;

export type CategoryType = typeof Category[keyof typeof Category];

export const Order = [  
  {
    href: '/my-orders',
    literal: 'My Orders',
  },
  {
    href: '/my-order',
    literal: 'My Order',
  },
  {
    href: '/my-account',
    literal: 'My Account',
  },
  {
    href: '/sign-in',
    literal: 'Sign In',
  }
] as const;

export type OrderType = typeof Order[keyof typeof Order];

