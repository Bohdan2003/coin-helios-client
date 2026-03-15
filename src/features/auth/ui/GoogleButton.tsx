'use client';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getGoogleAuthUrl } from '@/features/auth/api/google/getGoogleAuthUrl';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { toast } from 'react-hot-toast';

export const GoogleButton: React.FC<{
  dictionary: {
    error: TDictionary['errors']['error'];
    googleButton: TDictionary['auth']['googleButton'];
  }
}> = ({
  dictionary: d,
}) => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: getGoogleAuthUrl,
    onSuccess: (data) => {
      router.push(data.auth_url);
    },
    onError: () => {
      toast.error(d.error);
    }
  });

  return (
    <Button
      startIcon={<GoogleIcon />}
      variant="outlined"
      onClick={() => {
        mutate();
      }}
      loading={isPending}
    >
      { d.googleButton }
    </Button>
  );
};
