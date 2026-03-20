'use client';
//hooks
import { useEffect } from 'react';
import { useMeQuery } from '@/features/auth/api/me/useMeQuery';
import { useLocalizedReplace } from '@/shared/i18n/useLocalizedReplace';
//icons
import CircularProgress from '@mui/material/CircularProgress';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { bigTitleCls } from '@/shared/classNames';
import { ROUTES } from '@/shared/routes';

export const Greeting: React.FC<{ dictionary: TDictionary['profile']['greeting'] }> = ({
  dictionary: d
}) => {
  const localizedReplace = useLocalizedReplace();
  const {
    data,
    isLoading
  } = useMeQuery();

  useEffect(() => {
    if (!isLoading && !data) {
      localizedReplace(ROUTES.AUTH);
    }
  }, [data, isLoading, localizedReplace]);

  if(isLoading) return <CircularProgress />;

  return <span className={bigTitleCls}>{d} {data?.user.first_name}</span>;
};