//hooks
import { useMutation, useQueryClient } from '@tanstack/react-query';
//types
import { TCoinStatus } from '@/features/coins/api/coin/getCoinStatus';
//utils
import { likeCoin } from '@/features/coins/api/coin/likeCoin';
import { coinsQueryKeys } from '../coinsQueryKeys';

export const useLikeCoinMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:() => {
      const auth = queryClient.getQueryData(['auth']);

      if (!auth) {
        throw new Error('authRequired');
      }

      return likeCoin(id);
    },
    onSuccess: () => {
      queryClient.setQueryData<TCoinStatus>(
        coinsQueryKeys.status(id),
        (old) => {
          if (!old) return old;

          return {
            ...old,
            liked: !old.liked,
            votes: old.liked ? old.votes - 1 : old.votes + 1,
          };
        }
      );

      queryClient.invalidateQueries({
        queryKey: coinsQueryKeys.lists(),
      });
    },
  });
};