import { ROUTES } from '@/utils/router';

type TMenuItem = {
  text: string;
  href: string;
}

export function getNavItems(): TMenuItem[] {
  return ([
    {
      text: 'Coins',
      href: ROUTES.HOME + '#coins',
    },
    {
      text: 'Become a Partner',
      href: ROUTES.HOME + '#partner',
    },
    {
      text: 'News',
      href: ROUTES.NEWS,
    },
    {
      text: 'FAQ',
      href: ROUTES.HOME + '#faq',
    },
    {
      text: 'Profile',
      href: ROUTES.PROFILE,
    },
    {
      text: 'Add coin',
      href: ROUTES.PROFILE + '#addCoin',
    },
  ]);
}