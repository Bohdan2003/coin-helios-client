//hooks
import { useQuery } from '@tanstack/react-query';
//api
import { getMe } from '@/features/auth/api/me/getMe';
import { authQueryKeys } from '@/features/auth/api/authQueryKeys';

export const useMeQuery = () => useQuery({
  queryKey: authQueryKeys.me(),
  queryFn: () => getMe(),
  retry: false,
});