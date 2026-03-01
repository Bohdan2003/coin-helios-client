'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useLocaleStore } from '@/shared/i18n/localeStore';
import React from 'react';

export interface LocalizedLinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  const locale = useLocaleStore((s) => s.locale);

  const localizedHref =
    typeof href === 'string'
      ? `/${locale}${href.startsWith('/') ? href : `/${href}`}`
      : { ...href, pathname: `/${locale}${href.pathname}` };

  return (
    <NextLink href={localizedHref} className={className} {...props}>
      {children}
    </NextLink>
  );
};
