'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-hot-toast';
import { getGoogleAuthTokens } from '@/features/auth/api/google/getGoogleAuthTokens';
import { useLocalizedReplace } from '@/shared/i18n/useLocalizedReplace';
import { ROUTES } from '@/shared/routes';

type TGoogleCallbackClientProps = {
  authRequiredText: string;
  errorText: string;
};

export const GoogleCallbackClient: React.FC<TGoogleCallbackClientProps> = ({
  authRequiredText,
  errorText
}) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const localizedReplace = useLocalizedReplace();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      toast.error(authRequiredText);
      localizedReplace(ROUTES.AUTH);
      return;
    }

    getGoogleAuthTokens(code)
      .then((data) => {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        queryClient.invalidateQueries();

        localizedReplace(localStorage.getItem('returnTo') || '/');
      })
      .catch(() => {
        toast.error(errorText);
      });
  }, [authRequiredText, errorText, localizedReplace, queryClient, searchParams]);

  return (
    <CircularProgress
      className="absolute top-1/3 left-1/2 -translate-1/2"
      size={40}
    />
  );
};
