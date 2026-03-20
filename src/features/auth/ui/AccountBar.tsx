'use client';
//hooks
import { usePathname } from 'next/navigation';
import { useMeQuery } from '@/features/auth/api/me/useMeQuery';
//ui
import { CurrentAccount } from '@/features/auth/ui/CurrentAccount';
import { AuthButton } from '@/features/auth/ui/AuthButton';
//icons
import CircularProgress from '@mui/material/CircularProgress';

export const AccountBar: React.FC = () => {
  const pathname = usePathname();
  const {
    data,
    isFetching
  } = useMeQuery();

  const handleReturnTo = () => {
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, '') || '/';
    localStorage.setItem('returnTo', pathWithoutLocale);
  };

  return (
    <>
      {
        isFetching
          ?
          <CircularProgress/>
          :
          data
            ?
            <CurrentAccount
              name={data.user.first_name}
              img={data.user.profile_picture}
              onClick={handleReturnTo}
            />
            :
            <AuthButton onClick={handleReturnTo}/>
      }
    </>
  );
};