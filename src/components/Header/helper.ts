export type TNavItem = {
  text: string;
  href: string;
}

export function getNavItems(): TNavItem[] {
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
  ]);
}