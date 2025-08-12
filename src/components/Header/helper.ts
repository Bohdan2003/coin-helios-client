type TMenuItem = {
  text: string;
  href: string;
}

export function getMenuItems(): TMenuItem[] {
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