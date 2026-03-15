'use client';
//hooks
import { useMeQuery } from '@/features/auth/api/me/useMeQuery';
//ui
import { CurrentAccount } from '@/features/auth/ui/CurrentAccount';
import { AuthButton } from '@/features/auth/ui/AuthButton';
//icons
import CircularProgress from '@mui/material/CircularProgress';

export const AccountBar: React.FC = () => {
  const {
    data,
    isFetching
  } = useMeQuery();

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
            />
            :
            <AuthButton/>
      }
    </>
  );
};