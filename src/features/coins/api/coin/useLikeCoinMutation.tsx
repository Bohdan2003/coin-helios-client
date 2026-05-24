//hooks
import { useMutation, useQueryClient } from '@tanstack/react-query';
//utils
import { authQueryKeys } from '@/features/auth/api/authQueryKeys';
import { likeCoin } from '@/features/coins/api/coin/likeCoin';
import { coinsQueryKeys } from '../coinsQueryKeys';

export const useLikeCoinMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:() => {
      const auth = queryClient.getQueryData(authQueryKeys.me());

      if (!auth) {
        throw new Error('authRequired');
      }

      return likeCoin(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: coinsQueryKeys.all,
      });
    },
  });
};