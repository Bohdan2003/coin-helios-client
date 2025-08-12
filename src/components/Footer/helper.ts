type TMenuItem = {
  text: string;
  href: string;
}

export function getNavItems(): TMenuItem[] {
  return ([
    {
      text: 'Coins',
      href: '/#coins',
    },
    {
      text: 'Become a Partner',
      href: '/#partner',
    },
    {
      text: 'News',
      href: '/news',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
    {
      text: 'Profile',
      href: '/profile',
    },
    {
      text: 'Add coin',
      href: '/profile#coin',
    },
  ]);
}