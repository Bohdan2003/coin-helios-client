'use client';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getGoogleAuthUrl } from '@/features/auth/api/google/getGoogleAuthUrl';

export const GoogleButton = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: getGoogleAuthUrl,
    onSuccess: (data) => {
      router.push(data.auth_url);
    },
  });

  return (
    <Button
      startIcon={<GoogleIcon />}
      variant="outlined"
      onClick={() => mutate()}
      loading={isPending}
    >
      Continue with Google
    </Button>
  );
};
