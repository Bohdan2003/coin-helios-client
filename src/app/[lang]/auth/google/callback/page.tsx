'use client';
//hooks
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import {
  useSearchParams,
  useRouter
} from 'next/navigation';
//icons
import CircularProgress from '@mui/material/CircularProgress';
//utils
import { toast } from 'react-hot-toast';
import { ROUTES } from '@/shared/routes';
import { getGoogleAuthTokens } from '@/features/auth/api/google/getGoogleAuthTokens';

export default function GoogleCallbackPage() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      toast.error('Ошибка авторизации через Google');
      return router.replace(ROUTES.AUTH);
    }

    getGoogleAuthTokens(code)
      .then((data) => {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        queryClient.invalidateQueries();

        router.replace(localStorage.getItem('returnTo') || '/');
      })
      .catch((error) => {
        console.error(error);
      });

  }, [router, searchParams, queryClient]);

  return <CircularProgress
    className="absolute top-1/3 left-1/2 -translate-1/2"
    size={40}
  />;;
}