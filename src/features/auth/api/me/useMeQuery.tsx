//hooks
import { useQuery } from '@tanstack/react-query';
//api
import { getMe } from '@/features/auth/api/me/getMe';

export const useMeQuery = () => useQuery({
  queryKey: ['auth'],
  queryFn: () => getMe(),
  retry: false,
});