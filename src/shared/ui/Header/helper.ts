import { ROUTES } from '@/shared/routes/routes';

export type TNavItem = {
  text: string;
  href: string;
}

export function getNavItems(): TNavItem[] {
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
  ]);
}