import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveCoin } from '@/features/coins/api/coin/saveCoin';
import { coinsQueryKeys } from '../coinsQueryKeys';

export const useSaveCoinMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:() => {
      const auth = queryClient.getQueryData(['auth']);

      if (!auth) {
        throw new Error('authRequired');
      }

      return saveCoin(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: coinsQueryKeys.all,
      });
    },
  });
};