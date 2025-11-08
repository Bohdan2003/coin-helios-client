import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import {
  defaultLocale,
  locales
} from '@/shared/i18n/dictionaries';
import Negotiator from 'negotiator';


function getLocale(request: NextRequest): string {
  const negotiator = new Negotiator({
    headers: Object.fromEntries(request.headers),
  });

  const languages = negotiator.languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [ '/((?!_next).*)', '/' ],
};
