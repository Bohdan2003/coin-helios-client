'use client';

import { useRouter } from 'next/navigation';
import { useLocaleStore } from '@/shared/i18n/localeStore';

export const useLocalizedReplace = () => {
  const router = useRouter();
  const locale = useLocaleStore((s) => s.locale);

  return (path: string) => router.replace(`/${locale}${path}`);
};
