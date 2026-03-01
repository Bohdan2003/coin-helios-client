'use client';
//hooks
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
//utils
import { getGoogleAuthTokens } from '@/features/auth/api/google/getGoogleAuthTokens';

export default function GoogleCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      // router.replace('/login?error=no_google_code');
      console.log('error');
      return;
    }

    getGoogleAuthTokens(code)
      .then((data) => {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        localStorage.setItem('user', JSON.stringify(data.user));

        router.replace(localStorage.getItem('returnTo') || '/');
      })
      .catch((error) => {
        console.error(error);
      });

  }, [router, searchParams]);

  return <></>;
}