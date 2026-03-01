'use client';

//hooks
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLocaleStore } from '@/shared/i18n/localeStore';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { locales, defaultLocale } from '@/shared/i18n/dictionaries';

export const LocaleInitializer = () => {
  const pathname = usePathname();
  const setLocale = useLocaleStore((s) => s.setLocale);

  useEffect(() => {
    const locale = pathname.split('/')[1] as TLocale;
    if (locales.includes(locale)) {
      setLocale(locale);
    } else {
      setLocale(defaultLocale);
    }
  }, [pathname, setLocale]);

  return null;
};
