//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';
import { ROUTES } from '@/shared/routes';

export type TNavItem = {
  text: string;
  href: string;
}

export async function getNavItems( lang: TLocale ): Promise<TNavItem[]> {
  const { links: l } = await getDictionary(lang);

  return ([
    {
      text: l['coins'],
      href: ROUTES.HOME + '#coins',
    },
    {
      text: l['becomePartner'],
      href: ROUTES.BECOME_A_PARTNER,
    },
    {
      text: l['news'],
      href: ROUTES.NEWS,
    },
    {
      text: l['faq'],
      href: ROUTES.HOME + '#faq',
    },
  ]);
}