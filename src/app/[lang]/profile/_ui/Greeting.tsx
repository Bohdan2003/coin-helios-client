'use client';
//hooks
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMeQuery } from '@/features/auth/api/me/useMeQuery';
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
  const router = useRouter();
  const {
    data,
    isLoading
  } = useMeQuery();

  useEffect(() => {
    if (!isLoading && !data) {
      router.replace(ROUTES.AUTH);
    }
  }, [data, isLoading, router]);

  if(isLoading) return <CircularProgress />;

  return <span className={bigTitleCls}>{d} {data?.user.first_name}</span>;
};